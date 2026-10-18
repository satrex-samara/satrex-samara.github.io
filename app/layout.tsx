import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { contacts } from "./lib/satrex";
import CurrentYear from "./current-year";
import CookieBanner from "./cookie-banner";

export const metadata: Metadata = {
  metadataBase: new URL("https://satrex-samara.github.io"),
  title: "Железнодорожные грузоперевозки в Самаре — станция Кряж | САТРЭКС",
  description:
    "Железнодорожные грузоперевозки в Самаре и области: станция Кряж, предоставление вагонов, подача и уборка, погрузочно-разгрузочные работы, ж/д адрес грузополучателя. ☎ +7-903-335-24-47",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "САТРЭКС",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className="h-full">
      <body className="flex min-h-full flex-col bg-slate-950 text-slate-200 antialiased">
        <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
            <Link href="/" className="text-xl font-bold tracking-tight text-white">
              САТРЭКС
            </Link>
            <nav className="hidden gap-8 text-sm text-slate-300 md:flex">
              <Link className="transition hover:text-white" href="/#services">
                Услуги
              </Link>
              <Link className="transition hover:text-white" href="/#about">
                О компании
              </Link>
              <Link className="transition hover:text-white" href="/#contacts">
                Контакты
              </Link>
            </nav>
            <a
              href={contacts.phoneHref}
              className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
            >
              {contacts.phone}
            </a>
          </div>
        </header>

        <main id="top" className="flex-1">
          {children}
        </main>

        <footer className="border-t border-white/10">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
            <p>
              © <CurrentYear /> САТРЭКС, Самара. Грузовая станция Кряж Кбш ЖД.
            </p>
            <p className="flex flex-col gap-1 md:items-end">
              <a
                className="transition hover:text-white"
                href={`mailto:${contacts.email}`}
              >
                {contacts.email}
              </a>
              <Link
                className="transition hover:text-white"
                href="/privacy/"
              >
                Политика обработки персональных данных
              </Link>
            </p>
          </div>
        </footer>

        <CookieBanner />
      </body>
    </html>
  );
}
