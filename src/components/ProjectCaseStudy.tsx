"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import type { Project } from "@/data/projects";

function statusLabel(status: Project["status"], locale: "zh" | "en") {
  if (status === "active") return locale === "zh" ? "进行中" : "In Progress";
  return locale === "zh" ? "已完成" : "Completed";
}

function BulletList({
  items,
  locale,
}: {
  items: Project["caseStudy"]["contributions"];
  locale: "zh" | "en";
}) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((item) => (
        <li key={item.en} className="type-body flex gap-3 text-slate-400">
          <span className="mt-[13px] h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
          <span>{item[locale]}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ProjectCaseStudy({ project }: { project: Project }) {
  const { locale } = useLanguage();
  const facts = project.facts ?? [];
  const evidence = project.evidence ?? [];

  return (
    <article className="min-h-screen bg-[#07101a] px-5 pb-24 pt-24 text-slate-200">
      <div className="mx-auto max-w-[1080px]">
        <Link
          href="/#projects"
          className="type-body inline-flex text-slate-500 transition-colors hover:text-sky-400"
        >
          ← {locale === "zh" ? "返回项目" : "Back to projects"}
        </Link>

        <header className="mx-auto mt-8 max-w-[860px] border-b border-white/10 pb-8">
          <p className="type-body uppercase tracking-[0.1em] text-sky-400/70">
            Case Study
          </p>
          <h1 className="type-display mt-3 font-black text-white">
            {project.title[locale]}
          </h1>

          <div className="type-body mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-slate-500">
            <span>{project.context[locale]}</span>
            <span aria-hidden>·</span>
            <span>{statusLabel(project.status, locale)}</span>
            <span aria-hidden>·</span>
            <span>{project.period}</span>
            <span aria-hidden>·</span>
            <span>{project.category[locale]}</span>
          </div>

          <p className="type-body mt-6 text-slate-300">
            {project.value[locale]}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.role.map((item) => (
              <span
                key={item.en}
                className="type-body rounded-full border border-sky-400/15 bg-sky-400/[0.025] px-3 py-1 text-sky-300/80"
              >
                {item[locale]}
              </span>
            ))}
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="type-body rounded-full border border-white/10 px-2.5 py-1 text-slate-500"
              >
                {item}
              </span>
            ))}
          </div>
        </header>

        <figure className="mt-8 overflow-hidden rounded-xl border border-white/[0.08] bg-black/20">
          <img
            src={project.cover}
            alt={project.coverAlt[locale]}
            className="aspect-[16/9] w-full bg-[#0c1118] object-contain"
          />
          <figcaption className="type-body border-t border-white/[0.08] px-4 py-3 text-slate-500">
            {locale === "zh"
              ? "概念视觉图，用于项目展示；真实截图、结构图与实验图将在后续验证和整理中补充。"
              : "Concept visual for presentation; real screenshots, diagrams, and experiment images will be added as validation material is organized."}
          </figcaption>
        </figure>

        <div className="mx-auto mt-14 max-w-[860px] space-y-14">
          <section>
            <h2 className="type-heading font-bold text-white">
              {locale === "zh" ? "项目概述" : "Overview"}
            </h2>
            <p className="type-body mt-4 text-slate-400">
              {project.caseStudy.overview[locale]}
            </p>
          </section>

          <section>
            <h2 className="type-heading font-bold text-white">
              {locale === "zh" ? "问题与挑战" : "Challenge"}
            </h2>
            <p className="type-body mt-4 text-slate-400">
              {project.caseStudy.challenge[locale]}
            </p>
          </section>

          <section>
            <h2 className="type-heading font-bold text-white">
              {locale === "zh" ? "系统架构" : "Architecture"}
            </h2>
            <p className="type-body mt-4 text-slate-400">
              {project.caseStudy.architecture[locale]}
            </p>

            {facts.length > 0 && (
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {facts.map((item) => (
                  <div
                    key={item.value + item.label.en}
                    className="rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-4"
                  >
                    <div className="type-body font-mono font-semibold text-sky-300">
                      {item.value}
                    </div>
                    <div className="type-body mt-1.5 text-slate-600">
                      {item.label[locale]}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          <section>
            <h2 className="type-heading font-bold text-white">
              {locale === "zh" ? "我的贡献" : "My Contributions"}
            </h2>
            <BulletList items={project.caseStudy.contributions} locale={locale} />
          </section>

          <section>
            <h2 className="type-heading font-bold text-white">
              {locale === "zh" ? "工程细节" : "Engineering Details"}
            </h2>
            <div className="mt-6 space-y-8">
              {project.engineeringDetails.map((item) => (
                <div key={item.title.en}>
                  <h3 className="type-body font-semibold text-sky-300">
                    {item.title[locale]}
                  </h3>
                  <p className="type-body mt-2 text-slate-400">
                    {item.description[locale]}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="type-heading font-bold text-white">
              {locale === "zh" ? "验证与证据" : "Validation & Evidence"}
            </h2>

            {evidence.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-3">
                {evidence.map((item) => (
                  <div
                    key={item.value + item.label.en}
                    className="rounded-xl border border-sky-400/10 bg-sky-400/[0.025] px-4 py-3"
                  >
                    <div className="font-mono text-sm font-semibold text-sky-300">
                      {item.value}
                    </div>
                    <div className="type-body mt-1 text-slate-500">
                      {item.label[locale]}
                    </div>
                    {item.note && (
                      <div className="type-body mt-1 text-slate-600">
                        {item.note[locale]}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            <BulletList items={project.caseStudy.validation} locale={locale} />
          </section>

          <section>
            <h2 className="type-heading font-bold text-white">
              {locale === "zh" ? "当前状态" : "Current Status"}
            </h2>
            <BulletList items={project.caseStudy.currentStatus} locale={locale} />
          </section>

          {project.links?.github && (
            <section className="border-t border-white/10 pt-8">
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="type-body font-semibold text-sky-400 hover:text-sky-300"
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
