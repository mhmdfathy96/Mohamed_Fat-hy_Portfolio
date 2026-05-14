"use client";

import { useEffect } from "react";
import Link from "next/link";
import CareerTimeline from "@/components/CareerTimeline";
import PublicSampleCard from "@/components/PublicSampleCard";
import profile from "@/data/profile.json";
import skillsData from "@/data/skills.json";
import publicSamplesData from "@/data/public_samples.json";
import careerTimelineData from "@/data/career_timeline.json";
import { SkillCategory, PublicSample, CareerEntry } from "@/types";
import { trackPageView, trackLinkClick } from "@/lib/analytics";

export default function About() {
  useEffect(() => {
    trackPageView("about");
  }, []);

  const handleBuildMvpClick = () => {
    trackLinkClick("Build Your MVP", "/build-with-me", "about_final_cta");
  };

  const handleServicesClick = () => {
    trackLinkClick("See Services", "/services", "about_final_cta");
  };

  const handleDownloadCVClick = () => {
    trackLinkClick("Download CV", profile.cv, "about_header");
  };

  const skillsCategories =
    (skillsData as unknown as { categories: SkillCategory[] }).categories || [];
  const publicSamples = publicSamplesData.samples as PublicSample[];
  const careerEntries = careerTimelineData.entries as CareerEntry[];

  return (
    <div className="bg-white dark:bg-black">
      {/* Page Header */}
      <section className="py-20 md:py-28 max-w-5xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          About {profile.name.split(" ")[0]}
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed mb-6">
          Background, career, skills, and code samples — everything beyond the pitch.
        </p>
        {profile.professionalSummary && (
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-4xl leading-relaxed mb-8">
            {profile.professionalSummary}
          </p>
        )}
        <a
          href={profile.cv}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleDownloadCVClick}
          className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-md font-medium hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
        >
          Download CV
        </a>
      </section>

      {/* About Me */}
      <section className="py-20 bg-gray-50 dark:bg-zinc-900/30 border-y border-gray-100 dark:border-zinc-800">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">About Me</h2>
          <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed text-lg space-y-4">
            {(profile.about || []).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Career Journey */}
      <section className="py-20 max-w-5xl mx-auto px-6" id="career">
        <div className="mb-10">
          <h2 className="text-3xl font-bold">Career Journey</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            5+ years of building across mobile, backend, and full-stack — from freelance roots to production systems at scale.
          </p>
        </div>
        <CareerTimeline entries={careerEntries} />
      </section>

      {/* Skills */}
      <section className="py-20 bg-gray-50 dark:bg-zinc-900/30 border-y border-gray-100 dark:border-zinc-800">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">Technical Skills</h2>
          <div className="space-y-10">
            {skillsCategories.map((category: SkillCategory, index: number) => (
              <div key={index}>
                <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white border-b border-gray-200 dark:border-zinc-700 pb-2 inline-block">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill: string) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 dark:bg-zinc-800 dark:border-zinc-700 dark:text-gray-300 shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Public Code Samples */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">Public Code Samples</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-2xl text-lg leading-relaxed">
          Most of my professional work exists within private production systems.
          Below are small public repositories created to demonstrate my
          technical skills across different technologies.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publicSamples.map((sample, index) => (
            <PublicSampleCard key={index} sample={sample} />
          ))}
        </div>
      </section>

      {/* Soft CTA back to commercial pages */}
      <section className="py-20 bg-gray-50 dark:bg-zinc-900/30 border-y border-gray-100 dark:border-zinc-800">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Have a project in mind?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            If you&apos;re here scouting for someone to build with, the commercial pages are the right next step.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/build-with-me"
              onClick={handleBuildMvpClick}
              className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-md font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Build Your MVP
            </Link>
            <Link
              href="/services"
              onClick={handleServicesClick}
              className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-md font-medium hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
            >
              See Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
