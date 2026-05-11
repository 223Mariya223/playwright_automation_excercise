# Playwright Automation Assessment

This repository contains the automated test suite for the technical assessment, built using Playwright and TypeScript. The framework utilizes the Page Object Model (POM) design pattern for maintainability and scalability.

 1. How to Install and Run Locally

Prerequisites:Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

Clone the repository:

git clone https://github.com/223Mariya223/playwright_automation_excercise.git

cd playwright_automation_excercise

Install dependencies:


npm install

Install Playwright browsers:


npx playwright install --with-deps

Run the tests:

To run all tests in the background (headless mode):


npx playwright test

To run tests and watch the browser UI (headed mode):


npx playwright test --headed

View the test report:


npx playwright show-report
 
2. Decisions and Trade-offs
Custom Fixtures: I decided to use Playwright's test.extend feature to create custom fixtures for my Page Objects (index.ts).

Trade-off: This required slightly more complex code upfront. However, the trade-off is highly worth it, as it keeps the actual test files exceptionally clean and automatically provides isolated page instances for every test.

Bypassing Third-Party Ad Overlays: The target website frequently loads Google Auto-Ads that intercept pointer events and cause test timeouts.

Trade-off: I decided to use { force: true } on specific buttons. While the standard best practice is to let Playwright check for actionability naturally, forcing the click was a necessary trade-off to bypass unpredictable third-party ad wrappers and ensure test stability.

Handling Inexact Search Results: When asserting the product search results for "Dress", I deliberately used JavaScript's .some() method rather than .every().

Decision: E-commerce search algorithms often return inexact matches (e.g., returning a "Sleeves Top and Short - Blue & Pink" when searching for a "Dress"). Using .every() would cause the test to become flaky and fail due to backend search logic outside the scope of the UI. Using .some() ensures the UI test passes as long as the search engine successfully returns at least one highly relevant result. Real-world e-commerce data is often messy, and this makes the assertion highly resilient to typography changes and minor data mismatches.

3. AI Usage
Did you use AI to aid with any of this exercise? If so, where and why?

Yes, I utilized GitHub Copilot as an assistant within my VS Code environment. I used it for inline autocompletion to speed up typing repetitive POM boilerplate, and I used Copilot Chat to help brainstorm solutions when I encountered the pointer events intercepted errors caused by the third-party ads. Ultimately, it accelerated my workflow, but I manually reviewed and tested every line of code to ensure it met strict QA best practices.

4. Future Improvements (Given more time)
   
CI/CD Pipeline Integration: I would add a GitHub Actions workflow (.github/workflows/playwright.yml) to automatically run this test suite in headless mode on every pull request to the main branch.

Data-Driven Testing: Currently, test data (like the search term "Dress" or the Contact Form inputs) is hardcoded within the spec files. I would extract this data into external JSON fixtures or .env files. This makes it easier to test multiple data variations and run tests across different environments (QA, Staging, Prod).
