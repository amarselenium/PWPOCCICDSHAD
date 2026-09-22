import {test as BaseTest} from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";

type TestFixtures = {
    homePage: HomePage;
    loginPage: LoginPage;
};

export let test = BaseTest.extend<TestFixtures>({

    loginPage: async ({ page }, use) => {
        let loginPage = new LoginPage(page);
        await use(loginPage);
    },
    homePage: async ({ page }, use) => {
        let homePage = new HomePage(page);
        await use(homePage);
    }
});

export { expect } from "@playwright/test";