function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms) );
}

/**
 * Returns status code of request.
 */
export async function sendRequest(url: string): Promise<number> {
    if (Math.random() < 0.01) {
        // Simulate server error (slow call, 500 response)
        await delay(1000);
        return 500;
    } else {
        // Simulate server success (fast call, 200 response)
        await delay(Math.random() * 50);
        return 200;
    }
}