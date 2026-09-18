"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import type { Project } from "@/data/projects";

const sections = [
  { key: "overview", zh: "项目概述", en: "Overview" },
  { key: "problem", zh: "问题与约束", en: "Problem & Constraints" },
  { key: "solution", zh: "系统方案", en: "Solution" },
] as const;

export default function ProjectCaseStudy({ project }: { project: Project }) {
  const { locale } = useLanguage();

  return (
    <article className="mx-auto max-w-6xl px-4 pb-24 pt-28">
      <Link
        href="/#projects"
        className="mb-8 inline-flex text-sm font-medium text-gray-500 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
      >
        ← {locale === "zh" ? "返回项目" : "Back to projects"}
      </Link>

      <header className="border-b border-gray-200 pb-10 dark:border-gray-800">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
          {project.type[locale]} · {project.period}
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          {project.title[locale]}
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-gray-600 dark:text-gray-300">
          {project.summary[locale]}
        </p>
      </header>

      <figure className="mt-8 overflow-hidden rounded-3xl border border-gray-200 bg-slate-950 shadow-sm dark:border-gray-800">
        <img
          src={project.cover}
          alt={project.coverAlt[locale]}
          className="aspect-[16/9] w-full object-cover"
        />
        <figcaption className="flex flex-col gap-1 border-t border-white/10 bg-slate-950 px-5 py-4 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono uppercase tracking-[0.16em] text-sky-300">
            Concept Visual
          </span>
          <span>
            {locale === "zh"
              ? "用于项目视觉展示，不代表实物照片或真实软件截图。"
              : "Illustrative project visual; not a photo of the physical prototype or an actual software screenshot."}
          </span>
        </figcaption>
      </figure>

      <div className="grid gap-12 py-10 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="space-y-12">
          {sections.map((section, index) => (
            <section key={section.key}>
              <p className="mb-3 font-mono text-xs text-gray-400">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="text-2xl font-semibold tracking-tight">
                {section[locale]}
              </h2>
              <p className="mt-4 text-[15px] leading-8 text-gray-600 dark:text-gray-300">
                {project.caseStudy[section.key][locale]}
              </p>
            </section>
          ))}

          <section>
            <p className="mb-3 font-mono text-xs text-gray-400">04</p>
            <h2 className="text-2xl font-semibold tracking-tight">
              {locale === "zh" ? "我的职责" : "My Responsibilities"}
            </h2>
            <div className="mt-5 space-y-3">
              {project.caseStudy.responsibilities.map((item, index) => (
                <div
                  key={item.en}
                  className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900"
                >
                  <span className="font-mono text-xs text-blue-600 dark:text-blue-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-7 text-gray-600 dark:text-gray-300">
                    {item[locale]}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <p className="mb-3 font-mono text-xs text-gray-400">05</p>
            <h2 className="text-2xl font-semibold tracking-tight">
              {locale === "zh" ? "关键工作" : "Key Work"}
            </h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {project.highlights.map((item) => (
                <div
                  key={item.title.en}
                  className="rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-800 dark:bg-gray-900"
                >
                  <h3 className="font-semibold">{item.title[locale]}</h3>
                  <p className="mt-2 text-sm leading-7 text-gray-600 dark:text-gray-400">
                    {item.description[locale]}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <p className="mb-3 font-mono text-xs text-gray-400">06</p>
            <h2 className="text-2xl font-semibold tracking-tight">
              {locale === "zh" ? "阶段结果" : "Outcomes"}
            </h2>
            <ul className="mt-5 space-y-3">
              {project.caseStudy.results.map((item) => (
                <li
                  key={item.en}
                  className="flex gap-3 text-sm leading-7 text-gray-600 dark:text-gray-300"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                  <span>{item[locale]}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-800 dark:bg-gray-900">
            <h2 className="text-sm font-semibold">
              {locale === "zh" ? "项目速览" : "Project Facts"}
            </h2>
            <dl className="mt-5 space-y-5 text-sm">
              <div>
                <dt className="text-xs uppercase tracking-wider text-gray-400">Role</dt>
                <dd className="mt-2 leading-6 text-gray-700 dark:text-gray-300">
                  {project.role.join(" / ")}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-gray-400">Stack</dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-gray-200 bg-white px-2 py-1 text-xs text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
              {project.links?.github && (
                <div>
                  <dt className="text-xs uppercase tracking-wider text-gray-400">Link</dt>
                  <dd className="mt-2">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400"
                    >
                      GitHub ↗
                    </a>
                  </dd>
                </div>
              )}
            </dl>
          </div>
        </aside>
      </div>
    </article>
  );
}
