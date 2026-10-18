import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { contacts, getService, services } from "../../lib/satrex";

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
    : services.filter((o) => o.slug !== s.slug).slice(0, 2);

  const site = "https://satrex-samara.github.io";
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: `${site}/` },
        {
          "@type": "ListItem",
          position: 2,
          name: "Услуги",
          item: `${site}/#services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: s.h1,
          item: `${site}/uslugi/${slug}/`,
        },
      ],
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
      <nav className="text-sm text-slate-400">
        <Link href="/" className="hover:text-white">
          Главная
        </Link>
        <span className="mx-2">/</span>
        <Link href="/#services" className="hover:text-white">
          Услуги
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-200">{s.h1}</span>
      </nav>

      <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
        {s.h1}
      </h1>
      <p className="mt-4 text-2xl font-bold text-emerald-400">{s.price}</p>

      <div className="mt-8 max-w-3xl space-y-4 text-slate-300">
        {s.intro.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {s.requisites?.map((g) => (
        <section key={g.title}>
          <h2 className="mt-10 text-2xl font-bold text-white">{g.title}</h2>
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

      <h2 className="mt-10 text-2xl font-bold text-white">Что входит</h2>
      <ul className="mt-4 max-w-3xl space-y-2 text-slate-300">
        {s.includes.map((item, i) => (
          <li key={i}>✓ {item}</li>
        ))}
      </ul>

      <h2 className="mt-10 text-2xl font-bold text-white">Вопрос — ответ</h2>
      <div className="mt-4 max-w-3xl space-y-4">
        {s.faq.map((f, i) => (
          <div
            key={i}
            className="rounded-2xl border border-white/10 bg-slate-900/50 p-5"
          >
            <h3 className="font-semibold text-emerald-400">{f.q}</h3>
            <p className="mt-2 text-slate-300">{f.a}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-6">
        <p className="text-lg font-semibold text-white">Нужна эта услуга?</p>
        <p className="mt-1 text-slate-300">
          Позвоните:{" "}
          <a
            className="font-bold text-emerald-400 hover:text-emerald-300"
            href={contacts.phoneHref}
          >
            {contacts.phone}
          </a>{" "}
          или напишите на{" "}
          <a className="hover:text-white" href={`mailto:${contacts.email}`}>
            {contacts.email}
          </a>
        </p>
      </div>

      <h2 className="mt-10 text-2xl font-bold text-white">Смотрите также</h2>
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        {others.map((o) => (
          <Link
            key={o.slug}
            href={`/uslugi/${o.slug}/`}
            className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 transition hover:border-emerald-500/50"
          >
            <h3 className="text-xl font-semibold text-white">{o.h1}</h3>
            <p className="mt-2 font-bold text-emerald-400">{o.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
