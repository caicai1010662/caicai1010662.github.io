"use client";

import { useLanguage } from "./LanguageProvider";
import { useScrollReveal, revealProps } from "@/hooks/useScrollReveal";
import { translations } from "@/lib/content";

export default function Projects() {
  const { locale } = useLanguage();
  const t = translations.projects;
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="projects"
      className="scroll-mt-16 border-t border-gray-100 bg-gray-50 px-4 py-24 dark:border-gray-800 dark:bg-gray-950/50"
    >
      <div ref={ref} className="mx-auto max-w-6xl">
        <h2 {...revealProps(isVisible, 0)} className="mb-4 text-center text-3xl font-bold tracking-tight md:text-4xl">
          {t.title[locale]}
        </h2>
        <p {...revealProps(isVisible, 100)} className="mx-auto mb-12 max-w-2xl text-center leading-relaxed text-gray-600 dark:text-gray-400">
          {t.subtitle[locale]}
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {t.items.map((project, i) => (
            <article
              key={project.title.en}
              {...revealProps(isVisible, 150 + i * 100)}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all hover:-translate-y-1 hover:border-violet-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-violet-700"
            >
              {/* 渐变占位预览区（替换真实截图） */}
              <div
                aria-hidden
                className={`h-32 bg-gradient-to-br ${project.gradient} opacity-80 transition-opacity group-hover:opacity-100`}
              />

              <div className="flex flex-1 flex-col p-6">
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
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
