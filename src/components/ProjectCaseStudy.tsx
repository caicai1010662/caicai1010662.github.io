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
    <div className="mx-auto grid w-full max-w-[1120px] gap-10 px-5 pb-24 pt-24 lg:grid-cols-[238px_minmax(0,750px)] lg:justify-center lg:gap-[74px] lg:pt-[104px]">
      <ProfileSidebar />

      <article className="min-w-0">
        <Link
          href="/#projects"
          className="inline-flex text-[13px] text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-white"
        >
          ← {locale === "zh" ? "返回项目" : "Back to projects"}
        </Link>

        <header className="mt-7 border-b border-gray-200 pb-7 dark:border-gray-800">
          <h1 className="text-[2.15rem] font-semibold leading-[1.25] tracking-tight text-gray-950 dark:text-gray-100 md:text-[2.65rem]">
            {project.title[locale]}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-[12px] text-gray-400">
            <span>{project.period}</span>
            <span aria-hidden>·</span>
            <span>{project.type[locale]}</span>
            <span aria-hidden>·</span>
            <span>{project.role[0]}</span>
          </div>

          <div className="mt-3.5 flex flex-wrap gap-x-3 gap-y-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="text-[11px] text-gray-400"
              >
                #{item}
              </span>
            ))}
          </div>
        </header>

        <figure className="mt-7 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-900">
          <img
            src={project.cover}
            alt={project.coverAlt[locale]}
            className="aspect-[16/9] w-full object-cover"
          />
          <figcaption className="border-t border-gray-200 px-4 py-3 text-[11px] leading-5 text-gray-400 dark:border-gray-800">
            {locale === "zh"
              ? "概念视觉图，用于项目展示；后续将与真实截图、结构图和实验图共同呈现。"
              : "Concept visual for presentation; real screenshots, diagrams, and experiment images will be added alongside it."}
          </figcaption>
        </figure>

        <p className="mt-8 text-[15px] leading-8 text-gray-600 dark:text-gray-300">
          {project.summary[locale]}
        </p>

        <div className="mt-12 space-y-12">
          {introSections.map((section) => (
            <section key={section.key}>
              <h2 className="text-[1.45rem] font-semibold tracking-tight text-gray-950 dark:text-gray-100">
                {section[locale]}
              </h2>
              <p className="mt-4 text-[15px] leading-8 text-gray-600 dark:text-gray-300">
                {project.caseStudy[section.key][locale]}
              </p>
            </section>
          ))}

          <section>
            <h2 className="text-[1.45rem] font-semibold tracking-tight text-gray-950 dark:text-gray-100">
              {locale === "zh" ? "我的职责" : "My Responsibilities"}
            </h2>
            <ul className="mt-4 space-y-2.5">
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
            <h2 className="text-[1.45rem] font-semibold tracking-tight text-gray-950 dark:text-gray-100">
              {locale === "zh" ? "关键工作" : "Key Work"}
            </h2>
            <div className="mt-5 space-y-7">
              {project.highlights.map((item) => (
                <div key={item.title.en}>
                  <h3 className="text-[1.05rem] font-semibold text-gray-900 dark:text-gray-100">
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
            <h2 className="text-[1.45rem] font-semibold tracking-tight text-gray-950 dark:text-gray-100">
              {locale === "zh" ? "阶段结果" : "Outcomes"}
            </h2>
            <ul className="mt-4 space-y-2.5">
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
            <section className="border-t border-gray-200 pt-7 dark:border-gray-800">
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] font-medium text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400"
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
