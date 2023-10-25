import { expect, test } from "@playwright/test";

test.skip("Test one", async (page) => {});

test("not yet ready", async ({ page }) => {
  test.fail();
  await page.goto("https://www.saucedemo.com/");
  const currentPageUrl = await page.url();
  await expect(currentPageUrl).toBe("google.com");
});

test.fixme("test to be fixed", async ({ page }) => {});
test("slow test", async ({ page }) => {
  test.slow();
  await page.goto("https://www.saucedemo.com/");
  await page.locator('[data-test="username"]').fill("do this slow");
});

test("Test full report @smoke", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator('[data-test="login-button"]').click();
});
