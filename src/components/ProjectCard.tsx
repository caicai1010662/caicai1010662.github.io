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

  return (
    <article className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900">
      <Link
        href={`/projects/${project.slug}`}
        className="relative block aspect-[16/9] overflow-hidden bg-slate-950"
      >
        <img
          src={project.cover}
          alt={project.coverAlt[locale]}
          loading={index === 0 ? "eager" : "lazy"}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.015]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
        <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/35 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-white/85 backdrop-blur">
          Project {String(index + 1).padStart(2, "0")}
        </div>
        <div className="absolute right-4 top-4 rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-white/75 backdrop-blur">
          Concept Visual
        </div>
      </Link>

      <div className="p-6 md:p-7">
        <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.14em] text-gray-400">
          <span>{project.type[locale]}</span>
          <span aria-hidden>·</span>
          <span>{project.period}</span>
        </div>

        <Link href={`/projects/${project.slug}`} className="block">
          <h2 className="text-2xl font-semibold leading-tight tracking-tight transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400 md:text-3xl">
            {project.title[locale]}
          </h2>
        </Link>

        <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-300">
          {project.summary[locale]}
        </p>

        {project.metrics && (
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {project.metrics.map((metric) => (
              <div
                key={metric.value + metric.label.en}
                className="rounded-2xl bg-gray-50 p-4 dark:bg-gray-800/70"
              >
                <div className="font-mono text-sm font-semibold">{metric.value}</div>
                <div className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">
                  {metric.label[locale]}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.slice(0, 7).map((item) => (
            <span
              key={item}
              className="rounded-full border border-gray-200 px-2.5 py-1 text-xs text-gray-500 dark:border-gray-700 dark:text-gray-400"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t border-gray-100 pt-5 sm:flex-row sm:items-center sm:justify-between dark:border-gray-800">
          <div className="text-xs text-gray-500 dark:text-gray-400">
            {project.role.slice(0, 3).join(" · ")}
          </div>
          <Link
            href={`/projects/${project.slug}`}
            className="text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400"
          >
            {locale === "zh" ? "查看项目详情 →" : "View case study →"}
          </Link>
        </div>
      </div>
    </article>
  );
}
