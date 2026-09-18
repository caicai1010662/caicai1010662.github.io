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
        <header className="mb-9 border-b border-white/10 pb-5">
          <h2 className="type-heading font-bold text-white">
            {locale === "zh" ? "造物记录" : "Build Notes"}
          </h2>
          <p className="type-body mt-2 text-slate-600">
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
