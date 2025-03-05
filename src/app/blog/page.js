"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, User, ArrowRight, Linkedin, Facebook, Github } from "lucide-react";
import Navbar from "../components/navbar/page";// Assuming Navbar is in the same directory

const BlogPage = () => {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI-Powered Drone Surveillance",
      excerpt: "Explore how AI is revolutionizing security with real-time anomaly detection and cloud integration.",
      author: "Sara Kim",
      date: "March 10, 2025",
      readTime: "5 min read",
      slug: "future-ai-drone-surveillance",
    },
    {
      id: 2,
      title: "Optimizing Edge Computing for Drones",
      excerpt: "Learn how we optimize YOLO models for Nvidia Jetson and Raspberry Pi for efficient drone operations.",
      author: "Liam Patel",
      date: "March 15, 2025",
      readTime: "7 min read",
      slug: "edge-computing-drones",
    },
    {
      id: 3,
      title: "Securing Drone Data with AWS and TLS",
      excerpt: "A deep dive into our cybersecurity measures for protecting drone telemetry and video feeds.",
      author: "Emma Ruiz",
      date: "March 20, 2025",
      readTime: "6 min read",
      slug: "securing-drone-data",
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Blog Header */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-blue-900 via-gray-800 to-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          >
            SkyViu Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-4 text-xl text-gray-300"
          >
            Insights, updates, and innovations in AI-driven drone surveillance.
          </motion.p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-center">
        <h2 className="text-4xl font-bold">Stay Updated</h2>
        <p className="mt-4 text-lg text-gray-200">Subscribe to our newsletter for the latest insights and updates.</p>
        <div className="mt-8 flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-l-full bg-gray-800 text-white border-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="bg-white text-blue-600 px-6 py-2 rounded-r-full font-semibold hover:bg-gray-100 transition-all">
            Subscribe
          </button>
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
              <a href="https://linkedin.com" target="_blank" className="hover:text-blue-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://facebook.com" target="_blank" className="hover:text-blue-400 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://github.com" target="_blank" className="hover:text-blue-400 transition-colors">
                <Github size={24} />
              </a>
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
};

// Blog Card Component
const BlogCard = ({ title, excerpt, author, date, readTime, slug }) => (
  <motion.div
    whileHover={{ scale: 1.05, rotate: 1 }}
    className="bg-gray-800 shadow-lg rounded-xl p-6 border border-gray-700 hover:shadow-blue-500/20 transition-all"
  >
    <h2 className="text-2xl font-semibold text-white">{title}</h2>
    <p className="mt-2 text-gray-400">{excerpt}</p>
    <div className="mt-4 flex items-center text-gray-500 text-sm">
      <User size={16} className="mr-1" /> {author} • <Clock size={16} className="ml-2 mr-1" /> {date} • {readTime}
    </div>
    <Link href={`/blog/${slug}`} className="mt-4 inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors hover:glow-blue">
      Read More <ArrowRight size={16} className="ml-2" />
    </Link>
  </motion.div>
);

export default BlogPage;