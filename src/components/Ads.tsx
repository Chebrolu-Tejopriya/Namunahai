/* eslint-disable @next/next/no-img-element */

/* "Every lead called back in seconds." — sources on the left fan through the
   namunah badge to outcomes on the right.
 *
 * The desktop diagram is laid out on the Figma 1013x340 grid and sized in cqw
 * (container-query width) so pills, badge and the dotted connectors all scale
 * as one unit. Below md it collapses to a simple stacked list. */

const SOURCES = [
  { label: "Google Ad Leads", icon: "/images/ad-google.png", top: 20.9 },
  { label: "Meta Ad Leads", icon: "/images/ad-meta.png", top: 40.3 },
  { label: "Google Form", icon: "/images/ad-gform.png", top: 59.7 },
  { label: "Contact Form", icon: "/images/ad-contact.svg", top: 79.1 },
];

const OUTCOMES = [
  { label: "Lead Qualified", top: 30.6 },
  { label: "CRM Updated", top: 50 },
  { label: "Follow up Scheduled", top: 69.4 },
];

const PHONE = "/images/ad-phone.svg";

/* dotted bezier leaders on the 1013x340 grid */
const LEADERS = [
  "M186,71 C330,71 380,150 462,158",
  "M186,137 C330,137 400,163 462,166",
  "M186,203 C330,203 400,175 462,174",
  "M186,269 C330,269 380,190 462,182",
  "M551,158 C640,150 700,104 789,104",
  "M551,170 C660,170 700,170 789,170",
  "M551,182 C640,190 700,236 789,236",
];

function Pill({
  label,
  icon,
  className = "",
  style,
}: {
  label: string;
  icon: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <span
      style={style}
      className={`flex items-center justify-between gap-3 rounded-[6px] border border-n300 bg-n25 text-[#0f0f0f] ${className}`}
    >
      <span className="whitespace-nowrap tracking-[-0.3px]">{label}</span>
      <img
        src={icon}
        alt=""
        aria-hidden
        className="shrink-0 object-contain"
        style={{ width: "var(--i)", height: "var(--i)" }}
      />
    </span>
  );
}

/* dark badge carrying the namunah wave, sized in cqw for the desktop diagram */
function Badge({ cq }: { cq: boolean }) {
  const px = (v: number) => (cq ? `${(v / 1013) * 100}cqw` : `${v}px`);
  return (
    <div
      className="flex items-center justify-center shadow-[0px_11px_11px_rgba(0,0,0,0.09),0px_3px_6px_rgba(0,0,0,0.1),0px_0px_0px_1px_rgba(255,255,255,0.8)]"
      style={{
        width: px(88),
        height: px(88),
        borderRadius: px(18),
        background: "linear-gradient(180deg,#3e3e3e,#333)",
      }}
    >
      <span
        className="flex items-center justify-center bg-gradient-to-b from-[#a9a9a9] to-[#6b6b6b] shadow-[inset_0_3px_6px_rgba(0,0,0,0.15)]"
        style={{ width: px(64), height: px(64), borderRadius: px(10) }}
      >
        <img src="/images/wave-mark.svg" alt="namunah" style={{ width: px(40), height: px(33) }} />
      </span>
    </div>
  );
}

export default function Ads() {
  return (
    <section className="bg-cream py-[60px]">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div className="mx-auto flex max-w-[885px] flex-col items-center gap-3 text-center">
          <h2 className="text-[30px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#18181b] sm:text-[38px] lg:text-[44px]">
            Every lead called back in seconds.
          </h2>
          <p className="max-w-[760px] text-[16px] leading-[1.5] tracking-[-0.01em] text-[#666] sm:text-[18px]">
            someone fills your form ,from Google Ads, Meta Ads, Google form or
            your website and before they close the tab, your assistant is
            already on the phone with them.
          </p>
        </div>

        {/* Desktop diagram */}
        <div className="mt-10 hidden md:block">
          <div className="@container relative mx-auto aspect-[1013/340] w-full max-w-[1013px]">
            <svg
              viewBox="0 0 1013 340"
              preserveAspectRatio="none"
              aria-hidden
              className="absolute inset-0 h-full w-full"
            >
              {LEADERS.map((d) => (
                <path
                  key={d}
                  d={d}
                  fill="none"
                  stroke="#b6b3a6"
                  strokeWidth="1"
                  strokeDasharray="1 5"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
              ))}
            </svg>

            {SOURCES.map((s) => (
              <Pill
                key={s.label}
                label={s.label}
                icon={s.icon}
                className="absolute -translate-y-1/2"
                style={{
                  left: "0.79%",
                  top: `${s.top}%`,
                  width: "17.57%",
                  padding: "1.55cqw 1.95cqw",
                  fontSize: "1.48cqw",
                  // icon box
                  ["--i" as string]: "1.9cqw",
                }}
              />
            ))}

            {OUTCOMES.map((o) => (
              <Pill
                key={o.label}
                label={o.label}
                icon={PHONE}
                className="absolute -translate-y-1/2"
                style={{
                  left: "77.9%",
                  top: `${o.top}%`,
                  width: "22.11%",
                  padding: "1.55cqw 1.95cqw",
                  fontSize: "1.48cqw",
                  ["--i" as string]: "1.9cqw",
                }}
              />
            ))}

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Badge cq />
            </div>
          </div>
        </div>

        {/* Mobile: stacked */}
        <div className="mt-10 flex flex-col items-center gap-5 md:hidden">
          <div className="flex w-full max-w-[300px] flex-col gap-2.5">
            {SOURCES.map((s) => (
              <Pill
                key={s.label}
                label={s.label}
                icon={s.icon}
                className="px-4 py-3 text-[14px] [--i:18px]"
              />
            ))}
          </div>
          <Badge cq={false} />
          <div className="flex w-full max-w-[300px] flex-col gap-2.5">
            {OUTCOMES.map((o) => (
              <Pill
                key={o.label}
                label={o.label}
                icon={PHONE}
                className="px-4 py-3 text-[14px] [--i:18px]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
