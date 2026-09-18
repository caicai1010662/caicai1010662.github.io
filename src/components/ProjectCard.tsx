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
    <article className="overflow-hidden rounded-xl border border-white/[0.07] bg-[#171a20]/96 shadow-[0_18px_50px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-0.5 hover:border-sky-500/30">
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="grid md:grid-cols-[31%_1fr]">
          <div className="flex min-h-[178px] items-center justify-center bg-[#0c1118] md:min-h-[190px]">
            <img
              src={project.cover}
              alt={project.coverAlt[locale]}
              loading={index === 0 ? "eager" : "lazy"}
              className="h-full max-h-[190px] w-full object-contain"
            />
          </div>

          <div className="flex min-w-0 flex-col justify-center px-5 py-5 md:px-6">
            <h3 className="text-[1.18rem] font-bold leading-snug tracking-tight text-sky-400 md:text-[1.34rem]">
              {project.title[locale]}
            </h3>

            <div className="mt-3 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[11px] text-slate-400">
              <span>{project.period}</span>
              <span aria-hidden>·</span>
              <span>{project.type[locale]}</span>
              <span aria-hidden>·</span>
              <span>{project.role[0]}</span>
            </div>

            <div className="mt-5 font-mono text-[12px] tracking-[0.18em] text-slate-600">
              ···   ···   ···
            </div>
          </div>
        </div>

        <div className="flex min-h-10 flex-col gap-2 border-t border-white/[0.06] bg-[#1a1d23] px-4 py-2.5 sm:flex-row sm:items-center sm:justify-between">
          <span className="inline-flex w-fit rounded-full border border-white/10 px-2.5 py-1 text-[10px] text-slate-400">
            {project.role[0]}
          </span>

          <div className="flex flex-wrap gap-1.5 text-[9px] text-slate-500">
            {project.stack.slice(0, 4).map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/[0.08] px-2.5 py-1"
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
