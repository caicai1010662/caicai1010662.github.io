"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const { locale } = useLanguage();

  return (
    <article
      className="group border-b"
      style={{ borderColor: "var(--border-strong)" }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="pressable block py-8 md:py-10"
      >
        <div className="grid items-center gap-7 md:grid-cols-[48%_1fr] md:gap-10 lg:gap-14">
          <div
            className="relative aspect-[16/10] overflow-hidden"
            style={{
              backgroundColor: "var(--surface-image)",
              borderRadius: "var(--radius-md)",
              boxShadow: "var(--shadow-soft)",
            }}
          >
            <img
              src={project.cover}
              alt={project.coverAlt[locale]}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.025]"
            />
          </div>

          <div className="min-w-0 py-1">
            <p
              className="text-[0.78rem] font-semibold uppercase tracking-[0.13em]"
              style={{ color: "var(--accent)" }}
            >
              {project.category[locale]}
            </p>

            <h3
              className="mt-3 font-bold tracking-[-0.03em] transition-colors duration-200 group-hover:text-[var(--accent)]"
              style={{
                color: "var(--text)",
                fontSize: "clamp(1.5rem, 2.7vw, 2.2rem)",
                lineHeight: 1.16,
              }}
            >
              {project.title[locale]}
            </h3>

            <p
              className="type-body mt-5 line-clamp-3 max-w-2xl"
              style={{ color: "var(--text-secondary)" }}
            >
              {project.value[locale]}
            </p>

            <span
              className="type-body mt-7 inline-flex items-center gap-2 font-semibold transition-transform duration-200 group-hover:translate-x-1"
              style={{ color: "var(--accent)" }}
            >
              {locale === "zh" ? "查看项目" : "View project"}
              <span aria-hidden>↗</span>
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
