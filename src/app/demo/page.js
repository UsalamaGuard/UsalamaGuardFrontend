"use client";

import { motion } from "framer-motion";
import { Eye, Bell, Camera, Zap, Cloud, Mail, Linkedin, Github, Facebook } from "lucide-react";
import Link from "next/link";
import Navbar from "../components/navbar/page";

export default function DemoPage() {
  return (
    <div className="bg-space-black text-stellar-white min-h-screen overflow-hidden">
 
      <Navbar />


      <section className="relative pt-24 pb-16 bg-gradient-to-br from-midnight-blue via-space-black to-galactic-purple">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-display font-bold bg-clip-text text-transparent bg-cosmic-gradient"
          >
            SmartEye Demo
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Witness the power of IoT-driven surveillance in action—real-time detection, capture, and notifications with SmartEye.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8"
          >
            <Link
              href="/contact"
              className="bg-gradient-to-r from-nebula-blue to-galactic-purple hover:from-nebula-blue/80 hover:to-galactic-purple/80 px-8 py-4 rounded-full font-semibold text-stellar-white transition-all duration-300 shadow-glow-md hover:shadow-glow-lg"
            >
              Schedule a Full Demo
            </Link>
          </motion.div>
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

      <section className="py-20 bg-midnight-blue">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-display font-bold bg-clip-text text-transparent bg-cosmic-gradient">See SmartEye at Work</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Explore how SmartEye’s Raspberry Pi, PIR sensors, and SMTP notifications deliver real-time security solutions.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mt-8 relative w-full max-w-4xl mx-auto h-96 rounded-2xl overflow-hidden shadow-glow-md border border-cosmic-gray"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-glow-cyan to-transparent opacity-20 blur-3xl animate-pulse"></div>
            
            <iframe
              src="https://www.youtube.com/embed/aXTTciBEGzc" 
              title="SmartEye Demo Overview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="relative z-10 w-full h-full"
            ></iframe>
          </motion.div>
          <p className="mt-4 text-sm text-gray-500">*This is a sample overview video. Check below for specific feature demos or contact us for a live demo.</p>
        </div>
      </section>

     
      <section className="py-20 bg-space-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-display font-bold bg-clip-text text-transparent bg-cosmic-gradient">Demo Highlights</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Dive into three core demos showcasing SmartEye’s capabilities with individual video previews.
          </p>
          <div className="grid md:grid-cols-3 gap-12 mt-12">

            <DemoFeatureCard
              icon={<Zap size={40} className="text-nebula-blue" />}
              title="Raspberry Pi in Action"
              description="See the Raspberry Pi 3 Model B orchestrate the entire SmartEye system. Watch it process PIR sensor data, trigger the camera, and send email alerts via SMTP—all in real-time, powered by lightweight Python scripts."
              videoUrl="https://www.youtube.com/embed/hBf965K8oos"
            />

            <DemoFeatureCard
              icon={<Eye size={40} className="text-glow-cyan" />}
              title="Intruder Detection"
              description="Experience the PIR sensor detecting motion instantly. Observe how it senses infrared changes from an intruder and signals the Raspberry Pi to respond within milliseconds, ensuring rapid threat identification."
              videoUrl="https://www.youtube.com/embed/XK9S0QthQB4"
            />
  
            <DemoFeatureCard
              icon={<Camera size={40} className="text-galactic-purple" />}
              title="Image Capture"
              description="Witness the camera module snap high-quality images of intruders. See the CSI-connected camera activate on motion detection, capturing and saving evidence seamlessly for immediate use."
              videoUrl="https://www.youtube.com/embed/Kb6jdwLE2g" 
            />
          </div>
        </div>
      </section>


      <section className="py-20 bg-gradient-to-b from-midnight-blue to-space-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-display font-bold bg-clip-text text-transparent bg-cosmic-gradient">Powered by Smart Tech</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Our demos highlight the innovative technologies driving SmartEye’s efficiency and reliability.
          </p>
          <div className="grid md:grid-cols-3 gap-12 mt-12">
            <TechCard
              icon={<Zap size={40} className="text-nebula-blue" />}
              title="Python & Raspberry Pi"
              description="Real-time control and processing with optimized Python scripts on the Raspberry Pi."
            />
            <TechCard
              icon={<Eye size={40} className="text-glow-cyan" />}
              title="PIR Sensor"
              description="Sensitive motion detection with low-power infrared technology."
            />
            <TechCard
              icon={<Mail size={40} className="text-galactic-purple" />}
              title="SMTP Notifications"
              description="Instant email alerts with images, delivered in under five seconds."
            />
          </div>
        </div>
      </section>


      <section className="py-20 bg-gradient-to-r from-nebula-blue to-galactic-purple text-center">
        <h2 className="text-4xl font-display font-bold bg-clip-text text-transparent bg-cosmic-gradient">Ready to Secure Your Space?</h2>
        <p className="mt-4 text-lg text-gray-200">Schedule a personalized demo to explore SmartEye’s full potential.</p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="bg-stellar-white text-space-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 shadow-glow-md hover:shadow-glow-lg"
          >
            Contact Us
          </Link>
        </div>
      </section>


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


const DemoFeatureCard = ({ icon, title, description, videoUrl }) => (
  <motion.div
    whileHover={{ scale: 1.1, rotate: 2 }}
    className="p-6 bg-midnight-blue shadow-glow-md rounded-2xl text-center border border-cosmic-gray hover:shadow-glow-lg transition-all"
  >
    <div className="mb-4">{icon}</div>
    <h3 className="text-2xl font-display font-semibold text-stellar-white">{title}</h3>
    <p className="text-gray-400 mt-2 mb-4">{description}</p>
    <div className="relative w-full h-48 rounded-lg overflow-hidden shadow-glow-sm border border-cosmic-gray">
      <div className="absolute inset-0 bg-gradient-to-tr from-nebula-blue to-transparent opacity-20 blur-3xl animate-pulse"></div>
      <iframe
        src={videoUrl}
        title={`${title} Demo`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="relative z-10 w-full h-full"
      ></iframe>
    </div>
  </motion.div>
);

const TechCard = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="p-6 bg-space-black shadow-glow-md rounded-2xl text-center border border-cosmic-gray hover:shadow-glow-lg transition-all"
  >
    <div className="mb-4">{icon}</div>
    <h3 className="text-2xl font-display font-semibold text-stellar-white">{title}</h3>
    <p className="text-gray-400 mt-2">{description}</p>
  </motion.div>
);