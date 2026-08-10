import type { MetadataRoute } from "next";
import profile from "@/data/profile.json";
import projectsData from "@/data/projects.json";

/** Works under `output: "export"` — emitted as a static sitemap.xml at build. */
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const site = profile.siteUrl;
  const now = new Date();

  const pages = ["", "/services", "/projects", "/highlights", "/about", "/contact"];

  const projects = Object.values(projectsData.projects).map((project) => ({
    url: `${site}/projects/${project.slug}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [
    ...pages.map((path) => ({
      url: `${site}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...projects,
  ];
}
