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
      className={`fixed bottom-6 right-6 z-50 grid h-11 w-11 place-items-center rounded-full border border-sky-400/20 bg-[#07111d]/90 text-sky-400 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-sky-300/50 hover:text-sky-300 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <svg
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.2}
        viewBox="0 0 24 24"
        aria-hidden
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}
