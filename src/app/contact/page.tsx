import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us | Cincy Maid",
  description:
    "Reach out to Cincy Maid for house cleaning questions, booking help, or commercial inquiries. Serving Cincinnati, Hyde Park, Mason, West Chester, and more.",
  alternates: {
    canonical: "https://cincymaid.com/contact",
  },
};

const serviceAreas = [
  "Cincinnati",
  "Hyde Park",
  "Mason",
  "West Chester",
  "Oakley",
  "Mt. Lookout",
  "Anderson Township",
  "Madeira",
  "Indian Hill",
  "Mariemont",
  "Blue Ash",
  "Kenwood",
  "Montgomery",
  "Loveland",
  "Milford",
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-charcoal sm:text-5xl">
            We&apos;d Love to Hear From You
          </h1>
          <p className="mt-4 text-lg text-charcoal-light max-w-2xl mx-auto">
            Whether you have a quick question, need help choosing a service, or
            want to partner with us commercially, we&apos;re here and happy to
            help.
          </p>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 grid gap-12 lg:grid-cols-2">
          {/* Left column: Contact info + service areas */}
          <div className="space-y-10">
            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-charcoal mb-6">
                Get <span className="text-teal">in Touch</span>
              </h2>

              <div className="space-y-5">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal/10">
                    <svg
                      className="h-5 w-5 text-teal"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-charcoal-light">
                      Phone
                    </p>
                    <a
                      href="tel:+15139517799"
                      className="text-lg font-semibold text-charcoal hover:text-teal transition-colors"
                    >
                      (513) 951-7799
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal/10">
                    <svg
                      className="h-5 w-5 text-teal"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-charcoal-light">
                      Email
                    </p>
                    <a
                      href="mailto:admin@cincymaid.com"
                      className="text-lg font-semibold text-charcoal hover:text-teal transition-colors"
                    >
                      admin@cincymaid.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal/10">
                    <svg
                      className="h-5 w-5 text-teal"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-charcoal-light">
                      Location
                    </p>
                    <p className="text-lg font-semibold text-charcoal">
                      Cincinnati, Ohio
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service area tags */}
            <div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-charcoal mb-4">
                Areas We Serve
              </h3>
              <div className="flex flex-wrap gap-2">
                {serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-block rounded-full bg-sand-light px-4 py-1.5 text-sm font-medium text-charcoal"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right column: Quick action cards */}
          <div className="space-y-6">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-charcoal mb-2">
              How Can We Help?
            </h2>

            {/* Book Online */}
            <Link
              href="/booking"
              className="group block rounded-xl border border-cream-dark bg-white p-6 shadow-sm hover:shadow-md hover:border-teal/40 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-teal text-white">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-charcoal group-hover:text-teal transition-colors">
                    Book Online
                  </h3>
                  <p className="text-sm text-charcoal-light mt-1">
                    Pick a date that works for you and reserve your cleaning in
                    under two minutes.
                  </p>
                </div>
                <svg
                  className="ml-auto h-5 w-5 shrink-0 text-charcoal-light group-hover:text-teal transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>

            {/* Commercial Inquiries */}
            <Link
              href="/commercial"
              className="group block rounded-xl border border-cream-dark bg-white p-6 shadow-sm hover:shadow-md hover:border-teal/40 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-coral text-white">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-charcoal group-hover:text-teal transition-colors">
                    Commercial Inquiries
                  </h3>
                  <p className="text-sm text-charcoal-light mt-1">
                    Offices, rental properties, or multi-unit buildings — let&apos;s
                    put together a custom plan.
                  </p>
                </div>
                <svg
                  className="ml-auto h-5 w-5 shrink-0 text-charcoal-light group-hover:text-teal transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>

            {/* Gift Cards */}
            <Link
              href="/gift-cards"
              className="group block rounded-xl border border-cream-dark bg-white p-6 shadow-sm hover:shadow-md hover:border-teal/40 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blush text-coral">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-charcoal group-hover:text-teal transition-colors">
                    Gift Cards
                  </h3>
                  <p className="text-sm text-charcoal-light mt-1">
                    Surprise someone with the luxury of a freshly cleaned home.
                    Delivered instantly via email.
                  </p>
                </div>
                <svg
                  className="ml-auto h-5 w-5 shrink-0 text-charcoal-light group-hover:text-teal transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
