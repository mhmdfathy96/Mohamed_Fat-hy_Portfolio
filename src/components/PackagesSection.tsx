import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import packages from "@/data/packages.json";

/*
 * Replaces the old "Phase 1 / Phase 2" cards, which named stages of my
 * process rather than things a buyer can actually purchase — a real client
 * read them and still had to ask what the packaging was.
 *
 * Shared by the home page and /services so the offer can never drift between
 * the two. Copy lives in src/data/packages.json; see the _copyLayers note
 * there before editing any wording.
 */
export default function PackagesSection({
  showCta = true,
  onCtaClick,
}: {
  showCta?: boolean;
  onCtaClick?: () => void;
}) {
  return (
    <section className="py-20 max-w-5xl mx-auto px-6" id="packages">
      <div className="mb-12 max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {packages.sectionTitle}
        </h2>
        <p className="text-lg text-slate-600">{packages.sectionIntro}</p>
      </div>

      {/* The small paid first step — the low-commitment door that did not
          exist before. Deliberately given more weight than the rest. */}
      <div className="p-8 bg-blue-50 border border-blue-200 rounded-2xl mb-6">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
          <h3 className="text-2xl font-bold">{packages.firstStep.name}</h3>
          <span className="text-sm font-semibold text-blue-800">
            Start here · {packages.firstStep.duration}
          </span>
        </div>
        <p className="text-sm text-slate-500 mb-4">
          Also called: {packages.firstStep.alsoCalled}
        </p>
        <p className="text-slate-700 mb-5 leading-relaxed max-w-3xl">
          {packages.firstStep.plain}
        </p>
        <ul className="space-y-2 mb-5">
          {packages.firstStep.youReceive.map((item) => (
            <li key={item} className="flex items-start gap-2 text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-blue-700 mt-1 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-sm text-slate-600 italic">{packages.firstStep.note}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {packages.packages.map((pkg) => (
          <div
            key={pkg.name}
            className="p-6 bg-white border border-gray-200 rounded-2xl hover:border-blue-600 transition-colors flex flex-col"
          >
            <h3 className="text-xl font-bold mb-1">{pkg.name}</h3>
            <p className="text-sm text-slate-500 mb-1">{pkg.duration}</p>
            <p className="text-xs text-slate-400 mb-4">
              Also called: {pkg.alsoCalled}
            </p>
            <p className="text-slate-700 text-sm mb-4 leading-relaxed">
              {pkg.plain}
            </p>
            <ul className="space-y-2 mb-4">
              {pkg.youReceive.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-slate-700 text-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-700 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-slate-500 italic mt-auto pt-2 border-t border-gray-100">
              {pkg.bestFor}
            </p>
          </div>
        ))}
      </div>

      {/* Pricing: explained, not numbered. A single "$5,000" figure was
          scaring off smaller clients while anchoring larger ones low. */}
      <div className="p-8 bg-gray-50 border border-gray-200 rounded-2xl mb-10">
        <h3 className="text-xl font-bold mb-3">{packages.pricing.title}</h3>
        <p className="text-slate-700 mb-5 max-w-3xl leading-relaxed">
          {packages.pricing.body}
        </p>
        <ul className="space-y-2">
          {packages.pricing.points.map((point) => (
            <li key={point} className="flex items-start gap-2 text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-blue-700 mt-1 flex-shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {showCta && (
        <div>
          <Link
            href="/services"
            onClick={onCtaClick}
            className="group inline-flex items-center gap-2 px-6 py-3 bg-blue-700 text-white rounded-md font-semibold hover:bg-blue-800 transition-colors"
          >
            See how working together goes
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      )}
    </section>
  );
}
