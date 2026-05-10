import { test as base } from '@playwright/test';
import { BasePage } from "./pages/BasePage";
import { HomePage } from "./pages/HomePage";
import { ContactPage } from "./pages/ContactPage";
import { ProductsPage } from "./pages/ProductsPage";

type Pages = {
    basePage: BasePage;
    contactPage: ContactPage;
    homePage: HomePage;
    productsPage: ProductsPage;
}

export const test = base.extend<Pages>({
    basePage: async ({ page }, use) => {
        await use(new BasePage(page));
    },
    contactPage: async ({ page }, use) => {
        await use(new ContactPage(page));
    },
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    productsPage: async ({ page }, use) => {
        await use(new ProductsPage(page));
    }
});
