"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Icon from "./icons";
import { contacts } from "./lib/satrex";

const links = [
  { href: "/uslugi/", label: "Услуги" },
  { href: "/#about", label: "О компании" },
  { href: "/#directions", label: "Направления" },
  { href: "/#faq", label: "Вопросы" },
  { href: "/#contacts", label: "Контакты" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Закрыть меню" : "Открыть меню"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
        className="rounded-lg border border-white/15 p-2 text-slate-200 transition hover:border-white/40 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
      >
        <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-b border-white/10 bg-slate-950/95 backdrop-blur"
        >
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 text-base">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-slate-200 transition hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={contacts.phoneHref}
              className="mt-2 rounded-lg bg-emerald-500 px-3 py-2.5 text-center font-semibold text-slate-950"
            >
              {contacts.phone}
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
