import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Cincy Maid",
  description:
    "Cincy Maid terms of service. Review the terms and conditions that apply to our Cincinnati house cleaning services and website.",
  alternates: {
    canonical: "https://cincymaid.com/terms-of-service",
  },
};

const LAST_UPDATED = "April 2, 2026";

export default function TermsOfServicePage() {
  return (
    <section className="py-16 lg:py-24 bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-3">
          Terms of Service
        </h1>
        <p className="text-charcoal-light mb-10">Last updated: {LAST_UPDATED}</p>

        <div className="bg-white rounded-2xl shadow-sm border border-sand-light p-8 sm:p-10 space-y-10 text-charcoal-light leading-relaxed">

          <div>
            <p>
              These Terms of Service (&quot;Terms&quot;) govern your use of the Cincy Maid website at
              cincymaid.com and the professional house cleaning services we provide in Cincinnati,
              Ohio and surrounding areas. By booking our services or using our website, you agree
              to these Terms. If you do not agree, please do not use our services.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-charcoal mb-3">
              1. Services
            </h2>
            <p className="mb-4">
              Cincy Maid provides residential and commercial cleaning services, including recurring
              cleaning, one-time deep cleans, and move-in/move-out cleaning. The scope of each
              cleaning is defined at the time of booking.
            </p>
            <p>
              We reserve the right to decline or discontinue service to any customer at our
              discretion, including in cases of unsafe working conditions, harassment, or repeated
              cancellations.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-charcoal mb-3">
              2. Booking and Scheduling
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Appointments are confirmed via email or phone. You are responsible for ensuring
                access to your home at the scheduled time.
              </li>
              <li>
                If our team cannot access your home at the scheduled time, a lockout fee may apply.
              </li>
              <li>
                We will make every reasonable effort to arrive within the scheduled window. Delays
                due to traffic, weather, or prior appointments may occasionally occur. We will
                notify you if a significant delay is expected.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-charcoal mb-3">
              3. Cancellation and Rescheduling
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                We require at least <span className="font-medium text-charcoal">48 hours notice</span> for
                cancellations or rescheduling.
              </li>
              <li>
                Cancellations made with less than 48 hours notice may be subject to a cancellation
                fee of up to 50% of the scheduled service cost.
              </li>
              <li>
                Same-day cancellations or no-shows may be charged the full service amount.
              </li>
              <li>
                We reserve the right to cancel or reschedule appointments due to severe weather,
                staffing emergencies, or other circumstances beyond our control. In such cases, we
                will notify you as soon as possible and reschedule at no additional cost.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-charcoal mb-3">
              4. Pricing and Payment
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Prices are provided at the time of booking based on the information you supply
                about your home. Final pricing may be adjusted if the actual condition of the home
                differs significantly from what was described.
              </li>
              <li>
                We accept valid credit and debit cards only. No other forms of payment are accepted.
              </li>
              <li>
                A valid card is required to complete your reservation. Your card information is
                collected securely at the time of booking.
              </li>
              <li>
                A temporary authorization hold will be placed on your card approximately 24 hours
                before your scheduled appointment to verify the card is valid and has sufficient funds.
                This hold is not a charge.
              </li>
              <li>
                Your card will be charged the day after your cleaning is completed.
              </li>
              <li>
                All prices are in U.S. dollars and do not include applicable taxes unless stated
                otherwise.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-charcoal mb-3">
              5. Access to Your Home
            </h2>
            <p className="mb-4">
              To complete your cleaning, our team will need access to your home. You may be
              present or provide access via a key, lockbox, or garage code. Keys and access codes
              are handled with strict confidentiality and stored securely. We do not share access
              information with anyone outside of our cleaning team.
            </p>
            <p>
              If you provide a key, it will be labeled only with a unique identifier, never your
              name or address. You may revoke access at any time by contacting us.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-charcoal mb-3">
              6. Satisfaction Guarantee
            </h2>
            <p className="mb-4">
              We stand behind our work. If you are not satisfied with any aspect of your cleaning,
              please notify us within <span className="font-medium text-charcoal">24 hours</span> of
              your appointment. We will return to re-clean the area in question at no additional
              charge.
            </p>
            <p>
              This guarantee applies to the specific areas cleaned and does not cover pre-existing
              damage, conditions outside the scope of the booked service, or dissatisfaction based
              on unreasonable expectations.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-charcoal mb-3">
              7. Damage and Liability
            </h2>
            <p className="mb-4">
              Our team takes great care while cleaning your home. In the rare event that damage
              occurs due to our negligence, please notify us within 24 hours of your appointment.
              We will work with you in good faith to resolve the issue.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                We are not responsible for damage to items that are improperly secured, fragile,
                or not disclosed to us prior to the cleaning.
              </li>
              <li>
                We are not responsible for damage caused by pre-existing conditions or normal wear
                and tear.
              </li>
              <li>
                Our total liability for any claim shall not exceed the cost of the cleaning service
                in question.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-charcoal mb-3">
              8. Health and Safety
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Please inform us of any known hazards in your home, including mold, pests, biohazards,
                or unsafe conditions. We reserve the right to refuse service in conditions that pose
                a health or safety risk to our team.
              </li>
              <li>
                Please secure or remove pets during the cleaning to ensure the safety of both our
                team and your animals.
              </li>
              <li>
                We use professional cleaning products. If you have specific sensitivities or
                product preferences, please let us know at the time of booking.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-charcoal mb-3">
              9. Non-Solicitation
            </h2>
            <p>
              You agree not to directly hire, solicit, or employ any current or former Cincy Maid
              team member for cleaning or related services for a period of 12 months following
              your last appointment with us. This clause is in place to protect our team and the
              integrity of our business.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-charcoal mb-3">
              10. Website Use
            </h2>
            <p className="mb-4">
              You agree to use our website only for lawful purposes and in a manner that does not
              infringe the rights of others. You may not:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Use automated tools to scrape, crawl, or extract data from our website</li>
              <li>Attempt to gain unauthorized access to any part of our systems</li>
              <li>Use our website to transmit spam, malware, or harmful content</li>
            </ul>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-charcoal mb-3">
              11. Intellectual Property
            </h2>
            <p>
              All content on cincymaid.com, including text, images, logos, and design, is the
              property of Cincy Maid and may not be copied, reproduced, or distributed without
              our written permission.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-charcoal mb-3">
              12. Governing Law
            </h2>
            <p>
              These Terms are governed by the laws of the State of Ohio. Any disputes arising from
              these Terms or our services will be subject to the jurisdiction of the courts of
              Hamilton County, Ohio.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-charcoal mb-3">
              13. Changes to These Terms
            </h2>
            <p>
              We may update these Terms from time to time. The most current version will always be
              available at cincymaid.com/terms-of-service. Continued use of our services after
              changes are posted constitutes acceptance of the updated Terms.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-charcoal mb-3">
              14. Contact Us
            </h2>
            <p>If you have questions about these Terms, please reach out:</p>
            <div className="mt-4 space-y-1">
              <p className="font-medium text-charcoal">Cincy Maid</p>
              <p>Cincinnati, Ohio</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:admin@cincymaid.com"
                  className="text-teal font-semibold hover:underline"
                >
                  admin@cincymaid.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href="tel:+15139517799" className="text-teal font-semibold hover:underline">
                  (513) 951-7799
                </a>
              </p>
            </div>
          </div>

        </div>

        <div className="mt-8 flex flex-wrap gap-6 text-sm">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-teal font-semibold hover:text-teal/80 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to Home
          </Link>
          <Link
            href="/privacy-policy"
            className="inline-flex items-center gap-2 text-teal font-semibold hover:text-teal/80 transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </section>
  );
}
