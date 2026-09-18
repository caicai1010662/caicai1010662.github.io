"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const { locale } = useLanguage();
  const featured = project.featured;

  if (featured) {
    return (
      <article className="group overflow-hidden rounded-2xl border border-sky-400/[0.12] bg-[#15191f]/98 shadow-[0_26px_80px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:shadow-[0_30px_90px_rgba(0,0,0,0.36)]">
        <Link
          href={`/projects/${project.slug}`}
          className="pressable block"
          data-cursor="interactive"
        >
          <div className="flex items-center justify-center bg-[#0a1017] px-4 py-4 md:px-6 md:py-6">
            <img
              src={project.cover}
              alt={project.coverAlt[locale]}
              loading="eager"
              className="aspect-[16/9] w-full object-contain transition-transform duration-500 group-hover:scale-[1.008]"
            />
          </div>

          <div className="grid gap-5 px-6 py-7 md:grid-cols-[1fr_auto] md:items-end md:px-8 md:py-8">
            <div>
              <h3 className="type-heading font-black text-white transition-colors group-hover:text-sky-300">
                {project.title[locale]}
              </h3>
              <p className="type-body mt-3 text-sky-400/70">
                {project.category[locale]}
              </p>
              <p className="type-body mt-4 max-w-3xl text-slate-400">
                {project.value[locale]}
              </p>
            </div>

            <span className="type-body inline-flex shrink-0 items-center gap-2 font-semibold text-sky-400 transition group-hover:translate-x-1 group-hover:text-sky-300">
              {locale === "zh" ? "查看项目" : "View project"}
              <span aria-hidden>→</span>
            </span>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-[#171a20]/98 shadow-[0_20px_60px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:border-sky-400/30 hover:shadow-[0_24px_70px_rgba(0,0,0,0.3)]">
      <Link
        href={`/projects/${project.slug}`}
        className="pressable block"
        data-cursor="interactive"
      >
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
            <h3 className="type-heading font-bold text-sky-400 transition-colors group-hover:text-sky-300">
              {project.title[locale]}
            </h3>
            <p className="type-body mt-3 text-slate-500">
              {project.category[locale]}
            </p>
            <p className="type-body mt-5 line-clamp-3 text-slate-400">
              {project.value[locale]}
            </p>
            <span className="type-body mt-6 inline-flex items-center gap-2 font-semibold text-sky-400/80 transition group-hover:translate-x-1 group-hover:text-sky-300">
              {locale === "zh" ? "查看项目" : "View project"}
              <span aria-hidden>→</span>
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
