"use client";

import { useLanguage } from "./LanguageProvider";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectList() {
  const { locale } = useLanguage();

  return (
    <section
      id="projects"
      className="relative bg-[#08111c] px-5 pb-20 pt-16 md:pb-24 md:pt-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(5,12,22,0.82), rgba(5,12,22,0.94)), radial-gradient(circle at 18% 0%, rgba(14,165,233,0.18), transparent 30%)",
      }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-14 -translate-y-full border-y border-sky-400/[0.06] bg-sky-400/[0.035] backdrop-blur-[2px]" />

      <div className="mx-auto max-w-[900px]">
        <header className="mb-7 flex items-end justify-between border-b border-white/10 pb-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-sky-400/65">
              Engineering Portfolio
            </p>
            <h2 className="mt-2 text-[1.35rem] font-bold tracking-tight text-white">
              {locale === "zh" ? "项目记录" : "Project Notes"}
            </h2>
          </div>
          <span className="pb-0.5 text-[11px] text-slate-600">
            {String(projects.length).padStart(2, "0")}
          </span>
        </header>

        <div className="space-y-3.5">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
