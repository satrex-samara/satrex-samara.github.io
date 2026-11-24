import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "../../icons";
import { contacts, getService, services, site } from "../../lib/satrex";

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: s.title,
    description: s.description,
    alternates: { canonical: `/uslugi/${slug}/` },
    openGraph: {
      type: "article",
      title: s.title,
      description: s.description,
      url: `/uslugi/${slug}/`,
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: `САТРЭКС — ${s.title}`,
        },
      ],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const related = s.related;
  const others = related
    ? services.filter((o) => related.includes(o.slug))
    : services.filter((o) => o.slug !== s.slug).slice(0, 3);

  const minPrice = s.price.match(/\d[\d\s]*/)?.[0].replace(/\s/g, "");

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: `${site.url}/` },
        {
          "@type": "ListItem",
          position: 2,
          name: "Услуги",
          item: `${site.url}/uslugi/`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: s.h1,
          item: `${site.url}/uslugi/${slug}/`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: s.h1,
      serviceType: s.h1,
      description: s.description,
      url: `${site.url}/uslugi/${slug}/`,
      areaServed: ["Самара", "Самарская область", "Россия", "СНГ"],
      provider: {
        "@type": "LocalBusiness",
        "@id": `${site.url}/#organization`,
        name: site.name,
        telephone: contacts.phoneHref.replace("tel:", ""),
        email: contacts.email,
        address: {
          "@type": "PostalAddress",
          addressCountry: "RU",
          addressRegion: "Самарская область",
          addressLocality: "Самара",
          streetAddress: "Грузовая станция Кряж, Куйбышевская железная дорога",
        },
      },
      ...(minPrice
        ? {
            offers: {
              "@type": "Offer",
              priceCurrency: "RUB",
              description: s.price,
              priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: "RUB",
                minPrice,
              },
              url: `${site.url}/uslugi/${slug}/`,
            },
          }
        : {}),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: s.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

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
        <Link href="/uslugi/" className="transition hover:text-white">
          Услуги
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-200">{s.h1}</span>
      </nav>

      <div className="mt-6 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-start">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            {s.h1}
          </h1>
          <p className="mt-4 text-2xl font-bold text-emerald-400">{s.price}</p>

          <div className="mt-6 max-w-3xl space-y-4 text-slate-300">
            {s.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        <aside className="rounded-2xl border border-emerald-500/30 bg-slate-900/60 p-6 lg:sticky lg:top-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
            Оставить заявку
          </p>
          <p className="mt-2 text-sm text-slate-300">
            Рассчитаем стоимость и сроки по вашему грузу. Ответим в рабочее
            время: {contacts.hours}.
          </p>
          <a
            href={contacts.phoneHref}
            className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-4 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400"
          >
            <Icon name="phone" className="h-4 w-4" />
            {contacts.phone}
          </a>
          <a
            href={`mailto:${contacts.email}`}
            className="mt-2 flex items-center justify-center gap-2 rounded-lg border border-white/20 px-4 py-3 font-semibold text-white transition hover:border-white/50"
          >
            <Icon name="mail" className="h-4 w-4" />
            Написать на e-mail
          </a>
          <p className="mt-4 flex items-start gap-2 text-xs text-slate-400">
            <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
            {contacts.address}
          </p>
        </aside>
      </div>

      {s.requisites?.map((g) => (
        <section key={g.title}>
          <h2 className="mt-12 text-2xl font-bold text-white">{g.title}</h2>
          <dl className="mt-4 max-w-3xl divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50">
            {g.items.map((r) => (
              <div
                key={r.label}
                className="grid gap-1 p-4 md:grid-cols-[16rem_1fr] md:gap-4"
              >
                <dt className="text-sm text-slate-400">{r.label}</dt>
                <dd className="font-semibold text-slate-200">{r.value}</dd>
              </div>
            ))}
          </dl>
        </section>
      ))}

      <h2 className="mt-12 text-2xl font-bold text-white">Что входит в услугу</h2>
      <ul className="mt-4 grid max-w-3xl gap-3 text-slate-300 sm:grid-cols-2">
        {s.includes.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-2 rounded-xl border border-white/10 bg-slate-900/40 p-3 text-sm"
          >
            <Icon
              name="check"
              className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400"
            />
            {item}
          </li>
        ))}
      </ul>

      <h2 className="mt-12 text-2xl font-bold text-white">Вопрос — ответ</h2>
      <div className="mt-4 max-w-3xl divide-y divide-white/10 rounded-2xl border border-white/10 bg-slate-900/50">
        {s.faq.map((f, i) => (
          <details key={i} className="group px-5 py-4">
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

      <h2 className="mt-12 text-2xl font-bold text-white">Смотрите также</h2>
      <div className="mt-4 grid gap-6 md:grid-cols-3">
        {others.map((o) => (
          <Link
            key={o.slug}
            href={`/uslugi/${o.slug}/`}
            className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 transition hover:border-emerald-500/50"
          >
            <h3 className="text-lg font-semibold leading-snug text-white">
              {o.h1}
            </h3>
            <p className="mt-2 text-sm text-slate-400">{o.summary}</p>
            <p className="mt-3 font-bold text-emerald-400">{o.price}</p>
          </Link>
        ))}
      </div>

      <p className="mt-8 text-sm">
        <Link
          href="/uslugi/"
          className="font-semibold text-emerald-400 transition hover:text-emerald-300"
        >
          ← Все услуги и цены
        </Link>
      </p>
    </div>
  );
}
