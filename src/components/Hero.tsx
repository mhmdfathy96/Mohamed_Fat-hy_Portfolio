"use client";

import profile from "@/data/profile.json";
import Link from "next/link";
import { trackButtonClick } from "@/lib/analytics";

export default function Hero() {
  const { hero } = profile;

  return (
    <section className="py-20 md:py-28 max-w-5xl mx-auto px-6">
      {/*
        The visitor arrives warm (Upwork or a referral) and already knows the
        name — so the name is not the hook. Lead with what they get, in words a
        non-native, non-technical reader parses in one pass. Average engagement
        is 42s: everything that matters has to survive inside this block.
      */}
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-slate-900">
        {hero.headline}
      </h1>

      <p className="text-lg md:text-xl text-slate-600 font-medium mb-8">
        {hero.byline}
      </p>

      <p className="text-lg md:text-xl text-slate-700 max-w-3xl mb-6 leading-relaxed">
        {hero.body}
      </p>

      {/* Layer 2: names the jargon and defuses it in the same breath. */}
      <p className="text-base text-slate-500 max-w-3xl mb-8 leading-relaxed">
        {hero.gloss}
      </p>

      <ul className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-6 text-base md:text-lg text-slate-700">
        {hero.proof.map((item, index) => (
          <li key={item} className="flex items-center gap-3">
            {index > 0 && (
              <span aria-hidden="true" className="text-slate-300">
                ·
              </span>
            )}
            <span className="font-semibold">{item}</span>
          </li>
        ))}
      </ul>

      {/* Layer 3 in the visible page: carries the stack for anyone vetting the
          engineering, without asking the buyer to understand any of it. */}
      <p className="text-sm text-slate-500 mb-10 font-mono">{hero.tech}</p>

      <div className="flex flex-wrap gap-3 sm:gap-4">
        <Link
          href={hero.primaryCta.href}
          onClick={() => trackButtonClick(hero.primaryCta.label, "hero")}
          className="px-6 py-3 bg-blue-700 text-white rounded-md font-semibold hover:bg-blue-800 transition-colors"
        >
          {hero.primaryCta.label}
        </Link>
        <Link
          href={hero.secondaryCta.href}
          onClick={() => trackButtonClick(hero.secondaryCta.label, "hero")}
          className="px-6 py-3 border border-slate-300 text-slate-900 rounded-md font-semibold hover:bg-slate-50 transition-colors"
        >
          {hero.secondaryCta.label}
        </Link>
      </div>
    </section>
  );
}
