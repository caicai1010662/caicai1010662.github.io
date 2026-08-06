"use client";

import { useLanguage } from "./LanguageProvider";
import { translations } from "@/lib/content";

export default function Projects() {
  const { locale } = useLanguage();
  const t = translations.projects;

  return (
    <section
      id="projects"
      className="scroll-mt-16 border-t border-gray-100 bg-gray-50 px-4 py-24 dark:border-gray-800 dark:bg-gray-950/50"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight md:text-4xl">
          {t.title[locale]}
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center leading-relaxed text-gray-600 dark:text-gray-400">
          {t.subtitle[locale]}
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {t.items.map((project) => (
            <a
              key={project.title.en}
              href="#contact"
              className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-violet-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-violet-700"
            >
              <h3 className="mb-2 text-xl font-semibold transition-colors group-hover:text-violet-600 dark:group-hover:text-violet-400">
                {project.title[locale]}
              </h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {project.description[locale]}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-violet-50 px-2.5 py-0.5 text-xs font-medium text-violet-700 dark:bg-violet-500/10 dark:text-violet-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
