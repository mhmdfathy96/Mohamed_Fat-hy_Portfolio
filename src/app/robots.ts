import type { MetadataRoute } from "next";
import profile from "@/data/profile.json";

/** Works under `output: "export"` — emitted as a static robots.txt at build. */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    // AI crawlers are explicitly welcome: prospects increasingly ask an
    // assistant about a contractor before they ever open the site.
    rules: [{ userAgent: "*", allow: "/", disallow: "/build-with-me" }],
    sitemap: `${profile.siteUrl}/sitemap.xml`,
    host: profile.siteUrl,
  };
}
