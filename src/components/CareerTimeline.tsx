"use client";

import { CareerEntry } from "@/types";

const typeConfig: Record<
  CareerEntry["type"],
  { accent: string; dotBg: string; label: string; icon: string }
> = {
  job: {
    accent: "text-blue-600 dark:text-blue-400",
    dotBg: "bg-blue-600 dark:bg-blue-500",
    label: "Full-time",
    icon: "💼",
  },
  contract: {
    accent: "text-violet-600 dark:text-violet-400",
    dotBg: "bg-violet-600 dark:bg-violet-500",
    label: "Contract",
    icon: "📋",
  },
  freelance: {
    accent: "text-emerald-600 dark:text-emerald-400",
    dotBg: "bg-emerald-500 dark:bg-emerald-400",
    label: "Freelance",
    icon: "🚀",
  },
  "career-break": {
    accent: "text-amber-600 dark:text-amber-400",
    dotBg: "bg-amber-500 dark:bg-amber-400",
    label: "Career Break",
    icon: "🌍",
  },
};

interface CareerTimelineProps {
  entries: CareerEntry[];
}

export default function CareerTimeline({ entries }: CareerTimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-5 top-0 bottom-0 w-px bg-gray-200 dark:bg-zinc-700" />

      <div className="space-y-0">
        {entries.map((entry, index) => {
          const config = typeConfig[entry.type];
          const isLast = index === entries.length - 1;

          return (
            <div key={index} className={`relative flex gap-6 ${isLast ? "" : "pb-10"}`}>
              {/* Timeline node */}
              <div className="relative z-10 flex-shrink-0">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-base border-2 border-white dark:border-zinc-900 shadow-sm ${config.dotBg}`}
                >
                  <span role="img" aria-label={config.label}>
                    {config.icon}
                  </span>
                </div>
              </div>

              {/* Content card */}
              <div className="flex-1 min-w-0 pb-1">
                <div className="bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-lg p-5 hover:border-gray-300 dark:hover:border-zinc-600 transition-colors duration-200">
                  {/* Header row */}
                  <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1 mb-2">
                    <div>
                      <h3 className="font-semibold text-base text-gray-900 dark:text-white leading-tight">
                        {entry.title}
                      </h3>
                      {entry.company && (
                        <p className={`text-sm font-medium mt-0.5 ${config.accent}`}>
                          {entry.company}
                          {entry.industry && (
                            <span className="text-gray-400 dark:text-gray-500 font-normal">
                              {" "}
                              · {entry.industry}
                            </span>
                          )}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col items-end gap-1 flex-shrink-0">
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap">
                        {entry.start} – {entry.end}
                      </span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                          entry.type === "job"
                            ? "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400"
                            : entry.type === "contract"
                              ? "bg-violet-50 dark:bg-violet-950/40 text-violet-600 dark:text-violet-400"
                              : entry.type === "freelance"
                                ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400"
                                : "bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400"
                        }`}
                      >
                        {config.label}
                      </span>
                    </div>
                  </div>

                  {/* Location */}
                  {entry.location && (
                    <p className="text-xs text-gray-400 dark:text-gray-500 mb-3">
                      📍 {entry.location}
                    </p>
                  )}

                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {entry.description}
                  </p>

                  {/* Highlights */}
                  {entry.highlights && entry.highlights.length > 0 && (
                    <ul className="mt-3 space-y-1">
                      {entry.highlights.map((highlight, hi) => (
                        <li
                          key={hi}
                          className="flex items-start gap-2 text-xs text-gray-500 dark:text-gray-400"
                        >
                          <span
                            className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${config.dotBg}`}
                          />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
