"use client";

import { useMemo } from "react";

type Star = {
  top: string;
  left: string;
  size: number;
  delay: string;
  duration: string;
  opacity: number;
};

/**
 * Dezentes Sternenfeld als Hintergrund. Reine CSS-Animation (twinkle),
 * deterministisch generiert, damit Server- und Client-Render übereinstimmen.
 */
export default function Starfield({ count = 60 }: { count?: number }) {
  const stars = useMemo<Star[]>(() => {
    // Einfacher deterministischer Pseudo-Zufall (kein Hydration-Mismatch).
    const seeded = (n: number) => {
      const x = Math.sin(n * 999.13) * 10000;
      return x - Math.floor(x);
    };

    return Array.from({ length: count }, (_, i) => ({
      top: `${seeded(i + 1) * 100}%`,
      left: `${seeded(i + 50) * 100}%`,
      size: 1 + seeded(i + 100) * 2,
      delay: `${seeded(i + 150) * 6}s`,
      duration: `${4 + seeded(i + 200) * 5}s`,
      opacity: 0.2 + seeded(i + 250) * 0.6,
    }));
  }, [count]);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {stars.map((star, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-soft-white animate-twinkle"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDelay: star.delay,
            animationDuration: star.duration,
            boxShadow: "0 0 6px rgba(245, 240, 232, 0.6)",
          }}
        />
      ))}
    </div>
  );
}
