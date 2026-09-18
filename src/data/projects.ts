export type LocalizedText = {
  zh: string;
  en: string;
};

export type ProjectStatus = "active" | "completed";

export type Project = {
  slug: string;
  cover: string;
  coverAlt: LocalizedText;
  title: LocalizedText;
  shortTitle: LocalizedText;
  period: string;
  type: LocalizedText;
  status: ProjectStatus;
  featured: boolean;
  summary: LocalizedText;
  role: string[];
  stack: string[];
  metrics?: { value: string; label: LocalizedText }[];
  highlights: {
    title: LocalizedText;
    description: LocalizedText;
  }[];
  links?: {
    github?: string;
    demo?: string;
  };
  tone: "blue" | "cyan" | "violet" | "slate";
  caseStudy: {
    overview: LocalizedText;
    problem: LocalizedText;
    solution: LocalizedText;
    responsibilities: LocalizedText[];
    results: LocalizedText[];
  };
};

export const projects: Project[] = [
  {
    slug: "stereotactic-microelectrode-system",
    cover: "/project-covers/stereotactic-system.svg",
    coverAlt: { zh: "六自由度脑立体定向植入系统概念视觉", en: "Concept visual for the 6-DOF stereotactic implantation system" },
    title: {
      zh: "多自由度高精度脑立体定向微电极植入系统",
      en: "Multi-DOF Stereotactic Microelectrode Implantation System",
    },
    shortTitle: {
      zh: "六自由度脑立体定向植入系统",
      en: "6-DOF Stereotactic Implantation System",
    },
    period: "2024.09 — Present",
    type: {
      zh: "硕士课题 · 核心开发",
      en: "Master Project · Core Developer",
    },
    status: "active",
    featured: true,
    summary: {
      zh: "面向复杂角度脑立体定向植入需求，自主设计 R/Y/X/Z/P/I 六自由度机械系统，并完成运动学建模、五点颅骨标定、轨迹解算、六轴运动控制及 WPF 上位机集成。",
      en: "A six-degree-of-freedom stereotactic implantation system designed for complex-angle electrode placement, covering mechanical design, kinematics, five-point skull calibration, trajectory solving, six-axis motion control, and WPF integration.",
    },
    role: [
      "System Design",
      "Mechanical Design",
      "Motion Control",
      "Desktop Software",
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
    metrics: [
      { value: "6-DOF", label: { zh: "R/Y/X/Z/P/I", en: "R/Y/X/Z/P/I" } },
      { value: "5", label: { zh: "颅骨标定点", en: "Skull Calibration Points" } },
      { value: "XYZ", label: { zh: "姿态后全局正交定位", en: "Global Orthogonal Positioning" } },
    ],
    highlights: [
      {
        title: { zh: "机械系统", en: "Mechanical System" },
        description: {
          zh: "完成六自由度整机建模、工作空间分析和分阶段运动方案设计。",
          en: "Designed the six-DOF assembly, workspace, and staged motion strategy.",
        },
      },
      {
        title: { zh: "运动学建模", en: "Kinematics" },
        description: {
          zh: "建立与实体结构对应的 URDF 模型，定义关节层级与末端针尖坐标。",
          en: "Built a URDF model aligned with the physical mechanism and electrode-tip frame.",
        },
      },
      {
        title: { zh: "坐标与轨迹", en: "Coordinates & Trajectory" },
        description: {
          zh: "实现 AP/ML/DV 坐标转换、入口点—靶点方向向量与理论植入深度解算。",
          en: "Implemented AP/ML/DV conversion, direction-vector solving, and theoretical insertion depth.",
        },
      },
      {
        title: { zh: "上位机集成", en: "Desktop Integration" },
        description: {
          zh: "基于 WPF + MVVM 集成六轴控制、状态监控、脑图谱与三维可视化模块。",
          en: "Integrated six-axis control, state monitoring, atlas, and 3D visualization in WPF.",
        },
      },
    ],
    tone: "blue",
    caseStudy: {
      overview: {
        zh: "该项目面向啮齿类动物脑立体定向微电极植入，目标是在复杂植入角度下仍保持清晰、可控的定位与植入流程。系统采用 R/Y/X/Z/P/I 六自由度结构，并将姿态调整、空间定位和最终植入分阶段执行。",
        en: "This project targets stereotactic microelectrode implantation in rodents. Its goal is to preserve clear and controllable positioning under complex insertion angles through a six-DOF R/Y/X/Z/P/I mechanism and a staged pose-position-insertion workflow.",
      },
      problem: {
        zh: "传统立体定位方案在倾斜植入时常需要整体调整机构姿态，角度变化会使后续 XYZ 定位变得不直观。项目需要同时解决机械自由度配置、姿态变化后的坐标关系、个体颅骨标定以及多控制器运动控制集成。",
        en: "Conventional stereotactic setups often require tilting the whole mechanism, which makes subsequent XYZ positioning less intuitive. The project therefore combines mechanical DOF design, post-rotation coordinate relationships, skull calibration, and multi-controller motion integration.",
      },
      solution: {
        zh: "系统先由 R、P 轴确定植入姿态，再通过五点颅骨标定建立 AP/ML/DV 与设备坐标之间的关系，随后使用 XYZ 完成全局正交定位，最后由 I 轴执行植入。URDF 用于描述真实机械层级和末端针尖坐标，上位机统一负责位置命令、状态读取和可视化。",
        en: "R and P establish the insertion pose first. A five-point skull calibration then relates AP/ML/DV to device coordinates, XYZ performs global orthogonal positioning, and I executes the final insertion. URDF describes the physical chain and electrode tip, while the desktop application unifies motion commands, state feedback, and visualization.",
      },
      responsibilities: [
        {
          zh: "自主完成六自由度机械总体方案与 SolidWorks 装配设计。",
          en: "Designed the overall six-DOF mechanism and SolidWorks assembly.",
        },
        {
          zh: "建立 URDF 运动学模型，并核对模型、SolidWorks 与实体机构之间的对应关系。",
          en: "Built the URDF kinematic model and verified consistency with the CAD model and prototype.",
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
      results: [
        {
          zh: "形成从机械结构、运动学模型到控制软件的完整系统闭环。",
          en: "Established an end-to-end system spanning mechanics, kinematics, and control software.",
        },
        {
          zh: "实现姿态确定后的全局正交 XYZ 定位与独立 I 轴植入流程。",
          en: "Implemented global orthogonal XYZ positioning after pose setup and independent I-axis insertion.",
        },
        {
          zh: "为后续定位精度、角度影响与模拟植入实验提供统一实验平台。",
          en: "Created a unified platform for positioning-accuracy, angle-effect, and simulated-insertion experiments.",
        },
      ],
    },
  },
  {
    slug: "signalviewer",
    cover: "/project-covers/signalviewer.svg",
    coverAlt: { zh: "SignalViewer 多通道神经信号可视化概念视觉", en: "Concept visual for SignalViewer" },
    title: {
      zh: "SignalViewer · 多通道神经信号实时可视化平台",
      en: "SignalViewer · Real-time Multi-channel Neural Signal Viewer",
    },
    shortTitle: {
      zh: "SignalViewer",
      en: "SignalViewer",
    },
    period: "2026.03 — 2026.06",
    type: {
      zh: "个人项目 · GitHub 开源",
      en: "Personal Project · Open Source",
    },
    status: "completed",
    featured: true,
    summary: {
      zh: "基于 PyQt5 / pyqtgraph 构建多通道神经信号查看器，围绕高采样率数据的实时渲染、异步加载和桌面应用工程化进行优化。",
      en: "A PyQt5 / pyqtgraph desktop viewer for multi-channel neural signals, focused on real-time rendering, asynchronous loading, and engineering for large high-sample-rate datasets.",
    },
    role: ["Desktop Software", "Visualization", "Performance"],
    stack: ["Python", "PyQt5", "pyqtgraph", "NumPy", "QThread", "memmap"],
    metrics: [
      { value: "30 kSa/s", label: { zh: "数据采样率", en: "Data Sample Rate" } },
      { value: "≈80 fps", label: { zh: "优化后播放", en: "Optimized Playback" } },
    ],
    highlights: [
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
    tone: "cyan",
    caseStudy: {
      overview: {
        zh: "SignalViewer 是一个用于浏览和播放多通道神经信号数据的桌面工具，重点不是简单画图，而是处理高采样率、大体量数据时的交互流畅性和工程稳定性。",
        en: "SignalViewer is a desktop tool for browsing and playing multi-channel neural-signal data. The core challenge is not basic plotting, but maintaining responsive interaction and engineering stability on high-sample-rate, large-volume datasets.",
      },
      problem: {
        zh: "直接一次性读取大文件并持续重绘全部通道会造成启动慢、内存压力和界面卡顿，因此需要把数据访问、视口渲染和帧调度分别优化。",
        en: "Naively loading entire files and redrawing every channel leads to slow startup, memory pressure, and UI stalls, requiring separate optimization of data access, viewport rendering, and frame scheduling.",
      },
      solution: {
        zh: "项目使用 memmap 管理大文件访问，QThread 承担异步数据任务，并通过对象池、视口剔除、缓存和帧节奏控制减少重复创建和无效绘制。",
        en: "The project uses memmap for large-file access, QThread for asynchronous tasks, and object pooling, viewport culling, caching, and frame pacing to reduce unnecessary allocation and drawing.",
      },
      responsibilities: [
        { zh: "设计 PyQt5 / pyqtgraph 桌面交互界面。", en: "Designed the PyQt5 / pyqtgraph desktop UI." },
        { zh: "实现多通道波形播放、缩放和浏览流程。", en: "Implemented multi-channel playback, zooming, and navigation." },
        { zh: "完成异步加载、缓存和渲染性能优化。", en: "Implemented asynchronous loading, caching, and rendering optimizations." },
      ],
      results: [
        { zh: "在 30 kSa/s 数据条件下实现约 80 fps 播放表现。", en: "Reached approximately 80 fps playback on 30 kSa/s data." },
        { zh: "完成 PyInstaller 打包和桌面应用工程化。", en: "Completed PyInstaller packaging and desktop-application engineering." },
      ],
    },
  },
  {
    slug: "shopagent",
    cover: "/project-covers/shopagent.svg",
    coverAlt: { zh: "ShopAgent 工具调用流程概念视觉", en: "Concept visual for the ShopAgent tool-calling workflow" },
    title: {
      zh: "ShopAgent · 商品询价与费用计算智能助手",
      en: "ShopAgent · Product Inquiry and Cost Calculation Agent",
    },
    shortTitle: {
      zh: "ShopAgent",
      en: "ShopAgent",
    },
    period: "2026.07 — Present",
    type: {
      zh: "个人项目 · AI 应用",
      en: "Personal Project · AI Application",
    },
    status: "active",
    featured: true,
    summary: {
      zh: "基于 OpenAI Agents SDK 接入 DeepSeek，将商品查询和费用计算封装为 Tool，并通过 SQLiteSession 保留跨轮次会话状态。",
      en: "An AI agent built with the OpenAI Agents SDK and DeepSeek, exposing product lookup and cost calculation as tools while preserving multi-turn session state with SQLiteSession.",
    },
    role: ["AI Application", "Tool Calling", "Session Design"],
    stack: ["Python", "OpenAI Agents SDK", "DeepSeek", "Tool Calling", "SQLiteSession"],
    highlights: [
      {
        title: { zh: "工具调用", en: "Tool Calling" },
        description: {
          zh: "把商品查询与费用计算封装为结构化工具，由模型选择并执行。",
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
    tone: "violet",
    caseStudy: {
      overview: {
        zh: "ShopAgent 用于练习和验证从 Chatbot 向 Tool-using Agent 的工程迁移：模型不直接编造价格结果，而是根据任务调用商品查询与费用计算工具。",
        en: "ShopAgent explores the engineering transition from chatbot to tool-using agent: instead of inventing price results, the model delegates product lookup and cost calculation to explicit tools.",
      },
      problem: {
        zh: "单纯对话模型缺少可靠的外部执行能力，也难以保持结构化任务状态，因此需要工具协议、参数校验、调用路由和会话持久化。",
        en: "A plain conversational model lacks reliable external execution and structured task state, motivating explicit tools, argument handling, call routing, and persistent sessions.",
      },
      solution: {
        zh: "使用 OpenAI Agents SDK 定义 Agent 和 Tool，接入 DeepSeek 作为模型后端，并使用 SQLiteSession 保存上下文；模型配置、Agent 逻辑和工具函数保持解耦。",
        en: "The OpenAI Agents SDK defines the agent and tools, DeepSeek provides the model backend, and SQLiteSession stores context while model configuration, agent logic, and tool functions remain decoupled.",
      },
      responsibilities: [
        { zh: "定义商品查询和费用计算工具接口。", en: "Defined product-query and cost-calculation tool interfaces." },
        { zh: "实现 Agent 调用链与模型配置。", en: "Implemented the agent execution flow and model configuration." },
        { zh: "加入 SQLiteSession 跨轮次状态保存。", en: "Added SQLiteSession persistence across turns." },
      ],
      results: [
        { zh: "完成自然语言到工具执行再到结果汇总的基本闭环。", en: "Completed the basic loop from natural language to tool execution and result synthesis." },
        { zh: "形成可继续扩展库存、订单等工具的模块化结构。", en: "Built a modular structure that can expand to inventory and order tools." },
      ],
    },
  },
  {
    slug: "image-to-pdf",
    cover: "/project-covers/image-to-pdf.svg",
    coverAlt: { zh: "Image-to-PDF 文档工作流概念视觉", en: "Concept visual for Image-to-PDF" },
    title: {
      zh: "Image-to-PDF · 桌面图像转 PDF 工具",
      en: "Image-to-PDF · Desktop Image-to-PDF Utility",
    },
    shortTitle: {
      zh: "Image-to-PDF",
      en: "Image-to-PDF",
    },
    period: "2026.07",
    type: {
      zh: "个人项目 · GitHub 开源",
      en: "Personal Project · Open Source",
    },
    status: "completed",
    featured: false,
    summary: {
      zh: "面向批量图像转 PDF 的桌面工具，支持 JPEG 原始数据嵌入、EXIF 方向校正、旋转排序、异常处理和 Windows HiDPI 适配。",
      en: "A desktop batch image-to-PDF tool supporting direct JPEG embedding, EXIF orientation correction, rotation and ordering, error handling, and Windows HiDPI adaptation.",
    },
    role: ["Desktop Utility", "Image Processing", "Software Engineering"],
    stack: ["Python", "Tkinter", "Pillow", "PDF", "EXIF"],
    highlights: [
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
          zh: "拆分文件解析、图像编码、PDF 写入和 GUI，增强可维护性。",
          en: "Separates file parsing, image encoding, PDF writing, and GUI responsibilities.",
        },
      },
    ],
    links: {
      github: "https://github.com/caicai1010662/ImagetoPDF",
    },
    tone: "slate",
    caseStudy: {
      overview: {
        zh: "Image-to-PDF 是一个偏工程化的小型桌面项目，用于把常见图像批量整理并输出为 PDF，同时尽量避免不必要的图像重新编码。",
        en: "Image-to-PDF is a compact engineering-focused desktop utility for organizing common image formats into PDFs while avoiding unnecessary image re-encoding where possible.",
      },
      problem: {
        zh: "批量转换不仅涉及写入 PDF，还要处理 EXIF 方向、排序、预览、异常文件、缓存以及 Windows 显示缩放等桌面环境问题。",
        en: "Batch conversion involves more than PDF output: EXIF orientation, ordering, preview, malformed files, caching, and Windows display scaling all need handling.",
      },
      solution: {
        zh: "项目将转换核心与 Tkinter GUI 解耦，并把文件解析、图像编码和 PDF 写入拆成独立模块；JPEG 场景优先直接嵌入原始数据。",
        en: "The conversion core is decoupled from the Tkinter GUI, with file parsing, image encoding, and PDF writing separated into modules; JPEG data is embedded directly when possible.",
      },
      responsibilities: [
        { zh: "完成批量文件导入、排序和预览交互。", en: "Implemented batch import, ordering, and preview interactions." },
        { zh: "实现 EXIF 校正、图像编码与 PDF 输出模块。", en: "Implemented EXIF correction, image encoding, and PDF output modules." },
        { zh: "处理异常图像、缓存和 Windows HiDPI 适配。", en: "Handled malformed images, caching, and Windows HiDPI adaptation." },
      ],
      results: [
        { zh: "形成可独立运行的桌面工具，并完成 GitHub 开源。", en: "Delivered a standalone desktop utility and published it on GitHub." },
        { zh: "通过模块拆分降低 GUI 与转换逻辑之间的耦合。", en: "Reduced coupling between GUI and conversion logic through modularization." },
      ],
    },
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
