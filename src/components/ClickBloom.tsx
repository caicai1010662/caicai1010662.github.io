"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

type Bloom = {
  id: number;
  x: number;
  y: number;
};

const particles = [
  { angle: 8, distance: 40, size: 15, color: "#2563eb", delay: 0 },
  { angle: 32, distance: 52, size: 9, color: "#fde047", delay: 18 },
  { angle: 55, distance: 46, size: 18, color: "#4338ca", delay: 8 },
  { angle: 78, distance: 62, size: 11, color: "#3b82f6", delay: 28 },
  { angle: 104, distance: 48, size: 8, color: "#facc15", delay: 4 },
  { angle: 128, distance: 58, size: 16, color: "#1d4ed8", delay: 22 },
  { angle: 153, distance: 44, size: 10, color: "#60a5fa", delay: 14 },
  { angle: 181, distance: 64, size: 19, color: "#4f46e5", delay: 30 },
  { angle: 207, distance: 51, size: 9, color: "#fde047", delay: 12 },
  { angle: 231, distance: 67, size: 15, color: "#2563eb", delay: 25 },
  { angle: 258, distance: 45, size: 12, color: "#6366f1", delay: 7 },
  { angle: 284, distance: 61, size: 18, color: "#facc15", delay: 20 },
  { angle: 308, distance: 50, size: 10, color: "#3b82f6", delay: 2 },
  { angle: 334, distance: 66, size: 14, color: "#312e81", delay: 16 },
];

export default function ClickBloom() {
  const [blooms, setBlooms] = useState<Bloom[]>([]);
  const idRef = useRef(0);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (event.button !== 0) return;

      const id = ++idRef.current;
      setBlooms((current) => [
        ...current.slice(-3),
        { id, x: event.clientX, y: event.clientY },
      ]);

      window.setTimeout(() => {
        setBlooms((current) => current.filter((item) => item.id !== id));
      }, 760);
    };

    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    return () => window.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  return (
    <>
      {blooms.map((bloom) => (
        <span
          key={bloom.id}
          className="click-bloom"
          style={{ left: bloom.x, top: bloom.y }}
          aria-hidden="true"
        >
          <span className="click-bloom-ring" />
          {particles.map((particle, index) => (
            <i
              key={index}
              className="click-bloom-particle"
              style={
                {
                  "--angle": `${particle.angle}deg`,
                  "--distance": `${particle.distance}px`,
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
