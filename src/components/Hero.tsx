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
        className="pointer-events-none absolute left-1/2 top-5 h-[15vh] w-px -translate-x-1/2 opacity-60"
        style={{
          background:
            "linear-gradient(to bottom, color-mix(in srgb, var(--text) 44%, transparent), transparent)",
        }}
      />

      <div className="relative z-10 flex w-full max-w-5xl -translate-y-[9vh] flex-col items-center">
        <h1
          className="font-extrabold"
          style={{
            color: "var(--text)",
            fontSize: "clamp(3.6rem, 7.2vw, 6rem)",
            lineHeight: 0.96,
            letterSpacing: "-0.045em",
            textShadow:
              "0 4px 24px color-mix(in srgb, var(--shadow) 62%, transparent)",
          }}
        >
          Lizhen Lab
        </h1>

        <div
          className="mt-8 flex min-h-[64px] w-full max-w-[760px] items-center justify-center rounded-[14px] border px-6 py-3.5 sm:px-8"
          style={{
            borderColor:
              "color-mix(in srgb, var(--text) 14%, transparent)",
            background:
              "linear-gradient(90deg, color-mix(in srgb, var(--surface-strong) 66%, transparent), color-mix(in srgb, var(--surface-strong) 54%, transparent))",
            boxShadow:
              "0 14px 38px color-mix(in srgb, var(--shadow) 46%, transparent)",
          }}
        >
          <p
            className="text-center font-medium tracking-[0.045em]"
            style={{
              color: "var(--text)",
              fontSize: "clamp(0.96rem, 1.15vw, 1.08rem)",
              lineHeight: 1.6,
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
        className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2.5 transition-opacity hover:opacity-70"
        style={{ color: "var(--accent)" }}
      >
        <span
          className="h-[14vh] min-h-16 max-h-24 w-px opacity-60"
          style={{
            background:
              "linear-gradient(to bottom, transparent, color-mix(in srgb, var(--text) 36%, transparent), var(--accent))",
          }}
        />
        <span className="h-3.5 w-3.5 rotate-45 border-b-2 border-r-2 border-current" />
      </a>
    </section>
  );
}
