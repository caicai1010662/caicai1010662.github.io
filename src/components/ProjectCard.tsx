"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const { locale } = useLanguage();

  return (
    <article
      className="group overflow-hidden rounded-2xl border transition duration-300 hover:-translate-y-1"
      style={{
        borderColor: "var(--border)",
        backgroundColor: "var(--surface)",
        boxShadow: "0 20px 60px var(--shadow)",
      }}
    >
      <Link href={`/projects/${project.slug}`} className="pressable block">
        <div className="grid md:grid-cols-[42%_1fr]">
          <div
            className="relative min-h-[240px] overflow-hidden md:min-h-[270px]"
            style={{ backgroundColor: "var(--surface-image)" }}
          >
            <img
              src={project.cover}
              alt={project.coverAlt[locale]}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>

          <div className="flex min-w-0 flex-col justify-center px-6 py-7 md:px-8">
            <h3
              className="type-heading font-bold transition-opacity group-hover:opacity-80"
              style={{ color: "var(--accent)" }}
            >
              {project.title[locale]}
            </h3>

            <p
              className="type-body mt-3"
              style={{ color: "var(--text-muted)" }}
            >
              {project.category[locale]}
            </p>

            <p
              className="type-body mt-5 line-clamp-3"
              style={{ color: "var(--text-secondary)" }}
            >
              {project.value[locale]}
            </p>

            <span
              className="type-body mt-6 inline-flex items-center gap-2 font-semibold transition group-hover:translate-x-1"
              style={{ color: "var(--accent)" }}
            >
              {locale === "zh" ? "查看项目" : "View project"}
              <span aria-hidden>→</span>
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
