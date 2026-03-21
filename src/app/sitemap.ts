import type { MetadataRoute } from "next";
import locations from "@/data/locations.json";

const BASE_URL = "https://cincymaid.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  /* ---- Homepage ---- */
  const home: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  /* ---- Static pages ---- */
  const staticPaths = [
    "/services",
    "/commercial",
    "/about",
    "/booking",
    "/contact",
    "/gift-cards",
    "/careers",
    "/locations",
  ];

  const staticPages: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  /* ---- Location pages ---- */
  const locationPages: MetadataRoute.Sitemap = locations.map(
    (location: { slug: string }) => ({
      url: `${BASE_URL}/locations/${location.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })
  );

  return [...home, ...staticPages, ...locationPages];
}
