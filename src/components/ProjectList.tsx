"use client";

import { useLanguage } from "./LanguageProvider";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectList() {
  const { locale } = useLanguage();

  return (
    <section id="projects" className="scroll-mt-24">
      <header className="mb-7 flex items-end justify-between border-b border-gray-200 pb-4 dark:border-gray-800">
        <div>
          <p className="text-[11px] uppercase tracking-[0.16em] text-gray-400">
            Engineering Portfolio
          </p>
          <h2 className="mt-1.5 text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-100">
            {locale === "zh" ? "项目记录" : "Project Notes"}
          </h2>
        </div>
        <span className="pb-0.5 text-xs text-gray-400">
          {String(projects.length).padStart(2, "0")}
        </span>
      </header>

      <div>
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
