# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/users.apifixtures.spec.ts >> PUT API Tests >> update user
- Location: tests/api/users.apifixtures.spec.ts:55:9

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 404
```

# Test source

```ts
  1  | import { test, expect } from "../../src/fixtures/Apifixtures";
  2  | 
  3  | // Get API token
  4  | const TOKEN = process.env.API_KEY;
  5  | 
  6  | const AUTHORIZATION = {
  7  |     headers: {
  8  |         Authorization: `Bearer ${TOKEN}`,
  9  |     },
  10 | };
  11 | 
  12 | // GET call
  13 | test.describe("GET API Tests", () => {
  14 |     test("get users list", async ({ apiHelper }) => {
  15 |         const response = await apiHelper.get(
  16 |             "/public/v2/users",
  17 |             AUTHORIZATION.headers
  18 |         );
  19 | 
  20 |         expect(response.status()).toBe(200);
  21 |         expect(response.statusText()).toBe("OK");
  22 |         const jsonResponseBody = await response.json();
  23 |         expect(jsonResponseBody.length).toBeGreaterThan(0);
  24 |         console.log(jsonResponseBody);
  25 |     });
  26 | });
  27 | 
  28 | // POST call
  29 | test.describe("POST API Tests", () => {
  30 |     test("create user", async ({ apiHelper }) => {
  31 |         const requestBody = {
  32 |             name: "John Doe",
  33 |             email: `johndoe${Date.now()}@example.com`,
  34 |             gender: "male",
  35 |             status: "active",
  36 |         };
  37 | 
  38 |         const response = await apiHelper.post(
  39 |             "/public/v2/users",
  40 |             requestBody,
  41 |             AUTHORIZATION.headers
  42 |         );
  43 | 
  44 |         // expect(response.status).toBe(201);
  45 | 
  46 |         expect(response.body.name).toBe(requestBody.name);
  47 |         console.log(response.body);
  48 |         const responseBodyId = response.body.id;
  49 |         console.log(responseBodyId);
  50 |     });
  51 | });
  52 | 
  53 | // PUT call
  54 | test.describe("PUT API Tests", () => {
  55 |     test("update user", async ({ apiHelper }) => {
  56 |         const requestBody = {
  57 |             name: "John Doe Updated",
  58 |             email: `johndoeupdated${Date.now()}@example.com`,
  59 |         };
  60 | 
  61 |         const response = await apiHelper.put(
  62 |             "/public/v2/users/123",
  63 |             requestBody,
  64 |             AUTHORIZATION.headers
  65 |         );
  66 | 
> 67 |         expect(response.status).toBe(200);
     |                                 ^ Error: expect(received).toBe(expected) // Object.is equality
  68 |         expect(response.body.name).toBe(requestBody.name);
  69 |         console.log(response.body);
  70 |     });
  71 | });
```