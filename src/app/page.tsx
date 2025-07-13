import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import FeauturedCourses from "@/components/FeauturedCourses";
import Solutions from "@/components/Solutions";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export default function Home() {
  return (
    <div className={`w-full h-full ${manrope.variable}`}>
      <Navbar />
      <main className="w-full h-full py-6 px-4 sm:py-8 sm:px-6 md:py-10 md:px-8 lg:px-16 xl:px-24 2xl:px-40 bg-white">
        <HeroSection />
        <IntroSection />
        <FeauturedCourses />
        <Solutions />
      </main>
    </div>
  );
}
