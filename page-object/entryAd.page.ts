import { Page, expect } from "@playwright/test";

export default class EntryAd {
  readonly page: Page;
  modalWindow: any;
  thisModalWindow: any;
  closeModalButton: any;
  pageHeading: any;
  restoreModalButton: any;
  constructor(page: Page) {
    this.page = page;
    this.pageHeading = this.page.getByRole("heading", { name: "Entry Ad" });
    this.modalWindow = this.page.getByRole("heading", {
      name: "This is a modal window",
    });
    this.closeModalButton = this.page.getByText("Close", { exact: true });
    this.restoreModalButton = this.page.getByRole("link", {
      name: "click here",
    });
  }
  async goToMainPage() {
    await this.page.goto("https://the-internet.herokuapp.com/entry_ad");
  }
  async getModalVisibitilityStatus() {
    await this.page.waitForSelector(".modal");
    const ModalVisibilityStatus = await this.modalWindow.isVisible();
    await expect(ModalVisibilityStatus).toEqual(true);
  }
  async checkModalWindowHeading() {
    const modalWindowHeading = await this.modalWindow.textContent();
    await expect(modalWindowHeading).toEqual("This is a modal window");
  }
  async closeModalWindowButtonClick() {
    await this.closeModalButton.click();
  }
  async checkPageHeading() {
    const pageHeadingText = await this.pageHeading.textContent();
    await expect(pageHeadingText).toEqual("Entry Ad");
  }
  async restoreModalClick() {
    await this.restoreModalButton.click();
  }
  async getModalVisibitilityStatusNegative() {
    await this.page.waitForSelector(".modal");
    const ModalVisibilityStatus = await this.modalWindow.isVisible();
    await expect(ModalVisibilityStatus).toEqual(true);
  }
}
