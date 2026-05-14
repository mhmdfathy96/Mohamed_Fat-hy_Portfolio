"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/highlights", label: "Highlights" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

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
          {NAV_LINKS.map(({ href, label }) => {
            const active = isActive(href);
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "text-gray-900 dark:text-white font-semibold border-b-2 border-indigo-600 dark:border-indigo-500 pb-0.5"
                    : "text-gray-600 hover:text-gray-900 transition-colors dark:text-gray-400 dark:hover:text-white"
                }
              >
                {label}
              </Link>
            );
          })}
          <Link
            href="/build-with-me"
            aria-current={isActive("/build-with-me") ? "page" : undefined}
            className={
              isActive("/build-with-me")
                ? "px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-md font-semibold shadow-lg ring-2 ring-indigo-300 dark:ring-indigo-500/50"
                : "px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-md font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            }
          >
            Build Your MVP
          </Link>
        </div>
      </div>
    </nav>
  );
}
