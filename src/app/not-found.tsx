"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

/**
 * Custom 404 page with case-insensitive redirect handling
 */
export default function NotFound() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // Handle case-insensitive /bwm redirect
    if (pathname && pathname.toLowerCase() === "/bwm") {
      router.replace("/build-with-me");
    }
  }, [pathname, router]);

  // If we're redirecting, show a loading state
  if (pathname && pathname.toLowerCase() === "/bwm") {
    return (
      <>
        <meta httpEquiv="refresh" content="0;url=/build-with-me" />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <p className="text-lg">Redirecting to Build With Me...</p>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              If you are not redirected,{" "}
              <Link
                href="/build-with-me"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                click here
              </Link>
              .
            </p>
          </div>
        </div>
      </>
    );
  }

  // Default 404 page
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
