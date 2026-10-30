import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Traylon Harrington",
  description: "Full-stack engineer building tools that take the friction out of people's work.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <header className="mx-auto w-full max-w-3xl px-6 py-6 sm:px-16">
          <nav aria-label="Main" className="flex gap-6 font-medium">
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/resume">Resume</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
