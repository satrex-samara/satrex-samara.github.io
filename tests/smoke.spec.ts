import { test, expect } from "@playwright/test";

test("homepage shows contact phone", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByText("+7-903-335-24-47").first()).toBeVisible();
});

test("homepage terminal photo uses a local responsive image", async ({ page }) => {
  await page.goto("/");
  const image = page.getByRole("img", {
    name: "Автокран выгружает крупногабаритную технику с железнодорожной платформы на станции Кряж",
  });

  await expect(image).toHaveAttribute("loading", "eager");
  await expect(image).toHaveAttribute("src", "/gallery/20.jpg");
  await expect(image).toHaveClass(/w-full/);
  await expect(image).toHaveAttribute("width", "1600");
  await expect(image).toHaveAttribute("height", "764");
  await expect
    .poll(() => image.evaluate((element) => (element as HTMLImageElement).naturalWidth))
    .toBeGreaterThan(0);
});

test("mobile contact actions and footer links have usable targets", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const contactBar = page.getByRole("navigation", {
    name: "Связаться с САТРЭКС",
  });
  await expect(contactBar).toBeVisible();
  await expect(contactBar.getByRole("link", { name: "Позвонить" })).toHaveAttribute(
    "href",
    "tel:+79033352447",
  );
  await expect(contactBar.getByRole("link", { name: "E-mail" })).toHaveAttribute(
    "href",
    "mailto:samara@satrex.ru",
  );

  const contactBarBox = await contactBar.boundingBox();
  const cookieBannerBox = await page.locator(".cookie-banner").boundingBox();
  expect(contactBarBox).not.toBeNull();
  expect(cookieBannerBox).not.toBeNull();
  expect(cookieBannerBox!.y + cookieBannerBox!.height).toBeLessThanOrEqual(
    contactBarBox!.y,
  );

  const serviceCardLink = page.getByRole("link", { name: "Все услуги и цены →" });
  const serviceCardBox = await serviceCardLink.boundingBox();
  expect(serviceCardBox?.height).toBeGreaterThanOrEqual(44);

  const footerLinkHeights = await page.locator("footer a").evaluateAll((links) =>
    links.map((link) => link.getBoundingClientRect().height),
  );
  expect(footerLinkHeights.length).toBeGreaterThan(0);
  expect(footerLinkHeights.every((height) => height >= 44)).toBe(true);

  await page.setViewportSize({ width: 1280, height: 900 });
  await expect(contactBar).toBeHidden();
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
