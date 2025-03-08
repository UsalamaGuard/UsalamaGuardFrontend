"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Shield, Eye, Mail, Video, Bell, Camera, Zap, Github, Facebook, Linkedin } from "lucide-react";

export default function LandingPage() {
  return (
    <main className="bg-space-black text-stellar-white overflow-hidden">
      <section className="relative min-h-screen flex items-center justify-center bg-nebula-fade pt-20 sm:pt-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center md:text-left w-full md:w-1/2"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold bg-clip-text text-transparent bg-cosmic-gradient">
              SmartEye: IoT-Powered Surveillance
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-gray-300">
              Secure your home with affordable IoT cameras and AI vision models for real-time intruder detection and email notifications.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center md:justify-start">
              <Link
                href="/demo"
                className="bg-gradient-to-r from-nebula-blue to-galactic-purple hover:from-nebula-blue/80 hover:to-galactic-purple/80 px-6 py-3 rounded-full font-semibold flex items-center justify-center transition-all shadow-glow-sm"
              >
                Watch Demo <ArrowRight className="ml-2" />
              </Link>
              <Link
                href="/contact"
                className="bg-midnight-blue hover:bg-cosmic-gray px-6 py-3 rounded-full font-semibold transition-all shadow-glow-sm"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative w-full md:w-1/2 max-w-md"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-glow-cyan to-transparent opacity-50 rounded-full blur-3xl animate-pulse"></div>
            <img
              src="/camera.jpg" 
              alt="IoT Camera in Action"
              className="relative z-10 w-full rounded-lg shadow-glow-md border-4 border-nebula-blue transform rotate-6 md:rotate-0 hover:rotate-0 transition-transform"
            />
          </motion.div>
        </div>
      </section>


      <section className="py-20 bg-cosmic-gray">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-display font-bold bg-clip-text text-transparent bg-cosmic-gradient">
            Key Features
          </h2>
          <p className="text-gray-400 mt-3">Smart security for homes and businesses.</p>
          <div className="grid md:grid-cols-3 gap-12 mt-12">
            <FeatureCard
              icon={<Eye size={40} className="text-nebula-blue" />}
              title="AI Vision Detection"
              description="Detects intruders using PIR sensors and AI-powered image recognition."
            />
            <FeatureCard
              icon={<Mail size={40} className="text-galactic-purple" />}
              title="Email Notifications"
              description="Sends intruder images to your email via SMTP within seconds."
            />
            <FeatureCard
              icon={<Camera size={40} className="text-glow-cyan" />}
              title="IoT Camera Integration"
              description="Affordable Raspberry Pi cameras for real-time monitoring."
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-space-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-display font-bold bg-clip-text text-transparent bg-cosmic-gradient">
            How It Works
          </h2>
          <p className="text-gray-400 mt-3">A simple, effective security solution.</p>
          <div className="grid md:grid-cols-3 gap-12 mt-12">
            <StepCard
              step="01"
              title="Setup & Deploy"
              description="Install the Raspberry Pi system with camera and PIR sensor."
            />
            <StepCard
              step="02"
              title="Detect & Capture"
              description="PIR sensor triggers the camera to capture intruder images."
            />
            <StepCard
              step="03"
              title="Notify & Act"
              description="Receive email alerts with images for immediate action."
            />
          </div>
        </div>
      </section>

      
      <section className="py-20 bg-gradient-to-b from-cosmic-gray to-space-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-display font-bold bg-clip-text text-transparent bg-cosmic-gradient">
            Our Technology
          </h2>
          <p className="text-gray-400 mt-3">The core of affordable smart security.</p>
          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <TechCard
              icon={<Camera size={40} className="text-nebula-blue" />}
              title="Raspberry Pi Cameras"
              description="Low-cost IP cameras capturing high-quality intruder images."
            />
            <TechCard
              icon={<Zap size={40} className="text-glow-cyan" />}
              title="IoT & AI Integration"
              description="PIR sensors and Python scripts power real-time detection."
            />
          </div>
        </div>
      </section>

    
      <section className="py-20 bg-cosmic-gray">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-display font-bold bg-clip-text text-transparent bg-cosmic-gradient">
            What Our Users Say
          </h2>
          <p className="text-gray-400 mt-3">Trusted by homes and businesses.</p>
          <div className="grid md:grid-cols-3 gap-12 mt-12">
            <TestimonialCard
              name="Collins Oluoch"
              role="Juja Resident"
              text="SmartEye caught an intruder in my store within seconds—amazing!"
            />
            <TestimonialCard
              name="Veronica Kiaii"
              role="Local Business"
              text="Affordable and effective—perfect for my supermarket."
            />
            <TestimonialCard
              name="Wuod Nyakach"
              role="Tech Enthusiast"
              text="The IoT setup is simple and the AI detection is spot-on."
            />
          </div>
        </div>
      </section>


      <section className="py-20 bg-space-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-display font-bold bg-clip-text text-transparent bg-cosmic-gradient">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 mt-3">Got questions? We’ve got answers.</p>
          <div className="mt-12 space-y-6 max-w-3xl mx-auto text-left">
            <FAQItem
              question="What makes SmartEye unique?"
              answer="Our low-cost IoT cameras and AI vision deliver real-time security alerts via email."
            />
            <FAQItem
              question="How fast are the notifications?"
              answer="Images are sent to your email within five seconds of detection."
            />
            <FAQItem
              question="Can I set it up myself?"
              answer="Yes, it’s designed for easy installation with Raspberry Pi and Python."
            />
          </div>
        </div>
      </section>


      <section className="py-20 bg-gradient-to-r from-midnight-blue to-cosmic-gray text#######-center">
        <h2 className="text-5xl font-display font-bold bg-clip-text text-transparent bg-cosmic-gradient">
          Secure Your Space Today
        </h2>
        <p className="mt-4 text-xl text-gray-300">Join the SmartEye revolution in IoT security.</p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="bg-gradient-to-r from-nebula-blue to-galactic-purple text-stellar-white px-8 py-4 rounded-full font-semibold hover:from-nebula-blue/80 hover:to-galactic-purple/80 transition-all shadow-glow-sm hover:shadow-glow-md"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <footer className="py-12 bg-space-black text-gray-400 border-t border-cosmic-gray">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-display font-bold bg-clip-text text-transparent bg-cosmic-gradient">
              SmartEye
            </h3>
            <p className="mt-2">Affordable IoT surveillance for a safer tomorrow.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-stellar-white">Quick Links</h4>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="/about" className="hover:text-glow-cyan transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/demo" className="hover:text-glow-cyan transition-colors">
                  Demo
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-glow-cyan transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-stellar-white">Connect With Us</h4>
            <div className="mt-4 flex space-x-6 justify-center md:justify-start">
              <a href="https://linkedin.com" target="_blank" className="hover:text-nebula-blue transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://facebook.com" target="_blank" className="hover:text-nebula-blue transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://github.com" target="_blank" className="hover:text-nebula-blue transition-colors">
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center border-t border-cosmic-gray pt-4">
          <p>© 2025 SmartEye. All rights reserved.</p>
          <p className="text-sm mt-1">Designed for affordable security innovation.</p>
        </div>
      </footer>
    </main>
  );
}


const FeatureCard = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.1, rotate: 2 }}
    className="p-6 bg-midnight-blue shadow-glow-sm rounded-2xl text-center hover:shadow-glow-md transition-all"
  >
    <div className="mb-4">{icon}</div>
    <h3 className="text-2xl font-display font-semibold text-stellar-white">{title}</h3>
    <p className="text-gray-400 mt-2">{description}</p>
  </motion.div>
);

const StepCard = ({ step, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    className="p-6 bg-midnight-blue shadow-glow-sm rounded-2xl text-center hover:shadow-glow-md transition-all"
  >
    <span className="text-4xl font-bold text-nebula-blue">{step}</span>
    <h3 className="text-2xl font-display font-semibold text-stellar-white mt-2">{title}</h3>
    <p className="text-gray-400 mt-2">{description}</p>
  </motion.div>
);

const TechCard = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="p-6 bg-midnight-blue shadow-glow-sm rounded-2xl text-center hover:shadow-glow-md transition-all"
  >
    <div className="mb-4">{icon}</div>
    <h3 className="text-2xl font-display font-semibold text-stellar-white">{title}</h3>
    <p className="text-gray-400 mt-2">{description}</p>
  </motion.div>
);

const TestimonialCard = ({ name, role, text }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="p-6 bg-midnight-blue shadow-glow-sm rounded-2xl text-center hover:shadow-glow-md transition-all"
  >
    <p className="text-gray-300 italic">"{text}"</p>
    <h3 className="mt-4 text-lg font-display font-semibold text-stellar-white">{name}</h3>
    <p className="text-gray-400">{role}</p>
  </motion.div>
);

const FAQItem = ({ question, answer }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="p-4 bg-midnight-blue rounded-2xl shadow-glow-sm hover:shadow-glow-md transition-all"
  >
    <h3 className="text-xl font-display font-semibold text-stellar-white">{question}</h3>
    <p className="text-gray-400 mt-2">{answer}</p>
  </motion.div>
);