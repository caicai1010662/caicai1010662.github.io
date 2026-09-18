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

      <div className="relative z-10 flex max-w-6xl flex-col items-center">
        <img
          src="/avatar.png"
          alt={locale === "zh" ? "范李振" : "Lizhen Fan"}
          className="mb-10 h-36 w-36 rounded-full border-2 border-white/15 object-cover shadow-[0_22px_80px_rgba(0,0,0,0.42)] md:h-44 md:w-44"
        />

        <h1
          className="font-black text-white"
          style={{
            fontSize: "clamp(4rem, 8vw, 6.5rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.05em",
            textShadow:
              "5px 5px 0 rgba(14,165,233,0.72), 10px 10px 0 rgba(2,132,199,0.16)",
          }}
        >
          Lizhen Lab
        </h1>

        <p className="mt-7 whitespace-nowrap font-medium tracking-[0.06em] text-slate-400 max-sm:whitespace-normal" style={{ fontSize: "clamp(1.05rem, 1.5vw, 1.25rem)", lineHeight: 1.6 }}>
          {locale === "zh"
            ? "机械 · 控制 · 软件 · AI · 把想法做成系统"
            : "Mechanics · Control · Software · AI · Build things that work"}
        </p>
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
