"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import type { Project } from "@/data/projects";

const toneMap = {
  blue: "from-blue-600 via-blue-500 to-cyan-400",
  cyan: "from-cyan-600 via-sky-500 to-blue-500",
  violet: "from-violet-600 via-purple-500 to-fuchsia-500",
  slate: "from-slate-700 via-slate-600 to-gray-500",
} as const;

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
      <Link href={`/projects/${project.slug}`} className="block">
        <div className={`relative min-h-52 overflow-hidden bg-gradient-to-br ${toneMap[project.tone]} p-7 text-white`}>
          <div
            aria-hidden
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.18) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="relative flex h-full min-h-38 flex-col justify-between">
            <div className="flex items-center justify-between text-xs font-medium uppercase tracking-[0.18em] text-white/75">
              <span>Project {String(index + 1).padStart(2, "0")}</span>
              <span>{project.period}</span>
            </div>
            <div className="mt-16">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-white/75">
                {project.type[locale]}
              </p>
              <h2 className="max-w-2xl text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
                {project.title[locale]}
              </h2>
            </div>
          </div>
        </div>
      </Link>

      <div className="p-6 md:p-7">
        <p className="text-sm leading-7 text-gray-600 dark:text-gray-300">
          {project.summary[locale]}
        </p>

        {project.metrics && (
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {project.metrics.map((metric) => (
              <div key={metric.value + metric.label.en} className="rounded-2xl bg-gray-50 p-4 dark:bg-gray-800/70">
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

        <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5 dark:border-gray-800">
          <div className="text-xs text-gray-500 dark:text-gray-400">
            {project.role.slice(0, 3).join(" · ")}
          </div>
          <Link
            href={`/projects/${project.slug}`}
            className="text-sm font-semibold text-blue-600 transition-colors group-hover:text-blue-700 dark:text-blue-400"
          >
            {locale === "zh" ? "查看项目详情 →" : "View case study →"}
          </Link>
        </div>
      </div>
    </article>
  );
}
