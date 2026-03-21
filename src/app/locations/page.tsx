import type { Metadata } from "next";
import Link from "next/link";
import locations from "@/data/locations.json";
import type { Location } from "@/data/types";

export const metadata: Metadata = {
  title: "Service Areas | Cincy Maid — 33 Communities in Greater Cincinnati",
  description:
    "Cincy Maid serves 33 communities across Greater Cincinnati including Cincinnati, Mason, West Chester, Hyde Park, and more. Professional house cleaning wherever you call home.",
  alternates: {
    canonical: "https://cincymaid.com/locations",
  },
  openGraph: {
    title: "Service Areas | Cincy Maid — 33 Communities in Greater Cincinnati",
    description:
      "Cincy Maid serves 33 communities across Greater Cincinnati including Cincinnati, Mason, West Chester, Hyde Park, and more. Professional house cleaning wherever you call home.",
    url: "https://cincymaid.com/locations",
  },
};

const regionOrder = [
  "Cincinnati Neighborhoods",
  "Northern Suburbs",
  "Eastern Suburbs",
];

function groupByRegion(locs: Location[]) {
  const groups: Record<string, Location[]> = {};
  for (const loc of locs) {
    if (!groups[loc.region]) groups[loc.region] = [];
    groups[loc.region].push(loc);
  }
  return groups;
}

function LocationCard({ location }: { location: Location }) {
  return (
    <Link
      href={`/locations/${location.slug}`}
      className="group block rounded-2xl border border-cream-dark bg-white p-6 shadow-sm transition hover:shadow-md hover:border-teal"
    >
      <h3 className="text-lg font-semibold text-charcoal group-hover:text-teal-dark transition-colors">
        {location.name}
      </h3>
      <p className="mt-1 text-sm text-charcoal-light">
        {location.county} County
      </p>
      <p className="mt-3 text-sm leading-relaxed text-charcoal-light line-clamp-3">
        {location.local_character}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal-dark group-hover:gap-2 transition-all">
        Learn more
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-4 h-4"
        >
          <path
            fillRule="evenodd"
            d="M3 10a.75.75 0 0 1 .75-.75h10.638l-3.96-3.96a.75.75 0 1 1 1.06-1.06l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06l3.96-3.96H3.75A.75.75 0 0 1 3 10Z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </Link>
  );
}

export default function LocationsPage() {
  const grouped = groupByRegion(locations as Location[]);

  return (
    <main>
      {/* Hero */}
      <section className="bg-teal py-20 px-6 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold tracking-tight">
            Our Service Areas
          </h1>
          <p className="mt-4 text-lg md:text-xl text-teal-light leading-relaxed">
            Professional house cleaning across 33 communities in Greater
            Cincinnati. From historic neighborhoods to growing suburbs, our
            trained teams know your area and deliver consistent results every
            visit.
          </p>
        </div>
      </section>

      {/* Location Grid by Region */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        {regionOrder.map((region) => {
          const regionLocations = grouped[region];
          if (!regionLocations) return null;

          return (
            <div key={region} className="mb-16 last:mb-0">
              {/* Region Header */}
              <div className="mb-8 flex items-center gap-4">
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal whitespace-nowrap">
                  {region}
                </h2>
                <div className="h-px flex-1 bg-cream-dark" />
                <span className="whitespace-nowrap rounded-full bg-cream px-3 py-1 text-sm font-medium text-charcoal-light">
                  {regionLocations.length}{" "}
                  {regionLocations.length === 1 ? "area" : "areas"}
                </span>
              </div>

              {/* Cards */}
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {regionLocations.map((location) => (
                  <LocationCard key={location.slug} location={location} />
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* CTA */}
      <section className="bg-cream py-16 px-6 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-charcoal">
            Don&apos;t See Your <span className="text-teal">Area</span>?
          </h2>
          <p className="mt-4 text-lg text-charcoal-light leading-relaxed">
            We&apos;re always expanding. Reach out and we&apos;ll let you know
            if we can serve your neighborhood or when we plan to.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center rounded-full bg-coral px-8 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-coral-light hover:text-charcoal"
            >
              Book Now
            </Link>
            <a
              href="tel:+15139517799"
              className="inline-flex items-center justify-center rounded-full border-2 border-teal px-8 py-3 text-base font-semibold text-teal-dark transition hover:bg-teal hover:text-white"
            >
              Call (513) 951-7799
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
