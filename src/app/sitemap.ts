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
    "/services/recurring-cleaning",
    "/services/deep-cleaning",
    "/commercial",
    "/about",
    "/booking",
    "/contact",
    "/gift-cards",
    "/careers",
    "/locations",
    "/blog",
  ];

  /* ---- Blog posts ---- */
  const blogSlugs = [
    "signs-you-need-a-house-cleaner",
    "how-to-prepare-for-cleaning-service",
    "spring-cleaning-checklist-cincinnati",
    "how-much-does-house-cleaning-cost-cincinnati",
    "how-often-should-you-clean-your-home",
  ];

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

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

  return [...home, ...staticPages, ...blogPages, ...locationPages];
}
