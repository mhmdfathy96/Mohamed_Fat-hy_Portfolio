import { TechnicalHighlight } from "@/types";
import { ArrowUpRight } from "lucide-react";

export default function TechnicalHighlightCard({
  highlight,
}: {
  highlight: TechnicalHighlight;
}) {
  return (
    <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-bold text-xl mb-1">{highlight.title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
            Context:{" "}
            {highlight.slug ? (
              <a
                href={`/projects/${highlight.slug}`}
                className="hover:text-black dark:hover:text-white underline decoration-dotted underline-offset-4 transition-colors"
              >
                {highlight.context}
              </a>
            ) : (
              highlight.context
            )}
          </p>
        </div>
        {highlight.link && (
          <a
            href={highlight.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            <ArrowUpRight size={20} />
          </a>
        )}
      </div>

      <div className="space-y-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
            Problem
          </span>
          <p className="text-gray-700 dark:text-gray-300 mt-1">
            {highlight.problem}
          </p>
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Solution
          </span>
          <p className="text-gray-700 dark:text-gray-300 mt-1">
            {highlight.solution}
          </p>
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-green-600 dark:text-green-400">
            Result
          </span>
          <p className="text-gray-700 dark:text-gray-300 mt-1">
            {highlight.result}
          </p>
        </div>
      </div>
    </div>
  );
}
