import profile from "@/data/profile.json";
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

/*
 * Every market Mohamed has actually delivered into — read from profile.markets,
 * not from projects.json.
 *
 * This used to be derived from the case studies, which silently undercounted:
 * projects.json documents 8 projects out of 15+ delivered, so the schema
 * claimed 5 markets against a real footprint of 10. The confirmed list is now
 * the single source of truth and the case studies are a subset of it.
 *
 * The European Union is a bloc, not a country, so it cannot be typed Country
 * without making the schema false.
 */
const areaServed = profile.markets.map((name) =>
  name === "European Union"
    ? { "@type": "AdministrativeArea", name }
    : { "@type": "Country", name },
);

/*
 * The retrieval surface. This is what an assistant matches against when someone
 * asks it to find "a developer who can build an AI chatbot on our own docs" or
 * "a SaaS MVP developer" — and Mohamed's stated intent is to be found for AI
 * and SaaS work, not only mobile. Order is deliberate: AI and SaaS terms lead,
 * because the list is frequently truncated by consumers and the first entries
 * are the ones that survive.
 *
 * Every entry must be defensible in a technical conversation. Do not add a
 * technology here to catch a search term if it has never actually shipped.
 */
const knowsAbout = [
  // AI — the direction the practice is being pointed
  "Generative AI integration",
  "AI chatbot development",
  "AI agent development",
  "Large language model integration",
  "Retrieval-augmented generation (RAG)",
  "Spring AI",
  "Vector databases",
  "Qdrant",
  "Embeddings",
  "Semantic search",
  // SaaS and product
  "SaaS MVP development",
  "SaaS platform development",
  "B2B SaaS",
  "Multi-tenant SaaS architecture",
  "Minimum viable product",
  // Backend
  "Backend development",
  "Spring Boot",
  "Java",
  ".NET",
  "C#",
  // Scoped deliberately: the Node.js work has been serverless Cloud Functions,
  // not standalone Node services. Left unqualified it invites an Express or
  // Nest enquiry that would be a bad fit.
  "Node.js (serverless Cloud Functions)",
  "JavaScript",
  "Cloud Functions",
  "Serverless architecture",
  "REST API design",
  "Cloud deployment",
  // Data
  "PostgreSQL",
  "SQL",
  "NoSQL databases",
  "Firebase",
  "Database design",
  // Web
  "Next.js",
  "React",
  "TypeScript",
  "Full-stack development",
  // Mobile
  "Flutter",
  "Dart",
  "Mobile app development",
  "iOS app development",
  "Android app development",
  // Practice
  "Clean Architecture",
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
    /*
     * Spelling variants, so all three resolve to one entity. "Mohamed Fathy"
     * is the form most people actually type — the hyphen is invisible to
     * anyone who heard the name rather than read it — and that query is
     * contested by nine other software engineers of the same name. Without
     * this, the site is optimised for the one spelling searchers use least.
     */
    alternateName: profile.alternateNames,
    url: SITE,
    /*
     * 899x1200, ~190KB. Was personal-image.png at 1792x2390 and 7.6MB — the
     * same "far too heavy" problem as the old OG card. Google may fetch this
     * for a Person rich result, and nothing else on the site renders it, so
     * there was no reason to serve the full-resolution original here.
     */
    image: `${SITE}/assets/headshot.jpg`,
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
    areaServed,
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
