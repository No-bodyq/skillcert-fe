export default function HeroSection() {
  return (
    <div
      className="w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:h-128 flex flex-col items-center justify-center text-center gap-6 sm:gap-8 md:gap-10 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-45 bg-cover bg-center bg-no-repeat rounded-2xl grayscale-10"
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      <div className="flex flex-col items-center justify-center text-white gap-4 sm:gap-5">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold px-4">
          Unlock Your Potential with SkillCert
        </h1>
        <p className="text-sm sm:text-base md:text-lg max-w-2xl px-4">
          Earn verifiable micro-credentials (VMCs) and certificates from top
          universities and instructors. Join our community of learners and
          educators today. Explore our platform with interactive 2D character
          sketches guiding you through key features.
        </p>
      </div>
      <button className="bg-white text-text-primary text-sm sm:text-base font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-xl bg-primary shadow-lg hover:cursor-pointer">
        Explore Courses
      </button>
    </div>
  );
}
