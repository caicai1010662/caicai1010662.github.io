"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import type { Project } from "@/data/projects";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const { locale } = useLanguage();
  const featured = index === 0;

  if (featured) {
    return (
      <article className="group overflow-hidden rounded-2xl border border-sky-400/[0.12] bg-[#15191f]/98 shadow-[0_26px_80px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:shadow-[0_30px_90px_rgba(0,0,0,0.36)]">
        <Link href={`/projects/${project.slug}`} className="block">
          <div className="flex items-center justify-center bg-[#0a1017] px-4 py-4 md:px-6 md:py-6">
            <img
              src={project.cover}
              alt={project.coverAlt[locale]}
              loading="eager"
              className="aspect-[16/9] w-full object-contain transition-transform duration-500 group-hover:scale-[1.008]"
            />
          </div>

          <div className="grid gap-6 px-6 py-7 md:grid-cols-[1fr_auto] md:items-end md:px-8 md:py-8">
            <div className="min-w-0">
              <div className="mb-3 flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-sky-400/70">
                <span>Featured Project</span>
                <span className="h-px w-8 bg-sky-400/30" />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>

              <h3 className="max-w-4xl text-[1.65rem] font-black leading-tight tracking-[-0.025em] text-white transition-colors group-hover:text-sky-300 md:text-[2rem]">
                {project.title[locale]}
              </h3>

              <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[12px] text-slate-500">
                <span>{project.period}</span>
                <span aria-hidden>·</span>
                <span>{project.type[locale]}</span>
                <span aria-hidden>·</span>
                <span>{project.role[0]}</span>
              </div>

              <p className="mt-5 max-w-4xl text-[14px] leading-7 text-slate-400 md:text-[15px]">
                {project.summary[locale]}
              </p>

              {project.metrics && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.metrics.map((metric) => (
                    <div
                      key={metric.value + metric.label.en}
                      className="rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-3"
                    >
                      <div className="font-mono text-sm font-semibold text-sky-300">
                        {metric.value}
                      </div>
                      <div className="mt-1 text-[10px] text-slate-600">
                        {metric.label[locale]}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="shrink-0 text-left md:text-right">
              <span className="inline-flex items-center gap-2 text-[12px] font-semibold text-sky-400 transition group-hover:text-sky-300">
                {locale === "zh" ? "查看项目详情" : "View case study"}
                <span aria-hidden>→</span>
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-white/[0.07] bg-[#191d23] px-6 py-3.5 sm:flex-row sm:items-center sm:justify-between md:px-8">
            <div className="flex flex-wrap gap-2">
              {project.role.slice(0, 3).map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-sky-400/15 bg-sky-400/[0.025] px-3 py-1 text-[10px] text-sky-300/80"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 text-[10px] text-slate-500">
              {project.stack.slice(0, 6).map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/[0.08] px-3 py-1"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-[#171a20]/98 shadow-[0_20px_60px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:border-sky-400/30 hover:shadow-[0_24px_70px_rgba(0,0,0,0.3)]">
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="grid md:grid-cols-[42%_1fr]">
          <div className="flex min-h-[240px] items-center justify-center bg-[#0b1118] p-3 md:min-h-[270px] md:p-4">
            <img
              src={project.cover}
              alt={project.coverAlt[locale]}
              loading="lazy"
              className="h-full max-h-[255px] w-full object-contain transition-transform duration-500 group-hover:scale-[1.012]"
            />
          </div>

          <div className="flex min-w-0 flex-col justify-center px-6 py-7 md:px-8">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-sky-400/55">
              <span>Project {String(index + 1).padStart(2, "0")}</span>
              <span className="h-px w-7 bg-sky-400/20" />
              <span>{project.status === "active" ? "In Progress" : "Completed"}</span>
            </div>

            <h3 className="mt-3 text-[1.4rem] font-bold leading-snug tracking-[-0.02em] text-sky-400 transition-colors group-hover:text-sky-300 md:text-[1.62rem]">
              {project.title[locale]}
            </h3>

            <div className="mt-3 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[11px] text-slate-500">
              <span>{project.period}</span>
              <span aria-hidden>·</span>
              <span>{project.type[locale]}</span>
              <span aria-hidden>·</span>
              <span>{project.role[0]}</span>
            </div>

            <p className="mt-5 line-clamp-3 text-[13px] leading-7 text-slate-400 md:text-[14px]">
              {project.summary[locale]}
            </p>

            <div className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold text-sky-400/80 transition group-hover:text-sky-300">
              {locale === "zh" ? "查看详情" : "View project"}
              <span aria-hidden>→</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/[0.07] bg-[#1a1e24] px-5 py-3.5 sm:flex-row sm:items-center sm:justify-between md:px-6">
          <div className="flex flex-wrap gap-2">
            {project.role.slice(0, 2).map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 px-3 py-1 text-[10px] text-slate-400"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 text-[10px] text-slate-500">
            {project.stack.slice(0, 5).map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/[0.08] px-3 py-1"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
}
