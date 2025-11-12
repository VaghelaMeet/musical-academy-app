import HeroSection from "@/components/HeroSection";
import FeatureCourses from "@/components/FeatureCourses";
import WhyChooseUs from "@/components/MusicalMastery";
import Cards from "@/components/VoicesOfHarmony";
import UpcomimgWebinars from "@/components/Webinars";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/96 antialiased bg-grid-white/2">
      <HeroSection />
      <FeatureCourses />
      <WhyChooseUs />
      <Cards />
      <UpcomimgWebinars />
      <Instructors />
      <Footer />
    </main>
  );
}
