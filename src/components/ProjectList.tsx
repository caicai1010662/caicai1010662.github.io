"use client";

import { useLanguage } from "./LanguageProvider";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectList() {
  const { locale } = useLanguage();

  return (
    <section
      id="projects"
      className="relative px-5 pb-28 pt-20 md:pb-32 md:pt-24"
      style={{
        background:
          "linear-gradient(to bottom, transparent 0, var(--section-surface) 140px, var(--section-surface) 100%)",
      }}
    >
      <div className="mx-auto max-w-[1160px]">
        <header className="mb-12 max-w-2xl md:mb-14">
          <h2
            className="font-bold tracking-[-0.035em]"
            style={{
              color: "var(--text)",
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              lineHeight: 1.06,
            }}
          >
            {locale === "zh" ? "精选项目" : "Selected Work"}
          </h2>

          <p
            className="type-body mt-4 max-w-xl"
            style={{ color: "var(--text-muted)" }}
          >
            {locale === "zh"
              ? "从机械、控制、软件到 AI，一些已经做出来并持续完善的工程项目。"
              : "Engineering work across mechanics, control, software, and AI — built, tested, and continuously refined."}
          </p>
        </header>

        <div
          className="border-t"
          style={{ borderColor: "var(--border-strong)" }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
