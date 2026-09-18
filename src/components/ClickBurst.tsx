"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

type Particle = {
  x: number;
  y: number;
  size: number;
  color: string;
  opacity: number;
  delay: number;
};

type Ring = {
  width: number;
  height: number;
  rotate: number;
  opacity: number;
  delay: number;
};

type Burst = {
  id: number;
  x: number;
  y: number;
  particles: Particle[];
  rings: [Ring, Ring];
};

const colors = [
  "#2563eb",
  "#1d4ed8",
  "#3b82f6",
  "#4338ca",
  "#4f46e5",
  "#6366f1",
  "#facc15",
  "#fde047",
  "#7c8448",
];

function between(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function randomParticle(): Particle {
  const angle = between(0, Math.PI * 2);
  const distance = between(22, 70);
  const roll = Math.random();

  const size =
    roll < 0.48
      ? between(2.5, 6)
      : roll < 0.86
        ? between(7, 13)
        : between(14, 21);

  return {
    x: Math.cos(angle) * distance,
    y: Math.sin(angle) * distance,
    size,
    color: colors[Math.floor(Math.random() * colors.length)],
    opacity: between(0.42, 1),
    delay: between(0, 80),
  };
}

function randomRing(scale: number): Ring {
  const base = between(62, 92) * scale;

  return {
    width: base,
    height: base * between(0.78, 1.08),
    rotate: between(-28, 28),
    opacity: between(0.48, 0.82),
    delay: between(0, 55),
  };
}

function makeBurst(id: number, x: number, y: number): Burst {
  const particleCount = Math.floor(between(14, 23));

  return {
    id,
    x,
    y,
    particles: Array.from({ length: particleCount }, randomParticle),
    rings: [randomRing(1), randomRing(between(0.62, 0.82))],
  };
}

export default function ClickBurst() {
  const [bursts, setBursts] = useState<Burst[]>([]);
  const idRef = useRef(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (event.button !== 0) return;

      const id = ++idRef.current;
      const burst = makeBurst(id, event.clientX, event.clientY);

      setBursts((current) => [...current.slice(-2), burst]);

      window.setTimeout(() => {
        setBursts((current) => current.filter((item) => item.id !== id));
      }, 820);
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
          {burst.rings.map((ring, index) => (
            <span
              key={index}
              className="click-burst-ring"
              style={
                {
                  "--ring-width": `${ring.width}px`,
                  "--ring-height": `${ring.height}px`,
                  "--ring-rotate": `${ring.rotate}deg`,
                  "--ring-opacity": ring.opacity,
                  "--ring-delay": `${ring.delay}ms`,
                } as CSSProperties
              }
            />
          ))}

          {burst.particles.map((particle, index) => (
            <i
              key={index}
              className="click-burst-particle"
              style={
                {
                  "--x": `${particle.x}px`,
                  "--y": `${particle.y}px`,
                  "--size": `${particle.size}px`,
                  "--particle-color": particle.color,
                  "--particle-opacity": particle.opacity,
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
