/* eslint-disable @next/next/no-img-element */

/* One badge (the namunah mark) fans out to three channel cards. Laid out on the
   Figma diagram's 458x316 grid so the connectors meet the cards exactly. */

const CHANNELS = [
  { label: "Web", cx: 89, icon: <Globe /> },
  { label: "Phone", cx: 231, top: 180, icon: <PhoneIcon /> },
  { label: "Whatsapp", cx: 379, icon: <Whatsapp /> },
];

const ICON = "#424242";

function Globe() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9.2" fill={ICON} />
      <g stroke="#fff" strokeWidth="1" fill="none">
        <circle cx="12" cy="12" r="9.2" />
        <path d="M3 12h18M12 2.8v18.4M12 2.8c3 2.6 3 15.8 0 18.4M12 2.8c-3 2.6-3 15.8 0 18.4M4 7.2c4.6 2.4 11.4 2.4 16 0M4 16.8c4.6-2.4 11.4-2.4 16 0" />
      </g>
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill={ICON} aria-hidden>
      <path d="M6.6 2.3c.6-.2 1.3.1 1.6.7l1.5 3a1.4 1.4 0 01-.3 1.6l-1.2 1.1a11 11 0 004.9 4.9l1.1-1.2a1.4 1.4 0 011.6-.3l3 1.5c.6.3.9 1 .7 1.6l-.7 2.4a1.5 1.5 0 01-1.6 1.1C10.6 21.4 3.6 14.4 3 6.6a1.5 1.5 0 011.1-1.6z" />
      <path
        d="M14 3.2a6.8 6.8 0 016.8 6.8M13.6 6.6a3.4 3.4 0 013 3"
        stroke={ICON}
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function Whatsapp() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" aria-hidden>
      <path
        fill={ICON}
        d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2z"
      />
      <path
        fill="#fff"
        d="M8.5 7.1c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.3.3-1 .9-1 2.3s1 2.7 1.2 2.9c.1.2 2 3.1 4.9 4.2 2.4 1 2.9.8 3.4.7.5 0 1.6-.6 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3l-2-1c-.3-.1-.5-.2-.7.1l-.7.9c-.1.2-.3.2-.5.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.6-1.5-1.9-.2-.3 0-.4.1-.5l.5-.5c.1-.2.2-.3.3-.5s0-.4 0-.5l-.9-2.3z"
      />
    </svg>
  );
}

export default function Omnichannel() {
  return (
    <section className="bg-cream py-[60px]">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-6 md:grid-cols-2">
        {/* Copy */}
        <div className="flex flex-col gap-3 text-center md:text-left">
          <h2 className="text-[30px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#18181b] sm:text-[38px] lg:text-[44px]">
            One Agent .Every Channel.
          </h2>
          <p className="mx-auto max-w-[460px] text-[16px] leading-[1.5] tracking-[-0.01em] text-[#666] sm:text-[18px] md:mx-0">
            Train it once .The same assistant with the same knowledge talks to
            your customers whenever they reach you
          </p>
        </div>

        {/* Diagram */}
        <div className="flex justify-center md:justify-end">
          <div className="relative aspect-[458/300] w-full max-w-[458px]">
            {/* connectors */}
            <svg
              viewBox="0 0 458 300"
              fill="none"
              aria-hidden
              className="absolute inset-0 h-full w-full"
            >
              <path d="M229 92 Q150 150 89 166" stroke="#c4c1b4" strokeWidth="1" />
              <path d="M231 92 L231 176" stroke="#c4c1b4" strokeWidth="1" />
              <path d="M229 92 Q308 150 379 166" stroke="#c4c1b4" strokeWidth="1" />
            </svg>

            {/* namunah badge */}
            <div
              className="absolute left-1/2 top-0 flex size-[88px] -translate-x-1/2 items-center justify-center rounded-[18px] shadow-[0px_11px_11px_rgba(0,0,0,0.09),0px_3px_6px_rgba(0,0,0,0.1),0px_0px_0px_1px_rgba(255,255,255,0.8)]"
              style={{ background: "linear-gradient(180deg,#3e3e3e,#333)" }}
            >
              <span className="flex size-[64px] items-center justify-center rounded-[10px] bg-gradient-to-b from-[#a9a9a9] to-[#6b6b6b] shadow-[inset_0_3px_6px_rgba(0,0,0,0.15)]">
                <img
                  src="/images/wave-mark.svg"
                  alt="namunah"
                  className="h-[33px] w-[40px]"
                />
              </span>
            </div>

            {/* channel cards */}
            {CHANNELS.map((c) => (
              <div
                key={c.label}
                style={{
                  left: `${(c.cx / 458) * 100}%`,
                  top: `${((c.top ?? 168) / 300) * 100}%`,
                }}
                className="absolute flex -translate-x-1/2 flex-col items-center gap-2.5"
              >
                <span className="flex size-[80px] items-center justify-center rounded-[16px] border-2 border-[rgba(80,131,50,0.04)] bg-white shadow-[0px_8px_8px_rgba(63,96,42,0.09),0px_2px_4px_rgba(63,96,42,0.1),0px_16px_10px_rgba(63,96,42,0.05)]">
                  {c.icon}
                </span>
                <span className="text-[16px] tracking-[-0.02em] text-black sm:text-[18px]">
                  {c.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
