import type { Metadata } from "next";

/*
 * page.tsx is a client component, so it cannot export metadata itself. This
 * layout exists only to carry it — without it the page inherited the site
 * default title, leaving the commercial page indistinguishable from the home
 * page in search results.
 *
 * Register is Layer 2: plain enough for a non-technical reader, but naming
 * the industry terms (MVP, audit, scaling) that a search or an LLM matches on.
 */
export const metadata: Metadata = {
  title: "Services & Packages",
  description:
    "What I build and how working together goes: a paid Scoping Week, a first working version (MVP) in 6–8 weeks, fixing or finishing an existing project, and scaling work. Milestone-based pricing, code and IP yours from day one.",
  alternates: { canonical: "/services" },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
