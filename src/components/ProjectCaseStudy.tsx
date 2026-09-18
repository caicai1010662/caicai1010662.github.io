"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import ProfileSidebar from "./ProfileSidebar";
import type { Project } from "@/data/projects";

const introSections = [
  { key: "overview", zh: "项目概述", en: "Overview" },
  { key: "problem", zh: "问题与约束", en: "Problem & Constraints" },
  { key: "solution", zh: "系统方案", en: "Solution" },
] as const;

export default function ProjectCaseStudy({ project }: { project: Project }) {
  const { locale } = useLanguage();

  return (
    <div className="mx-auto grid w-full max-w-[1180px] gap-12 px-5 pb-24 pt-24 lg:grid-cols-[280px_minmax(0,760px)] lg:justify-center lg:gap-16 lg:pt-28">
      <ProfileSidebar />

      <article className="min-w-0">
        <Link
          href="/#projects"
          className="inline-flex text-sm text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-white"
        >
          ← {locale === "zh" ? "返回项目" : "Back to projects"}
        </Link>

        <header className="mt-8">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-gray-950 dark:text-gray-100 md:text-5xl">
            {project.title[locale]}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] text-gray-400">
            <span>{project.period}</span>
            <span aria-hidden>·</span>
            <span>{project.type[locale]}</span>
            <span aria-hidden>·</span>
            <span>{project.role[0]}</span>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-md bg-gray-100 px-2.5 py-1 text-xs text-gray-500 dark:bg-gray-900 dark:text-gray-400"
              >
                {item}
              </span>
            ))}
          </div>

          <p className="mt-7 text-[16px] leading-8 text-gray-600 dark:text-gray-300">
            {project.summary[locale]}
          </p>
        </header>

        <figure className="mt-8 overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-900">
          <img
            src={project.cover}
            alt={project.coverAlt[locale]}
            className="aspect-[16/9] w-full object-cover"
          />
          <figcaption className="border-t border-gray-200 px-4 py-3 text-xs leading-5 text-gray-400 dark:border-gray-800">
            {locale === "zh"
              ? "概念视觉图，用于项目展示；后续可与真实截图、结构图和实验图并列呈现。"
              : "Concept visual for presentation; real screenshots, diagrams, and experiment images can be added alongside it."}
          </figcaption>
        </figure>

        <div className="mt-12 space-y-14">
          {introSections.map((section) => (
            <section key={section.key}>
              <h2 className="text-2xl font-semibold tracking-tight text-gray-950 dark:text-gray-100">
                {section[locale]}
              </h2>
              <p className="mt-4 text-[15px] leading-8 text-gray-600 dark:text-gray-300">
                {project.caseStudy[section.key][locale]}
              </p>
            </section>
          ))}

          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-950 dark:text-gray-100">
              {locale === "zh" ? "我的职责" : "My Responsibilities"}
            </h2>
            <ul className="mt-5 space-y-3">
              {project.caseStudy.responsibilities.map((item) => (
                <li
                  key={item.en}
                  className="flex gap-3 text-[15px] leading-8 text-gray-600 dark:text-gray-300"
                >
                  <span className="mt-[13px] h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                  <span>{item[locale]}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-950 dark:text-gray-100">
              {locale === "zh" ? "关键工作" : "Key Work"}
            </h2>
            <div className="mt-6 space-y-8">
              {project.highlights.map((item) => (
                <div key={item.title.en}>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {item.title[locale]}
                  </h3>
                  <p className="mt-2 text-[15px] leading-8 text-gray-600 dark:text-gray-300">
                    {item.description[locale]}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-950 dark:text-gray-100">
              {locale === "zh" ? "阶段结果" : "Outcomes"}
            </h2>
            <ul className="mt-5 space-y-3">
              {project.caseStudy.results.map((item) => (
                <li
                  key={item.en}
                  className="flex gap-3 text-[15px] leading-8 text-gray-600 dark:text-gray-300"
                >
                  <span className="mt-[13px] h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                  <span>{item[locale]}</span>
                </li>
              ))}
            </ul>
          </section>

          {project.links?.github && (
            <section className="border-t border-gray-200 pt-8 dark:border-gray-800">
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400"
              >
                GitHub repository ↗
              </a>
            </section>
          )}
        </div>
      </article>
    </div>
  );
}
