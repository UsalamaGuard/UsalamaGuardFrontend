"use client";

import { motion } from "framer-motion";
import { Bell, Linkedin, Github, Facebook } from "lucide-react";
import Link from "next/link";
import Navbar from "../components/navbar/page";

export default function RealTimeAlertsPage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen overflow-hidden">
      <Navbar />
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-blue-900 via-gray-800 to-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          >
            Real-Time Alerts
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Instant notifications powered by intelligent AI models for proactive security.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative w-full md:w-1/2 max-w-md"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-transparent opacity-50 rounded-full blur-3xl animate-pulse"></div>
              <img src="/real.jpg" alt="Real-Time Alerts" className="relative z-10 w-full rounded-lg shadow-2xl border-4 border-blue-500" />
            </motion.div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-semibold text-white">Stay Ahead of Threats</h2>
              <p className="mt-4 text-gray-400">
                SkyViu’s real-time alerts system uses AI-driven anomaly detection to notify security teams instantly. Integrated with AWS Lambda and MQTT, it delivers actionable insights the moment a potential threat is identified.
              </p>
              <ul className="mt-4 text-gray-400 list-disc list-inside">
                <li>Instant alerts via AI-powered detection.</li>
                <li>Scalable notification system with AWS Lambda.</li>
                <li>Customizable alert thresholds for specific needs.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

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