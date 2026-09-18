"use client";

import { useEffect, useRef, useState } from "react";

type Ring = {
  id: number;
  x: number;
  y: number;
};

export default function ClickBurst() {
  const [rings, setRings] = useState<Ring[]>([]);
  const idRef = useRef(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (event.button !== 0) return;

      const id = ++idRef.current;
      setRings((current) => [
        ...current.slice(-2),
        { id, x: event.clientX, y: event.clientY },
      ]);

      window.setTimeout(() => {
        setRings((current) => current.filter((item) => item.id !== id));
      }, 520);
    };

    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    return () => window.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  return (
    <>
      {rings.map((ring) => (
        <span
          key={ring.id}
          className="click-ring"
          style={{ left: ring.x, top: ring.y }}
          aria-hidden="true"
        />
      ))}
    </>
  );
}
