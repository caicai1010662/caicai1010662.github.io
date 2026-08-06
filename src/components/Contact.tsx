"use client";

import { useLanguage } from "./LanguageProvider";
import { useScrollReveal, revealProps } from "@/hooks/useScrollReveal";
import { translations } from "@/lib/content";

export default function Contact() {
  const { locale } = useLanguage();
  const t = translations.contact;
  const { ref, isVisible } = useScrollReveal();

  const links = [
    { key: "email", href: "mailto:17685537369@163.com", icon: "✉️" },
    { key: "github", href: "https://github.com/caicai1010662", icon: "🐙" },
  ] as const;

  return (
    <section id="contact" className="scroll-mt-16 px-4 py-24">
      <div ref={ref} className="mx-auto max-w-3xl text-center">
        <h2 {...revealProps(isVisible, 0)} className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
          {t.title[locale]}
        </h2>
        <p {...revealProps(isVisible, 100)} className="mx-auto mb-10 max-w-xl leading-relaxed text-gray-600 dark:text-gray-400">
          {t.description[locale]}
        </p>

        <div {...revealProps(isVisible, 200)} className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          {links.map((link) => (
            <a
              key={link.key}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="inline-flex h-12 items-center gap-2 rounded-xl border border-gray-300 px-6 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-900"
            >
              <span>{link.icon}</span>
              {t[link.key][locale]}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
