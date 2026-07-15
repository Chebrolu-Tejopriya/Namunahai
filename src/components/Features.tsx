import type { ReactNode } from "react";

/* ---------------- shared primitives ---------------- */

function Card({
  caption,
  children,
  bleed = false,
  className = "",
}: {
  caption: string;
  children: ReactNode;
  /** let the mock run to the card edges (language pills) */
  bleed?: boolean;
  className?: string;
}) {
  return (
    <article
      className={`flex min-h-[358px] flex-col overflow-hidden rounded-[24px] border-[0.8px] border-[#e0e0da] bg-[#fafbf6] ${className}`}
    >
      <div
        className={`flex flex-1 items-center justify-center overflow-hidden ${
          bleed ? "" : "px-6"
        }`}
      >
        {children}
      </div>
      <h3 className="p-5 font-geist text-[16px] font-medium leading-[20px] tracking-[-0.32px] text-caption">
        {caption}
      </h3>
    </article>
  );
}

/** Fixed-size mock that scales down on narrow screens. */
function Mock({
  w,
  h,
  children,
}: {
  w: number;
  h: number;
  children: ReactNode;
}) {
  return (
    <div
      style={{ width: w, height: h }}
      className="relative shrink-0 origin-center scale-[0.62] sm:scale-90 lg:scale-100"
    >
      {children}
    </div>
  );
}

const WAVE = [
  9, 6, 6, 9, 9, 6, 9, 15, 9, 9, 9, 15, 6, 6, 9, 9, 6, 9, 9, 9, 9, 15, 9, 6, 6,
];

function Wave({ bars = WAVE, className = "" }: { bars?: number[]; className?: string }) {
  return (
    <div className={`flex items-center gap-px ${className}`} aria-hidden>
      {bars.map((h, i) => (
        <span
          key={i}
          style={{ height: h }}
          className="w-[2px] shrink-0 rounded-full bg-n400"
        />
      ))}
    </div>
  );
}

function CheckDot({ size = 18 }: { size?: number }) {
  return (
    <span
      style={{ width: size, height: size }}
      className="flex shrink-0 items-center justify-center rounded-full bg-success"
      aria-hidden
    >
      <svg width={size * 0.6} height={size * 0.6} viewBox="0 0 12 12" fill="none">
        <path
          d="M2.6 6.2l2.2 2.2 4.6-4.8"
          stroke="#fff"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

/* small stroke icons */
const ico = {
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  fill: "none",
};
const Phone = (p: { className?: string; size?: number }) => (
  <svg width={p.size ?? 16} height={p.size ?? 16} viewBox="0 0 24 24" className={p.className} {...ico}>
    <path d="M6.5 10.5a15 15 0 007 7l2.1-2.1c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.4.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 013 4c0-.6.4-1 1-1h3.2c.6 0 1 .4 1 1 0 1.2.2 2.3.6 3.4.1.4 0 .8-.2 1l-2.1 2.1z" />
  </svg>
);
const Cart = (p: { size?: number }) => (
  <svg width={p.size ?? 15} height={p.size ?? 15} viewBox="0 0 24 24" {...ico}>
    <circle cx="9" cy="20" r="1.4" /><circle cx="18" cy="20" r="1.4" />
    <path d="M2 3h2.2l2.4 12h11.6l2-8H6" />
  </svg>
);
const Health = (p: { size?: number }) => (
  <svg width={p.size ?? 15} height={p.size ?? 15} viewBox="0 0 24 24" {...ico}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);
const Bank = (p: { size?: number }) => (
  <svg width={p.size ?? 15} height={p.size ?? 15} viewBox="0 0 24 24" {...ico}>
    <path d="M3 10h18M5 10v8m5-8v8m4-8v8m5-8v8M2 20h20M12 3L3 8h18l-9-5z" />
  </svg>
);
const Estate = (p: { size?: number }) => (
  <svg width={p.size ?? 15} height={p.size ?? 15} viewBox="0 0 24 24" {...ico}>
    <path d="M3 10.5L12 4l9 6.5M5 10v10h14V10" />
  </svg>
);
const Edu = (p: { size?: number }) => (
  <svg width={p.size ?? 15} height={p.size ?? 15} viewBox="0 0 24 24" {...ico}>
    <path d="M2 8l10-4 10 4-10 4L2 8zm4 3v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
  </svg>
);
const User = (p: { size?: number }) => (
  <svg width={p.size ?? 15} height={p.size ?? 15} viewBox="0 0 24 24" {...ico}>
    <circle cx="12" cy="8" r="3.4" /><path d="M4.5 20a7.5 7.5 0 0115 0" />
  </svg>
);
const Sliders = (p: { size?: number }) => (
  <svg width={p.size ?? 15} height={p.size ?? 15} viewBox="0 0 24 24" {...ico}>
    <path d="M4 7h16M4 12h16M4 17h16" /><circle cx="9" cy="7" r="1.8" /><circle cx="15" cy="12" r="1.8" /><circle cx="8" cy="17" r="1.8" />
  </svg>
);
const Rocket = (p: { size?: number }) => (
  <svg width={p.size ?? 15} height={p.size ?? 15} viewBox="0 0 24 24" {...ico}>
    <path d="M5 15l-2 6 6-2m-4-4a12 12 0 0113-9 12 12 0 01-9 13l-4-4z" /><circle cx="14.5" cy="9.5" r="1.6" />
  </svg>
);
const Doc = (p: { size?: number }) => (
  <svg width={p.size ?? 14} height={p.size ?? 14} viewBox="0 0 24 24" {...ico}>
    <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8l-5-5z" /><path d="M14 3v5h5" />
  </svg>
);
const LinkI = (p: { size?: number }) => (
  <svg width={p.size ?? 14} height={p.size ?? 14} viewBox="0 0 24 24" {...ico}>
    <path d="M10 13a4 4 0 006 .5l2-2a4 4 0 00-6-6l-1 1M14 11a4 4 0 00-6-.5l-2 2a4 4 0 006 6l1-1" />
  </svg>
);
const Note = (p: { size?: number }) => (
  <svg width={p.size ?? 14} height={p.size ?? 14} viewBox="0 0 24 24" {...ico}>
    <path d="M4 4h12l4 4v12H4z" /><path d="M8 10h8M8 14h6" />
  </svg>
);
const Faq = (p: { size?: number }) => (
  <svg width={p.size ?? 14} height={p.size ?? 14} viewBox="0 0 24 24" {...ico}>
    <path d="M21 15a2 2 0 01-2 2H8l-4 4V5a2 2 0 012-2h13a2 2 0 012 2z" /><path d="M12 12v.01M10.5 9a1.6 1.6 0 113 .8c0 .8-1.5 1-1.5 2" />
  </svg>
);

/* ---------------- card 1: natural conversation ---------------- */

function Bubble({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <div
      className={`absolute flex w-[192px] flex-col items-center justify-center gap-2 rounded-[8px] border border-n200 bg-n25 px-6 py-[15px] ${className}`}
    >
      <p className="w-full font-geist text-[14px] leading-[17.5px] tracking-[-0.28px] text-slate">
        {text}
      </p>
      <Wave />
    </div>
  );
}

function MockConversation() {
  return (
    <Mock w={521} h={216}>
      {/* concentric dashed rings + phone */}
      <div className="absolute left-[141px] top-0 flex size-[202px] items-center justify-center rounded-full border border-dashed border-n300 bg-white">
        <div className="flex size-[143px] items-center justify-center rounded-full border border-dashed border-n300 bg-white">
          <div className="flex size-[102px] items-center justify-center rounded-full border-[1.8px] border-n300 bg-n100 text-slate">
            <Phone size={44} />
          </div>
        </div>
        <span className="absolute -bottom-[6px] left-1/2 -translate-x-1/2 rounded-full bg-n500 px-[11px] py-[4px] font-geist text-[14px] font-medium leading-[17.5px] tracking-[-0.28px] text-white">
          Live
        </span>
      </div>

      <Bubble text="Hi, I need help with my order" className="left-0 top-[21.5px]" />
      <Bubble
        text="Hello, I can help you with that"
        className="left-[329px] top-[49.5px]"
      />
    </Mock>
  );
}

/* ---------------- card 2: industry ---------------- */

const domains = [
  { label: "E-commerce", Icon: Cart, active: true },
  { label: "Healthcare", Icon: Health },
  { label: "BFSI", Icon: Bank },
  { label: "Real Estate", Icon: Estate },
  { label: "Education", Icon: Edu },
];

const chat = [
  { from: "user", text: "Where is my order #12345?" },
  {
    from: "bot",
    text: "Your order #12345 was shipped on may12 and is expected to arrive by may 16",
  },
  { from: "user", text: "Can i return this product" },
  {
    from: "bot",
    text: "Yes! you can return it within 7days of delievry. Would you like me to start a return for you?",
  },
];

function MockIndustry() {
  return (
    <Mock w={500} h={268}>
      <div className="flex h-full w-full gap-3 rounded-[12px] bg-n50 p-3 font-geist">
        {/* domain list */}
        <div className="flex w-[150px] shrink-0 flex-col gap-1">
          <p className="mb-1 px-2 text-[11px] text-n500">Domain-tuned agents</p>
          {domains.map(({ label, Icon, active }) => (
            <span
              key={label}
              className={`flex items-center gap-2 rounded-[8px] px-2 py-[7px] text-[13px] ${
                active
                  ? "bg-white font-medium text-slate shadow-[0_1px_2px_rgba(0,0,0,0.06)]"
                  : "text-n500"
              }`}
            >
              <Icon size={14} />
              {label}
            </span>
          ))}
        </div>

        {/* chat */}
        <div className="flex flex-1 flex-col justify-center gap-2 overflow-hidden rounded-[8px] bg-white p-3">
          {chat.map((m, i) => (
            <span
              key={i}
              className={`max-w-[86%] rounded-[6px] bg-n100 px-2.5 py-1.5 text-[11px] leading-[15px] text-slate ${
                m.from === "user" ? "self-end" : "self-start"
              }`}
            >
              {m.text}
            </span>
          ))}
        </div>
      </div>
    </Mock>
  );
}

/* ---------------- card 3: languages ---------------- */

const langRows = [
  { offset: -34, items: ["Telugu", "Hindi", "Gujarti", "Marathi", "Tamil", "Bhojpuri"] },
  { offset: -78, items: ["Odia", "Maithili", "Bengali", "Urdu", "Malayalam", "Manipuri"] },
  { offset: -18, items: ["Punjabi", "Assamese", "Gondi", "Santali", "Kannada"] },
  { offset: -62, items: ["Hindi", "Konkani", "Sindhi", "Kashmiri", "Nepali", "Marwari"] },
];

function MockLanguages() {
  return (
    <div className="flex h-full w-full items-center overflow-hidden">
      <div className="flex w-full flex-col gap-3 font-geist">
        {langRows.map((row, i) => (
          <div
            key={i}
            style={{ marginLeft: row.offset }}
            className="flex w-max shrink-0 gap-3"
          >
            {row.items.map((l) => (
              <span
                key={l}
                className="whitespace-nowrap rounded-full bg-n100 px-4 py-2 text-[14px] leading-[18px] text-n600"
              >
                {l}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- card 4: steps ---------------- */

const steps = [
  { title: "Create Agent", sub: "Name, type and purpose", Icon: User, done: true },
  { title: "Connect a phone number", sub: "Pick or rent a number", Icon: Phone, done: true },
  { title: "Configure with template", sub: "Name, type and purpose", Icon: Sliders, active: true },
  { title: "Launch your agent", sub: "Name, type and purpose", Icon: Rocket },
];

function MockSteps() {
  return (
    <Mock w={356} h={228}>
      <div className="flex h-full gap-3 font-geist">
        {/* rail */}
        <div className="relative flex w-[22px] shrink-0 flex-col items-center justify-between py-2">
          <span className="absolute bottom-3 top-3 w-px bg-n200" aria-hidden />
          {steps.map((s, i) => (
            <span
              key={i}
              className={`relative z-10 flex size-[18px] items-center justify-center rounded-full text-[10px] font-medium ${
                s.active
                  ? "bg-ink-soft text-white"
                  : "bg-n200 text-n500"
              }`}
            >
              {s.done ? (
                <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                  <path d="M2.6 6.2l2.2 2.2 4.6-4.8" stroke="#737373" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                i + 1
              )}
            </span>
          ))}
        </div>

        {/* step cards */}
        <div className="flex flex-1 flex-col gap-2">
          {steps.map((s) => (
            <div
              key={s.title}
              className={`flex flex-1 items-center gap-2.5 rounded-[8px] border border-n200 px-3 ${
                s.active ? "bg-n100" : "bg-n50"
              }`}
            >
              <span className="flex size-[26px] shrink-0 items-center justify-center rounded-[6px] bg-white text-n600">
                <s.Icon size={14} />
              </span>
              <span className="flex-1 leading-tight">
                <span className="block text-[13px] font-medium text-slate">
                  {s.title}
                </span>
                <span className="block text-[11px] text-n500">{s.sub}</span>
              </span>
              {s.done && <CheckDot size={17} />}
            </div>
          ))}
        </div>
      </div>
    </Mock>
  );
}

/* ---------------- card 5: pricing ---------------- */

function MockPricing() {
  return (
    <Mock w={363} h={238}>
      <div className="flex h-full flex-col justify-center gap-4 font-geist">
        <div>
          <p className="text-[14px] text-slate">Estimated usage</p>
          {/* slider */}
          <div className="relative mt-3 h-[6px] w-full rounded-full bg-n200">
            <span className="absolute inset-y-0 left-0 w-[42%] rounded-full bg-ink-soft" />
            <span className="absolute left-[42%] top-1/2 size-[13px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-ink-soft bg-white" />
          </div>
          <div className="mt-2 flex justify-between text-[11px] text-n500">
            {["0", "500", "1000", "1500", "2000"].map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-[14px] text-slate">Call Duration</span>
          <span className="flex items-center gap-2 rounded-[8px] border border-n300 px-3 py-1.5 text-[13px] text-slate">
            5 min
            <svg width="11" height="11" viewBox="0 0 24 24" {...ico}>
              <path d="M6 9l6 6 6-6" />
            </svg>
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {["No montly commitments", "No hiddent charges", "Cancel anytime"].map(
            (t) => (
              <span
                key={t}
                className="flex flex-col items-center gap-2 rounded-[8px] border border-n200 bg-n25 px-2 py-3 text-center text-[11px] leading-[14px] text-n600"
              >
                <CheckDot size={17} />
                {t}
              </span>
            ),
          )}
        </div>
      </div>
    </Mock>
  );
}

/* ---------------- card 6: call log ---------------- */

const CALL_WAVE = [
  5, 8, 4, 10, 6, 12, 5, 7, 9, 4, 11, 6, 8, 5, 10, 7, 4, 9, 6, 12, 5, 8, 4, 10,
  6, 7, 9, 5, 11, 4, 8, 6, 10, 5, 7, 4, 9, 6, 8, 5,
];

const calls = [
  { n: "+91 8900488494", s: "Completed", d: "00:47" },
  { n: "+91 9657488433", s: "Completed", d: "01:53" },
  { n: "+91 64309485893", s: "No Answer", d: "00:00" },
];

function MockCalls() {
  return (
    <Mock w={420} h={228}>
      <div className="flex h-full flex-col justify-center gap-3 font-geist">
        {calls.map((c) => {
          const ok = c.s === "Completed";
          return (
            <div
              key={c.n}
              className="flex items-center gap-3 rounded-[8px] border border-n200 bg-n50 px-3 py-2.5"
            >
              <span className="flex size-[28px] shrink-0 items-center justify-center rounded-[6px] bg-n200 text-n700">
                <Phone size={14} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[14px] font-medium leading-[18px] tracking-[-0.28px] text-slate">
                  {c.n}
                </span>
                <Wave bars={CALL_WAVE} className="mt-1" />
              </span>
              <span className="flex shrink-0 flex-col items-end gap-1">
                <span
                  className={`rounded-[4px] px-1.5 py-0.5 text-[10px] font-medium ${
                    ok
                      ? "bg-success-50 text-success"
                      : "bg-n100 text-n500"
                  }`}
                >
                  {c.s}
                </span>
                <span className="text-[11px] text-n500">{c.d}</span>
              </span>
            </div>
          );
        })}
      </div>
    </Mock>
  );
}

/* ---------------- card 7: knowledge ---------------- */

const sources = [
  { label: "PDF/Docs", Icon: Doc },
  { label: "Website/URLS's", Icon: LinkI },
  { label: "Text/Notes", Icon: Note },
  { label: "FAQs", Icon: Faq },
];

function MockKnowledge() {
  return (
    <Mock w={497} h={200}>
      <div className="flex h-full items-center gap-0 font-geist">
        {/* sources panel */}
        <div className="flex h-full w-[163px] shrink-0 flex-col gap-3 rounded-[10px] bg-n50 p-4">
          <p className="text-[13px] font-medium text-slate">Knowledge Sources</p>
          {sources.map(({ label, Icon }) => (
            <span
              key={label}
              className="flex items-center gap-2 text-[12.5px] text-n600"
            >
              <Icon size={14} />
              {label}
            </span>
          ))}
        </div>

        {/* dashed connectors */}
        <svg
          width="112"
          height="120"
          viewBox="0 0 112 120"
          fill="none"
          className="shrink-0"
          aria-hidden
        >
          <path
            d="M0 30 H70 V16 H112"
            stroke="#d6d6d6"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <path
            d="M0 90 H70 V72 H112"
            stroke="#d6d6d6"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        </svg>

        {/* bubbles */}
        <div className="flex flex-1 flex-col gap-2">
          <span className="self-end rounded-[6px] bg-n100 px-2.5 py-1.5 text-[11px] leading-[15px] text-slate">
            Where is my order #12345?
          </span>
          <span className="relative self-start rounded-[6px] bg-n100 px-2.5 pb-6 pt-1.5 text-[11px] leading-[15px] text-slate">
            Your order #12345 was shipped on may12 and is expected to arrive by
            may 16
            <span className="absolute bottom-1.5 right-2 flex size-[16px] items-center justify-center rounded-[3px] bg-white text-n600">
              <Doc size={10} />
            </span>
          </span>
        </div>
      </div>
    </Mock>
  );
}

/* ---------------- section ---------------- */

export default function Features() {
  return (
    <section id="features" className="bg-cream py-20">
      <div className="mx-auto max-w-[1440px] px-6">
        {/* header */}
        <div className="mx-auto flex max-w-[1240px] flex-col items-center gap-[22px] text-center">
          <h2 className="text-[30px] font-semibold leading-[1.2] tracking-[-0.88px] text-ink sm:text-[38px] lg:text-[44px]">
            Built for the business owner, not the developer
          </h2>
          <p className="max-w-[793px] text-[17px] leading-[1.5] text-cool sm:text-[20px] sm:leading-[30px]">
            Every feature here exists because an Indian SMB or BPO actually
            needed it not because a spec sheet demanded it.
          </p>
        </div>

        {/* Cards sit directly on the cream page — no outer panel (per design) */}
        <div className="mx-auto mt-14 flex max-w-[1266px] flex-col gap-4">
          <div className="grid gap-4 lg:grid-cols-2">
            <Card caption="Natural, real-time conversations">
              <MockConversation />
            </Card>
            <Card caption="Built for your industry, not a generic bot">
              <MockIndustry />
            </Card>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            <Card
              caption="20+ Indian languages, built for real conversations"
              bleed
            >
              <MockLanguages />
            </Card>
            <Card caption="No technical person required">
              <MockSteps />
            </Card>
            <Card caption="Transparent, pay-as-you-go pricing">
              <MockPricing />
            </Card>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <Card caption="Every call recorded and reviewable">
              <MockCalls />
            </Card>
            <Card caption="Your knowledge, your agent's knowledge">
              <MockKnowledge />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
