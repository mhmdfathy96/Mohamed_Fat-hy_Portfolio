import { Testimonial } from "@/types";
import { Quote } from "lucide-react";

export default function TestimonialCard({
  testimonial,
  isCarouselItem = false,
}: {
  testimonial: Testimonial;
  isCarouselItem?: boolean;
}) {
  return (
    <div
      className={`flex flex-col h-full bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-2xl shadow-sm relative overflow-hidden transition-all hover:border-gray-200 dark:hover:border-zinc-700 ${
        isCarouselItem
          ? "justify-center items-center text-center p-8 md:p-16 pb-16 md:pb-20 border-none shadow-none bg-transparent dark:bg-transparent"
          : "p-8"
      }`}
    >
      <Quote
        className={`absolute text-gray-100 dark:text-zinc-800 ${
          isCarouselItem
            ? "w-16 h-16 top-4 left-4 opacity-10"
            : "top-6 right-6 w-8 h-8"
        }`}
      />

      <div
        className={`flex-grow ${isCarouselItem ? "flex items-center justify-center" : ""}`}
      >
        <p
          className={`text-gray-600 dark:text-gray-300 mb-6 italic leading-relaxed relative z-10 ${
            isCarouselItem ? "text-xl md:text-2xl font-light" : ""
          }`}
        >
          &quot;{testimonial.text}&quot;
        </p>
      </div>

      <div
        className={`mt-auto relative z-10 ${
          isCarouselItem
            ? "pt-0"
            : "pt-6 border-t border-gray-100 dark:border-zinc-800"
        }`}
      >
        <h4 className="font-bold text-gray-900 dark:text-white text-lg">
          {testimonial.name}
        </h4>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {testimonial.role}
        </p>
      </div>
    </div>
  );
}
