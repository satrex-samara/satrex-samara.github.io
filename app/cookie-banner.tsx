"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookie-consent")) setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-slate-900/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 text-sm text-slate-300 md:flex-row md:items-center md:justify-between">
        <p>
          Мы используем файлы cookie, чтобы сайт работал корректно. Продолжая
          просмотр, вы соглашаетесь с обработкой персональных данных согласно{" "}
          <Link
            className="text-emerald-400 underline transition hover:text-emerald-300"
            href="/privacy/"
          >
            Политике обработки персональных данных
          </Link>
          .
        </p>
        <button
          type="button"
          className="shrink-0 rounded-lg bg-emerald-500 px-5 py-2 font-semibold text-slate-950 transition hover:bg-emerald-400"
          onClick={() => {
            localStorage.setItem("cookie-consent", new Date().toISOString());
            setVisible(false);
          }}
        >
          Принять
        </button>
      </div>
    </div>
  );
}
