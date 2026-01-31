import projectsData from "@/data/projects.json";
import { Project } from "@/types";
import { Metadata } from "next";
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

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = Object.values(projectsData.projects).find(
    (p) => p.slug === slug,
  ) as Project;

  if (!project) {
    notFound();
  }

  return (
    <article className="py-20 md:py-32 max-w-4xl mx-auto px-6">
      <Link
        href="/projects"
        className="inline-block mb-8 text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors font-medium"
      >
        &larr; Back to Projects
      </Link>

      {/* 1. Project Header */}
      <header className="mb-12">
        <div className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-3 uppercase tracking-wide">
          {project.type}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          {project.name}
        </h1>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
          <span>
            <strong className="text-black dark:text-white">Market:</strong>{" "}
            {project.market}
          </span>
          <span>
            <strong className="text-black dark:text-white">Platforms:</strong>{" "}
            {project.platforms.join(", ")}
          </span>
        </div>

        <div className="flex flex-wrap gap-4 mb-8">
          {project.links &&
            Object.entries(project.links).map(([key, url]) => (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-gray-900 text-white rounded-md font-medium hover:bg-gray-700 transition-colors capitalize dark:bg-white dark:text-black dark:hover:bg-gray-200"
              >
                View on {key}
              </a>
            ))}
        </div>
      </header>

      <hr className="my-10 border-gray-100 dark:border-zinc-800" />

      {/* 2. Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          {project.fullDescription || project.shortDescription}
        </p>
      </section>

      {/* 3. My Role */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">My Role</h2>
        <p className="text-lg font-medium text-gray-900 dark:text-white">
          {project.role}
        </p>
      </section>

      {/* 4. Responsibilities */}
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
          <h2 className="text-2xl font-bold mb-4">Leadership & Ownership</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400 leading-relaxed">
            {project.leadership.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {/* 5. Technical Challenges */}
      {project.technicalChallenges &&
        project.technicalChallenges.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Technical Challenges</h2>
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

      {/* 6. Tech Stack */}
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

      {/* Legacy Features Section (Optional, kept if needed but not in prompt requirement, hiding it to adhere strictly to new structure or keeping it as bonus? Prompt says "Follow existing component patterns" but "Only extend content and routing". The prompt list 6 specific sections. I will keep it at the end just in case since content > less content, but put it after tech stack.)*/}
      {project.features && project.features.length > 0 && (
        <section className="mt-12 pt-12 border-t border-gray-100 dark:border-zinc-800">
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
    </article>
  );
}
