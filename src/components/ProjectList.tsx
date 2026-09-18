"use client";

import { useLanguage } from "./LanguageProvider";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectList() {
  const { locale } = useLanguage();

  return (
    <section
      id="projects"
      className="relative bg-[#08111c] px-5 pb-24 pt-16 md:pb-28 md:pt-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(5,12,22,0.82), rgba(5,12,22,0.95)), radial-gradient(circle at 18% 0%, rgba(14,165,233,0.18), transparent 32%)",
      }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-14 -translate-y-full border-y border-sky-400/[0.06] bg-sky-400/[0.035] backdrop-blur-[2px]" />

      <div className="mx-auto max-w-[1120px]">
        <header className="mb-9 flex items-end justify-between border-b border-white/10 pb-5">
          <div>
            <p className="type-body uppercase tracking-[0.14em] text-sky-400/65">
              Selected Projects
            </p>
            <h2 className="type-heading mt-2 font-bold text-white">
              {locale === "zh" ? "项目" : "Projects"}
            </h2>
            <p className="type-body mt-2 text-slate-600">
              {locale === "zh"
                ? "4 个工程项目，覆盖运动控制、桌面软件、系统集成与 AI Agent 应用。"
                : "Four engineering projects across motion control, desktop software, system integration, and AI agents."}
            </p>
          </div>
          <span className="type-body pb-0.5 font-mono text-slate-600">
            {String(projects.length).padStart(2, "0")}
          </span>
        </header>

        <div className="space-y-7">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
