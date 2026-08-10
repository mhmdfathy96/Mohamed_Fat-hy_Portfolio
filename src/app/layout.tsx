import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import profile from "@/data/profile.json";
import { Analytics } from "@vercel/analytics/next";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import MicrosoftClarity from "@/components/MicrosoftClarity";
import AgentechWidget from "@/components/AgentechWidget";
import AgentechAnalytics from "@/components/AgentechAnalytics";
import {
  personSchema,
  serviceSchema,
  faqSchema,
} from "@/lib/structuredData";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    template: `%s | ${profile.name}`,
    default: `${profile.name} — Apps, backends, and the systems behind them`,
  },
  description: profile.summary,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: profile.name,
    title: `${profile.name} — Apps, backends, and the systems behind them`,
    description: profile.summary,
    url: profile.siteUrl,
    locale: "en_US",
    // TODO: replace with a purpose-made 1200x630 card (name, what you do, one
    // proof line). This is a portrait crop and will letterbox in link previews.
    images: [
      {
        url: "/assets/personal-image.png",
        alt: `${profile.name}, software engineer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Apps, backends, and the systems behind them`,
    description: profile.summary,
    images: ["/assets/personal-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/*
          Layer 3: the technical vocabulary lives here, not in the visible
          copy. This is what an AI assistant reads when a prospect asks it
          about me — which, increasingly, is how prospects start.
        */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              personSchema(),
              serviceSchema(),
              faqSchema(),
            ]),
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900 flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-grow pt-16">{children}</main>
        <Footer />
        <SpeedInsights />
        <Analytics />
        <GoogleAnalytics />
        <MicrosoftClarity />
        <AgentechWidget />
        <AgentechAnalytics />
      </body>
    </html>
  );
}
