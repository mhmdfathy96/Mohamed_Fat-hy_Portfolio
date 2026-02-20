"use client";

import profile from "@/data/profile.json";
import Link from "next/link";
import { trackButtonClick, trackLinkClick } from "@/lib/analytics";

export default function Hero() {
  const handleViewProjectsClick = () => {
    trackButtonClick("View Projects", "hero");
  };

  const handleDownloadCVClick = () => {
    trackLinkClick("Download CV", profile.cv, "hero");
  };

  return (
    <section className="py-20 md:py-32 max-w-5xl mx-auto px-6">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
        {profile.name}
      </h1>
      <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium mb-6">
        {profile.title} |{" "}
        <span className="text-gray-500">{profile.subtitle}</span>
      </h2>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mb-8 leading-relaxed">
        {profile.summary}
      </p>
      <div className="flex gap-4">
        <Link
          href="/projects"
          onClick={handleViewProjectsClick}
          className="px-6 py-3 bg-black text-white rounded-md font-medium hover:bg-gray-800 transition-colors dark:bg-white dark:text-black dark:hover:bg-gray-200"
        >
          View Projects
        </Link>
        <a
          href={profile.cv}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleDownloadCVClick}
          className="px-6 py-3 border border-gray-300 rounded-md font-medium hover:bg-gray-50 transition-colors dark:border-gray-700 dark:hover:bg-zinc-800"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}
