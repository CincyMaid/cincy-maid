import type { Metadata } from "next";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Metadata                                                           */
/* ------------------------------------------------------------------ */

export const metadata: Metadata = {
  title: "5 Signs It's Time to Hire a House Cleaner in Cincinnati",
  description:
    "5 honest signs it's time to hire a house cleaner in Cincinnati, from weekend burnout to lowered standards. See if it's time.",
  alternates: {
    canonical:
      "https://cincymaid.com/blog/signs-you-need-a-house-cleaner",
  },
  openGraph: {
    title: "5 Signs It's Time to Hire a House Cleaner in Cincinnati",
    description:
      "Not sure if you should hire a house cleaner? Here are 5 honest signs it might be time to bring in professional help.",
    url: "https://cincymaid.com/blog/signs-you-need-a-house-cleaner",
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
  headline: "5 Signs It's Time to Hire a House Cleaner in Cincinnati",
  description:
    "Not sure if you should hire a house cleaner in Cincinnati? Here are 5 honest signs it might be time, from weekend burnout to lowered standards.",
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
    "@id": "https://cincymaid.com/blog/signs-you-need-a-house-cleaner",
  },
};

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "5 Signs It's Time to Hire a House Cleaner in Cincinnati",
  description:
    "Not sure if you should hire a house cleaner in Cincinnati? Here are 5 honest signs it might be time, from weekend burnout to lowered standards.",
  datePublished: "2026-03-21",
  dateModified: "2026-03-21",
  author: {
    "@type": "Organization",
    name: "Cincy Maid",
    url: "https://cincymaid.com",
  },
  url: "https://cincymaid.com/blog/signs-you-need-a-house-cleaner",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Should I hire a house cleaner in Cincinnati?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you're spending your weekends cleaning, feeling stressed before guests visit, or constantly behind on household chores, hiring a professional house cleaner is worth considering. Most Cincinnati families save 3 to 5 hours per week and find the investment pays for itself in reduced stress and reclaimed free time.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a house cleaner cost in Cincinnati?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Recurring house cleaning in Cincinnati starts at $155 per visit with Cincy Maid. Pricing depends on your home size, number of rooms, and cleaning frequency. Weekly clients save up to 20% compared to one-time rates.",
      },
    },
    {
      "@type": "Question",
      name: "Is hiring a house cleaner worth the money?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For most busy families, yes. A professional cleaner saves you 3 to 5 hours of work each week. Many clients say the biggest benefit is not the clean house itself. It is getting their weekends and evenings back. With plans starting at $155, most Cincinnati families find it a worthwhile trade.",
      },
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */

export default function SignsYouNeedAHouseCleanerPost() {
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
            5 Signs It&apos;s Time to Hire a House Cleaner{" "}
            <span className="text-teal">in Cincinnati</span>
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
              Nobody wakes up one morning and thinks, &ldquo;Today&apos;s the
              day I hire a house cleaner.&rdquo; It usually builds slowly. The
              laundry pile gets a little taller. The bathroom mirrors stay foggy
              a little longer. You start closing doors when company comes over.
            </p>
            <p>
              If any of that sounds familiar, you&apos;re not alone. Here are
              five honest signs it might be time to bring in some help, and
              why that&apos;s a perfectly reasonable decision.
            </p>

            {/* Sign 1 */}
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal pt-4">
              1. You&apos;re Always Tired After Work
            </h2>
            <p>
              You get home from a full day, and the last thing you want to do
              is scrub the stovetop. So you don&apos;t. And then it&apos;s
              Tuesday, and the stovetop is still there waiting for you. Sound
              familiar?
            </p>
            <p>
              When your evenings disappear into a rotation of dishes, laundry,
              and surface wiping, something&apos;s off. You deserve to eat
              dinner, sit down, and actually rest. A recurring cleaning service
              takes the biggest tasks off your plate so your evenings belong to
              you again, not your kitchen floor.
            </p>

            {/* Sign 2 */}
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal pt-4">
              2. Your Weekends Are Spent Cleaning
            </h2>
            <p>
              Saturday morning rolls around and instead of coffee on the patio
              or a trip to Findlay Market, you&apos;re vacuuming. By Sunday
              evening the house looks decent, but you&apos;re exhausted and the
              weekend is gone.
            </p>
            <p>
              This is the number one thing we hear from new clients in
              Cincinnati: &ldquo;I just want my weekends back.&rdquo; And
              honestly, that&apos;s reason enough. A biweekly cleaning, our
              most popular option, keeps your home consistently clean so
              Saturday can actually feel like a day off.
            </p>

            {/* Sign 3 */}
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal pt-4">
              3. You&apos;ve Quietly Lowered Your Standards
            </h2>
            <p>
              You used to mop every week. Now it&apos;s every two weeks. Then
              once a month. Then... when was the last time you mopped? The
              baseboards have a layer of dust you pretend doesn&apos;t exist.
              The shower grout has changed color and you&apos;ve decided
              that&apos;s just &ldquo;the look.&rdquo;
            </p>
            <p>
              There&apos;s no shame in this. Life gets busy. But if your home
              doesn&apos;t feel the way you want it to feel, that matters. A
              clean home affects your mood, your sleep, and your stress levels
              more than most people realize. You don&apos;t have to do it all
              yourself to have the home you want.
            </p>

            {/* Sign 4 */}
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal pt-4">
              4. Having Guests Stresses You Out
            </h2>
            <p>
              Your friend texts, &ldquo;Can I swing by in an hour?&rdquo; and
              your first thought isn&apos;t &ldquo;Great!&rdquo; It&apos;s a
              mental inventory of which rooms are presentable and which doors
              need to stay closed.
            </p>
            <p>
              When the idea of someone seeing your home causes anxiety, that&apos;s
              a sign things have slipped past your comfort zone. With a regular
              cleaning schedule, your home is always guest-ready. Not magazine-perfect,
              just comfortable, the kind of clean where you can say &ldquo;come
              on over&rdquo; without thinking twice.
            </p>

            {/* Sign 5 */}
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal pt-4">
              5. Your Family Is Growing (or You Got a Pet)
            </h2>
            <p>
              Kids change everything, including how fast your house gets dirty.
              Crumbs appear in rooms where no food was eaten. Sticky handprints
              show up on surfaces you didn&apos;t know existed. And if you
              recently added a dog or cat to the family, you already know about
              the fur situation.
            </p>
            <p>
              A growing household means more mess, and that&apos;s completely
              normal. But trying to keep up with it alone, on top of work,
              school runs, and everything else? That&apos;s a recipe for
              burnout. Many of our Cincinnati families with kids or pets choose
              weekly service because it keeps pace with the chaos. The house
              stays clean, and you stay sane.
            </p>

            {/* Closing */}
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal pt-4">
              The Bottom Line
            </h2>
            <p>
              Hiring a house cleaner isn&apos;t about being lazy or fancy.
              It&apos;s about being honest with yourself about where your time
              and energy go. For most Cincinnati families, a recurring cleaning
              plan saves 3 to 5 hours a week and significantly reduces daily
              stress.
            </p>
            <p>
              Our recurring plans start at $155 per visit, and weekly clients
              save up to 20%. Every cleaner is background-checked, fully
              insured, and trained to our standards. If anything isn&apos;t
              right, we come back and fix it at no charge.
            </p>
            <p>
              If you recognized yourself in any of the signs above, you
              don&apos;t need to keep pushing through. You just need a little
              help.
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
                  Should I hire a house cleaner in Cincinnati?
                </h3>
                <p className="mt-3 text-charcoal-light leading-relaxed">
                  If you&apos;re spending your weekends cleaning, feeling
                  stressed before guests visit, or constantly behind on
                  household chores, hiring a professional house cleaner is
                  worth considering. Most Cincinnati families save 3 to 5 hours
                  per week and find the investment pays for itself in reduced
                  stress and reclaimed free time.
                </p>
              </div>
              <div className="border border-sand-light rounded-xl p-6">
                <h3 className="font-semibold text-charcoal text-lg">
                  How much does a house cleaner cost in Cincinnati?
                </h3>
                <p className="mt-3 text-charcoal-light leading-relaxed">
                  Recurring house cleaning in Cincinnati starts at $155 per
                  visit with Cincy Maid. Pricing depends on your home size,
                  number of rooms, and cleaning frequency. Weekly clients save
                  up to 20% compared to one-time rates.
                </p>
              </div>
              <div className="border border-sand-light rounded-xl p-6">
                <h3 className="font-semibold text-charcoal text-lg">
                  Is hiring a house cleaner worth the money?
                </h3>
                <p className="mt-3 text-charcoal-light leading-relaxed">
                  For most busy families, yes. A professional cleaner saves you
                  3 to 5 hours of work each week. Many clients say the biggest
                  benefit is not the clean house itself. It is getting their
                  weekends and evenings back. With plans starting at $155, most
                  Cincinnati families find it a worthwhile trade.
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
            Ready to Get Your Weekends Back?
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
