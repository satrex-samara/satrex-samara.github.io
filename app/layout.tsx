import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import "./globals.css";
import { contacts, services } from "./lib/satrex";
import CurrentYear from "./current-year";
import CookieBanner from "./cookie-banner";
import MobileNav from "./mobile-nav";
import Icon from "./icons";

export const metadata: Metadata = {
  metadataBase: new URL("https://satrex.ru"),
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/avatar.png" }],
  },
  title: {
    default: "Железнодорожные грузоперевозки в Самаре — станция Кряж | САТРЭКС",
    template: "%s | САТРЭКС",
  },
  description:
    "Железнодорожные грузоперевозки в Самаре и области: станция Кряж, предоставление полувагонов и платформ, подача и уборка вагонов, погрузочно-разгрузочные работы, ж/д адрес грузополучателя, негабарит. ☎ +7-903-335-24-47",
  keywords: [
    "железнодорожные грузоперевозки Самара",
    "станция Кряж",
    "грузоперевозки по ЖД",
    "полувагоны Самара",
    "аренда полувагонов",
    "ж/д адрес грузополучателя",
    "погрузочно-разгрузочные работы",
    "негабаритные грузы",
    "Куйбышевская железная дорога",
    "САТРЭКС",
  ],
  authors: [{ name: "САТРЭКС" }],
  creator: "САТРЭКС",
  publisher: "САТРЭКС",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "САТРЭКС",
    url: "/",
    title: "Железнодорожные грузоперевозки в Самаре — станция Кряж",
    description:
      "Терминал у грузовой станции Кряж: полувагоны и платформы, подача и уборка, ПРР кранами КК-32 и КК-16/20, ж/д адрес грузополучателя, негабарит. ☎ +7-903-335-24-47",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "САТРЭКС — железнодорожные грузоперевозки, станция Кряж, Самара",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Железнодорожные грузоперевозки в Самаре — станция Кряж",
    description:
      "Полувагоны и платформы, ПРР, ж/д адрес грузополучателя и негабарит на станции Кряж Куйбышевской ЖД.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" className="h-full scroll-smooth" data-scroll-behavior="smooth">
      <body className="flex min-h-full flex-col bg-slate-950 text-slate-200 antialiased">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-emerald-500 focus:px-4 focus:py-2 focus:font-semibold focus:text-slate-950"
        >
          Перейти к содержимому
        </a>

        <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
          <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold tracking-tight text-white"
              aria-label="САТРЭКС — на главную"
            >
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-500/15 text-emerald-400">
                <Icon name="train" className="h-5 w-5" />
              </span>
              САТРЭКС
            </Link>

            <nav
              className="hidden gap-7 text-sm text-slate-300 md:flex"
              aria-label="Основная навигация"
            >
              <Link className="transition hover:text-white" href="/uslugi/">
                Услуги
              </Link>
              <Link className="transition hover:text-white" href="/fotogalereya/">
                Фото
              </Link>
              <Link className="transition hover:text-white" href="/#about">
                О компании
              </Link>
              <Link className="transition hover:text-white" href="/#directions">
                Направления
              </Link>
              <Link className="transition hover:text-white" href="/#faq">
                Вопросы
              </Link>
              <Link className="transition hover:text-white" href="/#contacts">
                Контакты
              </Link>
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={contacts.phoneHref}
                className="hidden rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400 sm:inline-block"
              >
                {contacts.phone}
              </a>
              <MobileNav />
            </div>
          </div>
        </header>

        <main id="content" className="flex-1">
          {children}
        </main>

        <footer className="site-footer border-t border-white/10 bg-slate-950">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
            <div>
              <p className="flex items-center gap-2 text-lg font-bold text-white">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-500/15 text-emerald-400">
                  <Icon name="train" className="h-5 w-5" />
                </span>
                САТРЭКС
              </p>
              <p className="mt-3 text-sm text-slate-400">
                Транспортно-логистический комплекс на грузовой станции Кряж
                Куйбышевской ЖД. Приём, отправка и хранение грузов, ПРР и
                комплексная логистика по всей сети РЖД.
              </p>
            </div>

            <nav aria-label="Услуги" className="text-sm">
              <p className="font-semibold text-white">Услуги</p>
              <ul className="mt-3 space-y-2 text-slate-400">
                {services.slice(0, 5).map((s) => (
                  <li key={s.slug}>
                    <Link
                      className="transition hover:text-white"
                      href={`/uslugi/${s.slug}/`}
                    >
                      {s.h1}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    className="text-emerald-400 transition hover:text-emerald-300"
                    href="/uslugi/"
                  >
                    Все услуги →
                  </Link>
                </li>
                <li>
                  <Link
                    className="transition hover:text-white"
                    href="/gruzoperevozki-gazel/"
                  >
                    Газель бортовая
                  </Link>
                </li>
                <li>
                  <Link
                    className="transition hover:text-white"
                    href="/fotogalereya/"
                  >
                    Фотогалерея
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="text-sm">
              <p className="font-semibold text-white">Контакты</p>
              <ul className="mt-3 space-y-2 text-slate-400">
                <li>
                  <a
                    className="transition hover:text-white"
                    href={contacts.phoneHref}
                  >
                    {contacts.phone}
                  </a>
                </li>
                <li>
                  <a
                    className="transition hover:text-white"
                    href={`mailto:${contacts.email}`}
                  >
                    {contacts.email}
                  </a>
                </li>
                <li>{contacts.address}</li>
                <li>{contacts.hours}</li>
                <li>
                  <Link
                    className="transition hover:text-white"
                    href="/privacy/"
                  >
                    Политика обработки персональных данных
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10">
            <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
              <p>
                © <CurrentYear /> САТРЭКС, Самара. Грузовая станция Кряж Кбш ЖД.
              </p>
              <p>Железнодорожные грузоперевозки · Самара · Куйбышевская ЖД</p>
            </div>
          </div>
        </footer>

        <nav className="mobile-cta" aria-label="Связаться с САТРЭКС">
          <a
            href={contacts.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-4 py-3 text-sm font-semibold text-slate-950"
          >
            <Icon name="phone" className="h-4 w-4" />
            Позвонить
          </a>
          <a
            href={`mailto:${contacts.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-4 py-3 text-sm font-semibold text-white"
          >
            <Icon name="mail" className="h-4 w-4" />
            E-mail
          </a>
        </nav>

        <CookieBanner />
      </body>
    </html>
  );
}
