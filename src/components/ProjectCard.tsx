"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const { locale } = useLanguage();

  return (
    <article className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-[#171a20]/98 shadow-[0_20px_60px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:border-sky-400/35 hover:shadow-[0_24px_70px_rgba(0,0,0,0.3)]">
      <Link
        href={`/projects/${project.slug}`}
        className="pressable block"
        data-cursor="interactive"
      >
        <div className="grid md:grid-cols-[42%_1fr]">
          <div className="relative min-h-[240px] overflow-hidden bg-[#0b1118] md:min-h-[270px]">
            <img
              src={project.cover}
              alt={project.coverAlt[locale]}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-[72%_center] transition-transform duration-500 group-hover:scale-[1.015]"
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
