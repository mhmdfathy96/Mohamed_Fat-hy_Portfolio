"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  trackPageView,
  trackCTAClick,
  trackScrollDepth,
  trackLinkClick,
} from "@/lib/analytics";
import { CheckCircle2, Users, Zap, Target, ArrowRight, Send } from "lucide-react";
import testimonialsData from "@/data/testimonials.json";
import bwmTestimonials from "@/data/build_with_me_testimonials.json";
import bwmPricing from "@/data/build_with_me_pricing.json";
import bwmFaq from "@/data/build_with_me_faq.json";
import bwmStats from "@/data/build_with_me_stats.json";
import bwmAgenda from "@/data/build_with_me_agenda.json";
import contactChannels from "@/data/contact_channels.json";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { Testimonial } from "@/types";

export default function BuildWithMe() {
  const [scrollDepthTracked, setScrollDepthTracked] = useState<Set<number>>(
    new Set(),
  );

  const featuredTestimonials = (bwmTestimonials.featuredIndices || [])
    .map((i) => (testimonialsData.testimonials as Testimonial[])[i])
    .filter(Boolean);

  useEffect(() => {
    trackPageView("build-with-me");

    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const percentage = Math.round((scrolled / scrollHeight) * 100);

      [25, 50, 75, 100].forEach((depth) => {
        if (percentage >= depth && !scrollDepthTracked.has(depth)) {
          trackScrollDepth(depth);
          setScrollDepthTracked((prev) => new Set(prev).add(depth));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollDepthTracked]);

  const handleCTAClick = (ctaName: string, location: string) => {
    trackCTAClick(ctaName, location);
  };

  const scrollToPhases = () => {
    handleCTAClick("view_phases", "hero_secondary");
    document.getElementById("phases")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white dark:bg-black">
      {/* SECTION 1 - HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-zinc-900 dark:via-black dark:to-indigo-950/20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-5xl mx-auto px-6 py-32 md:py-40 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
              Launch Your SaaS MVP Without Building an Internal Team
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              I help founders turn validated ideas into production-ready
              products — combining mobile, backend, and scalable architecture
              under one accountable lead.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact#book"
                onClick={() => handleCTAClick("book_strategy_session", "hero_primary")}
                className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                Book a Free MVP Strategy Session
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button
                onClick={scrollToPhases}
                className="px-8 py-4 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-zinc-700 rounded-lg font-semibold text-lg hover:border-indigo-600 dark:hover:border-indigo-500 hover:shadow-lg transition-all duration-300"
              >
                View Phases
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-black to-transparent"></div>
      </section>

      {/* SECTION 2 - THE PROBLEM */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Most SaaS Projects Stall
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            "Hiring developers takes months.",
            "Agencies overscope and inflate budgets.",
            "Freelancers lack architectural ownership.",
            "Managing multiple roles slows momentum.",
          ].map((problem, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-zinc-900 dark:to-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl hover:shadow-lg transition-shadow"
            >
              <p className="text-lg text-gray-700 dark:text-gray-300">
                {problem}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Founders need focused execution and accountability.
          </p>
        </div>
      </section>

      {/* SECTION 3 - THE SOLUTION */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-zinc-900/50 dark:via-indigo-950/20 dark:to-purple-950/20 border-y border-gray-200 dark:border-zinc-800">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              A Lean Product Execution Model
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Instead of hiring and coordinating a full internal team, you work
              directly with a senior engineer who:
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Target,
                text: "Designs scalable architecture from day one",
              },
              {
                icon: Zap,
                text: "Owns both mobile and backend delivery",
              },
              {
                icon: CheckCircle2,
                text: "Ensures production-ready deployment",
              },
              {
                icon: Users,
                text: "Integrates additional specialists (UI/UX, QA, DevOps) when required",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border border-gray-200 dark:border-zinc-700 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 flex-1">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 - OWNERSHIP & TEAM CAPABILITY (moved earlier to answer the "you're one person?" objection before phases) */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            One Accountable Lead — Not a Fragmented Team
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I personally lead architecture and execution. When a project needs
              more hands, I bring in vetted specialists I&apos;ve worked with
              before:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "UI/UX Designers",
                "QA Engineers",
                "DevOps Specialists",
                "Additional Developers",
              ].map((specialist, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
                  <span className="text-lg text-gray-700 dark:text-gray-300">
                    {specialist}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-xl font-semibold text-gray-900 dark:text-white">
              You get the speed of a freelancer and the coverage of a team — with
              one person owning the outcome.
            </p>
          </div>

          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-[320px] md:max-w-[380px]">
              <Image
                src="/assets/personal-image.png"
                alt="Mohamed Fat-hy"
                width={380}
                height={380}
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 - ENGAGEMENT PHASES (with pricing anchor) */}
      <section id="phases" className="py-20 bg-gray-50 dark:bg-zinc-900/30 border-y border-gray-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Engagement Phases
            </h2>
            {bwmPricing.show && (
              <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">
                {bwmPricing.label}{" "}
                <span className="font-bold text-gray-900 dark:text-white">
                  {bwmPricing.amount}
                </span>{" "}
                — {bwmPricing.phase}
              </p>
            )}
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Phase 1 - MVP Foundation */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative p-8 bg-white dark:bg-zinc-900 border-2 border-gray-200 dark:border-zinc-800 rounded-2xl hover:border-indigo-500 dark:hover:border-indigo-600 transition-all duration-300">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">
                    Phase 1 — MVP Foundation
                  </h3>
                </div>
                <div className="mb-6">
                  <ul className="space-y-3">
                    {[
                      "Core feature implementation",
                      "Scalable backend foundation",
                      "Admin dashboard (if required)",
                      "Automated deployment pipeline",
                      "Production-ready release",
                      "Technical roadmap for next stage",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-gray-200 dark:border-zinc-800 pt-6 space-y-2">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <span className="font-semibold">Timeline:</span> 6–8 weeks
                  </p>
                  {bwmPricing.show && (
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <span className="font-semibold">Investment:</span>{" "}
                      {bwmPricing.label.toLowerCase()} {bwmPricing.amount}
                    </p>
                  )}
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Milestone-based engagement.
                  </p>
                </div>
              </div>
            </div>

            {/* Phase 2 - Growth & Scale */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative p-8 bg-white dark:bg-zinc-900 border-2 border-gray-200 dark:border-zinc-800 rounded-2xl hover:border-purple-500 dark:hover:border-purple-600 transition-all duration-300">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">
                    Phase 2 — Growth & Scale
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Includes everything in Phase 1, plus:
                  </p>
                </div>
                <div className="mb-6">
                  <ul className="space-y-3">
                    {[
                      "Subscription & payment architecture",
                      "Advanced business logic & automation workflows",
                      "Performance optimization",
                      "Infrastructure scaling strategy",
                      "Security reinforcement",
                      "Long-term technical planning",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-gray-200 dark:border-zinc-800 pt-6 space-y-2">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <span className="font-semibold">Timeline:</span> 8–12+ weeks
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Custom engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {bwmPricing.show && bwmPricing.footnote && (
            <p className="text-center text-sm text-gray-500 dark:text-gray-500 mt-8">
              {bwmPricing.footnote}
            </p>
          )}
        </div>
      </section>

      {/* SECTION 6 - STATS / PROOF */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {bwmStats.stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 border border-gray-200 dark:border-zinc-800 rounded-xl bg-white dark:bg-zinc-900"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7 - TESTIMONIALS (full-width carousel, auto-rotates, pauses on hover) */}
      {featuredTestimonials.length > 0 && (
        <section className="py-20 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 dark:from-zinc-900/50 dark:via-black dark:to-indigo-950/10 border-y border-gray-200 dark:border-zinc-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Founders Who&apos;ve Worked With Me
              </h2>
            </div>
            <TestimonialCarousel testimonials={featuredTestimonials} />
          </div>
        </section>
      )}

      {/* SECTION 8 - FAQ */}
      <section className="py-20 max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-4">
          {bwmFaq.faqs.map((item, index) => (
            <details
              key={index}
              className="group p-6 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors"
            >
              <summary className="flex justify-between items-center cursor-pointer font-semibold text-lg text-gray-900 dark:text-white list-none">
                <span>{item.question}</span>
                <span className="text-indigo-600 dark:text-indigo-400 group-open:rotate-45 transition-transform text-2xl leading-none">
                  +
                </span>
              </summary>
              <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* SECTION 9 - FINAL CTA (all paths lead to /contact hub) */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-zinc-900 dark:via-black dark:to-indigo-950/20 border-t border-gray-200 dark:border-zinc-800">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let&apos;s Clarify Your MVP Scope
          </h2>

          <div className="inline-block text-left bg-white/70 dark:bg-zinc-900/70 backdrop-blur-sm border border-gray-200 dark:border-zinc-800 rounded-xl p-6 max-w-xl mb-10">
            <p className="font-semibold text-gray-900 dark:text-white mb-3">
              {bwmAgenda.title}
            </p>
            <ul className="space-y-2 mb-3">
              {bwmAgenda.bullets.map((b, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-0.5 flex-shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-500 dark:text-gray-500 italic">
              {bwmAgenda.footnote}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact#book"
              onClick={() =>
                trackLinkClick("Book a Call", "/contact#book", "build_with_me_final_cta")
              }
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Book a Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact#form"
              onClick={() =>
                trackLinkClick("Send a Brief", "/contact#form", "build_with_me_final_cta")
              }
              className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-zinc-700 rounded-lg font-semibold text-lg hover:border-indigo-600 dark:hover:border-indigo-500 hover:shadow-lg transition-all duration-300"
            >
              <Send className="w-5 h-5" />
              Send a Brief
            </Link>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-500 mt-6">
            {contactChannels.responseSLA}
          </p>
        </div>
      </section>
    </div>
  );
}
