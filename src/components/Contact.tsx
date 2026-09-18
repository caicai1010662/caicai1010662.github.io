"use client";

import { useLanguage } from "./LanguageProvider";
import { translations } from "@/lib/content";

export default function Contact() {
  const { locale } = useLanguage();
  const t = translations.contact;

  return (
    <section id="contact" className="scroll-mt-24 border-t border-gray-200 py-20 dark:border-gray-800">
      <p className="mb-2 font-mono text-xs uppercase tracking-[0.22em] text-blue-600 dark:text-blue-400">
        {t.eyebrow[locale]}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
        {t.title[locale]}
      </h2>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400">
        {t.description[locale]}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="mailto:17685537369@163.com"
          className="rounded-xl bg-gray-950 px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-85 dark:bg-white dark:text-gray-950"
        >
          {t.email[locale]}
        </a>
        <a
          href="https://github.com/caicai1010662"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-900"
        >
          {t.github[locale]} ↗
        </a>
      </div>
    </section>
  );
}
