"use client";

import profile from "@/data/profile.json";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { trackButtonClick } from "@/lib/analytics";

export default function Hero() {
  const handleBuildMvpClick = () => {
    trackButtonClick("Build Your MVP", "hero");
  };

  const handleViewProjectsClick = () => {
    trackButtonClick("See Projects", "hero");
  };

  const handleServicesClick = () => {
    trackButtonClick("Services", "hero");
  };

  return (
    <section className="py-20 md:py-32 max-w-5xl mx-auto px-6">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
        {profile.name}
      </h1>
      <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium mb-8">
        {profile.title}
        <span className="text-gray-400 dark:text-gray-600 mx-2">·</span>
        <span className="text-gray-500">{profile.subtitle}</span>
      </h2>
      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mb-8 leading-relaxed">
        {profile.summary}
      </p>
      <ul className="space-y-2 mb-10 max-w-3xl">
        {profile.trustSignals.map((signal, index) => (
          <li
            key={index}
            className="flex items-start gap-2.5 text-base md:text-lg text-gray-700 dark:text-gray-300"
          >
            <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-1 flex-shrink-0" />
            <span>{signal}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-3 sm:gap-4">
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
          className="px-6 py-3 bg-black text-white rounded-md font-medium hover:bg-gray-800 transition-colors dark:bg-white dark:text-black dark:hover:bg-gray-200"
        >
          Services
        </Link>
        <Link
          href="/projects"
          onClick={handleViewProjectsClick}
          className="px-6 py-3 border border-gray-300 rounded-md font-medium hover:bg-gray-50 transition-colors dark:border-gray-700 dark:hover:bg-zinc-800"
        >
          See Projects
        </Link>
      </div>
    </section>
  );
}
