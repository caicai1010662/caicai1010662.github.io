# 范李振 · Engineering Project Portfolio

面向项目展示与技术交流的个人工程作品集。网站不复刻纸面简历，而是把真实项目组织为可展开的 Case Study，方便在面试或技术交流中直接展示系统设计、软件实现与实验工作。

## 定位

- **Project First**：首页优先展示项目，而不是求职口号
- **Case Study**：每个项目包含问题、方案、职责、关键工作与阶段结果
- **长期可维护**：项目数据集中在 `src/data/projects.ts`
- **双语与暗色模式**：保留中英文切换、深色模式与响应式布局

## 当前项目

1. 多自由度高精度脑立体定向微电极植入系统
2. SignalViewer · 多通道神经信号实时可视化平台
3. ShopAgent · 商品询价与费用计算智能助手
4. Image-to-PDF · 桌面图像转 PDF 工具

## 技术栈

- Next.js 16 / React 19
- TypeScript
- Tailwind CSS 4
- Static Export

## 目录结构

```text
src/
├── app/
│   ├── page.tsx
│   └── projects/[slug]/page.tsx
├── components/
│   ├── ProfileSidebar.tsx
│   ├── ProjectCard.tsx
│   ├── ProjectList.tsx
│   └── ProjectCaseStudy.tsx
├── data/
│   ├── profile.ts
│   └── projects.ts
└── lib/
    └── content.ts
```

## 下一阶段

- 为旗舰项目补充真实设备照片、SolidWorks 图、WPF 截图和实验照片
- 为项目详情页增加系统架构图与流程图
- 根据真实成果继续完善项目结果，不使用未经验证的指标
