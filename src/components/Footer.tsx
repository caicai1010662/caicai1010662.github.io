"use client";

import { useLanguage } from "./LanguageProvider";
import { translations } from "@/lib/content";

const footerLinks = [
  { href: "#home", key: "home" },
  { href: "#about", key: "about" },
  { href: "#projects", key: "projects" },
  { href: "#contact", key: "contact" },
] as const;

export default function Footer() {
  const { locale } = useLanguage();
  const t = translations;

  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:flex-row">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} {t.hero.name[locale]}.{" "}
          {t.footer.copyright[locale]}
        </p>
        <div className="flex gap-6">
          {footerLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              {t.nav[l.key][locale]}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
