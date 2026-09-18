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
    zh: "生物医学工程专业硕士，关注多轴运动控制、桌面软件与智能系统的工程实现。这里集中展示我做过的系统、软件和实验，而不是一份网页版简历。",
    en: "A professional master's student in Biomedical Engineering focused on multi-axis motion control, desktop software, and intelligent systems. This site documents the systems, software, and experiments I have built rather than duplicating a resume.",
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
    { value: "04", label: { zh: "核心项目", en: "Core Projects" } },
    { value: "03", label: { zh: "发明专利申请", en: "Patent Applications" } },
    { value: "6-DOF", label: { zh: "旗舰运动系统", en: "Flagship Motion System" } },
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
      label: { zh: "简历仓库", en: "Resume Repo" },
      href: "https://github.com/caicai1010662/Fanlizhen_HNU_Resume",
      external: true,
    },
  ],
} as const;
