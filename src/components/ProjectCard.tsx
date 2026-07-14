import { Project } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }: { project: Project }) {
  const chips = project.tags?.length ? project.tags : project.techStack;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block overflow-hidden rounded-2xl border border-gray-200 bg-white hover:border-gray-300 hover:shadow-lg transition-all dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-zinc-700 dark:hover:bg-zinc-800/60"
    >
      {project.coverImage && (
        <div className="relative aspect-[2/1] overflow-hidden">
          <Image
            src={project.coverImage}
            alt={`${project.name} — ${project.type}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 pr-3">
            {chips.slice(0, 3).map((chip) => (
              <span
                key={chip}
                className="text-[11px] font-medium bg-black/50 text-white px-2.5 py-1 rounded-full backdrop-blur-sm ring-1 ring-white/20"
              >
                {chip}
              </span>
            ))}
          </div>
          {project.metric && (
            <div className="absolute bottom-3 right-3 rounded-lg bg-black/60 px-3 py-2 text-right backdrop-blur-sm ring-1 ring-white/20">
              <div className="text-lg font-bold leading-none text-blue-300">
                {project.metric.value}
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-wide text-gray-200">
                {project.metric.label}
              </div>
            </div>
          )}
        </div>
      )}
      <div className="p-6">
        <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2 uppercase tracking-wide">
          {project.type}
        </div>
        <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors dark:text-white dark:group-hover:text-blue-400">
          {project.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mt-2 mb-4 line-clamp-2 text-sm leading-relaxed">
          {project.shortDescription}
        </p>
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-400">
          View case study
          <span className="transition-transform group-hover:translate-x-1">
            &rarr;
          </span>
        </span>
      </div>
    </Link>
  );
}
