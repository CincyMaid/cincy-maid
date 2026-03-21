import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ApplicationForm from "@/components/ApplicationForm";

export const metadata: Metadata = {
  title: "Careers | CincyMaid",
  description:
    "Now hiring house cleaners in Cincinnati, OH. Flexible hours, competitive pay, and a team that has your back. Apply to CincyMaid today.",
  alternates: {
    canonical: "https://cincymaid.com/careers",
  },
};

const benefits = [
  {
    title: "Flexible Schedule",
    description:
      "Build a work week that fits your life, not the other way around. Choose mornings, afternoons, or a mix — we accommodate school pickups, side gigs, and everything in between.",
    icon: (
      <svg
        className="h-7 w-7 text-teal"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"
        />
      </svg>
    ),
  },
  {
    title: "Competitive Pay",
    description:
      "Your effort deserves real reward. We offer above-average rates, on-time payments every two weeks, and bonus opportunities for top-performing cleaners.",
    icon: (
      <svg
        className="h-7 w-7 text-teal"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Supportive Team",
    description:
      "You won't be figuring things out alone. Our management is responsive, our culture is respectful, and we treat every team member like a valued part of the business.",
    icon: (
      <svg
        className="h-7 w-7 text-teal"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    title: "Training Provided",
    description:
      "New to professional cleaning? No problem. We provide hands-on training so you feel confident on day one, and ongoing coaching to help you keep growing.",
    icon: (
      <svg
        className="h-7 w-7 text-teal"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
];

const requirements = [
  "Reliable transportation",
  "Attention to detail",
  "Positive attitude",
  "Comfortable working independently",
  "Able to pass a background check",
  "Physically able to clean for 4–6 hours",
  "Legal authorization to work in the U.S.",
  "Strong communication skills",
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-charcoal sm:text-5xl">
              Build a Career That Fits Your Life
            </h1>
            <p className="mt-4 text-lg text-charcoal-light">
              CincyMaid is growing, and we need dependable, detail-oriented
              cleaners who take pride in their work. If you want steady hours, fair
              pay, and a team that actually values you, you&apos;re in the right
              place.
            </p>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-sand-light">
            <Image
              src="/images/careers-hero.jpg"
              alt="CincyMaid team member ready for a cleaning assignment"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-charcoal text-center mb-10">
            Why People Choose to Work <span className="text-teal">With Us</span>
          </h2>

          <div className="grid gap-8 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-xl border border-cream-dark bg-white p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal/10">
                  {benefit.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-charcoal">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm text-charcoal-light leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Look For */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-charcoal mb-4">
            What We Look For
          </h2>
          <p className="text-charcoal-light mb-8 max-w-xl mx-auto">
            Experience is a plus, but the right mindset matters more. Here&apos;s
            what sets our best team members apart.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {requirements.map((req) => (
              <span
                key={req}
                className="inline-block rounded-full bg-white border border-cream-dark px-5 py-2 text-sm font-medium text-charcoal shadow-sm"
              >
                {req}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-charcoal text-center mb-3">
            Ready to Apply?
          </h2>
          <p className="text-center text-charcoal-light mb-8">
            Fill out the form below and we&apos;ll reach out within a few
            business days. Prefer to talk first? Give us a call at{" "}
            <a
              href="tel:+15139517799"
              className="font-semibold text-teal hover:underline"
            >
              (513) 951-7799
            </a>
            .
          </p>

          <ApplicationForm />
        </div>
      </section>
    </>
  );
}
