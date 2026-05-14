"use client";

import profile from "@/data/profile.json";
import contactChannels from "@/data/contact_channels.json";
import Link from "next/link";
import { trackButtonClick, trackLinkClick } from "@/lib/analytics";

export default function Footer() {
  const handleCTAClick = () => {
    trackButtonClick("Book a Free Strategy Session", "footer_cta");
  };

  const handleSocialClick = (platform: string, url: string) => {
    trackLinkClick(platform, url, "footer");
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-auto dark:bg-zinc-900 dark:border-zinc-800">
      {/* Soft CTA strip */}
      <div className="border-b border-gray-200 dark:border-zinc-800 py-6">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 text-center sm:text-left">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Building something? Let&apos;s scope it.
          </p>
          <Link
            href="/contact#book"
            onClick={handleCTAClick}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 hover:gap-2 transition-all"
          >
            Book a free strategy session →
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
          <div className="flex gap-6 text-sm font-medium flex-wrap justify-center">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleSocialClick("GitHub", profile.github)}
              className="text-gray-500 hover:text-gray-900 transition-colors dark:text-gray-400 dark:hover:text-white"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleSocialClick("LinkedIn", profile.linkedin)}
              className="text-gray-500 hover:text-gray-900 transition-colors dark:text-gray-400 dark:hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href={profile.upwork}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleSocialClick("Upwork", profile.upwork)}
              className="text-gray-500 hover:text-gray-900 transition-colors dark:text-gray-400 dark:hover:text-white"
            >
              Upwork
            </a>
            {contactChannels.telegram.show && (
              <a
                href={contactChannels.telegram.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleSocialClick("Telegram", contactChannels.telegram.url)}
                className="text-gray-500 hover:text-gray-900 transition-colors dark:text-gray-400 dark:hover:text-white"
              >
                Telegram
              </a>
            )}
            <Link
              href="/contact"
              onClick={() => handleSocialClick("Contact", "/contact")}
              className="text-gray-500 hover:text-gray-900 transition-colors dark:text-gray-400 dark:hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
