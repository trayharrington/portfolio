import type { Metadata } from "next";
import NavLink from "@/components/NavLink";
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
  metadataBase: new URL("https://www.traylonharrington.com"),
  title: "Traylon Harrington",
  description: "Full-stack engineer building tools that take the friction out of people's work.",
  openGraph: {
    title: "Traylon Harrington",
    description: "Full-stack engineer building tools that take the friction out of people's work.",
    url: "/",
    siteName: "Traylon Harrington",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-10 focus:rounded focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
        >
          Skip to content
        </a>
        <header className="mx-auto w-full max-w-3xl px-6 py-6 sm:px-16">
          <nav aria-label="Main" className="flex gap-6 font-medium">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/resume">Resume</NavLink>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
