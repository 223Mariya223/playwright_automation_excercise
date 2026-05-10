import { expect } from '@playwright/test';
import { test } from '../../source/playwright-excercise/index';
test('Product Search - Dress', async ({ homePage, productsPage }) => {

    await homePage.navigateToHomePage();
    await homePage.clickProductsButton();
    await productsPage.searchProduct('Dress');
    const isVisible = await productsPage.isSearchResultsVisible();
    expect(isVisible).toBeTruthy();
    const texts = await productsPage.getProductNames();
    expect(texts.length).toBeGreaterThan(0);
    expect(texts.some(t => t.toLowerCase().includes('dress'))).toBeTruthy();
});