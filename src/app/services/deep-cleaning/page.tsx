import type { Metadata } from "next";
import Link from "next/link";
import ConvertLabsEmbed from "@/components/ConvertLabsEmbed";

/* ------------------------------------------------------------------ */
/*  Metadata                                                           */
/* ------------------------------------------------------------------ */

export const metadata: Metadata = {
  title: "Deep Cleaning Service Cincinnati, OH | Cincy Maid",
  description:
    "Professional deep cleaning service in Cincinnati. Inside appliances, baseboards, grout, window sills, and more. Perfect before starting recurring service, seasonal refreshes, or move-in/move-out. Background-checked teams, 100% satisfaction guarantee. Book online today.",
  alternates: {
    canonical: "https://cincymaid.com/services/deep-cleaning",
  },
  openGraph: {
    title: "Deep Cleaning Service Cincinnati, OH | Cincy Maid",
    description:
      "Professional deep cleaning in Cincinnati. Inside appliances, baseboards, grout, window sills. Background-checked teams, satisfaction guaranteed.",
    url: "https://cincymaid.com/services/deep-cleaning",
  },
};

/* ------------------------------------------------------------------ */
/*  JSON-LD Schemas                                                    */
/* ------------------------------------------------------------------ */

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Cincy Maid",
  "@id": "https://cincymaid.com/#business",
  url: "https://cincymaid.com",
  telephone: "(513) 951-7799",
  email: "admin@cincymaid.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cincinnati",
    addressRegion: "OH",
    addressCountry: "US",
  },
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "33",
    bestRating: "5",
    worstRating: "1",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Deep Cleaning Service in Cincinnati",
  provider: {
    "@type": "LocalBusiness",
    name: "Cincy Maid",
    "@id": "https://cincymaid.com/#business",
  },
  areaServed: {
    "@type": "City",
    name: "Cincinnati",
    containedInPlace: { "@type": "State", name: "Ohio" },
  },
  description:
    "Thorough deep cleaning service for Cincinnati homes. Covers inside appliances, baseboards, window sills, grout, and areas regular cleaning doesn't reach.",
  serviceType: "Deep Cleaning",
};

const faqItems = [
  {
    question: "What is included in a deep clean?",
    answer:
      "A Cincy Maid deep clean covers everything in a standard cleaning plus inside the oven, inside the refrigerator, baseboard wiping, window sill and track cleaning, grout scrubbing in bathrooms and kitchens, inside cabinets (emptied by you), ceiling fan blades, vent covers, light fixture dusting, and detailed scrubbing behind toilets and under sinks. It is our most thorough service.",
  },
  {
    question: "How long does a deep clean take?",
    answer:
      "A deep clean typically takes 3 to 6 hours depending on the size of your home and its current condition. A 2-bedroom apartment usually takes about 3 hours, while a 4-bedroom house may take 5 to 6 hours. Our teams work efficiently without cutting corners.",
  },
  {
    question: "How much does a deep clean cost in Cincinnati?",
    answer:
      "Deep cleaning pricing depends on your home's square footage, number of bedrooms and bathrooms, and the level of buildup. Deep cleans are priced higher than standard cleanings because they cover areas that are not part of a regular visit. You will see your exact price before confirming your booking — no surprises.",
  },
  {
    question: "How often should I get a deep clean?",
    answer:
      "We recommend a deep clean every 3 to 6 months, or seasonally. Many Cincinnati clients book a deep clean as their first appointment, then switch to recurring biweekly or monthly service to maintain the results. A deep clean is also ideal before hosting holidays, after renovations, or during spring cleaning.",
  },
  {
    question: "What is the difference between a deep clean and a standard clean?",
    answer:
      "A standard cleaning covers everyday surfaces — dusting, vacuuming, mopping, bathrooms, and kitchen surfaces. A deep clean goes further by tackling inside appliances, baseboards, grout, window tracks, ceiling fans, vent covers, and other areas that accumulate grime over time. Think of a deep clean as resetting your home to like-new condition.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

/* ------------------------------------------------------------------ */
/*  Icons                                                              */
/* ------------------------------------------------------------------ */

function CheckIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
    >
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const deepCleanChecklist = {
  kitchen: [
    "Inside oven and oven racks",
    "Inside refrigerator and freezer",
    "Inside microwave",
    "Exterior and interior of cabinets (emptied by you)",
    "Countertops, backsplash, and stovetop",
    "Sink scrubbed and sanitized",
    "Grout cleaning on tile surfaces",
    "Baseboards and crown molding",
    "Light fixtures and switch plates",
  ],
  bathrooms: [
    "Inside and behind toilets",
    "Shower grout and tile scrubbing",
    "Glass doors and shower tracks",
    "Inside medicine cabinets (emptied by you)",
    "Mirrors, countertops, and sinks",
    "Baseboards and vent covers",
    "Light fixtures and exhaust fan",
    "Floor scrubbing on hands and knees",
  ],
  livingBedrooms: [
    "Ceiling fan blades and light fixtures",
    "Window sills, tracks, and frames",
    "Baseboards throughout every room",
    "Behind and under furniture (movable pieces)",
    "Vent covers and air returns",
    "Detailed dusting of shelves and decor",
    "Vacuuming upholstered furniture",
    "Door frames and tops of doors",
    "All standard cleaning tasks included",
  ],
};

const whenToBook = [
  {
    title: "First-Time Clean",
    description:
      "Starting with a deep clean gives us a fresh baseline. After that, recurring visits keep everything maintained effortlessly.",
  },
  {
    title: "Seasonal Refresh",
    description:
      "Spring cleaning, fall reset, or pre-holiday prep. A deep clean every 3-6 months keeps your home in top shape year-round.",
  },
  {
    title: "Before or After Events",
    description:
      "Hosting a party, holiday gathering, or open house? A deep clean ensures every corner is guest-ready.",
  },
  {
    title: "Before Starting Recurring Service",
    description:
      "A deep clean first means your recurring visits maintain a higher standard from day one — no playing catch-up.",
  },
  {
    title: "Post-Renovation or Move-In",
    description:
      "Construction dust and move-in grime require more than a standard clean. Our deep clean handles the heavy lifting.",
  },
  {
    title: "When It Has Been a While",
    description:
      "No judgment. If your home needs some extra attention, a deep clean resets everything back to spotless.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */

export default function DeepCleaningPage() {
  return (
    <>
      {/* ── JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Hero ── */}
      <section className="relative bg-cream overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-teal/10 px-4 py-1.5 text-sm font-medium text-teal-dark mb-6">
            Our Most Thorough Service
          </span>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight">
            Deep Cleaning Service{" "}
            <span className="text-teal">in Cincinnati</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-charcoal-light max-w-3xl mx-auto leading-relaxed">
            A deep clean reaches every corner your regular routine misses —
            inside appliances, behind furniture, grout lines, baseboards, and
            more. Reset your home to like-new condition with one thorough visit.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center rounded-full bg-teal px-8 py-3.5 text-base font-semibold text-white shadow-lg hover:bg-teal-dark transition-colors"
            >
              Book a Deep Clean
            </Link>
            <a
              href="tel:513-951-7799"
              className="inline-flex items-center justify-center rounded-full border-2 border-teal px-8 py-3.5 text-base font-semibold text-teal hover:bg-teal hover:text-white transition-colors"
            >
              (513) 951-7799
            </a>
          </div>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-charcoal">
              What a <span className="text-teal">Deep Clean</span> Includes
            </h2>
            <p className="mt-4 text-charcoal-light text-lg max-w-2xl mx-auto">
              Everything in a standard cleaning, plus detailed attention to the
              areas that accumulate grime over time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Kitchen */}
            <div className="bg-cream rounded-2xl p-6 border border-sand-light">
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-charcoal mb-4">
                Kitchen
              </h3>
              <ul className="space-y-3">
                {deepCleanChecklist.kitchen.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckIcon className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bathrooms */}
            <div className="bg-cream rounded-2xl p-6 border border-sand-light">
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-charcoal mb-4">
                Bathrooms
              </h3>
              <ul className="space-y-3">
                {deepCleanChecklist.bathrooms.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckIcon className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Living Areas & Bedrooms */}
            <div className="bg-cream rounded-2xl p-6 border border-sand-light">
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-charcoal mb-4">
                Living Areas &amp; Bedrooms
              </h3>
              <ul className="space-y-3">
                {deepCleanChecklist.livingBedrooms.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckIcon className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Deep Clean vs Standard ── */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-charcoal">
              Deep Clean vs.{" "}
              <span className="text-teal">Standard Clean</span>
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-teal/30">
                  <th className="py-4 pr-6 text-charcoal font-semibold">
                    Area
                  </th>
                  <th className="py-4 px-6 text-charcoal font-semibold text-center">
                    Standard Clean
                  </th>
                  <th className="py-4 pl-6 text-charcoal font-semibold text-center">
                    Deep Clean
                  </th>
                </tr>
              </thead>
              <tbody className="text-charcoal-light">
                {[
                  ["Dusting, vacuuming, mopping", true, true],
                  ["Bathroom sanitizing", true, true],
                  ["Kitchen surfaces & stovetop", true, true],
                  ["Inside oven & refrigerator", false, true],
                  ["Baseboard wiping", false, true],
                  ["Window sills & tracks", false, true],
                  ["Grout scrubbing", false, true],
                  ["Ceiling fan blades", false, true],
                  ["Vent covers & air returns", false, true],
                  ["Behind & under furniture", false, true],
                  ["Inside cabinets", false, true],
                  ["Light fixtures & switch plates", false, true],
                ].map(([area, standard, deep]) => (
                  <tr
                    key={area as string}
                    className="border-b border-sand-light"
                  >
                    <td className="py-3 pr-6 text-sm">{area as string}</td>
                    <td className="py-3 px-6 text-center">
                      {standard ? (
                        <CheckIcon className="w-5 h-5 text-teal mx-auto" />
                      ) : (
                        <span className="text-charcoal-light/40">—</span>
                      )}
                    </td>
                    <td className="py-3 pl-6 text-center">
                      {deep ? (
                        <CheckIcon className="w-5 h-5 text-teal mx-auto" />
                      ) : (
                        <span className="text-charcoal-light/40">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── When to Book ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-charcoal">
              When to Book a{" "}
              <span className="text-teal">Deep Clean</span>
            </h2>
            <p className="mt-4 text-charcoal-light text-lg max-w-2xl mx-auto">
              A deep clean is the right choice whenever your home needs a reset.
              Here are the most common reasons Cincinnati families book one.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whenToBook.map((item) => (
              <div
                key={item.title}
                className="bg-cream rounded-2xl p-6 border border-sand-light hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-charcoal text-lg">
                  {item.title}
                </h3>
                <p className="mt-2 text-charcoal-light text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust Signals ── */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-charcoal">
              Why Cincinnati Families{" "}
              <span className="text-teal">Choose Us</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Background-Checked Teams",
                description:
                  "Every cleaner passes a comprehensive background check and in-person interview before entering your home.",
              },
              {
                title: "100% Satisfaction Guarantee",
                description:
                  "Not happy with any area? Contact us within 24 hours and we'll re-clean it at no charge.",
              },
              {
                title: "Fully Insured",
                description:
                  "Every visit is covered by our liability insurance for complete peace of mind.",
              },
              {
                title: "Eco-Friendly Products",
                description:
                  "Professional-grade, eco-friendly supplies that are safe for your family and pets.",
              },
            ].map((signal) => (
              <div
                key={signal.title}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-charcoal text-lg">
                  {signal.title}
                </h3>
                <p className="mt-2 text-charcoal-light text-sm leading-relaxed">
                  {signal.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-charcoal">
              Frequently Asked{" "}
              <span className="text-teal">Questions</span>
            </h2>
          </div>

          <div className="space-y-6">
            {faqItems.map((item, i) => (
              <div
                key={i}
                className="border border-sand-light rounded-xl p-6"
              >
                <h3 className="font-semibold text-charcoal text-lg">
                  {item.question}
                </h3>
                <p className="mt-3 text-charcoal-light leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Booking CTA ── */}
      <section className="py-16 md:py-24 bg-teal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white">
            Ready to Reset Your Home?
          </h2>
          <p className="mt-4 text-white/90 text-lg max-w-2xl mx-auto">
            Book a deep clean today and experience the difference a truly
            thorough cleaning makes. Every surface, every corner, every detail.
          </p>
          <div className="mt-8">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center rounded-full bg-white text-teal px-8 py-3.5 text-base font-semibold shadow-lg hover:bg-cream transition-colors"
            >
              Book a Deep Clean
            </Link>
          </div>

          <div className="mt-12 bg-white/85 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
            <ConvertLabsEmbed type="leads" />
          </div>
        </div>
      </section>
    </>
  );
}
