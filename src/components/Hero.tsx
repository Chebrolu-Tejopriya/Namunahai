import Image from "next/image";
import Badge from "./ui/Badge";
import PixelButton from "./ui/PixelButton";
import FrameMarker from "./ui/FrameMarker";
import Callout, { type CalloutSpec } from "./ui/Callout";

const LINE = "#d9d9d9";

/* Industries each callout rotates through. Every anchor starts on its own
   design label, then cycles, so a different industry is on show over time.
 *
 * Order matters: each callout advances on its own timer, so their positions in
 * this list can drift apart by one step. The five starting labels are therefore
 * spaced two apart (indices 0,2,4,6,8) — any closer and two callouts would
 * land on the same industry at the same time. */
const INDUSTRIES = [
  "Appointment Setter", // salon..telecom start here ->
  "Ticket Booking",
  "Education & Tutoring",
  "Real Estate",
  "Telecom Customer Care",
  "Healthcare",
  "Property Management",
  "E-commerce",
  "Salon / Spa / Beauty Reception",
  "HR Screening",
  "Logistics",
  "Customer Support",
];
const rotate = (from: string) => {
  const i = INDUSTRIES.indexOf(from);
  return [...INDUSTRIES.slice(i), ...INDUSTRIES.slice(0, i)];
};

/* Geometry lifted from Figma, as a % of the 1215x551 artwork, so the callouts
   track the grid as it scales. Ordered left-to-right — the reveal sweeps. */
const CALLOUTS: CalloutSpec[] = [
  { slug: "salon-spa", left: "9.424%", top: "52.432%", minWidth: "18.025%", items: rotate("Salon / Spa / Beauty Reception") },
  { slug: "appointment-setter", left: "17.984%", top: "20.145%", minWidth: "11.934%", items: rotate("Appointment Setter") },
  { slug: "property-management", left: "45.391%", top: "58.439%", minWidth: "13.333%", items: rotate("Property Management") },
  { slug: "education-tutoring", left: "53.539%", top: "28.494%", minWidth: "12.428%", items: rotate("Education & Tutoring") },
  { slug: "telecom-customer-care", left: "80.123%", top: "39.746%", minWidth: "14.156%", items: rotate("Telecom Customer Care") },
];

/* Dashed leaders from each box to its marker on the grid, traced from the
   Figma artwork. Drawn in the artwork's own coordinate space. */
const CONNECTORS = [
  "228,288 226,280 226,272 226,271 228,265 228,263 228,257",
  "312,144 320,159 322,173 320,183 316,200 316,224 328,235",
  "665,355 674,370 674,384 674,394 670,411 670,435 681,446",
  "686,157 686,142 686,129 688,119 692,104 690,85 679,75",
  "1020,219 1012,203 1010,189 1012,179 1016,162 1016,138 1004,127",
];

/* Framing lines around the grid, as % of the artwork's height
   (grid frame is 551px tall in the design). */
const TOP = "2.36%"; // 13 / 551
const BOTTOM = "96.37%"; // 531 / 551
const RISE = "-36.8%"; // verticals start 203px above the grid

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-bleed rule directly under the navbar */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[82px] h-px"
        style={{ background: LINE }}
      />

      {/* Hatched gutter panels framing the content */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[82px] mx-auto hidden max-w-[1440px] md:block">
        <div className="absolute bottom-0 left-0 top-0 w-[120px] border-r border-[#d9d9d9] hatch" />
        <div className="absolute bottom-0 right-0 top-0 w-[120px] border-l border-[#d9d9d9] hatch" />
      </div>

      {/* Heading block */}
      <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center gap-[26px] px-6 pt-[132px] text-center md:pt-[146px]">
        <Badge>Built for you</Badge>

        <div className="flex flex-col items-center gap-[16px]">
          <h1 className="max-w-[700px] text-[30px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#18181b] sm:text-[38px] lg:text-[44px]">
            Enterprise Voice AI, Built for Real Conversations
          </h1>

          <p className="font-display max-w-[657px] text-[16px] leading-[1.5] text-[#3d3d3d] sm:text-[18px]">
            Deploy real-time AI voice agents that handle customer conversations
            with human-like intelligence across calls and chat.
          </p>

          <div className="mt-2">
            <PixelButton href="#demo">Book a demo</PixelButton>
          </div>
        </div>
      </div>

      {/* Isometric grid, framed by blueprint lines.
          @container lets the callouts size themselves in cqw, so they scale
          with the artwork instead of drifting off it. */}
      <div className="relative z-10 mx-auto mt-[70px] max-w-[1200px] px-6 md:px-0">
        <div className="@container relative">
          <Image
            src="/images/hero-grid.png"
            alt="Isometric map of voice AI use cases"
            width={1215}
            height={551}
            priority
            className="h-auto w-full select-none"
          />

          {/* Dashed leaders from each box to its marker on the grid */}
          <svg
            viewBox="0 0 1215 551"
            preserveAspectRatio="none"
            aria-hidden
            className="pointer-events-none absolute inset-0 h-full w-full"
          >
            {CONNECTORS.map((points) => (
              <polyline
                key={points}
                points={points}
                fill="none"
                stroke="#111"
                strokeWidth="1"
                strokeDasharray="4 4"
                vectorEffect="non-scaling-stroke"
              />
            ))}
          </svg>

          {/* Industry callouts — each cycles through a different industry */}
          {CALLOUTS.map((spec, i) => (
            <Callout key={spec.slug} spec={spec} index={i} />
          ))}

          <div className="pointer-events-none absolute inset-0 hidden md:block">
            {/* verticals — rise above the grid to meet the copy */}
            <span
              className="absolute left-0 w-px"
              style={{ top: RISE, bottom: "3.63%", background: LINE }}
            />
            <span
              className="absolute right-0 w-px"
              style={{ top: RISE, bottom: "3.63%", background: LINE }}
            />

            {/* horizontals */}
            <span
              className="absolute inset-x-0 h-px"
              style={{ top: TOP, background: LINE }}
            />
            <span
              className="absolute inset-x-0 h-px"
              style={{ top: BOTTOM, background: LINE }}
            />

            <FrameMarker style={{ left: 0, top: TOP }} />
            <FrameMarker style={{ left: "100%", top: TOP }} />
            <FrameMarker style={{ left: 0, top: BOTTOM }} />
            <FrameMarker style={{ left: "100%", top: BOTTOM }} />
          </div>
        </div>
      </div>
    </section>
  );
}
