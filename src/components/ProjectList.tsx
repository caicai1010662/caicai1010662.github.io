"use client";

import { useLanguage } from "./LanguageProvider";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectList() {
  const { locale } = useLanguage();

  return (
    <section
      id="projects"
      className="relative px-5 pb-24 pt-16 md:pb-28 md:pt-20"
      style={{
        background:
          "linear-gradient(to bottom, transparent 0, var(--section-surface) 120px, var(--section-surface) 100%)",
      }}
    >
      <div className="mx-auto max-w-[1120px]">
        <header
          className="mb-9 border-b pb-5"
          style={{ borderColor: "var(--border-strong)" }}
        >
          <h2
            className="type-heading font-bold"
            style={{ color: "var(--text)" }}
          >
            {locale === "zh" ? "造物记录" : "Build Notes"}
          </h2>
          <p
            className="type-body mt-2"
            style={{ color: "var(--text-muted)" }}
          >
            {locale === "zh"
              ? "一些已经做出来、正在做，或值得继续完善的项目。"
              : "A few things I have built, am building, or want to keep improving."}
          </p>
        </header>

        <div className="space-y-7">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
