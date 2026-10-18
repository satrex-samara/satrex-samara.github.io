"use client";

import { useActionState } from "react";
import { submitContact, type ContactState } from "./actions";

const initialState: ContactState = {};

const inputClass =
  "w-full rounded-lg border border-white/15 bg-slate-950 px-3 py-2 outline-none focus:border-emerald-500";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialState,
  );

  if (state.success) {
    return (
      <div className="rounded-lg border border-emerald-500/50 bg-emerald-500/10 p-4">
        <p className="font-semibold text-emerald-400">Заявка отправлена!</p>
        <p className="mt-1 text-sm text-slate-300">
          Спасибо, {state.name}! Мы свяжемся с вами в ближайшее время.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-4">
      <div>
        <label className="mb-1 block text-sm text-slate-300" htmlFor="name">
          Имя
        </label>
        <input
          id="name"
          name="name"
          defaultValue={state.values?.name ?? ""}
          className={inputClass}
          placeholder="Как к вам обращаться"
        />
        {state.errors?.name && (
          <p className="mt-1 text-sm text-red-400">{state.errors.name}</p>
        )}
      </div>
      <div>
        <label className="mb-1 block text-sm text-slate-300" htmlFor="contact">
          Телефон или e-mail
        </label>
        <input
          id="contact"
          name="contact"
          defaultValue={state.values?.contact ?? ""}
          className={inputClass}
          placeholder="+7 (___) ___-__-__"
        />
        {state.errors?.contact && (
          <p className="mt-1 text-sm text-red-400">{state.errors.contact}</p>
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
          defaultValue={state.values?.message ?? ""}
          className={inputClass}
          placeholder="Что и куда нужно перевезти?"
        />
        {state.errors?.message && (
          <p className="mt-1 text-sm text-red-400">{state.errors.message}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-lg bg-emerald-500 px-4 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400 disabled:opacity-60"
      >
        {pending ? "Отправляем…" : "Отправить заявку"}
      </button>
    </form>
  );
}
