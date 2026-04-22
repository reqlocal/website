"use client";

import { useEffect, useState } from "react";

const MESSAGES = [
  "Stop threading context. One middleware.",
  "Typed getCtx(). Zero parameter sprawl.",
  "Express, Fastify, and every await in between.",
] as const;

const INTERVAL_MS = 4200;
const FADE_MS = 320;

export function AnimatedTagline() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let fadeTimeout: number | undefined;
    const id = window.setInterval(() => {
      setVisible(false);
      fadeTimeout = window.setTimeout(() => {
        setIndex((i) => (i + 1) % MESSAGES.length);
        setVisible(true);
      }, FADE_MS) as unknown as number;
    }, INTERVAL_MS) as unknown as number;
    return () => {
      window.clearInterval(id);
      if (fadeTimeout !== undefined) window.clearTimeout(fadeTimeout);
    };
  }, []);

  return (
    <p
      className="mx-auto mb-8 min-h-[3.25rem] max-w-lg text-lg font-semibold text-slate-100 transition-opacity duration-300 ease-out sm:min-h-[3.5rem] sm:text-xl md:text-2xl"
      style={{ opacity: visible ? 1 : 0 }}
      aria-live="polite"
    >
      {MESSAGES[index]}
    </p>
  );
}
