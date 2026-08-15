"use client";

import Script from "next/script";

export default function AgentechWidget() {
  return (
    // afterInteractive emitted a <link rel="preload" as="script"> into <head>,
    // which put the widget bundle — and the config call it fires — ahead of the
    // hero in the download queue. The chat bubble is never the first thing a
    // visitor needs, so it waits for window load.
    <Script
      id="agentech-widget"
      src="https://cdn.assistant.agentech.tech/agentech-widget.js"
      strategy="lazyOnload"
      data-api-key="ak_INx4EWyyD2bjaD-orW-OTItVUaoz82G7S2s_Y6_2wss"
      data-api-base="https://api.assistant.agentech.tech"
      data-title="Fat-hy's Assistant"
    />
  );
}
