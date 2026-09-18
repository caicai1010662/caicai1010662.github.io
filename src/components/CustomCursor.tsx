"use client";

import { useEffect, useRef, useState } from "react";

type Ripple = {
  id: number;
  x: number;
  y: number;
};

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const rippleId = useRef(0);
  const [enabled, setEnabled] = useState(false);
  const [interactive, setInteractive] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [ripples, setRipples] = useState<Ripple[]>([]);

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
      ring.current.x += (target.current.x - ring.current.x) * 0.2;
      ring.current.y += (target.current.y - ring.current.y) * 0.2;

      if (ringRef.current) {
        ringRef.current.style.left = `${ring.current.x}px`;
        ringRef.current.style.top = `${ring.current.y}px`;
      }

      frame = requestAnimationFrame(tick);
    };

    const down = (event: MouseEvent) => {
      setPressed(true);
      const id = ++rippleId.current;
      const ripple = { id, x: event.clientX, y: event.clientY };
      setRipples((current) => [...current.slice(-4), ripple]);
      window.setTimeout(() => {
        setRipples((current) => current.filter((item) => item.id !== id));
      }, 620);
    };

    const up = () => setPressed(false);

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    frame = requestAnimationFrame(tick);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      cancelAnimationFrame(frame);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot" aria-hidden="true" />
      <div
        ref={ringRef}
        className={[
          "custom-cursor-ring",
          interactive ? "is-interactive" : "",
          pressed ? "is-pressed" : "",
        ]
          .filter(Boolean)
          .join(" ")}
        aria-hidden="true"
      />
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="cursor-click-ripple"
          style={{ left: ripple.x, top: ripple.y }}
          aria-hidden="true"
        />
      ))}
    </>
  );
}
