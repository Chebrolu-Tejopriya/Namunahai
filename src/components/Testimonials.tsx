const brands = [
  { name: "Teke", mark: "tk", markCls: "text-[#e8492b] font-bold" },
  { name: "Celestial Energies", mark: "☀", markCls: "text-[#e0a91b]" },
  { name: "AKR SOFT TECH", mark: "▲", markCls: "text-[#6d7389]" },
];

export default function Testimonials() {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="mx-auto max-w-[760px] text-center text-[27px] font-semibold leading-[1.15] tracking-[-0.02em] text-ink sm:text-[42px]">
          Trusted by teams that care about more than attribution.
        </h2>

        <div className="mt-14 grid overflow-hidden rounded-[18px] border border-line md:grid-cols-[1fr_360px]">
          {/* Quote */}
          <figure className="flex flex-col justify-between gap-8 bg-white p-9">
            <blockquote className="text-[19px] leading-[1.6] text-ink/90">
              &ldquo;We switched from our previous MMP and immediately saw the
              difference. The pricing was far more reasonable, the product felt
              much easier to use, and the insights were clearer. What stood out
              most was the support team, fast, hands-on, and genuinely invested
              in helping us win.&rdquo;
            </blockquote>
            <figcaption className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#c9d6e8] to-[#9fb0c9] text-[13px] font-semibold text-white">
                HS
              </span>
              <span className="leading-tight">
                <span className="block text-[15px] font-medium text-ink">
                  Hanika Saluja
                </span>
                <span className="block text-[13px] text-muted">
                  Growth, Matiks
                </span>
              </span>
            </figcaption>
          </figure>

          {/* Brand panel */}
          <div className="flex items-center justify-center bg-[#fdeeee] p-10">
            <span className="text-[64px] font-bold leading-none text-[#e8492b]">
              tk
            </span>
          </div>
        </div>

        {/* Logo row */}
        <div className="mt-4 grid overflow-hidden rounded-[14px] border border-line bg-white sm:grid-cols-3">
          {brands.map((b, i) => (
            <div
              key={b.name}
              className={`flex items-center justify-center gap-3 px-6 py-6 ${
                i > 0 ? "border-line sm:border-l" : ""
              }`}
            >
              <span className={`text-[22px] leading-none ${b.markCls}`}>
                {b.mark}
              </span>
              <span
                className={`text-[15px] ${
                  i === 2 ? "tracking-[0.06em] text-muted" : "text-ink"
                }`}
              >
                {b.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
