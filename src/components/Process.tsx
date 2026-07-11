import PixelButton from "./ui/PixelButton";

const steps = [
  { label: "Create your workspace & agent", state: "done" },
  { label: "Upload your knowledge & connect tools", state: "done" },
  { label: "Test & publish", state: "active", n: 3 },
  { label: "Go live watch your agent work", state: "todo", n: 4 },
];

function Check() {
  return (
    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#dcdcd4]">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path
          d="M2.5 6.2l2.2 2.2 4.8-4.8"
          stroke="#6b6b63"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function Process() {
  return (
    <section id="platform" className="bg-cream py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header row */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mono-label text-[13px] text-muted">
              The 4-layer intelligent engine
            </p>
            <h2 className="mt-3 max-w-[620px] text-[26px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[44px]">
              From zero to live in ten minutes
            </h2>
          </div>
          <PixelButton href="#demo">See how it works</PixelButton>
        </div>

        {/* Content */}
        <div className="mt-16 grid items-center gap-12 md:grid-cols-2">
          {/* Checklist */}
          <ol className="relative flex flex-col gap-6 pl-4">
            <span className="absolute bottom-2 left-4 top-2 w-px bg-line" />
            {steps.map((s) => (
              <li key={s.label} className="relative flex items-center gap-4">
                {s.state === "active" && (
                  <span className="absolute -left-4 top-1/2 h-8 w-[2px] -translate-y-1/2 bg-ink" />
                )}
                {s.state === "done" ? (
                  <Check />
                ) : (
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full text-[12px] font-medium ${
                      s.state === "active"
                        ? "bg-ink text-white"
                        : "border border-line bg-white text-muted"
                    }`}
                  >
                    {s.n}
                  </span>
                )}
                <span
                  className={`text-[16.5px] ${
                    s.state === "todo" ? "text-muted" : "text-ink"
                  }`}
                >
                  {s.label}
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
