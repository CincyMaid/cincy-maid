import type { Metadata } from "next";
import { notFound } from "next/navigation";
import locations from "@/data/locations.json";
import type { Location } from "@/data/types";
import LocationPageComponent from "@/components/LocationPage";

export const dynamicParams = false;

export function generateStaticParams() {
  return (locations as Location[]).map((location) => ({
    slug: location.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = (locations as Location[]).find((l) => l.slug === slug);

  if (!location) {
    return { title: "Location Not Found" };
  }

  const title = `${location.name} House Cleaning Services | Cincy Maid`;
  const description = `Professional house cleaning in ${location.name}, ${location.state}. ${location.local_character.slice(0, 140)}...`;
  const url = `https://cincymaid.com/locations/${location.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
    },
  };
}

export default async function LocationSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = (locations as Location[]).find((l) => l.slug === slug);

  if (!location) {
    notFound();
  }

  return <LocationPageComponent location={location} />;
}
