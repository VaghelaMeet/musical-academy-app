"use client";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { motion } from "motion/react";

const musicSchoolContent = [
  {
    title: "Discover Your Sound with Us: A Personal Journey in Music Mastery",
    description:
      "Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.",
  },
  {
    title: "Personalized Learning Experience",
    description:
      "Our courses are tailored to your pace, style, and goals. Whether you’re a beginner or advanced musician, we’ll help you refine your craft with one-on-one attention and custom guidance.",
  },
  {
    title: "Live Feedback & Engagement",
    description:
      "Immerse yourself in an interactive learning experience where feedback is immediate, just like real-time changes in a collaborative project. This approach enhances your understanding and mastery of music concepts and performance techniques.",
  },
  {
    title: "Cutting-Edge Curriculum",
    description:
      "Our curriculum is continuously updated to include the latest music education trends and technologies, ensuring you’re always learning with the most current and effective methods. Say goodbye to outdated materials and welcome an education that evolves with the industry.",
  },
  {
    title: "Limitless Learning Opportunities",
    description:
      "With our expansive resource library and dynamic course offerings, you’ll never find yourself without something new to explore. Our platform provides continuous opportunities for growth, ensuring your musical skills are always advancing.",
  },
  {
    title: "Expert Instructors",
    description:
      "Our instructors are passionate professionals with years of experience in music education. They bring real-world expertise and a deep understanding of music theory to every lesson, ensuring you receive the best possible guidance.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative w-full pt-15 pb-8 bg-linear-to-b from-gray-950 via-gray-900 to-black text-white">
      <div>
        {/* Animated Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-4xl md:text-5xl font-bold pb-8 mb-6 bg-linear-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent"
        >
          The Journey to Musical Mastery
        </motion.h2>

        {/* Sticky Scroll Section */}
        <StickyScroll content={musicSchoolContent} />
      </div>
    </section>
  );
};

export default WhyChooseUs;
