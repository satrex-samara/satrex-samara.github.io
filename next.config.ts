import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: true,
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    root: process.cwd(),
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
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
};

export default nextConfig;
