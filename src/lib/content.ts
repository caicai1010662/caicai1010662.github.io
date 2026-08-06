export type Locale = "zh" | "en";

export const translations = {
  nav: {
    home: { zh: "首页", en: "Home" },
    about: { zh: "关于", en: "About" },
    projects: { zh: "项目", en: "Projects" },
    contact: { zh: "联系", en: "Contact" },
  },
  hero: {
    tagline: { zh: "全栈开发工程师", en: "Full-Stack Developer" },
    greeting: { zh: "你好，我是", en: "Hi, I'm" },
    name: { zh: "你的名字", en: "Your Name" },
    description: {
      zh: "我用清晰的代码和用心的设计，构建现代化、高性能的 Web 应用。期待和你一起创造点什么。",
      en: "I build modern, performant web applications with clean code and thoughtful design. Let's create something great together.",
    },
    ctaPrimary: { zh: "查看我的作品", en: "View My Work" },
    ctaSecondary: { zh: "联系我", en: "Get In Touch" },
  },
  about: {
    title: { zh: "关于我", en: "About Me" },
    description: {
      zh: "这里是一段关于你的介绍。可以写你的技术背景、擅长的领域、正在探索的方向，或者任何想让大家了解的内容。",
      en: "This is a paragraph about you. Describe your technical background, areas of expertise, what you're currently exploring, or anything else you'd like people to know.",
    },
    skillsTitle: { zh: "技术栈", en: "Skills" },
    skills: {
      frontend: { zh: "前端开发", en: "Frontend" },
      backend: { zh: "后端开发", en: "Backend" },
      tools: { zh: "工程工具", en: "Tools" },
    },
    years: { zh: "3+ 年经验", en: "3+ years" },
  },
  projects: {
    title: { zh: "我的项目", en: "My Projects" },
    subtitle: {
      zh: "这里展示一些我做过的工作。用占位卡片先占好位置，之后替换成你的真实项目。",
      en: "A selection of work I've done. Placeholder cards ready to be replaced with your real projects.",
    },
    items: [
      {
        title: { zh: "项目名称 A", en: "Project Alpha" },
        description: {
          zh: "简单描述这个项目：它解决了什么问题，你用了什么技术，扮演了什么角色。",
          en: "A short description of the project: what problem it solves, the tech involved, and your role.",
        },
        tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      },
      {
        title: { zh: "项目名称 B", en: "Project Beta" },
        description: {
          zh: "简单描述这个项目：它解决了什么问题，你用了什么技术，扮演了什么角色。",
          en: "A short description of the project: what problem it solves, the tech involved, and your role.",
        },
        tags: ["React", "Node.js", "PostgreSQL"],
      },
      {
        title: { zh: "项目名称 C", en: "Project Gamma" },
        description: {
          zh: "简单描述这个项目：它解决了什么问题，你用了什么技术，扮演了什么角色。",
          en: "A short description of the project: what problem it solves, the tech involved, and your role.",
        },
        tags: ["TypeScript", "GraphQL", "AWS"],
      },
    ],
    visit: { zh: "查看项目", en: "Visit project" },
  },
  contact: {
    title: { zh: "联系我", en: "Get In Touch" },
    description: {
      zh: "如果你想合作一个项目、聊聊天，或者只是想打个招呼，欢迎随时联系。",
      en: "If you want to collaborate on a project, have a chat, or just say hi, feel free to reach out.",
    },
    email: { zh: "发送邮件", en: "Send Email" },
    github: { zh: "GitHub", en: "GitHub" },
    resume: { zh: "下载简历", en: "Resume" },
  },
  footer: {
    copyright: { zh: "保留所有权利", en: "All rights reserved." },
    builtWith: { zh: "使用 Next.js 构建", en: "Built with Next.js" },
  },
} as const;

export type TranslationKey = keyof typeof translations;
