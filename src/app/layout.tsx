import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeToggle } from "@/components/theme-toggle";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: "Imteaz Sadat Hossain | Full Stack Developer",
  description: "Portfolio of Imteaz Sadat Hossain, a Full Stack Software Developer creating clean, fast, and performant web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <ThemeToggle />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
