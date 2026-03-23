import type { Metadata } from "next";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface BlogPost {
  title: string;
  slug: string;
  description: string;
  datePublished: string;
  dateModified: string;
  content: string;
}

/* ------------------------------------------------------------------ */
/*  Blog Post Registry (add new posts here)                            */
/* ------------------------------------------------------------------ */

const posts: Record<string, BlogPost> = {};

/* ------------------------------------------------------------------ */
/*  Static Params                                                      */
/* ------------------------------------------------------------------ */

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

/* ------------------------------------------------------------------ */
/*  Metadata                                                           */
/* ------------------------------------------------------------------ */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `https://cincymaid.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://cincymaid.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      authors: ["Cincy Maid Team"],
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return (
      <section className="py-24 text-center">
        <h1 className="text-3xl font-bold text-charcoal">Post Not Found</h1>
        <p className="mt-4 text-charcoal-light">
          This article doesn&apos;t exist yet.
        </p>
        <Link
          href="/blog"
          className="mt-6 inline-flex items-center text-teal font-semibold hover:text-teal-dark"
        >
          &larr; Back to Blog
        </Link>
      </section>
    );
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
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
      "@id": `https://cincymaid.com/blog/${post.slug}`,
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", "article p:first-of-type"],
    },
  };

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: {
      "@type": "Organization",
      name: "Cincy Maid",
      url: "https://cincymaid.com",
    },
    url: `https://cincymaid.com/blog/${post.slug}`,
  };

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
            {post.title}
          </h1>
          <p className="mt-4 text-charcoal-light text-sm">
            By <span className="font-medium text-charcoal">Cincy Maid Team</span>{" "}
            &middot;{" "}
            {new Date(post.datePublished).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="py-12 md:py-16 bg-white">
        <div
          className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-charcoal prose-lg prose-headings:font-[family-name:var(--font-playfair)] prose-a:text-teal prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-20 bg-teal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white">
            Ready to Get Your Time Back?
          </h2>
          <p className="mt-4 text-white/90 text-lg max-w-2xl mx-auto">
            Let us handle the cleaning so you can focus on what matters most.
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
