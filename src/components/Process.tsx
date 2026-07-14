"use client";

import { useState } from "react";
import PixelButton from "./ui/PixelButton";

/* ---------------- icons ---------------- */
const ico = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};
const S = (p: { size?: number }) => p.size ?? 13;

const User = (p: { size?: number }) => (
  <svg width={S(p)} height={S(p)} viewBox="0 0 24 24" {...ico}>
    <circle cx="12" cy="8" r="3.4" />
    <path d="M4.5 20a7.5 7.5 0 0115 0" />
  </svg>
);
const Globe = (p: { size?: number }) => (
  <svg width={S(p)} height={S(p)} viewBox="0 0 24 24" {...ico}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3a15 15 0 010 18a15 15 0 010-18" />
  </svg>
);
const Chat = (p: { size?: number }) => (
  <svg width={S(p)} height={S(p)} viewBox="0 0 24 24" {...ico}>
    <path d="M21 15a2 2 0 01-2 2H8l-4 4V5a2 2 0 012-2h13a2 2 0 012 2z" />
  </svg>
);
const Phone = (p: { size?: number }) => (
  <svg width={S(p)} height={S(p)} viewBox="0 0 24 24" {...ico}>
    <path d="M6.5 10.5a15 15 0 007 7l2.1-2.1c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.4.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 013 4c0-.6.4-1 1-1h3.2c.6 0 1 .4 1 1 0 1.2.2 2.3.6 3.4.1.4 0 .8-.2 1l-2.1 2.1z" />
  </svg>
);
const Spark = (p: { size?: number }) => (
  <svg width={S(p)} height={S(p)} viewBox="0 0 24 24" {...ico}>
    <path d="M12 3l1.8 4.7L18.5 9l-4.7 1.8L12 15.5l-1.8-4.7L5.5 9l4.7-1.3z" />
  </svg>
);
const Clock = (p: { size?: number }) => (
  <svg width={S(p)} height={S(p)} viewBox="0 0 24 24" {...ico}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);
const Tag = (p: { size?: number }) => (
  <svg width={S(p)} height={S(p)} viewBox="0 0 24 24" {...ico}>
    <path d="M3 12V5a2 2 0 012-2h7l9 9-9 9z" />
    <circle cx="7.5" cy="7.5" r="1.2" />
  </svg>
);
const Book = (p: { size?: number }) => (
  <svg width={S(p)} height={S(p)} viewBox="0 0 24 24" {...ico}>
    <path d="M4 4h7v16H4zM13 4h7v16h-7z" />
  </svg>
);
const Cal = (p: { size?: number }) => (
  <svg width={S(p)} height={S(p)} viewBox="0 0 24 24" {...ico}>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 10h18M8 3v4M16 3v4" />
  </svg>
);
const Db = (p: { size?: number }) => (
  <svg width={S(p)} height={S(p)} viewBox="0 0 24 24" {...ico}>
    <ellipse cx="12" cy="6" rx="8" ry="3" />
    <path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6" />
  </svg>
);
const CheckI = (p: { size?: number }) => (
  <svg width={S(p)} height={S(p)} viewBox="0 0 24 24" {...ico}>
    <path d="M4 12.5l5 5L20 6.5" />
  </svg>
);
const Shield = (p: { size?: number }) => (
  <svg width={S(p)} height={S(p)} viewBox="0 0 24 24" {...ico}>
    <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
  </svg>
);

const WAVE = [6, 10, 5, 13, 8, 15, 6, 11, 9, 5, 14, 7, 10, 6, 12, 8, 5, 11, 7, 13];
function Wave({ bars = WAVE, tall = 1 }: { bars?: number[]; tall?: number }) {
  return (
    <span className="flex items-center gap-[2px]" aria-hidden>
      {bars.map((h, i) => (
        <span
          key={i}
          style={{ height: h * tall }}
          className="w-[2px] shrink-0 rounded-full bg-n400"
        />
      ))}
    </span>
  );
}

/* ---------------- shared bits ---------------- */

function Chip({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`absolute flex items-center gap-1.5 rounded-[10px] border border-n200 bg-white px-2.5 py-1.5 text-[11px] text-n600 shadow-[0_4px_14px_-6px_rgba(0,0,0,0.15)] ${className}`}
    >
      {children}
    </span>
  );
}

/** flow node */
function Node({
  icon,
  label,
  active,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <span className="flex flex-col items-center gap-0.5 rounded-[8px] border border-n200 bg-white px-2.5 py-1.5 shadow-[0_3px_10px_-6px_rgba(0,0,0,0.2)]">
      <span className="flex items-center gap-1.5 text-[10.5px] font-medium text-slate">
        <span className="text-n600">{icon}</span>
        {label}
      </span>
      {active && (
        <span className="flex items-center gap-1 text-[8.5px] text-success">
          <span className="size-1 rounded-full bg-success" />
          Active
        </span>
      )}
    </span>
  );
}

const dash = "border-dashed border-n300";

/* ---------------- step 01 ---------------- */

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-2.5">
      <p className="mb-1 text-[10px] font-medium text-slate">{label}</p>
      {children}
    </div>
  );
}

function PanelCreate() {
  return (
    <div className="relative flex h-full items-center justify-center px-10 py-5">
      <Chip className="left-3 top-1/2 -translate-y-1/2 !px-2">
        <Globe size={14} />
      </Chip>
      <Chip className="right-10 top-3 !px-2">
        <Wave bars={[5, 9, 13, 9, 5]} />
      </Chip>
      <Chip className="bottom-4 right-6 !px-2">
        <Chat size={14} />
      </Chip>

      <div className="w-full max-w-[300px] rounded-[12px] border border-n200 bg-white p-3.5 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.3)]">
        <span className="mb-1 flex size-7 items-center justify-center rounded-[7px] border border-n200 text-n600">
          <User size={14} />
        </span>

        <Field label="Assistant Name">
          <div className="rounded-[6px] border border-n200 px-2 py-1.5 text-[11px] text-slate">
            Solar Assistant
          </div>
        </Field>

        <Field label="Voice">
          <div className="flex items-center gap-1.5 rounded-[6px] border border-n200 px-2 py-1.5 text-[11px] text-slate">
            <Wave bars={[4, 8, 11, 8, 4]} />
            Priya
            <svg
              className="ml-auto text-n500"
              width="10"
              height="10"
              viewBox="0 0 24 24"
              {...ico}
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </Field>

        <Field label="Languages">
          <div className="flex gap-1.5">
            {["English", "Telugu", "Hindi"].map((l) => (
              <span
                key={l}
                className="flex flex-1 items-center justify-center gap-1 rounded-[6px] border border-n200 py-1.5 text-[10px] text-slate"
              >
                <span className="text-slate">
                  <CheckI size={9} />
                </span>
                {l}
              </span>
            ))}
          </div>
        </Field>

        <Field label="Greeting">
          <div className="rounded-[6px] border border-n200 px-2 py-2 text-[11px] text-n500">
            &ldquo;Hello, thanks for calling...&rdquo;
          </div>
        </Field>

        <div className="mt-3 flex items-center gap-2 rounded-full border border-n200 p-1">
          <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-black text-white">
            <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <span className="text-[10.5px] font-medium text-slate">
            Voice Preview
          </span>
          <span className="ml-auto pr-1">
            <Wave />
          </span>
        </div>
      </div>
    </div>
  );
}

/* ---------------- step 02 ---------------- */

function PanelBehaviour() {
  return (
    <div className="relative flex h-full flex-col items-center justify-center gap-2 px-6 py-4">
      <Chip className="left-3 top-[26%]">
        <Clock size={12} /> Business Hours
      </Chip>
      <Chip className="right-4 top-[16%]">
        <Globe size={12} /> Languages
      </Chip>
      <Chip className="right-2 top-[44%]">
        <Tag size={12} /> Pricing
      </Chip>
      {/* kept off-centre: dead centre sits on top of the Book Slot node */}
      <Chip className="bottom-2 left-[9%]">
        <Book size={12} /> Knowledge Base
      </Chip>

      <Node icon={<Phone size={12} />} label="Incoming Call" />
      <span className={`h-3 border-l ${dash}`} />
      <Node icon={<Spark size={12} />} label="Intent Detection" active />

      {/* branch */}
      <span className={`h-2 border-l ${dash}`} />
      <span className={`h-0 w-[62%] border-t ${dash}`} />

      <div className="grid w-full max-w-[380px] grid-cols-3 gap-2">
        {[
          { i: <Book size={11} />, l: "FAQ" },
          { i: <Cal size={11} />, l: "Appointment" },
          { i: <Tag size={11} />, l: "Sales" },
        ].map((n) => (
          <span key={n.l} className="flex flex-col items-center">
            <span className={`h-2 border-l ${dash}`} />
            <Node icon={n.i} label={n.l} />
            <span className={`h-2 border-l ${dash}`} />
          </span>
        ))}

        {[
          { i: <Chat size={11} />, l: "Answer" },
          { i: <Cal size={11} />, l: "Check Calendar" },
          { i: <User size={11} />, l: "Collect Details" },
        ].map((n) => (
          <span key={n.l} className="flex flex-col items-center">
            <Node icon={n.i} label={n.l} active />
          </span>
        ))}

        <span />
        {[
          { i: <CheckI size={11} />, l: "Book Slot" },
          { i: <Db size={11} />, l: "CRM" },
        ].map((n) => (
          <span key={n.l} className="flex flex-col items-center">
            <span className={`h-2.5 border-l ${dash}`} />
            <Node icon={n.i} label={n.l} active />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------------- step 03 ---------------- */

const CALL_WAVE = [
  8, 16, 26, 14, 34, 20, 44, 30, 52, 22, 40, 60, 34, 48, 24, 38, 18, 28, 12, 20,
  9,
];

function PanelLive() {
  return (
    <div className="relative flex h-full items-center justify-center py-4">
      <Chip className="right-3 top-1/2 -translate-y-1/2">
        <Phone size={12} /> Calls Active
        <span className="size-1 rounded-full bg-success" />
      </Chip>

      <div className="flex h-full max-h-[300px] w-[190px] flex-col rounded-[22px] border border-n200 bg-white px-3 pb-3 pt-2 shadow-[0_20px_50px_-28px_rgba(0,0,0,0.35)]">
        <div className="flex items-center justify-between text-[8px] font-medium text-slate">
          <span>9:41</span>
          <span className="flex items-center gap-0.5">
            <span className="h-1.5 w-3 rounded-[1px] border border-n400" />
          </span>
        </div>

        <p className="mt-3 text-center text-[10px] text-n500">Business Number</p>
        <p className="text-center text-[14px] font-semibold tracking-[-0.01em] text-slate">
          +91 98XXXXXXX
        </p>
        <p className="mt-0.5 flex items-center justify-center gap-1 text-[9px] text-success">
          <CheckI size={9} /> Connected
        </p>

        <div className="my-3 flex flex-1 items-center justify-center">
          <span className="flex size-[104px] items-center justify-center rounded-full bg-n50">
            <span className="flex items-center gap-[2px]">
              {CALL_WAVE.map((h, i) => (
                <span
                  key={i}
                  style={{ height: h }}
                  className="w-[2px] rounded-full bg-slate"
                />
              ))}
            </span>
          </span>
        </div>

        <span className="mx-auto flex items-center gap-1 rounded-full bg-black px-2 py-[3px] text-[8.5px] font-medium text-white">
          <span className="size-1 rounded-full bg-white" /> Live
        </span>

        <div className="mt-3 flex justify-around border-t border-n200 pt-2 text-[8px] text-n500">
          <span className="flex flex-col items-center gap-0.5">
            <Clock size={12} />
            24&times;7
          </span>
          <span className="flex flex-col items-center gap-0.5">
            <Shield size={12} />
            Monitoring Enabled
          </span>
        </div>
      </div>
    </div>
  );
}

/* ---------------- section ---------------- */

const steps = [
  {
    n: "01",
    title: "Create your assistant",
    body: "Choose a voice, language and greeting.",
    Panel: PanelCreate,
  },
  {
    n: "02",
    title: "Define behaviour",
    body: "Teach your assistant how your business should respond.",
    Panel: PanelBehaviour,
  },
  {
    n: "03",
    title: "Go live",
    body: "Connect your existing number and start answering calls instantly.",
    Panel: PanelLive,
  },
];

export default function Process() {
  const [active, setActive] = useState(0);
  const Panel = steps[active].Panel;

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
          {/* Steps — pick one to preview it */}
          <ol className="relative flex flex-col gap-8 pl-4">
            <span className="absolute bottom-3 left-4 top-3 w-px bg-line" />
            {steps.map((s, i) => {
              const on = i === active;
              return (
                <li key={s.n} className="relative">
                  {on && (
                    <span className="absolute -left-4 top-1 h-[calc(100%-8px)] w-[2px] bg-ink" />
                  )}
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-current={on}
                    className="flex w-full items-start gap-4 text-left"
                  >
                    <span
                      className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-[12px] font-medium transition-colors ${
                        on
                          ? "border-ink bg-ink text-white"
                          : "border-line bg-white text-ink"
                      }`}
                    >
                      {s.n}
                    </span>
                    <span className="pt-0.5">
                      <span
                        className={`block text-[18px] font-semibold tracking-[-0.01em] transition-colors ${
                          on ? "text-ink" : "text-ink/70"
                        }`}
                      >
                        {s.title}
                      </span>
                      <span className="mt-1 block text-[15.5px] leading-[1.5] text-muted">
                        {s.body}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          {/* Window mockup — shows the selected step */}
          <div>
            <div className="mb-3 flex h-px w-full bg-line">
              <span
                className="h-[2px] -translate-y-[0.5px] bg-ink transition-all duration-300"
                style={{ width: `${((active + 1) / steps.length) * 100}%` }}
              />
            </div>
            <div className="overflow-hidden rounded-[14px] border border-line bg-white shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)]">
              <div className="flex items-center gap-2 border-b border-line/70 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#e0ded4]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#e0ded4]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#e0ded4]" />
              </div>
              <div className="aspect-[16/10] w-full bg-gradient-to-b from-[#fbfaf6] to-[#f3f1e9]">
                <Panel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
