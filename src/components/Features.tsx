import type { ReactNode } from "react";

function Cell({
  children,
  caption,
  className = "",
}: {
  children: ReactNode;
  caption: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex-1 overflow-hidden rounded-[16px] border border-line bg-white p-5">
        {children}
      </div>
      <p className="mt-3 px-1 text-[14px] text-muted">{caption}</p>
    </div>
  );
}

function Bubble({
  side = "left",
  children,
}: {
  side?: "left" | "right";
  children: ReactNode;
}) {
  return (
    <div
      className={`max-w-[78%] rounded-2xl px-3.5 py-2 text-[12.5px] leading-snug ${
        side === "right"
          ? "self-end bg-ink text-white"
          : "self-start bg-[#f2f0e8] text-ink"
      }`}
    >
      {children}
    </div>
  );
}

function GreenCheck() {
  return (
    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e7f6ec]">
      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
        <path
          d="M2.5 6.2l2.2 2.2 4.8-4.8"
          stroke="#12813f"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

const languages = [
  "Telugu",
  "Odia",
  "Hindi",
  "Bengali",
  "Tamil",
  "Marathi",
  "Kannada",
  "Gujarati",
  "Punjabi",
  "Malayalam",
  "Assamese",
  "Urdu",
];

export default function Features() {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="text-[25px] font-semibold leading-[1.15] tracking-[-0.02em] text-ink sm:text-[38px]">
            Built for the business owner, not the developer
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[16px] leading-[1.6] text-muted">
            Every feature here exists because an Indian SMB or BPO actually
            needed it — not because a spec sheet demanded it.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-6">
          {/* Row 1 */}
          <Cell
            caption="Natural, real time conversations"
            className="md:col-span-2"
          >
            <div className="flex h-full flex-col justify-between gap-3">
              <div className="flex flex-col gap-2">
                <Bubble>Hi, I need help with my order</Bubble>
                <Bubble side="right">
                  Sure! Can I have your order number please?
                </Bubble>
              </div>
              <div className="flex items-center justify-center">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#12813f] text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.6 10.8a15.9 15.9 0 006.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 013 4c0-.6.4-1 1-1h3.6c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1l-2.3 2.2z" />
                  </svg>
                </span>
              </div>
            </div>
          </Cell>

          <Cell
            caption="Built for your industry, not a template"
            className="md:col-span-4"
          >
            <div className="grid h-full grid-cols-[130px_1fr] gap-4">
              <div className="flex flex-col gap-1.5 border-r border-line pr-3 text-[12.5px]">
                {["E-Commerce", "Consulting", "Healthcare", "Education", "Logistics"].map(
                  (t, i) => (
                    <span
                      key={t}
                      className={`rounded-lg px-2.5 py-1.5 ${
                        i === 0
                          ? "bg-[#f2f0e8] font-medium text-ink"
                          : "text-muted"
                      }`}
                    >
                      {t}
                    </span>
                  ),
                )}
              </div>
              <div className="flex flex-col justify-center gap-2">
                <Bubble>What is your return policy?</Bubble>
                <Bubble side="right">
                  You can return any item within 30 days for a full refund.
                </Bubble>
                <Bubble>Great, thank you!</Bubble>
              </div>
            </div>
          </Cell>

          {/* Row 2 */}
          <Cell
            caption="20+ Indian languages, built for real conversations"
            className="md:col-span-2"
          >
            <div className="flex flex-wrap content-start gap-2">
              {languages.map((l, i) => (
                <span
                  key={l}
                  className={`rounded-lg border px-2.5 py-1.5 text-[12.5px] ${
                    i % 4 === 0
                      ? "border-transparent bg-ink text-white"
                      : "border-line bg-[#faf9f4] text-ink"
                  }`}
                >
                  {l}
                </span>
              ))}
            </div>
          </Cell>

          <Cell
            caption="No technical person required"
            className="md:col-span-2"
          >
            <ul className="flex h-full flex-col justify-center gap-3">
              {[
                "Create Agent",
                "Connect a phone number",
                "Configure ai template",
                "Launch your agent",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 text-[13.5px] text-ink">
                  <GreenCheck />
                  {t}
                </li>
              ))}
            </ul>
          </Cell>

          <Cell
            caption="Transparent, pay as you go pricing"
            className="md:col-span-2"
          >
            <div className="flex h-full flex-col gap-3 text-[12.5px]">
              <div className="flex items-center justify-between text-muted">
                <span>Estimated usage</span>
                <span className="rounded-full bg-[#e7f6ec] px-2 py-0.5 text-[11px] font-medium text-[#12813f]">
                  Live
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted">Call Duration</span>
                <span className="font-medium text-ink">6 min</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-[#f0eee6]">
                <span className="block h-full w-3/5 rounded-full bg-[#12813f]" />
              </div>
              <div className="mt-auto flex items-center gap-2 rounded-lg bg-[#f7f6f0] px-3 py-2">
                <GreenCheck />
                <span className="text-ink">No hidden charges</span>
              </div>
            </div>
          </Cell>

          {/* Row 3 */}
          <Cell
            caption="Every call recorded and reviewable"
            className="md:col-span-3"
          >
            <ul className="flex h-full flex-col justify-center gap-2.5">
              {["+91 90XXXXXX01", "+91 90XXXXXX24", "+91 90XXXXXX77"].map((n) => (
                <li
                  key={n}
                  className="flex items-center justify-between rounded-xl border border-line bg-[#faf9f4] px-3.5 py-2.5 text-[13px]"
                >
                  <span className="font-medium text-ink">{n}</span>
                  <span className="rounded-full bg-[#e7f6ec] px-2.5 py-0.5 text-[11px] font-medium text-[#12813f]">
                    Recorded
                  </span>
                </li>
              ))}
            </ul>
          </Cell>

          <Cell
            caption="Your knowledge, your agent's knowledge"
            className="md:col-span-3"
          >
            <div className="grid h-full grid-cols-[1fr_1fr] gap-4">
              <div className="flex flex-col gap-2 text-[12.5px]">
                <span className="font-medium text-ink">Knowledge Sources</span>
                {["PDF Docs", "Website URLs", "FAQs"].map((t) => (
                  <span
                    key={t}
                    className="flex items-center gap-2 rounded-lg border border-line bg-[#faf9f4] px-2.5 py-1.5 text-ink"
                  >
                    <span className="h-2 w-2 rounded-sm bg-ink/70" />
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex flex-col justify-center gap-2">
                <Bubble>What are your business hours?</Bubble>
                <Bubble side="right">We&apos;re open 9am–9pm, all week.</Bubble>
              </div>
            </div>
          </Cell>
        </div>
      </div>
    </section>
  );
}
