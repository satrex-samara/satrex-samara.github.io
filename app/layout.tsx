import type { Metadata } from "next";
import "./globals.css";
import { contacts } from "./lib/satrex";
import CurrentYear from "./current-year";

export const metadata: Metadata = {
  metadataBase: new URL("https://satrex.ru"),
  title: "Ж/Д перевозки в Самаре — станция Кряж | САТРЭКС",
  description:
    "Железнодорожные грузоперевозки в Самаре: станция Кряж, погрузочно-разгрузочные работы, аренда вагонов, ж/д адрес. ☎ +7-903-335-24-47",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className="h-full">
      <body className="flex min-h-full flex-col bg-slate-950 text-slate-200 antialiased">
        <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
            <a href="/" className="text-xl font-bold tracking-tight text-white">
              САТРЭКС<span className="text-emerald-400">.</span>
            </a>
            <nav className="hidden gap-8 text-sm text-slate-300 md:flex">
              <a className="transition hover:text-white" href="/#services">
                Услуги
              </a>
              <a className="transition hover:text-white" href="/#about">
                О компании
              </a>
              <a className="transition hover:text-white" href="/#contacts">
                Контакты
              </a>
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
            <p>
              <a
                className="transition hover:text-white"
                href={`mailto:${contacts.email}`}
              >
                {contacts.email}
              </a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
