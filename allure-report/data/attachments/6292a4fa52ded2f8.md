# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: homepagefixture.spec.ts >> Home Page Tests with Fixtures >> headers count test
- Location: tests/homepagefixture.spec.ts:10:9

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 4
Received: 0
```

# Test source

```ts
  1  | import{test,expect} from "../src/fixtures/pagefixures";
  2  | 
  3  | test.describe("Home Page Tests with Fixtures", () => {
  4  |     test('logout link visibility test', async ({ loginPage, homePage }) => {
  5  |         await loginPage.goToLoginPage();
  6  |         await loginPage.login("pwtestbatch@open.com", "pw123");
  7  |         const isVisible = await homePage.isLogoutLinkVisible();
  8  |         expect(isVisible).toBe(true);
  9  |     }); 
  10 |     test('headers count test', async ({  homePage }) => {
  11 |         const count = await homePage.getHeadersCount();
> 12 |         expect.soft(count).toBe(4);
     |                            ^ Error: expect(received).toBe(expected) // Object.is equality
  13 |     });
  14 |     test('page headers test', async ({  homePage }) => {
  15 |         const headers = await homePage.getpageHeaders();
  16 |         expect.soft(headers).toEqual(['My Account', 'My Orders', 'My Affiliate Account', 'Newsletter']);
  17 |     });
  18 |     test('homepage title test', async ({  homePage }) => {
  19 |         const title = await homePage.gethomepageTitle();
  20 |         expect(title).toBe("My Account");
  21 |     });
  22 | });
```