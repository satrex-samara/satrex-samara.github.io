import Link from "next/link";
import PagePhotoGallery from "./page-photo-gallery";
import { pagePhotoSets } from "./lib/page-photos";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
        Ошибка 404
      </p>
      <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
        Страница не найдена
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-slate-400">
        Возможно, страница была удалена или её адрес изменился. Перейдите в
        нужный раздел — навигация ниже.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400"
        >
          Главная
        </Link>
        <Link
          href="/uslugi/"
          className="rounded-xl border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-emerald-400 hover:text-emerald-300"
        >
          Все услуги
        </Link>
        <Link
          href="/gruzoperevozki-gazel/"
          className="rounded-xl border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-emerald-400 hover:text-emerald-300"
        >
          Газель бортовая
        </Link>
        <Link
          href="/#contacts"
          className="rounded-xl border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-emerald-400 hover:text-emerald-300"
        >
          Контакты
        </Link>
      </div>
      <PagePhotoGallery photos={pagePhotoSets.notFound} contained />
    </section>
  );
}