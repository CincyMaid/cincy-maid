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

      // Old booking URLs → /booking
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
