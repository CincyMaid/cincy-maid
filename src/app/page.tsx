import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ConvertLabsEmbed from "@/components/ConvertLabsEmbed";

/* ------------------------------------------------------------------ */
/*  Metadata                                                          */
/* ------------------------------------------------------------------ */
export const metadata: Metadata = {
  title: { absolute: "Cincy Maid | Professional House Cleaning in Cincinnati, OH" },
  description:
    "Professional house cleaning in Cincinnati starting at $155. Background-checked teams, eco-friendly products. Book online today!",
  alternates: {
    canonical: "https://cincymaid.com",
  },
  openGraph: {
    title: "Cincy Maid | Professional House Cleaning in Cincinnati, OH",
    description:
      "Meticulous house cleaning across Greater Cincinnati. Background-checked teams, eco-friendly supplies, flexible scheduling. Starting at $155.",
    url: "https://cincymaid.com",
    siteName: "Cincy Maid",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cincy Maid | Professional House Cleaning in Cincinnati, OH",
    description:
      "Meticulous house cleaning across Greater Cincinnati. Background-checked teams, eco-friendly supplies, flexible scheduling. Starting at $155.",
  },
};

/* ------------------------------------------------------------------ */
/*  JSON-LD Schemas                                                   */
/* ------------------------------------------------------------------ */
const cleaningServiceSchema = {
  "@context": "https://schema.org",
  "@type": "CleaningService" as const,
  name: "Cincy Maid",
  url: "https://cincymaid.com",
  logo: "https://cincymaid.com/logo.png",
  image: "https://cincymaid.com/og-image.jpg",
  telephone: "(513) 951-7799",
  email: "admin@cincymaid.com",
  description:
    "Professional house cleaning services across Cincinnati, OH and surrounding communities. Background-checked teams, eco-friendly products, and satisfaction guaranteed.",
  foundingDate: "2024",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cincinnati",
    addressRegion: "OH",
    postalCode: "45202",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 39.1031,
    longitude: -84.512,
  },
  areaServed: [
    { "@type": "City", name: "Cincinnati" },
    { "@type": "City", name: "Mason" },
    { "@type": "City", name: "West Chester" },
    { "@type": "City", name: "Hyde Park" },
    { "@type": "City", name: "Oakley" },
    { "@type": "City", name: "Mt. Lookout" },
    { "@type": "City", name: "Anderson Township" },
    { "@type": "City", name: "Madeira" },
    { "@type": "City", name: "Indian Hill" },
    { "@type": "City", name: "Blue Ash" },
    { "@type": "City", name: "Kenwood" },
    { "@type": "City", name: "Loveland" },
    { "@type": "City", name: "Montgomery" },
    { "@type": "City", name: "Mariemont" },
    { "@type": "AdministrativeArea", name: "Northern Kentucky" },
    { "@type": "City", name: "Covington", containedInPlace: { "@type": "State", name: "Kentucky" } },
    { "@type": "City", name: "Florence", containedInPlace: { "@type": "State", name: "Kentucky" } },
    { "@type": "City", name: "Newport", containedInPlace: { "@type": "State", name: "Kentucky" } },
    { "@type": "City", name: "Erlanger", containedInPlace: { "@type": "State", name: "Kentucky" } },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "20:00",
    },
  ],
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "33",
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: [
    "https://www.facebook.com/profile.php?id=61569299643785",
    "https://www.instagram.com/cincymaid",
    "https://www.yelp.com/biz/cincy-maid-loveland",
    "https://nextdoor.com/pages/cincy-maid/",
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Book a Cleaning with Cincy Maid",
  description:
    "Schedule a professional house cleaning in Cincinnati in three simple steps.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Tell Us About Your Space",
      text: "Fill out our quick online form with your home size, preferred date, and any special requests.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Get Your Instant Quote",
      text: "Receive transparent, upfront pricing with no hidden fees. Approve your quote and confirm your appointment.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Enjoy Your Spotless Home",
      text: "Our vetted cleaning team arrives on time, handles everything, and leaves your home gleaming.",
    },
  ],
};

const faqItems = [
  {
    question: "What areas around Cincinnati does Cincy Maid serve?",
    answer:
      "We serve Greater Cincinnati and Northern Kentucky including Mason, West Chester, Hyde Park, Oakley, Mt. Lookout, Anderson Township, Madeira, Indian Hill, Blue Ash, Kenwood, Loveland, Montgomery, Mariemont, Covington, Florence, Newport, and Erlanger. If you are unsure whether we cover your neighborhood, call us at (513) 951-7799 and we will let you know right away.",
  },
  {
    question: "How much does a house cleaning cost in Cincinnati?",
    answer:
      "Our residential cleanings start at $155. Final pricing depends on the size of your home, the level of cleaning you need, and any add-on services such as interior oven or refrigerator cleaning. You will always see your exact price before confirming your booking — no surprises.",
  },
  {
    question: "Are your cleaning teams background-checked?",
    answer:
      "Absolutely. Every Cincy Maid team member passes a thorough background screening before they ever enter a client's home. We also carry full liability insurance so you have total peace of mind.",
  },
  {
    question: "What cleaning products do you use?",
    answer:
      "We use eco-friendly, non-toxic cleaning products that are tough on grime but gentle on surfaces, pets, and children. If you have specific product preferences or sensitivities, let us know during booking and we will accommodate them.",
  },
  {
    question: "Can I book a one-time deep clean instead of recurring service?",
    answer:
      "Yes. We offer both one-time deep cleans and recurring plans (weekly, biweekly, or monthly). Many Cincinnati homeowners start with a deep clean and then switch to a recurring schedule to keep things consistently fresh.",
  },
  {
    question: "What happens if I am not satisfied with my cleaning?",
    answer:
      "Your satisfaction is our priority. If anything does not meet your expectations, contact us within 24 hours at (513) 951-7799 or admin@cincymaid.com and we will send a team back to make it right at no additional charge.",
  },
  {
    question: "Do I need to be home during the cleaning?",
    answer:
      "Not at all. Many of our Cincinnati clients provide a spare key, garage code, or lockbox access. Our teams are fully insured and background-checked, so you can feel confident leaving your home in our hands.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking at least 48 hours ahead to guarantee your preferred date and time, especially during busy seasons. However, we do our best to accommodate same-week requests across the Cincinnati area whenever availability allows.",
  },
  {
    question: "How often should I have my house cleaned?",
    answer:
      "Most Cincinnati families choose biweekly service — it keeps the home consistently clean without the cost of weekly visits. If you have kids, pets, or entertain frequently, weekly service may be a better fit. A monthly clean works well for smaller homes or as a supplement to your own cleaning routine.",
  },
  {
    question: "Is it worth hiring a house cleaner?",
    answer:
      "For busy Cincinnati families, hiring a cleaner typically saves 3–5 hours per week and reduces stress significantly. Many clients tell us the biggest benefit isn't the clean home — it's getting their weekends back. With recurring plans starting at $155, most families find the cost reasonable compared to the time and energy they save.",
  },
  {
    question: "How do I prepare for a house cleaning?",
    answer:
      "You do not need to do much. We ask that you pick up loose items from floors and surfaces so our team can clean efficiently. Secure pets if needed. You do not need to be home — many Cincinnati clients provide a key or garage code. That is all.",
  },
  {
    question: "Do I need to provide cleaning supplies?",
    answer:
      "No. Our teams arrive fully equipped with professional, eco-friendly cleaning products and all necessary equipment. If you have a preference for a specific product or have a surface that requires special care, let us know during booking and we will accommodate it.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Cincy Maid | Professional House Cleaning in Cincinnati, OH",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [
      "#hero-heading",
      "#hero-description",
      "#how-it-works-heading",
    ],
  },
  url: "https://cincymaid.com",
};

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */
const services = [
  {
    title: "Residential Cleaning",
    description:
      "From weekly upkeep to seasonal deep scrubs, we tailor every visit to the way your household actually lives. Kitchens, bathrooms, living areas, bedrooms — all handled with precision so you never come home to a chore list.",
    image: "/images/residential.jpg",
    href: "/services",
  },
  {
    title: "Commercial Cleaning",
    description:
      "Offices, retail spaces, and small businesses across Cincinnati deserve a workspace that reflects professionalism. We work around your hours and deliver consistent results that impress clients and staff alike.",
    image: "/images/commercial.jpg",
    href: "/commercial",
  },
  {
    title: "Move-In / Move-Out Cleaning",
    description:
      "Relocating is stressful enough without worrying about scrubbing baseboards. Our move-day deep cleans cover every corner — cabinets, appliances, fixtures — so you can hand over (or step into) a truly spotless space.",
    image: "/images/move-in-move-out.jpg",
    href: "/services",
  },
];

const steps = [
  {
    number: "01",
    title: "Share Your Details",
    description:
      "Answer a few quick questions about your home size, cleaning preferences, and schedule. It takes less than two minutes.",
    image: "/images/step-book.jpg",
  },
  {
    number: "02",
    title: "Lock In Your Price",
    description:
      "Review a transparent quote with every line item visible. No hidden charges, no last-minute add-ons. Approve and pick your date.",
    image: "/images/step-clean.jpg",
  },
  {
    number: "03",
    title: "Open the Door to Clean",
    description:
      "Our vetted team shows up on time, works through a detailed checklist, and leaves your home looking (and smelling) brand new.",
    image: "/images/step-relax.jpg",
  },
];

const trustCards = [
  {
    title: "Rigorous Background Checks",
    description:
      "Every team member clears a multi-step screening before they are ever assigned to a home. Your security is non-negotiable.",
    icon: (
      <svg
        className="w-7 h-7 text-teal"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
  {
    title: "Fully Insured & Bonded",
    description:
      "We carry comprehensive liability coverage. If the unexpected happens, you are protected — no questions asked.",
    icon: (
      <svg
        className="w-7 h-7 text-teal"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Eco-Conscious Supplies",
    description:
      "Our plant-based, non-toxic products deliver a powerful clean without harsh chemicals. Safe for kids, pets, and the planet.",
    icon: (
      <svg
        className="w-7 h-7 text-teal"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12.75 3.03v.568c0 2.849-2.239 5.205-5.084 5.332a5.498 5.498 0 00-.658-.025A5.555 5.555 0 002.25 14.4c0 3.068 2.486 5.555 5.555 5.555a5.536 5.536 0 003.135-.968 6.004 6.004 0 005.789-1.137A6.007 6.007 0 0021.75 12c0-3.22-2.537-5.852-5.72-5.99a5.476 5.476 0 00-3.28-2.98z"
        />
      </svg>
    ),
  },
  {
    title: "Satisfaction Promise",
    description:
      "Not thrilled with any part of your clean? Let us know within 24 hours and we will come back to fix it — completely free.",
    icon: (
      <svg
        className="w-7 h-7 text-teal"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
        />
      </svg>
    ),
  },
];

const testimonials = [
  {
    name: "Jennifer K.",
    location: "Hyde Park, Cincinnati",
    rating: 5,
    text: "After years of trying different services, Cincy Maid is the first team that actually cleans the things I forget to ask about — light switches, door frames, behind the toilet. They treat my home like it is their own, and I genuinely look forward to coming home on cleaning day.",
  },
  {
    name: "David & Laura M.",
    location: "Mason, OH",
    rating: 5,
    text: "We have two dogs and three kids, so our house can go from tidy to total chaos in about an hour. Cincy Maid handles it all without judgment and without cutting corners. Our biweekly cleanings have honestly saved our sanity — and probably our marriage.",
  },
  {
    name: "Priya S.",
    location: "West Chester, OH",
    rating: 5,
    text: "I hired Cincy Maid for a move-out deep clean and my landlord said it was the cleanest unit he had ever received back. I got my full deposit returned with zero deductions. Worth every penny and I have already booked them for my new place.",
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */
export default function HomePage() {
  return (
    <>
      {/* ---- JSON-LD Scripts ---- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(cleaningServiceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />

      {/* ================================================================ */}
      {/*  HERO                                                            */}
      {/* ================================================================ */}
      <section className="relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-home.jpg"
            alt="Bright, freshly cleaned Cincinnati home interior"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-charcoal/35" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center">
            <div>
              {/* Badge */}
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-white mb-6">
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
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                Serving Cincinnati &amp; Surrounding Communities
              </span>

              <h1
                id="hero-heading"
                className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              >
                Cincinnati&apos;s Trusted House Cleaning Service{" "}
                <span className="text-teal">
                  So Your Weekends Are Actually Yours.
                </span>
              </h1>

              <p
                id="hero-description"
                className="text-lg sm:text-xl text-white/85 leading-relaxed mb-8 max-w-2xl mx-auto"
              >
                Cincy Maid pairs background-checked cleaning professionals with
                eco-friendly products to give Cincinnati homes a thorough,
                worry-free clean — on your schedule, starting at just $155.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 justify-center">
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-coral px-8 py-3.5 text-base font-semibold text-white shadow-lg hover:bg-coral-light hover:text-charcoal transition-colors"
                >
                  Book Now
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
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>

                <a
                  href="tel:+15139517799"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-3.5 text-base font-semibold text-white hover:bg-white/20 transition-colors"
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
                  (513) 951-7799
                </a>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  "Background Checked",
                  "Fully Insured",
                  "Eco-Friendly Products",
                  "Satisfaction Guaranteed",
                ].map((badge) => (
                  <div
                    key={badge}
                    className="flex items-center gap-2 rounded-lg bg-white/10 backdrop-blur-sm px-3 py-2"
                  >
                    <svg
                      className="w-4 h-4 text-coral-light flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-xs sm:text-sm font-medium text-white/90">
                      {badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Leads Form - below content */}
            <div className="max-w-5xl mx-auto mt-12">
              <div className="bg-white/85 backdrop-blur-sm rounded-2xl shadow-lg p-6">
                <div className="text-center mb-4">
                  <h2 className="text-xl font-bold text-charcoal">
                    Get a <span className="text-teal">Free Estimate</span>
                  </h2>
                  <p className="mt-1 text-sm text-charcoal-light">
                    Tell us about your space — get a personalized quote.
                  </p>
                </div>
                <ConvertLabsEmbed type="leads" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  SERVICES OVERVIEW                                               */}
      {/* ================================================================ */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-teal font-semibold text-sm uppercase tracking-wider mb-3">
              Our Services
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              Cleaning Solutions Built Around <span className="text-teal">Your Life</span>
            </h2>
            <p className="text-charcoal-light max-w-2xl mx-auto text-lg">
              Whether you need a recurring refresh, a one-time deep scrub, or
              help prepping for a move, we have a service designed for exactly
              that.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-sand-light"
              >
                <div className="relative aspect-[4/3] bg-sand-light">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-charcoal mb-3">
                    {service.title}
                  </h3>
                  <p className="text-charcoal-light leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-teal font-semibold text-sm group-hover:gap-2 transition-all">
                    Learn More
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
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  HOW IT WORKS                                                    */}
      {/* ================================================================ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-teal font-semibold text-sm uppercase tracking-wider mb-3">
              How It Works
            </span>
            <h2
              id="how-it-works-heading"
              className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-charcoal mb-4"
            >
              Three Steps to a <span className="text-teal">Sparkling Home</span>
            </h2>
            <p className="text-charcoal-light max-w-2xl mx-auto text-lg">
              No long phone calls, no back-and-forth emails. Just a
              straightforward process that gets your home cleaned fast.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, i) => (
              <div key={step.number} className="relative text-center">
                {/* Connector line (hidden on mobile and last item) */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] border-t-2 border-dashed border-teal-light" />
                )}
                <div className="relative w-40 h-40 rounded-full overflow-hidden mx-auto mb-5 bg-sand-light">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                    sizes="160px"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-teal/40">
                      {step.number}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">
                  {step.title}
                </h3>
                <p className="text-charcoal-light leading-relaxed max-w-sm mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-teal px-8 py-3.5 text-base font-semibold text-white shadow-md hover:bg-teal-dark transition-colors"
            >
              Schedule Your Cleaning
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
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  TRUST / SAFETY                                                  */}
      {/* ================================================================ */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — image + copy */}
            <div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-sand-light mb-8">
                <Image
                  src="/images/cleaning-team.jpg"
                  alt="Cincy Maid cleaning team member at work in a Cincinnati home"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <span className="inline-block text-teal font-semibold text-sm uppercase tracking-wider mb-3">
                Your Peace of Mind
              </span>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-charcoal mb-6">
                We Earn Your Trust Before We Ever <span className="text-teal">Pick Up a Mop</span>
              </h2>
              <p className="text-charcoal-light text-lg leading-relaxed mb-6">
                Inviting someone into your home is personal. That is why every
                Cincy Maid team member goes through identity verification,
                criminal background screening, and reference checks before their
                first assignment. We also carry full general liability insurance
                and bonding — so if the unexpected ever happens, you are
                completely covered.
              </p>
              <p className="text-charcoal-light text-lg leading-relaxed">
                Our commitment does not stop at screening. We invest in ongoing
                training, use eco-friendly products, and follow detailed
                checklists to ensure a consistently excellent clean every single
                visit.
              </p>
            </div>

            {/* Right — trust cards */}
            <div className="grid sm:grid-cols-2 gap-5">
              {trustCards.map((card) => (
                <div
                  key={card.title}
                  className="bg-white rounded-xl p-6 shadow-sm border border-sand-light"
                >
                  <div className="w-12 h-12 rounded-lg bg-teal-light/25 flex items-center justify-center mb-4">
                    {card.icon}
                  </div>
                  <h3 className="text-base font-bold text-charcoal mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-charcoal-light leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  TESTIMONIALS                                                    */}
      {/* ================================================================ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-teal font-semibold text-sm uppercase tracking-wider mb-3">
              Testimonials
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              What Cincinnati <span className="text-teal">Homeowners</span> Are Saying
            </h2>
            <p className="text-charcoal-light max-w-2xl mx-auto text-lg">
              Do not just take our word for it — hear from real clients across
              Greater Cincinnati and Northern Kentucky.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-cream rounded-2xl p-8 border border-sand-light"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-coral"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="text-charcoal leading-relaxed mb-6">
                  &ldquo;{t.text}&rdquo;
                </blockquote>

                <div>
                  <p className="font-semibold text-charcoal">{t.name}</p>
                  <p className="text-sm text-charcoal-light">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  FAQ                                                             */}
      {/* ================================================================ */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-teal font-semibold text-sm uppercase tracking-wider mb-3">
              FAQ
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-charcoal mb-4">
              Common <span className="text-teal">Questions</span>, Straight Answers
            </h2>
            <p className="text-charcoal-light max-w-2xl mx-auto text-lg">
              Everything you need to know about booking, pricing, and what to
              expect from your Cincy Maid cleaning.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, i) => (
              <details
                key={i}
                className="group bg-white rounded-xl border border-sand-light shadow-sm"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-left font-semibold text-charcoal hover:text-teal transition-colors">
                  {item.question}
                  <svg
                    className="w-5 h-5 flex-shrink-0 text-charcoal-light group-open:rotate-180 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-5 text-charcoal-light leading-relaxed">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  FINAL CTA                                                       */}
      {/* ================================================================ */}
      <section className="py-20 lg:py-28 bg-teal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Reclaim Your Weekends?
          </h2>
          <p className="text-white/85 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Life in Cincinnati moves fast. Let Cincy Maid take cleaning off your
            plate so you can spend your free time on the things that actually
            matter — family, friends, and a little well-deserved rest.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-teal shadow-lg hover:bg-cream transition-colors"
            >
              Book Your Cleaning
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
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>

            <a
              href="tel:+15139517799"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-3.5 text-base font-semibold text-white hover:bg-white/20 transition-colors"
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
