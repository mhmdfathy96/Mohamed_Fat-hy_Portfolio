import ProjectCard from "@/components/ProjectCard";
import projectsData from "@/data/projects.json";
import { Project } from "@/types";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return Object.values(projectsData.projects).map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = Object.values(projectsData.projects).find(
    (p) => p.slug === slug,
  ) as Project;

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.seo?.title || project.name,
    description: project.seo?.description || project.shortDescription,
  };
}

const linkLabels: Record<string, string> = {
  ios: "App Store",
  android: "Google Play",
  huawei: "Huawei AppGallery",
  web: "Web App",
  website: "Website",
  dashboard: "Live Dashboard",
  swagger: "API Docs",
};

function Fact({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-500">
        {label}
      </div>
      <div className="mt-1 text-sm font-medium text-gray-900 dark:text-gray-200">
        {value}
      </div>
    </div>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const allProjects = Object.values(projectsData.projects) as Project[];
  const project = allProjects.find((p) => p.slug === slug) as Project;

  if (!project) {
    notFound();
  }

  const index = allProjects.findIndex((p) => p.slug === slug);
  const related = [
    allProjects[(index + 1) % allProjects.length],
    allProjects[(index + 2) % allProjects.length],
  ];

  const gallery = project.gallery ?? [];
  const galleryIsPortrait =
    gallery.length > 0 && gallery[0].height > gallery[0].width;
  const galleryCols = galleryIsPortrait
    ? gallery.length === 3
      ? "grid-cols-2 md:grid-cols-3"
      : "grid-cols-2 md:grid-cols-4"
    : "grid-cols-1 md:grid-cols-2";

  return (
    <article className="py-20 md:py-32 max-w-5xl mx-auto px-6">
      <Link
        href="/projects"
        className="inline-block mb-8 text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors font-medium"
      >
        &larr; Back to Projects
      </Link>

      {/* 1. Header */}
      <header className="mb-10">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wide mr-2">
            {project.type}
          </span>
          {project.tags?.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full dark:bg-zinc-800 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          {project.name}
        </h1>
        {project.tagline && (
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
            {project.tagline}
          </p>
        )}
      </header>

      {/* 2. Hero image */}
      {project.heroImage && (
        <div className="relative aspect-[2.2/1] overflow-hidden rounded-2xl border border-gray-200 dark:border-zinc-800 mb-12">
          <Image
            src={project.heroImage}
            alt={`${project.name} — ${project.type}`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 976px"
            className="object-cover"
          />
        </div>
      )}

      {/* 3. Body: main content + quick facts */}
      <div className="grid gap-12 lg:grid-cols-[1fr_260px]">
        <div className="min-w-0">
          {/* Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {project.fullDescription || project.shortDescription}
            </p>
          </section>

          {/* Responsibilities */}
          {project.responsibilities && project.responsibilities.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Responsibilities</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400 leading-relaxed">
                {project.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Leadership (if applicable) */}
          {project.leadership && project.leadership.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">
                Leadership & Ownership
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400 leading-relaxed">
                {project.leadership.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Technical Challenges */}
          {project.technicalChallenges &&
            project.technicalChallenges.length > 0 && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">
                  Technical Challenges
                </h2>
                <div className="grid gap-6">
                  {project.technicalChallenges.map((challenge, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 dark:bg-zinc-900/50 p-6 rounded-xl border border-gray-100 dark:border-zinc-800"
                    >
                      {challenge.problem && (
                        <div className="mb-4">
                          <span className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400 block mb-1">
                            Problem
                          </span>
                          <p className="text-gray-700 dark:text-gray-300">
                            {challenge.problem}
                          </p>
                        </div>
                      )}
                      <div className="mb-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 block mb-1">
                          Solution
                        </span>
                        <p className="text-gray-700 dark:text-gray-300">
                          {challenge.solution}
                        </p>
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-green-600 dark:text-green-400 block mb-1">
                          Result
                        </span>
                        <p className="text-gray-700 dark:text-gray-300">
                          {challenge.result}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

          {/* Results & Impact */}
          {project.results && project.results.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Results & Impact</h2>
              <div className="grid grid-cols-2 gap-4">
                {project.results.map((result) => (
                  <div
                    key={result.label}
                    className="rounded-xl border border-gray-100 bg-gray-50 p-5 dark:border-zinc-800 dark:bg-zinc-900/50"
                  >
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {result.value}
                    </div>
                    <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                      {result.label}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Tech Stack */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 dark:bg-zinc-800 dark:border-zinc-700 dark:text-gray-300 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Gallery */}
          {gallery.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Gallery</h2>
              <div className={`grid gap-4 ${galleryCols}`}>
                {gallery.map((image) => (
                  <Image
                    key={image.src}
                    src={image.src}
                    alt={`${project.name} screenshot`}
                    width={image.width}
                    height={image.height}
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="w-full h-auto rounded-xl border border-gray-200 dark:border-zinc-800"
                  />
                ))}
              </div>
            </section>
          )}

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <section className="pt-12 border-t border-gray-100 dark:border-zinc-800">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Key Features
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {/* Quick facts sidebar */}
        <aside className="lg:sticky lg:top-24 h-fit rounded-2xl border border-gray-200 bg-gray-50 p-6 space-y-5 dark:border-zinc-800 dark:bg-zinc-900/50">
          <Fact label="Role" value={project.role} />
          <Fact label="Industry" value={project.industry} />
          <Fact label="Market" value={project.market} />
          <Fact label="Platforms" value={project.platforms.join(", ")} />
          {project.environments && project.environments.length > 0 && (
            <Fact
              label="Environments"
              value={project.environments.join(", ")}
            />
          )}
          {project.links && Object.keys(project.links).length > 0 && (
            <div className="pt-2 border-t border-gray-200 dark:border-zinc-800 space-y-2">
              {Object.entries(project.links).map(([key, url]) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-4 py-2 bg-gray-900 text-white rounded-md text-sm font-medium hover:bg-gray-700 transition-colors dark:bg-white dark:text-black dark:hover:bg-gray-200"
                >
                  {linkLabels[key] ?? `View on ${key}`}
                </a>
              ))}
            </div>
          )}
        </aside>
      </div>

      {/* More projects */}
      <section className="mt-16 pt-12 border-t border-gray-100 dark:border-zinc-800">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-2xl font-bold">More Projects</h2>
          <Link
            href="/projects"
            className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white font-medium text-sm"
          >
            View all projects &rarr;
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {related.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
    </article>
  );
}
