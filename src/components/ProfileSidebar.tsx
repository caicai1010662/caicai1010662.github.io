"use client";

import { useLanguage } from "./LanguageProvider";
import { profile } from "@/data/profile";

export default function ProfileSidebar() {
  const { locale } = useLanguage();

  return (
    <aside className="lg:sticky lg:top-24 lg:self-start">
      <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
        <div className="mb-6 flex items-center gap-4">
          <img
            src="/1.png"
            alt={profile.name[locale]}
            className="h-20 w-20 rounded-2xl border border-gray-200 object-cover dark:border-gray-700"
          />
          <div>
            <p className="text-2xl font-semibold tracking-tight">{profile.name[locale]}</p>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{profile.title[locale]}</p>
          </div>
        </div>

        <p className="text-sm leading-7 text-gray-600 dark:text-gray-300">
          {profile.summary[locale]}
        </p>

        <p className="mt-5 border-t border-gray-100 pt-5 text-sm font-medium text-gray-700 dark:border-gray-800 dark:text-gray-300">
          {profile.education[locale]}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {profile.focus.map((item) => (
            <span
              key={item.en}
              className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
            >
              {item[locale]}
            </span>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-3 gap-2 border-y border-gray-100 py-5 dark:border-gray-800">
          {profile.stats.map((stat) => (
            <div key={stat.value} className="text-center">
              <div className="text-lg font-semibold tracking-tight">{stat.value}</div>
              <div className="mt-1 text-[11px] leading-4 text-gray-500 dark:text-gray-400">
                {stat.label[locale]}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 grid gap-2">
          {profile.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 dark:border-gray-700 dark:text-gray-200 dark:hover:border-blue-800 dark:hover:bg-blue-950/40 dark:hover:text-blue-300"
            >
              <span>{link.label[locale]}</span>
              <span aria-hidden>↗</span>
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
