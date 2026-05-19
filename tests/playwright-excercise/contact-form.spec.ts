import { expect } from '@playwright/test';
import { test } from '../../source/playwright-excercise/index';
import { TEST_DATA } from '../../data/testdata';
test('Contact Form Submission', async ({ homePage, contactPage }) => {
    await homePage.navigateToHomePage();
    await homePage.clickContactUsButton();
    await contactPage.fillContactForm(
        TEST_DATA.contact.name,
        TEST_DATA.contact.email,
        TEST_DATA.contact.subject,
        TEST_DATA.contact.message
    );
    await contactPage.acceptSubmitDialog();
    await contactPage.submitForm();
    const successMessage = contactPage.getSuccessMessage();
    await expect(successMessage).toBeVisible();
});