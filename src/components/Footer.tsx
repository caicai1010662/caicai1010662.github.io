"use client";

import { useLanguage } from "./LanguageProvider";
import { profile } from "@/data/profile";

export default function Footer() {
  const { locale } = useLanguage();

  return (
    <footer className="border-t border-white/[0.06] bg-[#07101a]">
      <div className="type-body mx-auto flex max-w-[1120px] flex-col gap-4 px-5 py-8 text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Lizhen Fan</p>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-sky-400"
          >
            GitHub ↗
          </a>
          <a
            href={profile.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-sky-400"
          >
            {locale === "zh" ? "简历" : "Resume"} ↗
          </a>
          <a
            href={profile.links.email}
            className="transition hover:text-sky-400"
          >
            {locale === "zh" ? "邮箱" : "Email"}
          </a>
        </div>
      </div>
    </footer>
  );
}
