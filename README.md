### Problem Description

**Objective**: Implement a server that acts as a continuous testing agent for assessing the stability of web services under specific traffic conditions.

**Functionality**:
- The server should manage configurations that dictate the target URL and traffic rate (calls per second).
- These configurations are controlled through HTTP requests to manage and monitor the server's behavior.

### Server Endpoints

1. **POST `/config`**
   - **Purpose**: Submit a new configuration for the server.
   - **Payload Example**:
     ```json
     {
       "url": "https://example.com/api/whatever",
       "callsPerSecond": 2
     }
     ```
   - **Behavior**: Upon receiving the config, the server should start sending requests to the specified URL at the defined rate.

2. **GET `/config`**
   - **Purpose**: Retrieve the current configuration.
   - **Returns**: JSON object detailing the current URL and rate of calls per second.
   
3. **DELETE `/config`**
   - **Purpose**: Stop the current testing and reset the configuration.
   - **Behavior**: Ceases traffic to the previously set URL and clears the configuration. Returns a 204 No Content response when successful.

### Implementation Notes

- Use the provided `sendRequest` function to handle outgoing traffic to the configured URL.

### Server Setup

- The server is set up using Express.js and listens on port 3000.
- Start the server by running `npm run serve` from the terminal. This will check Typescript types and then run the server.

### Testing

There are some `curl` commands which could be used for testing the server:

POST request:

```
curl -X POST http://localhost:3000/config \
     -H "Content-Type: application/json" \
     -d '{"url": "https://example.com/api/whatever", "callsPerSecond": 2}'

```

GET request:

```
curl -X GET http://localhost:3000/config
```

DELETE request:

```
curl -X DELETE http://localhost:3000/config
```