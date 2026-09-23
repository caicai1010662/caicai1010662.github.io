"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import type { Project } from "@/data/projects";

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
        <li
          key={item.en}
          className="type-body flex gap-3"
          style={{ color: "var(--text-secondary)" }}
        >
          <span
            className="mt-[13px] h-1.5 w-1.5 shrink-0 rounded-full"
            style={{ backgroundColor: "var(--accent)" }}
          />
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
    <article
      className="min-h-screen px-5 pb-24 pt-24"
      style={{
        backgroundColor: "var(--reading-surface)",
        color: "var(--text)",
      }}
    >
      <div className="site-container">
        <Link
          href="/#projects"
          className="type-body pressable inline-flex transition-opacity hover:opacity-70"
          style={{ color: "var(--text-muted)" }}
        >
          ← {locale === "zh" ? "返回项目" : "Back to projects"}
        </Link>

        <header className="reading-container mt-8 pb-6">
          <h1
            className="type-display font-black"
            style={{ color: "var(--text)" }}
          >
            {project.title[locale]}
          </h1>

          <div
            className="type-body mt-5 flex flex-wrap items-center gap-x-3 gap-y-2"
            style={{ color: "var(--text-muted)" }}
          >
            <span>{project.period}</span>
            <span aria-hidden>·</span>
            <span>{project.context[locale]}</span>
          </div>

          <p
            className="type-body mt-6 max-w-3xl"
            style={{ color: "var(--text-secondary)" }}
          >
            {project.value[locale]}
          </p>
        </header>

        <figure
          className="mt-8 overflow-hidden border"
          style={{
            borderColor: "var(--border)",
            backgroundColor: "var(--surface)",
            borderRadius: "var(--radius-md)",
            boxShadow: "var(--shadow-soft)",
          }}
        >
          <img
            src={project.cover}
            alt={project.coverAlt[locale]}
            className="aspect-[16/9] w-full object-contain"
            style={{ backgroundColor: "var(--surface-image)" }}
          />
          <figcaption
            className="type-body border-t px-4 py-3"
            style={{
              borderColor: "var(--border)",
              color: "var(--text-muted)",
            }}
          >
            {locale === "zh"
              ? "概念视觉图，用于项目展示；真实截图、结构图与实验图将在后续验证和整理中补充。"
              : "Concept visual for presentation; real screenshots, diagrams, and experiment images will be added as validation material is organized."}
          </figcaption>
        </figure>

        <div className="reading-container mt-14 space-y-14">
          <section>
            <h2 className="type-heading font-bold" style={{ color: "var(--text)" }}>
              {locale === "zh" ? "项目概述" : "Overview"}
            </h2>
            <p className="type-body mt-4" style={{ color: "var(--text-secondary)" }}>
              {project.caseStudy.overview[locale]}
            </p>
          </section>

          <section>
            <h2 className="type-heading font-bold" style={{ color: "var(--text)" }}>
              {locale === "zh" ? "问题与挑战" : "Challenge"}
            </h2>
            <p className="type-body mt-4" style={{ color: "var(--text-secondary)" }}>
              {project.caseStudy.challenge[locale]}
            </p>
          </section>

          <section>
            <h2 className="type-heading font-bold" style={{ color: "var(--text)" }}>
              {locale === "zh" ? "系统架构" : "Architecture"}
            </h2>
            <p className="type-body mt-4" style={{ color: "var(--text-secondary)" }}>
              {project.caseStudy.architecture[locale]}
            </p>

            {facts.length > 0 && (
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {facts.map((item) => (
                  <div
                    key={item.value + item.label.en}
                    className="border px-4 py-4"
                    style={{
                      borderColor: "var(--border)",
                      backgroundColor: "var(--surface)",
                      borderRadius: "var(--radius-sm)",
                    }}
                  >
                    <div
                      className="type-body font-mono font-semibold"
                      style={{ color: "var(--accent)" }}
                    >
                      {item.value}
                    </div>
                    <div
                      className="type-body mt-1.5"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {item.label[locale]}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          <section>
            <h2 className="type-heading font-bold" style={{ color: "var(--text)" }}>
              {locale === "zh" ? "我的贡献" : "My Contributions"}
            </h2>
            <BulletList items={project.caseStudy.contributions} locale={locale} />
          </section>

          <section>
            <h2 className="type-heading font-bold" style={{ color: "var(--text)" }}>
              {locale === "zh" ? "工程细节" : "Engineering Details"}
            </h2>
            <div className="mt-6 space-y-8">
              {project.engineeringDetails.map((item) => (
                <div key={item.title.en}>
                  <h3
                    className="type-body font-semibold"
                    style={{ color: "var(--accent)" }}
                  >
                    {item.title[locale]}
                  </h3>
                  <p
                    className="type-body mt-2"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {item.description[locale]}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="type-heading font-bold" style={{ color: "var(--text)" }}>
              {locale === "zh" ? "验证与证据" : "Validation & Evidence"}
            </h2>

            {evidence.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-3">
                {evidence.map((item) => (
                  <div
                    key={item.value + item.label.en}
                    className="border px-4 py-3"
                    style={{
                      borderColor:
                        "color-mix(in srgb, var(--accent) 15%, transparent)",
                      backgroundColor:
                        "color-mix(in srgb, var(--accent) 4%, var(--surface))",
                      borderRadius: "var(--radius-sm)",
                    }}
                  >
                    <div
                      className="type-body font-mono font-semibold"
                      style={{ color: "var(--accent)" }}
                    >
                      {item.value}
                    </div>
                    <div
                      className="type-body mt-1"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {item.label[locale]}
                    </div>
                    {item.note && (
                      <div
                        className="type-body mt-1"
                        style={{ color: "var(--text-faint)" }}
                      >
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
            <h2 className="type-heading font-bold" style={{ color: "var(--text)" }}>
              {locale === "zh" ? "当前状态" : "Current Status"}
            </h2>
            <BulletList items={project.caseStudy.currentStatus} locale={locale} />
          </section>

          {project.links?.github && (
            <section
              className="border-t pt-8"
              style={{ borderColor: "var(--border-strong)" }}
            >
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="type-body font-semibold transition-opacity hover:opacity-70"
                style={{ color: "var(--accent)" }}
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
