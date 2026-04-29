import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Move-In Cleaning in Cincinnati | Cincy Maid",
  description:
    "Moving into a new home in Cincinnati or Northern Kentucky? A professional move-in cleaning gets every corner right before your boxes arrive. Here's what to expect.",
  alternates: {
    canonical: "https://cincymaid.com/blog/cincymaid-move-in-cleaning-cincinnati",
  },
  openGraph: {
    title: "Move-In Cleaning in Cincinnati | Cincy Maid",
    description:
      "Moving into a new home in Cincinnati or Northern Kentucky? A professional move-in cleaning gets every corner right before your boxes arrive. Here's what to expect.",
    url: "https://cincymaid.com/blog/cincymaid-move-in-cleaning-cincinnati",
    type: "article",
    publishedTime: "2026-04-27",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Move-In Cleaning in Cincinnati: Starting Fresh in Your New Home",
  description:
    "Moving into a new home in Cincinnati or Northern Kentucky? A professional move-in cleaning gets every corner right before your boxes arrive.",
  datePublished: "2026-04-27",
  dateModified: "2026-04-27",
  author: { "@type": "Organization", name: "Cincy Maid", url: "https://cincymaid.com" },
  publisher: { "@type": "Organization", name: "Cincy Maid", url: "https://cincymaid.com" },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://cincymaid.com/blog/cincymaid-move-in-cleaning-cincinnati",
  },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "h2", "article p:first-of-type"],
  },
};

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Move-In Cleaning in Cincinnati: Starting Fresh in Your New Home",
  description:
    "Moving into a new home in Cincinnati or Northern Kentucky? A professional move-in cleaning gets every corner right before your boxes arrive.",
  datePublished: "2026-04-27",
  dateModified: "2026-04-27",
  author: { "@type": "Organization", name: "Cincy Maid", url: "https://cincymaid.com" },
  url: "https://cincymaid.com/blog/cincymaid-move-in-cleaning-cincinnati",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is included in a move-in cleaning?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A move-in cleaning covers the entire home top to bottom while it's empty. This includes inside cabinets and drawers, oven and refrigerator interior, bathroom grout and tile, baseboards, windowsills, ceiling fans, doors and door frames, and all floors. The goal is a genuinely clean home before any of your belongings arrive.",
      },
    },
    {
      "@type": "Question",
      name: "When should I schedule a move-in cleaning?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Schedule the cleaning after the previous residents have fully moved out and before your own move-in date. Even a one-day window is enough. If you're buying, use the gap between closing and move-in day.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a move-in cleaning if the landlord says the home was already cleaned?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, it's still worth it. 'Cleaned between tenants' and 'thoroughly cleaned' are not always the same thing. A professional move-in cleaning ensures every corner is done properly before you settle in.",
      },
    },
    {
      "@type": "Question",
      name: "Does Cincy Maid do move-in cleaning in Northern Kentucky?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Cincy Maid serves Cincinnati and surrounding areas including Northern Kentucky, Anderson Township, Loveland, Mason, West Chester, Hyde Park, and more. Move-in cleanings can typically be scheduled within a few days.",
      },
    },
  ],
};

export default function MoveInCleaningCincinnatiPost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <Link href="/blog" className="text-sm font-semibold text-teal hover:text-teal-dark transition-colors">
            &larr; Back to Blog
          </Link>
          <h1 className="mt-6 font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
            Move-In Cleaning in Cincinnati:{" "}
            <span className="text-teal">Starting Fresh in Your New Home</span>
          </h1>
          <p className="mt-4 text-charcoal-light text-sm">
            By <span className="font-medium text-charcoal">Cincy Maid Team</span> &middot; April 27, 2026
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="space-y-6 text-charcoal-light text-lg leading-relaxed">

            <p>
              Moving is exhausting. You&apos;re coordinating movers, forwarding mail, managing a hundred small tasks
              at once, and trying to get everyone settled without losing your mind. The last thing you want to do is
              deep-clean someone else&apos;s house before you can even start unpacking.
            </p>
            <p>
              That&apos;s where a move-in cleaning comes in. Before the boxes land and the furniture gets placed, a
              thorough professional cleaning sets you up to actually start fresh.
            </p>
            <p>Here&apos;s what it involves and why it matters.</p>

            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal pt-4">
              Why Move-In Cleaning Is Different from Regular Cleaning
            </h2>
            <p>
              A move-in cleaning is not the same as a recurring visit. It&apos;s a one-time, top-to-bottom scrub done
              while the home is empty, before your things are there to work around.
            </p>
            <p>
              Empty homes show everything. Dust along baseboards, grease around the stove, residue in bathroom
              corners, grime inside cabinets. These are the things that get overlooked when furniture is in the way and
              a house looks &quot;good enough&quot; from the doorway. An empty house, properly cleaned, doesn&apos;t
              have those surprises hiding in it.
            </p>
            <p>
              Cincinnati&apos;s older housing stock, especially in neighborhoods like Hyde Park, Oakley, and Mariemont,
              often means homes that have been lived in for decades. Even well-kept homes benefit from a full clean
              before new occupants move in. The same applies to newer construction in Mason or West Chester, where
              construction dust and post-build residue can linger in unexpected places.
            </p>

            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal pt-4">
              What a Move-In Cleaning Covers
            </h2>
            <p>
              A thorough move-in cleaning goes further than a standard visit. At Cincy Maid, this includes:
            </p>
            <p>
              <strong className="text-charcoal">Kitchen:</strong>{" "}Inside and outside of all cabinets and drawers,
              stovetop and oven interior, microwave interior and exterior, refrigerator interior if empty, all
              countertops and backsplash, sink and fixtures, floor swept and mopped.
            </p>
            <p>
              <strong className="text-charcoal">Bathrooms:</strong>{" "}Full scrub of toilet, tub, and shower,
              including grout and tile. Sink and vanity cleaned. Inside medicine cabinet and any linen closets.
              Mirrors. Floor.
            </p>
            <p>
              <strong className="text-charcoal">Bedrooms and living areas:</strong>{" "}Baseboards wiped down, ceiling
              fans dusted, windowsills and blinds, doors and door frames, light switches and outlets, floors vacuumed
              or mopped depending on surface.
            </p>
            <p>
              <strong className="text-charcoal">Throughout the home:</strong>{" "}Any built-in shelving cleaned inside
              and out. Closet shelves wiped. Entry and hallways cleared.
            </p>
            <p>
              The goal is that when you walk in with your first box, the home is genuinely clean. Not just visually
              acceptable. Clean.
            </p>

            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal pt-4">
              When to Schedule It
            </h2>
            <p>
              Timing matters with a move-in cleaning. Ideally, you schedule it after the previous residents or owners
              have fully moved out and before your own move-in date. Even a one-day window is enough.
            </p>
            <p>
              If you&apos;re renting, confirm with your landlord whether a professional cleaning was done between
              tenants. Even if they say yes, a move-in cleaning is still worth doing. &quot;Cleaned between
              tenants&quot; and &quot;thoroughly cleaned&quot; are not always the same thing.
            </p>
            <p>
              If you&apos;re buying, your closing date and move-in date are rarely the same day. Use that gap.
              Schedule the cleaning right after closing, before the moving truck arrives.
            </p>
            <p>
              For homeowners in Northern Kentucky, Anderson Township, or Loveland, we cover your area and can
              typically schedule within a few days.
            </p>

            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal pt-4">
              One Less Thing to Think About
            </h2>
            <p>
              Moving is already a lot. A move-in cleaning is one thing you can fully hand off. You don&apos;t need to
              show up, supervise, or do any of it yourself. Schedule it, give us access, and walk into a clean home.
            </p>
            <p>
              Cincy Maid is locally owned, background-checked, and fully insured. We back every cleaning with a
              satisfaction guarantee: if anything doesn&apos;t meet the mark, we&apos;ll come back within 24 hours to
              make it right.
            </p>
            <p>
              Ready to schedule your move-in cleaning? Book online at{" "}
              <Link href="/booking" className="text-teal hover:text-teal-dark font-semibold transition-colors">
                cincymaid.com/booking
              </Link>{" "}
              or call{" "}
              <a href="tel:+15139517799" className="text-teal hover:text-teal-dark font-semibold transition-colors">
                (513) 951-7799
              </a>
              .
            </p>

          </article>

          {/* FAQ Section */}
          <div className="mt-16 border-t border-sand-light pt-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal mb-8">
              Frequently Asked <span className="text-teal">Questions</span>
            </h2>
            <div className="space-y-6">
              <div className="border border-sand-light rounded-xl p-6">
                <h3 className="font-semibold text-charcoal text-lg">What is included in a move-in cleaning?</h3>
                <p className="mt-3 text-charcoal-light leading-relaxed">A move-in cleaning covers the entire home top to bottom while it&apos;s empty. This includes inside cabinets and drawers, oven and refrigerator interior, bathroom grout and tile, baseboards, windowsills, ceiling fans, doors and door frames, and all floors. The goal is a genuinely clean home before any of your belongings arrive.</p>
              </div>
              <div className="border border-sand-light rounded-xl p-6">
                <h3 className="font-semibold text-charcoal text-lg">When should I schedule a move-in cleaning?</h3>
                <p className="mt-3 text-charcoal-light leading-relaxed">Schedule the cleaning after the previous residents have fully moved out and before your own move-in date. Even a one-day window is enough. If you&apos;re buying, use the gap between closing and move-in day.</p>
              </div>
              <div className="border border-sand-light rounded-xl p-6">
                <h3 className="font-semibold text-charcoal text-lg">Do I need a move-in cleaning if the landlord says the home was already cleaned?</h3>
                <p className="mt-3 text-charcoal-light leading-relaxed">Yes, it&apos;s still worth it. &quot;Cleaned between tenants&quot; and &quot;thoroughly cleaned&quot; are not always the same thing. A professional move-in cleaning ensures every corner is done properly before you settle in.</p>
              </div>
              <div className="border border-sand-light rounded-xl p-6">
                <h3 className="font-semibold text-charcoal text-lg">Does Cincy Maid do move-in cleaning in Northern Kentucky?</h3>
                <p className="mt-3 text-charcoal-light leading-relaxed">Yes. Cincy Maid serves Cincinnati and surrounding areas including Northern Kentucky, Anderson Township, Loveland, Mason, West Chester, Hyde Park, and more. Move-in cleanings can typically be scheduled within a few days.</p>
              </div>
            </div>
          </div>

          {/* Byline */}
          <div className="mt-12 pt-8 border-t border-sand-light">
            <p className="text-sm text-charcoal-light italic">Published by Cincy Maid. Locally owned and operated in Cincinnati, OH.</p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 md:py-20 bg-teal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white">
            Schedule Your Move-In Cleaning
          </h2>
          <p className="mt-4 text-white/90 text-lg max-w-2xl mx-auto">
            Instant online pricing. No contracts. Background-checked cleaners on every visit.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking" className="inline-flex items-center justify-center rounded-full bg-white text-teal px-8 py-3.5 text-base font-semibold shadow-lg hover:bg-cream transition-colors">
              Get an Instant Quote
            </Link>
            <Link href="/services" className="inline-flex items-center justify-center rounded-full border-2 border-white text-white px-8 py-3.5 text-base font-semibold hover:bg-white/10 transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
