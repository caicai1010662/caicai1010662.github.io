"use client";

import { useLanguage } from "./LanguageProvider";

export default function Hero() {
  const { locale } = useLanguage();

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6 text-center"
      style={{ backgroundColor: "transparent" }}
    >
      <div
        className="absolute left-1/2 top-5 h-[18vh] w-px -translate-x-1/2"
        style={{
          background:
            "linear-gradient(to bottom, color-mix(in srgb, var(--text) 58%, transparent), color-mix(in srgb, var(--text) 22%, transparent), transparent)",
        }}
      />

      <div className="relative z-10 flex max-w-6xl -translate-y-[7vh] flex-col items-center">
        <h1
          className="font-black"
          style={{
            color: "var(--text)",
            fontSize: "clamp(4rem, 8vw, 6.5rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.05em",
            textShadow:
              "3px 3px 0 var(--hero-title-shadow), 6px 6px 0 var(--hero-title-shadow-soft)",
          }}
        >
          Lizhen Lab
        </h1>

        <div
          className="mt-7 inline-flex max-w-[92vw] items-center justify-center rounded-full px-6 py-3 max-sm:rounded-2xl max-sm:px-5"
          style={{
            backgroundColor:
              "color-mix(in srgb, var(--surface-strong) 70%, transparent)",
            border:
              "1px solid color-mix(in srgb, var(--text) 12%, transparent)",
            boxShadow: "0 10px 30px var(--shadow)",
          }}
        >
          <p
            className="text-center font-medium tracking-[0.05em] max-sm:whitespace-normal"
            style={{
              color: "var(--text)",
              fontSize: "clamp(0.98rem, 1.2vw, 1.12rem)",
              lineHeight: 1.65,
            }}
          >
            {locale === "zh"
              ? "机械 · 控制 · 软件 · AI · 把想法做成系统"
              : "Mechanics · Control · Software · AI · Build things that work"}
          </p>
        </div>
      </div>

      <a
        href="#projects"
        aria-label={locale === "zh" ? "查看项目" : "View projects"}
        className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 transition-opacity hover:opacity-75"
        style={{ color: "var(--accent)" }}
      >
        <span
          className="h-20 w-px"
          style={{
            background:
              "linear-gradient(to bottom, color-mix(in srgb, var(--text) 58%, transparent), color-mix(in srgb, var(--text) 22%, transparent), var(--accent))",
          }}
        />
        <span className="h-[16px] w-[16px] rotate-45 border-b-[3px] border-r-[3px] border-current" />
      </a>
    </section>
  );
}
