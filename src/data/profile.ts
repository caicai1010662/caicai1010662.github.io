import type { LocalizedText } from "@/lib/i18n";

export const profile = {
  name: {
    zh: "范李振",
    en: "Lizhen Fan",
  } satisfies LocalizedText,
  title: {
    zh: "自动化 · 运动控制 · 上位机开发",
    en: "Automation · Motion Control · Desktop Software",
  } satisfies LocalizedText,
  education: {
    zh: "海南大学 · 生物医学工程 · 专业硕士",
    en: "Hainan University · Biomedical Engineering · M.Eng.",
  } satisfies LocalizedText,
  stats: [
    { value: "04", label: { zh: "项目", en: "Projects" } },
    { value: "04", label: { zh: "工程方向", en: "Areas" } },
    { value: "20+", label: { zh: "技术栈", en: "Technologies" } },
  ],
  links: {
    github: "https://github.com/caicai1010662",
    resume: "https://github.com/caicai1010662/Fanlizhen_HNU_Resume",
    email: "mailto:17685537369@163.com",
  },
} as const;
