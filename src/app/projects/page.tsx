import ProjectCard from "@/components/ProjectCard";
import projectsData from "@/data/projects.json";
import { Project } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Projects",
  description:
    "A comprehensive list of software engineering projects including mobile apps and backend systems.",
};

export default function ProjectsPage() {
  const allProjects = Object.values(projectsData.projects) as Project[];

  return (
    <section className="py-20 md:py-32 max-w-5xl mx-auto px-6">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          All Projects
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
          A comprehensive list of my work in mobile and backend engineering.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {allProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
