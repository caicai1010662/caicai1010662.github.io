export type Locale = "zh" | "en";

export const translations = {
  nav: {
    home: { zh: "首页", en: "Home" },
    about: { zh: "关于", en: "About" },
    projects: { zh: "项目", en: "Projects" },
    contact: { zh: "联系", en: "Contact" },
  },
  hero: {
    tagline: { zh: "学术裁缝", en: "Academic Tailor" },
    subTagline: {
      zh: "跨学科缝合怪",
      en: "Interdisciplinary Stitching Specialist",
    },
    greeting: { zh: "你好，我是", en: "Hi, I'm" },
    name: { zh: "范李振", en: "Lizhen Fan" },
    description: {
      zh: "跨学科独立研究者，用脑机接口研究烟草与白酒，在网吧、台球厅与 KTV 中做沉浸式田野调查。",
      en: "A cross-disciplinary researcher using brain-computer interfaces to study tobacco and liquor, conducting immersive fieldwork in internet cafés, pool halls, and karaoke venues.",
    },
    ctaPrimary: { zh: "查看我的作品", en: "View My Work" },
    ctaSecondary: { zh: "联系我", en: "Get In Touch" },
  },
  about: {
    title: { zh: "关于我", en: "About Me" },
    description: {
      zh: "长期活跃于烟雾缭绕的非正式学术场域，研究方向横跨烟草燃烧动力学、酒精代谢行为学、麻将博弈论与台球碰撞实验。擅长在网吧、台球厅与 KTV 等复杂环境中开展沉浸式田野调查，并以极不稳定的作息维持稳定的研究热情。",
      en: "An independent researcher working at the intersection of tobacco combustion, alcohol-assisted cognition, mahjong game theory, and billiard collision dynamics. Frequently conducts immersive field studies in internet cafés, pool halls, and karaoke venues, while maintaining a remarkably consistent research output under an exceptionally inconsistent schedule.",
    },
    skillsTitle: { zh: "技术栈", en: "Skills" },
    skills: {
      frontend: { zh: "前端开发", en: "Frontend" },
      backend: { zh: "后端开发", en: "Backend" },
      tools: { zh: "工程工具", en: "Tools" },
    },
  },
  projects: {
    title: { zh: "我的项目", en: "My Projects" },
    subtitle: {
      zh: "一些正在进行中的研究项目。",
      en: "A selection of ongoing research projects.",
    },
    items: [
      {
        title: {
          zh: "基于侵入式脑机接口的茄科烟草品尝与鉴别系统",
          en: "Invasive Brain-Computer Interface-Based Tobacco Tasting and Identification System",
        },
        description: {
          zh: "该系统通过侵入式脑机接口实时采集受试者在烟草品尝过程中的神经活动，尝试建立烟气刺激、主观口感与脑电反应之间的映射关系。系统支持烟草类型识别、香气强度评估、刺激性分析及“这根到底行不行”的辅助判定。",
          en: "This system uses an invasive brain-computer interface to record neural activity during tobacco tasting and establishes mappings among smoke stimulation, subjective flavor perception, and cortical responses. It supports tobacco classification, aroma intensity evaluation, irritation analysis, and automated estimation of whether a cigarette is “actually any good.”",
        },
        tags: ["iBCI", "Tobacco", "Neural Tasting", "Flavor Evaluation", "Smoke Intelligence"],
        gradient: "from-amber-500 to-orange-600",
      },
      {
        title: {
          zh: "基于脑机接口的高粱蒸馏物品尝与鉴别系统",
          en: "Brain-Computer Interface-Based Sorghum Distillate Tasting and Identification System",
        },
        description: {
          zh: "该系统面向高粱蒸馏物的智能品鉴，通过采集饮用前后神经活动、面部表情及语言输出，综合判断酒体香型、入口刺激、回味长度与受试者是否已经开始重复讲话。系统致力于推动传统品酒从“凭感觉”向“带电极凭感觉”转型。",
          en: "This system applies brain-computer interface technology to the intelligent evaluation of sorghum-based distilled beverages. By analyzing neural activity, facial expressions, and verbal output before and after consumption, it estimates aroma profile, initial intensity, aftertaste duration, and whether the participant has begun repeating the same story. The project aims to modernize traditional liquor tasting from “subjective judgment” to “subjective judgment with electrodes.”",
        },
        tags: ["BCI", "Sorghum Distillate", "Neural Tasting", "Alcohol Evaluation", "Cognitive Fermentation"],
        gradient: "from-rose-500 to-red-600",
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
  },
  footer: {
    copyright: { zh: "保留所有权利", en: "All rights reserved." },
    builtWith: { zh: "使用 Next.js 构建", en: "Built with Next.js" },
  },
} as const;

export type TranslationKey = keyof typeof translations;
