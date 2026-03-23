import type { Metadata } from "next";
import Link from "next/link";
import ConvertLabsEmbed from "@/components/ConvertLabsEmbed";

export const metadata: Metadata = {
  title: "Book Your Cincinnati Home Cleaning in Minutes",
  description:
    "Book a Cincinnati house cleaning in minutes. Instant pricing, no hidden fees. Pay after we clean. Schedule online now!",
  alternates: {
    canonical: "https://cincymaid.com/booking",
  },
};

const trustBadges = [
  {
    label: "No Hidden Fees",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
        />
      </svg>
    ),
  },
  {
    label: "Instant Pricing",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
        />
      </svg>
    ),
  },
  {
    label: "Pay After Service",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
        />
      </svg>
    ),
  },
];

const infoCards = [
  {
    title: "Transparent Pricing",
    description:
      "Your quote is calculated instantly based on your home's size and the services you select. What you see is exactly what you pay. No surprise surcharges after the fact.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-7 h-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    ),
  },
  {
    title: "Pay After Service",
    description:
      "We don't charge your card until the job is finished and you're completely satisfied. Your payment details are stored securely, and you're always in control.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-7 h-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
        />
      </svg>
    ),
  },
  {
    title: "Seamless Communication",
    description:
      "Receive booking confirmations, cleaner arrival updates, and post-clean summaries by text and email. Rescheduling or adding extras takes just a few taps.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-7 h-7"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
        />
      </svg>
    ),
  },
];

export default function BookingPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight">
            Schedule Your Sparkling&nbsp;Clean
          </h1>
          <p className="mt-4 text-lg text-charcoal-light max-w-2xl mx-auto">
            Pick a date, tell us about your home, and get an instant price.
            The whole process takes less than two minutes.
          </p>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap justify-center gap-6 md:gap-10">
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 text-teal-dark"
              >
                {badge.icon}
                <span className="text-sm font-medium text-charcoal">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Booking Widget ── */}
      <section className="py-16 md:py-20 bg-background">
        <div className="mx-auto max-w-4xl px-6">
          <ConvertLabsEmbed type="booking" />
        </div>
      </section>

      {/* ── Info Cards ── */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-charcoal text-center">
            Why Booking With Us Is&nbsp;<span className="text-teal">Different</span>
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {infoCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-sand bg-white p-8 text-center shadow-sm"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal/10 text-teal">
                  {card.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-charcoal">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-light">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Phone CTA ── */}
      <section className="bg-teal py-14">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Prefer to Book by Phone?
          </h2>
          <p className="mt-3 text-teal-light text-lg">
            Our friendly team is happy to walk you through options and find the
            perfect cleaning plan for your home.
          </p>
          <Link
            href="tel:5139517799"
            className="mt-6 inline-block rounded-full bg-white px-10 py-4 text-lg font-semibold text-teal shadow-lg hover:bg-cream transition-colors"
          >
            Call (513) 951-7799
          </Link>
        </div>
      </section>
    </>
  );
}
