import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "House Cleaning Tips & Cincinnati Home Guides",
  description:
    "Cleaning tips, Cincinnati home guides, and honest advice from Cincy Maid. Keep your home spotless, or let us do it.",
  alternates: {
    canonical: "https://cincymaid.com/blog",
  },
  openGraph: {
    title: "House Cleaning Tips & Cincinnati Home Guides | Cincy Maid",
    description:
      "Practical cleaning tips and home care guides from the Cincy Maid team.",
    url: "https://cincymaid.com/blog",
  },
};

const articles = [
  {
    title: "How Often Should You Schedule Professional House Cleaning?",
    slug: "cincymaid-how-often-professional-house-cleaning-cincinnati",
    description:
      "Not sure how often to book a house cleaner? A practical guide for Cincinnati homeowners on bi-weekly, weekly, and monthly schedules.",
    category: "Tips",
    published: true,
  },
  {
    title: "Why Cincinnati Homeowners Choose Locally Owned Cleaning Services",
    slug: "locally-owned-cleaning-service-cincinnati",
    description:
      "There's a real difference between a locally owned cleaning company and a national franchise. Here's what Cincinnati homeowners are finding out.",
    category: "Advice",
    published: true,
  },
  {
    title: "What Cincinnati Homeowners Want to Know Before Handing Over a House Key",
    slug: "cincymaid-handing-over-house-key-cincinnati",
    description:
      "Giving a house cleaner access when you're not home is a real trust decision. Here's what to ask, expect, and look for first.",
    category: "Advice",
    published: true,
  },
  {
    title: "House Cleaning in Mason, OH: What to Expect from a Local Cleaning Service",
    slug: "house-cleaning-mason-ohio",
    description:
      "What's included, how recurring service works, and how to get an instant quote for your Mason home.",
    category: "Advice",
    published: true,
  },
  {
    title: "How Much Does House Cleaning Cost in Cincinnati?",
    slug: "how-much-does-house-cleaning-cost-cincinnati",
    description:
      "Recurring starts at $155. Deep cleans, move-out cleans, and hourly options explained, with real pricing and what affects the final number.",
    category: "Pricing",
    published: true,
  },
  {
    title: "How Often Should You Clean Your Home?",
    slug: "how-often-should-you-clean-your-home",
    description:
      "A room-by-room cleaning frequency guide, from daily habits to seasonal deep cleans. What Cincinnati pros recommend.",
    category: "Tips",
    published: true,
  },
  {
    title: "5 Signs It's Time to Hire a House Cleaner in Cincinnati",
    slug: "signs-you-need-a-house-cleaner",
    description:
      "Feeling behind on chores? Here are five honest signs it might be time to bring in professional help.",
    category: "Advice",
    published: true,
  },
  {
    title: "How to Prepare Your Cincinnati Home for a Cleaning Service",
    slug: "how-to-prepare-for-cleaning-service",
    description:
      "A quick guide to getting the most out of your professional cleaning appointment. No deep prep required.",
    category: "Tips",
    published: true,
  },
  {
    title: "Spring Cleaning Checklist for Cincinnati Homeowners",
    slug: "spring-cleaning-checklist-cincinnati",
    description:
      "Room-by-room spring cleaning checklist tailored for Cincinnati homes, including seasonal tasks most people forget.",
    category: "Checklist",
    published: true,
  },
];

/* Cleaning-related SVG icons by category */
const categoryIcons: Record<string, React.ReactNode> = {
  Advice: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" />
      <path d="M9 21h6" />
      <path d="M10 21v1a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1" />
    </svg>
  ),
  Tips: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M3 6h18" />
      <path d="M7 12h10" />
      <path d="M10 18h4" />
      <circle cx="3" cy="6" r="1" fill="currentColor" />
      <circle cx="7" cy="12" r="1" fill="currentColor" />
      <circle cx="10" cy="18" r="1" fill="currentColor" />
    </svg>
  ),
  Checklist: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  ),
  Pricing: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
};

export default function BlogIndexPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-charcoal leading-tight">
            Cleaning Tips &amp;{" "}
            <span className="text-teal">Home Guides</span>
          </h1>
          <p className="mt-6 text-lg text-charcoal-light max-w-2xl mx-auto leading-relaxed">
            Honest advice from our team, whether you clean your own home or let
            us handle it. No fluff, no sales pitches, just practical tips for
            Cincinnati homeowners.
          </p>
        </div>
      </section>

      {/* ── Articles ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <div
                key={article.slug}
                className={`group rounded-2xl border overflow-hidden transition-shadow ${
                  article.published
                    ? "border-sand-light bg-cream hover:shadow-lg"
                    : "border-sand-light/50 bg-cream/50"
                }`}
              >
                {/* ── Branded Thumbnail ── */}
                <div className="relative aspect-[16/10] bg-gradient-to-br from-teal-light via-cream to-teal/20 overflow-hidden">
                  <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)", backgroundSize: "20px 20px" }} />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 group-hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center text-teal-dark shadow-sm">
                      {categoryIcons[article.category] || categoryIcons["Advice"]}
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-teal-dark/70">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* ── Card Body ── */}
                <div className="p-6">
                  {!article.published && (
                    <span className="inline-block rounded-full bg-teal/10 px-3 py-1 text-xs font-semibold text-teal-dark uppercase tracking-wide mb-3">
                      Coming Soon
                    </span>
                  )}
                  <h2 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-charcoal leading-snug">
                    {article.published ? (
                      <Link
                        href={`/blog/${article.slug}`}
                        className="hover:text-teal transition-colors"
                      >
                        {article.title}
                      </Link>
                    ) : (
                      article.title
                    )}
                  </h2>
                  <p className="mt-3 text-sm text-charcoal-light leading-relaxed">
                    {article.description}
                  </p>
                  {article.published && (
                    <Link
                      href={`/blog/${article.slug}`}
                      className="mt-4 inline-flex items-center text-sm font-semibold text-teal hover:text-teal-dark transition-colors"
                    >
                      Read Article &rarr;
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
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
