"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  XCircle,
  Rocket,
  Smartphone,
  Server,
  Sparkles,
  Globe,
  LifeBuoy,
  Target,
  Zap,
  Users,
  Code,
  Cloud,
  Brain,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import servicesData from "@/data/services.json";
import faqData from "@/data/faq.json";
import PackagesSection from "@/components/PackagesSection";
import { trackPageView, trackLinkClick } from "@/lib/analytics";

const ICON_MAP: Record<string, LucideIcon> = {
  Rocket,
  Smartphone,
  Server,
  Sparkles,
  Globe,
  LifeBuoy,
  Target,
  Zap,
  Users,
  Code,
  Cloud,
  Brain,
  Wrench,
};

export default function Services() {
  useEffect(() => {
    trackPageView("services");
  }, []);

  const handleLinkClick = (label: string, href: string, location: string) => {
    trackLinkClick(label, href, location);
  };

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-blue-50">
        <div className="max-w-5xl mx-auto px-6 py-28 md:py-36 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-slate-900 leading-tight">
            {servicesData.hero.headline}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            {servicesData.hero.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={servicesData.hero.primaryCta.href}
              onClick={() =>
                handleLinkClick(
                  servicesData.hero.primaryCta.label,
                  servicesData.hero.primaryCta.href,
                  "services_hero_primary",
                )
              }
              className="group px-8 py-4 bg-blue-700 text-white rounded-lg font-semibold text-lg hover:bg-blue-800 transition-colors flex items-center gap-2"
            >
              {servicesData.hero.primaryCta.label}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href={servicesData.hero.secondaryCta.href}
              onClick={() =>
                handleLinkClick(
                  servicesData.hero.secondaryCta.label,
                  servicesData.hero.secondaryCta.href,
                  "services_hero_secondary",
                )
              }
              className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-lg font-semibold text-lg hover:border-blue-700 hover:shadow-lg transition-all duration-300"
            >
              {servicesData.hero.secondaryCta.label}
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {servicesData.intro.title}
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          {servicesData.intro.body}
        </p>
      </section>

      {/* OUTCOMES GRID */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.outcomes.map((outcome, index) => {
              const Icon = ICON_MAP[outcome.icon] || Rocket;
              return (
                <div
                  key={index}
                  className="relative p-6 bg-white border-2 border-gray-200 rounded-2xl hover:border-blue-600 hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  <div className="inline-flex p-3 bg-blue-700 rounded-lg w-fit mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-1 text-gray-900">
                    {outcome.title}
                  </h3>
                  {/* Layer 2: the term an AI assistant would have told them to
                      search for, kept next to the plain title rather than
                      replacing it. */}
                  <p className="text-xs text-slate-400 mb-3">
                    Also called: {outcome.alsoCalled}
                  </p>
                  <p className="text-gray-600 mb-4 leading-relaxed flex-1">
                    {outcome.description}
                  </p>
                  <p className="text-sm text-gray-500 mb-5 italic">
                    <span className="font-semibold not-italic">Best for:</span>{" "}
                    {outcome.bestFor}
                  </p>
                  <Link
                    href={outcome.cta.href}
                    onClick={() =>
                      handleLinkClick(
                        outcome.cta.label,
                        outcome.cta.href,
                        `services_outcome_${index}`,
                      )
                    }
                    className="inline-flex items-center gap-1 text-blue-700 font-semibold hover:gap-2 transition-all"
                  >
                    {outcome.cta.label} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PACKAGES — folded in from the retired /build-with-me page */}
      <PackagesSection showCta={false} />

      {/* PROCESS */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {servicesData.process.title}
          </h2>
        </div>
        <div className="relative">
          <div className="grid md:grid-cols-5 gap-4">
            {servicesData.process.steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="p-5 bg-white border border-gray-200 rounded-xl h-full">
                  <div className="flex items-center justify-center w-8 h-8 bg-blue-700 text-white rounded-full font-bold text-sm mb-3">
                    {index + 1}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    {step.label}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOT FOR */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {servicesData.notFor.title}
            </h2>
          </div>
          <ul className="space-y-3">
            {servicesData.notFor.items.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-xl"
              >
                <XCircle className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ — folded in from the retired /build-with-me page. Also the block
          most likely to be quoted back by an AI assistant, so the answers are
          written to be lifted verbatim. */}
      <section className="py-20 max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          {faqData.title}
        </h2>
        <div className="space-y-4">
          {faqData.faqs.map((faq) => (
            <details
              key={faq.question}
              className="group p-5 bg-white border border-gray-200 rounded-xl open:border-blue-300"
            >
              <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-start justify-between gap-4">
                <span>{faq.question}</span>
                <span
                  aria-hidden="true"
                  className="text-blue-700 flex-shrink-0 transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-slate-700 leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-blue-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {servicesData.finalCta.headline}
          </h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            {servicesData.finalCta.body}
          </p>
          <Link
            href={servicesData.finalCta.primaryCta.href}
            onClick={() =>
              handleLinkClick(
                servicesData.finalCta.primaryCta.label,
                servicesData.finalCta.primaryCta.href,
                "services_final_cta",
              )
            }
            className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-700 text-white rounded-lg font-semibold text-lg hover:bg-blue-800 transition-colors"
          >
            {servicesData.finalCta.primaryCta.label}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="text-sm text-gray-500 mt-6">
            Or{" "}
            <Link
              href={servicesData.finalCta.secondaryCta.href}
              onClick={() =>
                handleLinkClick(
                  servicesData.finalCta.secondaryCta.label,
                  servicesData.finalCta.secondaryCta.href,
                  "services_final_cta_secondary",
                )
              }
              className="text-blue-700 hover:underline"
            >
              {servicesData.finalCta.secondaryCta.label}
            </Link>{" "}
            directly.
          </p>
        </div>
      </section>
    </div>
  );
}
