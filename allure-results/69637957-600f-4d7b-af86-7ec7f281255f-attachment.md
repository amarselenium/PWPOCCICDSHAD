# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginpagefixture.spec.ts >> Login Page Tests >> login page title test
- Location: tests/loginpagefixture.spec.ts:4:9

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Account Login"
Received: ""
```

# Test source

```ts
  1  | import { test, expect } from "../src/fixtures/pagefixures";
  2  | 
  3  | test.describe("Login Page Tests", () => {
  4  |     test('login page title test', async ({ loginPage }) => {
  5  |         const title = await loginPage.getLoginPageTitle();
> 6  |         expect(title).toBe("Account Login");
     |                       ^ Error: expect(received).toBe(expected) // Object.is equality
  7  |     });
  8  | 
  9  |     test('forgot password link visibility test', async ({ loginPage }) => {
  10 |         const isVisible = await loginPage.isForgotPasswordLinkVisible();
  11 |         expect(isVisible).toBe(true);
  12 |     });
  13 |     
  14 | })
```