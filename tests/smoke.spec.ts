import { test, expect } from "@playwright/test";

test("homepage shows contact phone", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("+7-903-335-24-47").first()).toBeVisible();
});

test("service page renders price and FAQ", async ({ page }) => {
  await page.goto("/uslugi/arenda-poluvagonov/");
  await expect(page.locator("h1")).toBeVisible();
  await expect(page.getByText("от 60 000 ₽")).toBeVisible();
});
