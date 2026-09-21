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
    const preference =
      stored === "light" || stored === "dark" || stored === "system"
        ? stored
        : "system";
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const resolved =
      preference === "system" ? (systemDark ? "dark" : "light") : preference;
    const root = document.documentElement;
    root.dataset.theme = resolved;
    root.dataset.themePreference = preference;
    root.style.colorScheme = resolved;
  } catch {
    document.documentElement.dataset.theme = "dark";
    document.documentElement.dataset.themePreference = "system";
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
      data-theme-preference="system"
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
