import type { ReactNode } from "react";

type IconName =
  | "train"
  | "wagon"
  | "crane"
  | "scale"
  | "doc"
  | "shield"
  | "route"
  | "box"
  | "clock"
  | "phone"
  | "mail"
  | "pin"
  | "check"
  | "arrow"
  | "menu"
  | "close"
  | "spark";

const paths: Record<IconName, ReactNode> = {
  train: (
    <>
      <rect x="5" y="3" width="14" height="13.5" rx="2.5" />
      <path d="M5 10h14" />
      <path d="m8.5 16.5-2.5 4.5M15.5 16.5l2.5 4.5" />
    </>
  ),
  wagon: (
    <>
      <path d="M3 7h18v9H3z" />
      <path d="M6 16v2M18 16v2" />
      <path d="M7 7V5h10v2" />
    </>
  ),
  crane: (
    <>
      <path d="M4 21V4h13" />
      <path d="M8 4v6" />
      <path d="M17 4v7" />
      <path d="M14 11h6v5h-6z" />
    </>
  ),
  scale: (
    <>
      <path d="M12 3v18" />
      <path d="M5 7h14" />
      <path d="M5 7 2.5 13h5z" />
      <path d="M19 7l-2.5 6h5z" />
    </>
  ),
  doc: (
    <>
      <path d="M6 2.5h8l4 4V21.5H6z" />
      <path d="M14 2.5v4h4" />
      <path d="M9 12h6M9 16h6" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2.5 20 6v6c0 5-3.5 8.3-8 9.5-4.5-1.2-8-4.5-8-9.5V6z" />
      <path d="m8.8 12 2.2 2.2 4.2-4.4" />
    </>
  ),
  route: (
    <>
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="5.5" r="2.5" />
      <path d="M8 18.5h6.5a4 4 0 0 0 0-8h-5a4 4 0 0 1 0-8H16" />
    </>
  ),
  box: (
    <>
      <path d="m12 2.5 9 5v9l-9 5-9-5v-9z" />
      <path d="m3 7.5 9 5 9-5M12 12.5v9" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.2l3.5 2" />
    </>
  ),
  phone: (
    <path d="M21.5 16.9v2.6a1.8 1.8 0 0 1-2 1.8 17.8 17.8 0 0 1-7.8-2.8 17.5 17.5 0 0 1-5.4-5.4A17.8 17.8 0 0 1 3.5 5.3a1.8 1.8 0 0 1 1.8-2h2.6a1.8 1.8 0 0 1 1.8 1.6c.11.86.32 1.7.63 2.5a1.8 1.8 0 0 1-.4 1.9L8.8 10.5a14.4 14.4 0 0 0 5.4 5.4l1.2-1.2a1.8 1.8 0 0 1 1.9-.4c.8.31 1.64.52 2.5.63a1.8 1.8 0 0 1 1.7 1.8Z" />
  ),
  mail: (
    <>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
      <path d="m3 6 9 7 9-7" />
    </>
  ),
  pin: (
    <>
      <path d="M20 10.5c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10.5" r="3" />
    </>
  ),
  check: <path d="m4.5 12.5 5 5 10-11" />,
  arrow: <path d="M4 12h15m-6-6 6 6-6 6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  spark: (
    <path d="M12 3v3.5M12 17.5V21M3 12h3.5M17.5 12H21M5.6 5.6l2.5 2.5M15.9 15.9l2.5 2.5M18.4 5.6l-2.5 2.5M8.1 15.9l-2.5 2.5" />
  ),
};

export default function Icon({
  name,
  className = "",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
