"use client";

import { useLanguage } from "./LanguageProvider";
import { profile } from "@/data/profile";

export default function ProfileSidebar() {
  const { locale } = useLanguage();

  return (
    <aside className="lg:sticky lg:top-24 lg:self-start">
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
        <img
          src="/1.png"
          alt={profile.name[locale]}
          className="h-24 w-24 rounded-full border border-gray-200 object-cover shadow-sm dark:border-gray-800"
        />

        <h1 className="mt-5 text-2xl font-semibold tracking-tight">
          {profile.name[locale]}
        </h1>

        <p className="mt-2 text-sm font-medium text-gray-500 dark:text-gray-400">
          {locale === "zh" ? "工程项目作品集" : "Engineering Project Portfolio"}
        </p>

        <p className="mt-5 max-w-sm text-sm leading-7 text-gray-600 dark:text-gray-300">
          {profile.summary[locale]}
        </p>

        <div className="mt-5 flex flex-wrap justify-center gap-2 lg:justify-start">
          {profile.focus.map((item) => (
            <span
              key={item.en}
              className="rounded-md bg-gray-100 px-2.5 py-1 text-xs text-gray-600 dark:bg-gray-900 dark:text-gray-400"
            >
              {item[locale]}
            </span>
          ))}
        </div>

        <div className="mt-7 grid w-full grid-cols-3 border-y border-gray-200 py-5 dark:border-gray-800">
          {profile.stats.map((stat) => (
            <div key={stat.value} className="text-center lg:text-left">
              <div className="text-lg font-semibold tracking-tight">{stat.value}</div>
              <div className="mt-1 text-[11px] leading-4 text-gray-400">
                {stat.label[locale]}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm leading-6 text-gray-500 dark:text-gray-400">
          {profile.education[locale]}
        </p>

        <div className="mt-6 w-full border-t border-gray-200 pt-5 dark:border-gray-800">
          <a
            href="mailto:17685537369@163.com"
            className="text-sm text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
          >
            17685537369@163.com
          </a>
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm lg:justify-start">
          {profile.links
            .filter((link) => !link.href.startsWith("mailto:"))
            .map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-gray-500 transition-colors hover:text-gray-950 dark:text-gray-400 dark:hover:text-white"
              >
                {link.label[locale]} ↗
              </a>
            ))}
        </div>
      </div>
    </aside>
  );
}
