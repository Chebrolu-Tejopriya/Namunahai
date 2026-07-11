import Image from "next/image";
import Badge from "./ui/Badge";
import PixelButton from "./ui/PixelButton";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Hatched gutter panels framing the content */}
      <div className="pointer-events-none absolute inset-x-0 top-[82px] bottom-0 mx-auto hidden max-w-[1440px] md:block">
        <div className="absolute bottom-0 left-2 top-0 w-[108px] border-x border-[rgba(0,0,0,0.06)] hatch" />
        <div className="absolute bottom-0 right-2 top-0 w-[108px] border-x border-[rgba(0,0,0,0.06)] hatch" />
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

      {/* Isometric grid illustration */}
      <div className="relative z-10 mx-auto mt-[70px] max-w-[1240px] px-4">
        <Image
          src="/images/hero-grid.png"
          alt="Isometric map of voice AI use cases: appointment setting, education, sales, property management and more"
          width={1215}
          height={551}
          priority
          className="h-auto w-full select-none"
        />
      </div>
    </section>
  );
}
