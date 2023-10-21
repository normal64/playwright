import { test, expect } from "@playwright/test";
import {
  clickLoginButton,
  fillInputs,
  openLoginPage,
} from "../page-object/login.page.js";

// test("has the title", async ({ page }) => {
//   await page.goto("https://the-internet.herokuapp.com/login");
//   await expect(page).toHaveTitle("The Internet");

//   await page.getByLabel("Username").fill("tomsmith");
//   await page.getByLabel("Password").fill("SuperSecretPassword!");
//   await page.getByRole("button", { name: " Login" }).click();

//   await expect(
//     page.getByText("You logged into a secure area! ×")
//   ).toBeVisible();
//   const loginMessage = await page.$("#flash");
//   const loginMessageTextContent = await loginMessage.textContent();
//   console.log(loginMessageTextContent);
//   //why this assertion fails?
//   await expect(loginMessageTextContent).toContain(
//     `
//     You logged into a secure area!
//     ×
//   `
//   );
//   //is it a good practice to arrange asertion like so? does it fail for same reason as the one above?
//   //   await expect(page.getByText("You logged into a secure area!")).toHaveText(
//   //     " You logged into a secure area! "
//   //   );
//   await page.pause();
// });
test("login POM", async ({ page }) => {
  await openLoginPage(page);
  await fillInputs(page, "tomsmith", "SuperSecretPassword!");
  await clickLoginButton(page);
  //seems to be that error in previous test caused by assertion run before new url is loaded. right?
  await expect(page.url()).toBe("https://the-internet.herokuapp.com/secure");
  const loginMessage = await page.getByText("You logged into a secure area! ×");
  await expect(loginMessage).toContainText("You logged into a secure area! ×");
  await page.pause();
});
test("PHP travels", async ({ page }) => {
  await page.goto("https://phptravels.org/login");
  await page.getByPlaceholder("name@example.com").fill("Dean");
  await page.getByPlaceholder("Password").fill("123455");
  const frame = page.frameLocator('iframe[title="reCAPTCHA"]');
  frame.getByLabel("I'm not a robot").click();
  //await page.getByRole('button', { name: 'Login' }).click();
  await page.pause();
});
test.only("drag and drop", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/drag_and_drop");
  const rectangleA = await page.locator("#column-a");
  await expect(rectangleA).toContainText("A");
  await page.locator("#column-a").dragTo(page.locator("#column-b"));
  await expect(rectangleA).toContainText("B");
  await page.pause();
});
