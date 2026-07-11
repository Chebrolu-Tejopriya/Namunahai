const cards = [
  {
    title: "Ticket Booking",
    body: "Book in seconds, no live handoff. Customers call in, choose their seats, and confirm — bookings handled end to end, every step.",
    cta: "Try the Booking Agent",
    style: {
      background:
        "radial-gradient(120% 90% at 50% -10%, #2f8f63 0%, #1c6f4a 30%, #0f3d2b 65%, #0a2c1f 100%)",
    },
  },
  {
    title: "Real Estate",
    body: "Never miss a lead again. Namunah qualifies buyers, schedules site visits, and follows up — all over a phone call, automatically.",
    cta: "Try the Real Estate Agent",
    style: {
      background:
        "radial-gradient(90% 70% at 50% -5%, rgba(34,197,94,0.28) 0%, rgba(16,40,28,0.4) 45%, #0c1210 100%)",
    },
  },
  {
    title: "Education",
    body: "Answer every parent's question, every time. From admission queries to fee reminders, Namunah handles high-volume calls so your staff doesn't have to.",
    cta: "Try the Education Agent",
    style: {
      background:
        "radial-gradient(120% 90% at 50% -10%, #2f6bb0 0%, #1c3f68 50%, #122840 100%)",
    },
  },
];

const marquee = [
  "E-Commerce",
  "Consulting",
  "Real Estate",
  "Ticket Booking",
  "Education",
  "Customer Compliance",
  "Healthcare",
  "Logistics",
  "Beauty & Wellness",
  "Property Management",
];

export default function Industries() {
  return (
    <section id="industries" className="bg-dark py-24 text-white">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="text-[25px] font-semibold leading-[1.15] tracking-[-0.02em] sm:text-[38px]">
            Every industry. Every conversation. Handled
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[16px] leading-[1.6] text-white/55">
            From booking a cab to closing a real estate deal, Namunah&apos;s
            voice agents are trained for your industry, not just your inbox.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {cards.map((c) => (
            <article
              key={c.title}
              style={c.style}
              className="flex min-h-[330px] flex-col rounded-[20px] border border-white/10 p-7 shadow-[0_1px_0_rgba(255,255,255,0.06)_inset]"
            >
              <h3 className="text-[20px] font-semibold tracking-[-0.01em]">
                {c.title}
              </h3>
              <p className="mt-3 max-w-[280px] text-[14.5px] leading-[1.6] text-white/70">
                {c.body}
              </p>
              <a
                href="#demo"
                className="mt-auto inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-5 py-2.5 text-[13px] font-medium text-white/90 backdrop-blur-sm transition-colors hover:bg-white/12"
              >
                {c.cta}
              </a>
            </article>
          ))}
        </div>
      </div>

      {/* Industry marquee */}
      <div className="marquee-mask mt-16 flex overflow-hidden">
        <div
          className="flex shrink-0 items-center gap-10 whitespace-nowrap pr-10 animate-marquee"
          style={{ ["--marquee-duration" as string]: "45s" }}
        >
          {[...marquee, ...marquee].map((m, i) => (
            <span
              key={i}
              className="text-[15px] font-medium tracking-[-0.01em] text-white/35"
            >
              {m}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-2">
        <span className="h-1.5 w-6 rounded-full bg-white/70" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
      </div>
    </section>
  );
}
