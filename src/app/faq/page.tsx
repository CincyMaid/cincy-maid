import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQ | House Cleaning Questions Answered | Cincy Maid",
  description:
    "Answers to the most common questions Cincinnati homeowners ask about Cincy Maid — pricing, what's included, trust, scheduling, and your account.",
  alternates: {
    canonical: "https://cincymaid.com/faq",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does house cleaning cost in Cincinnati?",
      acceptedAnswer: { "@type": "Answer", text: "Recurring cleaning starts at $155 per visit, priced by bedrooms and bathrooms. Get an instant quote at cincymaid.com/booking — no callbacks, no estimates." },
    },
    {
      "@type": "Question",
      name: "Are there any hidden fees or add-on charges?",
      acceptedAnswer: { "@type": "Answer", text: "No. The price you see when you book is the price you pay. We don't charge for supplies, travel, or show up with a longer invoice." },
    },
    {
      "@type": "Question",
      name: "Do you charge for the first cleaning?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. All new clients start with a deep clean at the standard rate. It sets the baseline for every visit after." },
    },
    {
      "@type": "Question",
      name: "Can I get a discount for recurring service?",
      acceptedAnswer: { "@type": "Answer", text: "Recurring clients get priority scheduling and consistent teams. Pricing is already structured to reward regular service — the more frequently you book, the more cost-effective each visit becomes." },
    },
    {
      "@type": "Question",
      name: "What does a standard cleaning include?",
      acceptedAnswer: { "@type": "Answer", text: "Living areas and bedrooms (vacuuming, mopping, dusting, baseboards, ceiling fans, mirrors), bathrooms (toilet, shower/tub, vanity, tile grout, mirrors, floors), and kitchen (countertops, backsplash, stovetop, microwave interior, cabinet faces, sink, appliance exteriors). We bring everything we need." },
    },
    {
      "@type": "Question",
      name: "What's not included in a standard clean?",
      acceptedAnswer: { "@type": "Answer", text: "Inside ovens, inside refrigerators, inside cabinets, laundry, dishes, and exterior windows are not part of a standard visit. These can be added as extras — ask when booking." },
    },
    {
      "@type": "Question",
      name: "Do you bring your own supplies and equipment?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. We bring professional-grade products and all necessary equipment. You don't need to provide anything." },
    },
    {
      "@type": "Question",
      name: "What's the difference between a standard clean and a deep clean?",
      acceptedAnswer: { "@type": "Answer", text: "A standard clean maintains a home that's already in reasonable shape. A deep clean goes further — inside appliances, detailed baseboards, grout scrubbing, areas that don't get attention during regular visits. All first-time clients start with a deep clean." },
    },
    {
      "@type": "Question",
      name: "How do I book a cleaning?",
      acceptedAnswer: { "@type": "Answer", text: "Online at cincymaid.com/booking in under two minutes. Choose your service, pick a date, see your price, and you're confirmed. No phone tag required." },
    },
    {
      "@type": "Question",
      name: "Can I reschedule or cancel?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Contact us at least 48 hours before your appointment and we'll move it with no hassle. Cancellations with less than 24 hours notice may be subject to a short-notice fee." },
    },
    {
      "@type": "Question",
      name: "How far in advance do I need to book?",
      acceptedAnswer: { "@type": "Answer", text: "We recommend booking 3–5 days ahead for recurring service. For one-time or move-out cleans, a week or more is ideal to guarantee your preferred date." },
    },
    {
      "@type": "Question",
      name: "Can you clean if I'm not home?",
      acceptedAnswer: { "@type": "Answer", text: "Absolutely. Most of our recurring clients give us a key or door code. We'll handle everything and lock up when we leave." },
    },
    {
      "@type": "Question",
      name: "Are your cleaners background-checked?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Every Cincy Maid cleaner clears a multi-step background screening before their first assignment. We're also fully insured and BBB accredited. Trust is why most of our clients stay." },
    },
    {
      "@type": "Question",
      name: "What happens if something isn't cleaned to my standard?",
      acceptedAnswer: { "@type": "Answer", text: "Contact us within 24 hours and we come back and fix it at no charge. No forms, no arguments." },
    },
    {
      "@type": "Question",
      name: "What if something is damaged during a cleaning?",
      acceptedAnswer: { "@type": "Answer", text: "We carry full general liability insurance. If something is damaged, contact us right away and we'll make it right." },
    },
    {
      "@type": "Question",
      name: "Is Cincy Maid locally owned or a franchise?",
      acceptedAnswer: { "@type": "Answer", text: "Locally owned. We started in Cincinnati in 2024 and are not affiliated with any national franchise. You're working directly with the owner." },
    },
    {
      "@type": "Question",
      name: "How do I use my credits?",
      acceptedAnswer: { "@type": "Answer", text: "Credits are applied automatically at checkout when you book online. If you have a question about your credit balance, contact us at admin@cincymaid.com." },
    },
    {
      "@type": "Question",
      name: "How do I pause or cancel my recurring service?",
      acceptedAnswer: { "@type": "Answer", text: "Just reach out to us at admin@cincymaid.com or call (513) 951-7799. No contracts, no cancellation fees. We ask for reasonable notice so we can adjust our schedule." },
    },
    {
      "@type": "Question",
      name: "How do I update my home details or special instructions?",
      acceptedAnswer: { "@type": "Answer", text: "Contact us directly and we'll update your account. If something changes before a specific visit, let us know at least 24 hours ahead." },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://cincymaid.com" },
    { "@type": "ListItem", position: 2, name: "FAQ", item: "https://cincymaid.com/faq" },
  ],
};

const sections = [
  {
    title: "Pricing",
    items: [
      {
        q: "How much does house cleaning cost in Cincinnati?",
        a: "Recurring cleaning starts at $155 per visit, priced by bedrooms and bathrooms. Get an instant quote at cincymaid.com/booking — no callbacks, no estimates.",
      },
      {
        q: "Are there any hidden fees or add-on charges?",
        a: "No. The price you see when you book is the price you pay. We don't charge for supplies, travel, or show up with a longer invoice.",
      },
      {
        q: "Do you charge for the first cleaning?",
        a: "Yes. All new clients start with a deep clean at the standard rate. It sets the baseline for every visit after.",
      },
      {
        q: "Can I get a discount for recurring service?",
        a: "Recurring clients get priority scheduling and consistent teams. Pricing is already structured to reward regular service — the more frequently you book, the more cost-effective each visit becomes.",
      },
    ],
  },
  {
    title: "What's Included",
    items: [
      {
        q: "What does a standard cleaning include?",
        a: "Living areas and bedrooms (vacuuming, mopping, dusting, baseboards, ceiling fans, mirrors), bathrooms (toilet, shower/tub, vanity, tile grout, mirrors, floors), and kitchen (countertops, backsplash, stovetop, microwave interior, cabinet faces, sink, appliance exteriors). We bring everything we need.",
      },
      {
        q: "What's not included in a standard clean?",
        a: "Inside ovens, inside refrigerators, inside cabinets, laundry, dishes, and exterior windows are not part of a standard visit. These can be added as extras — ask when booking.",
      },
      {
        q: "Do you bring your own supplies and equipment?",
        a: "Yes. We bring professional-grade products and all necessary equipment. You don't need to provide anything.",
      },
      {
        q: "What's the difference between a standard clean and a deep clean?",
        a: "A standard clean maintains a home that's already in reasonable shape. A deep clean goes further — inside appliances, detailed baseboards, grout scrubbing, areas that don't get attention during regular visits. All first-time clients start with a deep clean.",
      },
    ],
  },
  {
    title: "Booking & Scheduling",
    items: [
      {
        q: "How do I book a cleaning?",
        a: "Online at cincymaid.com/booking in under two minutes. Choose your service, pick a date, see your price, and you're confirmed. No phone tag required.",
      },
      {
        q: "Can I reschedule or cancel?",
        a: "Yes. Contact us at least 48 hours before your appointment and we'll move it with no hassle. Cancellations with less than 24 hours notice may be subject to a short-notice fee.",
      },
      {
        q: "How far in advance do I need to book?",
        a: "We recommend booking 3–5 days ahead for recurring service. For one-time or move-out cleans, a week or more is ideal to guarantee your preferred date.",
      },
      {
        q: "Can you clean if I'm not home?",
        a: "Absolutely. Most of our recurring clients give us a key or door code. We'll handle everything and lock up when we leave.",
      },
    ],
  },
  {
    title: "Trust & Safety",
    items: [
      {
        q: "Are your cleaners background-checked?",
        a: "Yes. Every Cincy Maid cleaner clears a multi-step background screening before their first assignment. We're also fully insured and BBB accredited. Trust is why most of our clients stay.",
      },
      {
        q: "What happens if something isn't cleaned to my standard?",
        a: "Contact us within 24 hours and we come back and fix it at no charge. No forms, no arguments.",
      },
      {
        q: "What if something is damaged during a cleaning?",
        a: "We carry full general liability insurance. If something is damaged, contact us right away and we'll make it right.",
      },
      {
        q: "Is Cincy Maid locally owned or a franchise?",
        a: "Locally owned. We started in Cincinnati in 2024 and are not affiliated with any national franchise. You're working directly with the owner.",
      },
    ],
  },
  {
    title: "Your Account",
    items: [
      {
        q: "How do I use my credits?",
        a: "Credits are applied automatically at checkout when you book online. If you have a question about your credit balance, contact us at admin@cincymaid.com.",
      },
      {
        q: "How do I pause or cancel my recurring service?",
        a: "Just reach out to us at admin@cincymaid.com or call (513) 951-7799. No contracts, no cancellation fees. We ask for reasonable notice so we can adjust our schedule.",
      },
      {
        q: "How do I update my home details or special instructions?",
        a: "Contact us directly and we'll update your account. If something changes before a specific visit, let us know at least 24 hours ahead.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-charcoal sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg text-charcoal-light">
            Everything you want to know before handing over a key.
          </p>
        </div>
      </section>

      {/* Accordion Sections */}
      <section className="py-14 sm:py-18 bg-white">
        <div className="mx-auto max-w-3xl px-4">
          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-charcoal mb-4">
                  {section.title}
                </h2>
                <FaqAccordion items={section.items} />
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 rounded-2xl bg-cream border border-cream-dark p-8 text-center">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-charcoal mb-3">
              Still have a question?
            </h2>
            <p className="text-charcoal-light mb-6">
              Call us at{" "}
              <a href="tel:+15139517799" className="font-semibold text-teal hover:underline">
                (513) 951-7799
              </a>{" "}
              or email{" "}
              <a href="mailto:admin@cincymaid.com" className="font-semibold text-teal hover:underline">
                admin@cincymaid.com
              </a>{" "}
              — we typically respond within a few hours.
            </p>
            <Link
              href="/booking"
              className="inline-flex items-center justify-center rounded-full bg-teal px-8 py-3 text-base font-semibold text-white hover:bg-teal/90 transition-colors"
            >
              Book a Cleaning
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
