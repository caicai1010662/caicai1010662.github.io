"use client";

import { useLanguage } from "./LanguageProvider";
import { translations } from "@/lib/content";

export default function Footer() {
  const { locale } = useLanguage();

  return (
    <footer className="border-t border-white/[0.06] bg-[#07101a]">
      <div className="mx-auto flex max-w-[900px] flex-col gap-2 px-5 py-7 text-[11px] text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Lizhen Fan</p>
        <p>{translations.footer.note[locale]}</p>
      </div>
    </footer>
  );
}
