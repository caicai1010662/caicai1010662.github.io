"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageProvider";
import { useTheme } from "./ThemeProvider";
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
    <svg
      viewBox="0 0 24 24"
      className="h-7 w-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.85"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 3.5h7l4 4v13H7z" />
      <path d="M14 3.5v4h4" />
      <path d="M10 11h5M10 14h5M10 17h4" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
      <path d="M12 .8a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2.23c-3.23.7-3.91-1.37-3.91-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.1-.75.41-1.27.74-1.56-2.58-.29-5.29-1.29-5.29-5.73 0-1.27.45-2.3 1.2-3.11-.12-.3-.52-1.48.11-3.08 0 0 .98-.31 3.16 1.19a10.97 10.97 0 0 1 5.76 0c2.18-1.5 3.16-1.19 3.16-1.19.63 1.6.23 2.78.11 3.08.75.81 1.2 1.84 1.2 3.11 0 4.45-2.72 5.43-5.31 5.72.42.36.79 1.07.79 2.16v3.2c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .8Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-7 w-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="miter"
    >
      <rect x="3.5" y="5.5" width="17" height="13" rx="0.6" />
      <path d="m4.5 7 7.5 6 7.5-6" />
    </svg>
  );
}

function BilibiliIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-7 w-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8.2 4.3 2.2 2.4M15.8 4.3l-2.2 2.4" />
      <rect x="4.2" y="7" width="15.6" height="11.8" rx="3.1" />
      <path d="M8.8 11.4v2.1M15.2 11.4v2.1" />
      <path d="M9.1 16.1h5.8" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M20.2 15.2A8.5 8.5 0 0 1 8.8 3.8 8.5 8.5 0 1 0 20.2 15.2Z" />
    </svg>
  );
}

function LanguageIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7">
      <circle cx="12" cy="12" r="9" />
      <path d="M3.5 12h17M12 3c2.2 2.4 3.3 5.4 3.3 9S14.2 18.6 12 21M12 3C9.8 5.4 8.7 8.4 8.7 12s1.1 6.6 3.3 9" />
    </svg>
  );
}

export default function Navbar() {
  const { locale, setLocale } = useLanguage();
  const { resolvedTheme, setPreference } = useTheme();
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

  const floatingButtonStyle = {
    borderColor: "color-mix(in srgb, var(--accent) 30%, transparent)",
    backgroundColor:
      "color-mix(in srgb, var(--surface-soft) 88%, transparent)",
    color: "var(--accent)",
    boxShadow: "0 10px 30px var(--shadow)",
  };

  return (
    <>
      <div className="fixed left-5 top-5 z-[70]">
        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="pressable grid h-12 w-12 place-items-center rounded-full border backdrop-blur-md transition hover:scale-[1.04]"
          style={floatingButtonStyle}
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
          className="pressable grid h-12 w-12 place-items-center rounded-full border backdrop-blur-md transition hover:scale-[1.04]"
          style={floatingButtonStyle}
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.4-3.4" />
          </svg>
        </button>
      </div>

      <div
        className={`fixed inset-0 z-[60] backdrop-blur-sm transition-opacity duration-300 ${menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
        style={{ backgroundColor: "var(--overlay)" }}
        onClick={() => setMenuOpen(false)}
      />

      <aside
        className={`fixed inset-y-0 left-0 z-[65] w-[360px] max-w-[92vw] border-r px-7 py-7 shadow-2xl transition-transform duration-300 ease-out ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
        style={{
          borderColor: "var(--border-strong)",
          backgroundColor: "var(--surface-strong)",
          color: "var(--text)",
        }}
      >
        <div className="flex h-full flex-col pt-7">
          <div className="text-center">
            <img
              src="/avatar.png"
              alt={profile.name[locale]}
              className="mx-auto h-[88px] w-[88px] rounded-full border-2 object-cover"
              style={{
                borderColor: "var(--border-strong)",
                boxShadow: "0 16px 42px var(--shadow)",
              }}
            />

            <h2
              className="mt-4 text-[1.7rem] font-bold tracking-[-0.035em]"
              style={{ color: "var(--text)" }}
            >
              {profile.name[locale]}
            </h2>

            <p
              className="mt-1 text-[0.95rem] font-medium tracking-[0.03em]"
              style={{ color: "var(--accent)" }}
            >
              Lizhen Lab
            </p>

            <p
              className="type-body mx-auto mt-5 max-w-[270px]"
              style={{ color: "var(--text-secondary)" }}
            >
              {profile.title[locale]}
            </p>

            <p
              className="type-body mx-auto mt-2 max-w-[270px]"
              style={{ color: "var(--text-muted)" }}
            >
              {locale === "zh"
                ? "把想法做成真正可以运行的系统。"
                : "Turning ideas into systems that actually work."}
            </p>
          </div>

          <nav className="mt-8 grid grid-cols-2">
            <Link
              href="/#home"
              onClick={() => setMenuOpen(false)}
              className="pressable flex flex-col items-center gap-2 py-3 transition hover:-translate-y-0.5"
              style={{ color: "var(--text-secondary)" }}
            >
              <HomeIcon />
              <span className="type-body font-medium tracking-[0.04em]">
                Home
              </span>
            </Link>

            <Link
              href="/#projects"
              onClick={() => setMenuOpen(false)}
              className="pressable flex flex-col items-center gap-2 border-l py-3 transition hover:-translate-y-0.5"
              style={{
                borderColor: "var(--border)",
                color: "var(--text-secondary)",
              }}
            >
              <FolderIcon />
              <span className="type-body font-medium tracking-[0.04em]">
                Projects
              </span>
            </Link>
          </nav>

          <div
            className="mt-7 h-px w-full"
            style={{ backgroundColor: "var(--border)" }}
          />

          <div className="mt-6 flex items-center justify-center gap-8">
            {[{
              href: profile.links.github,
              label: "GitHub",
              icon: <GitHubIcon />,
              external: true,
              color: "#7356a5",
            }, {
              href: profile.links.resume,
              label: locale === "zh" ? "简历" : "Resume",
              icon: <ResumeIcon />,
              external: true,
              color: "#7f8fb3",
            }, {
              href: profile.links.bilibili,
              label: "Bilibili",
              icon: <BilibiliIcon />,
              external: true,
              color: "#ff7aa8",
            }, {
              href: profile.links.email,
              label: locale === "zh" ? "邮箱" : "Email",
              icon: <MailIcon />,
              external: false,
              color: "#00aeef",
            }].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                aria-label={item.label}
                title={item.label}
                className="group pressable grid h-9 w-9 place-items-center transition duration-200 hover:-translate-y-0.5 hover:brightness-110"
                style={{ color: item.color }}
              >
                <span className="grid place-items-center transition-transform duration-200 group-hover:scale-110">
                  {item.icon}
                </span>
              </a>
            ))}
          </div>

          <div
            className="mt-7 h-px w-full"
            style={{ backgroundColor: "var(--border)" }}
          />

          <div className="mt-6 flex items-center justify-center gap-8">
            <button
              type="button"
              onClick={() =>
                setPreference(resolvedTheme === "light" ? "dark" : "light")
              }
              aria-label={
                resolvedTheme === "light"
                  ? locale === "zh"
                    ? "切换至暗色模式"
                    : "Switch to dark mode"
                  : locale === "zh"
                    ? "切换至亮色模式"
                    : "Switch to light mode"
              }
              title={
                resolvedTheme === "light"
                  ? locale === "zh"
                    ? "亮色模式"
                    : "Light mode"
                  : locale === "zh"
                    ? "暗色模式"
                    : "Dark mode"
              }
              className="pressable grid h-9 w-9 place-items-center transition hover:-translate-y-0.5"
              style={{
                color:
                  resolvedTheme === "light"
                    ? "#f5b82e"
                    : "var(--text-secondary)",
              }}
            >
              {resolvedTheme === "light" ? <SunIcon /> : <MoonIcon />}
            </button>

            <button
              type="button"
              onClick={() => setLocale(locale === "zh" ? "en" : "zh")}
              aria-label={
                locale === "zh" ? "切换至英文" : "Switch to Chinese"
              }
              title={locale === "zh" ? "中文" : "English"}
              className="pressable relative grid h-9 w-9 place-items-center transition hover:-translate-y-0.5"
              style={{ color: "var(--text-secondary)" }}
            >
              <LanguageIcon />
              <span
                className="absolute -bottom-1.5 -right-2 min-w-5 rounded-full px-1 text-[9px] font-bold leading-[18px]"
                style={{
                  backgroundColor: "var(--accent)",
                  color: "#ffffff",
                }}
              >
                {locale === "zh" ? "中" : "EN"}
              </span>
            </button>
          </div>
        </div>
      </aside>

      <ProjectSearch open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
