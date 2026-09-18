"use client";

import { useLanguage } from "./LanguageProvider";

const capabilities = [
  {
    index: "01",
    title: { zh: "机械设计与运动学", en: "Mechanical & Kinematics" },
    description: {
      zh: "围绕机械结构、运动链和空间关系建立可验证的系统模型。",
      en: "Build verifiable system models around mechanisms, kinematic chains, and spatial relationships.",
    },
    items: ["SolidWorks", "URDF", "Coordinate Transform", "Workspace"],
  },
  {
    index: "02",
    title: { zh: "运动控制与系统集成", en: "Motion Control & Integration" },
    description: {
      zh: "把电机、控制器、通信协议和上位机组织成可操作的运动系统。",
      en: "Integrate motors, controllers, communication protocols, and host software into operable motion systems.",
    },
    items: ["RS485", "Multi-axis Control", "Closed-loop Stepper", "SDK/API"],
  },
  {
    index: "03",
    title: { zh: "桌面软件与可视化", en: "Desktop Software & Visualization" },
    description: {
      zh: "面向工程工具构建桌面交互、状态监控、数据展示和三维可视化。",
      en: "Build desktop interaction, state monitoring, data views, and 3D visualization for engineering tools.",
    },
    items: ["C#/.NET", "WPF", "MVVM", "PyQt5", "Three.js"],
  },
  {
    index: "04",
    title: { zh: "AI 应用与工具调用", en: "AI Applications & Tool Calling" },
    description: {
      zh: "关注 Agent、工具调用和传统软件能力之间的工程连接。",
      en: "Explore practical integration between agents, tool calling, and conventional software capabilities.",
    },
    items: ["Python", "Agents SDK", "Tool Calling", "FastAPI"],
  },
];

export default function Capabilities() {
  const { locale } = useLanguage();

  return (
    <section id="about" className="scroll-mt-24 py-24">
      <div className="mb-8">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.22em] text-blue-600 dark:text-blue-400">
          Engineering Profile
        </p>
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          {locale === "zh" ? "我能做什么" : "What I Build"}
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400">
          {locale === "zh"
            ? "从机械结构和运动控制，到桌面软件、可视化与 AI 工具调用，我更关注把不同技术组合成一个可运行、可验证的完整系统。"
            : "From mechanisms and motion control to desktop software, visualization, and AI tool calling, I focus on combining technologies into complete systems that can run and be verified."}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {capabilities.map((capability) => (
          <article
            key={capability.index}
            className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900"
          >
            <p className="font-mono text-xs text-gray-400">{capability.index}</p>
            <h3 className="mt-3 text-lg font-semibold">{capability.title[locale]}</h3>
            <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
              {capability.description[locale]}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {capability.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
