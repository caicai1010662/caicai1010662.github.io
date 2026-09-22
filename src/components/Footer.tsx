"use client";

import { useLanguage } from "./LanguageProvider";
import { profile } from "@/data/profile";

export default function Footer() {
  const { locale } = useLanguage();

  return (
    <footer
      className="border-t"
      style={{
        borderColor: "var(--border)",
        backgroundColor: "var(--bg)",
      }}
    >
      <div
        className="type-body mx-auto flex max-w-[1120px] flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between"
        style={{ color: "var(--text-muted)" }}
      >
        <p>© {new Date().getFullYear()} Lizhen Fan</p>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-70"
          >
            GitHub ↗
          </a>
          <a
            href={profile.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-70"
          >
            {locale === "zh" ? "简历" : "Resume"} ↗
          </a>
          <a
            href={profile.links.email}
            className="transition-opacity hover:opacity-70"
          >
            {locale === "zh" ? "邮箱" : "Email"}
          </a>
        </div>
      </div>
    </footer>
  );
}
