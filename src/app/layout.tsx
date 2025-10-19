import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { personSchema, websiteSchema, projectsSchema } from "@/lib/jsonld";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",        // Prevent render-blocking — improves LCP
  preload: true,
});

// ─────────────────────────────────────────────────────────────────────────────
// Site-wide Metadata (Next.js Metadata API)
// ─────────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL("https://abdulahad.netlify.app"),

  title: {
    default: "Abdul Ahad | Software Engineer — React, TypeScript, Node.js, Angular",
    template: "%s | Abdul Ahad",
  },
  description:
    "Portfolio of Abdul Ahad — Software Engineer with 4+ years building scalable enterprise web apps. Expert in React, TypeScript, Node.js, Angular, GraphQL, and cloud technologies.",

  keywords: [
    // Identity
    "Abdul Ahad",
    "Abdul Ahad Portfolio",
    "Abdul Ahad Software Engineer",
    // Role keywords
    "Software Engineer",
    "Full Stack Developer",
    "Full Stack Developer Portfolio",
    "Frontend Engineer",
    "JavaScript Engineer",
    "TypeScript Developer",
    // Tech keywords
    "React Developer",
    "React.js Developer",
    "Node.js Developer",
    "Angular Developer",
    "TypeScript Developer",
    "GraphQL Developer",
    "NestJS Developer",
    // Domain
    "Camunda Modeler Contributor",
    "bpmn.io Contributor",
    "Open Source Contributor",
    "Enterprise Web Application Developer",
    // Location
    "Software Engineer Germany",
    "Software Engineer Passau",
    "Web Developer Germany",
    // Portfolio type
    "Developer Portfolio",
    "Software Engineer Portfolio",
    "Web Application Portfolio",
  ],

  authors: [{ name: "Abdul Ahad", url: "https://abdulahad.netlify.app" }],
  creator: "Abdul Ahad",
  publisher: "Abdul Ahad",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // ── Canonical ──────────────────────────────────────────────────────────────
  alternates: {
    canonical: "/",
  },

  // ── Robots ────────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Open Graph ────────────────────────────────────────────────────────────
  openGraph: {
    type: "profile",
    firstName: "Abdul",
    lastName: "Ahad",
    username: "abdul99ahad",
    title: "Abdul Ahad | Software Engineer Portfolio",
    description:
      "Software Engineer with 4+ years of experience. React, TypeScript, Node.js, Angular, GraphQL. Previously at Camunda, contributing to Camunda Modeler and 30+ bpmn.io open-source libraries.",
    url: "https://abdulahad.netlify.app",
    siteName: "Abdul Ahad Portfolio",
    locale: "en_US",
  },

  // ── Twitter Card ──────────────────────────────────────────────────────────
  twitter: {
    card: "summary",
    title: "Abdul Ahad | Software Engineer — React, TypeScript, Node.js, Angular",
    description:
      "Software Engineer with 4+ years building scalable enterprise apps. Previously at Camunda, contributing to 30+ bpmn.io open-source libraries.",
    creator: "@abdulahad_dev",
  },

  // ── Theme ─────────────────────────────────────────────────────────────────
  other: {
    "theme-color": "#0f172a",       // slate-950 — matches page background
    "color-scheme": "dark",
    "msapplication-TileColor": "#0f172a",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// Root Layout
// ─────────────────────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* ── Font Performance: Preconnect to Google Fonts ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* ── Theme color (supported by Chrome/Android) ── */}
        <meta name="theme-color" content="#0f172a" />
        <meta name="color-scheme" content="dark" />

        {/* ── Geo / Location signals ── */}
        <meta name="geo.region" content="DE-BY" />
        <meta name="geo.placename" content="Passau" />

        {/* ── JSON-LD: Person Schema ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />

        {/* ── JSON-LD: WebSite Schema ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        {/* ── JSON-LD: Projects ItemList Schema ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
