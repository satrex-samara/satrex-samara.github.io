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

test("cookie banner shows, accepts and stays hidden", async ({ page }) => {
  await page.goto("/");
  const banner = page.getByText("Мы используем файлы cookie");
  await expect(banner).toBeVisible();
  await page.getByRole("button", { name: "Принять" }).click();
  await expect(banner).toBeHidden();
  await page.reload();
  await expect(banner).toBeHidden();
});

test("privacy policy page opens from footer", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Принять" }).click();
  await page
    .locator("footer")
    .getByRole("link", { name: "Политика обработки персональных данных" })
    .click();
  await expect(page).toHaveURL(/\/privacy\/?$/);
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Политика в отношении обработки персональных данных",
    }),
  ).toBeVisible();
});

test("railway address page shows consignee requisites", async ({ page }) => {
  await page.goto("/uslugi/zheleznodorozhnyj-adres/");
  await expect(page.getByText("639608")).toBeVisible();
  await expect(page.getByText("Код ЕЛС")).toBeVisible();
  await expect(page.getByText("1005368550")).toBeVisible();
});
