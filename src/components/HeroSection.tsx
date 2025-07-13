export default function HeroSection() {
  return (
    <div
      className="w-full h-128 flex flex-col items-center justify-center text-center gap-10 px-45 bg-cover bg-center bg-no-repeat rounded-2xl grayscale-10"
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      <div className="flex flex-col items-center justify-center text-white gap-5">
        <h1 className="text-5xl font-extrabold">
          Unlock Your Potential with SkillCert
        </h1>
        <p>
          Earn verifiable micro-credentials (VMCs) and certificates from top
          universities and instructors. Join our community of learners and
          educators today. Explore our platform with interactive 2D character
          sketches guiding you through key features.
        </p>
      </div>
      <button className="bg-white text-text-primary text-base/6 font-semibold px-4 py-3 rounded-xl bg-primary shadow-lg hover:cursor-pointer">
        Explore Courses
      </button>
    </div>
  );
}
