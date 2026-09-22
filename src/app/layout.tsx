import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { LanguageProvider } from "@/components/LanguageProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import ClickRing from "@/components/ClickRing";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const themeScript = `
(() => {
  try {
    const stored = localStorage.getItem("lizhen-theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    const theme = stored === "light" || stored === "dark"
      ? stored
      : systemTheme;

    localStorage.setItem("lizhen-theme", theme);

    const root = document.documentElement;
    root.dataset.theme = theme;
    root.dataset.themePreference = theme;
    root.style.colorScheme = theme;
  } catch {
    document.documentElement.dataset.theme = "dark";
    document.documentElement.dataset.themePreference = "dark";
  }
})();
`;

export const metadata: Metadata = {
  title: "Lizhen Lab",
  description:
    "Lizhen Lab — 范李振（Lizhen Fan）的个人项目站，记录机械、运动控制、桌面软件与 AI 实践。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      data-theme="dark"
      data-theme-preference="dark"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}
      >
        <ThemeProvider>
          <LanguageProvider>
            <ClickRing />
            <Navbar />
            <main>{children}</main>
            <BackToTop />
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
