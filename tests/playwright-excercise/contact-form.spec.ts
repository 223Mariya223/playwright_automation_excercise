import { expect } from '@playwright/test';
import { test } from '../../source/playwright-excercise/index';
test('Contact Form Submission', async ({ homePage, contactPage }) => {
    await homePage.navigateToHomePage();
    await homePage.clickContactUsButton();
    await contactPage.fillContactForm(
        'Mariya John',
        'mariyajohn@234.com',
        'Can I get a discount on my next purchase?',
        'I am a regular customer and would like to know if there are any discounts available for my next purchase. Thank you!'
    );
    await contactPage.acceptSubmitDialog();
    await contactPage.submitForm();
    const successMessage = contactPage.getSuccessMessage();
    await expect(successMessage).toBeVisible();
});