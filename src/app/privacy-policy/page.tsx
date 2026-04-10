import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Cincy Maid privacy policy. Learn how we collect, use, and protect your personal information when you use our Cincinnati house cleaning services.",
  alternates: {
    canonical: "https://cincymaid.com/privacy-policy",
  },
};

const LAST_UPDATED = "April 2, 2026";

export default function PrivacyPolicyPage() {
  return (
    <section className="py-16 lg:py-24 bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mb-3">
          Privacy Policy
        </h1>
        <p className="text-charcoal-light mb-10">Last updated: {LAST_UPDATED}</p>

        <div className="bg-white rounded-2xl shadow-sm border border-sand-light p-8 sm:p-10 space-y-10 text-charcoal-light leading-relaxed">

          <div>
            <p>
              Cincy Maid (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the website cincymaid.com and provides
              professional house cleaning services in Cincinnati, Ohio and the surrounding area.
              This Privacy Policy explains what information we collect, how we use it, and your
              rights regarding that information. By using our website or booking our services,
              you agree to the practices described here.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-charcoal mb-3">
              1. Information We Collect
            </h2>
            <p className="mb-4">We collect information in the following ways:</p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-charcoal mb-1">Information you provide directly</h3>
                <p>
                  When you request a quote, book a cleaning, contact us, or apply for a job,
                  you may provide your name, email address, phone number, home address, and
                  details about your home (such as square footage and number of rooms).
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-charcoal mb-1">Information collected automatically</h3>
                <p>
                  When you visit our website, we may automatically collect your IP address,
                  browser type, pages visited, time spent on pages, and referring URLs. We use
                  Google Tag Manager and Google Analytics 4 for this purpose.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-charcoal mb-1">Cookies</h3>
                <p>
                  Our website uses cookies and similar tracking technologies to improve your
                  experience and analyze site traffic. You can control cookie settings through
                  your browser preferences.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-charcoal mb-3">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>To schedule, confirm, and fulfill cleaning appointments</li>
              <li>To respond to inquiries and provide customer support</li>
              <li>To send appointment reminders and service updates</li>
              <li>To process job applications</li>
              <li>To improve our website and services</li>
              <li>To send occasional promotional messages (you can opt out at any time)</li>
              <li>To comply with legal obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-charcoal mb-3">
              3. How We Share Your Information
            </h2>
            <p className="mb-4">
              We do not sell, rent, or trade your personal information. We may share it only in
              the following limited circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <span className="font-medium text-charcoal">Service providers:</span> Third-party
                tools we use to operate our business (such as scheduling software, email
                platforms, or payment processors). These providers are contractually obligated
                to protect your data.
              </li>
              <li>
                <span className="font-medium text-charcoal">Legal requirements:</span> If required
                by law, court order, or government authority.
              </li>
              <li>
                <span className="font-medium text-charcoal">Business transfers:</span> In the event
                of a merger, acquisition, or sale of assets, your information may be transferred
                as part of that transaction.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-charcoal mb-3">
              4. Data Retention
            </h2>
            <p>
              We retain your personal information for as long as necessary to provide our
              services and fulfill the purposes described in this policy. If you request deletion
              of your data, we will honor that request unless we are required by law to retain it.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-charcoal mb-3">
              5. Security
            </h2>
            <p>
              We take reasonable technical and organizational measures to protect your information
              from unauthorized access, loss, or disclosure. However, no method of transmission
              over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-charcoal mb-3">
              6. Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for
              the privacy practices of those sites and encourage you to review their policies
              separately.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-charcoal mb-3">
              7. Children&apos;s Privacy
            </h2>
            <p>
              Our services are not directed to children under the age of 13. We do not knowingly
              collect personal information from children. If you believe a child has provided us
              with personal information, please contact us so we can delete it.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-charcoal mb-3">
              8. Your Rights
            </h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications at any time</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, contact us at{" "}
              <a
                href="mailto:admin@cincymaid.com"
                className="text-teal font-semibold hover:underline"
              >
                admin@cincymaid.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-charcoal mb-3">
              9. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. When we do, we will revise the
              &quot;Last updated&quot; date at the top of this page. We encourage you to review this
              policy periodically.
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-charcoal mb-3">
              10. Contact Us
            </h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
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
            href="/terms-of-service"
            className="inline-flex items-center gap-2 text-teal font-semibold hover:text-teal/80 transition-colors"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </section>
  );
}
