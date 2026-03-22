import type { Metadata } from "next";
import Link from "next/link";
import ConvertLabsEmbed from "@/components/ConvertLabsEmbed";

export const metadata: Metadata = {
  title: "Commercial Cleaning Services in Cincinnati, OH",
  description:
    "Tailored office, retail, and workspace cleaning for Cincinnati businesses. Fully insured teams, after-hours availability, and custom schedules. Request a free quote today.",
  alternates: {
    canonical: "https://cincymaid.com/commercial",
  },
  openGraph: {
    title: "Commercial Cleaning Services in Cincinnati, OH | Cincy Maid",
    description:
      "Tailored office, retail, and workspace cleaning for Cincinnati businesses. Fully insured teams and flexible scheduling.",
    url: "https://cincymaid.com/commercial",
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

const trustBadges = [
  {
    label: "Custom Quotes",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path
          fillRule="evenodd"
          d="M1 5.25A2.25 2.25 0 0 1 3.25 3h13.5A2.25 2.25 0 0 1 19 5.25v9.5A2.25 2.25 0 0 1 16.75 17H3.25A2.25 2.25 0 0 1 1 14.75v-9.5Zm1.5 5.81v3.69c0 .414.336.75.75.75h13.5a.75.75 0 0 0 .75-.75v-3.69l-7.03 3.515a1.5 1.5 0 0 1-1.34 0L2.5 11.06Zm0-1.121 7.374 3.687a.75.75 0 0 0 .67 0L17.5 9.93V5.25a.75.75 0 0 0-.75-.75H3.25a.75.75 0 0 0-.75.75v4.69Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    label: "Flexible Scheduling",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-13a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-3.25V5Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    label: "Fully Insured",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path
          fillRule="evenodd"
          d="M9.661 2.237a.531.531 0 0 1 .678 0 11.947 11.947 0 0 0 7.078 2.749.5.5 0 0 1 .479.425c.069.52.104 1.05.104 1.59 0 5.162-3.26 9.563-7.834 11.256a.48.48 0 0 1-.332 0C5.26 16.564 2 12.163 2 7c0-.538.035-1.069.104-1.589a.5.5 0 0 1 .48-.425 11.947 11.947 0 0 0 7.077-2.75Zm4.196 5.954a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

const infoCards = [
  {
    title: "Offices & Retail Spaces",
    description:
      "From a two-person startup to a multi-floor retail showroom, we scale our crew and checklist to match your footprint. Every plan is built around your space, traffic patterns, and priorities.",
  },
  {
    title: "Insured & Bonded",
    description:
      "Your business assets are protected. Every Cincy Maid team member carries full liability coverage and has passed a comprehensive background screening before stepping foot in your facility.",
  },
  {
    title: "After-Hours Available",
    description:
      "Prefer cleaning when the office is empty? We offer early-morning and evening crews so your space is spotless by the time your team arrives, with zero disruption to the workday.",
  },
];

const officesChecklist = [
  "Wipe and sanitize desks, keyboards, and phones",
  "Dust monitors, shelving, and partitions",
  "Vacuum carpet and mop hard floors",
  "Empty desk-side trash and recycling bins",
  "Clean glass partitions and interior windows",
  "Disinfect shared equipment and door handles",
  "Straighten chairs and communal spaces",
  "Restock paper and soap at shared stations",
];

const restroomChecklist = [
  "Scrub and disinfect all toilets and urinals",
  "Clean sinks, counters, and mirror surfaces",
  "Refill soap, paper towel, and tissue dispensers",
  "Sanitize door handles and stall locks",
  "Mop floors with hospital-grade disinfectant",
  "Empty sanitary bins and trash receptacles",
  "Wipe walls and partitions for splash marks",
  "Check and report maintenance issues",
];

const breakRoomChecklist = [
  "Wipe tables, counters, and seating surfaces",
  "Clean exterior and interior of microwaves",
  "Sanitize refrigerator handles and shelves",
  "Wash and dry any dishes left in the sink",
  "Degrease stovetop and small appliances",
  "Sweep and mop the floor thoroughly",
  "Empty and reline all trash cans",
  "Restock napkins and communal supplies",
];

const commonAreasChecklist = [
  "Vacuum and spot-clean reception furniture",
  "Dust artwork, signage, and display cases",
  "Wipe elevator buttons and handrails",
  "Clean entrance glass doors and sidelights",
  "Sweep and mop lobby and hallway floors",
  "Sanitize shared touchpoints (light switches, handles)",
  "Water and tidy indoor plants on request",
  "Empty lobby and hallway waste bins",
];

const faqs = [
  {
    question: "How do you create a custom cleaning plan for my business?",
    answer:
      "We start with a walkthrough of your space to understand square footage, traffic flow, and any industry-specific needs. From there, we draft a detailed task list with frequency recommendations and a transparent quote, all before any work begins.",
  },
  {
    question: "What times are available for commercial cleaning?",
    answer:
      "We offer morning, daytime, evening, and weekend slots. Most clients prefer after-hours service so there is zero disruption, but we are happy to work around your operating schedule.",
  },
  {
    question: "Do you carry commercial liability insurance?",
    answer:
      "Yes. Cincy Maid holds full commercial general liability insurance and bonding. We can provide a certificate of insurance for your records or your property management company upon request.",
  },
  {
    question: "Can you handle multi-location accounts?",
    answer:
      "Absolutely. We currently service several multi-site businesses across the Cincinnati metro area. You will have a single point of contact, unified billing, and consistent quality standards at every location.",
  },
  {
    question: "What green cleaning options do you offer?",
    answer:
      "Our default product line is eco-conscious and low-VOC. For businesses with stricter environmental policies, we can source LEED-compliant or Green Seal-certified products at no added cost.",
  },
  {
    question: "How quickly can we get started?",
    answer:
      "After the initial walkthrough and quote approval, we can typically begin service within one week. For urgent needs, we have accommodated same-week starts depending on crew availability.",
  },
];

export default function CommercialPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Commercial Cleaning Services in Cincinnati",
    provider: {
      "@type": "LocalBusiness",
      name: "Cincy Maid",
      url: "https://cincymaid.com",
      telephone: "(513) 951-7799",
    },
    areaServed: {
      "@type": "City",
      name: "Cincinnati",
      containedInPlace: { "@type": "State", name: "Ohio" },
    },
    description:
      "Professional commercial cleaning for offices, retail spaces, and small businesses in Greater Cincinnati. Flexible scheduling, fully insured teams, consistent results.",
    serviceType: "Commercial Cleaning",
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does commercial cleaning cost in Cincinnati?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Commercial cleaning pricing in Cincinnati depends on the size of your space, cleaning frequency, and specific requirements. Cincy Maid provides custom quotes for all commercial clients. Request a free quote at cincymaid.com/commercial or call (513) 951-7799.",
        },
      },
      {
        "@type": "Question",
        name: "Does Cincy Maid clean offices in Cincinnati?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Cincy Maid provides professional office and commercial cleaning across Greater Cincinnati including Hyde Park, Blue Ash, Mason, and downtown Cincinnati. We clean offices, retail spaces, studios, and small businesses with flexible scheduling around your business hours.",
        },
      },
      {
        "@type": "Question",
        name: "Are commercial cleaners insured?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. All Cincy Maid commercial cleaners are fully insured and have passed comprehensive background checks. We carry liability coverage for every commercial job.",
        },
      },
    ],
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
      <section className="bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight">
            Commercial Cleaning{" "}
            <span className="text-teal">Built for Your Business</span>
          </h1>
          <p className="mt-5 text-lg text-charcoal-light leading-relaxed max-w-2xl mx-auto">
            Your facility deserves more than a generic wipe-down. We design
            cleaning programs around the way your space is actually used, so
            every corner reflects the standard your brand sets.
          </p>

          {/* Trust Badges */}
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2.5 bg-white rounded-full px-5 py-2.5 border border-cream-dark shadow-sm"
              >
                <span className="text-teal">{badge.icon}</span>
                <span className="text-sm font-medium text-charcoal">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quote Form ── */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal text-center mb-8">
            Request a Free <span className="text-teal">Commercial Quote</span>
          </h2>
          <ConvertLabsEmbed type="commercial" />
        </div>
      </section>

      {/* ── Info Cards ── */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {infoCards.map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-2xl border border-cream-dark p-8 shadow-sm"
              >
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-charcoal mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-charcoal-light leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-charcoal text-center">
            What&rsquo;s <span className="text-teal">Included</span>
          </h2>
          <p className="mt-4 text-charcoal-light leading-relaxed max-w-2xl mx-auto text-center">
            Every commercial plan is customizable, but here is the foundation
            most Cincinnati businesses start with.
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {/* Offices & Workstations */}
            <div className="bg-white rounded-2xl border border-cream-dark p-6 shadow-sm">
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-charcoal mb-4">
                Offices &amp; Workstations
              </h3>
              <ul className="space-y-3">
                {officesChecklist.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckIcon className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Restrooms */}
            <div className="bg-white rounded-2xl border border-cream-dark p-6 shadow-sm">
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-charcoal mb-4">
                Restrooms
              </h3>
              <ul className="space-y-3">
                {restroomChecklist.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckIcon className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Break Rooms & Kitchens */}
            <div className="bg-white rounded-2xl border border-cream-dark p-6 shadow-sm">
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-charcoal mb-4">
                Break Rooms &amp; Kitchens
              </h3>
              <ul className="space-y-3">
                {breakRoomChecklist.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckIcon className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Common Areas & Reception */}
            <div className="bg-white rounded-2xl border border-cream-dark p-6 shadow-sm">
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-charcoal mb-4">
                Common Areas &amp; Reception
              </h3>
              <ul className="space-y-3">
                {commonAreasChecklist.map((item) => (
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

      {/* ── CTA Banner ── */}
      <section className="bg-teal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white">
            Ready to Elevate Your Workspace?
          </h2>
          <p className="mt-4 text-teal-light text-lg leading-relaxed max-w-xl mx-auto">
            Tell us about your facility and we will send a detailed proposal
            within 24 hours. No obligations, no fine print.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3.5 rounded-full bg-white text-teal-dark font-semibold shadow-sm hover:bg-cream transition-colors"
            >
              Contact Us
            </Link>
            <a
              href="tel:+15139517799"
              className="inline-flex items-center px-8 py-3.5 rounded-full border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Call (513) 951-7799
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-charcoal text-center mb-12">
            Commercial Cleaning <span className="text-teal">FAQ</span>
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

      {/* ── Need Help / Phone ── */}
      <section className="py-12 md:py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-charcoal-light text-lg">
            Have questions about commercial services?
          </p>
          <a
            href="tel:+15139517799"
            className="mt-3 inline-flex items-center gap-2 text-2xl md:text-3xl font-bold text-teal-dark hover:text-teal transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-7 h-7"
            >
              <path
                fillRule="evenodd"
                d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z"
                clipRule="evenodd"
              />
            </svg>
            (513) 951-7799
          </a>
          <p className="mt-2 text-sm text-charcoal-light">
            Or email us at{" "}
            <a
              href="mailto:admin@cincymaid.com"
              className="text-teal-dark hover:underline"
            >
              admin@cincymaid.com
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
