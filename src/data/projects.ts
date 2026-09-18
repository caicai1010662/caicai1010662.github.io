export type LocalizedText = {
  zh: string;
  en: string;
};

export type ProjectFact = {
  value: string;
  label: LocalizedText;
};

export type ProjectEvidence = {
  value: string;
  label: LocalizedText;
  note?: LocalizedText;
};

export type Project = {
  slug: string;
  cover: string;
  coverAlt: LocalizedText;
  title: LocalizedText;
  period: string;
  context: LocalizedText;
  category: LocalizedText;
  value: LocalizedText;
  role: LocalizedText[];
  stack: string[];
  facts?: ProjectFact[];
  evidence?: ProjectEvidence[];
  engineeringDetails: {
    title: LocalizedText;
    description: LocalizedText;
  }[];
  links?: {
    github?: string;
    demo?: string;
  };
  caseStudy: {
    overview: LocalizedText;
    challenge: LocalizedText;
    architecture: LocalizedText;
    contributions: LocalizedText[];
    validation: LocalizedText[];
    currentStatus: LocalizedText[];
  };
};

export const projects: Project[] = [
  {
    slug: "stereotactic-microelectrode-system",
    cover: "/project-covers/original/stereotactic-system.png",
    coverAlt: {
      zh: "六自由度脑立体定向微电极植入系统概念视觉",
      en: "Concept visual for the 6-DOF stereotactic microelectrode implantation system",
    },
    title: {
      zh: "多自由度高精度脑立体定向微电极植入系统",
      en: "Multi-DOF Stereotactic Microelectrode Implantation System",
    },
    period: "2024.09 — Present",
    context: {
      zh: "硕士课题",
      en: "Master's Thesis Project",
    },
    category: {
      zh: "运动控制 · 系统集成",
      en: "Motion Control · System Integration",
    },
    value: {
      zh: "通过“姿态调整—全局定位—独立植入”的分阶段流程，在复杂植入角度下仍保持清晰、可控的立体定向操作链路。",
      en: "A staged pose-position-insertion workflow that keeps stereotactic positioning clear and controllable under complex insertion angles.",
    },
    role: [
      { zh: "总体设计", en: "System Design" },
      { zh: "机械设计", en: "Mechanical Design" },
      { zh: "运动控制", en: "Motion Control" },
      { zh: "上位机开发", en: "Desktop Software" },
    ],
    stack: [
      "SolidWorks",
      "C#/.NET",
      "WPF",
      "RS485",
      "URDF",
      "WebView2",
      "Three.js",
      "Python",
      "FastAPI",
    ],
    facts: [
      {
        value: "6-DOF",
        label: { zh: "R / Y / X / Z / P / I", en: "R / Y / X / Z / P / I" },
      },
      {
        value: "5",
        label: { zh: "颅骨标定点", en: "Skull Calibration Points" },
      },
      {
        value: "XYZ",
        label: { zh: "姿态确定后的全局正交定位", en: "Global Orthogonal Positioning After Pose Setup" },
      },
    ],
    engineeringDetails: [
      {
        title: { zh: "机械系统", en: "Mechanical System" },
        description: {
          zh: "完成六自由度整机方案、SolidWorks 装配设计、工作空间分析与分阶段运动策略设计。",
          en: "Designed the six-DOF mechanism, SolidWorks assembly, workspace, and staged motion strategy.",
        },
      },
      {
        title: { zh: "运动学建模", en: "Kinematics" },
        description: {
          zh: "建立与实体结构对应的 URDF 模型，定义关节层级与末端针尖坐标，并核对模型与实体机构的一致性。",
          en: "Built a URDF model aligned with the physical mechanism, including joint hierarchy and electrode-tip frame verification.",
        },
      },
      {
        title: { zh: "坐标与轨迹", en: "Coordinates & Trajectory" },
        description: {
          zh: "实现五点颅骨标定、AP/ML/DV 坐标转换、入口点—靶点方向向量与理论植入深度解算。",
          en: "Implemented five-point skull calibration, AP/ML/DV conversion, direction-vector solving, and theoretical insertion depth.",
        },
      },
      {
        title: { zh: "上位机集成", en: "Desktop Integration" },
        description: {
          zh: "基于 WPF + MVVM 集成六轴运动控制、状态监控、脑图谱与三维可视化模块。",
          en: "Integrated six-axis control, state monitoring, brain atlas, and 3D visualization in a WPF + MVVM application.",
        },
      },
    ],
    caseStudy: {
      overview: {
        zh: "该项目面向啮齿类动物脑立体定向微电极植入，核心目标是在复杂植入角度下建立一套从姿态设定、空间定位到最终植入的完整工程流程。",
        en: "This project targets stereotactic microelectrode implantation in rodents, with an end-to-end engineering workflow from pose setup and spatial positioning to final insertion.",
      },
      challenge: {
        zh: "传统立体定位方案在倾斜植入时常需要整体调整机构姿态，角度变化会让后续 XYZ 定位变得不直观；同时还需要处理个体颅骨标定、坐标关系和多控制器运动集成。",
        en: "Conventional tilted implantation can make subsequent XYZ positioning unintuitive, while the system also has to handle subject-specific skull calibration, coordinate relationships, and multi-controller motion integration.",
      },
      architecture: {
        zh: "系统先由 R、P 两轴确定植入姿态，再通过五点颅骨标定建立 AP/ML/DV 与设备坐标之间的关系；随后使用 XYZ 完成全局正交定位，最后由 I 轴执行植入。URDF 描述机械链与末端针尖坐标，上位机统一负责任务配置、位置命令、状态读取和可视化。",
        en: "R and P establish the insertion pose first. Five-point skull calibration relates AP/ML/DV to device coordinates, XYZ performs global orthogonal positioning, and I executes insertion. URDF describes the mechanical chain and electrode tip, while the desktop application unifies commands, state feedback, and visualization.",
      },
      contributions: [
        {
          zh: "自主完成六自由度机械总体方案与 SolidWorks 装配设计。",
          en: "Designed the overall six-DOF mechanism and SolidWorks assembly.",
        },
        {
          zh: "建立 URDF 运动学模型，并核对模型、SolidWorks 与实体机构之间的对应关系。",
          en: "Built the URDF kinematic model and verified consistency with CAD and the physical prototype.",
        },
        {
          zh: "设计五点颅骨标定、AP/ML/DV 转换及植入轨迹解算流程。",
          en: "Designed the five-point skull calibration, AP/ML/DV conversion, and trajectory-solving workflow.",
        },
        {
          zh: "基于 C#/.NET/WPF + MVVM 开发上位机并集成 SDK、RS485、脑图谱和三维模块。",
          en: "Developed the C#/.NET/WPF host application and integrated the SDK, RS485, atlas, and 3D modules.",
        },
      ],
      validation: [
        {
          zh: "已完成机械结构、URDF 运动学模型与上位机控制链路的系统集成。",
          en: "Mechanical structure, URDF kinematics, and the desktop control chain have been integrated.",
        },
        {
          zh: "五点标定、AP/ML/DV 转换与姿态确定后的全局 XYZ 定位流程已实现。",
          en: "Five-point calibration, AP/ML/DV conversion, and post-pose global XYZ positioning have been implemented.",
        },
      ],
      currentStatus: [
        {
          zh: "当前正在推进 XY 定位精度、不同植入倾角影响及琼脂糖模拟植入实验。",
          en: "Current work focuses on XY positioning accuracy, insertion-angle effects, and agarose-based simulated insertion experiments.",
        },
        {
          zh: "实验结果尚未在网站中作为定量结论展示，后续将补充真实截图、实验图与统计结果。",
          en: "Quantitative experimental conclusions are not yet presented on the site; real screenshots, experiment images, and statistics will be added after validation.",
        },
      ],
    },
  },
  {
    slug: "signalviewer",
    cover: "/project-covers/original/signalviewer.png",
    coverAlt: {
      zh: "SignalViewer 多通道神经信号可视化概念视觉",
      en: "Concept visual for SignalViewer",
    },
    title: {
      zh: "SignalViewer · 多通道神经信号实时可视化平台",
      en: "SignalViewer · Real-time Multi-channel Neural Signal Viewer",
    },
    period: "2026.03 — 2026.06",
    context: {
      zh: "个人开源项目",
      en: "Personal Open-source Project",
    },
    category: {
      zh: "桌面软件 · 数据可视化",
      en: "Desktop Software · Data Visualization",
    },
    value: {
      zh: "围绕高采样率、多通道神经信号数据，将大文件访问、异步加载和实时渲染拆开优化，提升桌面查看器的交互流畅性。",
      en: "Optimized large-file access, asynchronous loading, and real-time rendering separately to keep a multi-channel neural-signal desktop viewer responsive.",
    },
    role: [
      { zh: "桌面应用开发", en: "Desktop Software" },
      { zh: "可视化", en: "Visualization" },
      { zh: "性能优化", en: "Performance Optimization" },
    ],
    stack: ["Python", "PyQt5", "pyqtgraph", "NumPy", "QThread", "memmap"],
    evidence: [
      {
        value: "30 kSa/s",
        label: { zh: "当前测试数据采样率", en: "Current Test Data Sample Rate" },
      },
      {
        value: "≈80 fps",
        label: { zh: "当前优化后播放表现", en: "Current Optimized Playback" },
      },
    ],
    engineeringDetails: [
      {
        title: { zh: "实时渲染", en: "Real-time Rendering" },
        description: {
          zh: "通过对象池、视口剔除和帧调度降低多通道绘制开销。",
          en: "Reduced multi-channel rendering overhead with object pooling, viewport culling, and frame scheduling.",
        },
      },
      {
        title: { zh: "大文件加载", en: "Large-file Loading" },
        description: {
          zh: "采用 QThread + NumPy memmap 将数据读取与界面线程解耦。",
          en: "Decoupled data loading from the UI thread using QThread and NumPy memmap.",
        },
      },
    ],
    links: {
      github: "https://github.com/caicai1010662/Waveform_signal_viewer",
    },
    caseStudy: {
      overview: {
        zh: "SignalViewer 是一个用于浏览和播放多通道神经信号数据的桌面工具，重点是处理高采样率、大体量数据时的交互流畅性和工程稳定性。",
        en: "SignalViewer is a desktop tool for browsing and playing multi-channel neural-signal data, focused on responsive interaction and engineering stability on high-sample-rate, large-volume datasets.",
      },
      challenge: {
        zh: "直接一次性读取大文件并持续重绘全部通道会造成启动慢、内存压力和界面卡顿，因此需要分别优化数据访问、异步任务和视口渲染。",
        en: "Loading entire files and continuously redrawing every channel leads to slow startup, memory pressure, and UI stalls, so data access, asynchronous tasks, and viewport rendering need separate optimization.",
      },
      architecture: {
        zh: "项目使用 memmap 管理大文件访问，QThread 承担异步数据任务，并通过对象池、视口剔除、缓存和帧节奏控制减少重复创建和无效绘制。",
        en: "The project uses memmap for large-file access, QThread for asynchronous tasks, and object pooling, viewport culling, caching, and frame pacing to reduce unnecessary allocation and drawing.",
      },
      contributions: [
        {
          zh: "设计 PyQt5 / pyqtgraph 桌面交互界面。",
          en: "Designed the PyQt5 / pyqtgraph desktop UI.",
        },
        {
          zh: "实现多通道波形播放、缩放和浏览流程。",
          en: "Implemented multi-channel playback, zooming, and navigation.",
        },
        {
          zh: "完成异步加载、缓存和渲染性能优化。",
          en: "Implemented asynchronous loading, caching, and rendering optimizations.",
        },
      ],
      validation: [
        {
          zh: "当前测试记录中，在 30 kSa/s 数据条件下实现约 80 fps 的优化后播放表现。",
          en: "Current test records show approximately 80 fps optimized playback on 30 kSa/s data.",
        },
        {
          zh: "已完成 PyInstaller 打包与桌面应用工程化。",
          en: "PyInstaller packaging and desktop-application engineering have been completed.",
        },
      ],
      currentStatus: [
        {
          zh: "项目主体功能已完成并开源；后续若补充更严格性能对比，将同时记录通道数、数据规模和测试硬件。",
          en: "The main application is complete and open source; future performance comparisons will document channel count, dataset size, and test hardware.",
        },
      ],
    },
  },
  {
    slug: "shopagent",
    cover: "/project-covers/original/shopagent.png",
    coverAlt: {
      zh: "ShopAgent 工具调用流程概念视觉",
      en: "Concept visual for the ShopAgent tool-calling workflow",
    },
    title: {
      zh: "ShopAgent · 商品询价与费用计算智能助手",
      en: "ShopAgent · Product Inquiry and Cost Calculation Agent",
    },
    period: "2026.07 — Present",
    context: {
      zh: "个人项目",
      en: "Personal Project",
    },
    category: {
      zh: "AI Agent · 工具调用",
      en: "AI Agent · Tool Calling",
    },
    value: {
      zh: "让模型负责理解任务与编排工具，把商品查询和费用计算交给明确的 Tool 执行，并通过 SQLiteSession 保留跨轮次状态。",
      en: "The model handles task interpretation and tool orchestration, while explicit tools perform product lookup and cost calculation and SQLiteSession preserves multi-turn state.",
    },
    role: [
      { zh: "Agent 工作流", en: "Agent Workflow" },
      { zh: "Tool 设计", en: "Tool Design" },
      { zh: "会话状态", en: "Session Design" },
    ],
    stack: ["Python", "OpenAI Agents SDK", "DeepSeek", "Tool Calling", "SQLiteSession"],
    facts: [
      {
        value: "Tool",
        label: { zh: "商品查询与费用计算", en: "Product Lookup & Cost Calculation" },
      },
      {
        value: "SQLite",
        label: { zh: "跨轮次会话状态", en: "Multi-turn Session State" },
      },
    ],
    engineeringDetails: [
      {
        title: { zh: "工具调用", en: "Tool Calling" },
        description: {
          zh: "把商品查询与费用计算封装为结构化工具，由模型根据任务选择并调用。",
          en: "Wrapped product lookup and cost calculation as structured tools selected by the model.",
        },
      },
      {
        title: { zh: "会话记忆", en: "Session Memory" },
        description: {
          zh: "利用 SQLiteSession 保存跨轮次上下文，并拆分模型配置、Agent 与工具层。",
          en: "Used SQLiteSession for multi-turn context and separated model, agent, and tool layers.",
        },
      },
    ],
    caseStudy: {
      overview: {
        zh: "ShopAgent 用于验证从普通对话应用向 Tool-using Agent 的工程迁移：自然语言负责表达需求，外部 Tool 负责可执行的商品查询和费用计算。",
        en: "ShopAgent explores the engineering transition from a conversational app to a tool-using agent: natural language expresses intent while explicit tools execute product lookup and cost calculation.",
      },
      challenge: {
        zh: "单纯对话模型缺少可靠的外部执行能力，也难以保持结构化任务状态，因此需要明确的工具协议、参数处理、调用路由和会话持久化。",
        en: "A plain conversational model lacks reliable external execution and structured task state, motivating explicit tools, argument handling, call routing, and persistent sessions.",
      },
      architecture: {
        zh: "OpenAI Agents SDK 负责 Agent 与 Tool 的组织，DeepSeek 作为模型后端，SQLiteSession 保存上下文；模型配置、Agent 逻辑和工具函数保持解耦。",
        en: "The OpenAI Agents SDK organizes the agent and tools, DeepSeek provides the model backend, and SQLiteSession stores context while model configuration, agent logic, and tool functions remain decoupled.",
      },
      contributions: [
        {
          zh: "定义商品查询和费用计算 Tool 接口。",
          en: "Defined product-query and cost-calculation tool interfaces.",
        },
        {
          zh: "实现从用户请求到模型决策、Tool 调用和结果汇总的 Agent 执行链。",
          en: "Implemented the agent flow from user request to model decision, tool execution, and result synthesis.",
        },
        {
          zh: "加入 SQLiteSession 以保存跨轮次会话状态。",
          en: "Added SQLiteSession persistence across turns.",
        },
      ],
      validation: [
        {
          zh: "已完成“自然语言请求 → Tool 调用 → 结构化结果 → 模型汇总”的基本闭环。",
          en: "Completed the basic loop from natural-language request to tool execution, structured result, and model synthesis.",
        },
        {
          zh: "跨轮次会话状态可通过 SQLiteSession 保留。",
          en: "Multi-turn session state is persisted with SQLiteSession.",
        },
      ],
      currentStatus: [
        {
          zh: "当前为可运行原型，后续可继续扩展库存、订单或其他业务工具。",
          en: "The current version is a runnable prototype that can be extended with inventory, order, or other business tools.",
        },
      ],
    },
  },
  {
    slug: "image-to-pdf",
    cover: "/project-covers/original/image-to-pdf.png",
    coverAlt: {
      zh: "Image-to-PDF 文档工作流概念视觉",
      en: "Concept visual for Image-to-PDF",
    },
    title: {
      zh: "Image-to-PDF · 桌面图像转 PDF 工具",
      en: "Image-to-PDF · Desktop Image-to-PDF Utility",
    },
    period: "2026.07",
    context: {
      zh: "个人开源项目",
      en: "Personal Open-source Project",
    },
    category: {
      zh: "桌面工具 · 图像处理",
      en: "Desktop Utility · Image Processing",
    },
    value: {
      zh: "把批量导入、排序、EXIF 方向校正和 PDF 生成整理成可独立运行的桌面工作流，并在 JPEG 场景尽量避免不必要的重复编码。",
      en: "A standalone desktop workflow for batch import, ordering, EXIF correction, and PDF generation while avoiding unnecessary JPEG re-encoding where possible.",
    },
    role: [
      { zh: "桌面工具开发", en: "Desktop Utility" },
      { zh: "图像处理", en: "Image Processing" },
      { zh: "软件工程", en: "Software Engineering" },
    ],
    stack: ["Python", "Tkinter", "Pillow", "PDF", "EXIF"],
    facts: [
      {
        value: "Batch",
        label: { zh: "批量导入与排序", en: "Batch Import & Ordering" },
      },
      {
        value: "EXIF",
        label: { zh: "方向自动校正", en: "Orientation Correction" },
      },
      {
        value: "JPEG",
        label: { zh: "优先直接嵌入", en: "Prefer Direct Embedding" },
      },
    ],
    engineeringDetails: [
      {
        title: { zh: "图像处理", en: "Image Processing" },
        description: {
          zh: "支持 EXIF 自动校正、旋转、排序、删除与预览。",
          en: "Supports EXIF correction, rotation, ordering, deletion, and preview.",
        },
      },
      {
        title: { zh: "模块化", en: "Modularity" },
        description: {
          zh: "拆分文件解析、图像编码、PDF 写入和 GUI，降低界面与转换逻辑之间的耦合。",
          en: "Separates file parsing, image encoding, PDF writing, and GUI responsibilities to reduce coupling.",
        },
      },
    ],
    links: {
      github: "https://github.com/caicai1010662/ImagetoPDF",
    },
    caseStudy: {
      overview: {
        zh: "Image-to-PDF 是一个面向日常批量文档整理的小型桌面工具，用于把常见图像导入、排序并输出为 PDF。",
        en: "Image-to-PDF is a compact desktop utility for everyday batch document preparation, organizing common image formats and exporting them as PDF.",
      },
      challenge: {
        zh: "批量转换不仅涉及写入 PDF，还要处理 EXIF 方向、排序、预览、异常文件、缓存以及 Windows 显示缩放等桌面环境问题。",
        en: "Batch conversion involves more than PDF output: EXIF orientation, ordering, preview, malformed files, caching, and Windows display scaling all need handling.",
      },
      architecture: {
        zh: "项目将转换核心与 Tkinter GUI 解耦，并把文件解析、图像编码和 PDF 写入拆成独立模块；JPEG 场景优先直接嵌入原始数据。",
        en: "The conversion core is decoupled from the Tkinter GUI, with file parsing, image encoding, and PDF writing separated into modules; JPEG data is embedded directly when possible.",
      },
      contributions: [
        {
          zh: "完成批量文件导入、排序和预览交互。",
          en: "Implemented batch import, ordering, and preview interactions.",
        },
        {
          zh: "实现 EXIF 校正、图像编码与 PDF 输出模块。",
          en: "Implemented EXIF correction, image encoding, and PDF output modules.",
        },
        {
          zh: "处理异常图像、缓存和 Windows HiDPI 适配。",
          en: "Handled malformed images, caching, and Windows HiDPI adaptation.",
        },
      ],
      validation: [
        {
          zh: "批量导入、排序、预览、EXIF 校正和 PDF 输出工作流已完成。",
          en: "The batch import, ordering, preview, EXIF correction, and PDF output workflow is complete.",
        },
        {
          zh: "已形成可独立运行的桌面工具并在 GitHub 开源。",
          en: "Delivered a standalone desktop utility and published it on GitHub.",
        },
      ],
      currentStatus: [
        {
          zh: "项目主体功能已完成，当前以桌面工具形式维护。",
          en: "The main feature set is complete and maintained as a desktop utility.",
        },
      ],
    },
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
