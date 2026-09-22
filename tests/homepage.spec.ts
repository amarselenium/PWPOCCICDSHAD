import{test,expect} from "@playwright/test";
import { HomePage } from "../src/pages/HomePage";
import { LoginPage } from "../src/pages/LoginPage";

test.describe("Home Page Tests", () => {
    let homePage: HomePage;
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        loginPage = new LoginPage(page);
        await loginPage.goToLoginPage();
        await loginPage.login(process.env.USERNAME!, process.env.PASSWORD!);
        //await loginPage.login("pwtestbatch@open.com", "pw123");
    });


    test('logout link visibility test', async ({ page }) => {
        const isVisible = await homePage.isLogoutLinkVisible();
        expect(isVisible).toBe(true);
    });

    test('headers count test', async ({ page }) => {
        const count = await homePage.getHeadersCount();
        expect.soft(count).toBe(4);
    });

    test('page headers test', async ({ page }) => {
        const headers = await homePage.getpageHeaders();
        expect.soft(headers).toEqual(['My Account', 'My Orders', 'My Affiliate Account', 'Newsletter']);
    });

    test('homepage title test', async ({ page }) => {
        const title = await homePage.gethomepageTitle();
        expect(title).toBe("My Account");
    });
});