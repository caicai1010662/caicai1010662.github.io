"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageProvider";
import { profile } from "@/data/profile";
import ProjectSearch from "./ProjectSearch";

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5.5 9.5V21h13V9.5" />
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M3.5 6.5h6l2 2h9v10.5a1.5 1.5 0 0 1-1.5 1.5h-14A1.5 1.5 0 0 1 3.5 19V6.5Z" />
      <path d="M3.5 9h17" />
    </svg>
  );
}

function ResumeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M6 3.5h8l4 4V20.5H6z" />
      <path d="M14 3.5v5h4M9 13h6M9 16h5" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor">
      <path d="M12 .8a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2.23c-3.23.7-3.91-1.37-3.91-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.1-.75.41-1.27.74-1.56-2.58-.29-5.29-1.29-5.29-5.73 0-1.27.45-2.3 1.2-3.11-.12-.3-.52-1.48.11-3.08 0 0 .98-.31 3.16 1.19a10.97 10.97 0 0 1 5.76 0c2.18-1.5 3.16-1.19 3.16-1.19.63 1.6.23 2.78.11 3.08.75.81 1.2 1.84 1.2 3.11 0 4.45-2.72 5.43-5.31 5.72.42.36.79 1.07.79 2.16v3.2c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .8Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4.5 7 7.5 6 7.5-6" />
    </svg>
  );
}

export default function Navbar() {
  const { locale, setLocale } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

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

  return (
    <>
      <div className="fixed left-5 top-5 z-[70]">
        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="grid h-12 w-12 place-items-center rounded-full border border-sky-400/30 bg-[#07111d]/88 text-sky-400 shadow-[0_10px_30px_rgba(0,0,0,0.32)] backdrop-blur-md transition hover:scale-[1.04] hover:border-sky-300/60 hover:bg-[#0a1725]"
        >
          <span className="relative block h-[18px] w-[22px]">
            <span className={`absolute left-0 top-0 block h-[2px] w-[22px] rounded-full bg-current transition-transform duration-200 ${menuOpen ? "translate-y-[8px] rotate-45" : ""}`} />
            <span className={`absolute left-0 top-[8px] block h-[2px] w-[22px] rounded-full bg-current transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 top-[16px] block h-[2px] w-[22px] rounded-full bg-current transition-transform duration-200 ${menuOpen ? "-translate-y-[8px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      <div className="fixed right-5 top-5 z-[70]">
        <button
          type="button"
          onClick={() => setSearchOpen(true)}
          aria-label={locale === "zh" ? "快速导航" : "Quick navigator"}
          className="grid h-12 w-12 place-items-center rounded-full border border-sky-400/30 bg-[#07111d]/88 text-sky-400 shadow-[0_10px_30px_rgba(0,0,0,0.32)] backdrop-blur-md transition hover:scale-[1.04] hover:border-sky-300/60 hover:bg-[#0a1725]"
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.4-3.4" />
          </svg>
        </button>
      </div>

      <div
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={() => setMenuOpen(false)}
      />

      <aside
        className={`fixed inset-y-0 left-0 z-[65] w-[320px] max-w-[88vw] border-r border-white/10 bg-[#1b1d23] px-6 py-7 shadow-2xl transition-transform duration-300 ease-out ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex h-full flex-col pt-10">
          <div className="text-center">
            <img
              src="/1.png"
              alt={profile.name[locale]}
              className="mx-auto h-24 w-24 rounded-full border-2 border-white/10 object-cover shadow-[0_14px_50px_rgba(0,0,0,0.35)]"
            />
            <h2 className="mt-4 text-xl font-bold tracking-tight text-white">
              {profile.name[locale]}
            </h2>
            <p className="mt-1 text-[12px] text-sky-400">Lizhen Fan</p>
            <p className="mt-5 text-[12px] leading-6 text-slate-400">
              {profile.education[locale]}
            </p>
            <p className="mt-1 text-[12px] leading-6 text-slate-500">
              {profile.title[locale]}
            </p>
          </div>

          <nav className="mt-7 grid grid-cols-3 border-y border-white/10 py-4 text-center">
            <a
              href="/#home"
              onClick={() => setMenuOpen(false)}
              className="flex flex-col items-center gap-2 text-slate-400 transition hover:text-sky-400"
            >
              <HomeIcon />
              <span className="text-[10px] uppercase tracking-[0.12em]">Home</span>
            </a>
            <a
              href="/#projects"
              onClick={() => setMenuOpen(false)}
              className="flex flex-col items-center gap-2 text-slate-400 transition hover:text-sky-400"
            >
              <FolderIcon />
              <span className="text-[10px] uppercase tracking-[0.12em]">Projects</span>
            </a>
            <a
              href="https://github.com/caicai1010662/Fanlizhen_HNU_Resume"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-slate-400 transition hover:text-sky-400"
            >
              <ResumeIcon />
              <span className="text-[10px] uppercase tracking-[0.12em]">Resume</span>
            </a>
          </nav>

          <div className="grid grid-cols-3 border-b border-white/10 py-4 text-center">
            {profile.stats.map((stat) => (
              <div key={stat.value}>
                <div className="text-base font-bold text-white">{stat.value}</div>
                <div className="mt-1 text-[9px] uppercase tracking-[0.08em] text-slate-500">
                  {stat.label[locale]}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <a
              href="https://github.com/caicai1010662"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-slate-400 transition hover:border-sky-400/40 hover:text-sky-400"
            >
              <GitHubIcon />
            </a>
            <a
              href="mailto:17685537369@163.com"
              aria-label={locale === "zh" ? "邮箱" : "Email"}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-slate-400 transition hover:border-sky-400/40 hover:text-sky-400"
            >
              <MailIcon />
            </a>
          </div>

          <div className="mt-auto flex items-center justify-center border-t border-white/10 pt-5">
            <button
              onClick={() => setLocale(locale === "zh" ? "en" : "zh")}
              className="rounded-full border border-white/10 px-4 py-2 text-[11px] text-slate-400 transition hover:border-sky-400/40 hover:text-white"
            >
              {locale === "zh" ? "EN / English" : "中 / 中文"}
            </button>
          </div>
        </div>
      </aside>

      <ProjectSearch open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
