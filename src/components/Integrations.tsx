import Image from "next/image";

const HEADING = "Connects to everything you already use";
const BODY =
  "Namunah plugs into your existing stack in minutes. No ripping and replacing — just your workflows, supercharged with voice AI.";

export default function Integrations() {
  return (
    <section className="bg-cream py-7">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        {/* Mobile: text sits above the grid so it stays readable */}
        <div className="mb-8 flex flex-col gap-3 md:hidden">
          <h2 className="text-[28px] font-semibold leading-[1.2] tracking-[-0.02em] text-ink">
            {HEADING}
          </h2>
          <p className="text-[16px] leading-[1.5] tracking-[-0.02em] text-[#666]">
            {BODY}
          </p>
        </div>

        {/* Rounded stage: isometric grid with the copy overlaid.
            Container queries keep the overlay proportional to the art. */}
        <div className="@container relative overflow-hidden rounded-[24px] border border-black/5 bg-cream hatch-soft">
          <Image
            src="/images/integrations-grid.png"
            alt="Isometric grid of tools namunah integrates with, including Salesforce, SAP, HubSpot and WhatsApp"
            width={1360}
            height={672}
            className="block h-auto w-full select-none"
          />

          <div className="absolute left-[3.235cqw] top-[3.235cqw] hidden w-[39.7cqw] flex-col gap-[0.88cqw] md:flex">
            <h2 className="text-[3.235cqw] font-semibold leading-[1.2] tracking-[-0.02em] text-ink">
              {HEADING}
            </h2>
            <p className="w-[34.1cqw] text-[1.324cqw] leading-[1.5] tracking-[-0.02em] text-[#666]">
              {BODY}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
