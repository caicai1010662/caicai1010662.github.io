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
      className={`fixed bottom-7 right-7 z-50 grid h-14 w-14 place-items-center rounded-full border border-sky-400/55 bg-[#07111d]/95 text-sky-300 shadow-[0_0_0_1px_rgba(56,189,248,0.08),0_12px_35px_rgba(0,0,0,0.5),0_0_24px_rgba(14,165,233,0.12)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:bg-[#0a1725] hover:text-white ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
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
