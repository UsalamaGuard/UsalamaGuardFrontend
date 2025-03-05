"use client";

import { motion } from "framer-motion";
import { Eye, Bell, Cloud, Video, Zap, Rocket, Linkedin, Github, Facebook } from "lucide-react";
import Link from "next/link";
import Navbar from "../components/navbar/page";

export default function DemoPage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-blue-900 via-gray-800 to-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          >
            SkyViu Demo
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Experience the power of AI-driven drone surveillance in action. See how SkyViu transforms security with real-time insights.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8"
          >
            <Link href="/contact" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 shadow-lg">
              Schedule a Full Demo
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Watch SkyViu in Action</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Get a glimpse of how our AI-powered drones detect anomalies, stream live footage, and send real-time alerts—all seamlessly integrated with the cloud.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mt-8 relative w-full max-w-4xl mx-auto h-96 rounded-xl overflow-hidden shadow-lg border border-gray-700"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-transparent opacity-20 blur-3xl animate-pulse"></div>
            {/* Placeholder video; replace with actual demo video URL */}
            <iframe
              src="https://www.youtube.com/embed/i7t1nLi3ixw" // Placeholder; replace with your demo video
              title="SkyViu Demo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="relative z-10 w-full h-full"
            ></iframe>
          </motion.div>
          <p className="mt-4 text-sm text-gray-500">*This is a sample video. Contact us for a live demo tailored to your needs.</p>
        </div>
      </section>

 
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-600">What You’ll See in the Demo</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Explore the core capabilities that make SkyViu a game-changer in security.
          </p>
          <div className="grid md:grid-cols-3 gap-12 mt-12">
            <DemoFeatureCard
              icon={<Eye size={40} className="text-blue-500" />}
              title="AI-Powered Surveillance"
              description="Watch AI detect objects and anomalies in real time using YOLO and SSD models integrated with drone feeds."
            />
            <DemoFeatureCard
              icon={<Video size={40} className="text-purple-500" />}
              title="Live Monitoring"
              description="Experience low-latency live video streams from drones to your dashboard via WebRTC."
            />
            <DemoFeatureCard
              icon={<Bell size={40} className="text-blue-400" />}
              title="Real-Time Alerts"
              description="See instant notifications triggered by AI when potential threats are identified."
            />
          </div>
        </div>
      </section>


      <section className="py-20 bg-gradient-to-b from-gray-800 to-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Powered by Cutting-Edge Tech</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Our demo showcases the robust technologies behind SkyViu’s capabilities.
          </p>
          <div className="grid md:grid-cols-3 gap-12 mt-12">
            <TechCard
              icon={<Zap size={40} className="text-blue-500" />}
              title="TensorFlow & AI"
              description="Real-time anomaly detection with optimized YOLO/SSD models."
            />
            <TechCard
              icon={<Cloud size={40} className="text-purple-500" />}
              title="AWS Cloud"
              description="Scalable storage and processing with S3, Lambda, and IoT Core."
            />
            <TechCard
              icon={<Rocket size={40} className="text-blue-400" />}
              title="Next.js"
              description="Fast, responsive dashboards with server-side rendering."
            />
          </div>
        </div>
      </section>

  
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-center">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Ready for the Full Experience?</h2>
        <p className="mt-4 text-lg text-gray-200">Schedule a personalized demo to see SkyViu tailored to your security needs.</p>
        <div className="mt-8">
          <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg">
            Contact Us
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black text-gray-400">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">SkyViu</h3>
            <p className="mt-2">Pioneering the future of security with AI and drone technology.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="mt-2 space-y-2">
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="/demo" className="hover:text-blue-400 transition-colors">Demo</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white">Connect With Us</h4>
            <div className="mt-4 flex space-x-6 justify-center md:justify-start">
              <a href="https://linkedin.com" target="_blank" className="hover:text-blue-400 transition-colors"><Linkedin size={24} /></a>
              <a href="https://facebook.com" target="_blank" className="hover:text-blue-400 transition-colors"><Facebook size={24} /></a>
              <a href="https://github.com" target="_blank" className="hover:text-blue-400 transition-colors"><Github size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center border-t border-gray-800 pt-4">
          <p>© 2025 SkyViu. All rights reserved.</p>
          <p className="text-sm mt-1">Designed with passion for a safer tomorrow.</p>
        </div>
      </footer>
    </div>
  );
}


const DemoFeatureCard = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.1, rotate: 2 }}
    className="p-6 bg-gray-800 shadow-lg rounded-xl text-center border border-gray-700 hover:shadow-blue-500/20 transition-all"
  >
    <div className="mb-4">{icon}</div>
    <h3 className="text-2xl font-semibold text-white">{title}</h3>
    <p className="text-gray-400 mt-2">{description}</p>
  </motion.div>
);

const TechCard = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="p-6 bg-gray-900 shadow-lg rounded-xl text-center border border-gray-700 hover:shadow-purple-500/20 transition-all"
  >
    <div className="mb-4">{icon}</div>
    <h3 className="text-2xl font-semibold text-white">{title}</h3>
    <p className="text-gray-400 mt-2">{description}</p>
  </motion.div>
);