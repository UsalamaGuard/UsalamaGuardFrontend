"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  const handleMouseEnter = (menu) => {
    setDropdown(menu);
  };

  const handleMouseLeave = () => {
    setDropdown(null);
  };

  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Name */}
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center">
              <img src="/logo.jpeg" alt="SkyViu Logo" className="h-10 w-auto rounded-full border-2 border-blue-500 p-1 bg-white" />
              <span className="text-xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 ml-2">
                SkyViu
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 ml-auto items-center">
            <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:glow-blue">
              Home
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:glow-blue">
              About
            </Link>

            {/* Features Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter("features")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-gray-300 hover:text-blue-400 flex items-center transition-colors duration-300 hover:glow-blue">
                Features <ChevronDown size={18} className="ml-1" />
              </button>
              {dropdown === "features" && (
                <div className="absolute left-0 mt-2 w-56 bg-gray-800 shadow-xl rounded-lg border border-gray-700 transform transition-all duration-300 ease-in-out">
                  <Link href="/features/ai-surveillance" className="block px-4 py-2 text-gray-300 hover:bg-blue-600 hover:text-white transition-colors duration-200">
                    AI Surveillance
                  </Link>
                  <Link href="/features/live-monitoring" className="block px-4 py-2 text-gray-300 hover:bg-blue-600 hover:text-white transition-colors duration-200">
                    Live Monitoring
                  </Link>
                  <Link href="/features/real-time-alerts" className="block px-4 py-2 text-gray-300 hover:bg-blue-600 hover:text-white transition-colors duration-200">
                    Real-Time Alerts
                  </Link>
                </div>
              )}
            </div>

            {/* Technology Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter("technology")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-gray-300 hover:text-blue-400 flex items-center transition-colors duration-300 hover:glow-blue">
                Technology <ChevronDown size={18} className="ml-1" />
              </button>
              {dropdown === "technology" && (
                <div className="absolute left-0 mt-2 w-56 bg-gray-800 shadow-xl rounded-lg border border-gray-700 transform transition-all duration-300 ease-in-out">
                  <Link href="https://aws.amazon.com/" target="_blank" className="block px-4 py-2 text-gray-300 hover:bg-blue-600 hover:text-white transition-colors duration-200">
                    AWS Cloud
                  </Link>
                  <Link href="https://nextjs.org/" target="_blank" className="block px-4 py-2 text-gray-300 hover:bg-blue-600 hover:text-white transition-colors duration-200">
                    Next.js Framework
                  </Link>
                  <Link href="https://tensorflow.org/" target="_blank" className="block px-4 py-2 text-gray-300 hover:bg-blue-600 hover:text-white transition-colors duration-200">
                    AI & TensorFlow
                  </Link>
                </div>
              )}
            </div>

            <Link href="/demo" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:glow-blue">
              Demo
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:glow-blue">
              Blog
            </Link>
            <Link href="/contact" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-md">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-300 hover:text-blue-400" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 shadow-xl absolute top-16 left-0 w-full border-t border-gray-800">
          <div className="flex flex-col items-center py-6 space-y-6">
            <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:glow-blue" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:glow-blue" onClick={() => setIsOpen(false)}>
              About
            </Link>

            {/* Features Dropdown (Mobile) */}
            <button
              className="text-gray-300 hover:text-blue-400 flex items-center transition-colors duration-300 hover:glow-blue"
              onClick={() => toggleDropdown("features")}
            >
              Features <ChevronDown size={18} className="ml-1" />
            </button>
            {dropdown === "features" && (
              <div className="flex flex-col space-y-4 w-full text-center">
                <Link href="/features/ai-surveillance" className="text-gray-300 hover:text-blue-400 transition-colors duration-200" onClick={() => setIsOpen(false)}>
                  AI Surveillance
                </Link>
                <Link href="/features/live-monitoring" className="text-gray-300 hover:text-blue-400 transition-colors duration-200" onClick={() => setIsOpen(false)}>
                  Live Monitoring
                </Link>
                <Link href="/features/real-time-alerts" className="text-gray-300 hover:text-blue-400 transition-colors duration-200" onClick={() => setIsOpen(false)}>
                  Real-Time Alerts
                </Link>
              </div>
            )}

            {/* Technology Dropdown (Mobile) */}
            <button
              className="text-gray-300 hover:text-blue-400 flex items-center transition-colors duration-300 hover:glow-blue"
              onClick={() => toggleDropdown("technology")}
            >
              Technology <ChevronDown size={18} className="ml-1" />
            </button>
            {dropdown === "technology" && (
              <div className="flex flex-col space-y-4 w-full text-center">
                <Link href="https://aws.amazon.com/" target="_blank" className="text-gray-300 hover:text-blue-400 transition-colors duration-200" onClick={() => setIsOpen(false)}>
                  AWS Cloud
                </Link>
                <Link href="https://nextjs.org/" target="_blank" className="text-gray-300 hover:text-blue-400 transition-colors duration-200" onClick={() => setIsOpen(false)}>
                  Next.js Framework
                </Link>
                <Link href="https://tensorflow.org/" target="_blank" className="text-gray-300 hover:text-blue-400 transition-colors duration-200" onClick={() => setIsOpen(false)}>
                  AI & TensorFlow
                </Link>
              </div>
            )}

            <Link href="/demo" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:glow-blue" onClick={() => setIsOpen(false)}>
              Demo
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:glow-blue" onClick={() => setIsOpen(false)}>
              Blog
            </Link>
            <Link href="/contact" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-md" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

