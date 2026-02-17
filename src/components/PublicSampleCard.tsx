"use client";

import { PublicSample } from "@/types";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { trackSampleClick } from "@/lib/analytics";

export default function PublicSampleCard({ sample }: { sample: PublicSample }) {
  const handleClick = () => {
    trackSampleClick(sample.title, sample.link);
  };

  return (
    <Link
      href={sample.link}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="group flex flex-col h-full border border-gray-100 rounded-lg p-6 hover:border-gray-200 hover:shadow-sm transition-all dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-zinc-700 dark:hover:bg-zinc-800/60 bg-white"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors dark:text-white dark:group-hover:text-blue-400">
          {sample.title}
        </h3>
        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors dark:text-gray-600 dark:group-hover:text-blue-400 flex-shrink-0 ml-4" />
      </div>
      <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed flex-grow">
        {sample.description}
      </p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {sample.technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md dark:bg-zinc-800 dark:text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </Link>
  );
}
