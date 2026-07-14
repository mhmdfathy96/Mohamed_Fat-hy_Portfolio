"use client";

import ProjectCard from "@/components/ProjectCard";
import { Project } from "@/types";
import { useMemo, useState } from "react";

export default function ProjectsExplorer({
  projects,
}: {
  projects: Project[];
}) {
  const [active, setActive] = useState("All");

  const filters = useMemo(() => {
    const industries = Array.from(
      new Set(projects.map((p) => p.industry).filter(Boolean)),
    ) as string[];
    return ["All", ...industries];
  }, [projects]);

  const visible =
    active === "All"
      ? projects
      : projects.filter((p) => p.industry === active);

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-10">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActive(filter)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
              active === filter
                ? "bg-blue-600 border-blue-600 text-white"
                : "bg-white border-gray-200 text-gray-700 hover:border-gray-300 dark:bg-zinc-900 dark:border-zinc-700 dark:text-gray-300 dark:hover:border-zinc-500"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
}
