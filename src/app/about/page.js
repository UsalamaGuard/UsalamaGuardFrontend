"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Users, Cloud, Zap, ShieldCheck, Monitor, Mail, Eye, Linkedin, Github, Facebook } from "lucide-react";
import Navbar from "../components/navbar/page";

const AboutUsPage = () => {
  return (
    <div className="bg-space-black text-stellar-white min-h-screen overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* About Header */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-midnight-blue via-space-black to-galactic-purple">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-display font-bold bg-clip-text text-transparent bg-cosmic-gradient"
          >
            About UsalamaAiGuard
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-4 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            Revolutionizing security with IoT-powered surveillance, real-time detection, and instant notifications—all at your fingertips.
          </motion.p>
        </div>
        <div className="absolute inset-0 hidden md:block pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-nebula-blue rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ delay: 0.7, duration: 1.5 }}
            className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-galactic-purple rounded-full blur-3xl"
          />
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-midnight-blue">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-display font-bold bg-clip-text text-transparent bg-cosmic-gradient">Our Mission</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            At UsalamaAiGuard, we’re dedicated to transforming security with a low-cost, IoT-based surveillance system. By combining Raspberry Pi technology, PIR sensors, and SMTP notifications, we deliver real-time intruder detection and peace of mind for homes and businesses worldwide.
          </p>
        </div>
      </section>

      {/* Project Overview Section */}
      <section className="py-20 bg-space-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-display font-bold text-center bg-clip-text text-transparent bg-cosmic-gradient">The UsalamaAiGuard Project</h2>
          <p className="text-gray-400 mt-4 text-center max-w-3xl mx-auto">
          UsalamaAiGuard is a cutting-edge security solution crafted by a skilled team of innovators. Here’s how our expertise comes together to protect what matters most.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
            {/* AI & Embedded Systems Engineer */}
            <ProjectCard
              icon={<Zap size={40} className="text-glow-cyan" />}
              title="AI & Embedded Systems"
              description="Our AI & Embedded Systems Engineers optimize real-time detection algorithms for the Raspberry Pi, ensuring fast and accurate intruder identification."
              details={[
                "Develop motion detection logic using PIR sensor data.",
                "Optimize Python scripts for embedded performance.",
                "Integrate image capture with AI processing.",
                "Enhance system efficiency on low-power devices."
              ]}
              techStack={["Python", "OpenCV", "Raspberry Pi OS", "NumPy"]}
            />

            {/* Hardware & IoT Engineer */}
            <ProjectCard
              icon={<Eye size={40} className="text-nebula-blue" />}
              title="Hardware & IoT Engineering"
              description="Our Hardware & IoT Engineers design and integrate the physical components, ensuring robust connectivity and reliable operation."
              details={[
                "Configure PIR sensors and camera modules.",
                "Wire hardware to Raspberry Pi GPIO pins.",
                "Ensure stable power and cooling with DC fans.",
                "Enable Wi-Fi connectivity for notifications."
              ]}
              techStack={["Raspberry Pi", "PIR Sensor", "CSI Interface", "GPIO"]}
            />

            {/* Cloud & Backend Engineer */}
            <ProjectCard
              icon={<Cloud size={40} className="text-galactic-purple" />}
              title="Cloud & Backend Development"
              description="Our Cloud & Backend Engineers manage data flow and notifications, leveraging SMTP for seamless communication."
              details={[
                "Set up SMTP servers for email alerts.",
                "Handle image storage and retrieval.",
                "Develop backend scripts for system automation.",
                "Secure data transmission over the internet."
              ]}
              techStack={["SMTP", "Python", "Raspberry Pi Wi-Fi", "Email APIs"]}
            />

            {/* Frontend & UI/UX Developer */}
            <ProjectCard
              icon={<Monitor size={40} className="text-glow-cyan" />}
              title="Frontend & UI/UX Design"
              description="Our Frontend & UI/UX Developers create intuitive interfaces to monitor and manage SmartEye’s features."
              details={[
                "Design dashboards for real-time alerts.",
                "Integrate email notification previews.",
                "Ensure responsive design across devices.",
                "Craft user-friendly setup guides."
              ]}
              techStack={["React.js", "Next.js", "Tailwind CSS", "Framer Motion"]}
            />

            {/* Cybersecurity & DevOps Engineer */}
            <ProjectCard
              icon={<ShieldCheck size={40} className="text-nebula-blue" />}
              title="Cybersecurity & DevOps"
              description="Our Cybersecurity & DevOps Engineers secure the system and streamline deployment for reliability and scalability."
              details={[
                "Encrypt SMTP credentials and data.",
                "Monitor system logs for security threats.",
                "Automate deployment on Raspberry Pi.",
                "Optimize uptime and performance."
              ]}
              techStack={["SSL/TLS", "Python Logging", "Docker", "Bash"]}
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-midnight-blue">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-display font-bold bg-clip-text text-transparent bg-cosmic-gradient">Our Team</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Meet the brilliant minds behind UsalamaAiGuard, uniting expertise in IoT, AI, and security to build a safer future.
          </p>
          <div className="grid md:grid-cols-4 gap-12 mt-12">
            <TeamCard name="Kennedy Wanakacha" title="Frontend & UI/UX Developer" image="/ken.jpeg" />
            <TeamCard name="Princeton Mwachala" title="Cloud & Backend Engineer" image="/prince.jpeg" />
            <TeamCard name="Derrick Richards" title="Cybersecurity & DevOps Engineer" image="/aprel.jpeg" />
            <TeamCard name="John Mwega" title="AI & Embedded Systems Engineer" image="/mwegs.jpeg" />
            <TeamCard name="Rony Maruga" title="Hardware & IoT Engineer" image="/ron.jpeg" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-nebula-blue to-galactic-purple text-center">
        <h2 className="text-4xl font-display font-bold bg-clip-text text-transparent bg-cosmic-gradient">Secure Tomorrow</h2>
        <p className="mt-4 text-lg text-gray-200">Learn how UsalamaAiGuard can protect your world today.</p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="bg-stellar-white text-space-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-all shadow-glow-md hover:shadow-glow-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-space-black text-gray-400">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-display font-bold bg-clip-text text-transparent bg-cosmic-gradient">UsalamaAiGuard</h3>
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
          <p>© 2025 UsalamaAiGuard. All rights reserved.</p>
          <p className="text-sm mt-1">Crafted with vision for a safer world.</p>
        </div>
      </footer>
    </div>
  );
};

// Reusable Components
const ProjectCard = ({ icon, title, description, details, techStack }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="p-6 bg-midnight-blue shadow-glow-md rounded-2xl border border-cosmic-gray hover:shadow-glow-lg transition-all"
  >
    <div className="flex items-center justify-center mb-4">{icon}</div>
    <h3 className="text-2xl font-display font-semibold text-stellar-white text-center">{title}</h3>
    <p className="text-gray-400 mt-2">{description}</p>
    <ul className="mt-4 text-gray-400 list-disc list-inside">
      {details.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    <p className="mt-4 text-gray-300 font-semibold">Tech Stack:</p>
    <div className="mt-2 flex flex-wrap gap-2">
      {techStack.map((tech, index) => (
        <span key={index} className="bg-nebula-blue text-stellar-white px-2 py-1 rounded-full text-sm">{tech}</span>
      ))}
    </div>
  </motion.div>
);

const TeamCard = ({ name, title, image }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    className="p-6 bg-space-black shadow-glow-md rounded-2xl border border-cosmic-gray hover:shadow-glow-lg transition-all"
  >
    <img src={image} alt={name} className="w-32 h-32 mx-auto rounded-full border-2 border-glow-cyan object-cover" />
    <h3 className="mt-4 text-xl font-display font-semibold text-stellar-white">{name}</h3>
    <p className="text-gray-400">{title}</p>
  </motion.div>
);

export default AboutUsPage;