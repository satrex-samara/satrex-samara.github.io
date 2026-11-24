import type { Metadata } from "next";
import Link from "next/link";
import Icon from "./icons";
import {
  contacts,
  directions,
  homeFaq,
  services,
  site,
  stats,
  steps,
  wagonTypes,
} from "./lib/satrex";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const serviceIcons: Record<string, Parameters<typeof Icon>[0]["name"]> = {
  "arenda-poluvagonov": "wagon",
  "negabaritnye-gruzy": "crane",
  "zheleznodorozhnyj-adres": "pin",
  "pogruzochno-razgruzochnye-raboty": "crane",
  "terminalno-skladskie-uslugi": "box",
  "podacha-uborka-vagonov": "train",
  "vzveshivanie-gruzov": "scale",
  "shemy-pogruzki": "doc",
  "kompleksnaya-logistika": "route",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${site.url}/#organization`,
      name: site.name,
      legalName: site.legalName,
      url: `${site.url}/`,
      image: `${site.url}/og.png`,
      logo: `${site.url}/og.png`,
      telephone: contacts.phoneHref.replace("tel:", ""),
      email: contacts.email,
      priceRange: "от 15 000 ₽",
      address: {
        "@type": "PostalAddress",
        addressCountry: "RU",
        addressRegion: "Самарская область",
        addressLocality: "Самара",
        streetAddress: "Грузовая станция Кряж, Куйбышевская железная дорога",
      },
      geo: { "@type": "GeoCoordinates", latitude: 53.2, longitude: 50.15 },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "16:00",
      },
      areaServed: ["Самара", "Самарская область", "Россия", "СНГ"],
      sameAs: [
        "https://vk.com/satrexru",
        "https://dzen.ru/satrex",
        "https://satrex.ru",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      name: site.name,
      url: `${site.url}/`,
      inLanguage: "ru-RU",
      publisher: { "@id": `${site.url}/#organization` },
    },
    {
      "@type": "FAQPage",
      "@id": `${site.url}/#faq`,
      mainEntity: homeFaq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_70%_at_70%_0%,rgba(0,187,127,0.16),transparent_65%)]"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-start">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-emerald-400">
                Самара · станция Кряж · Кбш ЖД
              </p>
              <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                Железнодорожные грузоперевозки в Самаре
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-slate-300">
                Приём и отправка грузов, полувагоны и платформы, подача и
                уборка вагонов, погрузочно-разгрузочные работы и комплексная
                логистика по сети РЖД. Собственные подъездные пути и прямые
                договоры с РЖД.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={contacts.phoneHref}
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400"
                >
                  <Icon name="phone" className="h-5 w-5" />
                  {contacts.phone}
                </a>
                <Link
                  href="/uslugi/"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-white/50"
                >
                  Наши услуги
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </div>

              <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-white/10 bg-slate-900/50 p-4"
                  >
                    <dt className="sr-only">{s.label}</dt>
                    <dd>
                      <span className="block text-xl font-bold text-white">
                        {s.value}
                      </span>
                      <span className="mt-1 block text-xs text-slate-400">
                        {s.label}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <aside className="rounded-2xl border border-emerald-500/30 bg-slate-900/60 p-6">
              <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-emerald-400">
                <Icon name="spark" className="h-4 w-4" />
                Инфраструктура терминала
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li className="flex gap-3">
                  <Icon name="crane" className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                  Открытая тяжеловесная площадка, козловые краны КК-32 и КК-16/20
                </li>
                <li className="flex gap-3">
                  <Icon name="train" className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                  Собственные подъездные пути и широкий фронт подачи вагонов
                </li>
                <li className="flex gap-3">
                  <Icon name="wagon" className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                  Торцевая эстакада для погрузки техники своим ходом
                </li>
                <li className="flex gap-3">
                  <Icon name="box" className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                  Повышенный путь для выгрузки щебня и сыпучих грузов
                </li>
                <li className="flex gap-3">
                  <Icon name="shield" className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                  Круглосуточная охрана, весовой контроль, упаковка
                </li>
              </ul>
              <Link
                href="/uslugi/zheleznodorozhnyj-adres/"
                className="mt-6 inline-block text-sm font-semibold text-emerald-400 transition hover:text-emerald-300"
              >
                Реквизиты станции Кряж (код 639608) →
              </Link>
            </aside>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-white/10 bg-slate-900/40">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-2 px-4 py-4 text-sm text-slate-400">
          <span className="font-semibold text-slate-200">
            Работаем по стандартам РЖД:
          </span>
          <span>заявка ГУ-12</span>
          <span aria-hidden="true">·</span>
          <span>ЕЛС и ТГНЛ</span>
          <span aria-hidden="true">·</span>
          <span>схемы ТУ/НТУ</span>
          <span aria-hidden="true">·</span>
          <span>раскредитование</span>
          <span aria-hidden="true">·</span>
          <span>единый технологический процесс</span>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-b border-white/10 scroll-mt-20">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
            О компании
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white">
            Логистический терминал у станции Кряж
          </h2>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div className="max-w-3xl space-y-4 text-slate-300">
              <p>
                САТРЭКС оказывает комплекс транспортно-логистических услуг на
                грузовых железнодорожных станциях Самары. Отправляем и перевозим
                грузы различной номенклатуры, организуем погрузочно-разгрузочные
                работы на станциях Куйбышевской железной дороги.
              </p>
              <p>
                Наша базовая станция — Кряж Куйбышевской ЖД: открытая
                тяжеловесная площадка с широким фронтом подачи вагонов, двумя
                козловыми кранами КК-32 и КК-16/20 и всей инфраструктурой для
                приёма, отправки и хранения грузов.
              </p>
              <p>
                Накоплен большой опыт приёма и отправки грузов на универсальном
                подвижном составе: Нижневартовск, Лабытнанги, Ноябрьск, Усинск,
                Сахалин, Урал, Сибирь и Дальний Восток. Работаем с проектными
                грузами — буровыми установками, химреагентами, модульными
                зданиями и ЖБИ.
              </p>
            </div>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="rounded-xl border border-white/10 bg-slate-900/50 p-4">
                <span className="font-semibold text-white">10 лет опыта</span>
                <p className="mt-1 text-slate-400">
                  Поставки на объекты нефтегаза, энергетики и строительства по
                  всей сети РЖД.
                </p>
              </li>
              <li className="rounded-xl border border-white/10 bg-slate-900/50 p-4">
                <span className="font-semibold text-white">Прямые договоры</span>
                <p className="mt-1 text-slate-400">
                  С собственниками вагонов, владельцами инфраструктуры и
                  подразделениями РЖД.
                </p>
              </li>
              <li className="rounded-xl border border-white/10 bg-slate-900/50 p-4">
                <span className="font-semibold text-white">Без простоев</span>
                <p className="mt-1 text-slate-400">
                  Контролируем сроки подачи и уборки — исключаем штрафы за
                  сверхнормативное пользование вагонами.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-b border-white/10 scroll-mt-20">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
            Услуги
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white">
            Девять направлений — от вагона до полного цикла
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/uslugi/${s.slug}/`}
                className="group flex flex-col rounded-2xl border border-white/10 bg-slate-900/50 p-6 transition hover:-translate-y-0.5 hover:border-emerald-500/50 hover:bg-slate-900"
              >
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-emerald-500/10 text-emerald-400">
                  <Icon name={serviceIcons[s.slug]} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold leading-snug text-white">
                  {s.h1}
                </h3>
                <p className="mt-2 flex-1 text-sm text-slate-400">{s.summary}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-bold text-emerald-400">{s.price}</span>
                  <span className="text-sm text-slate-500 transition group-hover:text-emerald-400">
                    Подробнее →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Gazelle promo */}
      <section className="border-b border-white/10 bg-slate-900/30">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="overflow-hidden rounded-3xl border border-emerald-500/25 bg-gradient-to-br from-emerald-500/10 via-slate-900/70 to-slate-900/70">
            <div className="grid md:grid-cols-[1.3fr_.7fr]">
              <div className="p-6 md:p-9">
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-300">
                  Автоперевозки
                </span>
                <h2 className="mt-4 text-2xl font-bold leading-snug text-white md:text-3xl">
                  Грузоперевозки бортовой Газелью
                </h2>
                <p className="mt-3 max-w-xl text-slate-300">
                  Открытый борт 5,2 × 2 м, до 1,5 тонн, дизель. Самара и
                  Самарская область: стройматериалы, оборудование, паллеты,
                  переезды юрлиц. Безнал с НДС, ТН и счёт-фактура.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link
                    href="/gruzoperevozki-gazel/"
                    className="rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400"
                  >
                    Подробнее и цены
                  </Link>
                  <a
                    href="tel:+79033352447"
                    className="rounded-xl border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-emerald-400 hover:text-emerald-300"
                  >
                    +7 903 335-24-47
                  </a>
                </div>
              </div>
              <div className="relative hidden md:block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/gazel/og.png"
                  alt="Бортовая Газель 5,2 м — грузоперевозки по Самаре и области"
                  width={1200}
                  height={630}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
            Как мы работаем
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white">
            От заявки до выдачи груза
          </h2>
          <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li
                key={s.title}
                className="rounded-2xl border border-white/10 bg-slate-900/50 p-6"
              >
                <span className="text-sm font-bold text-emerald-400">
                  0{i + 1}
                </span>
                <h3 className="mt-2 font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Wagon types */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
            Подвижной состав
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white">
            Подбираем вагон под груз
          </h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-slate-900/80 text-slate-300">
                <tr>
                  <th scope="col" className="px-5 py-4 font-semibold">
                    Тип вагона
                  </th>
                  <th scope="col" className="px-5 py-4 font-semibold">
                    Грузоподъёмность · объём
                  </th>
                  <th scope="col" className="px-5 py-4 font-semibold">
                    Для каких грузов
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {wagonTypes.map((w) => (
                  <tr key={w.name} className="bg-slate-950/40">
                    <th
                      scope="row"
                      className="px-5 py-4 text-left font-semibold text-white"
                    >
                      {w.name}
                    </th>
                    <td className="whitespace-nowrap px-5 py-4 text-emerald-400">
                      {w.capacity}
                    </td>
                    <td className="px-5 py-4 text-slate-300">{w.cargo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-slate-500">
            Не знаете, какой вагон нужен? Позвоните — подберём подвижной состав и
            рассчитаем тариф.
          </p>
        </div>
      </section>

      {/* Directions */}
      <section id="directions" className="border-b border-white/10 scroll-mt-20">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
            География
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white">
            Приоритетные направления
          </h2>
          <p className="mt-3 max-w-3xl text-slate-400">
            Отправляем грузы по всей сети РЖД. Чаще всего работаем на Урал,
            Сибирь и Дальний Восток — там, где востребованы негабарит, техника и
            проектные грузы.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {directions.map((d) => (
              <div
                key={d.title}
                className="rounded-2xl border border-white/10 bg-slate-900/50 p-5"
              >
                <h3 className="flex items-center gap-2 font-semibold text-white">
                  <Icon name="route" className="h-4 w-4 text-emerald-400" />
                  {d.title}
                </h3>
                <p className="mt-2 text-sm text-emerald-400">{d.text}</p>
                <p className="mt-1 text-sm text-slate-400">{d.points}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-center">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Нужен железнодорожный адрес в Самаре?
                </h2>
                <p className="mt-2 text-slate-300">
                  Принимаем вагоны на станции Кряж: выгрузка, хранение и выдача
                  автотранспортом. Готовые реквизиты для накладной — код станции
                  639608, код ЕЛС 1005368550, ТГНЛ 7262.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
                <Link
                  href="/uslugi/zheleznodorozhnyj-adres/"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400"
                >
                  Реквизиты и условия
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>
                <a
                  href={contacts.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 px-5 py-3 font-semibold text-white transition hover:border-white/60"
                >
                  <Icon name="phone" className="h-4 w-4" />
                  Позвонить
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-b border-white/10 scroll-mt-20">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
            Вопросы и ответы
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white">
            Частые вопросы грузоотправителей
          </h2>
          <div className="mt-8 max-w-3xl divide-y divide-white/10 rounded-2xl border border-white/10 bg-slate-900/50">
            {homeFaq.map((f) => (
              <details key={f.q} className="group px-5 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-white marker:hidden">
                  {f.q}
                  <Icon
                    name="arrow"
                    className="h-4 w-4 shrink-0 rotate-90 text-emerald-400 transition group-open:rotate-[270deg]"
                  />
                </summary>
                <p className="mt-3 text-sm text-slate-300">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
            Контакты
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white">
            Рассчитаем перевозку за день
          </h2>
          <p className="mt-3 max-w-2xl text-slate-400">
            Пришлите род груза, вес, объём и станции отправления и назначения —
            подготовим расчёт тарифа и схему перевозки.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <a
              href={contacts.phoneHref}
              className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 transition hover:border-emerald-500/50"
            >
              <Icon name="phone" className="h-6 w-6 text-emerald-400" />
              <p className="mt-3 text-sm text-slate-400">Телефон</p>
              <p className="mt-1 text-lg font-semibold text-white">
                {contacts.phone}
              </p>
            </a>
            <a
              href={`mailto:${contacts.email}`}
              className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 transition hover:border-emerald-500/50"
            >
              <Icon name="mail" className="h-6 w-6 text-emerald-400" />
              <p className="mt-3 text-sm text-slate-400">E-mail</p>
              <p className="mt-1 text-lg font-semibold text-white">
                {contacts.email}
              </p>
            </a>
            <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6">
              <Icon name="clock" className="h-6 w-6 text-emerald-400" />
              <p className="mt-3 text-sm text-slate-400">Режим работы</p>
              <p className="mt-1 text-lg font-semibold text-white">
                {contacts.hours}
              </p>
              <p className="mt-1 text-sm text-slate-400">{contacts.address}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
