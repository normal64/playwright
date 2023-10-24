import { test, expect } from "@playwright/test";
import {
  clickLoginButton,
  fillInputs,
  openLoginPage,
} from "../page-object/login.page.js";

test("login POM", async ({ page }) => {
  await openLoginPage(page);
  await fillInputs(page, "tomsmith", "SuperSecretPassword!");
  await clickLoginButton(page);

  await expect(page.url()).toBe("https://the-internet.herokuapp.com/secure");
  const loginMessage = await page.getByText("You logged into a secure area! ×");
  await expect(loginMessage).toContainText("You logged into a secure area! ×");
});
test("PHP travels", async ({ page }) => {
  await page.goto("https://phptravels.org/login");
  await page.getByPlaceholder("name@example.com").fill("Dean");
  await page.getByPlaceholder("Password").fill("123455");
  const frame = page.frameLocator('iframe[title="reCAPTCHA"]');
  frame.getByLabel("I'm not a robot").click();
});
test.only("drag and drop", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/drag_and_drop");
  const rectangleA = await page.locator("#column-a");
  await expect(rectangleA).toContainText("A");
  await page.locator("#column-a").dragTo(page.locator("#column-b"));
  await expect(rectangleA).toContainText("B");
});
