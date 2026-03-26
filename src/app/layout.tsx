import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Cincy Maid",
    default: "Cincy Maid | Trusted Home Cleaning in Cincinnati, OH",
  },
  description:
    "Professional house cleaning services in Cincinnati, Mason, West Chester, Hyde Park, Oakley, and surrounding areas. Reliable, thorough, and tailored to your home. Book your cleaning today!",
  keywords: [
    "house cleaning Cincinnati",
    "cleaning service Cincinnati OH",
    "maid service Cincinnati",
    "home cleaning near me",
    "residential cleaning Cincinnati",
    "deep cleaning Cincinnati",
    "move out cleaning Cincinnati",
    "recurring cleaning service Ohio",
    "Mason cleaning service",
    "West Chester house cleaning",
    "Hyde Park maid service",
    "Oakley cleaning service",
    "Mt. Lookout house cleaning",
    "Cincinnati maid service",
    "professional cleaners Cincinnati",
    "trusted cleaning service Cincinnati",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cincymaid.com",
    siteName: "Cincy Maid",
    title: "Cincy Maid | Trusted Home Cleaning in Cincinnati, OH",
    description:
      "Professional house cleaning services in Cincinnati and surrounding areas. Reliable, thorough, and tailored to your home.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cincy Maid | Trusted Home Cleaning in Cincinnati, OH",
    description:
      "Professional house cleaning services in Cincinnati and surrounding areas. Reliable, thorough, and tailored to your home.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K59C6TMD');`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K59C6TMD"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
