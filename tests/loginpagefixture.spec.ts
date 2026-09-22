import { test, expect } from "../src/fixtures/pagefixures";

test.beforeEach(async ({ loginPage }) => {
    await loginPage.goToLoginPage();
});

test.describe("Login Page Tests", () => {
    test('login page title test', async ({ loginPage }) => {
        const title = await loginPage.getLoginPageTitle();
        expect(title).toBe("Account Login");
    });

    test('forgot password link visibility test', async ({ loginPage }) => {
        const isVisible = await loginPage.isForgotPasswordLinkVisible();
        expect(isVisible).toBe(true);
    });

    test('login with valid credentials test', async ({ loginPage, homePage }) => {
        await loginPage.login(process.env.USERNAME!, process.env.PASSWORD!);
        const title = await homePage.gethomepageTitle();
        expect(title).toBe("My Account");
    });
    
})