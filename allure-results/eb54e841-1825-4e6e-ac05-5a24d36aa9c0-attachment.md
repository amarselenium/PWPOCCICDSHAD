# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/users.apifixtures.spec.ts >> get user details test
- Location: tests/api/users.apifixtures.spec.ts:5:5

# Error details

```
TypeError: apiHelper.getUserDetails is not a function
```

# Test source

```ts
  1  | import { test, expect as BaseTest } from "../../src/fixtures/Apifixtures";
  2  | //get call
  3  | const TOKEN = process.env.API_KEY;
  4  | let AUTHORIZATION = `Bearer ${TOKEN}`;
  5  | test('get user details test', async ({ apiHelper }) => {
> 6  |     const response = await (apiHelper as any).getUserDetails(AUTHORIZATION);
     |                                               ^ TypeError: apiHelper.getUserDetails is not a function
  7  | 
  8  | });
  9  | 
  10 | 
  11 | 
  12 | 
```