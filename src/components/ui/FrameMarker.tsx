/* Small capsule that sits where the blueprint framing lines cross. */
export default function FrameMarker({
  className = "",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <span
      aria-hidden
      style={style}
      className={`absolute h-[17px] w-[10px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d9d9d9] bg-white ${className}`}
    />
  );
}
