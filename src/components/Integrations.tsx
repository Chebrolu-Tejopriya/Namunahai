import Image from "next/image";

export default function Integrations() {
  return (
    <section className="relative overflow-hidden bg-cream pt-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="max-w-[440px]">
          <h2 className="text-[26px] font-semibold leading-[1.15] tracking-[-0.02em] text-ink sm:text-[38px]">
            Connects to everything you already use
          </h2>
          <p className="mt-4 text-[16px] leading-[1.6] text-muted">
            Namunah plugs into your existing stack in minutes. No ripping and
            replacing — just your workflows, supercharged with voice AI.
          </p>
        </div>
      </div>

      <div className="relative mx-auto -mt-4 max-w-[1440px] px-2 md:-mt-16">
        <Image
          src="/images/integrations.png"
          alt="Isometric grid of integration logos Namunah connects with"
          width={1360}
          height={672}
          className="ml-auto h-auto w-full max-w-[1100px] select-none md:w-[85%]"
        />
      </div>
    </section>
  );
}
