# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/users.apifixtures.spec.ts >> POST API Tests >> create user
- Location: tests/api/users.apifixtures.spec.ts:23:9

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 201
Received: 401
```

# Test source

```ts
  1  | import { test, expect as BaseTest, expect } from "../../src/fixtures/Apifixtures";
  2  | //get call
  3  | const TOKEN = process.env.API_KEY;
  4  | let AUTHORIZATION = { headers: { Authorization: `Bearer ${TOKEN}` } };
  5  | 
  6  | 
  7  | //GET call
  8  | test.describe("GET API Tests", () => {
  9  |     test('get users list', async ({ apiHelper }) => {
  10 | 
  11 |        let response = await apiHelper.get('/public/v2/users', AUTHORIZATION.headers);
  12 |         expect(response.status()).toBe(200);
  13 |         expect(response.statusText()).toBe('OK');
  14 |         const jsonResponseBody = await response.json();
  15 |         expect(jsonResponseBody.length).toBeGreaterThan(0);
  16 |         console.log(jsonResponseBody);
  17 |     });
  18 | });
  19 | 
  20 | 
  21 | //POST call
  22 | test.describe("POST API Tests", () => {
  23 |     test('create user', async ({ apiHelper }) => {
  24 |         const requestBody = {
  25 |             name: 'John Doe',
  26 |             email: `johndoe${Date.now()}@example.com`,
  27 |             gender: 'male', 
  28 |             status: 'active',
  29 |         };
  30 | 
  31 |         let response = await apiHelper.post('/public/v2/users', AUTHORIZATION.headers, requestBody);
> 32 |         expect(response.status).toBe(201);
     |                                 ^ Error: expect(received).toBe(expected) // Object.is equality
  33 |         expect(response.body.name).toBe(requestBody.name);
  34 |         console.log(response.body);
  35 |         let responsebodyid = response.body.id;
  36 |         console.log(responsebodyid);
  37 |     });
  38 | });
  39 | 
  40 | 
```