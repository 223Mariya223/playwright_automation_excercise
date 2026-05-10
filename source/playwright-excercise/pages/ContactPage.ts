import { expect } from '@playwright/test';
import { BasePage } from './BasePage';
export class ContactPage extends BasePage {
    async navigateToContactPage() {
        await this.page.getByRole('link', { name: 'Contact us' }).click();
    }
    async fillContactForm(
        name: string,
        email: string,
        subject: string,
        message: string
    ) {
        await this.page.getByTestId('name').fill(name);
        await this.page.getByTestId('email').fill(email);
        await this.page.getByTestId('subject').fill(subject);
        await this.page.getByPlaceholder('Your Message Here').fill(message);
    }
    async acceptSubmitDialog() {
        this.page.once('dialog', async (dialog) => {
            expect(dialog.message()).toContain('Press OK to proceed!');
            await dialog.accept();
        });
    }
    async submitForm() {
        await this.page.getByTestId('submit-button').click();
    }

    getSuccessMessage() {
        return this.page.locator('#contact-page').getByText('Success! Your details have been submitted successfully.');
    }
}