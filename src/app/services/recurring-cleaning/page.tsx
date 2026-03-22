import type { Metadata } from "next";
import Link from "next/link";
import ConvertLabsEmbed from "@/components/ConvertLabsEmbed";

/* ------------------------------------------------------------------ */
/*  Metadata                                                           */
/* ------------------------------------------------------------------ */

export const metadata: Metadata = {
  title: "Recurring House Cleaning in Cincinnati",
  description:
    "Weekly, biweekly, and monthly recurring house cleaning in Cincinnati. Starting at $155 per visit with up to 20% off for recurring clients. Background-checked teams, eco-friendly supplies, 100% satisfaction guarantee. Book online today.",
  alternates: {
    canonical: "https://cincymaid.com/services/recurring-cleaning",
  },
  openGraph: {
    title: "Recurring House Cleaning in Cincinnati | Cincy Maid",
    description:
      "Weekly, biweekly, and monthly recurring house cleaning in Cincinnati. Starting at $155 with up to 20% recurring discount.",
    url: "https://cincymaid.com/services/recurring-cleaning",
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
  name: "Recurring House Cleaning in Cincinnati",
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
    "Recurring weekly, biweekly, and monthly house cleaning for Cincinnati homes. Background-checked teams, eco-friendly supplies, and up to 20% recurring discount.",
  serviceType: "Recurring House Cleaning",
};

const faqItems = [
  {
    question: "How much does recurring house cleaning cost in Cincinnati?",
    answer:
      "Recurring house cleaning with Cincy Maid starts at $155 per visit. Final pricing depends on your home size, number of bedrooms and bathrooms, and cleaning frequency. Weekly clients save the most — up to 20% compared to one-time cleaning rates. You always see your exact price before confirming.",
  },
  {
    question: "What's included in a recurring cleaning?",
    answer:
      "Every recurring visit includes dusting all surfaces, vacuuming and mopping floors, cleaning and sanitizing bathrooms, kitchen cleaning including countertops, stovetop, and exterior appliances, emptying trash, and making beds. We follow a detailed checklist so nothing gets missed, visit after visit.",
  },
  {
    question: "Can I skip or reschedule a recurring cleaning?",
    answer:
      "Absolutely. We understand plans change. You can skip or reschedule any visit with at least 48 hours notice at no charge. Your recurring schedule simply picks up on the next regular date. Manage everything online or call us at (513) 951-7799.",
  },
  {
    question: "Do I get the same cleaner each time?",
    answer:
      "We do our best to assign the same team to your home for every visit. Consistency means your cleaners learn your preferences and the layout of your home, so each clean gets better over time. If your regular team is unavailable, we'll send an equally trained backup.",
  },
  {
    question: "How do I get the recurring cleaning discount?",
    answer:
      "The discount is applied automatically when you choose a recurring plan during booking. Weekly service receives the largest discount (up to 20% off), biweekly saves around 10-15%, and monthly plans also receive a discount compared to one-time pricing. No coupon code needed — just select your frequency.",
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

const frequencies = [
  {
    name: "Weekly",
    discount: "Up to 20% off",
    description:
      "Best for families with kids, pets, or busy schedules. Your home stays spotless every single week.",
    highlight: true,
  },
  {
    name: "Biweekly",
    discount: "10–15% off",
    description:
      "Our most popular option. Keeps your home consistently clean without the cost of weekly visits.",
    highlight: false,
  },
  {
    name: "Monthly",
    discount: "Recurring discount",
    description:
      "A great supplement to your own cleaning routine. Perfect for smaller homes or lighter upkeep.",
    highlight: false,
  },
];

const includedItems = [
  "Dust all reachable surfaces, shelves, and baseboards",
  "Vacuum all carpets, rugs, and hard floors",
  "Mop tile, hardwood, and vinyl floors",
  "Clean and sanitize all bathrooms (toilets, showers, sinks, mirrors)",
  "Kitchen countertops, stovetop, and exterior appliances",
  "Wipe cabinet fronts and backsplash",
  "Empty all trash cans and replace liners",
  "Make beds and fluff pillows",
  "Spot-clean light switches and door handles",
  "General tidy-up of each room",
];

const trustSignals = [
  {
    title: "Background-Checked Teams",
    description:
      "Every cleaner passes a comprehensive background check and in-person interview before entering your home.",
  },
  {
    title: "100% Satisfaction Guarantee",
    description:
      "Not happy with any area? Contact us within 24 hours and we'll send a team back to re-clean it at no charge.",
  },
  {
    title: "Fully Insured",
    description:
      "Every visit is covered by our liability insurance, so you have complete peace of mind.",
  },
  {
    title: "Eco-Friendly Products",
    description:
      "We use professional-grade, eco-friendly cleaning supplies that are safe for your family and pets.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */

export default function RecurringCleaningPage() {
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
            Save Up to 20% with a Recurring Plan
          </span>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight">
            Recurring House Cleaning{" "}
            <span className="text-teal">in Cincinnati</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-charcoal-light max-w-3xl mx-auto leading-relaxed">
            A clean home, every week — without lifting a finger. Choose weekly,
            biweekly, or monthly service and let our background-checked teams
            keep your Cincinnati home sparkling on autopilot.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center rounded-full bg-teal px-8 py-3.5 text-base font-semibold text-white shadow-lg hover:bg-teal-dark transition-colors"
            >
              Book Recurring Cleaning
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

      {/* ── Frequency Options ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-charcoal">
              Choose <span className="text-teal">Your Frequency</span>
            </h2>
            <p className="mt-4 text-charcoal-light text-lg max-w-2xl mx-auto">
              The more often we clean, the more you save. Every plan includes the
              same thorough, detailed cleaning.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {frequencies.map((freq) => (
              <div
                key={freq.name}
                className={`relative rounded-2xl p-8 text-center transition-shadow hover:shadow-lg ${
                  freq.highlight
                    ? "bg-teal text-white ring-2 ring-teal shadow-lg"
                    : "bg-cream text-charcoal border border-sand-light"
                }`}
              >
                {freq.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white text-teal px-4 py-1 text-xs font-bold uppercase tracking-wide shadow">
                    Best Value
                  </span>
                )}
                <h3
                  className={`font-[family-name:var(--font-playfair)] text-2xl font-bold ${
                    freq.highlight ? "text-white" : "text-charcoal"
                  }`}
                >
                  {freq.name}
                </h3>
                <p
                  className={`mt-2 text-sm font-semibold uppercase tracking-wide ${
                    freq.highlight ? "text-white/80" : "text-teal"
                  }`}
                >
                  {freq.discount}
                </p>
                <p
                  className={`mt-4 text-base leading-relaxed ${
                    freq.highlight ? "text-white/90" : "text-charcoal-light"
                  }`}
                >
                  {freq.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-charcoal">
              What&apos;s <span className="text-teal">Included</span>
            </h2>
            <p className="mt-4 text-charcoal-light text-lg max-w-2xl mx-auto">
              Every recurring visit follows a detailed checklist so nothing gets
              missed — no matter which frequency you choose.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
            {includedItems.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckIcon className="w-5 h-5 text-teal mt-0.5 shrink-0" />
                <span className="text-charcoal leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing Transparency ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-charcoal">
                Transparent <span className="text-teal">Pricing</span>
              </h2>
              <p className="mt-4 text-charcoal-light text-lg leading-relaxed">
                Recurring plans start at{" "}
                <span className="font-semibold text-charcoal">$155</span> per
                visit. Your exact price depends on home size, number of bedrooms
                and bathrooms, and your chosen frequency.
              </p>
              <p className="mt-4 text-charcoal-light text-lg leading-relaxed">
                Weekly clients save up to{" "}
                <span className="font-semibold text-charcoal">20%</span>{" "}
                compared to one-time cleaning rates. The discount is applied
                automatically — no coupon code needed.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-teal mt-0.5 shrink-0" />
                  <span className="text-charcoal">
                    See your exact price before confirming — no surprises
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-teal mt-0.5 shrink-0" />
                  <span className="text-charcoal">
                    No contracts — skip or cancel anytime
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-teal mt-0.5 shrink-0" />
                  <span className="text-charcoal">
                    All supplies and equipment included
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-cream rounded-2xl p-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-teal-dark">
                Recurring plans from
              </p>
              <p className="mt-2 font-[family-name:var(--font-playfair)] text-6xl font-bold text-charcoal">
                $155
              </p>
              <p className="text-charcoal-light mt-1">per visit</p>
              <div className="mt-4 inline-block rounded-full bg-teal/10 px-4 py-1.5 text-sm font-semibold text-teal-dark">
                Save up to 20% with weekly service
              </div>
              <Link
                href="/booking"
                className="mt-6 block rounded-full bg-teal px-8 py-3.5 text-base font-semibold text-white shadow-lg hover:bg-teal-dark transition-colors"
              >
                Get Your Instant Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Signals ── */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-charcoal">
              Why Cincinnati Families{" "}
              <span className="text-teal">Trust Us</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustSignals.map((signal) => (
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
            Ready to Put Your Cleaning on Autopilot?
          </h2>
          <p className="mt-4 text-white/90 text-lg max-w-2xl mx-auto">
            Book your recurring plan today and enjoy a consistently clean home —
            no reminders, no hassle, no missed corners.
          </p>
          <div className="mt-8">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center rounded-full bg-white text-teal px-8 py-3.5 text-base font-semibold shadow-lg hover:bg-cream transition-colors"
            >
              Book Recurring Cleaning
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
