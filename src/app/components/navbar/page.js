"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image"; // Use next/image for optimized images
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (menu) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdown(null);
    }, 300);
  };

  const handleDropdownMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleDropdownMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdown(null);
    }, 300);
  };

  const toggleDropdown = (menu) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-r from-space-black via-midnight-blue to-space-black shadow-glow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
        
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center">
              <Image
                src="/logs.jpeg"
                alt="SmartEye Logo"
                width={40} 
                height={40} 
                className="rounded-full border-2 border-nebula-blue p-1 bg-stellar-white object-cover"
              />
              <span className="text-xl font-display font-bold text-stellar-white bg-clip-text text-transparent bg-cosmic-gradient ml-2">
                SmartEye
              </span>
            </Link>
          </div>

          <div className="hidden md:flex space-x-8 ml-auto items-center">
            <Link
              href="/"
              className="text-stellar-white hover:text-glow-cyan transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-stellar-white hover:text-glow-cyan transition-colors duration-300"
            >
              About
            </Link>

 
            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter("features")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-stellar-white hover:text-glow-cyan flex items-center transition-colors duration-300">
                Features <ChevronDown size={18} className="ml-1" />
              </button>
              {dropdown === "features" && (
                <div
                  className="absolute left-0 mt-2 w-56 bg-midnight-blue shadow-glow-md rounded-lg border border-cosmic-gray transition-all duration-300 ease-in-out"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <Link
                    href="/detection"
                    className="block px-4 py-2 text-stellar-white hover:bg-nebula-blue hover:text-stellar-white transition-colors duration-200"
                  >
                    Intruder Detection
                  </Link>
                  <Link
                    href="/capture"
                    className="block px-4 py-2 text-stellar-white hover:bg-nebula-blue hover:text-stellar-white transition-colors duration-200"
                  >
                    Image Capture
                  </Link>
                  <Link
                    href="/notifications"
                    className="block px-4 py-2 text-stellar-white hover:bg-nebula-blue hover:text-stellar-white transition-colors duration-200"
                  >
                    Email Alerts
                  </Link>
                </div>
              )}
            </div>

            
            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter("technology")}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-stellar-white hover:text-glow-cyan flex items-center transition-colors duration-300">
                Technology <ChevronDown size={18} className="ml-1" />
              </button>
              {dropdown === "technology" && (
                <div
                  className="absolute left-0 mt-2 w-56 bg-midnight-blue shadow-glow-md rounded-lg border border-cosmic-gray transition-all duration-300 ease-in-out"
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <Link
                    href="/raspberry-pi"
                    className="block px-4 py-2 text-stellar-white hover:bg-nebula-blue hover:text-stellar-white transition-colors duration-200"
                  >
                    Raspberry Pi
                  </Link>
                  <Link
                    href="/pir-sensor"
                    className="block px-4 py-2 text-stellar-white hover:bg-nebula-blue hover:text-stellar-white transition-colors duration-200"
                  >
                    PIR Sensor
                  </Link>
                  <Link
                    href="/smtp"
                    className="block px-4 py-2 text-stellar-white hover:bg-nebula-blue hover:text-stellar-white transition-colors duration-200"
                  >
                    SMTP Server
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/demo"
              className="text-stellar-white hover:text-glow-cyan transition-colors duration-300"
            >
              Demo
            </Link>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-nebula-blue to-galactic-purple text-stellar-white px-4 py-2 rounded-full hover:from-nebula-blue/80 hover:to-galactic-purple/80 transition-all duration-300 shadow-glow-sm"
            >
              Contact
            </Link>
          </div>

          <button
            className="md:hidden text-stellar-white hover:text-glow-cyan"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

   
      {isOpen && (
        <div className="md:hidden bg-space-black shadow-glow-md absolute top-16 left-0 w-full border-t border-cosmic-gray">
          <div className="flex flex-col items-center py-6 space-y-6">
            <Link
              href="/"
              className="text-stellar-white hover:text-glow-cyan transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-stellar-white hover:text-glow-cyan transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>

            <button
              className="text-stellar-white hover:text-glow-cyan flex items-center transition-colors duration-300"
              onClick={() => toggleDropdown("features")}
            >
              Features <ChevronDown size={18} className="ml-1" />
            </button>
            {dropdown === "features" && (
              <div className="flex flex-col space-y-4 w-full text-center">
                <Link
                  href="/detection"
                  className="text-stellar-white hover:text-glow-cyan transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Intruder Detection
                </Link>
                <Link
                  href="/capture"
                  className="text-stellar-white hover:text-glow-cyan transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Image Capture
                </Link>
                <Link
                  href="/notifications"
                  className="text-stellar-white hover:text-glow-cyan transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Email Alerts
                </Link>
              </div>
            )}

      
            <button
              className="text-stellar-white hover:text-glow-cyan flex items-center transition-colors duration-300"
              onClick={() => toggleDropdown("technology")}
            >
              Technology <ChevronDown size={18} className="ml-1" />
            </button>
            {dropdown === "technology" && (
              <div className="flex flex-col space-y-4 w-full text-center">
                <Link
                  href="/raspberry-pi"
                  className="text-stellar-white hover:text-glow-cyan transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Raspberry Pi
                </Link>
                <Link
                  href="/pir-sensor"
                  className="text-stellar-white hover:text-glow-cyan transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  PIR Sensor
                </Link>
                <Link
                  href="/smtp"
                  className="text-stellar-white hover:text-glow-cyan transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  SMTP Server
                </Link>
              </div>
            )}

            <Link
              href="/demo"
              className="text-stellar-white hover:text-glow-cyan transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Demo
            </Link>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-nebula-blue to-galactic-purple text-stellar-white px-4 py-2 rounded-full hover:from-nebula-blue/80 hover:to-galactic-purple/80 transition-all duration-300 shadow-glow-sm"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;