/* White rounded pill — "Built for you" — per Figma spec. */
export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center rounded-full border border-[#faf7eb] px-[14px] py-[6px]"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.02) 100%), linear-gradient(90deg, #fff 0%, #fff 100%)",
        boxShadow:
          "0px 1px 0.5px rgba(0,0,0,0.1), 0px 5px 2.5px rgba(0,0,0,0.02)",
      }}
    >
      <span className="text-[16px] font-medium leading-[1.5] tracking-[-0.32px] text-[#656565]">
        {children}
      </span>
    </span>
  );
}
