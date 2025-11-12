"use client";

import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

const featuredWebinars = [
  {
    title: "Understanding Music Theory",
    description:
      "Explore the core concepts of music theory and discover how harmony, melody, and rhythm come together.",
    slug: "understanding-music-theory",
    isFeatured: true,
  },
  {
    title: "The Art of Songwriting",
    description:
      "Uncover the secrets of writing impactful lyrics and melodies with guidance from seasoned songwriters.",
    slug: "the-art-of-songwriting",
    isFeatured: true,
  },
  {
    title: "Mastering Your Instrument",
    description:
      "Develop advanced techniques and practical exercises to achieve precision, speed, and musical expression.",
    slug: "mastering-your-instrument",
    isFeatured: true,
  },
  {
    title: "Music Production Essentials",
    description:
      "Learn the complete process of producing music — from recording and mixing to mastering your tracks.",
    slug: "music-production-essentials",
    isFeatured: true,
  },
  {
    title: "Live Performance Techniques",
    description:
      "Gain stage confidence and learn how to engage audiences through body language, timing, and energy.",
    slug: "live-performance-techniques",
    isFeatured: true,
  },
  {
    title: "Digital Music Marketing",
    description:
      "Master the art of online promotion, branding, and social media to grow your audience and reach.",
    slug: "digital-music-marketing",
    isFeatured: true,
  },
];

const UpcomimgWebinars = () => {
  return (
    <div className="p-12 bg-gray-900 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6"></div>
      <div className="text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide">
          FEATURED WEBINARS
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Enhance Your Musical Journey
        </p>
      </div>
      <div className="mt-10">
        <HoverEffect
          items={featuredWebinars.map((webinar) => ({
            title: webinar.title,
            description: webinar.description,
            link: `/webinars/${webinar.slug}`,
          }))}
        />
      </div>
      <div className="mt-10 text-center">
        <Link
          href="/"
          className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium transition-all duration-300 rounded-xl bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 text-white shadow-md hover:shadow-lg hover:scale-105 group"
        >
          <span className="absolute inset-0 bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500"></span>
          <span className="relative z-10 flex items-center gap-2">
            View All Webinars
          </span>
        </Link>
      </div>
    </div>
  );
};

export default UpcomimgWebinars;
