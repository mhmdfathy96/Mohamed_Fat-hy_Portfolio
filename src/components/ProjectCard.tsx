import { Project } from "@/types";
import Link from "next/link";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block border border-gray-100 rounded-lg p-6 hover:border-gray-200 hover:shadow-sm transition-all dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-zinc-700 dark:hover:bg-zinc-800/60 bg-white"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2 uppercase tracking-wide">
            {project.type}
          </div>
          <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors dark:text-white dark:group-hover:text-blue-400">
            {project.name}
          </h3>
        </div>
        <span className="text-gray-400 group-hover:text-blue-600 transition-colors dark:text-gray-600 dark:group-hover:text-blue-400 text-lg">
          ↗
        </span>
      </div>
      <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2 text-sm leading-relaxed">
        {project.shortDescription}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.techStack.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md dark:bg-zinc-800 dark:text-gray-300"
          >
            {tech}
          </span>
        ))}
        {project.techStack.length > 3 && (
          <span className="text-xs text-gray-500 py-1 px-1">
            +{project.techStack.length - 3}
          </span>
        )}
      </div>
    </Link>
  );
}
