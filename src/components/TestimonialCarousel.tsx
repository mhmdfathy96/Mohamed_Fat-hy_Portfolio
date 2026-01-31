"use client";

import { useEffect, useState } from "react";
import { Testimonial } from "@/types";
import TestimonialCard from "./TestimonialCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialCarousel({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // 5 seconds interval

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  if (!testimonials.length) return null;

  return (
    <div className="relative w-full group">
      {/* Slides Container - Grid Stack for auto-height based on tallest item */}
      <div className="grid grid-cols-1">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`col-start-1 row-start-1 w-full transition-opacity duration-700 ease-in-out flex items-center justify-center p-4 md:p-12 ${
              index === currentIndex
                ? "opacity-100 z-10 relative"
                : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <div className="w-full max-w-none">
              <TestimonialCard testimonial={testimonial} isCarouselItem />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons - Hidden on mobile usually, or keep visible if preferred */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-zinc-800/80 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-20 hover:bg-white dark:hover:bg-zinc-700"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-zinc-800/80 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-20 hover:bg-white dark:hover:bg-zinc-700"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              currentIndex === index
                ? "bg-black dark:bg-white"
                : "bg-black/20 dark:bg-white/20 hover:bg-black/40 dark:hover:bg-white/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
