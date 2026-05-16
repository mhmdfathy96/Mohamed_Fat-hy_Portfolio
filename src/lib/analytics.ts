import { track } from "@vercel/analytics";

type EventProps = Record<string, string | number | boolean>;

export const trackEvent = (eventName: string, properties?: EventProps) => {
  // Vercel Analytics
  track(eventName, properties);

  // Google Analytics 4 (only if loaded)
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, properties || {});
  }

  // Microsoft Clarity (only if loaded)
  if (typeof window !== "undefined" && typeof window.clarity === "function") {
    window.clarity("event", eventName);
    if (properties) {
      for (const [key, value] of Object.entries(properties)) {
        window.clarity("set", key, String(value));
      }
    }
  }
};

export const trackPageView = (pageName: string) => {
  trackEvent("page_view", { page: pageName });
};

export const trackCTAClick = (ctaName: string, location: string) => {
  trackEvent("cta_click", { cta_name: ctaName, location });
};

export const trackScrollDepth = (depth: number) => {
  trackEvent("scroll_depth", { depth_percentage: depth });
};

export const trackCalendlyBooking = () => {
  trackEvent("calendly_booking_completed");
};

export const trackLinkClick = (
  linkName: string,
  linkUrl: string,
  location: string,
) => {
  trackEvent("link_click", {
    link_name: linkName,
    link_url: linkUrl,
    location,
  });
};

export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent("button_click", { button_name: buttonName, location });
};

export const trackSampleClick = (sampleTitle: string, sampleUrl: string) => {
  trackEvent("sample_click", {
    sample_title: sampleTitle,
    sample_url: sampleUrl,
  });
};
