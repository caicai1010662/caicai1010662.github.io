import type { LocalizedText } from "./projects";

export const profile = {
  name: {
    zh: "范李振",
    en: "Lizhen Fan",
  } satisfies LocalizedText,
  title: {
    zh: "自动化 · 运动控制 · 上位机开发",
    en: "Automation · Motion Control · Desktop Software",
  } satisfies LocalizedText,
  summary: {
    zh: "生物医学工程专业硕士，关注多轴运动控制、桌面软件与智能系统的工程实现。",
    en: "A Biomedical Engineering master's student focused on multi-axis motion control, desktop software, and intelligent systems.",
  } satisfies LocalizedText,
  education: {
    zh: "海南大学 · 生物医学工程 · 专业硕士",
    en: "Hainan University · Biomedical Engineering · M.Eng.",
  } satisfies LocalizedText,
  focus: [
    { zh: "运动控制", en: "Motion Control" },
    { zh: "桌面软件", en: "Desktop Software" },
    { zh: "系统集成", en: "System Integration" },
    { zh: "AI 应用", en: "AI Applications" },
  ] satisfies LocalizedText[],
  stats: [
    { value: "04", label: { zh: "项目", en: "Projects" } },
    { value: "04", label: { zh: "工程方向", en: "Areas" } },
    { value: "20+", label: { zh: "技术栈", en: "Technologies" } },
  ],
  links: [
    {
      label: { zh: "GitHub", en: "GitHub" },
      href: "https://github.com/caicai1010662",
      external: true,
    },
    {
      label: { zh: "邮箱", en: "Email" },
      href: "mailto:17685537369@163.com",
      external: false,
    },
    {
      label: { zh: "简历", en: "Resume" },
      href: "https://github.com/caicai1010662/Fanlizhen_HNU_Resume",
      external: true,
    },
  ],
} as const;
