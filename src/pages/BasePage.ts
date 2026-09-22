import { Page } from "@playwright/test"

export default class BasePage {
    // private locators
    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    };
}