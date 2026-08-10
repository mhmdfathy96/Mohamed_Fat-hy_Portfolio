"use client";

import ProjectCard from "@/components/ProjectCard";
import { Project } from "@/types";
import { useMemo, useState } from "react";

/**
 * Cross-cutting capabilities. These are not verticals — a project has one
 * industry but can carry any of these on top of it, so they filter on tags
 * rather than on `industry`.
 */
const CAPABILITY_TAGS = ["AI"];

type Filter =
  | { kind: "all" }
  | { kind: "capability"; value: string }
  | { kind: "industry"; value: string };

const isSame = (a: Filter, b: Filter) =>
  a.kind === b.kind && (a.kind === "all" || a.value === (b as { value: string }).value);

export default function ProjectsExplorer({
  projects,
}: {
  projects: Project[];
}) {
  const [active, setActive] = useState<Filter>({ kind: "all" });

  const { capabilities, industries } = useMemo(() => {
    const present = new Set(
      projects.flatMap((p) => p.tags ?? []).map((tag) => tag.toLowerCase()),
    );
    return {
      capabilities: CAPABILITY_TAGS.filter((tag) =>
        present.has(tag.toLowerCase()),
      ),
      industries: Array.from(
        new Set(projects.map((p) => p.industry).filter(Boolean)),
      ) as string[],
    };
  }, [projects]);

  const visible = projects.filter((project) => {
    if (active.kind === "all") return true;
    if (active.kind === "industry") return project.industry === active.value;
    return (project.tags ?? []).some(
      (tag) => tag.toLowerCase() === active.value.toLowerCase(),
    );
  });

  const pill = (filter: Filter, label: string) => (
    <button
      key={`${filter.kind}:${label}`}
      onClick={() => setActive(filter)}
      className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
        isSame(active, filter)
          ? "bg-blue-600 border-blue-600 text-white"
          : "bg-white border-gray-200 text-gray-700 hover:border-gray-300"
      }`}
    >
      {label}
    </button>
  );

  return (
    <>
      <div className="flex flex-wrap items-center gap-2 mb-10">
        {pill({ kind: "all" }, "All")}

        {capabilities.map((tag) => pill({ kind: "capability", value: tag }, tag))}

        {capabilities.length > 0 && (
          <span aria-hidden className="w-px h-5 bg-gray-200 mx-1" />
        )}

        {industries.map((industry) =>
          pill({ kind: "industry", value: industry }, industry),
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
}
