import type { Metadata } from "next";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Metadata                                                           */
/* ------------------------------------------------------------------ */

export const metadata: Metadata = {
  title: "Handing Over Your House Key to a Cleaner: What to Know First",
  description:
    "Giving a house cleaner access when you're not home is a real trust decision. Here's what Cincinnati homeowners should ask, expect, and look for before handing over a key.",
  alternates: {
    canonical:
      "https://cincymaid.com/blog/cincymaid-handing-over-house-key-cincinnati",
  },
  openGraph: {
    title: "Handing Over Your House Key to a Cleaner: What to Know First",
    description:
      "Giving a house cleaner access when you're not home is a real trust decision. Here's what Cincinnati homeowners should ask, expect, and look for before handing over a key.",
    url: "https://cincymaid.com/blog/cincymaid-handing-over-house-key-cincinnati",
    type: "article",
    publishedTime: "2026-03-30",
  },
};

/* ------------------------------------------------------------------ */
/*  JSON-LD                                                            */
/* ------------------------------------------------------------------ */

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "What Cincinnati Homeowners Want to Know Before Handing Over a House Key",
  description:
    "Giving a house cleaner access when you're not home is a real trust decision. Here's what Cincinnati homeowners should ask, expect, and look for before handing over a key.",
  datePublished: "2026-03-30",
  dateModified: "2026-03-30",
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
    "@id":
      "https://cincymaid.com/blog/cincymaid-handing-over-house-key-cincinnati",
  },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "h2", "article p:first-of-type"],
  },
};

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline:
    "What Cincinnati Homeowners Want to Know Before Handing Over a House Key",
  description:
    "Giving a house cleaner access when you're not home is a real trust decision. Here's what Cincinnati homeowners should ask, expect, and look for before handing over a key.",
  datePublished: "2026-03-30",
  dateModified: "2026-03-30",
  author: {
    "@type": "Organization",
    name: "Cincy Maid",
    url: "https://cincymaid.com",
  },
  url: "https://cincymaid.com/blog/cincymaid-handing-over-house-key-cincinnati",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is it safe to give a house cleaner a key to my home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the service. A reputable cleaning company background-checks every team member, carries liability insurance, and has a secure key policy. At Cincy Maid, every cleaner is background-checked before their first visit, and keys are stored securely without identifying information.",
      },
    },
    {
      "@type": "Question",
      name: "Do I have to be home when the cleaners come?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Most recurring clients eventually provide a spare key or lockbox code so cleaning can happen whether they're home or not. Being home is always an option, but it's not required.",
      },
    },
    {
      "@type": "Question",
      name: "How does Cincy Maid store client keys?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Keys are stored securely and without identifying information such as your name or address attached to them. This means a key is useless to anyone outside the system.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get my key back if I change my mind?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, anytime. Cincy Maid is a locally owned business. If you want your key returned or want to change your access setup, just ask. No explanation needed.",
      },
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function HouseKeyBlogPost() {
  return (
    <>
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

      {/* ── Hero ── */}
      <section className="bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="mb-6">
            <Link
              href="/blog"
              className="text-sm font-semibold text-teal hover:text-teal-dark transition-colors"
            >
              &larr; Back to Blog
            </Link>
          </div>
          <span className="inline-block rounded-full bg-teal/10 px-3 py-1 text-xs font-semibold text-teal-dark uppercase tracking-wide mb-4">
            Advice
          </span>
          <h1 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-tight mb-6">
            What Cincinnati Homeowners Want to Know Before Handing Over a House
            Key
          </h1>
          <p className="text-charcoal-light text-sm">
            Published by Cincy Maid &mdash; March 30, 2026
          </p>
        </div>
      </section>

      {/* ── Article ── */}
      <article className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-charcoal leading-relaxed">

            <p className="post-summary text-lg text-charcoal leading-relaxed mb-8">
              For most people, the decision to hire a house cleaner is not
              really about cleaning. It&apos;s about trust. And the moment that
              trust becomes concrete is the moment someone asks: can we have a
              key?
            </p>

            <p className="mb-6 text-charcoal-light">
              It&apos;s a reasonable question to sit with. You&apos;re handing
              access to your home, your belongings, your family&apos;s space,
              to someone you may have only recently met. That&apos;s not a
              small thing. So before you get there, here&apos;s what&apos;s
              worth knowing.
            </p>

            {/* Section 1 */}
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal mt-12 mb-4">
              Why Most Clients Eventually Give a Key
            </h2>
            <p className="mb-6 text-charcoal-light">
              The alternative to a key is being home every cleaning day, or
              coordinating a lockbox, or leaving a door unlocked. For a while,
              that works. But most clients who schedule recurring service end up
              giving access eventually, because the whole point of recurring
              cleaning is that it fits into your life without creating more
              work.
            </p>
            <p className="mb-6 text-charcoal-light">
              If you&apos;re in Hyde Park or Anderson Township and you&apos;re
              out the door by 7:30, coordinating access on every cleaning day
              adds friction that cancels out some of the benefit. A key on file
              means your home gets cleaned whether you&apos;re there or not.
              You come home to a clean house without rearranging your schedule
              around it.
            </p>
            <p className="mb-6 text-charcoal-light">
              Most of our Cincinnati clients make this shift within the first
              month or two, once they&apos;ve seen the team work and feel
              comfortable with them.
            </p>

            {/* Section 2 */}
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal mt-12 mb-4">
              What to Look for in a Cleaning Service Before Giving Access
            </h2>
            <p className="mb-6 text-charcoal-light">
              Not every cleaning service is the same. Before handing over a key
              to anyone, there are a few things worth confirming.
            </p>
            <p className="mb-4 text-charcoal-light">
              <strong className="text-charcoal">Background checks.</strong> Ask
              directly whether the cleaning team members are background-checked.
              A reputable service will answer clearly and without hesitation. At
              Cincy Maid, every team member is background-checked before they
              ever enter a client&apos;s home. This is not a formality. It is
              the minimum standard for a service built on trust.
            </p>
            <p className="mb-4 text-charcoal-light">
              <strong className="text-charcoal">Insurance.</strong> If
              something is damaged during a cleaning, who is responsible? A
              properly insured cleaning service carries liability coverage that
              protects you. Ask to confirm this before booking. If a company
              can&apos;t tell you clearly that they&apos;re insured, that is a
              signal.
            </p>
            <p className="mb-4 text-charcoal-light">
              <strong className="text-charcoal">Consistency of the team.</strong>{" "}
              There is a significant difference between giving a key to a
              company you trust and giving a key to whoever shows up that week.
              A service that sends the same team each visit means you know
              exactly who is in your home. You&apos;ve met them. You&apos;ve
              seen how they work. That matters.
            </p>
            <p className="mb-6 text-charcoal-light">
              <strong className="text-charcoal">A clear key policy.</strong>{" "}
              How is your key stored? Is it labeled with your name or address?
              A responsible service keeps keys in a secure location, unlabeled
              so they are useless to anyone who does not know the system. Ask
              how they handle this. The answer tells you a lot.
            </p>

            {/* Section 3 */}
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal mt-12 mb-4">
              How the Handoff Usually Works
            </h2>
            <p className="mb-6 text-charcoal-light">
              Most clients do not hand over a key on the first visit. That is
              completely normal. The first clean is a good time to be home, see
              how the team works, and get a sense of how they treat your space.
            </p>
            <p className="mb-6 text-charcoal-light">
              After one or two visits, most people have a clear read. They have
              seen the team, noticed how careful they are with their things, and
              felt the difference between a service that is just functional and
              one that actually takes care of your home.
            </p>
            <p className="mb-6 text-charcoal-light">
              The handoff, when it happens, is usually straightforward. You
              provide a spare key or a lockbox code, confirm whether you have an
              alarm and how to handle it, and note any specific instructions for
              the visit. From that point, cleaning day runs in the background of
              your life rather than requiring you to coordinate around it.
            </p>
            <p className="mb-6 text-charcoal-light">
              For families in West Chester, Blue Ash, Madeira, and across
              Cincinnati and Northern Kentucky, that shift is often what makes
              recurring service feel sustainable rather than like another thing
              to manage.
            </p>

            {/* Section 4 */}
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal mt-12 mb-4">
              What Happens If You Change Your Mind
            </h2>
            <p className="mb-6 text-charcoal-light">
              You are never locked in. If you ever want your key back, just
              ask. No explanation needed.
            </p>
            <p className="mb-6 text-charcoal-light">
              Cincy Maid is a locally owned business, not a franchise. There is
              no corporate policy standing between you and a straightforward
              conversation. If something feels off, if you want to change your
              access setup, or if you want to pause service for a stretch, you
              talk to us directly. That is what local means in practice.
            </p>
            <p className="mb-6 text-charcoal-light">
              The trust that comes with handing over a key is built visit by
              visit. The best cleaning services know that, and they earn it
              rather than assuming it.
            </p>

            {/* CTA */}
            <div className="mt-12 p-8 bg-cream rounded-2xl border border-sand-light text-center">
              <p className="text-charcoal font-semibold text-lg mb-2">
                Ready to see how it works?
              </p>
              <p className="text-charcoal-light mb-6">
                Book your first visit online. No key required until
                you&apos;re ready.
              </p>
              <Link
                href="/booking"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-teal px-8 py-3.5 text-base font-semibold text-white shadow-md hover:bg-teal-dark transition-colors"
              >
                Book a Cleaning
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>

            {/* Footer note */}
            <p className="mt-10 text-sm text-charcoal-light italic">
              Published by Cincy Maid. Locally owned and operated in Cincinnati,
              OH.
            </p>
          </div>
        </div>
      </article>

      {/* ── Related CTA ── */}
      <section className="py-16 md:py-24 bg-teal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white">
            Rather Skip the Reading?
          </h2>
          <p className="mt-4 text-white/90 text-lg max-w-2xl mx-auto">
            We get it. Let us handle the cleaning while you get your time back.
          </p>
          <div className="mt-8">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center rounded-full bg-white text-teal px-8 py-3.5 text-base font-semibold shadow-lg hover:bg-cream transition-colors"
            >
              Book a Cleaning
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
