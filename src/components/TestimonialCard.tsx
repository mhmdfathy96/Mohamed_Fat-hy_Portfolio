import { Testimonial } from "@/types";
import { Quote, RotateCcw } from "lucide-react";

export default function TestimonialCard({
  testimonial,
  isCarouselItem = false,
}: {
  testimonial: Testimonial;
  isCarouselItem?: boolean;
}) {
  return (
    <div
      className={`flex flex-col h-full bg-white border border-gray-100 rounded-2xl shadow-sm relative overflow-hidden transition-all hover:border-gray-200 ${
        isCarouselItem
          ? "justify-center items-center text-center p-8 md:p-16 pb-16 md:pb-20 border-none shadow-none bg-transparent"
          : "p-8"
      }`}
    >
      <Quote
        className={`absolute text-gray-100 ${
          isCarouselItem
            ? "w-16 h-16 top-4 left-4 opacity-10"
            : "top-6 right-6 w-8 h-8"
        }`}
      />

      <div
        className={`flex-grow ${isCarouselItem ? "flex items-center justify-center" : ""}`}
      >
        <p
          className={`text-slate-600 mb-6 italic leading-relaxed relative z-10 ${
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
            : "pt-6 border-t border-gray-100"
        }`}
      >
        <h4 className="font-bold text-gray-900 text-lg">
          {testimonial.name}
        </h4>
        {testimonial.role && (
          <p className="text-sm text-gray-500">{testimonial.role}</p>
        )}

        {/*
          The badge, not the quote, is the persuasive part: praise is easy to
          find and easy to discount, but a client choosing to pay twice is the
          one thing on this page a competitor cannot reproduce.
        */}
        {testimonial.repeatClient && (
          <span
            className={`inline-flex items-center gap-1.5 mt-2 px-2.5 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-semibold ${
              isCarouselItem ? "mx-auto" : ""
            }`}
          >
            <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
            Returning client — hired me more than once
          </span>
        )}
      </div>
    </div>
  );
}
