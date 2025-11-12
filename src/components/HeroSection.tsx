import Link from "next/link";
import { Vortex } from "./ui/vortex";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const HeroSection = () => {
  return (
    <div className="h-auto md:h-160 w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <div className="p-4 relative z-10 w-full text-center">
          <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-linear-to-b from-neutral-50 to-neutral-400">
            Master the art of music
          </h1>
          <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
            Dive into our comprehensive music courses and transform your music
            journey today. whether you're a beginner or looking to refine your
            skills, join us to unlock your truth potential.
          </p>
          <div className="mt-10 flex justify-center">
            <Link href="/courses">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex p-6 items-center space-x-4 cursor-pointer"
              >
                <span>Explore Courses</span>
              </HoverBorderGradient>
            </Link>
          </div>
        </div>
      </Vortex>
    </div>
  );
};

export default HeroSection;
