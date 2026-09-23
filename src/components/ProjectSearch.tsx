"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { useLanguage } from "./LanguageProvider";

export default function ProjectSearch({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { locale } = useLanguage();
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!open) {
      setQuery("");
    }
  }, [open]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

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

  const closeSearch = () => {
    setQuery("");
    onClose();
  };

  if (!open) return null;

  const hasQuery = query.trim().length > 0;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={locale === "zh" ? "项目搜索" : "Project search"}
      className="fixed inset-0 z-[80] overflow-y-auto px-5 pb-16 pt-14 backdrop-blur-xl sm:px-8 sm:pt-16"
      style={{
        backgroundColor:
          "color-mix(in srgb, var(--bg) 86%, transparent)",
      }}
      onMouseDown={closeSearch}
    >
      <button
        type="button"
        onClick={closeSearch}
        aria-label={locale === "zh" ? "关闭搜索" : "Close search"}
        className="pressable fixed right-5 top-5 z-[90] grid h-12 w-12 place-items-center rounded-full border transition hover:scale-[1.04] sm:right-7 sm:top-7"
        style={{
          borderColor:
            "color-mix(in srgb, var(--accent) 30%, transparent)",
          backgroundColor:
            "color-mix(in srgb, var(--surface-soft) 72%, transparent)",
          color: "var(--accent)",
          boxShadow: "0 10px 30px var(--shadow)",
        }}
      >
        <span className="relative block h-5 w-5">
          <span className="absolute left-0 top-[9px] block h-[2px] w-5 rotate-45 rounded-full bg-current" />
          <span className="absolute left-0 top-[9px] block h-[2px] w-5 -rotate-45 rounded-full bg-current" />
        </span>
      </button>

      <div
        className="mx-auto w-full max-w-[760px]"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div
          className="flex h-[72px] items-center gap-4 rounded-full border px-6 shadow-xl sm:px-7"
          style={{
            borderColor: "var(--border-strong)",
            backgroundColor:
              "color-mix(in srgb, var(--surface-strong) 88%, transparent)",
            boxShadow: "0 18px 55px var(--shadow)",
          }}
        >
          <svg
            className="h-6 w-6 shrink-0"
            style={{ color: "var(--accent)" }}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
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
                ? "搜索项目、技术栈、角色…"
                : "Search projects, technologies, roles…"
            }
            className="min-w-0 flex-1 bg-transparent text-base outline-none sm:text-[1.05rem]"
            style={{
              color: "var(--text)",
              caretColor: "var(--accent)",
            }}
          />
        </div>

        {hasQuery && (
          <div className="mt-8">
            <div
              className="type-body mb-2 px-1"
              style={{ color: "var(--text-muted)" }}
            >
              {locale === "zh"
                ? `${filtered.length} 个匹配项目`
                : `${filtered.length} matching ${filtered.length === 1 ? "project" : "projects"}`}
            </div>

            <div>
              {filtered.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  onClick={closeSearch}
                  className="group flex min-h-[112px] gap-4 border-b px-1 py-5 transition duration-200 hover:translate-x-1"
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--text)",
                  }}
                >
                  <div
                    className="h-[72px] w-[108px] shrink-0 overflow-hidden rounded-xl"
                    style={{ backgroundColor: "var(--surface-image)" }}
                  >
                    <img
                      src={project.cover}
                      alt=""
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div
                      className="line-clamp-2 font-semibold leading-snug"
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
                      className="type-body mt-2 flex flex-wrap gap-x-2 gap-y-1"
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

                  <span
                    aria-hidden
                    className="mt-1 hidden shrink-0 text-lg transition-transform duration-200 group-hover:translate-x-1 sm:block"
                    style={{ color: "var(--accent)" }}
                  >
                    →
                  </span>
                </Link>
              ))}

              {filtered.length === 0 && (
                <div
                  className="type-body px-4 py-16 text-center"
                  style={{ color: "var(--text-muted)" }}
                >
                  {locale === "zh"
                    ? "没有找到相关项目"
                    : "No matching projects"}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
