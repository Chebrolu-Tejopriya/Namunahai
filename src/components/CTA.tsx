import PixelButton from "./ui/PixelButton";

export default function CTA() {
  return (
    <section id="demo" className="bg-cream py-28">
      <div className="mx-auto flex max-w-[720px] flex-col items-center px-6 text-center">
        <h2 className="text-[27px] font-semibold leading-[1.12] tracking-[-0.02em] text-ink sm:text-[44px]">
          Your next customer is calling right now.
        </h2>
        <p className="mt-5 max-w-[480px] text-[16px] leading-[1.6] text-muted">
          Set up your first AI voice agent in 10 minutes. We help you configure
          it. Free during beta.
        </p>
        <div className="mt-8">
          <PixelButton href="#demo">Book a demo</PixelButton>
        </div>
      </div>
    </section>
  );
}
