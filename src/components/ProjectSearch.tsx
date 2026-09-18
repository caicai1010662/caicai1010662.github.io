"use client";

import { useMemo, useState } from "react";
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

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return projects;
    return projects.filter((project) => {
      const haystack = [
        project.title.zh,
        project.title.en,
        project.summary.zh,
        project.summary.en,
        project.type.zh,
        project.type.en,
        ...project.role,
        ...project.stack,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [query]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] bg-[#02060d]/85 px-4 pt-20 backdrop-blur-md" onMouseDown={onClose}>
      <div
        className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-[#0c121c] shadow-2xl"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
          <svg className="h-5 w-5 shrink-0 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.4-3.4" />
          </svg>
          <input
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={locale === "zh" ? "搜索项目、技术栈或方向…" : "Search projects, technologies, or roles…"}
            className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
          />
          <button onClick={onClose} className="text-xs text-slate-500 hover:text-white">
            ESC
          </button>
        </div>

        <div className="max-h-[65vh] overflow-y-auto p-2">
          {filtered.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              onClick={onClose}
              className="flex gap-4 rounded-xl p-3 transition-colors hover:bg-white/[0.05]"
            >
              <img src={project.cover} alt="" className="h-16 w-24 rounded-lg object-cover" />
              <div className="min-w-0">
                <div className="truncate text-sm font-semibold text-slate-100">
                  {project.title[locale]}
                </div>
                <div className="mt-1 text-xs text-slate-500">
                  {project.role[0]} · {project.period}
                </div>
                <div className="mt-2 flex flex-wrap gap-x-2 text-[10px] text-sky-400/75">
                  {project.stack.slice(0, 4).map((item) => (
                    <span key={item}>#{item}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}

          {filtered.length === 0 && (
            <div className="px-4 py-10 text-center text-sm text-slate-500">
              {locale === "zh" ? "没有找到匹配项目" : "No matching projects"}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
