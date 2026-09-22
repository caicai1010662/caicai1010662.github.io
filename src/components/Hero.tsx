"use client";

import { useLanguage } from "./LanguageProvider";

export default function Hero() {
  const { locale } = useLanguage();

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6 text-center"
      style={{
        backgroundColor: "transparent",
        backgroundImage:
          "linear-gradient(180deg, color-mix(in srgb, var(--bg) 18%, transparent), color-mix(in srgb, var(--bg) 42%, transparent)), radial-gradient(circle at 18% 32%, var(--hero-glow-a), transparent 30%), radial-gradient(circle at 80% 14%, var(--hero-glow-b), transparent 28%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.7]"
        style={{
          backgroundImage:
            "linear-gradient(var(--hero-grid) 1px, transparent 1px), linear-gradient(90deg, var(--hero-grid) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "linear-gradient(to bottom, black, transparent 78%)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent 78%)",
        }}
      />

      <div
        className="absolute left-[-120px] top-[24%] h-[460px] w-[460px] rounded-full blur-[110px]"
        style={{ backgroundColor: "var(--hero-glow-a)" }}
      />
      <div
        className="absolute right-[-90px] top-[8%] h-[400px] w-[400px] rounded-full blur-[110px]"
        style={{ backgroundColor: "var(--hero-glow-b)" }}
      />
      <div
        className="absolute left-1/2 top-5 h-[19vh] w-px -translate-x-1/2"
        style={{
          background:
            "linear-gradient(to bottom, color-mix(in srgb, var(--text) 72%, transparent), color-mix(in srgb, var(--text) 32%, transparent), transparent)",
        }}
      />

      <div className="relative z-10 flex max-w-6xl flex-col items-center">
        <img
          src="/avatar.png"
          alt={locale === "zh" ? "范李振" : "Lizhen Fan"}
          className="mb-10 h-36 w-36 rounded-full border-2 object-cover md:h-44 md:w-44"
          style={{
            borderColor: "var(--border-strong)",
            boxShadow: "0 22px 80px var(--shadow)",
          }}
        />

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

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-12 border-t"
        style={{
          borderColor: "var(--border)",
          background:
            "linear-gradient(to bottom, transparent, color-mix(in srgb, var(--accent) 7%, var(--bg-secondary)))",
        }}
      />
    </section>
  );
}
