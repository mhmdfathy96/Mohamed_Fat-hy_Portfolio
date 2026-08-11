import type { Metadata } from "next";

/* See services/layout.tsx — page.tsx is a client component and cannot carry
 * metadata itself. */
export const metadata: Metadata = {
  title: "About",
  description:
    "Software engineer with 5+ years building mobile apps, web platforms and the backends behind them. Products running in 10 markets across four continents. Flutter, Spring Boot, .NET, Next.js, and AI integration.",
  alternates: { canonical: "/about" },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
