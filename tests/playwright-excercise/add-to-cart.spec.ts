import { expect } from '@playwright/test';
import { test } from '../../source/playwright-excercise/index';

test('Add Products To Cart', async ({ homePage, productsPage }) => {
    await homePage.navigateToHomePage();
    await homePage.clickProductsButton();

    await productsPage.addProductToCart(0);
    await productsPage.continueShopping();

    await productsPage.addProductToCart(1);
    await productsPage.navigateToCart();
    const cartCount = await productsPage.getCartItemsCount();
    expect(cartCount).toBe(2);
});
