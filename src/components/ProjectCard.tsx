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
  const category = project.role[0];

  return (
    <article className="border-b border-gray-200 pb-11 pt-8 first:pt-0 last:border-b-0 dark:border-gray-800">
      <Link
        href={`/projects/${project.slug}`}
        className="group block overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-900"
      >
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={project.cover}
            alt={project.coverAlt[locale]}
            loading={index === 0 ? "eager" : "lazy"}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.012]"
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/[0.06] dark:ring-white/[0.06]" />
        </div>
      </Link>

      <div className="pt-5">
        <Link href={`/projects/${project.slug}`} className="group/title block">
          <h3 className="text-[1.5rem] font-semibold leading-[1.35] tracking-tight text-gray-950 transition-colors group-hover/title:text-blue-600 dark:text-gray-100 dark:group-hover/title:text-blue-400 md:text-[1.7rem]">
            {project.title[locale]}
          </h3>
        </Link>

        <div className="mt-3 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-[12px] text-gray-400">
          <span>{project.period}</span>
          <span aria-hidden>·</span>
          <span>{project.type[locale]}</span>
          <span aria-hidden>·</span>
          <span>{category}</span>
        </div>

        <p className="mt-3.5 text-[14px] leading-7 text-gray-500 dark:text-gray-400">
          {project.summary[locale]}
        </p>

        <div className="mt-3.5 flex flex-wrap gap-x-3 gap-y-2">
          {project.stack.slice(0, 6).map((item) => (
            <span
              key={item}
              className="text-[11px] text-gray-400 transition-colors hover:text-gray-700 dark:hover:text-gray-200"
            >
              #{item}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
