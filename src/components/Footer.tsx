"use client";

import { useLanguage } from "./LanguageProvider";

export default function Footer() {
  const { locale } = useLanguage();

  return (
    <footer className="border-t border-white/[0.06] bg-[#07101a]">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-4 px-5 py-8 text-[11px] text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Lizhen Fan</p>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <a
            href="https://github.com/caicai1010662"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-sky-400"
          >
            GitHub ↗
          </a>
          <a
            href="https://github.com/caicai1010662/Fanlizhen_HNU_Resume"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-sky-400"
          >
            {locale === "zh" ? "简历" : "Resume"} ↗
          </a>
          <a
            href="mailto:17685537369@163.com"
            className="transition hover:text-sky-400"
          >
            {locale === "zh" ? "邮箱" : "Email"}
          </a>
        </div>
      </div>
    </footer>
  );
}
