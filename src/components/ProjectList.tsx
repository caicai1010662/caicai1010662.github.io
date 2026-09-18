"use client";

import { useLanguage } from "./LanguageProvider";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectList() {
  const { locale } = useLanguage();

  return (
    <section id="projects" className="scroll-mt-24">
      <div className="mb-8">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.22em] text-blue-600 dark:text-blue-400">
          {locale === "zh" ? "Selected Work" : "Selected Work"}
        </p>
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          {locale === "zh" ? "项目作品" : "Projects"}
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400">
          {locale === "zh"
            ? "每个项目都按 Case Study 组织，重点说明问题、方案、我的职责与工程结果。"
            : "Each project is organized as a case study covering the problem, solution, my responsibilities, and engineering outcomes."}
        </p>
      </div>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
