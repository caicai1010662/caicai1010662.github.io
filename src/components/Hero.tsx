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
        className="absolute left-1/2 top-5 h-[19vh] w-px -translate-x-1/2"
        style={{
          background:
            "linear-gradient(to bottom, color-mix(in srgb, var(--text) 72%, transparent), color-mix(in srgb, var(--text) 32%, transparent), transparent)",
        }}
      />

      <div className="relative z-10 flex max-w-6xl flex-col items-center">
        <h1
          className="font-black"
          style={{
            color: "var(--text)",
            fontSize: "clamp(4rem, 8vw, 6.5rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.05em",
            textShadow:
              "5px 5px 0 var(--hero-title-shadow), 10px 10px 0 var(--hero-title-shadow-soft)",
          }}
        >
          Lizhen Lab
        </h1>

        <p
          className="mt-7 whitespace-nowrap font-medium tracking-[0.06em] max-sm:whitespace-normal"
          style={{
            color: "var(--text-secondary)",
            fontSize: "clamp(1.05rem, 1.5vw, 1.25rem)",
            lineHeight: 1.6,
          }}
        >
          {locale === "zh"
            ? "机械 · 控制 · 软件 · AI · 把想法做成系统"
            : "Mechanics · Control · Software · AI · Build things that work"}
        </p>
      </div>

      <a
        href="#projects"
        aria-label={locale === "zh" ? "查看项目" : "View projects"}
        className="absolute bottom-9 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 transition-opacity hover:opacity-75"
        style={{ color: "var(--accent)" }}
      >
        <span
          className="h-24 w-px"
          style={{
            background:
              "linear-gradient(to bottom, color-mix(in srgb, var(--text) 60%, transparent), color-mix(in srgb, var(--text) 24%, transparent), var(--accent))",
          }}
        />
        <span className="h-[16px] w-[16px] rotate-45 border-b-[3px] border-r-[3px] border-current" />
      </a>
    </section>
  );
}
