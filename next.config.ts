import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old location pages → homepage
      { source: "/blue-ash", destination: "/", permanent: true },
      { source: "/blue-ash/", destination: "/", permanent: true },
      { source: "/anderson-township", destination: "/", permanent: true },
      { source: "/anderson-township/", destination: "/", permanent: true },
      { source: "/hyde-park", destination: "/", permanent: true },
      { source: "/hyde-park/", destination: "/", permanent: true },
      { source: "/mariemont", destination: "/", permanent: true },
      { source: "/mariemont/", destination: "/", permanent: true },
      { source: "/mt-adams-house-cleaner", destination: "/", permanent: true },
      { source: "/mt-adams-house-cleaner/", destination: "/", permanent: true },
      { source: "/milford", destination: "/", permanent: true },
      { source: "/milford/", destination: "/", permanent: true },
      { source: "/madeira", destination: "/", permanent: true },
      { source: "/madeira/", destination: "/", permanent: true },
      { source: "/mason", destination: "/", permanent: true },
      { source: "/mason/", destination: "/", permanent: true },
      { source: "/loveland", destination: "/", permanent: true },
      { source: "/loveland/", destination: "/", permanent: true },

      // Missing location slug variants
      { source: "/mariemont-house-cleaner", destination: "/", permanent: true },
      { source: "/mariemont-house-cleaner/", destination: "/", permanent: true },
      { source: "/hyde-park-house-cleaner", destination: "/", permanent: true },
      { source: "/hyde-park-house-cleaner/", destination: "/", permanent: true },
      { source: "/mt-adams", destination: "/", permanent: true },
      { source: "/mt-adams/", destination: "/", permanent: true },
      { source: "/mason-house-cleaner", destination: "/", permanent: true },
      { source: "/mason-house-cleaner/", destination: "/", permanent: true },

      // Old booking URLs → /booking
      { source: "/book", destination: "/booking", permanent: true },
      { source: "/book/", destination: "/booking", permanent: true },
      { source: "/book-now", destination: "/booking", permanent: true },
      { source: "/book-now/", destination: "/booking", permanent: true },
      { source: "/booking/", destination: "/booking", permanent: true },
      { source: "/booking-page", destination: "/booking", permanent: true },

      // Old blog posts → /blog
      {
        source: "/how-to-keep-a-clean-home-when-you-work-full-time-and-have-kids-a-survival-guide-for-cincinnati-parents",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/how-to-keep-a-clean-home-when-you-work-full-time-and-have-kids-a-survival-guide-for-cincinnati-parents/",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/problems-with-hiring-a-house-cleaning-company",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/problems-with-hiring-a-house-cleaning-company/",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/move-out-cleaning-cincinnati-a-room-by-room-move-out-cleaning-checklist",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/move-out-cleaning-cincinnati-a-room-by-room-move-out-cleaning-checklist/",
        destination: "/blog",
        permanent: true,
      },

      // Commercial quotes → /commercial
      { source: "/commercial-quotes", destination: "/commercial", permanent: true },
      { source: "/commercial-quotes/", destination: "/commercial", permanent: true },

      // Missing blog post URLs
      { source: "/move-out-cleaning-checklist-cincinnati", destination: "/blog", permanent: true },
      { source: "/move-out-cleaning-checklist-cincinnati/", destination: "/blog", permanent: true },
      { source: "/cleaning-mistakes-homeowners-cincinnati", destination: "/blog", permanent: true },
      { source: "/cleaning-mistakes-homeowners-cincinnati/", destination: "/blog", permanent: true },
      { source: "/cleaning-mistakes-homeowners-cincinnati/feed/", destination: "/blog", permanent: true },
      { source: "/worst-cleaning-mistakes", destination: "/blog", permanent: true },
      { source: "/worst-cleaning-mistakes/", destination: "/blog", permanent: true },
      { source: "/worst-cleaning-mistakes/feed/", destination: "/blog", permanent: true },

      // join-our-team (old WP URL) → /careers
      { source: "/join-our-team", destination: "/careers", permanent: true },
      { source: "/join-our-team/", destination: "/careers", permanent: true },

      // WordPress junk (wildcards)
      { source: "/wp-admin/:path*", destination: "/", permanent: true },
      { source: "/wp-content/:path*", destination: "/", permanent: true },
      { source: "/wp-includes/:path*", destination: "/", permanent: true },
      { source: "/wp-login.php", destination: "/", permanent: true },
      { source: "/wp-config.php", destination: "/", permanent: true },
      { source: "/wp-cron.php", destination: "/", permanent: true },
      { source: "/wp-load.php", destination: "/", permanent: true },
      { source: "/wp-signup.php", destination: "/", permanent: true },
      { source: "/wp-trackback.php", destination: "/", permanent: true },
      { source: "/xmlrpc.php", destination: "/", permanent: true },
      { source: "/category/:path*", destination: "/", permanent: true },
      { source: "/2025/:path*", destination: "/", permanent: true },
      { source: "/faq/:slug+", destination: "/faq", permanent: true },
      { source: "/lovelandtest", destination: "/", permanent: true },
      { source: "/lovelandtest/", destination: "/", permanent: true },

      // Testimonials, home → homepage
      { source: "/testimonials", destination: "/", permanent: true },
      { source: "/testimonials/", destination: "/", permanent: true },
      { source: "/testimonials/jimmy-j", destination: "/", permanent: true },
      { source: "/testimonials/jimmy-j/", destination: "/", permanent: true },
      { source: "/testimonials/sarah-j", destination: "/", permanent: true },
      { source: "/testimonials/sarah-j/", destination: "/", permanent: true },
      { source: "/testimonials/priya-k", destination: "/", permanent: true },
      { source: "/testimonials/priya-k/", destination: "/", permanent: true },
      { source: "/testimonials/james-r", destination: "/", permanent: true },
      { source: "/testimonials/james-r/", destination: "/", permanent: true },
      { source: "/home", destination: "/", permanent: true },
      { source: "/home/", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
