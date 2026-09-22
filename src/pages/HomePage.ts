import { Locator, Page } from '@playwright/test';
import BasePage from './BasePage';


export class HomePage extends BasePage {
    // private locators
    private readonly logoutLink: Locator;
    private readonly headers: Locator;

    constructor(page: Page) {
        super(page);
         this.logoutLink = page.getByRole('link', { name: 'Logout' });
        this.headers = page.locator('h2');
    }

    async isLogoutLinkVisible(): Promise<boolean> {
        return this.logoutLink.isVisible();
    }

    async getHeadersCount(): Promise<number> {
        return this.headers.count();
    }
    async getpageHeaders(): Promise<string[]> {
       return await this.headers.allInnerTexts();
    }
    async gethomepageTitle(): Promise<string> {
        return this.page.title();
    }
}