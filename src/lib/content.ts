export type Locale = "zh" | "en";

export const translations = {
  nav: {
    home: { zh: "首页", en: "Home" },
    projects: { zh: "项目", en: "Projects" },
    about: { zh: "能力", en: "Capabilities" },
    contact: { zh: "联系", en: "Contact" },
  },
  contact: {
    eyebrow: { zh: "Contact", en: "Contact" },
    title: { zh: "继续交流", en: "Let's Talk" },
    description: {
      zh: "如果你想进一步了解某个项目，可以通过 GitHub 或邮件联系我。网站内容会持续补充真实项目截图、架构图与实验记录。",
      en: "If you would like to discuss any project in more detail, reach me through GitHub or email. Real screenshots, architecture diagrams, and experiment records will continue to be added.",
    },
    email: { zh: "发送邮件", en: "Email" },
    github: { zh: "查看 GitHub", en: "GitHub" },
  },
  footer: {
    note: {
      zh: "Engineering Project Portfolio",
      en: "Engineering Project Portfolio",
    },
  },
} as const;
