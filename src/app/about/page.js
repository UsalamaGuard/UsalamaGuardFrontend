"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Users, Cloud, Rocket, Zap, ShieldCheck, Monitor, Linkedin, Github, Facebook } from "lucide-react";
import Navbar from "../components/navbar/page";

const AboutUsPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* About Header */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-blue-900 via-gray-800 to-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          >
            About SkyViu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Pioneering the future of security with AI-driven drone surveillance, cloud technology, and cutting-edge innovation.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-600">Our Mission</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            At SkyViu, we aim to redefine security by integrating advanced artificial intelligence, drone technology, and cloud infrastructure. Our mission is to provide real-time, intelligent surveillance solutions that empower organizations to stay ahead of threats with precision and efficiency.
          </p>
        </div>
      </section>

      {/* Project Overview Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">The SkyViu Project</h2>
          <p className="text-gray-400 mt-4 text-center max-w-3xl mx-auto">
            SkyViu is a comprehensive security platform built from the ground up by a multidisciplinary team of experts. Below, we detail the core components and roles that bring this vision to life.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
            {/* AI & Embedded Systems Engineer */}
            <ProjectCard
              icon={<Zap size={40} className="text-blue-500" />}
              title="AI & Embedded Systems"
              description="Our AI & Embedded Systems Engineers develop and optimize cutting-edge AI models for real-time object detection on drones. They ensure seamless performance on edge devices like Nvidia Jetson and Raspberry Pi."
              details={[
                "Train and deploy YOLO and SSD models for anomaly detection.",
                "Optimize AI algorithms for edge computing efficiency.",
                "Develop real-time video processing algorithms.",
                "Integrate AI with drone camera feeds for instant insights."
              ]}
              techStack={["TensorFlow", "PyTorch", "OpenCV", "YOLO", "C++", "Python"]}
            />

            {/* Drone & IoT Engineer */}
            <ProjectCard
              icon={<Rocket size={40} className="text-purple-500" />}
              title="Drone & IoT Engineering"
              description="Our Drone & IoT Engineers design and configure the hardware and connectivity that power SkyViu drones, ensuring robust navigation and seamless cloud integration."
              details={[
                "Select and configure cameras, sensors, and GPS hardware.",
                "Develop navigation and stability control systems.",
                "Implement wireless communication via MQTT, WebRTC, and 5G.",
                "Connect drone telemetry to AWS IoT Core for real-time data."
              ]}
              techStack={["DJI SDK", "PX4", "MQTT", "WebRTC", "AWS IoT Core"]}
            />

            {/* Cloud & Backend Engineer */}
            <ProjectCard
              icon={<Cloud size={40} className="text-blue-400" />}
              title="Cloud & Backend Development"
              description="Our Cloud & Backend Engineers build the robust infrastructure that supports SkyViu, handling data storage, real-time streaming, and API development."
              details={[
                "Set up AWS services like S3, Lambda, and Kinesis.",
                "Develop RESTful APIs for alerts and data management.",
                "Enable real-time streaming with WebSockets.",
                "Secure data storage using DynamoDB and PostgreSQL."
              ]}
              techStack={["AWS Lambda", "S3", "Node.js", "FastAPI", "WebSockets"]}
            />

            {/* Frontend & UI/UX Developer */}
            <ProjectCard
              icon={<Monitor size={40} className="text-purple-400" />}
              title="Frontend & UI/UX Design"
              description="Our Frontend & UI/UX Developers craft intuitive, responsive dashboards that bring SkyViu’s surveillance data to life for security teams."
              details={[
                "Build interactive dashboards for real-time monitoring.",
                "Integrate live drone feeds and anomaly alerts.",
                "Implement WebSockets for seamless live updates.",
                "Design responsive UI/UX for mobile and desktop."
              ]}
              techStack={["React.js", "Next.js", "WebSockets", "Tailwind CSS"]}
            />

            {/* Cybersecurity & DevOps Engineer */}
            <ProjectCard
              icon={<ShieldCheck size={40} className="text-blue-500" />}
              title="Cybersecurity & DevOps"
              description="Our Cybersecurity & DevOps Engineers ensure SkyViu’s systems are secure, scalable, and efficiently deployed, protecting data and optimizing performance."
              details={[
                "Secure data transmission with TLS, VPN, and AES encryption.",
                "Implement user authentication via OAuth and JWT.",
                "Monitor system performance and security threats.",
                "Automate AWS deployments with CI/CD pipelines."
              ]}
              techStack={["AWS IAM", "JWT", "Docker", "Kubernetes", "Terraform"]}
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-600">Our Team</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Meet the visionaries behind SkyViu, blending expertise in AI, drones, cloud tech, and security to deliver a world-class solution.
          </p>
          <div className="grid md:grid-cols-4 gap-12 mt-12">
            <TeamCard name="Alex Carter" title="CEO" image="/team/alex.jpg" />
            <TeamCard name="Sara Kim" title="CTO" image="/team/sara.jpg" />
            <TeamCard name="Liam Patel" title="Lead Engineer" image="/team/liam.jpg" />
            <TeamCard name="Emma Ruiz" title="AI Specialist" image="/team/emma.jpg" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-center">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Join the Future</h2>
        <p className="mt-4 text-lg text-gray-200">Discover how SkyViu can transform your security strategy.</p>
        <div className="mt-8">
          <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg">
            Get in Touch
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

// Reusable Components
const ProjectCard = ({ icon, title, description, details, techStack }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="p-6 bg-gray-800 shadow-lg rounded-xl border border-gray-700 hover:shadow-blue-500/20 transition-all"
  >
    <div className="flex items-center justify-center mb-4">{icon}</div>
    <h3 className="text-2xl font-semibold text-white text-center">{title}</h3>
    <p className="text-gray-400 mt-2">{description}</p>
    <ul className="mt-4 text-gray-400 list-disc list-inside">
      {details.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    <p className="mt-4 text-gray-300 font-semibold">Tech Stack:</p>
    <div className="mt-2 flex flex-wrap gap-2">
      {techStack.map((tech, index) => (
        <span key={index} className="bg-blue-600 text-white px-2 py-1 rounded-full text-sm">{tech}</span>
      ))}
    </div>
  </motion.div>
);

const TeamCard = ({ name, title, image }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    className="p-6 bg-gray-900 shadow-lg rounded-xl text-center border border-gray-700 hover:shadow-purple-500/20 transition-all"
  >
    <img src={image} alt={name} className="w-32 h-32 mx-auto rounded-full border-2 border-blue-500" />
    <h3 className="mt-4 text-xl font-semibold text-white">{name}</h3>
    <p className="text-gray-400">{title}</p>
  </motion.div>
);

export default AboutUsPage;