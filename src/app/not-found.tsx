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

  // /bwm was a shared short link pointing at the retired /build-with-me page.
  // It now lands on /services, where that offer moved.
  const isShortLink =
    pathname &&
    ["/bwm", "/build-with-me"].includes(pathname.toLowerCase());

  useEffect(() => {
    if (isShortLink) {
      router.replace("/services");
    }
  }, [isShortLink, router]);

  if (isShortLink) {
    return (
      <>
        <meta httpEquiv="refresh" content="0;url=/services" />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <p className="text-lg">Taking you to Services…</p>
            <p className="mt-4 text-sm text-slate-600">
              If nothing happens,{" "}
              <Link href="/services" className="text-blue-700 hover:underline">
                open it here
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
        <p className="text-gray-600 mb-8">
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
