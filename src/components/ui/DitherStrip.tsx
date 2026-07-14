"use client";

import { useEffect, useRef } from "react";

/* The black -> cream pixel dissolve under the footer wordmark.
 *
 * Traced from the Figma artwork: a 90x15 grid of 16px squares.
 * '1' = black, '0' = cream. Rebuilt as elements (rather than the flat PNG it
 * used to be) so individual squares can animate. */
const DITHER = [
  "111101111111111111111111111111111111011111111111111111111111111111110111111111111111111011",
  "111111111111101111110111111111111111111111111111111111111111111111111111111111111111111111",
  "111111111111111111111111110111111111111011111011111111111111101011111111111110111110111111",
  "110011011011111011011101111111101111011111011111001101101111111111101010110011011011111011",
  "101101100110011111111011111010100110111010111111110110111110110111110111101101100110011111",
  "010010011001100100101100000101001111011100001101001001100101010101101001010010011001100100",
  "000000000000000000000010001000010000100011110010000010010000010000010010000000000000000000",
  "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  "000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000",
  "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  "010001000100000000000000000000000000000000000000000000000000000100000000000000000000000000",
  "000100010001000000000000001010000000000000000000000000000000000001000000100000100010001000",
  "000000000000000000000000000000100001000001000100000000000000100000000000000000000000000000",
  "000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000",
  "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
];

const BLACK = "#000000";
const CREAM = "#faf7eb";
const COLS = DITHER[0].length;
const TOTAL = DITHER.length * COLS;

/** how many squares flip per beat */
const BATCH = 6;
/** how often a new batch is picked */
const TICK_MS = 700;
/** how long a square stays inverted before flipping back */
const HOLD_MS = 1200;

/**
 * Ambient twinkle: every beat a few random squares invert to their opposite
 * colour (black <-> cream), hold, then flip back — so the dissolve pattern
 * always stays intact and never degrades into noise.
 *
 * Cells are toggled straight on the DOM, so the 1,350 squares never re-render.
 * The first paint is the plain pattern, which keeps SSR and the client in
 * agreement; the animation only starts once mounted.
 */
export default function DitherStrip() {
  const cellsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timeouts = new Set<ReturnType<typeof setTimeout>>();

    const beat = () => {
      for (let n = 0; n < BATCH; n++) {
        const i = Math.floor(Math.random() * TOTAL);
        const el = cellsRef.current[i];
        if (!el || el.classList.contains("flip")) continue;
        el.classList.add("flip");
        const t = setTimeout(
          () => {
            el.classList.remove("flip");
            timeouts.delete(t);
          },
          HOLD_MS + Math.random() * 400,
        );
        timeouts.add(t);
      }
    };

    const iv = setInterval(beat, TICK_MS);
    return () => {
      clearInterval(iv);
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <div
      className="dither-grid w-full"
      style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)` }}
      aria-hidden
    >
      {DITHER.map((row, r) =>
        row.split("").map((bit, c) => {
          const black = bit === "1";
          return (
            <span
              key={`${r}-${c}`}
              ref={(el) => {
                cellsRef.current[r * COLS + c] = el;
              }}
              className="dither-cell"
              style={{
                ["--c" as string]: black ? BLACK : CREAM,
                ["--alt" as string]: black ? CREAM : BLACK,
              }}
            />
          );
        }),
      )}
    </div>
  );
}
