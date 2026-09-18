"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageProvider";

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
    <nav className="fixed inset-x-0 top-0 z-50 bg-[#f7f8fa]/88 backdrop-blur-lg dark:bg-gray-950/88">
      <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between px-5">
        <a
          href="/"
          className="text-sm font-semibold tracking-tight text-gray-900 dark:text-gray-100"
        >
          FLZ
          <span className="ml-2 font-normal text-gray-400">/ portfolio</span>
        </a>

        <div className="flex items-center gap-1">
          <button
            onClick={() => setLocale(locale === "zh" ? "en" : "zh")}
            className="rounded-md px-2.5 py-1.5 text-xs text-gray-500 transition-colors hover:bg-white hover:text-gray-950 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-white"
            aria-label="Switch language"
          >
            {locale === "zh" ? "EN" : "中"}
          </button>
          <button
            onClick={toggleDark}
            className="rounded-md px-2.5 py-1.5 text-xs text-gray-500 transition-colors hover:bg-white hover:text-gray-950 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-white"
            aria-label="Toggle dark mode"
          >
            {dark ? "Light" : "Dark"}
          </button>
        </div>
      </div>
    </nav>
  );
}
