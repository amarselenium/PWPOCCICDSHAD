# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginpage.spec.ts >> Login Page Tests >> forgot password link visibility test
- Location: tests/loginpage.spec.ts:17:9

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "opencart/index.php?route=account/login", waiting until "load"

```

# Test source

```ts
  1  | import { Locator, Page } from '@playwright/test';
  2  | import BasePage from './BasePage';
  3  | 
  4  | export class LoginPage extends BasePage {
  5  |     // private locators
  6  | 
  7  |     private readonly emailInput: Locator;
  8  |     private readonly passwordInput: Locator;
  9  |     private readonly loginButton: Locator;
  10 |     private readonly forgotPasswordLink: Locator;
  11 |     private readonly logo: Locator;
  12 | 
  13 |     constructor(page: Page) {
  14 |         super(page);
  15 |         this.emailInput = page.getByRole('textbox', { name: 'E-Mail Address' });
  16 |         this.passwordInput = page.getByRole('textbox', { name: 'Password' });
  17 |         this.loginButton = page.getByRole('button', { name: 'Login' });
  18 |         this.forgotPasswordLink = page.getByRole('link', { name: 'Forgotten Password' }).first();
  19 |         this.logo = page.getByAltText('naveenopencart')
  20 |     };
  21 | 
  22 |     async goToLoginPage(): Promise<void> {
> 23 |         await this.page.goto('opencart/index.php?route=account/login');
     |                         ^ Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
  24 |     }
  25 | 
  26 |     async getLoginPageTitle(): Promise<string> {
  27 |         return this.page.title();
  28 |     }
  29 | 
  30 |     async isForgotPasswordLinkVisible(): Promise<boolean> {
  31 |         return this.forgotPasswordLink.isVisible();
  32 |     }
  33 | 
  34 |     async isLogoVisible(): Promise<boolean> {
  35 |         return this.logo.isVisible();
  36 |     }
  37 | 
  38 |     async login(email: string, password: string): Promise<void> {
  39 |         console.log(`Logging in with email: ${email} and password: ${password}`);
  40 |         await this.emailInput.fill(email);
  41 |         await this.passwordInput.fill(password);
  42 |         await this.loginButton.click();
  43 |     }
  44 | 
  45 | }
```