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
  1  | import {test, expect} from "playwright/test";
  2  | 
  3  | let AUTH_TOKEN = '2e13350cf6baa02f79d5c06820828d58b063f08f34495214270a275e81878ebc';
  4  | 
  5  | test('get user test', async ({ request }) => {
  6  |     let response = await request.get('https://gorest.co.in/public/v2/users', {
  7  |         headers: { Authorization: AUTH_TOKEN }
  8  |     });
  9  | 
  10 |     let jsonResponsebody = await response.json();
  11 |     console.log(jsonResponsebody);
> 12 |     expect(response.status()).toBe(200);
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  13 |     expect(response.statusText()).toBe("OK");
  14 |     expect(jsonResponsebody.length).toBeGreaterThan(0);
  15 | });
  16 |     
```