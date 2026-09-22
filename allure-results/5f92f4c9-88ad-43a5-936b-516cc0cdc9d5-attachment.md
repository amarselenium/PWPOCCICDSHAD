# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/putdelete_generic.spec.ts >> User API Tests >> create and update user
- Location: tests/api/putdelete_generic.spec.ts:29:9

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: [Function status]
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
  12 | async function createUser(apiHelper: any) {
  13 |     const requestBody = {
  14 |         name: 'John Doe',
  15 |         email: `johndoe${Date.now()}@example.com`,
  16 |         gender: 'male',
  17 |         status: 'active',
  18 |     };
  19 | 
  20 |     const response = await apiHelper.post('/public/v2/users', requestBody, AUTHORIZATION.headers);
  21 |     expect(response.status).toBe(201);
  22 |     expect(response.body.name).toBe(requestBody.name);
  23 |     console.log('POST Response:', response.body);
  24 | 
  25 |     return response.body;
  26 | }
  27 | 
  28 | test.describe('User API Tests', () => {
  29 |     test('create and update user', async ({ apiHelper }) => {
  30 |         const requestBody = {
  31 |             name: 'Jane Doe',
  32 |             email: `janedoe${Date.now()}@example.com`,
  33 |             gender: 'female',
  34 |             status: 'active',
  35 |         };
  36 | 
  37 |         const userResponse = await createUser(apiHelper);
  38 |         const updatedResponse = await apiHelper.put(`/public/v2/users/${userResponse.id}`, requestBody, AUTHORIZATION.headers);
  39 |         const fetchedResponse = await apiHelper.get(`/public/v2/users/${userResponse.id}`, AUTHORIZATION.headers);
  40 | 
  41 |         expect(updatedResponse.status).toBe(200);
  42 |         expect(updatedResponse.body.name).toBe(requestBody.name);
> 43 |         expect(fetchedResponse.status).toBe(200);
     |                                        ^ Error: expect(received).toBe(expected) // Object.is equality
  44 |         console.log('PUT Response:', updatedResponse.body);
  45 |     });
  46 | });    
```