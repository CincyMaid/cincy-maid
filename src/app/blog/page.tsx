import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "House Cleaning Tips & Cincinnati Home Guides",
  description:
    "Cleaning tips, Cincinnati home guides, and honest advice from Cincy Maid. Keep your home spotless — or let us do it.",
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
    title: "5 Signs It's Time to Hire a House Cleaner in Cincinnati",
    slug: "signs-you-need-a-house-cleaner",
    description:
      "Feeling behind on chores? Here are five honest signs it might be time to bring in professional help.",
    published: true,
  },
  {
    title: "How to Prepare Your Cincinnati Home for a Cleaning Service",
    slug: "how-to-prepare-for-cleaning-service",
    description:
      "A quick guide to getting the most out of your professional cleaning appointment — no deep prep required.",
    published: true,
  },
  {
    title: "Spring Cleaning Checklist for Cincinnati Homeowners",
    slug: "spring-cleaning-checklist-cincinnati",
    description:
      "Room-by-room spring cleaning checklist tailored for Cincinnati homes, including seasonal tasks most people forget.",
    published: true,
  },
  {
    title: "How Much Does House Cleaning Cost in Cincinnati?",
    slug: "how-much-does-house-cleaning-cost-cincinnati",
    description:
      "Recurring starts at $155. Deep cleans, move-out cleans, and hourly options explained — with real pricing and what affects the final number.",
    published: true,
  },
];

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
            Honest advice from our team — whether you clean your own home or let
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
                className={`rounded-2xl border p-6 transition-shadow ${
                  article.published
                    ? "border-sand-light bg-cream hover:shadow-md"
                    : "border-sand-light/50 bg-cream/50"
                }`}
              >
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
