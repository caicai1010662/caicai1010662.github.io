"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

type Burst = {
  id: number;
  x: number;
  y: number;
};

const particles = [
  { x: -46, y: -12, size: 14, color: "#2563eb", delay: 0 },
  { x: -32, y: -36, size: 9, color: "#3b82f6", delay: 20 },
  { x: -10, y: -46, size: 16, color: "#4338ca", delay: 35 },
  { x: 18, y: -40, size: 10, color: "#facc15", delay: 10 },
  { x: 42, y: -24, size: 18, color: "#fde047", delay: 28 },
  { x: 49, y: 4, size: 12, color: "#1d4ed8", delay: 45 },
  { x: 36, y: 31, size: 17, color: "#4f46e5", delay: 18 },
  { x: 12, y: 45, size: 11, color: "#facc15", delay: 40 },
  { x: -16, y: 42, size: 15, color: "#4338ca", delay: 22 },
  { x: -39, y: 27, size: 10, color: "#fde047", delay: 8 },
  { x: -52, y: 10, size: 13, color: "#2563eb", delay: 32 },
  { x: 4, y: -22, size: 8, color: "#60a5fa", delay: 55 },
  { x: 22, y: 17, size: 9, color: "#312e81", delay: 50 },
  { x: -20, y: 6, size: 8, color: "#3b82f6", delay: 26 },
];

export default function ClickBurst() {
  const [bursts, setBursts] = useState<Burst[]>([]);
  const idRef = useRef(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (event.button !== 0) return;

      const id = ++idRef.current;
      setBursts((current) => [
        ...current.slice(-2),
        { id, x: event.clientX, y: event.clientY },
      ]);

      window.setTimeout(() => {
        setBursts((current) => current.filter((item) => item.id !== id));
      }, 720);
    };

    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    return () => window.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  return (
    <>
      {bursts.map((burst) => (
        <span
          key={burst.id}
          className="click-burst"
          style={{ left: burst.x, top: burst.y }}
          aria-hidden="true"
        >
          <span className="click-burst-ring" />
          {particles.map((particle, index) => (
            <i
              key={index}
              className="click-burst-particle"
              style={
                {
                  "--x": `${particle.x}px`,
                  "--y": `${particle.y}px`,
                  "--size": `${particle.size}px`,
                  "--particle-color": particle.color,
                  "--delay": `${particle.delay}ms`,
                } as CSSProperties
              }
            />
          ))}
        </span>
      ))}
    </>
  );
}
