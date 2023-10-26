import { Page } from "@playwright/test";

export default class LoginPage {
  readonly page: Page;
  username_textbox: any; // Declare the properties
  password_textbox: any;
  login_button: any;
  constructor(page: Page) {
    this.page = page;
    this.username_textbox = page.getByLabel("Username");
    this.password_textbox = page.getByLabel("Password");
    this.login_button = page.getByRole("button", { name: "Login" });
  }
  enterUsername() {}
  enterPassword() {}
  clickOnLogin() {}
  async gotoLoginPage() {
    await this.page.goto("https://the-internet.herokuapp.com/login");
  }
  async login(username: string, password: string) {
    await this.username_textbox.fill(username);
    await this.password_textbox.fill(password);
    await this.login_button.click();
  }
}
