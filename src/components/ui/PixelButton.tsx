import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  className?: string;
  /** color of the corner-notch pixels (defaults to the page background) */
  notch?: string;
};

/* 5px light squares forming a stepped notch at the top-left and
   bottom-right corners — matched to the Figma spec. */
const TL = [
  { left: 10, top: 9.19 },
  { left: 5, top: -0.81 },
  { left: 0, top: 4.19 },
];
const BR = [
  { right: 10, bottom: 9.34 },
  { right: 5, bottom: -0.66 },
  { right: 0, bottom: 4.34 },
];

export default function PixelButton({
  children,
  href = "#",
  className = "",
  notch = "#f0f0f0",
}: Props) {
  return (
    <Link
      href={href}
      className={`group relative inline-flex h-[40px] items-center justify-center overflow-hidden bg-ink-soft px-[16px] font-mono text-[12.5px] uppercase leading-none tracking-[0.01em] text-white transition-colors duration-200 hover:bg-[#242424] sm:h-[42px] sm:px-[26px] sm:text-[15px] ${className}`}
    >
      <span className="relative z-10">{children}</span>
      {TL.map((s, i) => (
        <span
          key={`tl${i}`}
          aria-hidden
          className="absolute h-[5px] w-[5px]"
          style={{ left: s.left, top: s.top, background: notch }}
        />
      ))}
      {BR.map((s, i) => (
        <span
          key={`br${i}`}
          aria-hidden
          className="absolute h-[5px] w-[5px]"
          style={{ right: s.right, bottom: s.bottom, background: notch }}
        />
      ))}
    </Link>
  );
}
