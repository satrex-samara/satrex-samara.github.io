import type { NextConfig } from "next";

// STATIC_EXPORT=1 — сборка для GitHub Pages: статика в out/, сайт в корне satrex-samara.github.io.
// PPR (cacheComponents) и redirects в export-режиме не поддерживаются.
const isStaticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: true,
  experimental: {
    // Tailwind-атомарка маленькая, а сеть РФ→GitHub Pages медленная: инлайн CSS
    // убирает блокирующий запрос стилей из критического пути первой отрисовки.
    inlineCss: true,
  },
  turbopack: {
    root: process.cwd(),
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  ...(isStaticExport
    ? { output: "export" as const }
    : {
        cacheComponents: true,
        partialPrefetching: true,
        async redirects() {
          return [
            {
              source: "/samara",
              destination: "/uslugi/zheleznodorozhnyj-adres/",
              permanent: true,
            },
            {
              source: "/zheleznodorozhnyye-perevozki",
              destination: "/",
              permanent: true,
            },
            {
              source: "/zheleznodorozhnyye-perevozki-gruzov",
              destination: "/",
              permanent: true,
            },
            { source: "/uslugi", destination: "/", permanent: true },
            { source: "/foto", destination: "/", permanent: true },
            { source: "/gruzoperevozki-gazel", destination: "/", permanent: true },
            { source: "/contacts", destination: "/#contacts", permanent: true },
            { source: "/zayavka", destination: "/#contacts", permanent: true },
            { source: "/links", destination: "/", permanent: true },
          ];
        },
      }),
};

export default nextConfig;
