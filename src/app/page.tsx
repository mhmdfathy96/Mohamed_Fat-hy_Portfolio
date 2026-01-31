import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import TechnicalHighlightCard from "@/components/TechnicalHighlightCard";
import profile from "@/data/profile.json";
import projectsData from "@/data/projects.json";
import highlightsData from "@/data/highlights.json";
import companiesData from "@/data/companies.json";
import skillsData from "@/data/skills.json";
import publicSamplesData from "@/data/public_samples.json";
import testimonialsData from "@/data/testimonials.json";
import PublicSampleCard from "@/components/PublicSampleCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import Link from "next/link";
import { SkillCategory, PublicSample, Testimonial } from "@/types";

export default function Home() {
  const featured = projectsData.featured.map(
    (slug) => projectsData.projects[slug as keyof typeof projectsData.projects],
  );

  const skillsCategories =
    (skillsData as unknown as { categories: SkillCategory[] }).categories || [];

  const publicSamples = publicSamplesData.samples as PublicSample[];
  const testimonials = testimonialsData.testimonials as Testimonial[];

  return (
    <>
      <Hero />

      {/* About Section */}
      <section className="py-20 bg-gray-50 dark:bg-zinc-900/30 border-y border-gray-100 dark:border-zinc-800">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">About Me</h2>
          <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 leading-relaxed text-lg space-y-4">
            {(profile.about || []).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 max-w-5xl mx-auto px-6" id="projects">
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <Link
            href="/projects"
            className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white font-medium text-sm"
          >
            View all projects &rarr;
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* Technical Highlights - Horizontal Carousel */}
      <section className="py-20 bg-gray-50 dark:bg-zinc-900/30 border-y border-gray-100 dark:border-zinc-800">
        <div className="max-w-full overflow-hidden">
          <div className="max-w-5xl mx-auto px-6 mb-10">
            <h2 className="text-3xl font-bold">Technical Highlights</h2>
            <p className="text-gray-500 mt-2">
              Key technical challenges and solutions.
            </p>
          </div>

          <div className="flex overflow-x-auto gap-6 px-6 pb-8 snap-x snap-mandatory max-w-7xl mx-auto scrollbar-hide">
            {highlightsData.highlights.map((highlight, index) => (
              <div
                key={index}
                className="min-w-[350px] md:min-w-[400px] snap-center"
              >
                <TechnicalHighlightCard highlight={highlight} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10">
          Companies I&apos;ve Worked With
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {companiesData.companies.map((company, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg"
            >
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-lg">{company.name}</h3>
              </div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mt-2">
                {company.role}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {company.start} – {company.end}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 bg-gray-50 dark:bg-zinc-900/30 border-y border-gray-100 dark:border-zinc-800">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">Technical Skills</h2>
          <div className="space-y-10">
            {skillsCategories.map((category: SkillCategory, index: number) => (
              <div key={index}>
                <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white border-b border-gray-200 dark:border-zinc-700 pb-2 inline-block">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill: string) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 dark:bg-zinc-800 dark:border-zinc-700 dark:text-gray-300 shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Public Code Samples */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">Public Code Samples</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-2xl text-lg leading-relaxed">
          Most of my professional work exists within private production systems.
          Below are small public repositories created to demonstrate my
          technical skills across different technologies.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publicSamples.map((sample, index) => (
            <PublicSampleCard key={index} sample={sample} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50 dark:bg-zinc-900/30 border-y border-gray-100 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">Testimonials</h2>
          <div className="w-full">
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        className="py-32 max-w-5xl mx-auto px-6 text-center"
        id="contact"
      >
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          I&apos;m currently open to new opportunities. Whether you have a
          question or just want to say hi, I&apos;ll try my best to get back to
          you!
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="inline-block px-8 py-4 bg-black text-white rounded-md font-medium text-lg hover:bg-gray-800 transition-colors dark:bg-white dark:text-black dark:hover:bg-gray-200"
        >
          Say Hello
        </a>
      </section>
    </>
  );
}
