import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "House Cleaning Services in Cincinnati, OH",
  description:
    "Residential, commercial, and move-in/move-out cleaning services across Cincinnati. Recurring plans starting at $120. Trained teams, consistent results, flexible scheduling.",
  alternates: {
    canonical: "https://cincymaid.com/services",
  },
  openGraph: {
    title: "House Cleaning Services in Cincinnati, OH | CincyMaid",
    description:
      "Residential, commercial, and move-in/move-out cleaning services across Cincinnati. Recurring plans starting at $120.",
    url: "https://cincymaid.com/services",
  },
};

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

const frequencyOptions = [
  "Weekly",
  "Bi-Weekly",
  "Monthly",
  "One-Time Deep Clean",
];

const livingAreasChecklist = [
  "Dust all reachable surfaces, shelves, and ledges",
  "Vacuum carpets and rugs edge to edge",
  "Mop hard floors with residue-free solution",
  "Wipe down baseboards and door frames",
  "Clean mirrors and glass surfaces",
  "Straighten cushions and fold throw blankets",
  "Empty wastebaskets and replace liners",
  "Spot-clean light switches and outlet covers",
];

const bathroomChecklist = [
  "Scrub and sanitize toilet inside and out",
  "Deep-clean shower walls, door, and tub basin",
  "Polish vanity counters and sink fixtures",
  "Wipe mirrors streak-free",
  "Clean tile grout lines",
  "Empty trash and replace liner",
  "Restock and fold visible towels neatly",
  "Sweep and mop floor from corner to corner",
  "Disinfect door handles and light switches",
];

const kitchenChecklist = [
  "Wipe down all countertops and backsplash",
  "Clean exterior of appliances (fridge, oven, microwave, dishwasher)",
  "Scrub sink basin and polish faucet",
  "Degrease stovetop and range hood exterior",
  "Wipe cabinet faces and hardware",
  "Clean inside microwave",
  "Sweep and mop floor thoroughly",
  "Empty trash and recycling bins",
  "Spot-clean fingerprints on stainless steel",
];

const commercialIncludes = [
  "Desk and workstation sanitation",
  "Reception and lobby upkeep",
  "Restroom deep-cleaning",
  "Kitchen and break room refresh",
  "Floor care: vacuum, mop, and polish",
  "Trash removal and liner replacement",
  "Window and glass partition cleaning",
  "Custom task lists for your business",
];

const moveFeatures = [
  {
    title: "Move-In Ready",
    description:
      "Start fresh in your new Cincinnati home. We sanitize every surface, cabinet interior, and appliance so you can unpack without worry.",
  },
  {
    title: "Move-Out Spotless",
    description:
      "Maximize your deposit or impress your buyers. Our departure clean covers walls, baseboards, fixtures, and forgotten corners most tenants miss.",
  },
  {
    title: "Same-Week Availability",
    description:
      "Closing dates shift fast. Our flexible scheduling means we can often fit your move clean in within 48 hours of your call.",
  },
];

const faqs = [
  {
    question: "What does a standard residential cleaning include?",
    answer:
      "Every visit covers dusting, vacuuming, mopping, bathroom sanitizing, and kitchen surface cleaning. We follow a room-by-room checklist so nothing gets skipped, and you can add extras like interior fridge or oven cleaning at booking.",
  },
  {
    question: "How is pricing determined?",
    answer:
      "We base quotes on your home's square footage, number of bedrooms and bathrooms, and the cleaning frequency you choose. Recurring plans start at $120 per visit, and you will always see your exact price before confirming.",
  },
  {
    question: "Do I need to provide cleaning supplies or equipment?",
    answer:
      "No. Our teams arrive fully equipped with professional-grade, eco-conscious products and all necessary tools. If you have a preferred product for a specific surface, just let us know and we are happy to use it.",
  },
  {
    question: "Can I change my cleaning schedule after signing up?",
    answer:
      "Absolutely. You can switch between weekly, bi-weekly, or monthly plans at any time with no penalty. We just ask for 48 hours notice so we can adjust our routing.",
  },
  {
    question: "Are your cleaners insured and background-checked?",
    answer:
      "Yes. Every CincyMaid team member is fully insured, bonded, and has passed a thorough background check. We also conduct hands-on training before anyone is assigned to a client home.",
  },
  {
    question: "What areas of Cincinnati do you serve?",
    answer:
      "We cover the entire Greater Cincinnati region including Hyde Park, Oakley, Mason, West Chester, Mt. Lookout, Anderson Township, and many more neighborhoods. Visit our Service Areas page for the complete list.",
  },
];

export default function ServicesPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "House Cleaning Services",
    provider: {
      "@type": "LocalBusiness",
      name: "CincyMaid",
      url: "https://cincymaid.com",
      telephone: "+15139517799",
      email: "admin@cincymaid.com",
      areaServed: {
        "@type": "City",
        name: "Cincinnati",
        addressRegion: "OH",
      },
    },
    serviceType: "House Cleaning",
    areaServed: {
      "@type": "City",
      name: "Cincinnati",
      addressRegion: "OH",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cleaning Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Residential Cleaning",
            description:
              "Recurring and one-time house cleaning for Cincinnati homes.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Commercial Cleaning",
            description:
              "Office and retail cleaning services for Cincinnati businesses.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Move-In / Move-Out Cleaning",
            description:
              "Thorough transition cleaning for Cincinnati renters and homeowners.",
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="relative bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight">
              Cleaning That Fits{" "}
              <span className="text-teal">Your Cincinnati Life</span>
            </h1>
            <p className="mt-5 text-lg text-charcoal-light leading-relaxed max-w-lg">
              Whether it&rsquo;s a busy family home in Hyde Park, a downtown
              condo, or an office on the east side, we tailor every visit to the
              way you actually live and work.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/booking"
                className="inline-flex items-center px-6 py-3 rounded-full bg-teal text-white font-semibold shadow-sm hover:bg-teal-dark transition-colors"
              >
                Get Your Quote
              </Link>
              <a
                href="#residential"
                className="inline-flex items-center px-6 py-3 rounded-full border-2 border-teal text-teal-dark font-semibold hover:bg-teal-light/20 transition-colors"
              >
                Explore Services
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-sand-light">
            {/* Replace with actual hero image */}
            <Image
              src="/images/services-hero.jpg"
              alt="CincyMaid team member cleaning a bright Cincinnati living room"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ── Residential Cleaning ── */}
      <section id="residential" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Banner */}
          <div className="relative rounded-2xl overflow-hidden bg-sand-light aspect-[21/9] mb-10">
            <Image
              src="/images/residential-banner.jpg"
              alt="Freshly cleaned Cincinnati home interior with natural light"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <span className="absolute top-4 left-4 bg-coral text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow">
              Most Popular
            </span>
          </div>

          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-charcoal">
            Residential Cleaning
          </h2>
          <p className="mt-4 text-charcoal-light leading-relaxed max-w-2xl">
            Your home should feel like a retreat, not a chore list. Our trained
            crews handle every room with a detailed, repeatable checklist so the
            results are consistent whether it&rsquo;s your first clean or your
            fiftieth. Choose the cadence that suits your household and
            we&rsquo;ll handle the rest.
          </p>

          {/* Frequency chips */}
          <div className="mt-6 flex flex-wrap gap-3">
            {frequencyOptions.map((freq) => (
              <span
                key={freq}
                className="inline-flex items-center px-4 py-2 rounded-full bg-teal-light/20 text-teal-dark text-sm font-medium"
              >
                {freq}
              </span>
            ))}
          </div>

          {/* Pricing note */}
          <p className="mt-5 text-sm text-charcoal-light">
            Recurring plans start at{" "}
            <span className="font-semibold text-teal-dark">$120</span> per
            visit. Final pricing depends on home size and selected add-ons.
          </p>

          {/* Checklist Cards */}
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {/* Living Areas & Bedrooms */}
            <div className="bg-white rounded-2xl border border-cream-dark p-6 shadow-sm">
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-charcoal mb-4">
                Living Areas &amp; Bedrooms
              </h3>
              <ul className="space-y-3">
                {livingAreasChecklist.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckIcon className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bathrooms */}
            <div className="bg-white rounded-2xl border border-cream-dark p-6 shadow-sm">
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-charcoal mb-4">
                Bathrooms
              </h3>
              <ul className="space-y-3">
                {bathroomChecklist.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckIcon className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kitchen */}
            <div className="bg-white rounded-2xl border border-cream-dark p-6 shadow-sm">
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-charcoal mb-4">
                Kitchen
              </h3>
              <ul className="space-y-3">
                {kitchenChecklist.map((item) => (
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

      {/* ── Commercial Cleaning ── */}
      <section id="commercial" className="py-16 md:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center mb-10">
            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-charcoal">
                Commercial Cleaning
              </h2>
              <p className="mt-4 text-charcoal-light leading-relaxed">
                A clean workspace signals professionalism and keeps your team
                healthy. We build custom cleaning programs for offices, retail
                locations, and shared workspaces throughout Greater Cincinnati.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-sand-light">
              <Image
                src="/images/office-space.jpg"
                alt="Clean, professional Cincinnati office space maintained by CincyMaid"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {commercialIncludes.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-white rounded-xl p-5 border border-cream-dark shadow-sm"
              >
                <CheckIcon className="w-5 h-5 text-coral shrink-0 mt-0.5" />
                <span className="text-sm text-charcoal-light">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/commercial"
              className="inline-flex items-center px-6 py-3 rounded-full bg-teal text-white font-semibold shadow-sm hover:bg-teal-dark transition-colors"
            >
              View Commercial Details
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 ml-2"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 0 1 .75-.75h10.638l-3.22-3.22a.75.75 0 1 1 1.061-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06l3.22-3.22H3.75A.75.75 0 0 1 3 10Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Move-In / Move-Out ── */}
      <section id="move" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-charcoal text-center">
            Move-In &amp; Move-Out Cleaning
          </h2>
          <p className="mt-4 text-charcoal-light leading-relaxed max-w-2xl mx-auto text-center">
            Transitions are stressful enough without scrubbing floors on moving
            day. Hand the deep clean to us and focus on what matters.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {moveFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl border border-cream-dark p-8 shadow-sm text-center"
              >
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-charcoal mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-charcoal-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/booking"
              className="inline-flex items-center px-8 py-3.5 rounded-full bg-coral text-white font-semibold shadow-sm hover:bg-coral/90 transition-colors"
            >
              Book Your Move Clean
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-charcoal text-center mb-12">
            Frequently Asked <span className="text-teal">Questions</span>
          </h2>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group bg-white rounded-xl border border-cream-dark shadow-sm"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-charcoal font-medium list-none">
                  <span>{faq.question}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5 text-teal shrink-0 ml-4 transition-transform duration-200 group-open:rotate-180"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-sm text-charcoal-light leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
