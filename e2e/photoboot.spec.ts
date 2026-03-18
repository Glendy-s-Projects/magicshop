import {  test } from "@playwright/test";

test.describe.configure({ mode: "serial" });

test("Generate a Photobooth", async ({ page }) => {
  await page.goto("http://localhost:3000/photobooth");
  await page.locator("#print").click();
  await page.locator('[data-test-id="Photo"] div').first().click();
  await page
    .locator('[data-test-id="Photo"]')
    .first()
    .getByRole("heading", { name: "Click to Add Your Photo" })
    .click();
  await page.getByTestId("Logo").click();
  await page.getByRole("img", { name: "logoarmy" }).click();
});
