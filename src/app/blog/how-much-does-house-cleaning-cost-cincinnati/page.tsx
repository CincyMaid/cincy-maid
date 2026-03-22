import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Much Does House Cleaning Cost in Cincinnati?",
  description:
    "Honest Cincinnati house cleaning prices: recurring starts at $155, deep cleans and move-out cleans vary by home size. See what affects the cost.",
  alternates: {
    canonical:
      "https://cincymaid.com/blog/how-much-does-house-cleaning-cost-cincinnati",
  },
  openGraph: {
    title: "How Much Does House Cleaning Cost in Cincinnati?",
    description:
      "Recurring cleaning starts at $155. Deep cleans, move-out cleans, and hourly options explained — with real pricing from a Cincinnati cleaning company.",
    url: "https://cincymaid.com/blog/how-much-does-house-cleaning-cost-cincinnati",
    type: "article",
    publishedTime: "2026-03-22",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Much Does House Cleaning Cost in Cincinnati?",
  description:
    "A straightforward breakdown of house cleaning prices in Cincinnati, OH — by service type, home size, and frequency.",
  datePublished: "2026-03-22",
  dateModified: "2026-03-22",
  author: { "@type": "Organization", name: "Cincy Maid", url: "https://cincymaid.com" },
  publisher: { "@type": "Organization", name: "Cincy Maid", url: "https://cincymaid.com" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://cincymaid.com/blog/how-much-does-house-cleaning-cost-cincinnati" },
};

const blogPostingSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "How Much Does House Cleaning Cost in Cincinnati?",
  description: "A straightforward breakdown of house cleaning prices in Cincinnati, OH — by service type, home size, and frequency.",
  datePublished: "2026-03-22",
  dateModified: "2026-03-22",
  author: { "@type": "Organization", name: "Cincy Maid", url: "https://cincymaid.com" },
  url: "https://cincymaid.com/blog/how-much-does-house-cleaning-cost-cincinnati",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does house cleaning cost in Cincinnati?",
      acceptedAnswer: { "@type": "Answer", text: "Recurring biweekly cleaning in Cincinnati starts at $132 per visit for a 1-bedroom home with Cincy Maid. A 2-bedroom home runs $157–$174 biweekly depending on bathrooms. A 3-bedroom, 2-bathroom home typically runs $204–$225 biweekly. A 4-bedroom home runs $268–$315 biweekly. Prices are based on bedrooms, bathrooms, and square footage. One-time cleaning is priced higher — enter your home details at cincymaid.com/booking for an instant exact quote." },
    },
    {
      "@type": "Question",
      name: "How much does a deep cleaning cost in Cincinnati?",
      acceptedAnswer: { "@type": "Answer", text: "A deep cleaning in Cincinnati is priced higher than a standard recurring clean because it covers more — inside appliances, baseboards, window sills, and door frames in addition to every room. Cincy Maid provides instant online quotes based on your home size so you see the exact price before booking." },
    },
    {
      "@type": "Question",
      name: "How much does move-out cleaning cost in Cincinnati?",
      acceptedAnswer: { "@type": "Answer", text: "Move-out cleaning in Cincinnati is priced based on the size of the property. It covers every surface in detail — inside cabinets, inside appliances, all rooms and bathrooms — so the home is ready for the next tenant or buyer. Cincy Maid provides instant online quotes with no callbacks required." },
    },
    {
      "@type": "Question",
      name: "Is house cleaning cheaper if you book recurring service?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Recurring clients at Cincy Maid save 10 to 20% compared to one-time cleaning rates. Weekly clients receive the largest discount. Locking in a regular schedule also means your home stays consistently clean between visits, so each clean takes less time." },
    },
    {
      "@type": "Question",
      name: "What affects the price of house cleaning in Cincinnati?",
      acceptedAnswer: { "@type": "Answer", text: "The main factors are home size (number of bedrooms and bathrooms), type of clean (recurring, deep, or move-out), and frequency. Add-ons like inside oven, inside fridge, and deep baseboard detail add to the base price. Cincy Maid uses transparent instant pricing — you always see your exact total before confirming." },
    },
    {
      "@type": "Question",
      name: "Why does the first cleaning cost more?",
      acceptedAnswer: { "@type": "Answer", text: "The first cleaning establishes a clean baseline for your home. It takes longer than a recurring visit because every surface needs thorough attention — not just maintenance. After the first visit, recurring cleans are faster and more affordable because we are maintaining the standard rather than building it from scratch." },
    },
    {
      "@type": "Question",
      name: "Is there a contract for recurring cleaning?",
      acceptedAnswer: { "@type": "Answer", text: "No contracts. No commitments. Cancel anytime. You can pause, skip, or cancel your recurring plan whenever you need to — no fees, no questions." },
    },
    {
      "@type": "Question",
      name: "Are your cleaning products safe for kids and pets?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Cincy Maid uses eco-friendly, non-toxic cleaning products on every job. They are safe for children, pets, and anyone with sensitivities. If you have a preference for a specific product, let us know at booking and we will accommodate it." },
    },
    {
      "@type": "Question",
      name: "How do I get an exact price for house cleaning?",
      acceptedAnswer: { "@type": "Answer", text: "Book online at cincymaid.com. Enter your home details — bedrooms, bathrooms, and any add-ons — and your exact price appears instantly. No callbacks, no estimates, no surprises." },
    },
  ],
};

export default function HowMuchDoesHouseCleaningCostPost() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <Link href="/blog" className="text-sm font-semibold text-teal hover:text-teal-dark transition-colors">
            &larr; Back to Blog
          </Link>
          <h1 className="mt-6 font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
            How Much Does House Cleaning Cost{" "}
            <span className="text-teal">in Cincinnati?</span>
          </h1>
          <p className="mt-4 text-charcoal-light text-sm">
            By <span className="font-medium text-charcoal">Cincy Maid Team</span> &middot; March 22, 2026
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-charcoal-light text-lg leading-relaxed">

            <p>
              Recurring house cleaning in Cincinnati starts at <strong className="text-charcoal">$155 per visit</strong> with Cincy Maid. Final pricing depends on your home size, number of bedrooms and bathrooms, and how often we clean. Deep cleans and move-in/move-out cleans are priced higher and quoted instantly online based on your specific home.
            </p>
            <p>
              Pricing can feel like a black box with cleaning companies — vague estimates, callbacks required, surprises at checkout. This post breaks it down clearly so you know exactly what to expect before you book.
            </p>

            {/* ── Pricing Table Section ── */}
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal pt-4">
              Cincinnati House Cleaning Prices by Home Size
            </h2>
            <p>
              Pricing is built from three inputs: bedrooms (base price), bathrooms (+$20 each), and square footage (surcharge applies at 1,500 sq ft and above). The table below shows realistic totals for the most common Cincinnati home sizes — biweekly rates reflect the 15% recurring discount.
            </p>
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <table className="w-full text-sm border-collapse min-w-[520px]">
                <thead>
                  <tr className="bg-cream">
                    <th className="text-left px-4 py-3 font-semibold text-charcoal border-b border-sand-light">
                      Home Size
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-charcoal border-b border-sand-light">
                      Typical Sq Ft
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-charcoal border-b border-sand-light">
                      <span className="inline-flex items-center gap-2">
                        Biweekly
                        <span className="text-xs font-semibold bg-teal text-white px-2 py-0.5 rounded-full">
                          Most Popular
                        </span>
                      </span>
                    </th>
                    <th className="text-left px-4 py-3 font-semibold text-charcoal border-b border-sand-light">
                      One-Time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { size: "1 bed / 1 bath", sqft: "under 1,000", biweekly: "$132", onetime: "$155" },
                    { size: "2 bed / 1 bath", sqft: "900–1,400", biweekly: "$157", onetime: "$185" },
                    { size: "2 bed / 2 bath", sqft: "900–1,400", biweekly: "$174", onetime: "$205" },
                    { size: "3 bed / 2 bath", sqft: "1,400–2,000", biweekly: "$204–$225", onetime: "$240–$265" },
                    { size: "4 bed / 2 bath", sqft: "1,800–2,500", biweekly: "$268–$281", onetime: "$315–$330" },
                    { size: "4 bed / 3 bath", sqft: "2,000–3,000", biweekly: "$298–$315", onetime: "$350–$370" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-cream/40"}>
                      <td className="px-4 py-3 font-medium text-charcoal border-b border-sand-light">{row.size}</td>
                      <td className="px-4 py-3 text-charcoal-light border-b border-sand-light">{row.sqft}</td>
                      <td className="px-4 py-3 font-semibold text-teal border-b border-sand-light">{row.biweekly}</td>
                      <td className="px-4 py-3 text-charcoal-light border-b border-sand-light">{row.onetime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-charcoal-light">
              Ranges reflect the square footage surcharge: +$25 at 1,500–1,999 sq ft, +$40 at 2,000–2,499 sq ft, +$60 at 2,500–2,999 sq ft. Weekly service saves an additional 5% over biweekly. The booking form calculates your exact price automatically — enter your bedroom and bathroom count to see your number.
            </p>

            {/* Section 1 */}
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal pt-4">
              Recurring Cleaning: Starting at $155
            </h2>
            <p>
              This is our most popular service — and the best value. Recurring cleaning covers your whole home: kitchen, bathrooms, all living spaces, bedrooms, floors, and high-touch surfaces on every visit.
            </p>
            <p>You choose the frequency that works for you:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-charcoal">Weekly</strong> — maximum discount, up to 20% off one-time rates. Best for busy families, homes with kids or pets, or anyone who wants their home consistently guest-ready.</li>
              <li><strong className="text-charcoal">Biweekly (every two weeks)</strong> — our most common choice. Saves 10–15% and keeps most homes in great shape between visits.</li>
              <li><strong className="text-charcoal">Monthly</strong> — a lighter discount, good for smaller homes or people who handle the maintenance themselves and want a thorough reset each month.</li>
            </ul>
            <p>
              The exact price is calculated from your home&apos;s bedrooms, bathrooms, and square footage. You get an instant quote online — no callbacks, no guessing.
            </p>

            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal pt-4">
              Deep Cleaning: Priced Above the Recurring Rate
            </h2>
            <p>
              A deep clean goes further than a standard visit. In addition to every room in the home, we cover inside appliances (oven, microwave, refrigerator), detailed baseboard scrubbing, window sills, and door frames — the stuff that builds up over time and rarely gets touched in a regular clean.
            </p>
            <p>
              Most first-time clients start with a deep clean before moving to recurring service. It resets the home so every visit after that starts from a genuinely clean baseline instead of trying to catch up.
            </p>
            <p>Deep clean pricing is based on home size and is quoted instantly when you book online.</p>

            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal pt-4">
              Move-In / Move-Out Cleaning: Priced by Property Size
            </h2>
            <p>
              Move-out cleans cover every inch of an empty property — inside cabinets, inside all appliances, every room, all bathrooms, and every surface in detail. It&apos;s a top-to-bottom clean designed to satisfy landlord requirements and make the space truly ready for the next occupant.
            </p>
            <p>
              Move-in cleans follow the same standard. You shouldn&apos;t have to clean someone else&apos;s home before you can settle into your own. We take care of it so your first night feels fresh.
            </p>
            <p>Like all Cincy Maid services, you get an instant online price based on the property — no waiting for a quote.</p>

            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal pt-4">
              Hourly Cleaning: $75/Hour Per Cleaner
            </h2>
            <p>
              Sometimes you don&apos;t need a full-home clean. Maybe you want one room tackled in detail, help after a party, or a task-focused session on the areas that bother you most. That&apos;s what hourly cleaning is for.
            </p>
            <p>Hourly service is $75 per cleaner with a three-hour minimum. You direct the cleaner to focus on exactly what you need — no standard checklist, just your priorities.</p>

            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal pt-4">
              What Affects the Final Price?
            </h2>
            <p>Every home is different. Here are the factors that move the needle on your quote:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-charcoal">Home size</strong> — more bedrooms and bathrooms means more time, which means a higher price.</li>
              <li><strong className="text-charcoal">Type of clean</strong> — recurring is the most affordable per visit. Deep cleans and move-out cleans require more time and are priced accordingly.</li>
              <li><strong className="text-charcoal">Frequency</strong> — weekly clients save the most. The more often we clean, the less buildup there is, and the faster each visit goes.</li>
              <li><strong className="text-charcoal">Add-ons</strong> — inside oven, inside refrigerator, deep baseboard detail, and other extras are available for an additional charge.</li>
              <li><strong className="text-charcoal">Condition of the home</strong> — if a home hasn&apos;t been cleaned in a long time, a first visit may take longer and be priced higher than a maintenance clean.</li>
            </ul>
            <p>There are no hidden fees, no fuel surcharges, and no surprises at checkout. The price you see when you book is the price you pay — after the clean is complete.</p>

            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal pt-4">
              Is Cincinnati House Cleaning Worth the Cost?
            </h2>
            <p>
              That depends on how you value your time. For most Cincinnati families, a recurring cleaning visit saves 3 to 5 hours of work per week. At a biweekly cadence, that&apos;s 6 to 10 hours a month you get back — hours that would otherwise go to scrubbing bathrooms, vacuuming floors, and mopping kitchens.
            </p>
            <p>
              Most clients tell us the biggest benefit isn&apos;t the clean house. It&apos;s the mental load that disappears. You stop thinking about what needs to be done. You stop scheduling your weekend around chores. The house just stays clean, and you move on with your life.
            </p>
            <p>
              All Cincy Maid cleaners are background-checked, fully insured, and trained to a consistent standard. If anything is missed, we come back within 24 hours and fix it — no charge.
            </p>
          </div>

          <div className="mt-16 border-t border-sand-light pt-12">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-charcoal mb-8">
              Frequently Asked <span className="text-teal">Questions</span>
            </h2>
            <div className="space-y-6">
              <div className="border border-sand-light rounded-xl p-6">
                <h3 className="font-semibold text-charcoal text-lg">How much does house cleaning cost in Cincinnati?</h3>
                <p className="mt-3 text-charcoal-light leading-relaxed">Recurring house cleaning starts at $155 per visit. Final pricing depends on your home size, number of bedrooms and bathrooms, and cleaning frequency. Weekly clients save up to 20% compared to one-time rates.</p>
              </div>
              <div className="border border-sand-light rounded-xl p-6">
                <h3 className="font-semibold text-charcoal text-lg">How much does a deep cleaning cost in Cincinnati?</h3>
                <p className="mt-3 text-charcoal-light leading-relaxed">Deep cleans are priced higher than recurring visits because they cover more — inside appliances, detailed baseboards, window sills, and door frames. Cincy Maid provides instant online quotes based on your home size so you see the exact price before you book.</p>
              </div>
              <div className="border border-sand-light rounded-xl p-6">
                <h3 className="font-semibold text-charcoal text-lg">How much does move-out cleaning cost in Cincinnati?</h3>
                <p className="mt-3 text-charcoal-light leading-relaxed">Move-out cleaning is priced by property size and covers every surface — inside cabinets, inside appliances, all rooms and bathrooms. Cincy Maid provides instant online quotes with no callbacks required.</p>
              </div>
              <div className="border border-sand-light rounded-xl p-6">
                <h3 className="font-semibold text-charcoal text-lg">Is house cleaning cheaper with a recurring plan?</h3>
                <p className="mt-3 text-charcoal-light leading-relaxed">Yes. Recurring clients save 10 to 20% compared to one-time rates. Weekly clients receive the largest discount. A regular schedule also keeps each visit faster since there&apos;s less buildup between cleans.</p>
              </div>
              <div className="border border-sand-light rounded-xl p-6">
                <h3 className="font-semibold text-charcoal text-lg">What affects the price of house cleaning?</h3>
                <p className="mt-3 text-charcoal-light leading-relaxed">The main factors are home size, type of clean (recurring, deep, or move-out), and frequency. Optional add-ons like inside oven and inside fridge are available for an extra charge. Cincy Maid uses transparent instant pricing — you always see your exact total before confirming.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-teal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold text-white">
            See Your Exact Price in Under Two Minutes
          </h2>
          <p className="mt-4 text-white/90 text-lg max-w-2xl mx-auto">
            Instant online pricing. No callbacks. No hidden fees. Recurring plans start at $155 — pay only after we clean.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking" className="inline-flex items-center justify-center rounded-full bg-white text-teal px-8 py-3.5 text-base font-semibold shadow-lg hover:bg-cream transition-colors">
              Get an Instant Quote
            </Link>
            <Link href="/services" className="inline-flex items-center justify-center rounded-full border-2 border-white text-white px-8 py-3.5 text-base font-semibold hover:bg-white/10 transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}