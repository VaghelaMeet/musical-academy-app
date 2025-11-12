"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import courseData from "@/data/music_cources.json";
import Image from "next/image";
import { motion } from "motion/react";

const Page = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-black via-zinc-900 to-black py-20 px-6">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl mt-18 md:text-6xl lg:text-7xl text-center font-extrabold mb-5 bg-linear-to-r from-violet-400 via-pink-400 to-purple-500 bg-clip-text text-transparent tracking-tight"
      >
        All Courses{" "}
        <span className="text-white opacity-70 text-3xl">
          ({courseData.courses.length})
        </span>
      </motion.h1>

      {/* Cards Container */}
      <div className="flex flex-wrap justify-center gap-10">
        {courseData.courses.map((course, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <CardContainer className="inter-var">
              <CardBody className="relative group/card backdrop-blur-xl bg-linear-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl w-88 sm:w-md h-auto p-6 shadow-xl hover:shadow-violet-500/30 transition-all duration-500 ease-out">
                {/* Course Title */}
                <CardItem
                  translateZ="50"
                  className="text-2xl font-semibold text-white mb-2 group-hover/card:text-violet-400 transition-all duration-300"
                >
                  {course.title}
                </CardItem>

                {/* Description */}
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-400 text-sm mb-4 line-clamp-3"
                >
                  {course.description}
                </CardItem>

                {/* Image */}
                <CardItem translateZ="100" className="w-full mb-6">
                  <div className="relative overflow-hidden rounded-xl">
                    <Image
                      src={course.image}
                      height={1000}
                      width={1000}
                      className="h-56 w-full object-cover rounded-xl transition-transform duration-500 ease-out group-hover/card:scale-110 group-hover/card:rotate-1"
                      alt={course.title}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover/card:opacity-100 transition-all duration-500 rounded-xl"></div>
                  </div>
                </CardItem>

                {/* Buttons */}
                <div className="flex justify-between items-center mt-8">
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-5 py-2 rounded-lg text-sm font-medium text-violet-400 border border-violet-500/30 hover:bg-violet-500/20 transition-all duration-300"
                  >
                    Try now →
                  </CardItem>

                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-5 py-2 rounded-lg bg-linear-to-r from-violet-500 to-fuchsia-500 text-white font-semibold text-sm hover:scale-105 active:scale-95 transition-all duration-300 shadow-md"
                  >
                    Sign up
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Page;
