import { Locator, Page } from '@playwright/test';
import BasePage from './BasePage';

export class LoginPage extends BasePage {
    // private locators

    private readonly emailInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;
    private readonly forgotPasswordLink: Locator;
    private readonly logo: Locator;

    constructor(page: Page) {
        super(page);
        this.emailInput = page.getByRole('textbox', { name: 'E-Mail Address' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.forgotPasswordLink = page.getByRole('link', { name: 'Forgotten Password' }).first();
        this.logo = page.getByAltText('naveenopencart')
    };

    async goToLoginPage(): Promise<void> {
        await this.page.goto('opencart/index.php?route=account/login');
    }

    async getLoginPageTitle(): Promise<string> {
        return this.page.title();
    }

    async isForgotPasswordLinkVisible(): Promise<boolean> {
        return this.forgotPasswordLink.isVisible();
    }

    async isLogoVisible(): Promise<boolean> {
        return this.logo.isVisible();
    }

    async login(email: string, password: string): Promise<void> {
        console.log(`Logging in with email: ${email} and password: ${password}`);
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

}