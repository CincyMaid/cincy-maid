import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Quote Request Received | Cincy Maid",
  description:
    "Your commercial cleaning quote request has been received. Cincy Maid will review your details and provide a custom quote within 24 hours.",
};

export default function ThankYouCommercialPage() {
  return (
    <>
      {/* ================================================================ */}
      {/*  HERO                                                            */}
      {/* ================================================================ */}
      <section className="relative bg-gradient-to-br from-teal-dark via-teal to-teal-dark overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-light/10 rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-coral/10 rounded-full translate-y-1/3 -translate-x-1/4" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
          {/* Checkmark icon */}
          <div className="w-20 h-20 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center mx-auto mb-8">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>

          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Quote Request <span className="text-teal-light">Received!</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/85 leading-relaxed max-w-xl mx-auto">
            Thank you for your interest in Cincy Maid commercial cleaning
            services. Our team is reviewing your request and will be in touch
            shortly.
          </p>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  WHAT HAPPENS NEXT                                               */}
      {/* ================================================================ */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-sand-light p-8 sm:p-10">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-charcoal mb-8 text-center">
              What Happens Next?
            </h2>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center">
                  <span className="text-lg font-bold text-teal">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-charcoal mb-1">
                    We Review Your Request
                  </h3>
                  <p className="text-charcoal-light leading-relaxed">
                    Our commercial cleaning team will carefully review the
                    details you provided about your space, cleaning needs, and
                    scheduling preferences.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center">
                  <span className="text-lg font-bold text-teal">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-charcoal mb-1">
                    Custom Quote Within 24 Hours
                  </h3>
                  <p className="text-charcoal-light leading-relaxed">
                    You will receive a personalized quote tailored to your
                    facility size, cleaning frequency, and specific requirements.
                    No cookie-cutter pricing — just an honest number that
                    reflects your actual needs.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-5">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center">
                  <span className="text-lg font-bold text-teal">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-charcoal mb-1">
                    Schedule a Walkthrough
                  </h3>
                  <p className="text-charcoal-light leading-relaxed">
                    If you would like, we can arrange an on-site walkthrough of
                    your space. This allows us to fine-tune the scope of work and
                    ensure every detail is covered before we begin.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-teal px-8 py-3.5 text-base font-semibold text-white shadow-md hover:bg-teal-dark transition-colors"
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

            <a
              href="tel:+15139517799"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-teal/30 bg-white px-8 py-3.5 text-base font-semibold text-teal hover:bg-teal-light/10 transition-colors"
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
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              Call (513) 951-7799
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
