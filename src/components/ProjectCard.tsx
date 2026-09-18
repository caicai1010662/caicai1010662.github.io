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
    <article className="overflow-hidden rounded-xl border border-white/[0.07] bg-[#171a20]/95 shadow-[0_18px_50px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-0.5 hover:border-sky-500/30">
      <Link href={`/projects/${project.slug}`} className="grid md:grid-cols-[34%_1fr]">
        <div className="relative min-h-[190px] overflow-hidden bg-black/30 md:min-h-[215px]">
          <img
            src={project.cover}
            alt={project.coverAlt[locale]}
            loading={index === 0 ? "eager" : "lazy"}
            className="absolute inset-0 h-full w-full object-cover transition duration-500 hover:scale-[1.02]"
          />
          <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-transparent via-transparent to-[#171a20]/30 md:block" />
        </div>

        <div className="flex min-w-0 flex-col p-5 md:p-6">
          <div className="flex-1">
            <h3 className="text-xl font-bold leading-snug tracking-tight text-sky-400 md:text-[1.45rem]">
              {project.title[locale]}
            </h3>

            <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-slate-400">
              <span>{project.period}</span>
              <span aria-hidden>·</span>
              <span>{project.type[locale]}</span>
              <span aria-hidden>·</span>
              <span>{project.role[0]}</span>
            </div>

            <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-400">
              {project.summary[locale]}
            </p>
          </div>

          <div className="mt-5 flex flex-col gap-3 border-t border-white/[0.06] pt-3 sm:flex-row sm:items-center sm:justify-between">
            <span className="inline-flex w-fit rounded-full border border-white/10 px-2.5 py-1 text-[10px] text-slate-400">
              {project.role[0]}
            </span>
            <div className="flex flex-wrap gap-2 text-[10px] text-slate-500">
              {project.stack.slice(0, 4).map((item) => (
                <span key={item} className="rounded-full border border-white/[0.08] px-2.5 py-1">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
