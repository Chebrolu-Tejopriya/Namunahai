/* eslint-disable @next/next/no-img-element */

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-[7px] ${className}`}>
      <img
        src="/images/logo-mark.svg"
        alt=""
        aria-hidden
        className="block h-[21.62px] w-[25.887px] shrink-0"
      />
      <img
        src="/images/logo-word.svg"
        alt="namunah"
        className="block h-[20.254px] w-[130.14px] shrink-0"
      />
    </span>
  );
}
