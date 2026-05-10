import { BasePage } from './BasePage';

export class HomePage extends BasePage {
    async navigateToHomePage() {
        await this.page.goto('/');
        await this.handleCookies();
    }
    async handleCookies() {
        const consentButton = this.page.getByRole('button', { name: 'Consent' });
        if (await consentButton.isVisible()) {
            await consentButton.click();
        }
    }
    async clickProductsButton() {
        await this.page.getByRole('link', { name: 'Products' }).click();
    }
    async clickContactUsButton() {
        await this.page.getByRole('link', { name: 'Contact us' }).click();
    }
    async clickCartButton() {
        await this.page.getByRole('link', { name: 'Cart' }).click();
    }
}