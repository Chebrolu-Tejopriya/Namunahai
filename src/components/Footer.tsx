import Image from "next/image";
import Link from "next/link";

function Social({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <Link
      href="#"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center bg-white text-black transition-opacity hover:opacity-80"
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black text-white">
      <div className="mx-auto max-w-[1440px] px-6 pt-20">
        {/* Social icons */}
        <div className="flex justify-end gap-2">
          <Social label="LinkedIn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.98 3.5A2.5 2.5 0 002.5 6a2.5 2.5 0 002.48 2.5A2.5 2.5 0 007.5 6a2.5 2.5 0 00-2.52-2.5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H9z" />
            </svg>
          </Social>
          <Social label="X">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.9 2H22l-7.3 8.3L23 22h-6.6l-5.2-6.8L5.2 22H2l7.8-8.9L1.5 2h6.8l4.7 6.2zM17.7 20h1.9L7.4 4H5.4z" />
            </svg>
          </Social>
        </div>

        {/* Pixel wordmark + dissolve */}
        <div className="pointer-events-none -mt-6 select-none">
          <Image
            src="/images/footer-art.png"
            alt="namunah"
            width={1440}
            height={877}
            className="h-auto w-full"
          />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-3 px-6 py-6 text-[13px] text-white/55 sm:flex-row">
          <span>© 2026 namunah</span>
          <div className="flex gap-6">
            <Link href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="transition-colors hover:text-white">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
