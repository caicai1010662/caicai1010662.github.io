"use client";

import { useScrollY } from "@/hooks/useScrollY";

export default function BackToTop() {
  const scrollY = useScrollY();
  const visible = scrollY > 400;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`pressable fixed bottom-7 right-7 z-50 grid h-14 w-14 place-items-center rounded-full border backdrop-blur-md transition-all duration-300 hover:-translate-y-1 ${visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"}`}
      style={{
        borderColor: "color-mix(in srgb, var(--accent) 55%, transparent)",
        backgroundColor:
          "color-mix(in srgb, var(--surface-soft) 95%, transparent)",
        color: "var(--accent)",
        boxShadow:
          "0 0 0 1px color-mix(in srgb, var(--accent) 8%, transparent), 0 12px 35px var(--shadow)",
      }}
    >
      <svg
        className="h-7 w-7"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        viewBox="0 0 24 24"
        aria-hidden
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}
