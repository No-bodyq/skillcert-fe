"use client";

import Image from "next/image";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="relative w-full flex items-center justify-between px-4 sm:px-6 md:px-8 py-3 border-b border-gray-100 bg-white">
      <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="SkillCert logo" width={24} height={24} />
          <span className="font-semibold text-base sm:text-lg">SkillCert</span>
        </div>
        <ul className="hidden md:flex items-center gap-6 lg:gap-10 text-sm text-gray-700 font-semibold">
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
      <div className="flex items-center gap-4 sm:gap-6 md:gap-10">
        <div className="relative hidden sm:block">
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
        <button className="hidden sm:block bg-primary hover:cursor-pointer text-gray-800 font-medium px-4 sm:px-5 py-2 rounded-md transition-colors text-sm">
          Enroll Now
        </button>
        <div className="hidden sm:block ml-2">
          <Image
            src="/profile.png"
            alt="User avatar"
            width={36}
            height={36}
            className="rounded-full border border-gray-200"
          />
        </div>
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg md:hidden z-50">
          <div className="px-4 py-6 space-y-4">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Search width={18} height={18} />
              </span>
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-3 rounded-md bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
            </div>
            <ul className="space-y-2 text-sm text-gray-700 font-semibold">
              <li>
                <a
                  href="#"
                  className="block py-3 hover:bg-gray-50 rounded-md px-2 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-3 hover:bg-gray-50 rounded-md px-2 transition-colors"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-3 hover:bg-gray-50 rounded-md px-2 transition-colors"
                >
                  Instructors
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-3 hover:bg-gray-50 rounded-md px-2 transition-colors"
                >
                  Partners
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
              <button className="bg-primary hover:cursor-pointer text-gray-800 font-medium px-4 py-2 rounded-md transition-colors text-sm">
                Enroll Now
              </button>
              <Image
                src="/profile.png"
                alt="User avatar"
                width={36}
                height={36}
                className="rounded-full border border-gray-200"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
