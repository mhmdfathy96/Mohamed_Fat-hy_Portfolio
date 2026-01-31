import profile from "@/data/profile.json";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-12 mt-auto dark:bg-zinc-900 dark:border-zinc-800">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-gray-500 text-sm dark:text-gray-400">
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
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
    </footer>
  );
}
