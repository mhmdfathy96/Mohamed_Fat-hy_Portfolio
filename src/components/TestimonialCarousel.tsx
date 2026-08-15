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
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length, isPaused]);

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
    <div
      className="relative w-full group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides Container - Grid Stack for auto-height based on tallest item */}
      <div className="grid grid-cols-1">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            // The off slides stay in the DOM to keep the grid at the height of
            // the tallest quote, so they have to be hidden from assistive tech
            // explicitly — otherwise a screen reader reads all five stacked,
            // and the contrast checker grades faded-out text against white.
            aria-hidden={index !== currentIndex}
            inert={index !== currentIndex}
            // visibility rides along with the fade — it flips to visible at the
            // start of the transition and to hidden only at the end, so the
            // cross-fade looks the same while the off slides stop counting as
            // painted text (which is what the contrast checker measures;
            // aria-hidden alone does not exempt them).
            className={`col-start-1 row-start-1 w-full transition-[opacity,visibility] duration-700 ease-in-out flex items-center justify-center p-4 md:p-12 ${
              index === currentIndex
                ? "opacity-100 visible z-10 relative"
                : "opacity-0 invisible z-0 pointer-events-none"
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
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-20 hover:bg-white"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-20 hover:bg-white"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex z-20">
        {testimonials.map((_, index) => (
          // The dot stays 10px; the button around it is a full 24px so the
          // target is thumb-sized without changing how the control looks.
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="w-6 h-6 flex items-center justify-center"
            aria-label={`Go to slide ${index + 1}`}
          >
            <span
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                currentIndex === index
                  ? "bg-black"
                  : "bg-black/20 hover:bg-black/40"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
