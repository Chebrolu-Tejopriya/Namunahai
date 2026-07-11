import Link from "next/link";
import Logo from "./ui/Logo";
import PixelButton from "./ui/PixelButton";

const links = [
  { label: "Industries", href: "#industries" },
  { label: "Platform", href: "#platform" },
];

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 h-[82px]">
      <nav className="relative mx-auto flex h-full max-w-[1340px] items-center justify-between px-5">
        {/* Logo */}
        <Link
          href="/"
          aria-label="namunah home"
          className="shrink-0 origin-left scale-90 sm:scale-100"
        >
          <Logo />
        </Link>

        {/* Centered links */}
        <ul className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-6 md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                className="text-[14.4px] font-medium tracking-[-0.43px] text-[#505050] transition-colors hover:text-ink"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <PixelButton href="#demo" className="shrink-0">
          See how it works
        </PixelButton>
      </nav>
    </header>
  );
}
