# API Server Problem

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