"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Facebook } from "lucide-react";
import Link from "next/link";
import Navbar from "../components/navbar/page";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission logic (e.g., send to backend)
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <div className="bg-space-black text-stellar-white min-h-screen overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-midnight-blue via-space-black to-galactic-purple">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-display font-bold bg-clip-text text-transparent bg-cosmic-gradient"
          >
            Contact SmartEye
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Reach out to learn how SmartEye’s IoT surveillance can secure your space with real-time detection and notifications.
          </motion.p>
        </div>
        <div className="absolute inset-0 hidden md:block pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-nebula-blue rounded-full blur-3xl animate-pulse"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ delay: 0.7, duration: 1.5 }}
            className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-galactic-purple rounded-full blur-3xl animate-pulse"
          />
        </div>
      </section>

      {/* Contact Form & Details Section */}
      <section className="py-20 bg-midnight-blue">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-space-black p-8 rounded-2xl shadow-glow-md border border-cosmic-gray"
          >
            <h2 className="text-3xl font-display font-semibold bg-clip-text text-transparent bg-cosmic-gradient">Send Us a Message</h2>
            <p className="mt-2 text-gray-400">Questions about SmartEye? Let us know how we can assist you.</p>
            {submitted ? (
              <p className="mt-6 text-glow-cyan">Thank you! We’ll get back to you soon.</p>
            ) : (
              <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-gray-300">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full mt-2 p-3 bg-midnight-blue border border-cosmic-gray rounded-lg text-stellar-white focus:outline-none focus:ring-2 focus:ring-glow-cyan transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full mt-2 p-3 bg-midnight-blue border border-cosmic-gray rounded-lg text-stellar-white focus:outline-none focus:ring-2 focus:ring-glow-cyan transition-all duration-300"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-300">Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full mt-2 p-3 bg-midnight-blue border border-cosmic-gray rounded-lg text-stellar-white focus:outline-none focus:ring-2 focus:ring-glow-cyan transition-all duration-300"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-nebula-blue to-galactic-purple hover:from-nebula-blue/80 hover:to-galactic-purple/80 text-stellar-white py-3 rounded-full font-semibold transition-all duration-300 shadow-glow-sm hover:shadow-glow-md"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-display font-semibold bg-clip-text text-transparent bg-cosmic-gradient">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail size={28} className="text-glow-cyan" />
                <div>
                  <p className="text-gray-300 font-semibold">Email</p>
                  <p className="text-gray-400">support@smarteye.io</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone size={28} className="text-nebula-blue" />
                <div>
                  <p className="text-gray-300 font-semibold">Phone</p>
                  <p className="text-gray-400">+254 (757) 448-651</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin size={28} className="text-galactic-purple" />
                <div>
                  <p className="text-gray-300 font-semibold">Address</p>
                  <p className="text-gray-400">62000-00200, Juja, Kiambu</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-space-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-display font-bold bg-clip-text text-transparent bg-cosmic-gradient">Find Us</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Locate our base of operations or connect with us virtually.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mt-8 relative w-full h-96 rounded-2xl overflow-hidden shadow-glow-md border border-cosmic-gray"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-glow-cyan to-transparent opacity-20 blur-3xl animate-pulse"></div>
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
      <section className="py-20 bg-gradient-to-r from-nebula-blue to-galactic-purple text-center">
        <h2 className="text-4xl font-display font-bold bg-clip-text text-transparent bg-cosmic-gradient">Ready to Protect Your Space?</h2>
        <p className="mt-4 text-lg text-gray-200">Contact us to see how SmartEye can enhance your security.</p>
        <div className="mt-8">
          <Link
            href="/demo"
            className="bg-stellar-white text-space-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 shadow-glow-md hover:shadow-glow-lg"
          >
            Request a Demo
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-space-black text-gray-400">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-display font-bold bg-clip-text text-transparent bg-cosmic-gradient">SmartEye</h3>
            <p className="mt-2">Empowering security with IoT innovation.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-stellar-white">Quick Links</h4>
            <ul className="mt-2 space-y-2">
              <li><Link href="/about" className="hover:text-glow-cyan transition-colors">About Us</Link></li>
              <li><Link href="/demo" className="hover:text-glow-cyan transition-colors">Demo</Link></li>
              <li><Link href="/contact" className="hover:text-glow-cyan transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-stellar-white">Connect With Us</h4>
            <div className="mt-4 flex space-x-6 justify-center md:justify-start">
              <a href="https://linkedin.com" target="_blank" className="hover:text-nebula-blue transition-colors"><Linkedin size={24} /></a>
              <a href="https://facebook.com" target="_blank" className="hover:text-nebula-blue transition-colors"><Facebook size={24} /></a>
              <a href="https://github.com" target="_blank" className="hover:text-nebula-blue transition-colors"><Github size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center border-t border-cosmic-gray pt-4">
          <p>© 2025 SmartEye. All rights reserved.</p>
          <p className="text-sm mt-1">Crafted with vision for a safer world.</p>
        </div>
      </footer>
    </div>
  );
}