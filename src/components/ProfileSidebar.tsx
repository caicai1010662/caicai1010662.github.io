"use client";

import { useLanguage } from "./LanguageProvider";
import { profile } from "@/data/profile";

export default function ProfileSidebar() {
  const { locale } = useLanguage();

  return (
    <aside className="lg:sticky lg:top-24 lg:self-start">
      <div className="mx-auto flex max-w-[360px] flex-col items-center text-center lg:mx-0 lg:max-w-none lg:items-start lg:text-left">
        <img
          src="/1.png"
          alt={profile.name[locale]}
          className="h-[92px] w-[92px] rounded-full border border-gray-200 object-cover shadow-[0_6px_20px_rgba(15,23,42,0.06)] dark:border-gray-800"
        />

        <h1 className="mt-5 text-[1.65rem] font-semibold leading-none tracking-tight text-gray-950 dark:text-gray-100">
          {profile.name[locale]}
        </h1>

        <p className="mt-3 text-[13px] font-medium leading-6 text-gray-500 dark:text-gray-400">
          {profile.title[locale]}
        </p>

        <p className="mt-4 text-[13px] leading-6 text-gray-500 dark:text-gray-400">
          {profile.summary[locale]}
        </p>

        <div className="mt-5 flex flex-wrap justify-center gap-x-3 gap-y-2 lg:justify-start">
          {profile.focus.map((item) => (
            <span
              key={item.en}
              className="text-xs text-gray-400 transition-colors hover:text-gray-700 dark:hover:text-gray-200"
            >
              #{item[locale]}
            </span>
          ))}
        </div>

        <div className="mt-7 grid w-full grid-cols-3 border-y border-gray-200 py-4 dark:border-gray-800">
          {profile.stats.map((stat) => (
            <div key={stat.value}>
              <div className="text-[1.05rem] font-semibold tracking-tight text-gray-900 dark:text-gray-100">
                {stat.value}
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.08em] text-gray-400">
                {stat.label[locale]}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-5 text-[12px] leading-5 text-gray-400">
          {profile.education[locale]}
        </p>

        <div className="mt-5 w-full border-t border-gray-200 pt-5 dark:border-gray-800">
          <a
            href="mailto:17685537369@163.com"
            className="text-[13px] text-gray-500 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
          >
            17685537369@163.com
          </a>
        </div>

        <div className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-2 text-[13px] lg:justify-start">
          {profile.links
            .filter((link) => !link.href.startsWith("mailto:"))
            .map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-white"
              >
                {link.label[locale]} ↗
              </a>
            ))}
        </div>
      </div>
    </aside>
  );
}
