"use client";

import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import TechnicalHighlightCard from "@/components/TechnicalHighlightCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import projectsData from "@/data/projects.json";
import highlightsData from "@/data/highlights.json";
import testimonialsData from "@/data/testimonials.json";
import bwmPricing from "@/data/build_with_me_pricing.json";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Testimonial } from "@/types";
import { trackLinkClick } from "@/lib/analytics";

export default function Home() {
  const handleViewAllProjectsClick = () => {
    trackLinkClick(
      "View all projects",
      "/projects",
      "featured_projects_section",
    );
  };

  const handleMvpDetailsClick = () => {
    trackLinkClick("See the full MVP playbook", "/build-with-me", "home_mvp_offer");
  };

  const handleBookCallClick = () => {
    trackLinkClick("Book a Call", "/contact#book", "home_final_cta");
  };

  const handleViewAllHighlightsClick = () => {
    trackLinkClick("View all highlights", "/highlights", "highlights_section");
  };

  const featured = projectsData.featured.map(
    (slug) => projectsData.projects[slug as keyof typeof projectsData.projects],
  );

  const testimonials = testimonialsData.testimonials as Testimonial[];

  return (
    <>
      <Hero />

      {/* Featured Projects */}
      <section className="py-20 bg-gray-50 dark:bg-zinc-900/30 border-y border-gray-100 dark:border-zinc-800" id="projects">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex justify-between items-end mb-10">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <Link
              href="/projects"
              onClick={handleViewAllProjectsClick}
              className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white font-medium text-sm"
            >
              View all projects &rarr;
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* MVP Offer Snapshot */}
      <section className="py-20 max-w-5xl mx-auto px-6" id="mvp-offer">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ship Your MVP in 6–8 Weeks
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            One accountable lead. Mobile + backend under one roof. Production-ready, milestone-based, no internal team needed.
          </p>
          {bwmPricing.show && (
            <p className="text-base text-gray-600 dark:text-gray-400 mt-3">
              {bwmPricing.label}{" "}
              <span className="font-bold text-gray-900 dark:text-white">
                {bwmPricing.amount}
              </span>
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Phase 1 card */}
          <div className="p-6 bg-white dark:bg-zinc-900 border-2 border-gray-200 dark:border-zinc-800 rounded-2xl hover:border-indigo-500 dark:hover:border-indigo-600 transition-all duration-300">
            <h3 className="text-xl font-bold mb-2">Phase 1 — MVP Foundation</h3>
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">6–8 weeks · milestone-based</p>
            <ul className="space-y-2 mb-2">
              {[
                "Core feature implementation",
                "Scalable backend foundation",
                "Production-ready release",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-700 dark:text-gray-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Phase 2 card */}
          <div className="p-6 bg-white dark:bg-zinc-900 border-2 border-gray-200 dark:border-zinc-800 rounded-2xl hover:border-purple-500 dark:hover:border-purple-600 transition-all duration-300">
            <h3 className="text-xl font-bold mb-2">Phase 2 — Growth & Scale</h3>
            <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">8–12+ weeks · custom</p>
            <ul className="space-y-2 mb-2">
              {[
                "Subscriptions & payments",
                "Performance & scaling",
                "Long-term technical planning",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-700 dark:text-gray-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/build-with-me"
            onClick={handleMvpDetailsClick}
            className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-md font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            See the full MVP playbook
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Technical Highlights */}
      <section className="py-20 bg-gray-50 dark:bg-zinc-900/30 border-y border-gray-100 dark:border-zinc-800">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold">Technical Highlights</h2>
              <p className="text-gray-500 mt-2">
                Key technical challenges and solutions.
              </p>
            </div>
            <Link
              href="/highlights"
              onClick={handleViewAllHighlightsClick}
              className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white font-medium text-sm"
            >
              View all highlights &rarr;
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {highlightsData.highlights
              .filter((highlight) => highlight.featured)
              .slice(0, 2)
              .map((highlight) => (
                <TechnicalHighlightCard
                  key={highlight.id}
                  highlight={highlight}
                />
              ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10">Testimonials</h2>
        <div className="w-full">
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="py-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-zinc-900 dark:via-black dark:to-indigo-950/20 border-t border-gray-200 dark:border-zinc-800"
        id="contact"
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to ship your MVP?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
            Book a free 20-minute MVP scoping call — leave with a clear next step, with or without working together.
          </p>
          <Link
            href="/contact#book"
            onClick={handleBookCallClick}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Book a Free MVP Strategy Session
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
