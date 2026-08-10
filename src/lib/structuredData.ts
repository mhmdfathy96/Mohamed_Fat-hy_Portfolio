import profile from "@/data/profile.json";
import projectsData from "@/data/projects.json";
import faqData from "@/data/faq.json";
import packages from "@/data/packages.json";

/*
 * Layer 3 of the copy strategy — the machine layer.
 *
 * The visible pages are written in plain language for a non-technical, often
 * non-native English reader. That deliberately keeps terms like "MVP",
 * "Flutter" and "RAG" out of the headlines. This file is where those terms
 * live instead: it is what search engines and AI assistants read when someone
 * asks them about Mohamed, so the technical vocabulary is carried here rather
 * than in front of the buyer.
 *
 * Keep it factually exact. An LLM will quote this.
 */

const SITE = profile.siteUrl;

/** Every distinct market a shipped product actually runs in. */
const areaServed = [
  ...new Set(
    Object.values(projectsData.projects)
      .map((p) => p.market)
      .filter((m) => m && m !== "Global"),
  ),
];

const knowsAbout = [
  "Flutter",
  "Dart",
  "Mobile app development",
  "iOS app development",
  "Android app development",
  "Spring Boot",
  "Java",
  ".NET",
  "C#",
  "Next.js",
  "React",
  "TypeScript",
  "PostgreSQL",
  "Firebase",
  "Cloud Functions",
  "REST API design",
  "Clean Architecture",
  "Backend development",
  "Full-stack development",
  "SaaS MVP development",
  "Minimum viable product",
  "Generative AI integration",
  "Spring AI",
  "Large language model integration",
  "Retrieval-augmented generation (RAG)",
  "Multi-tenant SaaS architecture",
  "Performance optimization",
  "Technical audit",
  "Legacy system takeover",
];

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE}/#person`,
    name: profile.name,
    url: SITE,
    image: `${SITE}/assets/personal-image.png`,
    email: `mailto:${profile.email}`,
    jobTitle: profile.title,
    description: profile.summary,
    knowsAbout,
    knowsLanguage: ["en", "ar"],
    sameAs: [profile.github, profile.linkedin, profile.upwork, profile.agency],
    worksFor: { "@id": `${SITE}/#service` },
  };
}

export function serviceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE}/#service`,
    name: `${profile.name} — Software Engineering`,
    url: SITE,
    description: profile.summary,
    provider: { "@id": `${SITE}/#person` },
    areaServed: areaServed.map((name) => ({ "@type": "Country", name })),
    availableLanguage: ["English", "Arabic"],
    knowsAbout,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: packages.sectionTitle,
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: packages.firstStep.name,
            description: packages.firstStep.plain,
            alternateName: packages.firstStep.alsoCalled
              .split(",")
              .map((s) => s.trim()),
          },
        },
        ...packages.packages.map((pkg) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: pkg.name,
            description: pkg.plain,
            alternateName: pkg.alsoCalled.split(",").map((s) => s.trim()),
          },
        })),
      ],
    },
  };
}

/** Lets an assistant answer "what is it like to work with him" verbatim. */
export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE}/services#faq`,
    mainEntity: faqData.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}
