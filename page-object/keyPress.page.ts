import { Page, Locator, expect } from "@playwright/test";
export default class KeyPress {
  readonly page: Page;
  inputForKeyPressed: any;
  constructor(page: Page) {
    this.page = page;
    this.inputForKeyPressed = this.page.locator("#result");
  }
  async goToMainPage() {
    await this.page.goto("https://the-internet.herokuapp.com/key_presses");
  }
  async pressKey(key: string) {
    await this.page.keyboard.press(key);
  }
  async checkKeyPressedInputTextContent(key:string) {
    const inputForKeyPressed = await this.inputForKeyPressed.textContent();
    await expect(inputForKeyPressed).toEqual(`You entered: ${key.toUpperCase()}`)
}
}
