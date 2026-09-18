"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageProvider";
import { profile } from "@/data/profile";
import ProjectSearch from "./ProjectSearch";

export default function Navbar() {
  const { locale, setLocale } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <>
      <div className="fixed left-5 top-5 z-[70]">
        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="chrome-button group"
        >
          <span className={`hamburger-line ${menuOpen ? "translate-y-[6px] rotate-45" : ""}`} />
          <span className={`hamburger-line ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`hamburger-line ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />
        </button>
      </div>

      <div className="fixed right-5 top-5 z-[70]">
        <button
          type="button"
          onClick={() => setSearchOpen(true)}
          aria-label={locale === "zh" ? "搜索项目" : "Search projects"}
          className="chrome-button"
        >
          <svg className="h-[19px] w-[19px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.4-3.4" />
          </svg>
        </button>
      </div>

      <div
        className={`fixed inset-0 z-[60] bg-black/55 backdrop-blur-sm transition-opacity duration-300 ${menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={() => setMenuOpen(false)}
      />

      <aside
        className={`fixed inset-y-0 left-0 z-[65] w-[330px] max-w-[86vw] border-r border-white/10 bg-[#0a111b]/97 p-7 shadow-2xl backdrop-blur-xl transition-transform duration-300 ease-out ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex h-full flex-col pt-12">
          <img
            src="/1.png"
            alt={profile.name[locale]}
            className="h-20 w-20 rounded-2xl border border-white/10 object-cover"
          />

          <h2 className="mt-5 text-2xl font-bold tracking-tight text-white">
            {profile.name[locale]}
          </h2>
          <p className="mt-2 text-sm font-medium text-sky-400">
            {profile.title[locale]}
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-400">
            {profile.summary[locale]}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {profile.focus.map((item) => (
              <span key={item.en} className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-slate-400">
                {item[locale]}
              </span>
            ))}
          </div>

          <div className="mt-7 grid grid-cols-3 border-y border-white/10 py-4">
            {profile.stats.map((stat) => (
              <div key={stat.value}>
                <div className="text-lg font-bold text-white">{stat.value}</div>
                <div className="mt-1 text-[10px] uppercase tracking-wider text-slate-500">
                  {stat.label[locale]}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-5 text-xs leading-6 text-slate-500">
            {profile.education[locale]}
          </p>

          <div className="mt-auto border-t border-white/10 pt-5">
            <a href="mailto:17685537369@163.com" className="text-sm text-slate-400 hover:text-sky-400">
              17685537369@163.com
            </a>

            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
              {profile.links
                .filter((link) => !link.href.startsWith("mailto:"))
                .map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-slate-500 transition-colors hover:text-white"
                  >
                    {link.label[locale]} ↗
                  </a>
                ))}
            </div>

            <div className="mt-5 flex items-center gap-2">
              <button
                onClick={() => setLocale(locale === "zh" ? "en" : "zh")}
                className="drawer-control"
              >
                {locale === "zh" ? "EN" : "中文"}
              </button>
              <button onClick={toggleDark} className="drawer-control">
                {dark ? "Light" : "Dark"}
              </button>
            </div>
          </div>
        </div>
      </aside>

      <ProjectSearch open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
