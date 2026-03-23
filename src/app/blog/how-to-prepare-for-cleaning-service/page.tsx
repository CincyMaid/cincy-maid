import type { Metadata } from "next";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Metadata                                                           */
/* ------------------------------------------------------------------ */

export const metadata: Metadata = {
  title: "How to Prepare for a House Cleaning Service",
  description:
    "Not sure what to do before your cleaning team arrives? Here's exactly how to prepare, and what you don't need to bother with.",
  alternates: {
    canonical:
      "https://cincymaid.com/blog/how-to-prepare-for-cleaning-service",
  },
  openGraph: {
    title: "How to Prepare for a House Cleaning Service | Cincy Maid",
    description:
      "Not sure what to do before your cleaning team arrives? Here's exactly how to prepare, and what you don't need to bother with.",
    url: "https://cincymaid.com/blog/how-to-prepare-for-cleaning-service",
    type: "article",
    publishedTime: "2026-03-21",
  },
};

/* ------------------------------------------------------------------ */
/*  JSON-LD                                                            */
/* ------------------------------------------------------------------ */

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Prepare Your Cincinnati Home for a Cleaning Service",
  description:
    "Not sure what to do before your cleaning team arrives? Here's exactly how to prepare, and what you don't need to bother with.",
  datePublished: "2026-03-21",
  dateModified: "2026-03-21",
  author: {
    "@type": "Organization",
    name: "Cincy Maid",
    url: "https://cincymaid.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Cincy Maid",
    url: "https://cincymaid.com",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://cincymaid.com/blog/how-to-prepare-for-cleaning-service",
  },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "h2", "article p:first-of-type"],
  },
};

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "How to Prepare Your Cincinnati Home for a Cleaning Service",
  description:
    "Not sure what to do before your cleaning team arrives? Here's exactly how to prepare, and what you don't need to bother with.",
  datePublished: "2026-03-21",
  dateModified: "2026-03-21",
  author: {
    "@type": "Organization",
    name: "Cincy Maid",
    url: "https://cincymaid.com",
  },
  url: "https://cincymaid.com/blog/how-to-prepare-for-cleaning-service",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need to tidy up before my house cleaner arrives?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, just pick up loose items so cleaners can access surfaces. You don't need to pre-clean.",
      },
    },
    {
      "@type": "Question",
      name: "Should I be home when the house cleaner comes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Up to you. Many Cincy Maid clients provide a key or garage code. All cleaners are background-checked and fully insured.",
      },
    },
    {
      "@type": "Question",
      name: "What if something isn't cleaned the way I expected?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contact us within 24 hours and we'll send a team back at no charge. That's our satisfaction guarantee.",
      },
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */

export default function HowToPreparePost() {
  return (
    <>
      {/* ── JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Header ── */}
      <section className="bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <Link
            href="/blog"
            className="text-sm font-semibold text-teal hover:text-teal-dark transition-colors"
          >
            &larr; Back to Blog
          </Link>
          <h1 className="mt-6 font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
            How to Prepare Your Cincinnati Home{" "}
            <span className="text-teal">for a Cleaning Service</span>
          </h1>
          <p className="mt-4 text-charcoal-light text-sm">
            By{" "}
            <span className="font-medium text-charcoal">Cincy Maid Team</span>{" "}
            &middot; March 21, 2026
          </p>
        </div>
      </section>

      {/* ── Article Body ── */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-charcoal-light text-lg leading-relaxed">
            <p>
              You booked a cleaning. Nice. Now you&apos;re wondering if you
              need to do something before the team shows up. Maybe vacuum a
              little? Hide the pile of mail on the counter? Wipe down the sink
              so the cleaners don&apos;t judge you?
            </p>
            <p>
              Short answer: no. Here&apos;s what actually helps, what
              doesn&apos;t matter, and what to expect when we&apos;re done.
            </p>

            {/* Section 1 */}
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal pt-4">
              1. You Don&apos;t Need to Clean Before We Arrive
            </h2>
            <p>
              This is the most common thing we hear: &ldquo;Sorry about the
              mess.&rdquo; Please don&apos;t apologize. That&apos;s literally
              why we&apos;re here. You hired us to clean, and that&apos;s what
              we&apos;re going to do.
            </p>
            <p>
              The one thing that does help: pick up loose items from floors
              and surfaces. Toys, shoes, clothes, mail, anything that would
              prevent our team from reaching the surface underneath. You
              don&apos;t need to organize or deep-tidy. Just clear the path so
              we can do our job well. That&apos;s it.
            </p>

            {/* Section 2 */}
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal pt-4">
              2. Secure Your Pets
            </h2>
            <p>
              We love animals, genuinely. But vacuums are loud, strangers are
              stressful, and a nervous dog following the cleaner from room to
              room slows everything down. Cats tend to hide, which is fine,
              but some will bolt through an open door if given the chance.
            </p>
            <p>
              The easiest solution: put your dog in a bedroom, the backyard,
              or take them for a walk during the appointment. For cats, just
              let us know they&apos;re around so we can be mindful of doors.
              Your pets will be much happier, and our team will work faster and
              more thoroughly.
            </p>

            {/* Section 3 */}
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal pt-4">
              3. Let Us Know About Special Surfaces or Sensitivities
            </h2>
            <p>
              If you have hardwood floors that need a specific product, a
              marble countertop that can&apos;t handle acidic cleaners, or a
              family member with chemical sensitivities, tell us. We use
              professional-grade, non-toxic products by default, but we&apos;re
              happy to adjust.
            </p>
            <p>
              The best time to mention this is during booking. You can add a
              note, or just leave a sticky note on the surface when we arrive.
              We&apos;d rather know upfront than risk damaging something that
              matters to you. We accommodate special requests all the time,
              and it&apos;s not a hassle.
            </p>

            {/* Section 4 */}
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal pt-4">
              4. Decide If You&apos;ll Be Home
            </h2>
            <p>
              Totally up to you. Some clients like to be around. Others
              prefer to come home to a clean house without being in the way.
              Both are completely fine, and neither is unusual.
            </p>
            <p>
              Many of our Cincinnati clients provide a spare key, garage code,
              or lockbox access. Every Cincy Maid cleaner is background-checked
              and fully insured, so you can feel confident leaving your home in
              our hands. If you&apos;re home, we just ask that you stay out of
              the rooms we&apos;re actively cleaning. It helps us stay on
              schedule.
            </p>

            {/* Section 5 */}
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal pt-4">
              5. What to Expect When We&apos;re Done
            </h2>
            <p>
              After every visit, your surfaces will be wiped and dust-free,
              floors vacuumed and mopped, bathrooms sanitized, kitchen
              cleaned, trash emptied, and beds made. We follow a detailed,
              room-by-room checklist so nothing gets missed, whether it&apos;s
              your first appointment or your fiftieth.
            </p>
            <p>
              If anything isn&apos;t right, contact us within 24 hours at
              (513) 951-7799 or admin@cincymaid.com and we&apos;ll send a team
              back to re-clean the area at no charge. That&apos;s our
              satisfaction guarantee, and we mean it.
            </p>
          </div>

          {/* ── FAQ Section ── */}
          <div className="mt-16 border-t border-sand-light pt-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal mb-8">
              Frequently Asked{" "}
              <span className="text-teal">Questions</span>
            </h2>
            <div className="space-y-6">
              <div className="border border-sand-light rounded-xl p-6">
                <h3 className="font-semibold text-charcoal text-lg">
                  Do I need to tidy up before my house cleaner arrives?
                </h3>
                <p className="mt-3 text-charcoal-light leading-relaxed">
                  No, just pick up loose items so cleaners can access surfaces.
                  You don&apos;t need to pre-clean.
                </p>
              </div>
              <div className="border border-sand-light rounded-xl p-6">
                <h3 className="font-semibold text-charcoal text-lg">
                  Should I be home when the house cleaner comes?
                </h3>
                <p className="mt-3 text-charcoal-light leading-relaxed">
                  Up to you. Many Cincy Maid clients provide a key or garage
                  code. All cleaners are background-checked and fully insured.
                </p>
              </div>
              <div className="border border-sand-light rounded-xl p-6">
                <h3 className="font-semibold text-charcoal text-lg">
                  What if something isn&apos;t cleaned the way I expected?
                </h3>
                <p className="mt-3 text-charcoal-light leading-relaxed">
                  Contact us within 24 hours and we&apos;ll send a team back at
                  no charge. That&apos;s our satisfaction guarantee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-20 bg-teal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white">
            Ready to Hand Off the Cleaning?
          </h2>
          <p className="mt-4 text-white/90 text-lg max-w-2xl mx-auto">
            Recurring plans start at $155. Background-checked teams.
            Satisfaction guaranteed. Book online in under two minutes.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center rounded-full bg-white text-teal px-8 py-3.5 text-base font-semibold shadow-lg hover:bg-cream transition-colors"
            >
              Book a Cleaning
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border-2 border-white text-white px-8 py-3.5 text-base font-semibold hover:bg-white/10 transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
