import type { Metadata } from "next";

/* See services/layout.tsx — page.tsx is a client component and cannot carry
 * metadata itself. */
export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell me about your project, or book a free call. Based in Egypt (GMT+2/+3), working with clients internationally in English and Arabic.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
