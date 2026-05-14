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
    <div className="bg-white dark:bg-black">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-zinc-900 dark:via-black dark:to-indigo-950/20">
        <div className="max-w-5xl mx-auto px-6 py-28 md:py-36 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
            {servicesData.hero.headline}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
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
              className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
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
              className="px-8 py-4 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-zinc-700 rounded-lg font-semibold text-lg hover:border-indigo-600 dark:hover:border-indigo-500 hover:shadow-lg transition-all duration-300"
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
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          {servicesData.intro.body}
        </p>
      </section>

      {/* OUTCOMES GRID */}
      <section className="py-20 bg-gray-50 dark:bg-zinc-900/30 border-y border-gray-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.outcomes.map((outcome, index) => {
              const Icon = ICON_MAP[outcome.icon] || Rocket;
              return (
                <div
                  key={index}
                  className="relative p-6 bg-white dark:bg-zinc-900 border-2 border-gray-200 dark:border-zinc-800 rounded-2xl hover:border-indigo-500 dark:hover:border-indigo-600 hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  <div className="inline-flex p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg w-fit mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                    {outcome.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed flex-1">
                    {outcome.description}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-5 italic">
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
                    className="inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 font-semibold hover:gap-2 transition-all"
                  >
                    {outcome.cta.label} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

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
                <div className="p-5 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl h-full">
                  <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-full font-bold text-sm mb-3">
                    {index + 1}
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                    {step.label}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOT FOR */}
      <section className="py-20 bg-gray-50 dark:bg-zinc-900/30 border-y border-gray-200 dark:border-zinc-800">
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
                className="flex items-start gap-3 p-4 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl"
              >
                <XCircle className="w-5 h-5 text-gray-400 dark:text-gray-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-zinc-900 dark:via-black dark:to-indigo-950/20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {servicesData.finalCta.headline}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
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
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            {servicesData.finalCta.primaryCta.label}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-6">
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
              className="text-indigo-600 dark:text-indigo-400 hover:underline"
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
