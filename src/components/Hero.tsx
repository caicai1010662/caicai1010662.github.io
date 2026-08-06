"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";
import { useScrollReveal, revealProps } from "@/hooks/useScrollReveal";
import { translations } from "@/lib/content";

export default function Hero() {
  const { locale } = useLanguage();
  const t = translations.hero;
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-16"
    >
      {/* 背景装饰：柔和的光晕 */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-500/20 to-violet-500/20 blur-3xl dark:from-blue-500/15 dark:to-violet-500/15" />
        <div className="absolute bottom-0 left-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-400/10" />
        <div className="absolute right-10 top-1/3 h-72 w-72 rounded-full bg-fuchsia-400/10 blur-3xl dark:bg-fuchsia-400/10" />
      </div>

      <div ref={ref} className="max-w-3xl text-center">
        <div {...revealProps(isVisible, 0)} className="mb-8 flex justify-center">
          <Image
            src="/1.png"
            alt="范李振的肖像"
            width={318}
            height={318}
            priority
            className="h-28 w-28 rounded-full border-2 border-white object-cover shadow-lg dark:border-gray-800"
          />
        </div>
        <p {...revealProps(isVisible, 100)} className="mb-4 text-sm font-medium uppercase tracking-widest text-gray-500 dark:text-gray-400">
          {t.tagline[locale]}
        </p>
        <h1 {...revealProps(isVisible, 200)} className="mb-3 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
          {t.greeting[locale]}{" "}
          <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-500 bg-clip-text text-transparent dark:from-blue-400 dark:via-violet-400 dark:to-fuchsia-400">
            {t.name[locale]}
          </span>
        </h1>
        <p {...revealProps(isVisible, 300)} className="mb-6 text-lg font-medium text-violet-600 dark:text-violet-400">
          {t.subTagline[locale]}
        </p>
        <p {...revealProps(isVisible, 400)} className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
          {t.description[locale]}
        </p>
        <div {...revealProps(isVisible, 500)} className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#projects"
            className="inline-flex h-12 items-center rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-8 text-sm font-medium text-white shadow-lg shadow-violet-500/25 transition-opacity hover:opacity-90 dark:from-blue-500 dark:to-violet-500"
          >
            {t.ctaPrimary[locale]}
          </a>
          <a
            href="#contact"
            className="inline-flex h-12 items-center rounded-xl border border-gray-300 px-8 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-900"
          >
            {t.ctaSecondary[locale]}
          </a>
        </div>
      </div>
    </section>
  );
}
