"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
import { useLanguage } from "./LanguageProvider";

const quickLinks = [
  { href: "/#home", zh: "首页", en: "Home", external: false },
  { href: "/#projects", zh: "项目", en: "Projects", external: false },
  {
    href: profile.links.resume,
    zh: "简历",
    en: "Resume",
    external: true,
  },
  {
    href: profile.links.github,
    zh: "GitHub",
    en: "GitHub",
    external: true,
  },
] as const;

export default function ProjectSearch({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { locale } = useLanguage();
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return projects;

    return projects.filter((project) => {
      const roleText = project.role.flatMap((item) => [item.zh, item.en]);
      const haystack = [
        project.title.zh,
        project.title.en,
        project.value.zh,
        project.value.en,
        project.context.zh,
        project.context.en,
        project.category.zh,
        project.category.en,
        ...roleText,
        ...project.stack,
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(q);
    });
  }, [query]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[80] px-4 pt-20 backdrop-blur-md"
      style={{ backgroundColor: "var(--overlay)" }}
      onMouseDown={onClose}
    >
      <div
        className="mx-auto max-w-2xl overflow-hidden rounded-2xl border shadow-2xl"
        style={{
          borderColor: "var(--border-strong)",
          backgroundColor: "var(--surface-strong)",
          boxShadow: "0 24px 80px var(--shadow)",
        }}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div
          className="flex items-center gap-3 border-b px-5 py-4"
          style={{ borderColor: "var(--border-strong)" }}
        >
          <svg
            className="h-5 w-5 shrink-0"
            style={{ color: "var(--accent)" }}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.4-3.4" />
          </svg>
          <input
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={
              locale === "zh"
                ? "快速导航或搜索项目、技术栈、角色…"
                : "Navigate or search projects, technologies, roles…"
            }
            className="type-body min-w-0 flex-1 bg-transparent outline-none"
            style={{ color: "var(--text)" }}
          />
          <button
            onClick={onClose}
            className="type-body transition-opacity hover:opacity-70"
            style={{ color: "var(--text-muted)" }}
          >
            ESC
          </button>
        </div>

        <div
          className="border-b px-5 py-3"
          style={{ borderColor: "var(--border)" }}
        >
          <div
            className="type-body mb-2 uppercase tracking-[0.08em]"
            style={{ color: "var(--text-muted)" }}
          >
            {locale === "zh" ? "快速入口" : "Quick Links"}
          </div>
          <div className="flex flex-wrap gap-2">
            {quickLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={onClose}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="type-body rounded-full border px-3 py-1.5 transition-opacity hover:opacity-70"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--text-secondary)",
                }}
              >
                {item[locale]}
              </a>
            ))}
          </div>
        </div>

        <div className="max-h-[65vh] overflow-y-auto p-2">
          {filtered.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              onClick={onClose}
              className="flex gap-4 rounded-xl p-3 transition"
              style={{ color: "var(--text)" }}
            >
              <div
                className="flex h-16 w-24 shrink-0 items-center justify-center overflow-hidden rounded-lg"
                style={{ backgroundColor: "var(--surface-image)" }}
              >
                <img src={project.cover} alt="" className="h-full w-full object-contain" />
              </div>
              <div className="min-w-0">
                <div
                  className="type-body truncate font-semibold"
                  style={{ color: "var(--text)" }}
                >
                  {project.title[locale]}
                </div>
                <div
                  className="type-body mt-1"
                  style={{ color: "var(--text-muted)" }}
                >
                  {project.context[locale]} · {project.category[locale]}
                </div>
                <div
                  className="type-body mt-2 flex flex-wrap gap-x-2"
                  style={{ color: "var(--accent)" }}
                >
                  {project.role.slice(0, 2).map((item) => (
                    <span key={item.en}>#{item[locale]}</span>
                  ))}
                  {project.stack.slice(0, 2).map((item) => (
                    <span key={item}>#{item}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}

          {filtered.length === 0 && (
            <div
              className="type-body px-4 py-10 text-center"
              style={{ color: "var(--text-muted)" }}
            >
              {locale === "zh" ? "没有找到匹配项目" : "No matching projects"}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
