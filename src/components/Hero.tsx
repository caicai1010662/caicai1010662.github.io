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
          "radial-gradient(circle at 18% 30%, rgba(14,165,233,0.16), transparent 28%), radial-gradient(circle at 78% 18%, rgba(37,99,235,0.14), transparent 30%), linear-gradient(180deg, #07101a 0%, #081421 70%, #0a1725 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(125,211,252,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(125,211,252,0.06) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
          maskImage: "linear-gradient(to bottom, black, transparent 88%)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent 88%)",
        }}
      />

      <div className="absolute left-[-100px] top-[22%] h-[420px] w-[420px] rounded-full bg-sky-600/20 blur-[90px]" />
      <div className="absolute right-[-80px] top-[6%] h-[380px] w-[380px] rounded-full bg-blue-700/20 blur-[90px]" />

      <div className="relative z-10 -mt-10 flex max-w-5xl flex-col items-center">
        <p className="mb-5 text-[11px] uppercase tracking-[0.34em] text-sky-400/85">
          Engineering · Motion · Software · AI
        </p>

        <h1
          className="text-[clamp(3.2rem,8vw,7.8rem)] font-black leading-[0.98] tracking-[-0.05em] text-white"
          style={{
            textShadow:
              "4px 4px 0 rgba(14,165,233,0.78), 8px 8px 0 rgba(2,132,199,0.18)",
          }}
        >
          {locale === "zh" ? "范李振的项目集" : "Lizhen Fan's Portfolio"}
        </h1>

        <div className="mt-10 rounded-2xl border border-white/10 bg-black/40 px-6 py-4 shadow-[0_20px_70px_rgba(0,0,0,0.38)] backdrop-blur-md">
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
        <span className="h-[17px] w-[17px] rotate-45 border-b-[3px] border-r-[3px] border-current" />
      </a>
    </section>
  );
}
