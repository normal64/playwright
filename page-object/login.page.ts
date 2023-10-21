import { test, expect } from "@playwright/test";

export async function openLoginPage(page) {
  await page.goto("https://the-internet.herokuapp.com/login");
  await expect(page).toHaveTitle("The Internet");
}

export async function fillInputs(page, login: string, password: string) {
  await page.getByLabel("Username").fill(login);
  await page.getByLabel("Password").fill(password);
}
export async function clickLoginButton(page) {
  await page.getByRole("button", { name: " Login" }).click();
}
