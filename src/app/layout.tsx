import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Fernando Valenz | Full-Stack Developer",
  description: "Portfolio of Fernando Valenz - Full-stack developer specializing in React, Node.js, TypeScript, and modern web technologies. Building scalable applications with clean, maintainable code.",
  keywords: ["full-stack developer", "react", "nodejs", "typescript", "web development", "frontend", "backend", "portfolio"],
  authors: [{ name: "Fernando Valenz" }],
  openGraph: {
    title: "Fernando Valenz | Full-Stack Developer",
    description: "Full-stack developer specializing in React, Node.js, TypeScript, and modern web technologies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fernando Valenz | Full-Stack Developer",
    description: "Full-stack developer specializing in React, Node.js, TypeScript, and modern web technologies.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    // Add verification codes when deploying
    // google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#ffffff" />
        <meta name="color-scheme" content="light" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
