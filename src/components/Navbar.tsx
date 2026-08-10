"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/highlights", label: "Highlights" },
  { href: "/about", label: "About" },
  // "Contact" is intentionally not here — the "Talk to me" button below is the
  // single contact entry point. Two links to the same page split the clicks.
];

export default function Navbar() {
  const pathname = usePathname();

  // The mobile menu is open only for the route it was opened on, so navigating
  // closes it without an effect that calls setState during render.
  const [openFor, setOpenFor] = useState<string | null>(null);
  const open = openFor === pathname;
  const setOpen = (next: boolean) => setOpenFor(next ? pathname : null);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenFor(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold text-gray-900"
        >
          MF
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {NAV_LINKS.map(({ href, label }) => {
            const active = isActive(href);
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "text-gray-900 font-semibold border-b-2 border-blue-700 pb-0.5"
                    : "text-gray-600 hover:text-gray-900 transition-colors"
                }
              >
                {label}
              </Link>
            );
          })}
          {/* One nav action, pointing at a page that exists. The old
              "Build Your MVP" button competed with three more CTAs in the
              hero and led to a page analytics shows nobody ever opened. */}
          <Link
            href="/contact"
            aria-current={isActive("/contact") ? "page" : undefined}
            className={
              isActive("/contact")
                ? "px-4 py-2 bg-blue-800 text-white rounded-md font-semibold"
                : "px-4 py-2 bg-blue-700 text-white rounded-md font-semibold hover:bg-blue-800 transition-colors"
            }
          >
            Talk to me
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex items-center justify-center p-2 -mr-2 rounded-md text-gray-700 hover:bg-gray-100"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={
          open
            ? "md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md"
            : "hidden"
        }
      >
        <div className="px-6 py-4 flex flex-col gap-1 text-base font-medium">
          {NAV_LINKS.map(({ href, label }) => {
            const active = isActive(href);
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "py-2 text-gray-900 font-semibold"
                    : "py-2 text-gray-600 hover:text-gray-900 transition-colors"
                }
              >
                {label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            aria-current={isActive("/contact") ? "page" : undefined}
            className={
              isActive("/contact")
                ? "mt-3 px-4 py-3 bg-blue-800 text-white rounded-md font-semibold text-center"
                : "mt-3 px-4 py-3 bg-blue-700 text-white rounded-md font-semibold text-center"
            }
          >
            Talk to me
          </Link>
        </div>
      </div>
    </nav>
  );
}
