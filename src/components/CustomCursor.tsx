"use client";

import { useEffect, useRef, useState } from "react";

type Burst = {
  id: number;
  x: number;
  y: number;
};

const particles = Array.from({ length: 8 });

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const burstId = useRef(0);
  const [enabled, setEnabled] = useState(false);
  const [interactive, setInteractive] = useState(false);
  const [bursts, setBursts] = useState<Burst[]>([]);

  useEffect(() => {
    const pointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!pointerQuery.matches || motionQuery.matches) return;

    setEnabled(true);
    document.documentElement.classList.add("custom-cursor-active");

    let frame = 0;

    const move = (event: MouseEvent) => {
      target.current = { x: event.clientX, y: event.clientY };

      if (dotRef.current) {
        dotRef.current.style.left = `${event.clientX}px`;
        dotRef.current.style.top = `${event.clientY}px`;
      }

      const element = event.target as Element | null;
      setInteractive(
        Boolean(
          element?.closest(
            "a, button, input, textarea, select, [role='button'], [data-cursor='interactive']",
          ),
        ),
      );
    };

    const tick = () => {
      ring.current.x += (target.current.x - ring.current.x) * 0.22;
      ring.current.y += (target.current.y - ring.current.y) * 0.22;

      if (ringRef.current) {
        ringRef.current.style.left = `${ring.current.x}px`;
        ringRef.current.style.top = `${ring.current.y}px`;
      }

      frame = requestAnimationFrame(tick);
    };

    const click = (event: MouseEvent) => {
      const id = ++burstId.current;
      setBursts((current) => [
        ...current.slice(-3),
        { id, x: event.clientX, y: event.clientY },
      ]);

      window.setTimeout(() => {
        setBursts((current) => current.filter((item) => item.id !== id));
      }, 560);
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mousedown", click);
    frame = requestAnimationFrame(tick);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", click);
      cancelAnimationFrame(frame);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot" aria-hidden="true" />
      <div
        ref={ringRef}
        className={`custom-cursor-ring ${interactive ? "is-interactive" : ""}`}
        aria-hidden="true"
      />

      {bursts.map((burst) => (
        <span
          key={burst.id}
          className="cursor-star-burst"
          style={{ left: burst.x, top: burst.y }}
          aria-hidden="true"
        >
          {particles.map((_, index) => (
            <i
              key={index}
              className="cursor-star-particle"
              style={{ "--i": index } as React.CSSProperties}
            />
          ))}
        </span>
      ))}
    </>
  );
}
