"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageProvider";
import { translations } from "@/lib/content";

const links = [
  { href: "/#projects", key: "projects" },
  { href: "/#about", key: "about" },
  { href: "/#contact", key: "contact" },
] as const;

export default function Navbar() {
  const { locale, setLocale } = useLanguage();
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-gray-200/70 bg-white/85 backdrop-blur-xl dark:border-gray-800/80 dark:bg-gray-950/85">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="/" className="font-semibold tracking-tight">
          范李振 <span className="ml-1 font-normal text-gray-400">/ Portfolio</span>
        </a>

        <div className="flex items-center gap-2 sm:gap-5">
          <div className="hidden items-center gap-5 sm:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-500 transition-colors hover:text-gray-950 dark:text-gray-400 dark:hover:text-white"
              >
                {translations.nav[link.key][locale]}
              </a>
            ))}
          </div>

          <button
            onClick={() => setLocale(locale === "zh" ? "en" : "zh")}
            className="rounded-lg border border-gray-200 px-2.5 py-1.5 text-xs font-medium text-gray-600 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-900"
            aria-label="Switch language"
          >
            {locale === "zh" ? "EN" : "中"}
          </button>

          <button
            onClick={toggleDark}
            className="rounded-lg border border-gray-200 px-2.5 py-1.5 text-xs text-gray-600 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-900"
            aria-label="Toggle dark mode"
          >
            {dark ? "Light" : "Dark"}
          </button>
        </div>
      </div>
    </nav>
  );
}
