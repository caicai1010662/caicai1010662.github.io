"use client";

import { useLanguage } from "./LanguageProvider";
import { profile } from "@/data/profile";

export default function Footer() {
  const { locale } = useLanguage();

  return (
    <footer
      className="relative overflow-hidden border-t"
      style={{
        borderColor: "var(--border)",
        background:
          "linear-gradient(180deg, color-mix(in srgb, var(--bg) 90%, transparent), color-mix(in srgb, var(--bg) 97%, transparent))",
      }}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px max-w-[760px]"
        style={{
          background:
            "linear-gradient(90deg, transparent, color-mix(in srgb, var(--accent) 40%, transparent), transparent)",
        }}
      />

      <div className="mx-auto flex max-w-[1120px] flex-col items-center px-5 py-14 text-center md:py-16">
        <h2
          className="text-[1.75rem] font-bold tracking-[-0.035em]"
          style={{ color: "var(--text)" }}
        >
          Lizhen Lab
        </h2>

        <p
          className="type-body mt-3 max-w-xl"
          style={{ color: "var(--text-secondary)" }}
        >
          {locale === "zh"
            ? "机械 · 控制 · 软件 · AI · 把想法做成系统"
            : "Mechanics · Control · Software · AI · Build things that work"}
        </p>

        <nav
          aria-label={locale === "zh" ? "页脚链接" : "Footer links"}
          className="type-body mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 font-medium"
        >
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="pressable transition-opacity hover:opacity-70"
            style={{ color: "var(--accent)" }}
          >
            GitHub ↗
          </a>
          <a
            href={profile.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="pressable transition-opacity hover:opacity-70"
            style={{ color: "var(--accent)" }}
          >
            {locale === "zh" ? "简历" : "Resume"} ↗
          </a>
          <a
            href={profile.links.email}
            className="pressable transition-opacity hover:opacity-70"
            style={{ color: "var(--accent)" }}
          >
            {locale === "zh" ? "邮箱" : "Email"}
          </a>
        </nav>

        <div
          className="mt-9 h-px w-28"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--border-strong), transparent)",
          }}
        />

        <div
          className="type-body mt-7 space-y-1.5"
          style={{ color: "var(--text-muted)" }}
        >
          <p>© {new Date().getFullYear()} Lizhen Fan</p>
          <p className="text-[0.8rem] tracking-[0.04em]">
            Next.js · GitHub Pages
          </p>
        </div>
      </div>
    </footer>
  );
}
