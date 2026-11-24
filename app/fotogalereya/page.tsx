import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Фотогалерея — погрузка и выгрузка вагонов на станции Кряж",
  description:
    "Фото работ на станции Кряж: выгрузка полувагонов и платформ, погрузка экскаваторов, труб, металлоконструкций и ЖБИ кранами КК-32 и КК-16/20, крепление и отправка по сети РЖД.",
  alternates: { canonical: "/fotogalereya/" },
  openGraph: {
    title: "Фотогалерея — погрузка и выгрузка вагонов на станции Кряж",
    description:
      "26 фотографий погрузочно-разгрузочных работ на грузовой станции Кряж: вагоны, платформы, краны, эстакада, негабарит.",
    url: "/fotogalereya/",
    images: [
      {
        url: "/gallery/01.jpg",
        width: 1536,
        height: 1536,
        alt: "Погрузка железнодорожных вагонов на станции Кряж",
      },
    ],
  },
};

type Photo = { n: number; src: string; thumb: string; alt: string; w: number; h: number };

const photos: Photo[] = [
  { n: 1, src: "/gallery/01.jpg", thumb: "/gallery/thumbs/01.jpg", alt: "Погрузка железнодорожных вагонов на станции Кряж Кбш Жд", w: 1536, h: 1536 },
  { n: 2, src: "/gallery/02.jpg", thumb: "/gallery/thumbs/02.jpg", alt: "Прием и выгрузка полувагона с трубой большого диаметра", w: 1600, h: 765 },
  { n: 3, src: "/gallery/03.jpg", thumb: "/gallery/thumbs/03.jpg", alt: "Выгрузка жд платформы с экскаватором по торцевой эстакаде станции Кряж", w: 1600, h: 765 },
  { n: 4, src: "/gallery/04.jpg", thumb: "/gallery/thumbs/04.jpg", alt: "Выгрузка козловым краном металлоконструкций на открытую площадку ст. Кряж", w: 1600, h: 764 },
  { n: 5, src: "/gallery/05.jpg", thumb: "/gallery/thumbs/05.jpg", alt: "Выгрузка автомобильным краном трубной продукции из платформ-трубовозов", w: 1600, h: 766 },
  { n: 6, src: "/gallery/06.jpg", thumb: "/gallery/thumbs/06.jpg", alt: "Погрузка автобуса-лаборатории на железнодорожную платформу", w: 1600, h: 765 },
  { n: 7, src: "/gallery/07.jpg", thumb: "/gallery/thumbs/07.jpg", alt: "Погрузка и крепление экскаваторов на универсальных платформах", w: 1600, h: 765 },
  { n: 8, src: "/gallery/08.jpg", thumb: "/gallery/thumbs/08.jpg", alt: "Прием колодцевого транспортёра с крупногабаритным грузом", w: 1536, h: 734 },
  { n: 9, src: "/gallery/09.jpg", thumb: "/gallery/thumbs/09.jpg", alt: "Погрузка асфальтоукладчика по торцевой эстакаде грузовой станции Кряж", w: 1600, h: 765 },
  { n: 10, src: "/gallery/10.jpg", thumb: "/gallery/thumbs/10.jpg", alt: "Погрузка и отправка трубоукладчика на жд платформе", w: 1066, h: 510 },
  { n: 11, src: "/gallery/11.jpg", thumb: "/gallery/thumbs/11.jpg", alt: "Погрузка и отправка полувагона с ЖБИ на Дальний Восток", w: 1536, h: 1535 },
  { n: 12, src: "/gallery/12.jpg", thumb: "/gallery/thumbs/12.jpg", alt: "Прием и выгрузка сцепа из 2-х универсальных жд платформ с железобетонными столбами", w: 1066, h: 510 },
  { n: 13, src: "/gallery/13.jpg", thumb: "/gallery/thumbs/13.jpg", alt: "Выгрузка металлических конструкций из вагонов для строительства Кировского моста в Самаре", w: 1536, h: 1536 },
  { n: 14, src: "/gallery/14.jpg", thumb: "/gallery/thumbs/14.jpg", alt: "Погрузка по торцевой эстакаде негабаритного H2200 бульдозера на ж/д платформу", w: 1536, h: 1536 },
  { n: 15, src: "/gallery/15.jpg", thumb: "/gallery/thumbs/15.jpg", alt: "Погрузка шасси автомобильного крана на жд платформу ст. Кряж", w: 1536, h: 1536 },
  { n: 16, src: "/gallery/16.jpg", thumb: "/gallery/thumbs/16.jpg", alt: "Прием и разгрузка полувагонов с железобетонными трубами на станции Кряж", w: 1536, h: 1536 },
  { n: 17, src: "/gallery/17.jpg", thumb: "/gallery/thumbs/17.jpg", alt: "Погрузка железобетонных труб в автомобильный транспорт на открытой площадке", w: 1600, h: 2133 },
  { n: 18, src: "/gallery/18.jpg", thumb: "/gallery/thumbs/18.jpg", alt: "Выгрузка металлоконструкций из вагонов в Самаре грузовая станция Кряж", w: 1600, h: 765 },
  { n: 19, src: "/gallery/19.jpg", thumb: "/gallery/thumbs/19.jpg", alt: "Погрузка железнодорожных вагонов на станции Кряж Кбш Жд", w: 1066, h: 510 },
  { n: 20, src: "/gallery/20.jpg", thumb: "/gallery/thumbs/20.jpg", alt: "Станция погрузки вагонов Кряж Куйбышевская железная дорога", w: 1600, h: 764 },
  { n: 21, src: "/gallery/21.jpg", thumb: "/gallery/thumbs/21.jpg", alt: "Выгрузка вагона с трубой большого диаметра на станции Жигулевское Море", w: 1066, h: 510 },
  { n: 22, src: "/gallery/22.jpg", thumb: "/gallery/thumbs/22.jpg", alt: "Погрузка на ж/д платформы техники на колесном и гусеничном ходу", w: 1066, h: 510 },
  { n: 23, src: "/gallery/23.jpg", thumb: "/gallery/thumbs/23.jpg", alt: "Выгрузка автомобильным краном трубной продукции из платформ-трубовозов", w: 1600, h: 766 },
  { n: 24, src: "/gallery/24.jpg", thumb: "/gallery/thumbs/24.jpg", alt: "Погрузка и крепление экскаваторов на универсальных платформах", w: 1066, h: 510 },
  { n: 25, src: "/gallery/25.jpg", thumb: "/gallery/thumbs/25.jpg", alt: "Погрузка и отправка трубоукладчика на жд платформе", w: 1066, h: 510 },
  { n: 26, src: "/gallery/26.jpg", thumb: "/gallery/thumbs/26.jpg", alt: "Прием и выгрузка сцепа из 2-х универсальных жд платформ с железобетонными столбами", w: 1066, h: 510 },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: "https://satrex.ru/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "Фотогалерея",
          item: "https://satrex.ru/fotogalereya/",
        },
      ],
    },
    {
      "@type": "ImageGallery",
      name: "Фотогалерея погрузочно-разгрузочных работ на станции Кряж",
      url: "https://satrex.ru/fotogalereya/",
      image: [
        { "@type": "ImageObject", contentUrl: `https://satrex.ru/gallery/01.jpg`, caption: "Погрузка железнодорожных вагонов на станции Кряж Кбш Жд", width: 1536, height: 1536 },
        { "@type": "ImageObject", contentUrl: `https://satrex.ru/gallery/02.jpg`, caption: "Прием и выгрузка полувагона с трубой большого диаметра", width: 1600, height: 765 },
        { "@type": "ImageObject", contentUrl: `https://satrex.ru/gallery/03.jpg`, caption: "Выгрузка жд платформы с экскаватором по торцевой эстакаде станции Кряж", width: 1600, height: 765 },
        { "@type": "ImageObject", contentUrl: `https://satrex.ru/gallery/04.jpg`, caption: "Выгрузка козловым краном металлоконструкций на открытую площадку ст. Кряж", width: 1600, height: 764 },
        { "@type": "ImageObject", contentUrl: `https://satrex.ru/gallery/05.jpg`, caption: "Выгрузка автомобильным краном трубной продукции из платформ-трубовозов", width: 1600, height: 766 },
        { "@type": "ImageObject", contentUrl: `https://satrex.ru/gallery/06.jpg`, caption: "Погрузка автобуса-лаборатории на железнодорожную платформу", width: 1600, height: 765 },
        { "@type": "ImageObject", contentUrl: `https://satrex.ru/gallery/07.jpg`, caption: "Погрузка и крепление экскаваторов на универсальных платформах", width: 1600, height: 765 },
        { "@type": "ImageObject", contentUrl: `https://satrex.ru/gallery/08.jpg`, caption: "Прием колодцевого транспортёра с крупногабаритным грузом", width: 1536, height: 734 },
        { "@type": "ImageObject", contentUrl: `https://satrex.ru/gallery/09.jpg`, caption: "Погрузка асфальтоукладчика по торцевой эстакаде грузовой станции Кряж", width: 1600, height: 765 },
        { "@type": "ImageObject", contentUrl: `https://satrex.ru/gallery/10.jpg`, caption: "Погрузка и отправка трубоукладчика на жд платформе", width: 1066, height: 510 },
        { "@type": "ImageObject", contentUrl: `https://satrex.ru/gallery/11.jpg`, caption: "Погрузка и отправка полувагона с ЖБИ на Дальний Восток", width: 1536, height: 1535 },
        { "@type": "ImageObject", contentUrl: `https://satrex.ru/gallery/12.jpg`, caption: "Прием и выгрузка сцепа из 2-х универсальных жд платформ с железобетонными столбами", width: 1066, height: 510 },
        { "@type": "ImageObject", contentUrl: `https://satrex.ru/gallery/13.jpg`, caption: "Выгрузка металлических конструкций из вагонов для строительства Кировского моста в Самаре", width: 1536, height: 1536 },
        { "@type": "ImageObject", contentUrl: `https://satrex.ru/gallery/14.jpg`, caption: "Погрузка по торцевой эстакаде негабаритного H2200 бульдозера на ж/д платформу", width: 1536, height: 1536 },
        { "@type": "ImageObject", contentUrl: `https://satrex.ru/gallery/15.jpg`, caption: "Погрузка шасси автомобильного крана на жд платформу ст. Кряж", width: 1536, height: 1536 },
        { "@type": "ImageObject", contentUrl: `https://satrex.ru/gallery/16.jpg`, caption: "Прием и разгрузка полувагонов с железобетонными трубами на станции Кряж", width: 1536, height: 1536 },
        { "@type": "ImageObject", contentUrl: `https://satrex.ru/gallery/17.jpg`, caption: "Погрузка железобетонных труб в автомобильный транспорт на открытой площадке", width: 1600, height: 2133 },
        { "@type": "ImageObject", contentUrl: `https://satrex.ru/gallery/18.jpg`, caption: "Выгрузка металлоконструкций из вагонов в Самаре грузовая станция Кряж", width: 1600, height: 765 },
        { "@type": "ImageObject", contentUrl: `https://satrex.ru/gallery/19.jpg`, caption: "Погрузка железнодорожных вагонов на станции Кряж Кбш Жд", width: 1066, height: 510 },
        { "@type": "ImageObject", contentUrl: `https://satrex.ru/gallery/20.jpg`, caption: "Станция погрузки вагонов Кряж Куйбышевская железная дорога", width: 1600, height: 764 },
        { "@type": "ImageObject", contentUrl: `https://satrex.ru/gallery/21.jpg`, caption: "Выгрузка вагона с трубой большого диаметра на станции Жигулевское Море", width: 1066, height: 510 },
        { "@type": "ImageObject", contentUrl: `https://satrex.ru/gallery/22.jpg`, caption: "Погрузка на ж/д платформы техники на колесном и гусеничном ходу", width: 1066, height: 510 },
        { "@type": "ImageObject", contentUrl: `https://satrex.ru/gallery/23.jpg`, caption: "Выгрузка автомобильным краном трубной продукции из платформ-трубовозов", width: 1600, height: 766 },
        { "@type": "ImageObject", contentUrl: `https://satrex.ru/gallery/24.jpg`, caption: "Погрузка и крепление экскаваторов на универсальных платформах", width: 1066, height: 510 },
        { "@type": "ImageObject", contentUrl: `https://satrex.ru/gallery/25.jpg`, caption: "Погрузка и отправка трубоукладчика на жд платформе", width: 1066, height: 510 },
        { "@type": "ImageObject", contentUrl: `https://satrex.ru/gallery/26.jpg`, caption: "Прием и выгрузка сцепа из 2-х универсальных жд платформ с железобетонными столбами", width: 1066, height: 510 }
      ],
    },
  ],
};

export default function FotoPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav className="text-sm text-slate-400" aria-label="Хлебные крошки">
        <Link href="/" className="transition hover:text-white">
          Главная
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-200">Фотогалерея</span>
      </nav>

      <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
        Фотогалерея работ на станции Кряж
      </h1>
      <p className="mt-4 max-w-3xl text-lg text-slate-300">
        26 фотографий с грузовой станции Кряж: выгрузка полувагонов и платформ,
        погрузка экскаваторов, труб большого диаметра, металлоконструкций и ЖБИ,
        работа козловых кранов КК-32 и КК-16/20, торцевая эстакада и крепление
        негабарита. Нажмите на фото, чтобы открыть его крупнее.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {photos.map((p) => (
          <figure
            key={p.n}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50"
          >
            <a
              href={`#photo-${p.n}`}
              className="block overflow-hidden"
              aria-label={`Открыть фото: ${p.alt}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.thumb}
                alt={p.alt}
                width={800}
                height={Math.round((800 * p.h) / p.w)}
                loading={p.n <= 3 ? "eager" : "lazy"}
                decoding="async"
                className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-[1.03]"
              />
            </a>
            <figcaption className="px-3 py-2 text-xs leading-snug text-slate-400">
              {p.alt}
            </figcaption>
          </figure>
        ))}
      </div>

      {photos.map((p) => (
        <div key={`lb-${p.n}`} id={`photo-${p.n}`} className="lightbox">
          <a href="#" className="lightbox__backdrop" aria-label="Закрыть просмотр" />
          <figure className="lightbox__content">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.src} alt={p.alt} loading="lazy" decoding="async" />
            <figcaption>{p.alt}</figcaption>
          </figure>
          <a href="#" className="lightbox__close" aria-label="Закрыть">
            Закрыть &#10005;
          </a>
        </div>
      ))}

      <div className="mt-12 rounded-2xl border border-white/10 bg-slate-900/50 p-6">
        <h2 className="text-lg font-semibold text-white">Смотрите также</h2>
        <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {[
            ["/uslugi/", "Все услуги"],
            ["/gruzoperevozki-gazel/", "Грузоперевозки Газелью"],
            ["/uslugi/arenda-poluvagonov/", "Аренда полувагонов"],
            ["/uslugi/pogruzochno-razgruzochnye-raboty/", "Погрузо-разгрузочные работы"],
            ["/uslugi/shemy-pogruzki/", "Схемы погрузки"],
            ["/#contacts", "Контакты"],
          ].map(([href, label]) => (
            <li key={href}>
              <Link
                href={href}
                className="text-emerald-400 transition hover:text-emerald-300"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
