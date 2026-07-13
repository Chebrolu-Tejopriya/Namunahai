import Image from "next/image";
import Link from "next/link";

function Social({
  label,
  href = "#",
  children,
}: {
  label: string;
  href?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="flex size-[72px] items-center justify-center bg-cream text-black transition-opacity hover:opacity-85 md:size-[96px]"
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-cream">
      {/* Black stage: pixel wordmark + socials */}
      <div className="bg-black">
        <div className="mx-auto max-w-[1440px] px-6 pt-24 md:px-[60px] md:pt-[176px]">
          <Image
            src="/images/footer-wordmark.png"
            alt="namunah"
            width={1127}
            height={171}
            className="pixelated h-auto w-full max-w-[1127px] select-none"
            priority={false}
          />

          <div className="mt-12 flex justify-end gap-4 md:-mr-[26px] md:mt-[85px]">
            <Social label="namunah on LinkedIn">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M6.94 5A1.94 1.94 0 113.06 5a1.94 1.94 0 013.88 0zM3.5 8.5h3.9V21H3.5zM10.1 8.5H14v1.7h.06c.54-1.02 1.87-2.1 3.85-2.1 4.12 0 4.88 2.71 4.88 6.23V21h-3.9v-5.55c0-1.32-.03-3.02-1.84-3.02-1.85 0-2.13 1.44-2.13 2.93V21h-3.9z" />
              </svg>
            </Social>
            <Social label="namunah on X">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M18.24 2.25h3.31l-7.23 8.26L22.5 21.75h-6.66l-5.21-6.82-5.97 6.82H1.35l7.73-8.84L1.5 2.25h6.83l4.71 6.23zm-1.16 17.52h1.83L7.01 4.13H5.04z" />
              </svg>
            </Social>
          </div>

          <div className="h-16 md:h-[73px]" />
        </div>
      </div>

      {/* Pixel dither: black dissolves into cream */}
      <Image
        src="/images/footer-dither.png"
        alt=""
        aria-hidden
        width={1440}
        height={240}
        className="pixelated -mt-px block h-auto w-full select-none"
      />

      {/* Bottom bar (on cream) */}
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-3 px-6 pb-7 text-[14px] text-ink sm:flex-row md:px-[50px]">
        <span>© 2026 namunahai</span>
        <div className="flex items-center gap-4">
          <Link href="#" className="transition-opacity hover:opacity-70">
            Privacy Policy
          </Link>
          <span aria-hidden className="text-ink/30">
            |
          </span>
          <Link href="#" className="transition-opacity hover:opacity-70">
            Terms &amp; Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
