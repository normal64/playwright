import { test, expect } from "@playwright/test";
import LoginPage from "../page-object/login";

test("test login with class POM", async ({ page }) => {
  const Login = new LoginPage(page);
  await Login.gotoLoginPage();
  await Login.login("tomsmith", "SuperSecretPassword!");
});
