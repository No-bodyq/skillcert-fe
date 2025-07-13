import Image from "next/image";
import { Search } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-3 border-b border-gray-100 bg-white">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="SkillCert logo" width={24} height={24} />
          <span className="font-semibold text-lg">SkillCert</span>
        </div>
        <ul className="hidden md:flex items-center gap-10 text-sm text-gray-700 font-semibold">
          <li>
            <a href="#" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Courses
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Instructors
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Partners
            </a>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-10">
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Search width={18} height={18} />
          </span>
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 rounded-md bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
            style={{ width: 140 }}
          />
        </div>
        <button className="bg-primary hover:cursor-pointer text-gray-800 font-medium px-5 py-2 rounded-md transition-colors text-sm">
          Enroll Now
        </button>
        <div className="ml-2">
          <Image
            src="/profile.png"
            alt="User avatar"
            width={36}
            height={36}
            className="rounded-full border border-gray-200"
          />
        </div>
      </div>
    </nav>
  );
}
