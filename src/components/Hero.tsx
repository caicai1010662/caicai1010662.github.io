"use client";

import { useLanguage } from "./LanguageProvider";

export default function Hero() {
  const { locale } = useLanguage();

  return (
    <section
      id="home"
      className="hero-surface relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6 text-center"
    >
      <div className="hero-grid absolute inset-0" />
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="relative z-10 -mt-10 flex max-w-5xl flex-col items-center">
        <p className="mb-5 text-[11px] uppercase tracking-[0.34em] text-sky-400/85">
          Engineering · Motion · Software · AI
        </p>

        <h1 className="hero-title text-[clamp(3.2rem,8vw,7.8rem)] font-black leading-[0.98] tracking-[-0.05em] text-white">
          {locale === "zh" ? "范李振的项目集" : "Lizhen Fan's Portfolio"}
        </h1>

        <div className="mt-10 rounded-2xl border border-white/[0.08] bg-black/35 px-6 py-4 shadow-2xl backdrop-blur-md">
          <p className="text-sm font-semibold text-slate-100 md:text-base">
            {locale === "zh"
              ? "把机械、控制、软件与智能能力做成真正能运行的系统。"
              : "Turning mechanics, control, software, and intelligence into systems that actually run."}
          </p>
        </div>
      </div>

      <a
        href="#projects"
        aria-label={locale === "zh" ? "查看项目" : "View projects"}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-sky-400 transition-colors hover:text-sky-300"
      >
        <span className="h-24 w-px bg-gradient-to-b from-white/60 to-sky-500/80" />
        <span className="hero-chevron" />
      </a>
    </section>
  );
}
