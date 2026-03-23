"use client";

import Link from "next/link";
import type { Location } from "@/data/types";
import ConvertLabsEmbed from "@/components/ConvertLabsEmbed";

/* ------------------------------------------------------------------ */
/*  Inline SVG Icons                                                   */
/* ------------------------------------------------------------------ */

function CheckIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function HomeIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
      <path d="M9 22V12h6v10" />
    </svg>
  );
}

function MapPinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx={12} cy={9} r={2.5} />
    </svg>
  );
}

function StarIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Benefit Cards Data                                                 */
/* ------------------------------------------------------------------ */

const BENEFITS = [
  {
    title: "Background-Checked Teams",
    description:
      "Every cleaner on our roster passes a thorough background screening before they ever step foot in your home.",
    icon: CheckIcon,
  },
  {
    title: "Consistent Quality Guarantee",
    description:
      "Not satisfied? We will come back and re-clean the area at no additional cost. Your standards are our standards.",
    icon: StarIcon,
  },
  {
    title: "Flexible Scheduling",
    description:
      "Life in the Cincinnati area moves fast. We offer morning, afternoon, and weekend slots so cleaning fits your routine.",
    icon: HomeIcon,
  },
  {
    title: "Premium Supplies",
    description:
      "We bring our own supplies and use professional-grade, non-toxic products that are safe for kids, pets, and your home.",
    icon: MapPinIcon,
  },
];

/* ------------------------------------------------------------------ */
/*  JSON-LD Structured Data                                            */
/* ------------------------------------------------------------------ */

function buildJsonLd(location: Location) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `https://cincymaid.com/locations/${location.slug}#business`,
        name: "Cincy Maid",
        description: `Professional house cleaning services in ${location.name}, ${location.state}. Trusted by local families for thorough, reliable home care.`,
        url: `https://cincymaid.com/locations/${location.slug}`,
        telephone: "(513) 951-7799",
        email: "admin@cincymaid.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Cincinnati",
          addressRegion: "OH",
          addressCountry: "US",
        },
        areaServed: {
          "@type": "City",
          name: location.name,
          containedInPlace: {
            "@type": "AdministrativeArea",
            name: `${location.county}, ${location.state}`,
          },
        },
        priceRange: "$$",
      },
      {
        "@type": "Service",
        "@id": `https://cincymaid.com/locations/${location.slug}#service`,
        name: "House Cleaning Service",
        provider: {
          "@id": `https://cincymaid.com/locations/${location.slug}#business`,
        },
        areaServed: {
          "@type": "City",
          name: location.name,
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Cleaning Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Standard Cleaning",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Deep Cleaning",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Move-In / Move-Out Cleaning",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Recurring Cleaning",
              },
            },
          ],
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://cincymaid.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Service Areas",
            item: "https://cincymaid.com/locations",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: `${location.name} House Cleaning`,
            item: `https://cincymaid.com/locations/${location.slug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `https://cincymaid.com/locations/${location.slug}#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: `How much does house cleaning cost in ${location.name}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `House cleaning in ${location.name} starts at $155. Final pricing depends on your home size, number of bedrooms and bathrooms, and any add-on services. Get your instant quote online at cincymaid.com. No phone call required.`,
            },
          },
          {
            "@type": "Question",
            name: `Does Cincy Maid serve ${location.name}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: `Yes. Cincy Maid provides professional house cleaning throughout ${location.name}, ${location.state}. We offer recurring weekly, biweekly, and monthly service, as well as one-time deep cleans and move-in/move-out cleaning. Book online or call (513) 951-7799.`,
            },
          },
          {
            "@type": "Question",
            name: "Are Cincy Maid cleaners background-checked?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Every Cincy Maid cleaner passes a comprehensive background check and in-person interview before their first booking. All cleaners are fully insured.",
            },
          },
          {
            "@type": "Question",
            name: "What is Cincy Maid's satisfaction guarantee?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Every full-home clean is backed by a 100% satisfaction guarantee. If anything was missed or doesn't meet your expectations, contact us within 24 hours and we will send a cleaner back to re-clean the area at no charge.",
            },
          },
        ],
      },
    ],
  };
}

/* ------------------------------------------------------------------ */
/*  Frequency Chips                                                    */
/* ------------------------------------------------------------------ */

const FREQUENCIES = [
  "Weekly",
  "Bi-Weekly",
  "Monthly",
  "One-Time Deep Clean",
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function LocationPage({ location }: { location: Location }) {
  const jsonLd = buildJsonLd(location);

  return (
    <>
      {/* -------- JSON-LD -------- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* -------- HERO -------- */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-dark via-teal to-teal-light py-24 md:py-32">
        {/* Decorative circle */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-white/5" />

        <div className="relative mx-auto max-w-5xl px-6 text-center text-white">
          <span className="mb-4 inline-block rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium tracking-wide backdrop-blur-sm">
            {location.county} County, {location.state}
          </span>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            {location.name} House Cleaning Services
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
            {location.local_character}
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-lg font-semibold text-teal shadow-lg transition hover:bg-cream hover:shadow-xl"
            >
              Book Your Cleaning
            </Link>
            <a
              href="tel:5139517799"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 px-8 py-3.5 text-lg font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Call (513) 951-7799
            </a>
          </div>
        </div>
      </section>

      {/* -------- QUICK QUOTE -------- */}
      <section id="quote" className="bg-cream py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-2 text-center text-3xl font-bold text-charcoal md:text-4xl">
            Get a <span className="text-teal">Free Quote</span> in {location.name}
          </h2>
          <p className="mb-10 text-center text-charcoal-light">
            Tell us about your space and we will send a personalized estimate
            within minutes.
          </p>
          <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
            <ConvertLabsEmbed type="leads" />
          </div>
        </div>
      </section>

      {/* -------- WHY CHOOSE US -------- */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            {/* Left column */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-charcoal md:text-4xl">
                Why {location.name} Residents <span className="text-teal">Trust&nbsp;Us</span>
              </h2>

              <p className="mb-6 leading-relaxed text-charcoal-light">
                {location.commute_context}
              </p>

              <div className="mb-6">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-teal-dark">
                  Cleaning Frequency Options
                </h3>
                <div className="flex flex-wrap gap-2">
                  {FREQUENCIES.map((freq) => (
                    <span
                      key={freq}
                      className="rounded-full bg-teal-light/20 px-4 py-1.5 text-sm font-medium text-teal-dark"
                    >
                      {freq}
                    </span>
                  ))}
                </div>
              </div>

              <p className="rounded-xl bg-cream p-5 text-sm leading-relaxed text-charcoal-light">
                <strong className="text-charcoal">Transparent pricing:</strong>{" "}
                Every quote is based on the actual size and condition of your
                home. No hidden fees, no bait-and-switch. You approve the
                price before we ever pick up a mop.
              </p>
            </div>

            {/* Right column - benefit cards */}
            <div className="grid gap-5 sm:grid-cols-2">
              {BENEFITS.map((b) => {
                const Icon = b.icon;
                return (
                  <div
                    key={b.title}
                    className="rounded-2xl border border-sand-light bg-cream p-6 transition hover:shadow-md"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-teal-light/20 text-teal-dark">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mb-1.5 font-semibold text-charcoal">
                      {b.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-charcoal-light">
                      {b.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* -------- HOUSING TYPES -------- */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-4 text-center text-3xl font-bold text-charcoal md:text-4xl">
            <span className="text-teal">Homes We Clean</span> in {location.name}
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-charcoal-light">
            {location.housing_era}
          </p>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {location.housing_types.map((type) => (
              <div
                key={type}
                className="flex items-start gap-4 rounded-2xl border border-sand bg-white p-6 shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-coral/10 text-coral">
                  <HomeIcon className="h-5 w-5" />
                </div>
                <span className="pt-1.5 font-medium text-charcoal">
                  {type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------- LOCAL DETAILS & LANDMARKS -------- */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-charcoal md:text-4xl">
            <span className="text-teal">Rooted</span> in {location.name}
          </h2>

          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            {/* Unique details */}
            <div>
              <h3 className="mb-5 text-xl font-semibold text-teal-dark">
                What Makes This Area Special
              </h3>
              <ul className="space-y-4">
                {location.unique_details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
                    <span className="text-charcoal-light">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Landmarks */}
            <div>
              <h3 className="mb-5 text-xl font-semibold text-teal-dark">
                Nearby Landmarks
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {location.landmarks.map((landmark) => (
                  <span
                    key={landmark}
                    className="inline-flex items-center gap-1.5 rounded-full bg-sand-light px-4 py-2 text-sm font-medium text-charcoal"
                  >
                    <MapPinIcon className="h-3.5 w-3.5 text-coral" />
                    {landmark}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------- NEIGHBORHOODS -------- */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold text-charcoal md:text-4xl">
            <span className="text-teal">Neighborhoods</span> We Serve
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-charcoal-light">
            {location.service_note}
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {location.neighborhoods.map((hood) => (
              <span
                key={hood}
                className="rounded-full border border-teal/30 bg-white px-5 py-2 text-sm font-medium text-teal-dark shadow-sm"
              >
                {hood}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* -------- CTA -------- */}
      <section className="bg-teal py-20">
        <div className="mx-auto max-w-3xl px-6 text-center text-white">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Ready for a Cleaner Home in {location.name}?
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-lg text-white/90">
            Spend your free time enjoying everything {location.name} has to
            offer, and leave the scrubbing to us.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-lg font-semibold text-teal shadow-lg transition hover:bg-cream hover:shadow-xl"
            >
              Book Online Now
            </Link>
            <a
              href="tel:5139517799"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 px-8 py-3.5 text-lg font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              (513) 951-7799
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
