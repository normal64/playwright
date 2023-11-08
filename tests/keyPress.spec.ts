import { test, expect } from "@playwright/test";
import KeyPress from "../page-object/keyPress.page";
import { keyToPress } from "./src/resources/constants";

test("Key press POM", async ({ page }) => {
  const keyPress = new KeyPress(page);
  await keyPress.goToMainPage();
  await keyPress.pressKey(keyToPress);
  await keyPress.checkKeyPressedInputTextContent(keyToPress);
});
