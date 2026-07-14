import PixelButton from "./ui/PixelButton";

const steps = [
  {
    n: "01",
    title: "Create your assistant",
    body: "Choose a voice, language and greeting.",
  },
  {
    n: "02",
    title: "Define behaviour",
    body: "Teach your assistant how your business should respond.",
  },
  {
    n: "03",
    title: "Go live",
    body: "Connect your existing number and start answering calls instantly.",
  },
];

export default function Process() {
  return (
    <section id="platform" className="bg-cream py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header row */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mono-label text-[13px] text-muted">3 Simple Steps</p>
            <h2 className="mt-3 max-w-[620px] text-[26px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[44px]">
              From zero to live in 10 minutes.
            </h2>
            <p className="mt-4 max-w-[560px] text-[17px] leading-[1.5] text-cool">
              Set up your AI voice assistant in three simple steps. No
              engineering required.
            </p>
          </div>
          <PixelButton href="#demo">See how it works</PixelButton>
        </div>

        {/* Content */}
        <div className="mt-16 grid items-center gap-12 md:grid-cols-2">
          {/* Steps */}
          <ol className="relative flex flex-col gap-8 pl-4">
            <span className="absolute bottom-3 left-4 top-3 w-px bg-line" />
            {steps.map((s) => (
              <li key={s.n} className="relative flex items-start gap-4">
                <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line bg-white text-[12px] font-medium text-ink">
                  {s.n}
                </span>
                <span className="pt-0.5">
                  <span className="block text-[18px] font-semibold tracking-[-0.01em] text-ink">
                    {s.title}
                  </span>
                  <span className="mt-1 block text-[15.5px] leading-[1.5] text-muted">
                    {s.body}
                  </span>
                </span>
              </li>
            ))}
          </ol>

          {/* Window mockup */}
          <div>
            <div className="mb-3 flex h-px w-full bg-line">
              <span className="h-[2px] w-1/4 -translate-y-[0.5px] bg-ink" />
            </div>
            <div className="overflow-hidden rounded-[14px] border border-line bg-white shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)]">
              <div className="flex items-center gap-2 border-b border-line/70 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#e0ded4]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#e0ded4]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#e0ded4]" />
              </div>
              <div className="aspect-[16/10] w-full bg-gradient-to-b from-[#fbfaf6] to-[#f3f1e9]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
