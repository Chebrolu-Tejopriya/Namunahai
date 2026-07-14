import Image from "next/image";
import Badge from "./ui/Badge";
import PixelButton from "./ui/PixelButton";
import FrameMarker from "./ui/FrameMarker";

const LINE = "#d9d9d9";

/* Industry callouts that sit on the grid. Positions are a % of the artwork
   (1215x551), taken from Figma, so they track the image as it scales.
   Ordered left-to-right so the reveal sweeps across the grid. */
const CALLOUTS = [
  { slug: "salon-spa", label: "Salon / Spa / Beauty Reception", left: "9.424%", top: "46.624%", width: "21.481%" },
  { slug: "appointment-setter", label: "Appointment Setter", left: "14.362%", top: "16.697%", width: "15.556%" },
  { slug: "property-management", label: "Property Management", left: "43.416%", top: "54.991%", width: "15.309%" },
  { slug: "education-tutoring", label: "Education & Tutoring", left: "53.539%", top: "13.612%", width: "12.428%" },
  { slug: "telecom-customer-care", label: "Telecom Customer Care", left: "80.123%", top: "23.049%", width: "15.226%" },
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

      {/* Isometric grid, framed by blueprint lines */}
      <div className="relative z-10 mx-auto mt-[70px] max-w-[1200px] px-6 md:px-0">
        <div className="relative">
          <Image
            src="/images/hero-grid.png"
            alt="Isometric map of voice AI use cases"
            width={1215}
            height={551}
            priority
            className="h-auto w-full select-none"
          />

          {/* Industry callouts — fade in and rise, one after another, on a loop */}
          {CALLOUTS.map((c, i) => (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              key={c.slug}
              src={`/images/callout-${c.slug}.png`}
              alt={c.label}
              style={{
                left: c.left,
                top: c.top,
                width: c.width,
                ["--callout-delay" as string]: `${i * 0.5}s`,
              }}
              className="animate-callout pointer-events-none absolute h-auto select-none"
            />
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
