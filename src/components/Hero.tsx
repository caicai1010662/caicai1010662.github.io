"use client";

import { useLanguage } from "./LanguageProvider";

export default function Hero() {
  const { locale } = useLanguage();

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#07101a] px-6 text-center"
      style={{
        backgroundImage:
          "radial-gradient(circle at 18% 32%, rgba(14,165,233,0.16), transparent 30%), radial-gradient(circle at 80% 14%, rgba(37,99,235,0.14), transparent 28%), linear-gradient(180deg, #07101a 0%, #081421 72%, #0a1725 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(125,211,252,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(125,211,252,0.05) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "linear-gradient(to bottom, black, transparent 78%)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent 78%)",
        }}
      />

      <div className="absolute left-[-120px] top-[24%] h-[460px] w-[460px] rounded-full bg-sky-600/20 blur-[110px]" />
      <div className="absolute right-[-90px] top-[8%] h-[400px] w-[400px] rounded-full bg-blue-700/20 blur-[110px]" />
      <div className="absolute left-1/2 top-5 h-[19vh] w-px -translate-x-1/2 bg-gradient-to-b from-white/80 via-white/45 to-transparent" />

      <div className="relative z-10 flex max-w-5xl flex-col items-center pt-8">
        <img
          src="/1.png"
          alt={locale === "zh" ? "范李振" : "Lizhen Fan"}
          className="mb-7 h-28 w-28 rounded-full border-2 border-white/15 object-cover shadow-[0_18px_70px_rgba(0,0,0,0.42)] md:h-32 md:w-32"
        />

        <h1
          className="type-display font-black text-white"
          style={{
            textShadow:
              "4px 4px 0 rgba(14,165,233,0.72), 8px 8px 0 rgba(2,132,199,0.16)",
          }}
        >
          {locale === "zh" ? "小范造物小站" : "Lizhen's Workshop"}
        </h1>

        <p className="type-body mt-5 tracking-[0.12em] text-slate-500">
          {locale === "zh"
            ? "机械 · 控制 · 软件 · AI"
            : "Mechanics · Control · Software · AI"}
        </p>

        <div className="mt-8 rounded-2xl border border-white/[0.08] bg-black/30 px-6 py-3.5 shadow-[0_20px_70px_rgba(0,0,0,0.32)] backdrop-blur-md">
          <p className="type-body font-semibold text-slate-100">
            {locale === "zh"
              ? "把想法做成能真正运行的系统。"
              : "Turning ideas into systems that actually run."}
          </p>
        </div>
      </div>

      <a
        href="#projects"
        aria-label={locale === "zh" ? "查看项目" : "View projects"}
        className="absolute bottom-9 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-sky-400 transition-colors hover:text-sky-300"
      >
        <span className="h-24 w-px bg-gradient-to-b from-white/70 via-white/45 to-sky-500/80" />
        <span className="h-[16px] w-[16px] rotate-45 border-b-[3px] border-r-[3px] border-current" />
      </a>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 border-t border-sky-400/[0.08] bg-gradient-to-b from-sky-500/[0.02] via-sky-500/[0.08] to-[#08111c]" />
    </section>
  );
}
