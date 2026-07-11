"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

// The Agentech widget exposes no event API, so we observe it from the outside:
//   - messages: it POSTs to `${apiBase}/api/public/chat`
//   - open/close: it toggles the `open` class on `.panel` inside its shadow DOM
// Detected interactions are forwarded to whichever analytics sinks are present.

const CHAT_ENDPOINT = "/api/public/chat";
const WIDGET_TAG = "agentech-chat";

type EventPayload = Record<string, string | number | boolean | null>;

function report(event: string, payload: EventPayload = {}) {
  if (typeof window.gtag === "function") {
    window.gtag("event", event, payload);
  }
  if (typeof window.clarity === "function") {
    window.clarity("event", event);
  }
  try {
    track(event, payload);
  } catch {
    /* Vercel Analytics not ready — ignore */
  }
}

export default function AgentechAnalytics() {
  useEffect(() => {
    // 1) Track sent messages by observing the widget's outgoing chat requests.
    const w = window as typeof window & { __agentechFetchPatched?: boolean };
    if (!w.__agentechFetchPatched && typeof window.fetch === "function") {
      w.__agentechFetchPatched = true;
      const originalFetch = window.fetch.bind(window);
      window.fetch = (...args: Parameters<typeof fetch>) => {
        try {
          const [input] = args;
          const url =
            typeof input === "string"
              ? input
              : input instanceof URL
                ? input.href
                : input.url;
          if (url && url.includes(CHAT_ENDPOINT)) {
            report("agentech_message_sent");
          }
        } catch {
          /* never let tracking break a real request */
        }
        return originalFetch(...args);
      };
    }

    // 2) Track open/close by watching the panel's class inside the shadow DOM.
    let panelObserver: MutationObserver | null = null;
    let bodyObserver: MutationObserver | null = null;
    let wasOpen = false;

    const attachPanelObserver = (host: Element): boolean => {
      const panel = (host as HTMLElement).shadowRoot?.querySelector(".panel");
      if (!panel) return false;
      panelObserver = new MutationObserver(() => {
        const open = panel.classList.contains("open");
        if (open !== wasOpen) {
          wasOpen = open;
          report(open ? "agentech_opened" : "agentech_closed");
        }
      });
      panelObserver.observe(panel, {
        attributes: true,
        attributeFilter: ["class"],
      });
      return true;
    };

    const tryAttach = (): boolean => {
      const host = document.querySelector(WIDGET_TAG);
      if (!host) return false;
      // Host may exist a tick before its shadow content renders — retry shortly.
      if (!attachPanelObserver(host)) {
        window.setTimeout(() => {
          if (!panelObserver) attachPanelObserver(host);
        }, 250);
      }
      bodyObserver?.disconnect();
      bodyObserver = null;
      return true;
    };

    // The widget mounts asynchronously; wait for <agentech-chat> to appear.
    if (!tryAttach()) {
      bodyObserver = new MutationObserver(() => tryAttach());
      bodyObserver.observe(document.body, { childList: true });
    }

    return () => {
      bodyObserver?.disconnect();
      panelObserver?.disconnect();
    };
  }, []);

  return null;
}
