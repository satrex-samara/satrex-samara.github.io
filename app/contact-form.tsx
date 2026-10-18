"use client";

import { useState, type FormEvent } from "react";

const inputClass =
  "w-full rounded-lg border border-white/15 bg-slate-950 px-3 py-2 outline-none focus:border-emerald-500";

export default function ContactForm() {
  const [values, setValues] = useState({ name: "", contact: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sentName, setSentName] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // MVP: заявка никуда не отправляется, только подтверждается на экране.
    // Отправку в CRM / e-mail / Telegram подключите здесь по готовности.
    const next: Record<string, string> = {};
    if (values.name.trim().length < 2)
      next.name = "Укажите имя (минимум 2 символа)";
    if (values.contact.trim().length < 5)
      next.contact = "Укажите телефон или e-mail для связи";
    if (values.message.trim().length < 10)
      next.message = "Опишите задачу чуть подробнее (от 10 символов)";

    setErrors(next);
    if (Object.keys(next).length === 0) setSentName(values.name.trim());
  }

  if (sentName) {
    return (
      <div className="rounded-lg border border-emerald-500/50 bg-emerald-500/10 p-4">
        <p className="font-semibold text-emerald-400">Заявка отправлена!</p>
        <p className="mt-1 text-sm text-slate-300">
          Спасибо, {sentName}! Мы свяжемся с вами в ближайшее время.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="mb-1 block text-sm text-slate-300" htmlFor="name">
          Имя
        </label>
        <input
          id="name"
          name="name"
          value={values.name}
          onChange={(event) =>
            setValues({ ...values, name: event.target.value })
          }
          className={inputClass}
          placeholder="Как к вам обращаться"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-400">{errors.name}</p>
        )}
      </div>
      <div>
        <label className="mb-1 block text-sm text-slate-300" htmlFor="contact">
          Телефон или e-mail
        </label>
        <input
          id="contact"
          name="contact"
          value={values.contact}
          onChange={(event) =>
            setValues({ ...values, contact: event.target.value })
          }
          className={inputClass}
          placeholder="+7 (___) ___-__-__"
        />
        {errors.contact && (
          <p className="mt-1 text-sm text-red-400">{errors.contact}</p>
        )}
      </div>
      <div>
        <label className="mb-1 block text-sm text-slate-300" htmlFor="message">
          О грузе
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={values.message}
          onChange={(event) =>
            setValues({ ...values, message: event.target.value })
          }
          className={inputClass}
          placeholder="Что и куда нужно перевезти?"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-400">{errors.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-emerald-500 px-4 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400"
      >
        Отправить заявку
      </button>
    </form>
  );
}
