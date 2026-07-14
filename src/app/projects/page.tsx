import ProjectsExplorer from "@/components/ProjectsExplorer";
import projectsData from "@/data/projects.json";
import { Project } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Projects",
  description:
    "A comprehensive list of software engineering projects including mobile apps and backend systems.",
};

const stats = [
  { value: "8+", label: "Projects Delivered" },
  { value: "70K+", label: "App Downloads" },
  { value: "7", label: "Industries" },
];

export default function ProjectsPage() {
  const allProjects = Object.values(projectsData.projects) as Project[];

  return (
    <section className="relative py-20 md:py-32">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[28rem] -z-10 bg-[radial-gradient(circle,rgba(0,0,0,0.08)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(to_bottom,black,transparent)] dark:bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)]"
      />
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-3 uppercase tracking-[0.2em]">
            Case Studies
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            All Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
            Production apps shipped across mobile and backend — explore the
            work behind the numbers.
          </p>

          <div className="mt-8 flex flex-wrap gap-10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <ProjectsExplorer projects={allProjects} />
      </div>
    </section>
  );
}
