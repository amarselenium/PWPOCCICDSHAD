# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/users.api.spec.ts >> get user test
- Location: tests/api/users.api.spec.ts:5:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 401
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | const AUTH_TOKEN = process.env.GOREST_TOKEN!;
  4  | 
  5  | test('get user test', async ({ request }) => {
  6  |   const response = await request.get(
  7  |     'https://gorest.co.in/public/v2/users',
  8  |     {
  9  |       headers: {
  10 |         Authorization: `Bearer ${AUTH_TOKEN}`,
  11 |       },
  12 |     }
  13 |   );
  14 | 
  15 |   const jsonResponseBody = await response.json();
  16 | 
> 17 |   expect(response.status()).toBe(200);
     |                             ^ Error: expect(received).toBe(expected) // Object.is equality
  18 |   expect(response.statusText()).toBe('OK');
  19 |   expect(jsonResponseBody.length).toBeGreaterThan(0);
  20 | });
```