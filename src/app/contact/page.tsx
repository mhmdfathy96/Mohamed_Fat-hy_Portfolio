"use client";

import { useEffect } from "react";
import { Mail, Send, Calendar, ArrowDown } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import contactChannels from "@/data/contact_channels.json";
import { trackPageView, trackLinkClick, trackCTAClick } from "@/lib/analytics";

export default function ContactPage() {
  useEffect(() => {
    trackPageView("contact");

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    const handleCalendlyEvent = (e: MessageEvent) => {
      if (e.data.event && e.data.event.indexOf("calendly") === 0) {
        if (e.data.event === "calendly.event_scheduled") {
          trackCTAClick("calendly_booking", "contact_page");
        }
      }
    };
    window.addEventListener("message", handleCalendlyEvent);

    return () => {
      window.removeEventListener("message", handleCalendlyEvent);
      document.body.removeChild(script);
    };
  }, []);

  const handleScrollTo = (id: string, label: string) => {
    trackLinkClick(label, `#${id}`, "contact_page_channels");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white dark:bg-black">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-zinc-900 dark:via-black dark:to-indigo-950/20">
        <div className="max-w-5xl mx-auto px-6 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-2">
            Three ways to reach me. Pick whichever fits.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            {contactChannels.responseSLA}
          </p>
        </div>
      </section>

      {/* CHANNEL CARDS */}
      <section className="py-16 max-w-5xl mx-auto px-6">
        <div className="grid sm:grid-cols-3 gap-4">
          <button
            onClick={() => handleScrollTo("book", "Book a call card")}
            className="text-left flex flex-col items-center gap-2 p-6 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl hover:border-indigo-500 dark:hover:border-indigo-600 hover:shadow-lg transition-all"
          >
            <Calendar className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            <span className="font-semibold text-gray-900 dark:text-white">
              Book a call
            </span>
            <span className="text-xs text-gray-500">30 min, free</span>
            <ArrowDown className="w-4 h-4 text-gray-400 mt-1" />
          </button>

          <button
            onClick={() => handleScrollTo("form", "Send a brief card")}
            className="text-left flex flex-col items-center gap-2 p-6 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl hover:border-indigo-500 dark:hover:border-indigo-600 hover:shadow-lg transition-all"
          >
            <Send className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            <span className="font-semibold text-gray-900 dark:text-white">
              Send a brief
            </span>
            <span className="text-xs text-gray-500">
              Stage, budget, timeline
            </span>
            <ArrowDown className="w-4 h-4 text-gray-400 mt-1" />
          </button>

          <a
            href={`mailto:${contactChannels.email}`}
            onClick={() =>
              trackLinkClick("Email card", contactChannels.email, "contact_page_channels")
            }
            className="flex flex-col items-center gap-2 p-6 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl hover:border-indigo-500 dark:hover:border-indigo-600 hover:shadow-lg transition-all"
          >
            <Mail className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            <span className="font-semibold text-gray-900 dark:text-white">
              Email
            </span>
            <span className="text-xs text-gray-500">{contactChannels.email}</span>
          </a>
        </div>

        {contactChannels.telegram.show && (
          <p className="text-center text-sm text-gray-500 dark:text-gray-500 mt-6">
            Prefer messaging? Reach me on{" "}
            <a
              href={contactChannels.telegram.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackLinkClick(
                  "Telegram inline",
                  contactChannels.telegram.url,
                  "contact_page_channels",
                )
              }
              className="text-indigo-600 dark:text-indigo-400 hover:underline font-semibold"
            >
              Telegram ({contactChannels.telegram.handle})
            </a>
            .
          </p>
        )}
      </section>

      {/* BOOK A CALL - CALENDLY EMBED */}
      <section
        id="book"
        className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-zinc-900 dark:via-black dark:to-indigo-950/20 border-y border-gray-200 dark:border-zinc-800 scroll-mt-20"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Book a 30-min strategy call
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Scope, top risks, a starting recommendation. No pitch, no obligation.
            </p>
          </div>
          <div
            className="calendly-inline-widget bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-zinc-800"
            data-url={contactChannels.calendly.embedUrl}
            style={{ minWidth: "320px", height: "700px" }}
          ></div>
        </div>
      </section>

      {/* PROJECT BRIEF FORM */}
      <section id="form" className="py-20 max-w-3xl mx-auto px-6 scroll-mt-20">
        <ContactForm location="contact_page" />
      </section>
    </div>
  );
}
