"use client";

import { useEffect, useRef } from "react";

type EmbedType = "booking" | "leads" | "gift-card" | "commercial";

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }
    const s = document.createElement("script");
    s.src = src;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.head.appendChild(s);
  });
}

const embedHTML: Record<EmbedType, string> = {
  booking: `<style>.Convertlabs{width:1px;min-width:100%;height:1px;min-height:100%}</style>
<iframe src="https://convertlabs.io/booking_form/3311" frameborder="0" scrolling="no" style="width:100%" class="Convertlabs" title="Book a Cleaning"></iframe>`,

  "gift-card": `<style>.Convertlabs{width:1px;min-width:100%;height:1px;min-height:100%}</style>
<iframe src="https://convertlabs.io/gift_card/3311" frameborder="0" scrolling="no" style="width:100%" class="Convertlabs" title="Purchase a Gift Card"></iframe>`,

  leads: `<style>.Convert27{width:1px;min-width:100%}</style>
<iframe src="https://convertlabs.io/booking_forms/endpoint.php?widget_id=16648" frameborder="0" scrolling="0" style="width:100%" class="Convert27" title="Get a Free Quote"></iframe>`,

  commercial: `<style>.Convertlabs{width:1px;min-width:100%;height:1px;min-height:100%}</style>
<iframe src="https://convertlabs.io/quote_form/3311" frameborder="0" scrolling="no" style="width:100%" class="Convertlabs" title="Commercial Contact Form"></iframe>`,
};

const embedScript: Record<EmbedType, string> = {
  booking: "https://convertlabs.io/js/booking_embed.js",
  "gift-card": "https://convertlabs.io/js/booking_embed.js",
  leads: "https://convertlabs.io/js/embed.js",
  commercial: "https://convertlabs.io/js/booking_embed.js",
};

export default function ConvertLabsEmbed({ type }: { type: EmbedType }) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let cancelled = false;

    (async () => {
      // 1. Load jQuery first (ConvertLabs depends on it)
      await loadScript(
        "https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"
      );
      if (cancelled || !containerRef.current) return;

      // 2. Inject the iframe HTML exactly as ConvertLabs expects
      containerRef.current.innerHTML = embedHTML[type];

      // 3. Load the ConvertLabs resize/embed script
      //    Remove previous instance so it re-initializes for the new iframe
      const prev = document.querySelector(
        `script[src="${embedScript[type]}"]`
      );
      if (prev) prev.remove();

      const s = document.createElement("script");
      s.src = embedScript[type];
      document.head.appendChild(s);
    })();

    return () => {
      cancelled = true;
      container.innerHTML = "";
    };
  }, [type]);

  return <div ref={containerRef} className="w-full" />;
}
