"use client";

import { useEffect, useState } from "react";

export type CalloutSpec = {
  slug: string;
  /** box top-left + min width, as a % of the 1215x551 artwork */
  left: string;
  top: string;
  minWidth: string;
  /** industries this callout rotates through, starting with its design label */
  items: string[];
};

type Props = {
  spec: CalloutSpec;
  /** position in the reveal sweep — drives entrance + swap stagger */
  index: number;
  /** how long each industry stays up */
  intervalMs?: number;
};

/**
 * A label on the hero grid. The box stays put; the industry inside it swaps on
 * a timer so each anchor cycles through a different industry over time.
 * Sizes are in `cqw` so the whole thing scales with the grid artwork.
 */
export default function Callout({ spec, index, intervalMs = 3000 }: Props) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    let iv: ReturnType<typeof setInterval> | undefined;
    // stagger each callout so they never swap in unison
    const start = setTimeout(
      () => {
        iv = setInterval(
          () => setI((v) => (v + 1) % spec.items.length),
          intervalMs,
        );
      },
      1400 + index * 620,
    );
    return () => {
      clearTimeout(start);
      if (iv) clearInterval(iv);
    };
  }, [spec.items.length, intervalMs, index]);

  const label = spec.items[i];

  return (
    <div
      style={{
        left: spec.left,
        top: spec.top,
        minWidth: spec.minWidth,
        ["--callout-delay" as string]: `${index * 0.45}s`,
      }}
      className="animate-callout-in pointer-events-none absolute flex h-[2.716cqw] items-center justify-center whitespace-nowrap border border-black bg-white px-[1.15cqw] shadow-[0_2px_3px_rgba(0,0,0,0.18)]"
    >
      {/* key remounts the span on change so the swap animation replays */}
      <span
        key={label}
        className="animate-swap block text-[1.03cqw] leading-none text-ink"
      >
        {label}
      </span>
    </div>
  );
}
