"use client";

import { useLanguage } from "./LanguageProvider";
import { translations } from "@/lib/content";

export default function About() {
  const { locale } = useLanguage();
  const t = translations.about;

  return (
    <section id="about" className="scroll-mt-16 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight md:text-4xl">
          {t.title[locale]}
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center leading-relaxed text-gray-600 dark:text-gray-400">
          {t.description[locale]}
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {(
            [
              { key: "frontend", icon: "🎨", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
              { key: "backend", icon: "⚙️", items: ["Node.js", "PostgreSQL", "REST & GraphQL", "Docker"] },
              { key: "tools", icon: "🛠️", items: ["Git", "CI/CD", "AWS", "Vercel"] },
            ] as const
          ).map((card) => (
            <div
              key={card.key}
              className="rounded-2xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="mb-3 text-2xl">{card.icon}</div>
              <h3 className="mb-3 font-semibold">{t.skills[card.key][locale]}</h3>
              <ul className="space-y-1.5 text-sm text-gray-600 dark:text-gray-400">
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
