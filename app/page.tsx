import type { Metadata } from "next";
import { contacts, services } from "./lib/satrex";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const advantages = [
  {
    title: "У станции Кряж",
    text: "Терминал в непосредственной близости от грузовой станции Кряж Куйбышевской ЖД — минимум порожнего пробега.",
  },
  {
    title: "Оптимизация логистики",
    text: "Работаем напрямую с собственниками вагонов, владельцами инфраструктуры и подразделениями РЖД.",
  },
  {
    title: "Без штрафов",
    text: "Контролируем сроки подачи и уборки — минимизируем санкции от собственников вагонов и РЖД.",
  },
  {
    title: "10 лет опыта",
    text: "Буровые установки, химреагенты, модульные здания, техника и ЖБИ по всей сети РЖД.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-sm font-semibold tracking-widest text-emerald-400 uppercase">
              Самара · станция Кряж · Кбш ЖД
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              Железнодорожные грузоперевозки в Самаре
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Отправка и перевозка грузов, погрузочно-разгрузочные работы на
              станциях Самарского региона. Собственные подъездные пути, прямые
              договоры с РЖД.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contacts"
                className="rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400"
              >
                {contacts.phone}
              </a>
              <a
                href="#services"
                className="rounded-lg border border-white/20 px-6 py-3 font-semibold transition hover:border-white/50"
              >
                Наши услуги
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-bold text-white">О компании</h2>
          <div className="mt-4 max-w-3xl space-y-4 text-slate-300">
            <p>
              САТРЭКС оказывает комплекс транспортно-логистических услуг на
              грузовых железнодорожных станциях Самары. Отправляем и перевозим
              грузы различной номенклатуры, организуем
              погрузочно-разгрузочные работы на станциях Куйбышевской железной
              дороги.
            </p>
            <p>
              Накоплен большой опыт приёма и отправки грузов на универсальном
              подвижном составе: Нижневартовск, Лабытнанги, Ноябрьск, Усинск,
              Сахалин, Дальний Восток.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-bold text-white">Услуги</h2>
          <p className="mt-2 text-slate-400">
            Девять направлений — от вагона до полного цикла под ключ.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {services.map((s) => (
              <a
                key={s.slug}
                href={`/uslugi/${s.slug}/`}
                className="flex flex-col rounded-2xl border border-white/10 bg-slate-900/50 p-6 transition hover:border-emerald-500/50"
              >
                <h3 className="text-xl font-semibold text-white">{s.h1}</h3>
                <p className="mt-4 font-bold text-emerald-400">{s.price}</p>
                <span className="mt-2 text-sm text-slate-400">
                  Подробнее →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section id="advantages" className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl font-bold text-white">Почему САТРЭКС</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((a) => (
              <div
                key={a.title}
                className="rounded-2xl border border-white/10 bg-slate-900/50 p-6"
              >
                <h3 className="font-semibold text-emerald-400">{a.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div>
            <h2 className="text-3xl font-bold text-white">Контакты</h2>
            <p className="mt-2 text-slate-400">
              Ответим в рабочее время: {contacts.hours}.
            </p>
            <ul className="mt-6 space-y-3 text-slate-300">
              <li>
                📞{" "}
                <a className="hover:text-white" href={contacts.phoneHref}>
                  {contacts.phone}
                </a>
              </li>
              <li>
                ✉️{" "}
                <a
                  className="hover:text-white"
                  href={`mailto:${contacts.email}`}
                >
                  {contacts.email}
                </a>
              </li>
              <li>📍 {contacts.address}</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
