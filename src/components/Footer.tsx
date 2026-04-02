"use client";

import { useState } from "react";
import Link from "next/link";
import locations from "@/data/locations.json";

const regionGroups: { label: string; slugs: string[] }[] = [
  {
    label: "Cincinnati Neighborhoods",
    slugs: [
      "cincinnati", "hyde-park", "mt-adams", "over-the-rhine", "oakley",
      "mt-lookout", "clifton", "northside", "east-walnut-hills", "westwood",
      "anderson-township", "delhi-township", "columbia-tusculum",
    ],
  },
  {
    label: "Northern Suburbs",
    slugs: [
      "mason", "west-chester", "liberty-township", "fairfield", "hamilton",
      "sharonville", "springdale", "blue-ash", "montgomery", "madeira",
      "loveland", "indian-hill",
    ],
  },
  {
    label: "Eastern Suburbs",
    slugs: [
      "milford", "mariemont", "terrace-park", "kenwood", "deer-park",
      "norwood", "amberley-village", "wyoming",
    ],
  },
];

const locationsBySlug = Object.fromEntries(
  locations.map((l: { name: string; slug: string }) => [l.slug, { name: l.name, slug: l.slug }])
);

interface LocationGroup {
  title: string;
  locations: { name: string; slug: string }[];
}

const serviceAreaGroups: LocationGroup[] = regionGroups.map((group) => ({
  title: group.label,
  locations: group.slugs
    .map((slug) => locationsBySlug[slug])
    .filter(Boolean),
}));

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Our Services" },
  { href: "/commercial", label: "Commercial Cleaning" },
  { href: "/about", label: "About Us" },
  { href: "/booking", label: "Book a Cleaning" },
  { href: "/gift-cards", label: "Gift Cards" },
  { href: "/blog", label: "Blog" },
  { href: "/careers", label: "Join Our Team" },
  { href: "/contact", label: "Contact Us" },
];

function CollapsibleRegion({ group }: { group: LocationGroup }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left text-sm text-sand hover:text-coral-light transition-colors duration-200 group"
        aria-expanded={isOpen}
      >
        <span className="font-medium">{group.title}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className={`w-4 h-4 text-charcoal-light group-hover:text-coral-light transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>

      {isOpen && (
        <ul className="mt-2 ml-2 space-y-1.5 animate-fade-in">
          {group.locations.map((location) => (
            <li key={location.slug}>
              <Link
                href={`/locations/${location.slug}`}
                className="text-sm text-charcoal-light hover:text-coral-light transition-colors duration-200"
              >
                {location.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-sand-light">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="font-[family-name:var(--font-playfair)] text-2xl font-bold tracking-tight">
                <span className="text-white">Cincy</span>{" "}
                <span className="text-teal-light">Maid</span>
              </span>
            </Link>
            <p className="text-sm text-sand leading-relaxed max-w-xs">
              Making Cincinnati homes shine, one clean at a time. We bring care,
              consistency, and a personal touch to every space we clean.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-coral font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-sand hover:text-coral-light transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas Column */}
          <div>
            <h3 className="text-coral font-semibold text-sm uppercase tracking-wider mb-4">
              Service Areas
            </h3>
            <div className="space-y-3">
              {serviceAreaGroups.map((group) => (
                <CollapsibleRegion key={group.title} group={group} />
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-coral font-semibold text-sm uppercase tracking-wider mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-4">
              {/* Phone */}
              <li>
                <a
                  href="tel:+15139517799"
                  className="flex items-start gap-3 text-sm text-sand hover:text-teal-light transition-colors duration-200 group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 text-teal-light shrink-0 mt-0.5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>(513) 951-7799</span>
                </a>
              </li>

              {/* Email */}
              <li>
                <a
                  href="mailto:admin@cincymaid.com"
                  className="flex items-start gap-3 text-sm text-sand hover:text-teal-light transition-colors duration-200 group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 text-teal-light shrink-0 mt-0.5"
                  >
                    <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
                    <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
                  </svg>
                  <span>admin@cincymaid.com</span>
                </a>
              </li>

              {/* Location */}
              <li className="flex items-start gap-3 text-sm text-sand">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 text-teal-light shrink-0 mt-0.5"
                >
                  <path
                    fillRule="evenodd"
                    d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.274 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Cincinnati, Ohio</span>
              </li>

              {/* Hours */}
              <li className="flex items-start gap-3 text-sm text-sand">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 text-teal-light shrink-0 mt-0.5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-13a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-3.25V5Z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <p>Every Day: 8:00 AM &ndash; 8:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-charcoal-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-charcoal-light">
            <p>&copy; {currentYear} Cincy Maid. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link
                href="/privacy-policy"
                className="hover:text-sand-light transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <span className="text-charcoal-light/40">|</span>
              <Link
                href="/terms-of-service"
                className="hover:text-sand-light transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
