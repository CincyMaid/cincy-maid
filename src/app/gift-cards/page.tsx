import type { Metadata } from "next";
import Link from "next/link";
import ConvertLabsEmbed from "@/components/ConvertLabsEmbed";

export const metadata: Metadata = {
  title: "House Cleaning Gift Cards in Cincinnati, OH",
  description:
    "Send a Cincy Maid gift card for any occasion — birthdays, holidays, new homeowners, and more. Delivered by email, redeemable for any cleaning service in Cincinnati.",
  alternates: {
    canonical: "https://cincymaid.com/gift-cards",
  },
};

const occasions = [
  {
    title: "Birthdays",
    description:
      "Skip the candles and give them a sparkling home instead. Nothing says \"happy birthday\" like walking into spotless rooms.",
    emoji: "🎂",
  },
  {
    title: "Holidays",
    description:
      "Take hosting stress off the table. A pre-holiday deep clean is the present everyone secretly wants.",
    emoji: "🎄",
  },
  {
    title: "New Homeowners",
    description:
      "Help them start fresh in their new space. A move-in clean is the most thoughtful housewarming gift around.",
    emoji: "🏡",
  },
  {
    title: "New Parents",
    description:
      "Sleep-deprived parents don't need another onesie — they need someone else to handle the kitchen and bathrooms.",
    emoji: "👶",
  },
  {
    title: "Thank You",
    description:
      "When words aren't enough, a sparkling clean home speaks volumes. Perfect for teachers, caregivers, or anyone who deserves a break.",
    emoji: "💛",
  },
  {
    title: "Just Because",
    description:
      "No reason needed. Sometimes the best gifts are the ones nobody expected — like coming home to gleaming floors.",
    emoji: "✨",
  },
];

export default function GiftCardsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-charcoal sm:text-5xl">
            Send a Sparkling Surprise
          </h1>
          <p className="mt-4 text-lg text-charcoal-light max-w-2xl mx-auto">
            A Cincy Maid gift card lets someone you care about enjoy a
            professionally cleaned home — no wrapping paper required. Choose any
            amount and we&apos;ll deliver it straight to their inbox.
          </p>
        </div>
      </section>

      {/* Gift Card Embed */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-charcoal text-center mb-8">
            Purchase a Gift Card
          </h2>
          <ConvertLabsEmbed type="gift-card" />
        </div>
      </section>

      {/* Occasion cards */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-charcoal text-center mb-4">
            Perfect for <span className="text-teal">Every Occasion</span>
          </h2>
          <p className="text-center text-charcoal-light mb-10 max-w-xl mx-auto">
            Not sure if a cleaning gift card is the right call? Here are six
            reasons people love giving (and receiving) them.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {occasions.map((occasion) => (
              <div
                key={occasion.title}
                className="rounded-xl border border-cream-dark bg-white p-6 shadow-sm"
              >
                <span className="text-3xl" role="img" aria-label={occasion.title}>
                  {occasion.emoji}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-charcoal">
                  {occasion.title}
                </h3>
                <p className="mt-2 text-sm text-charcoal-light leading-relaxed">
                  {occasion.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA to book instead */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-charcoal mb-3">
            Rather Book a Cleaning Yourself?
          </h2>
          <p className="text-charcoal-light mb-6">
            If the clean home is for you (no judgement — treat yourself!), head
            over to our booking page and schedule your next visit.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center rounded-lg bg-teal px-8 py-3 text-base font-semibold text-white hover:bg-teal/90 transition-colors"
          >
            Book a Cleaning
          </Link>
        </div>
      </section>
    </>
  );
}
