"use client";

import Script from "next/script";

export default function AgentechWidget() {
  return (
    <Script
      id="agentech-widget"
      src="https://cdn.agent.agentech.tech/agentech-widget.js"
      strategy="afterInteractive"
      data-api-key="ak_INx4EWyyD2bjaD-orW-OTItVUaoz82G7S2s_Y6_2wss"
      data-api-base="https://api.agent.agentech.tech"
      data-title="Fat-hy's Assistant"
    />
  );
}
