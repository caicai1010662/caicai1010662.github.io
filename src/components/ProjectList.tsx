"use client";

import { useLanguage } from "./LanguageProvider";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectList() {
  const { locale } = useLanguage();

  return (
    <section id="projects" className="scroll-mt-24">
      <header className="mb-10 border-b border-gray-200 pb-6 dark:border-gray-800">
        <p className="text-sm text-gray-400">
          {locale === "zh" ? "我做过的一些事情" : "Selected engineering work"}
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
          {locale === "zh" ? "项目" : "Projects"}
        </h2>
      </header>

      <div>
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
