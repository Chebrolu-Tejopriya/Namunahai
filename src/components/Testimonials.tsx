"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";

type Item = {
  brand: string;
  logo: string;
  tint: string;
  quote: string;
  author: string;
  role: string;
  initials: string;
  avatar: string;
};

/* Only the Teke testimonial exists in the design; the other two are
   placeholders in the same voice until real copy is supplied. */
const ITEMS: Item[] = [
  {
    brand: "Teke",
    logo: "/images/tm-teke.png",
    tint: "#fdeeee",
    quote:
      "We switched from our previous MMP and immediately saw the difference. The pricing was far more reasonable, the product felt much easier to use, and the insights were clearer. What stood out most was the support team, fast, hands-on, and genuinely invested in helping us win.",
    author: "Hanika Saluja",
    role: "Growth, Matiks",
    initials: "HS",
    avatar: "from-[#c9d6e8] to-[#9fb0c9]",
  },
  {
    brand: "Celestial Energies",
    logo: "/images/tm-celestial.png",
    tint: "#fdf7e8",
    quote:
      "Our team answers more calls in a day than we used to in a week, and none of them slip through. Setup took an afternoon, and the assistant sounds like one of us. Our customers genuinely can't tell the difference.",
    author: "Rahul Menon",
    role: "Operations, Celestial Energies",
    initials: "RM",
    avatar: "from-[#e8dcc9] to-[#c9b79f]",
  },
  {
    brand: "AKR SOFT TECH",
    logo: "/images/tm-akr.png",
    tint: "#eef0f4",
    quote:
      "We were skeptical that a voice agent could handle our support queue, but it qualifies leads and books demos better than our old script. The handoff to a human is seamless when it needs to be. It just works.",
    author: "Priya Nair",
    role: "Founder, AKR Soft Tech",
    initials: "PN",
    avatar: "from-[#cdd0da] to-[#a2a7b8]",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [reduced, setReduced] = useState(false);
  const t = ITEMS[active];

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  /* Auto-advance to the next testimonial. Keying off `active` resets the timer
     whenever a tab is clicked, so a manual choice isn't overridden. */
  useEffect(() => {
    if (reduced) return;
    const id = setTimeout(() => setActive((a) => (a + 1) % ITEMS.length), 5000);
    return () => clearTimeout(id);
  }, [active, reduced]);

  return (
    <section id="testimonials" className="bg-cream py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="mx-auto max-w-[760px] text-center text-[27px] font-semibold leading-[1.15] tracking-[-0.02em] text-ink sm:text-[42px]">
          Trusted by teams that care about more than attribution.
        </h2>

        {/* Panel */}
        <div className="mt-14 grid overflow-hidden rounded-[18px] border border-line md:grid-cols-[1fr_360px]">
          <figure
            key={active}
            className="animate-swap flex flex-col justify-between gap-8 bg-white p-8 sm:p-9"
          >
            <blockquote className="text-[17px] leading-[1.6] text-ink/90 sm:text-[19px]">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="flex items-center gap-3">
              <span
                className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br text-[13px] font-semibold text-white ${t.avatar}`}
              >
                {t.initials}
              </span>
              <span className="leading-tight">
                <span className="block text-[15px] font-medium text-ink">
                  {t.author}
                </span>
                <span className="block text-[13px] text-muted">{t.role}</span>
              </span>
            </figcaption>
          </figure>

          {/* Big brand logo */}
          <div
            className="flex items-center justify-center border-t border-line p-10 md:border-l md:border-t-0"
            style={{ background: t.tint }}
          >
            <img
              key={t.brand}
              src={t.logo}
              alt={t.brand}
              className="animate-swap max-h-[72px] max-w-[70%] object-contain"
            />
          </div>
        </div>

        {/* Tabs — horizontal on every size; logo-only on phones */}
        <div className="mt-4 grid grid-cols-3 overflow-hidden rounded-[14px] border border-line bg-white">
          {ITEMS.map((item, i) => {
            const on = i === active;
            return (
              <button
                key={item.brand}
                type="button"
                onClick={() => setActive(i)}
                aria-current={on}
                className={`relative flex items-center justify-center gap-3 px-3 py-5 transition-colors ${
                  i > 0 ? "border-l border-line" : ""
                } ${on ? "bg-white" : "bg-[#faf9f5] hover:bg-white"}`}
              >
                {on && (
                  <span className="absolute inset-x-0 top-0 h-[2px] bg-ink" />
                )}
                <span className="flex size-[38px] shrink-0 items-center justify-center rounded-[8px] p-1">
                  <img
                    src={item.logo}
                    alt=""
                    aria-hidden
                    className={`max-h-full max-w-full object-contain transition-opacity ${
                      on ? "opacity-100" : "opacity-60"
                    }`}
                  />
                </span>
                <span
                  className={`hidden truncate text-[15px] tracking-[-0.01em] sm:inline ${
                    on ? "font-medium text-ink" : "text-muted"
                  }`}
                >
                  {item.brand}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
