import { expect } from '@playwright/test';
import { BasePage } from './BasePage';
export class ProductsPage extends BasePage {

    async searchProduct(productName: string) {
        await this.page.getByPlaceholder('Search Product').fill(productName);
        await this.page.locator('#submit_search').click();
    }

    async isSearchResultsVisible(): Promise<boolean> {
        return await this.page.getByRole('heading', { name: 'Searched Products' }).isVisible();
    }

    async getProductNames() {
        return await this.page.locator('.productinfo p').allTextContents();
    }
    async addProductToCart(index: number) {
        const product = this.page.locator('.product-image-wrapper').nth(index);
        await product.hover();
        const addToCart = product.getByText('Add to cart').first();
        await expect(addToCart).toBeVisible();
        await addToCart.click();
    }
    async continueShopping() {
        await this.page.getByRole('button', { name: 'Continue Shopping' }).click({ force: true });
    }
    async navigateToCart() {
        await this.page.getByRole('link', { name: 'View Cart' }).click({ force: true });
    }
    async getCartItemsCount(): Promise<number> {
        return await this.page.locator('tbody tr').count();
    }
}