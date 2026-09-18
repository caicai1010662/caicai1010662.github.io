"use client";

import { useLanguage } from "./LanguageProvider";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectList() {
  const { locale } = useLanguage();

  return (
    <section
      id="projects"
      className="relative bg-[#08111c] px-5 py-16 md:py-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(5,12,22,0.82), rgba(5,12,22,0.94)), radial-gradient(circle at 20% 0%, rgba(14,165,233,0.16), transparent 28%)",
      }}
    >
      <div className="mx-auto max-w-[900px]">
        <header className="mb-8 flex items-end justify-between border-b border-white/10 pb-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-sky-400/70">
              Engineering Portfolio
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white">
              {locale === "zh" ? "项目记录" : "Project Notes"}
            </h2>
          </div>
          <span className="text-xs text-slate-500">
            {String(projects.length).padStart(2, "0")}
          </span>
        </header>

        <div className="space-y-4">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
