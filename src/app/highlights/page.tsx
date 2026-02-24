import TechnicalHighlightCard from "@/components/TechnicalHighlightCard";
import highlightsData from "@/data/highlights.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technical Highlights",
  description:
    "Key technical challenges I've encountered and the solutions I implemented across mobile and backend systems.",
};

export default function HighlightsPage() {
  return (
    <section className="py-20 md:py-32 max-w-5xl mx-auto px-6">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Technical Highlights
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
          Key technical challenges and the solutions I implemented.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {highlightsData.highlights.map((highlight) => (
          <TechnicalHighlightCard key={highlight.id} highlight={highlight} />
        ))}
      </div>
    </section>
  );
}
