# Extension 1

You now should have a server which sends traffic to a URL at a specific rate. This server logs a single line every time it sends a request, to provide observability into what it is doing and what response it got back from calling the URL.

This would be impractical for higher rates because it would generate too many log lines. **Your second task is to change the behaviour of the server, so that it emits a structured log line every five seconds, rather than after every call.**

The new log lines should be of the form:

```ts
interface LogLine {
    successCount: number
    failureCount: number
    total: number
}
```

The success and failure counts in the above log message should reflect the successful and failed requests made to the URL the total is just the sum of successful and failed requests.