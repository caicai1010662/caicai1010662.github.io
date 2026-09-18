# Lizhen Lab

个人工程项目站，用于展示系统设计、运动控制、桌面软件与 AI 实践。

## 当前结构

- **Home**：简洁 Hero + 项目列表
- **Project Case Study**：每个项目的详细背景、架构、个人贡献、工程细节与验证状态
- **Drawer**：个人信息、导航、简历与联系方式
- **Quick Navigator**：项目与常用入口检索
- **Bilingual**：中文 / English

## 项目

1. 多自由度高精度脑立体定向微电极植入系统
2. SignalViewer · 多通道神经信号实时可视化平台
3. ShopAgent · 商品询价与费用计算智能助手
4. Image-to-PDF · 桌面图像转 PDF 工具

## 技术栈

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- GitHub Pages static export

## 目录

```text
src/
├── app/
│   ├── page.tsx
│   └── projects/[slug]/page.tsx
├── components/
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── ProjectList.tsx
│   ├── ProjectCard.tsx
│   ├── ProjectCaseStudy.tsx
│   ├── ProjectSearch.tsx
│   ├── BackToTop.tsx
│   └── Footer.tsx
├── data/
│   ├── profile.ts
│   └── projects.ts
└── lib/
    └── i18n.ts
```

## 内容原则

首页保持简洁，只负责展示项目入口。技术细节、角色、验证信息与结果统一放入项目详情页。未完成验证的指标不作为确定性结果展示。
