import { test, expect } from "@playwright/test";
import EntryAd from "../page-object/entryAd.page";

test("Entry AD", async ({ page }) => {
  const entryAd = new EntryAd(page);
  await entryAd.goToMainPage();
  await entryAd.getModalVisibitilityStatus();
  await entryAd.checkModalWindowHeading();
  await entryAd.closeModalWindowButtonClick();
  await entryAd.checkPageHeading();
  await entryAd.restoreModalClick();
  await entryAd.getModalVisibitilityStatusNegative();

  await page.pause();
});
