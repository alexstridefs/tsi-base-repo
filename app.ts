import express, { Request, Response } from 'express';
import { sendRequest } from './request_sender';

const app: express.Application = express();
const port: number = 3000;

app.use(express.json());

app.get('/config', (req: Request, res: Response) => {
  res.status(501).json({ message: "Not Implemented" });
});

app.post('/config', (req: Request, res: Response) => {  
  res.status(501).json({ message: "Not Implemented" });
});

app.delete('/config', (req: Request, res: Response) => {
  res.status(501).json({ message: "Not Implemented" });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});


