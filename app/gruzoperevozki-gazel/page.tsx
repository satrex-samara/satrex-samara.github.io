import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Грузоперевозки бортовой Газелью в Самаре и области",
  description:
    "Бортовая Газель 5,2 м, до 1,5 т: перевозки по Самаре и области для юрлиц. Дизель, безнал с НДС, ТН и счёт-фактура, без посредников. ☎ +7-903-335-24-47",
  alternates: { canonical: "/gruzoperevozki-gazel/" },
  openGraph: {
    title: "Грузоперевозки бортовой Газелью в Самаре и области",
    description:
      "Открытый борт 5,2 × 2 м, до 1,5 тонн, дизель. Самара и Самарская область, юрлица, безналичный расчёт с НДС.",
    url: "/gruzoperevozki-gazel/",
    images: [
      {
        url: "/gazel/og.png",
        width: 1200,
        height: 630,
        alt: "САТРЭКС — грузоперевозки бортовой Газелью в Самаре",
      },
    ],
  },
};

const specs: [string, string][] = [
  ["Двигатель", "дизельный"],
  ["Грузоподъёмность", "до 1,5 тонн"],
  ["Кузов", "бортовой, открытый, откидные борта"],
  ["Тент", "без тента (есть крепления под тент)"],
  ["Длина кузова", "5,2 м (удлинённая модель; стандарт — до 3 м)"],
  ["Ширина кузова", "2 м"],
  ["Высота погрузки", "до 2,5 м — без ограничения крышей фургона"],
  ["Способ погрузки", "с борта, краном сверху, вилочным погрузчиком сбоку"],
  ["Кабина", "2 человека"],
  ["Документы", "ТН, счёт-фактура, акт с НДС"],
];

const cargos = [
  {
    h: "Стройматериалы",
    p: "Трубы, металлопрокат, арматура, профиль, пиломатериалы, блоки, сухие смеси, сайдинг, черепица. Длинномер до 5,2 м без деления.",
  },
  {
    h: "Промышленное оборудование",
    p: "Станки, прессы, компрессоры, насосы, редукторы, торговое и холодильное оборудование.",
  },
  {
    h: "Производственные линии",
    p: "Агрегаты, узлы и комплектующие любой конфигурации — с загрузкой краном или погрузчиком.",
  },
  {
    h: "Паллеты и тарно-штучные грузы",
    p: "Поддоны, ящики, упакованная продукция. Погрузка вилочным погрузчиком через борт.",
  },
  {
    h: "Техника и электроника",
    p: "Серверные стойки, климатическое оборудование, профессиональная техника в заводской упаковке.",
  },
  {
    h: "Переезды юрлиц",
    p: "Офисная мебель, стеллажи, сейфы, крупный инвентарь при переезде между объектами.",
  },
];

const prep = [
  {
    h: "Проверьте вес и габариты",
    p: "Лимит — 1,5 т и 5,2 × 2 м. Считайте вес упаковки и поддонов: перегруз — ответственность грузоотправителя по ст. 11.23 КоАП РФ.",
  },
  {
    h: "Защитите груз от осадков",
    p: "Тента нет. Технику, картон и мебель упакуйте в стрейч-плёнку или полиэтилен — плёнку обеспечивает заказчик.",
  },
  {
    h: "Организуйте погрузку",
    p: "Заранее сообщите, кто и чем грузит, есть ли пропуск, весовой контроль, ограничение по высоте ворот.",
  },
  {
    h: "Закрепите груз",
    p: "Ремни, цепи, распорки. По ПП РФ № 2200 ответственность за крепление несёт грузоотправитель.",
  },
  {
    h: "Соблюдайте ПДД",
    p: "Выступ за борт более 1 м сзади и 0,5 м по бокам требует знака «Крупногабаритный груз» и согласования маршрута.",
  },
  {
    h: "Подготовьте реквизиты",
    p: "Наименование, количество мест, масса, реквизиты грузополучателя — так ТН и счёт-фактура оформляются на месте.",
  },
];

const notCarried = [
  "Опасные грузы (ADR) и материалы без паспорта безопасности",
  "Скоропортящиеся продукты, требующие температурного режима",
  "Грузы свыше 1,5 т и длиннее 5,2 м без разборки на места",
  "Наливные грузы в открытой таре без герметичной упаковки",
];

const priceFactors = [
  "Расстояние и маршрут: город или область",
  "Время подачи: рабочие часы, вечер, выходные",
  "Способ погрузки: ручная, кран, вилочный погрузчик",
  "Ограниченный подъезд, многоадресность, ожидание",
];

const extras = [
  "Страхование груза до 100 000 ₽",
  "Данные водителя для оформления пропуска на объект",
  "Погрузка краном, манипулятором или погрузчиком — по согласованию",
];

const zones = [
  ["Самара", "Все районы, промзоны, склады, объекты строительства"],
  ["Тольятти", "АвтоВАЗ, промышленные предприятия, склады"],
  ["Новокуйбышевск", "НПЗ, нефтехимические предприятия"],
  ["Сызрань", "Запад Самарской области, промышленные объекты"],
  ["Чапаевск, Кинель", "Промышленные объекты и склады"],
  ["Вся область", "Другие города и районы — расчёт по расстоянию"],
];

const steps = [
  ["Свяжитесь с нами", "Позвоните +7 903 335-24-47 или напишите на samara@satrex.ru. Работаем Пн–Пт, 09:00–16:00."],
  ["Укажите данные груза", "Адреса, вес и габариты каждого места, тип упаковки, способ погрузки, дата."],
  ["Получите расчёт", "Считаем стоимость с НДС и согласуем дату и время подачи машины."],
  ["Перевозка и документы", "Машина приходит вовремя. Оформляем ТН, счёт-фактуру с НДС и акт."],
];

const faq = [
  ["Какой груз можно перевезти на бортовой Газели?", "Стройматериалы, металлопрокат, оборудование, станки, паллеты, мебель и инвентарь при переездах юрлиц. Вес от 300 кг до 1,5 т, кузов 5,2 × 2 м, открытый, без тента."],
  ["Что указать при заказе?", "Адреса отправления и назначения, вес и габариты каждого грузового места, тип упаковки, способ погрузки и дату перевозки."],
  ["Как оформить заказ?", "Позвоните +7 903 335-24-47 или отправьте заявку на samara@satrex.ru."],
  ["Какие способы оплаты?", "Только безналичный расчёт с НДС для юридических лиц. Наличный расчёт и расчёт без НДС не выполняются."],
  ["Предоставляете ли грузчиков?", "Нет. Погрузку и разгрузку организует заказчик."],
  ["Работаете ли с физическими лицами?", "Специализируемся на юридических лицах по безналичному расчёту с НДС, цена договорная."],
  ["Можно ли перевезти длинномер?", "Да, борт 5,2 м подходит для труб, профиля, пиломатериалов, балок. При выступании более 1 м сзади нужен знак «Крупногабаритный груз»."],
  ["Как крепится груз?", "Борта фиксируются штатными запорами, крепление — ремнями, цепями или распорками заказчика. Ответственность за крепление — на грузоотправителе (ПП РФ № 2200)."],
  ["Какие документы оформляете?", "Транспортную накладную по форме ПП РФ № 2200, счёт-фактуру с НДС и акт выполненных работ."],
  ["Защищён ли груз от дождя и пыли?", "Нет, кузов открытый. Влагочувствительные грузы заказчик упаковывает сам."],
  ["Есть ли Газель с тентом?", "В парке — бортовая Газель без тента. Для чувствительных грузов нужна упаковка заказчика."],
  ["Работаете ли по области?", "Да: Тольятти, Сызрань, Новокуйбышевск, Чапаевск, Кинель и другие населённые пункты. Стоимость — по расстоянию."],
  ["Можно ли загрузить краном или погрузчиком?", "Да, открытый борт позволяет загрузку кран-балкой, вилочным погрузчиком или манипулятором — сообщите способ при заказе."],
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://satrex.ru/gruzoperevozki-gazel/#service",
      name: "Грузоперевозки на бортовой Газели",
      serviceType: "Автомобильные грузоперевозки",
      description:
        "Перевозка грузов бортовой Газелью 5,2 м, до 1,5 тонн, по Самаре и Самарской области для юридических лиц: безналичный расчёт с НДС, оформление ТН, счёт-фактуры и акта по ПП РФ № 2200.",
      provider: { "@id": "https://satrex.ru/#org" },
      areaServed: [
        { "@type": "City", name: "Самара" },
        { "@type": "AdministrativeArea", name: "Самарская область" },
      ],
      url: "https://satrex.ru/gruzoperevozki-gazel/",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: "https://satrex.ru/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Грузоперевозки Газелью",
          item: "https://satrex.ru/gruzoperevozki-gazel/",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faq.map(([q, a]) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
  ],
};

export default function GazelPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav className="text-sm text-slate-400" aria-label="Хлебные крошки">
        <Link href="/" className="transition hover:text-white">
          Главная
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-200">Грузоперевозки Газелью</span>
      </nav>

      <div className="mt-8 rounded-3xl border border-white/10 bg-slate-900/50 p-6 md:p-10">
        <span className="inline-block rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-300">
          Самара и Самарская область
        </span>
        <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
          Грузоперевозки бортовой Газелью
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-300">
          Открытая бортовая Газель <b className="text-white">5,2 метра</b>, до{" "}
          <b className="text-white">1,5 тонн</b>, дизель. Перевозки по Самаре и
          области для юридических лиц: цена договорная с НДС, без посредников,
          полный пакет документов.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {["Дизель", "До 1,5 т", "Кузов 5,2 × 2 м", "Без тента", "Без посредников"].map(
            (c) => (
              <span
                key={c}
                className="rounded-full border border-emerald-500/35 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-200"
              >
                {c}
              </span>
            ),
          )}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="tel:+79033352447"
            className="rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400"
          >
            Позвонить: +7 903 335-24-47
          </a>
          <a
            href="mailto:samara@satrex.ru"
            className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-emerald-400 hover:text-emerald-300"
          >
            Заявка на почту
          </a>
        </div>
      </div>

      <section id="harakteristiki" className="mt-14">
        <h2 className="text-2xl font-bold text-white md:text-3xl">
          Характеристики автомобиля
        </h2>
        <p className="mt-2 text-slate-400">
          Удлинённая бортовая Газель — для крупногабаритных и тяжёлых грузов по
          городу и области.
        </p>
        <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50">
          {specs.map(([k, v]) => (
            <div
              key={k}
              className="flex flex-col gap-1 border-b border-dashed border-white/10 px-5 py-4 last:border-b-0 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
            >
              <span className="text-sm text-slate-400">{k}</span>
              <b className="text-sm font-semibold text-white sm:text-right">{v}</b>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-2xl border border-emerald-500/25 border-l-4 border-l-emerald-500 bg-emerald-500/5 p-5">
          <b className="text-emerald-300">Почему открытый борт удобнее фургона:</b>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-slate-300">
            <li>нет ограничения по высоте загрузки — груз не упирается в крышу;</li>
            <li>погрузка краном, кран-балкой или вилочным погрузчиком через борт;</li>
            <li>длинномеры до 5,2 м входят без деления на части;</li>
            <li>удобно грузить со стеллажа, поддона или причала.</li>
          </ul>
        </div>
      </section>

      <section id="gruzy" className="mt-14">
        <h2 className="text-2xl font-bold text-white md:text-3xl">
          Какие грузы перевозим
        </h2>
        <p className="mt-2 text-slate-400">
          От склада до объекта. Только юридические лица, безналичный расчёт с НДС.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cargos.map((c) => (
            <article
              key={c.h}
              className="rounded-2xl border border-white/10 bg-slate-900/50 p-5"
            >
              <h3 className="text-base font-semibold text-white">{c.h}</h3>
              <p className="mt-2 text-sm text-slate-400">{c.p}</p>
            </article>
          ))}
        </div>
        <div className="mt-4 rounded-2xl border border-amber-500/25 border-l-4 border-l-amber-500 bg-amber-500/5 p-5">
          <b className="text-amber-300">Что мы не перевозим:</b>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-slate-300">
            {notCarried.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="podgotovka" className="mt-14">
        <h2 className="text-2xl font-bold text-white md:text-3xl">
          Как подготовить груз к перевозке
        </h2>
        <p className="mt-2 text-slate-400">
          Шесть деталей до подачи машины, которые экономят время и снимают
          спорные ситуации.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {prep.map((c) => (
            <article
              key={c.h}
              className="rounded-2xl border border-white/10 bg-slate-900/50 p-5"
            >
              <h3 className="text-base font-semibold text-white">{c.h}</h3>
              <p className="mt-2 text-sm text-slate-400">{c.p}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="stoimost" className="mt-14">
        <h2 className="text-2xl font-bold text-white md:text-3xl">
          Стоимость перевозки
        </h2>
        <p className="mt-2 text-slate-400">
          Цена договорная с НДС — зависит от расстояния, веса и условий
          погрузки.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-slate-900/50 p-5">
            <h3 className="text-base font-semibold text-white">По Самаре</h3>
            <p className="mt-2 text-sm text-slate-400">
              Почасовая ставка: время в пути и простой на адресе. Минимальный
              заказ — 2 часа, ставку уточняйте при заявке.
            </p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-slate-900/50 p-5">
            <h3 className="text-base font-semibold text-white">
              По Самарской области
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              Расчёт по километражу от погрузки до выгрузки. Подача машины по
              Самаре — дополнительно.
            </p>
          </article>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-5">
            <b className="text-white">Что влияет на цену</b>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-400">
              {priceFactors.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-5">
            <b className="text-white">Дополнительно</b>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-slate-400">
              {extras.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-4 text-sm text-slate-500">
          Работаем только по безналичному расчёту с НДС. Счёт выставляем после
          согласования заявки.{" "}
          <b className="text-slate-300">Расчёт наличными и без НДС не выполняем.</b>
        </p>
      </section>

      <section id="zona" className="mt-14">
        <h2 className="text-2xl font-bold text-white md:text-3xl">Зоны доставки</h2>
        <p className="mt-2 text-slate-400">
          Выполняем перевозки по всей Самарской области.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {zones.map(([h, p]) => (
            <div
              key={h}
              className="rounded-xl border border-white/10 bg-slate-900/50 p-4"
            >
              <h3 className="text-sm font-semibold text-white">{h}</h3>
              <p className="mt-1 text-sm text-slate-400">{p}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="zakaz" className="mt-14">
        <h2 className="text-2xl font-bold text-white md:text-3xl">
          Как заказать перевозку
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {steps.map(([h, p], i) => (
            <article
              key={h}
              className="relative rounded-2xl border border-white/10 bg-slate-900/50 p-5 pl-16"
            >
              <span className="absolute left-4 top-5 grid h-8 w-8 place-items-center rounded-full border border-emerald-500/45 bg-emerald-500/15 font-bold text-emerald-300">
                {i + 1}
              </span>
              <h3 className="text-base font-semibold text-white">{h}</h3>
              <p className="mt-2 text-sm text-slate-400">{p}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="faq" className="mt-14">
        <h2 className="text-2xl font-bold text-white md:text-3xl">
          Частые вопросы
        </h2>
        <div className="mt-6 space-y-2.5">
          {faq.map(([q, a], i) => (
            <details
              key={q}
              open={i === 0}
              className="rounded-2xl border border-white/10 bg-slate-900/50 px-5 py-4"
            >
              <summary className="cursor-pointer list-none pr-8 font-semibold text-white">
                {q}
              </summary>
              <p className="mt-3 text-sm text-slate-400">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="kontakty" className="mt-14">
        <h2 className="text-2xl font-bold text-white md:text-3xl">Контакты</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {[
            ["Телефон", "+7 903 335-24-47", "tel:+79033352447"],
            ["Почта", "samara@satrex.ru", "mailto:samara@satrex.ru"],
          ].map(([k, v, href]) => (
            <div
              key={k}
              className="rounded-2xl border border-white/10 bg-slate-900/50 p-5"
            >
              <h3 className="text-sm uppercase tracking-wide text-slate-500">{k}</h3>
              <a
                href={href}
                className="mt-1 block text-lg font-semibold text-emerald-300 hover:underline"
              >
                {v}
              </a>
            </div>
          ))}
          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-5">
            <h3 className="text-sm uppercase tracking-wide text-slate-500">
              Время работы
            </h3>
            <p className="mt-1 font-semibold text-white">Пн–Пт 09:00–16:00</p>
            <p className="text-sm text-slate-400">Сб–Вс — выходной</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-5">
            <h3 className="text-sm uppercase tracking-wide text-slate-500">Адрес</h3>
            <p className="mt-1 font-semibold text-white">
              г. Самара, грузовая станция Кряж, Кбш ЖД
            </p>
          </div>
        </div>
        <p className="mt-4 text-sm text-slate-500">
          САТРЭКС — собственная площадка на станции Кряж. Железнодорожные
          перевозки — на{" "}
          <Link href="/" className="text-emerald-300 hover:underline">
            satrex.ru
          </Link>
          .
        </p>
      </section>
    </section>
  );
}