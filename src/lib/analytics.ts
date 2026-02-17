import { track } from "@vercel/analytics";

export const trackEvent = (
  eventName: string,
  properties?: Record<string, string | number | boolean>,
) => {
  track(eventName, properties);
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
