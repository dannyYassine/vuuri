// import { test, expect } from '@playwright/test';
import { test, expect } from "playwright-test-coverage";

test('loads the app', async ({ page }) => {
  await page.goto(process.env.PW_CLIENT_URL);

  await page.locator('[data-test="add"]').click();

  await expect(page).toHaveURL(process.env.PW_CLIENT_URL);
});

function wait(): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}