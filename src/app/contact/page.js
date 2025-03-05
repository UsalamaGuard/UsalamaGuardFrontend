"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Facebook } from "lucide-react";
import Link from "next/link";
import Navbar from "../components/navbar/page";

export default function ContactPage() {
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
            Contact SkyViu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Get in touch with our team to explore how SkyViu can enhance your security with AI-driven drone surveillance.
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Details Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700"
          >
            <h2 className="text-3xl font-semibold text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Send Us a Message</h2>
            <p className="mt-2 text-gray-400">We’re here to assist you. Fill out the form below, and we’ll get back to you soon.</p>
            <form className="mt-6 space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full mt-2 p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full mt-2 p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full mt-2 p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-blue-500/20"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-semibold text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail size={28} className="text-blue-500" />
                <div>
                  <p className="text-gray-300 font-semibold">Email</p>
                  <p className="text-gray-400">support@skyviu.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone size={28} className="text-purple-500" />
                <div>
                  <p className="text-gray-300 font-semibold">Phone</p>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin size={28} className="text-blue-400" />
                <div>
                  <p className="text-gray-300 font-semibold">Address</p>
                  <p className="text-gray-400">123 Future St, Tech City, TX 75001</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Find Us</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Visit our headquarters or explore our location virtually.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mt-8 relative w-full h-96 rounded-xl overflow-hidden shadow-lg border border-gray-700"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-transparent opacity-20 blur-3xl animate-pulse"></div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15956.147073321495!2d37.00121965541992!3d-1.0999933999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f4e8e8f8f8f8f%3A0x8f8f8f8f8f8f8f8f!2sJomo%20Kenyatta%20University%20of%20Agriculture%20and%20Technology!5e0!3m2!1sen!2ske!4v1698765432100"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="relative z-10"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-center">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Ready to Connect?</h2>
        <p className="mt-4 text-lg text-gray-200">Let’s discuss how SkyViu can transform your security needs.</p>
        <div className="mt-8">
          <Link href="/demo" className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg">
            Request a Demo
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