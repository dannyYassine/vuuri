// import { test, expect } from '@playwright/test';
import { test, expect } from "playwright-test-coverage";

test('loads the app', async ({ page }) => {
  await page.goto(process.env.PW_CLIENT_URL);

  await expect(page).toHaveURL(process.env.PW_CLIENT_URL);
});