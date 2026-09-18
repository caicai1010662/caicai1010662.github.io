"use client";

import { useLanguage } from "./LanguageProvider";
import { translations } from "@/lib/content";

export default function Footer() {
  const { locale } = useLanguage();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-xs text-gray-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Lizhen Fan</p>
        <p>{translations.footer.note[locale]}</p>
      </div>
    </footer>
  );
}
