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

test("contact form validates and confirms", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Отправить заявку" }).click();
  await expect(
    page.getByText("Укажите имя (минимум 2 символа)"),
  ).toBeVisible();

  await page.getByLabel("Имя").fill("Тест");
  await page.getByLabel("Телефон или e-mail").fill("+7 900 000-00-00");
  await page
    .getByLabel("О грузе")
    .fill("Нужен полувагон из Самары, тестовая заявка");
  await page.getByRole("button", { name: "Отправить заявку" }).click();
  await expect(page.getByText("Заявка отправлена!")).toBeVisible();
});
