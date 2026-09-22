import{test,expect} from "../src/fixtures/pagefixures";

test.describe("Home Page Tests with Fixtures", () => {

    test.beforeEach(async ({ loginPage,homePage }) => {
    await loginPage.goToLoginPage();
     await loginPage.login("pwtestbatch@open.com", "pw123");
    });
    test('logout link visibility test', async ({ loginPage, homePage }) => {
        const isVisible = await homePage.isLogoutLinkVisible();
        expect(isVisible).toBe(true);
    }); 
    test('headers count test', async ({  homePage }) => {
        const count = await homePage.getHeadersCount();
        expect.soft(count).toBe(4);
    });
    test('page headers test', async ({  homePage }) => {
        const headers = await homePage.getpageHeaders();
        expect.soft(headers).toEqual(['My Account', 'My Orders', 'My Affiliate Account', 'Newsletter']);
    });
    test('homepage title test', async ({  homePage }) => {
        const title = await homePage.gethomepageTitle();
        expect(title).toBe("My Account");
    });
});