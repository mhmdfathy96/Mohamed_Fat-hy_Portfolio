import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100 dark:bg-zinc-900/80 dark:border-zinc-800">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold text-gray-900 dark:text-white"
        >
          MF
        </Link>
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link
            href="/"
            className="text-gray-600 hover:text-gray-900 transition-colors dark:text-gray-400 dark:hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="text-gray-600 hover:text-gray-900 transition-colors dark:text-gray-400 dark:hover:text-white"
          >
            Projects
          </Link>
          <a
            href="mailto:mhmdfathy96@gmail.com"
            className="text-gray-600 hover:text-gray-900 transition-colors dark:text-gray-400 dark:hover:text-white"
          >
            Contact
          </a>
          <Link
            href="/build-with-me"
            className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-md font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Build Your MVP
          </Link>
        </div>
      </div>
    </nav>
  );
}
