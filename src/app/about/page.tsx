import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Story — Meet the Team Behind CincyMaid",
  description:
    "Learn how CincyMaid became Cincinnati's go-to residential cleaning service. Discover our values, meet the people who make every home shine, and see why families across the Queen City trust us.",
  alternates: {
    canonical: "https://cincymaid.com/about",
  },
};

const stats = [
  { value: "2,000+", label: "Happy Households" },
  { value: "4.9★", label: "Average Rating" },
  { value: "8+", label: "Years Serving Cincy" },
  { value: "100%", label: "Satisfaction Promise" },
];

const values = [
  {
    title: "Consistency Over Shortcuts",
    description:
      "Every visit follows the same proven checklist so your home looks spotless whether it's your first clean or your fiftieth.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    ),
  },
  {
    title: "Respect for Your Space",
    description:
      "Your home is personal. Our team treats every surface, corner, and keepsake with the care it deserves — no rushing, no carelessness.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
  },
  {
    title: "Transparent from Day One",
    description:
      "No hidden charges, no surprise add-ons. You'll see your exact price before we arrive, and that's the price you pay.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.64 0 8.577 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.64 0-8.577-3.007-9.963-7.178Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
      </svg>
    ),
  },
  {
    title: "People-First Culture",
    description:
      "We pay living wages, invest in ongoing training, and create a workplace our cleaners are proud of — because great teams deliver great results.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
        />
      </svg>
    ),
  },
];

const teamQualities = [
  "Thoroughly vetted and background-checked",
  "Trained in our detailed, room-by-room process",
  "Insured and bonded for your peace of mind",
  "Friendly, professional, and punctual",
  "Equipped with premium, eco-conscious supplies",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CincyMaid",
  url: "https://cincymaid.com",
  logo: "https://cincymaid.com/logo.jpg",
  description:
    "Professional residential cleaning services in Cincinnati, OH and surrounding communities.",
  telephone: "(513) 951-7799",
  email: "admin@cincymaid.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cincinnati",
    addressRegion: "OH",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "City",
    name: "Cincinnati",
    sameAs: "https://en.wikipedia.org/wiki/Cincinnati",
  },
  sameAs: [],
};

export default function AboutPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight">
              Built in Cincinnati, Dedicated to Your&nbsp;Home
            </h1>
            <p className="mt-6 text-lg md:text-xl text-charcoal-light leading-relaxed">
              CincyMaid started with a simple observation: too many Cincinnati
              families were settling for inconsistent, impersonal cleaning
              services. We set out to change that. From Over-the-Rhine to West
              Chester and everywhere in between, our mission is to give every
              household a cleaner home and more free time — without the
              guesswork or stress.
            </p>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-sand-light">
            <Image
              src="/images/about-hero.jpg"
              alt="CincyMaid team delivering professional cleaning in Cincinnati"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-teal py-10">
        <div className="mx-auto max-w-5xl px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl md:text-4xl font-bold text-white">
                {stat.value}
              </p>
              <p className="mt-1 text-sm md:text-base text-teal-light">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-20 md:py-28 bg-background">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-charcoal text-center">
            What Guides <span className="text-teal">Every Clean</span>
          </h2>
          <p className="mt-4 text-charcoal-light text-center max-w-2xl mx-auto">
            These aren't corporate slogans pinned to a break-room wall. They're
            the principles our team lives by on every single visit.
          </p>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-sand bg-white p-8 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal/10 text-teal">
                  {v.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-charcoal">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-light">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Team ── */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-charcoal">
              The People Behind <span className="text-teal">the Polish</span>
            </h2>
            <p className="mt-4 text-charcoal-light leading-relaxed">
              Every CincyMaid cleaner is hand-picked, rigorously trained, and
              genuinely passionate about doing great work. Here's what you can
              expect from every member of our crew:
            </p>

            <ul className="mt-8 space-y-4">
              {teamQualities.map((q) => (
                <li key={q} className="flex items-start gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="mt-0.5 h-5 w-5 shrink-0 text-teal"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  <span className="text-charcoal">{q}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/careers"
              className="mt-10 inline-block rounded-full bg-coral px-8 py-3 text-sm font-semibold text-white shadow hover:bg-coral-light hover:text-charcoal transition-colors"
            >
              Join Our Team
            </Link>
          </div>

          {/* Image placeholder */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-sand-light">
            <Image
              src="/images/team-placeholder.jpg"
              alt="CincyMaid cleaning professionals ready to serve Cincinnati homes"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-teal py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white">
            Ready for a Home That Feels Brand&nbsp;New?
          </h2>
          <p className="mt-4 text-teal-light text-lg max-w-xl mx-auto">
            Book your first cleaning in under two minutes. No contracts, no
            commitments — just a cleaner home waiting for you.
          </p>
          <Link
            href="/booking"
            className="mt-8 inline-block rounded-full bg-white px-10 py-4 text-lg font-semibold text-teal shadow-lg hover:bg-cream transition-colors"
          >
            Book Your Cleaning
          </Link>
        </div>
      </section>
    </>
  );
}
