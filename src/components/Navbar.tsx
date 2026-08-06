"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "./LanguageProvider";
import { useScrollY } from "@/hooks/useScrollY";
import { translations } from "@/lib/content";

const sectionLinks = [
  { id: "home", href: "#home", key: "home" },
  { id: "about", href: "#about", key: "about" },
  { id: "projects", href: "#projects", key: "projects" },
  { id: "contact", href: "#contact", key: "contact" },
] as const;

export default function Navbar() {
  const { locale, setLocale } = useLanguage();
  const t = translations;

  const scrollY = useScrollY();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(scrollY > 10);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  useEffect(() => {
    setScrolled(scrollY > 10);
  }, [scrollY]);

  // Scrollspy：找到顶部最近通过参考线（导航栏下方）的区块作为当前激活项
  useEffect(() => {
    let current: (typeof sectionLinks)[number]["id"] = sectionLinks[0].id;
    for (const { id } of sectionLinks) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 120) {
        current = id;
      }
    }
    setActiveSection(current);
  }, [scrollY]);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const toggleLocale = () => setLocale(locale === "zh" ? "en" : "zh");

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-colors ${
        scrolled
          ? "bg-white/80 backdrop-blur shadow-sm dark:bg-gray-950/80"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <a href="#" className="text-xl font-bold tracking-tight">
          {t.hero.name[locale]}
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-6 md:flex">
          {sectionLinks.map((l) => {
            const isActive = activeSection === l.id;
            return (
              <a
                key={l.href}
                href={l.href}
                className={`relative text-sm font-medium transition-colors ${
                  isActive
                    ? "text-violet-600 dark:text-violet-400"
                    : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                }`}
              >
                {t.nav[l.key][locale]}
                {isActive && (
                  <span className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400" />
                )}
              </a>
            );
          })}
          <button
            onClick={toggleLocale}
            className="rounded-lg border border-gray-200 px-2.5 py-1.5 text-xs font-medium text-gray-600 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
            aria-label="Switch language"
          >
            {locale === "zh" ? "EN" : "中"}
          </button>
          <button
            onClick={toggleDark}
            className="rounded-lg border border-gray-200 p-2 text-sm transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
            aria-label="Toggle dark mode"
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleLocale}
            className="rounded-lg border border-gray-200 px-2.5 py-1.5 text-xs font-medium text-gray-600 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
            aria-label="Switch language"
          >
            {locale === "zh" ? "EN" : "中"}
          </button>
          <button
            onClick={toggleDark}
            className="rounded-lg border border-gray-200 p-2 text-sm transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
            aria-label="Toggle dark mode"
          >
            {dark ? "☀️" : "🌙"}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg border border-gray-200 p-2 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
            aria-label="Toggle menu"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-gray-200 bg-white px-4 pb-4 dark:border-gray-800 dark:bg-gray-950 md:hidden">
          {sectionLinks.map((l) => {
            const isActive = activeSection === l.id;
            return (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className={`block py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-violet-600 dark:text-violet-400"
                    : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                }`}
              >
                {t.nav[l.key][locale]}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
}
