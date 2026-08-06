"use client";

import { useLanguage } from "./LanguageProvider";
import { useScrollReveal, revealProps } from "@/hooks/useScrollReveal";
import { translations } from "@/lib/content";

export default function About() {
  const { locale } = useLanguage();
  const t = translations.about;
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="scroll-mt-16 px-4 py-24">
      <div ref={ref} className="mx-auto max-w-6xl">
        <h2 {...revealProps(isVisible, 0)} className="mb-4 text-center text-3xl font-bold tracking-tight md:text-4xl">
          {t.title[locale]}
        </h2>
        <p {...revealProps(isVisible, 100)} className="mx-auto mb-12 max-w-2xl text-center leading-relaxed text-gray-600 dark:text-gray-400">
          {t.description[locale]}
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {(
            [
              {
                key: "frontend",
                icon: "🃏",
                items: ["斗地主交互设计", "叫地主决策优化", "残局界面推演"],
              },
              {
                key: "backend",
                icon: "🀄",
                items: ["掼蛋规则引擎", "牌型识别", "队友状态预测"],
              },
              {
                key: "tools",
                icon: "🛠️",
                items: ["扑克牌", "麻将桌", "烟灰缸", "KTV点歌系统", "网吧计费终端"],
              },
            ] as const
          ).map((card, i) => (
            <div
              key={card.key}
              {...revealProps(isVisible, 200 + i * 100)}
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
