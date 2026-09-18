"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import type { Project } from "@/data/projects";

const introSections = [
  { key: "overview", zh: "项目概述", en: "Overview" },
  { key: "problem", zh: "问题与约束", en: "Problem & Constraints" },
  { key: "solution", zh: "系统方案", en: "Solution" },
] as const;

export default function ProjectCaseStudy({ project }: { project: Project }) {
  const { locale } = useLanguage();

  return (
    <article className="min-h-screen bg-[#07101a] px-5 pb-24 pt-24 text-slate-200">
      <div className="mx-auto max-w-[860px]">
        <Link
          href="/#projects"
          className="inline-flex text-sm text-slate-500 transition-colors hover:text-sky-400"
        >
          ← {locale === "zh" ? "返回项目" : "Back to projects"}
        </Link>

        <header className="mt-8 border-b border-white/10 pb-8">
          <p className="text-[11px] uppercase tracking-[0.2em] text-sky-400/70">
            Case Study
          </p>
          <h1 className="mt-3 text-[clamp(2.2rem,5vw,4.4rem)] font-black leading-[1.08] tracking-[-0.04em] text-white">
            {project.title[locale]}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-slate-500">
            <span>{project.period}</span>
            <span aria-hidden>·</span>
            <span>{project.type[locale]}</span>
            <span aria-hidden>·</span>
            <span>{project.role[0]}</span>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span key={item} className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-slate-500">
                {item}
              </span>
            ))}
          </div>
        </header>

        <figure className="mt-8 overflow-hidden rounded-xl border border-white/[0.08] bg-black/20">
          <img src={project.cover} alt={project.coverAlt[locale]} className="aspect-[16/9] w-full bg-[#0c1118] object-contain" />
          <figcaption className="border-t border-white/[0.08] px-4 py-3 text-[11px] leading-5 text-slate-500">
            {locale === "zh"
              ? "概念视觉图，用于项目展示；后续将与真实截图、结构图和实验图共同呈现。"
              : "Concept visual for presentation; real screenshots, diagrams, and experiment images will be added alongside it."}
          </figcaption>
        </figure>

        <p className="mt-8 text-[15px] leading-8 text-slate-300">{project.summary[locale]}</p>

        <div className="mt-14 space-y-14">
          {introSections.map((section) => (
            <section key={section.key}>
              <h2 className="text-2xl font-bold tracking-tight text-white">{section[locale]}</h2>
              <p className="mt-4 text-[15px] leading-8 text-slate-400">
                {project.caseStudy[section.key][locale]}
              </p>
            </section>
          ))}

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-white">
              {locale === "zh" ? "我的职责" : "My Responsibilities"}
            </h2>
            <ul className="mt-5 space-y-3">
              {project.caseStudy.responsibilities.map((item) => (
                <li key={item.en} className="flex gap-3 text-[15px] leading-8 text-slate-400">
                  <span className="mt-[13px] h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                  <span>{item[locale]}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-white">
              {locale === "zh" ? "关键工作" : "Key Work"}
            </h2>
            <div className="mt-6 space-y-8">
              {project.highlights.map((item) => (
                <div key={item.title.en}>
                  <h3 className="text-lg font-semibold text-sky-300">{item.title[locale]}</h3>
                  <p className="mt-2 text-[15px] leading-8 text-slate-400">{item.description[locale]}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold tracking-tight text-white">
              {locale === "zh" ? "阶段结果" : "Outcomes"}
            </h2>
            <ul className="mt-5 space-y-3">
              {project.caseStudy.results.map((item) => (
                <li key={item.en} className="flex gap-3 text-[15px] leading-8 text-slate-400">
                  <span className="mt-[13px] h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                  <span>{item[locale]}</span>
                </li>
              ))}
            </ul>
          </section>

          {project.links?.github && (
            <section className="border-t border-white/10 pt-8">
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-sky-400 hover:text-sky-300"
              >
                GitHub repository ↗
              </a>
            </section>
          )}
        </div>
      </div>
    </article>
  );
}
