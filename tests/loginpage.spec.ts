import{test,expect} from "@playwright/test";
import { LoginPage } from "../src/pages/LoginPage";

test.describe("Login Page Tests", () => {
    let loginPage: LoginPage;


    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goToLoginPage();
    });

    test('login page title test', async ({ page }) => {
        const title = await loginPage.getLoginPageTitle();
        expect(title).toBe("Account Login");
    });

    test('forgot password link visibility test', async ({ page }) => {
        const isVisible = await loginPage.isForgotPasswordLinkVisible();
        expect(isVisible).toBe(true);
    });


    
})