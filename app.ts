import express, { Request, Response } from 'express';
import { sendRequest } from './request_sender';

const app: express.Application = express();
const port: number = 3000;

/**
 * Problem: We would like a server which acts as a continuous testing agent. It should accept a config containing a
 * url and a number of callsPerSecond and should send traffic to that URL at the specified rate.
 * 
 * To send in a new config, the server should accept a POST request with a body which looks like:
 * e.g `POST { "url": "https://example.com/api/whatever", "callsPerSecond": 2}`
 * 
 * You should be able to send a GET request to the same endpoint to get back the current config.
 * 
 * Sending a DELETE request to the `/config` endpoint should stop the traffic.
 * 
 */

interface Config {
    url: string;
    callsPerSecond: number;
}


let currentConfig: Config | null = null;
let currentIntervalID: NodeJS.Timeout | null = null;

app.use(express.json());

app.get('/config', (req: Request, res: Response) => {
  res.json(currentConfig);
});

app.post('/config', (req: Request, res: Response) => {
  // Start the traffic 
  if (currentIntervalID) {
    stopTraffic();
  }

  const newConfig = req.body as Config;
  currentIntervalID = setInterval(async () => {
    const responseStatus = await sendRequest(newConfig.url);
    console.log(new Date().toLocaleString(), "Received response with status code", responseStatus);
    
  }, 1000 / newConfig.callsPerSecond);
  currentConfig = newConfig;

  res.json(currentConfig);
});

app.delete('/config', (req: Request, res: Response) => {
  stopTraffic();
  res.sendStatus(204);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

function stopTraffic() {
    if (currentIntervalID) clearInterval(currentIntervalID);
    currentConfig = null;
}

