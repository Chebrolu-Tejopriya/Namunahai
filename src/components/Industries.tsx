"use client";

import { useCallback, useEffect, useState } from "react";

type Industry = {
  title: string;
  body: string;
  cta: string;
  bg: string;
};

/* Ordered so the initial view lands on Ticket Booking / Real Estate / Education,
   matching the design. Copy for those three is from the design. */
const INDUSTRIES: Industry[] = [
  {
    title: "E-commerce",
    body: "Track orders, handle returns, and answer buyers the moment they call — no queue, no hold music.",
    cta: "Try the E-commerce Agent",
    bg: "radial-gradient(120% 90% at 50% -10%, #6b4fb0 0%, #3c2c6b 45%, #171633 100%)",
  },
  {
    title: "Consulting",
    body: "Qualify inbound leads, book discovery calls, and brief your team before the meeting starts.",
    cta: "Try the Consulting Agent",
    bg: "radial-gradient(120% 90% at 50% -10%, #b07f4f 0%, #6b4a2c 45%, #2b1d13 100%)",
  },
  {
    title: "Ticket Booking",
    body: "Book in seconds, no app needed. Customers call in, choose their seats, and confirm — bookings handled end to end by voice.",
    cta: "Try the Booking Agent",
    bg: "radial-gradient(120% 90% at 50% -10%, #2f8f63 0%, #1c6f4a 30%, #0f3d2b 65%, #0a2c1f 100%)",
  },
  {
    title: "Real Estate",
    body: "Never miss a lead again. We qualify buyers, schedule site visits, and follow up — all over a phone call, automatically.",
    cta: "Try Real Estate Agent",
    bg: "radial-gradient(110% 85% at 45% 0%, #1e6f8f 0%, #14405c 40%, #0d2033 70%, #0a1422 100%)",
  },
  {
    title: "Education",
    body: "Answer every parent's question, every time. From admission queries to fee reminders, Namunah handles high-volume calls so your staff doesn't have to.",
    cta: "Try the Education Agent",
    bg: "radial-gradient(120% 90% at 50% -10%, #2f6bb0 0%, #1c3f68 50%, #122840 100%)",
  },
  {
    title: "Customer Compliance",
    body: "Chase documents, verify details, and log every consent — with a clean audit trail on every call.",
    cta: "Try the Compliance Agent",
    bg: "radial-gradient(120% 90% at 50% -10%, #4f7fb0 0%, #2c4a6b 45%, #131f2b 100%)",
  },
  {
    title: "HR Screening",
    body: "Screen applicants at volume, ask the same questions every time, and hand your recruiters a shortlist.",
    cta: "Try the Screening Agent",
    bg: "radial-gradient(120% 90% at 50% -10%, #b04f7f 0%, #6b2c4a 45%, #2b131f 100%)",
  },
  {
    title: "Healthcare",
    body: "Confirm appointments, cut no-shows, and triage routine questions without tying up the front desk.",
    cta: "Try the Healthcare Agent",
    bg: "radial-gradient(120% 90% at 50% -10%, #4fb0a0 0%, #2c6b62 45%, #132b27 100%)",
  },
  {
    title: "Logistics",
    body: "Give drivers and customers live answers on pickups, delays, and proof of delivery — around the clock.",
    cta: "Try the Logistics Agent",
    bg: "radial-gradient(120% 90% at 50% -10%, #8f8f2f 0%, #5c5c1e 45%, #262610 100%)",
  },
  {
    title: "Property Management",
    body: "Log maintenance requests, chase rent, and route emergencies to the right person on the first call.",
    cta: "Try the Property Agent",
    bg: "radial-gradient(120% 90% at 50% -10%, #6b6f8f 0%, #3c405c 45%, #171a26 100%)",
  },
];

const TOTAL = INDUSTRIES.length;
const SLOT = 169; // label slot width, per the design
const TICKS = 41; // 41 dividers, major every 5th, needle at the centre (20)

const mod = (n: number, m: number) => ((n % m) + m) % m;

function Ruler() {
  return (
    <div className="flex items-center justify-between px-8" aria-hidden>
      {Array.from({ length: TICKS }, (_, i) => {
        const isNeedle = i === (TICKS - 1) / 2;
        const isMajor = i % 5 === 0;
        return (
          <span
            key={i}
            className={`w-px rounded-full ${
              isNeedle
                ? "h-3 bg-white/70"
                : isMajor
                  ? "h-[7.5px] bg-white/30"
                  : "h-[4.5px] bg-white/15"
            }`}
          />
        );
      })}
    </div>
  );
}

function Card({
  industry,
  featured,
}: {
  industry: Industry;
  featured?: boolean;
}) {
  return (
    <article
      style={{ background: industry.bg }}
      className={`flex flex-col items-center rounded-[20px] border border-white/10 px-7 text-center transition-all duration-500 ${
        featured
          ? "min-h-[411px] py-8 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6)]"
          : "min-h-[370px] py-7 md:mt-5"
      }`}
    >
      <h3
        className={`font-semibold tracking-[-0.01em] text-white ${
          featured ? "text-[22px]" : "text-[19px]"
        }`}
      >
        {industry.title}
      </h3>

      <p className="mt-auto text-[14.5px] leading-[1.6] text-white/75">
        {industry.body}
      </p>

      <a
        href="#demo"
        className="mt-5 inline-flex w-full max-w-[334px] items-center justify-center rounded-full bg-white px-5 py-3 text-[14px] font-medium text-ink transition-opacity hover:opacity-90"
      >
        {industry.cta}
      </a>
    </article>
  );
}

export default function Industries() {
  const [active, setActive] = useState(3); // Real Estate

  const go = useCallback((dir: number) => setActive((a) => mod(a + dir, TOTAL)), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  // Render the list three times so the strip always has neighbours on both sides.
  const strip = [...INDUSTRIES, ...INDUSTRIES, ...INDUSTRIES];
  const centre = TOTAL + active;

  return (
    <section id="industries" className="bg-dark py-24 text-white">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto max-w-[860px] text-center">
          <h2 className="text-[27px] font-semibold leading-[1.2] tracking-[-0.02em] sm:text-[36px] lg:text-[44px]">
            Every industry. Every conversation. Handled
          </h2>
          <p className="mx-auto mt-4 max-w-[793px] text-[17px] leading-[1.6] text-white/55 sm:text-[20px]">
            From booking a cab to closing a real estate deal Namunah&apos;s voice
            agents are trained for your industry, not just your inbox.
          </p>
        </div>

        {/* Cards: previous / active / next */}
        <div className="mt-14 grid items-start gap-5 md:grid-cols-3">
          <Card industry={INDUSTRIES[mod(active - 1, TOTAL)]} />
          <Card industry={INDUSTRIES[active]} featured />
          <Card industry={INDUSTRIES[mod(active + 1, TOTAL)]} />
        </div>
      </div>

      {/* Controller */}
      <div className="mt-16">
        <Ruler />

        <div className="relative my-3 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(calc(50% - ${(centre + 0.5) * SLOT}px))`,
            }}
          >
            {strip.map((ind, i) => {
              const index = mod(i, TOTAL);
              const isActive = i === centre;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-current={isActive}
                  style={{ width: SLOT }}
                  className={`shrink-0 truncate px-2 text-[14px] transition-colors ${
                    isActive
                      ? "font-medium text-white"
                      : "text-white/40 hover:text-white/70"
                  }`}
                >
                  {ind.title}
                </button>
              );
            })}
          </div>
        </div>

        <Ruler />

        {/* Pagination */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous industry"
            className="flex size-6 items-center justify-center rounded text-white/50 transition-colors hover:text-white"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <span className="font-mono text-[13px] tabular-nums text-white/60">
            {active + 1} / {TOTAL}
          </span>

          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next industry"
            className="flex size-6 items-center justify-center rounded text-white/50 transition-colors hover:text-white"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
