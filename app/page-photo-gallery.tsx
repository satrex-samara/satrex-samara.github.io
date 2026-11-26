import Image from "next/image";
import Link from "next/link";
import type { PagePhoto } from "./lib/page-photos";

export default function PagePhotoGallery({
  photos,
  contained = false,
}: {
  photos: readonly PagePhoto[];
  contained?: boolean;
}) {
  return (
    <section
      aria-labelledby="page-photo-gallery-title"
      className={
        contained
          ? "-mx-4 border-y border-white/10 bg-slate-950/30"
          : "border-t border-white/10 bg-slate-950/30"
      }
    >
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-16">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
              САТРЭКС · рабочие будни
            </p>
            <h2
              id="page-photo-gallery-title"
              className="mt-2 text-2xl font-bold text-white md:text-3xl"
            >
              Фото работ САТРЭКС
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-400">
              Реальные кадры грузовых операций на станции Кряж.
            </p>
          </div>
          <Link
            href="/fotogalereya/"
            className="inline-flex min-h-11 items-center gap-2 font-semibold text-emerald-400 transition hover:text-emerald-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-400"
          >
            Вся фотогалерея
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div
          className={
            photos.length === 1
              ? "grid max-w-2xl gap-4"
              : "grid gap-4 sm:grid-cols-2"
          }
        >
          {photos.map((photo) => (
            <figure
              key={photo.id}
              className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70"
            >
              <a
                href={`/fotogalereya/#photo-${photo.id}`}
                aria-label={`Открыть фотографию в галерее: ${photo.alt}`}
                className="group block overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-emerald-400"
              >
                <Image
                  src={`/gallery/thumbs/${String(photo.id).padStart(2, "0")}.jpg`}
                  alt={photo.alt}
                  width={800}
                  height={Math.round((800 * photo.height) / photo.width)}
                  unoptimized
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </a>
              <figcaption className="p-4 text-sm leading-relaxed text-slate-300">
                {photo.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
