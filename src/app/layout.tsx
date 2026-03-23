import type { Metadata } from "next";
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
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
