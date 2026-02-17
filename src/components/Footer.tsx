import profile from "@/data/profile.json";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-auto dark:bg-zinc-900 dark:border-zinc-800">
      {/* CTA Section */}
      <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-zinc-900 dark:via-indigo-950/20 dark:to-purple-950/20 border-b border-gray-200 dark:border-zinc-800 py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Ready to launch your SaaS product?
          </h3>
          <Link
            href="/build-with-me"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Book a Free Strategy Session →
          </Link>
        </div>
      </div>

      {/* Original Footer Content */}
      <div className="py-12">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-500 text-sm dark:text-gray-400">
            &copy; {new Date().getFullYear()} {profile.name}. All rights
            reserved.
          </div>
          <div className="flex gap-6 text-sm font-medium">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-colors dark:text-gray-400 dark:hover:text-white"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-colors dark:text-gray-400 dark:hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href={profile.upwork}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-colors dark:text-gray-400 dark:hover:text-white"
            >
              Upwork
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
