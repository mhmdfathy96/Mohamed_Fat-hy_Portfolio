"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

/**
 * Retired route.
 *
 * /build-with-me was a full landing page with its own hero, stats, agenda,
 * FAQ and pricing. Analytics showed it was never reached once — the offer now
 * lives on /services, and the packages block is on the home page too.
 *
 * This stub stays because the link (and its /bwm short form) may have been
 * shared. It is a real page rather than a next.config redirect because the
 * site is built with `output: "export"`, where those redirects do not apply.
 */
export default function BuildWithMeRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/services");
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-[60vh] px-6">
      <div className="text-center">
        <p className="text-lg text-slate-900">Taking you to Services…</p>
        <p className="mt-4 text-sm text-slate-600">
          If nothing happens,{" "}
          <Link href="/services" className="text-blue-700 hover:underline">
            open it here
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
