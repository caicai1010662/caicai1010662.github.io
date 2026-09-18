import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { LanguageProvider } from "@/components/LanguageProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      className="dark bg-[#07101a]"
      style={{ backgroundColor: "#07101a", colorScheme: "dark" }}
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-[#07101a] text-slate-200 antialiased`}
        style={{ backgroundColor: "#07101a" }}
      >
        <LanguageProvider>
          <Navbar />
          <main className="bg-[#07101a]">{children}</main>
          <BackToTop />
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
