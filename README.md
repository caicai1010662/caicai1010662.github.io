# 个人作品集(New Portfolio)

一个基于 **Next.js** 构建的**中英双语个人作品集网站**,采用现代渐变风格,支持深色模式与语言切换。

## 技术栈

- [Next.js](https://nextjs.org) 16(App Router)+ React 19
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com) 4

## 功能特性

- 🌐 **中英双语** — 点击导航栏右上角「中 / EN」即时切换,选择会被记忆(localStorage)
- 🌙 **深色模式** — 自动跟随系统偏好,也可手动切换
- 📄 **单页结构** — Hero / About / Projects / Contact 四个区块,导航锚点平滑滚动
- ⚡ **现代渐变风格** — 蓝紫渐变标题与柔和光晕背景

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器(http://localhost:3000)
npm run dev

# 生产构建
npm run build

# 启动生产服务器
npm start
```

## 项目结构

```
src/
├── app/
│   ├── layout.tsx      # 根布局(语言 Provider、暗色模式、元数据)
│   ├── page.tsx        # 首页(组合各区块)
│   └── globals.css     # 全局样式(Tailwind 4)
├── components/
│   ├── LanguageProvider.tsx  # 语言上下文(zh / en)
│   ├── Navbar.tsx            # 导航栏(含语言与暗色切换)
│   ├── Hero.tsx              # 首屏 Hero 区块
│   ├── About.tsx             # 关于我(技能卡片)
│   ├── Projects.tsx          # 项目展示(占位卡片)
│   ├── Contact.tsx           # 联系我
│   └── Footer.tsx            # 页脚
└── lib/
    └── content.ts      # 所有中英文案(zh / en 字典)
```

## 自定义内容

所有文案集中管理在 [`src/lib/content.ts`](src/lib/content.ts),修改姓名、介绍、项目、联系方式等只需编辑这一个文件。联系方式的跳转链接位于 [`src/components/Contact.tsx`](src/components/Contact.tsx)。

## 部署

推荐部署到 [Vercel](https://vercel.com/new)。该平台由 Next.js 官方维护,零配置即可上线。
