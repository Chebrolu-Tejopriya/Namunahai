const logos = [
  { name: "Aol.", cls: "font-bold tracking-tight" },
  { name: "shopify", cls: "font-semibold" },
  { name: "yahoo!", cls: "font-bold italic" },
  { name: "businesswire", cls: "font-medium tracking-tight" },
  { name: "smartasset", cls: "font-semibold" },
  { name: "CMSWIRE", cls: "font-semibold tracking-[0.12em]" },
];

export default function LogoStrip() {
  return (
    <section className="border-y border-line/60 bg-cream">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-x-12 gap-y-5 px-6 py-8">
        {logos.map((l) => (
          <span
            key={l.name}
            className={`text-[20px] text-[#b3afa2] transition-colors hover:text-[#8f8b7e] ${l.cls}`}
          >
            {l.name}
          </span>
        ))}
      </div>
    </section>
  );
}
