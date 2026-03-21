import type { Metadata } from "next";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Metadata                                                           */
/* ------------------------------------------------------------------ */

export const metadata: Metadata = {
  title: "Spring Cleaning Checklist for Cincinnati Homeowners | Cincy Maid",
  description:
    "A room-by-room spring cleaning checklist for Cincinnati homes — including the seasonal tasks most people forget every year.",
  alternates: {
    canonical:
      "https://cincymaid.com/blog/spring-cleaning-checklist-cincinnati",
  },
  openGraph: {
    title: "Spring Cleaning Checklist for Cincinnati Homeowners | Cincy Maid",
    description:
      "A room-by-room spring cleaning checklist for Cincinnati homes — including the seasonal tasks most people forget every year.",
    url: "https://cincymaid.com/blog/spring-cleaning-checklist-cincinnati",
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
  headline: "Spring Cleaning Checklist for Cincinnati Homeowners",
  description:
    "A room-by-room spring cleaning checklist for Cincinnati homes — including the seasonal tasks most people forget every year.",
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
    "@id": "https://cincymaid.com/blog/spring-cleaning-checklist-cincinnati",
  },
};

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Spring Cleaning Checklist for Cincinnati Homeowners",
  description:
    "A room-by-room spring cleaning checklist for Cincinnati homes — including the seasonal tasks most people forget every year.",
  datePublished: "2026-03-21",
  dateModified: "2026-03-21",
  author: {
    "@type": "Organization",
    name: "Cincy Maid",
    url: "https://cincymaid.com",
  },
  url: "https://cincymaid.com/blog/spring-cleaning-checklist-cincinnati",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When should I do spring cleaning in Cincinnati?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "March through May, after the last cold snap. Waiting until April means you can open windows while you clean.",
      },
    },
    {
      "@type": "Question",
      name: "How long does spring cleaning take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A thorough spring clean of a 3-bedroom Cincinnati home takes 5–8 hours solo. A professional deep clean team can cover it in 2–3 hours.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between spring cleaning and a regular cleaning?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A regular clean maintains surfaces. Spring cleaning goes deeper — inside appliances, behind furniture, ceiling fans, grout, and areas that get skipped all winter.",
      },
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Checklist Icon                                                     */
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

const checklists = {
  kitchen: [
    "Clean inside the oven and oven racks",
    "Pull out the refrigerator and clean coils",
    "Degrease the range hood filter",
    "Wipe all cabinet faces and handles",
    "Clean behind and under appliances",
    "Wipe down walls near the stove",
  ],
  bathrooms: [
    "Scrub grout on floors and shower walls",
    "Clean the exhaust fan and vent cover",
    "Scrub behind and around the toilet base",
    "Clean under the sink cabinet",
    "Wipe shower door tracks and runners",
  ],
  bedrooms: [
    "Flip or rotate the mattress",
    "Wash pillows and duvet cover",
    "Wipe ceiling fan blades",
    "Clean under the bed thoroughly",
    "Wash interior windows and sills",
  ],
  living: [
    "Dust all baseboards and door frames",
    "Clean light fixtures and lampshades",
    "Wipe window sills and tracks",
    "Vacuum under and behind furniture",
    "Clean upholstered furniture and cushions",
  ],
  seasonal: [
    "Wipe salt residue off entryway floors and mats",
    "Clean porch or deck furniture before first use",
    "Check window screens for winter damage",
    "Clean the garage entry door and floor",
  ],
};

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */

export default function SpringCleaningChecklistPost() {
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
            Spring Cleaning Checklist{" "}
            <span className="text-teal">for Cincinnati Homeowners</span>
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
              Cincinnati winters are rough — salt tracked in on every pair of
              boots, windows fogged for months, heating systems running
              nonstop pushing dust through every vent. By the time March rolls
              around, your home has quietly accumulated a winter&apos;s worth
              of grime in places you probably haven&apos;t looked at since
              October.
            </p>
            <p>
              Spring cleaning here isn&apos;t just a feel-good ritual.
              It&apos;s necessary. Here&apos;s a room-by-room checklist to
              get your home back to fresh — including the Cincinnati-specific
              tasks most people forget every year.
            </p>

            {/* Kitchen */}
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal pt-4">
              Kitchen
            </h2>
            <p>
              The kitchen takes the biggest beating all winter. Between holiday
              cooking, comfort food season, and the oven running overtime,
              grease and grime build up fast — especially in spots you
              don&apos;t see every day.
            </p>
            <ul className="space-y-3">
              {checklists.kitchen.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-teal mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Bathrooms */}
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal pt-4">
              Bathrooms
            </h2>
            <p>
              Bathrooms stay humid all winter with windows closed, which means
              mildew and grime build up in grout lines, exhaust fans, and all
              the corners you don&apos;t scrub on a regular basis.
            </p>
            <ul className="space-y-3">
              {checklists.bathrooms.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-teal mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Bedrooms */}
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal pt-4">
              Bedrooms
            </h2>
            <p>
              You spend a third of your life in this room. After months of
              closed windows and running the heat, dust settles on fan blades,
              collects under the bed, and your mattress could use a flip.
            </p>
            <ul className="space-y-3">
              {checklists.bedrooms.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-teal mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Living Areas */}
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal pt-4">
              Living Areas
            </h2>
            <p>
              Baseboards, door frames, and light fixtures are dust magnets that
              rarely get touched during regular cleaning. Spring is the time to
              get them all.
            </p>
            <ul className="space-y-3">
              {checklists.living.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-teal mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Seasonal Cincinnati Tasks */}
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal pt-4">
              Seasonal Cincinnati Tasks Most People Forget
            </h2>
            <p>
              These are the ones that are specific to living here. Other
              checklists won&apos;t include them, but anyone who&apos;s
              survived a Cincinnati winter knows they matter.
            </p>
            <ul className="space-y-3">
              {checklists.seasonal.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckIcon className="w-5 h-5 text-teal mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Closing */}
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal pt-4">
              The Bottom Line
            </h2>
            <p>
              A proper spring clean takes 6 to 8 hours if you tackle it
              yourself — and that&apos;s assuming you have the supplies,
              the energy, and a free Saturday with nothing better to do.
            </p>
            <p>
              Many Cincinnati families book a one-time deep clean with us
              instead. Our team handles the entire checklist in a few hours,
              and you come home to a house that feels brand new. After that,
              recurring biweekly or monthly service keeps everything maintained
              so you never have to do a marathon cleaning session again.
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
                  When should I do spring cleaning in Cincinnati?
                </h3>
                <p className="mt-3 text-charcoal-light leading-relaxed">
                  March through May, after the last cold snap. Waiting until
                  April means you can open windows while you clean.
                </p>
              </div>
              <div className="border border-sand-light rounded-xl p-6">
                <h3 className="font-semibold text-charcoal text-lg">
                  How long does spring cleaning take?
                </h3>
                <p className="mt-3 text-charcoal-light leading-relaxed">
                  A thorough spring clean of a 3-bedroom Cincinnati home takes
                  5&ndash;8 hours solo. A professional deep clean team can cover
                  it in 2&ndash;3 hours.
                </p>
              </div>
              <div className="border border-sand-light rounded-xl p-6">
                <h3 className="font-semibold text-charcoal text-lg">
                  What&apos;s the difference between spring cleaning and a
                  regular cleaning?
                </h3>
                <p className="mt-3 text-charcoal-light leading-relaxed">
                  A regular clean maintains surfaces. Spring cleaning goes
                  deeper — inside appliances, behind furniture, ceiling fans,
                  grout, and areas that get skipped all winter.
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
            Rather Skip the Checklist?
          </h2>
          <p className="mt-4 text-white/90 text-lg max-w-2xl mx-auto">
            Our deep clean team handles the entire spring cleaning list in a
            few hours. Background-checked, fully insured, satisfaction
            guaranteed.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center rounded-full bg-white text-teal px-8 py-3.5 text-base font-semibold shadow-lg hover:bg-cream transition-colors"
            >
              Book a Deep Clean
            </Link>
            <Link
              href="/services/deep-cleaning"
              className="inline-flex items-center justify-center rounded-full border-2 border-white text-white px-8 py-3.5 text-base font-semibold hover:bg-white/10 transition-colors"
            >
              Learn About Deep Cleaning
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
