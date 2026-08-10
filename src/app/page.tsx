"use client";

import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import TechnicalHighlightCard from "@/components/TechnicalHighlightCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import projectsData from "@/data/projects.json";
import highlightsData from "@/data/highlights.json";
import testimonialsData from "@/data/testimonials.json";
import PackagesSection from "@/components/PackagesSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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

  const handlePackagesCtaClick = () => {
    trackLinkClick("See how working together goes", "/services", "home_packages");
  };

  const handleBookCallClick = () => {
    trackLinkClick("Book a free call", "/contact#book", "home_final_cta");
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
      <section className="py-20 bg-gray-50 border-y border-gray-100" id="projects">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex justify-between items-end mb-10">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <Link
              href="/projects"
              onClick={handleViewAllProjectsClick}
              className="text-gray-600 hover:text-black font-medium text-sm"
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

      <PackagesSection onCtaClick={handlePackagesCtaClick} />

      {/* Technical Highlights */}
      <section className="py-20 bg-gray-50 border-y border-gray-100">
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
              className="text-gray-600 hover:text-black font-medium text-sm"
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
        className="py-24 bg-blue-50 border-t border-gray-200"
        id="contact"
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Tell me what you want to build.
          </h2>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            A free 20-minute call. Describe the idea in your own words — you
            leave with a clear next step, whether or not we work together.
          </p>
          <Link
            href="/contact#book"
            onClick={handleBookCallClick}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-700 text-white rounded-lg font-semibold text-lg hover:bg-blue-800 transition-colors"
          >
            Book a free call
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
