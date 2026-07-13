import PixelButton from "./ui/PixelButton";
import FrameMarker from "./ui/FrameMarker";

export default function CTA() {
  return (
    <section id="demo" className="relative overflow-hidden bg-cream">
      <div className="relative mx-auto max-w-[1440px] md:min-h-[723px]">
        {/* Hatched gutters + framing lines */}
        <div className="pointer-events-none absolute inset-0 hidden md:block">
          <div className="absolute bottom-0 left-0 top-[82px] w-[120px] border-r border-[#d9d9d9] hatch" />
          <div className="absolute bottom-0 right-0 top-[82px] w-[120px] border-l border-[#d9d9d9] hatch" />
          <div className="absolute left-[120px] right-[120px] top-[82px] border-t border-[#d9d9d9]" />
          <div className="absolute bottom-[115px] left-[120px] right-[120px] border-t border-[#d9d9d9]" />

          <FrameMarker className="left-[120px] top-[82px]" />
          <FrameMarker className="right-[120px] top-[82px] translate-x-1/2" />
          <FrameMarker className="bottom-[115px] left-[120px] translate-y-1/2" />
          <FrameMarker className="bottom-[115px] right-[120px] translate-x-1/2 translate-y-1/2" />
        </div>

        {/* Content */}
        {/* pb offsets the content so it centers inside the framed box, not the section */}
        <div className="relative flex flex-col items-center gap-[34px] px-6 py-24 text-center md:min-h-[723px] md:justify-center md:py-0 md:pb-[33px]">
          <div className="flex flex-col items-center gap-[17px]">
            <h2 className="text-[27px] font-semibold leading-[1.2] tracking-[-0.88px] text-ink sm:text-[36px] lg:text-[44px]">
              Your next customer is calling right now.
            </h2>
            <p className="max-w-[747px] text-[18px] font-medium leading-[28px] text-cool sm:text-[22px] sm:leading-[36px]">
              Set up your first AI voice agent in 10 minutes. We help you
              configure it. Free during beta.
            </p>
          </div>

          <PixelButton href="#demo">Book a demo</PixelButton>
        </div>
      </div>
    </section>
  );
}
