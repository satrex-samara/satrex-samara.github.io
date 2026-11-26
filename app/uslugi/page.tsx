import type { Metadata } from "next";
import Link from "next/link";
import Icon from "../icons";
import PagePhotoGallery from "../page-photo-gallery";
import { contacts, priceList, services, site } from "../lib/satrex";
import { pagePhotoSets } from "../lib/page-photos";

export const metadata: Metadata = {
  title: "Услуги железнодорожной логистики в Самаре — цены и условия",
  description:
    "Все услуги САТРЭКС на станции Кряж: аренда полувагонов от 60 000 ₽, ж/д адрес грузополучателя от 15 000 ₽, ПРР кранами КК-32 и КК-16/20, схемы крепления от 35 000 ₽, хранение, взвешивание, комплексная логистика. ☎ +7-903-335-24-47",
  alternates: { canonical: "/uslugi/" },
  openGraph: {
    title: "Услуги железнодорожной логистики в Самаре",
    description:
      "Полувагоны и платформы, ПРР, ж/д адрес грузополучателя, схемы крепления, хранение и комплексная логистика на станции Кряж.",
    url: "/uslugi/",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "САТРЭКС — железнодорожные грузоперевозки, станция Кряж, Самара",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: `${site.url}/` },
        {
          "@type": "ListItem",
          position: 2,
          name: "Услуги",
          item: `${site.url}/uslugi/`,
        },
      ],
    },
    {
      "@type": "ItemList",
      name: "Услуги САТРЭКС",
      itemListElement: services.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: s.h1,
        url: `${site.url}/uslugi/${s.slug}/`,
      })),
    },
  ],
};

export default function ServicesIndex() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav className="text-sm text-slate-400" aria-label="Хлебные крошки">
        <Link href="/" className="transition hover:text-white">
          Главная
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-200">Услуги</span>
      </nav>

      <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
        Услуги железнодорожной логистики в Самаре
      </h1>
      <p className="mt-4 max-w-3xl text-lg text-slate-300">
        Полный цикл работ на грузовой станции Кряж Куйбышевской ЖД: от подбора
        подвижного состава и схем крепления до выгрузки, хранения и выдачи груза
        автотранспортом. Ниже — все направления и ориентировочные цены.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {services.map((s) => (
          <Link
            key={s.slug}
            href={`/uslugi/${s.slug}/`}
            className="group flex flex-col rounded-2xl border border-white/10 bg-slate-900/50 p-6 transition hover:-translate-y-0.5 hover:border-emerald-500/50 hover:bg-slate-900"
          >
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-xl font-semibold leading-snug text-white">
                {s.h1}
              </h2>
              <span className="shrink-0 rounded-lg bg-emerald-500/10 px-3 py-1 text-sm font-bold text-emerald-400">
                {s.price}
              </span>
            </div>
            <p className="mt-3 flex-1 text-sm text-slate-400">{s.summary}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-emerald-400">
              Условия и реквизиты
              <Icon name="arrow" className="h-4 w-4" />
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Стоимость услуг</h2>
        <p className="mt-2 max-w-2xl text-slate-400">
          Базовые ставки на грузовые операции на станции Кряж. Итоговая цена
          зависит от расстояния, типа подвижного состава и условий погрузки —
          точный расчёт по заявке.
        </p>
        <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50">
          {priceList.map((p) => (
            <div
              key={p.service}
              className="flex flex-col gap-1 border-b border-white/10 px-5 py-4 last:border-b-0 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
            >
              <span className="text-sm text-slate-300">{p.service}</span>
              <b className="text-sm font-semibold text-emerald-400 sm:text-right">
                {p.price}
              </b>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <Link
          href="/gruzoperevozki-gazel/"
          className="group flex flex-col rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-6 transition hover:-translate-y-0.5 hover:border-emerald-400/60 hover:bg-emerald-500/10"
        >
          <h2 className="text-lg font-semibold text-white">
            Грузоперевозки бортовой Газелью
          </h2>
          <p className="mt-2 flex-1 text-sm text-slate-400">
            Автомобильные перевозки по Самаре и области: борт 5,2 × 2 м, до
            1,5 т, дизель, безнал с НДС.
          </p>
          <span className="mt-4 text-sm font-semibold text-emerald-400">
            Подробнее и цены →
          </span>
        </Link>
        <Link
          href="/uslugi/arenda-poluvagonov/"
          className="group flex flex-col rounded-2xl border border-white/10 bg-slate-900/50 p-6 transition hover:-translate-y-0.5 hover:border-emerald-500/50 hover:bg-slate-900"
        >
          <h2 className="text-lg font-semibold text-white">
            Аренда полувагонов
          </h2>
          <p className="mt-2 flex-1 text-sm text-slate-400">
            Подача полувагонов под погрузку на станции Кряж, перевозка от
            60 000 ₽.
          </p>
          <span className="mt-4 text-sm font-semibold text-emerald-400">
            Условия →
          </span>
        </Link>
      </div>

      <div className="mt-6 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white">
          Не нашли нужную услугу?
        </h2>
        <p className="mt-2 max-w-2xl text-slate-300">
          Соберём индивидуальную схему перевозки: подберём вагон, посчитаем
          тариф РЖД и ПРР, согласуем документы. Позвоните или напишите — ответим
          в рабочее время.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={contacts.phoneHref}
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400"
          >
            <Icon name="phone" className="h-4 w-4" />
            {contacts.phone}
          </a>
          <a
            href={`mailto:${contacts.email}`}
            className="inline-flex items-center gap-2 rounded-lg border border-white/25 px-5 py-3 font-semibold text-white transition hover:border-white/60"
          >
            <Icon name="mail" className="h-4 w-4" />
            {contacts.email}
          </a>
        </div>
      </div>
      <PagePhotoGallery photos={pagePhotoSets.services} contained />
    </div>
  );
}
