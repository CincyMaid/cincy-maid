import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Cincy Maid terms of service. Review the terms and conditions that govern your use of our cleaning services and website.",
};

export default function TermsOfServicePage() {
  return (
    <section className="py-16 lg:py-24 bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-8">
          Terms of Service
        </h1>

        <div className="bg-white rounded-2xl shadow-sm border border-sand-light p-8 sm:p-10">
          <p className="text-charcoal-light text-lg leading-relaxed mb-6">
            Our full terms of service are coming soon. We are working on
            documenting the terms and conditions that govern your use of
            Cincy Maid services and our website.
          </p>

          <p className="text-charcoal-light text-lg leading-relaxed">
            In the meantime, if you have any questions about our policies or
            service agreements, please contact us at{" "}
            <a
              href="mailto:admin@cincymaid.com"
              className="text-teal font-semibold hover:text-teal-dark transition-colors underline underline-offset-2"
            >
              admin@cincymaid.com
            </a>
            .
          </p>
        </div>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-teal font-semibold hover:text-teal-dark transition-colors"
          >
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
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
