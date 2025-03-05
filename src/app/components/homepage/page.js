"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Shield, Eye, Cloud, Video, Bell, Rocket, Users, Zap, Linkedin, Github, Facebook } from "lucide-react";

export default function LandingPage() {
  return (
    <main className="bg-gray-900 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-gray-800 to-black pt-20 sm:pt-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center md:text-left w-full md:w-1/2"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              SkyViu: AI-Driven Drone Surveillance
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-gray-300">
              Revolutionizing security with cutting-edge AI, drones, and cloud technology for real-time monitoring and intelligent insights.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center md:justify-start">
              <Link href="/demo" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 py-3 rounded-full font-semibold flex items-center justify-center transition-all shadow-lg">
                Watch Demo <ArrowRight className="ml-2" />
              </Link>
              <Link href="/contact" className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-full font-semibold transition-all shadow-lg">
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
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-transparent opacity-50 rounded-full blur-3xl animate-pulse"></div>
            <img
              src="/drone.jpg"
              alt="Drone in Action"
              className="relative z-10 w-full rounded-lg shadow-2xl border-4 border-blue-500 transform rotate-6 md:rotate-0 hover:rotate-0 transition-transform"
            />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Key Features</h2>
          <p className="text-gray-400 mt-3">Next-gen capabilities for a smarter, safer world.</p>
          <div className="grid md:grid-cols-3 gap-12 mt-12">
            <FeatureCard
              icon={<Eye size={40} className="text-blue-500" />}
              title="AI-Powered Surveillance"
              description="Real-time object detection and anomaly tracking with advanced AI."
            />
            <FeatureCard
              icon={<Bell size={40} className="text-purple-500" />}
              title="Real-Time Alerts"
              description="Instant notifications powered by intelligent AI models."
            />
            <FeatureCard
              icon={<Cloud size={40} className="text-blue-400" />}
              title="Cloud Integration"
              description="Securely store and access data with AWS-powered solutions."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-600">How It Works</h2>
          <p className="text-gray-400 mt-3">A seamless, futuristic security solution.</p>
          <div className="grid md:grid-cols-3 gap-12 mt-12">
            <StepCard step="01" title="Deploy & Configure" description="Launch drones and customize AI settings effortlessly." />
            <StepCard step="02" title="Real-Time Monitoring" description="View live feeds and analyze threats instantly." />
            <StepCard step="03" title="Actionable Alerts" description="Respond proactively with AI-powered insights." />
          </div>
        </div>
      </section>

      {/* Our Technology Section */}
      <section className="py-20 bg-gradient-to-b from-gray-800 to-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Our Technology</h2>
          <p className="text-gray-400 mt-3">The backbone of tomorrow’s security.</p>
          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <TechCard
              icon={<Rocket size={40} className="text-blue-500" />}
              title="Next-Gen Drones"
              description="High-performance drones with advanced sensors and AI integration."
            />
            <TechCard
              icon={<Zap size={40} className="text-purple-500" />}
              title="AI Algorithms"
              description="Optimized YOLO/SSD models for real-time anomaly detection."
            />
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-600">Meet Our Team</h2>
          <p className="text-gray-400 mt-3">The innovators powering SkyViu’s vision.</p>
          <div className="grid md:grid-cols-4 gap-12 mt-12">
            <TeamCard name="Kennedy Wanakacha" title="Frontend & UI/UX Developer" image="/ken.jpeg" />
            <TeamCard name="Princeton Mwachala" title="Cloud & Backend Engineer" image="/prince.jpeg" />
            <TeamCard name="Derrick Richards" title="Cybersecurity & DevOps Engineer" image="/aprel.jpeg" />
            <TeamCard name="John Mwega" title="AI & Embedded Systems Engineer" image="/mwegs.jpeg" />
            <TeamCard name="Rony Maruga" title="Drone & IoT Engineer" image="/ron.jpeg" />
          </div>
        </div>
      </section>

      {/* Our Roles Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Our Roles</h2>
          <p className="text-gray-400 mt-3">The expertise driving SkyViu’s innovation.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
            <RoleCard
              title="AI & Embedded Systems Engineer"
              responsibilities={[
                "Train and deploy YOLO/SSD AI models for anomaly detection.",
                "Optimize AI for edge computing (Nvidia Jetson/Raspberry Pi).",
                "Develop real-time video processing algorithms.",
                "Integrate AI models with drone camera feeds."
              ]}
              techStack={["TensorFlow", "PyTorch", "OpenCV", "YOLO", "C++", "Python"]}
            />
            <RoleCard
              title="Drone & IoT Engineer"
              responsibilities={[
                "Select and configure drone hardware (cameras, sensors, GPS).",
                "Develop navigation and stability controls.",
                "Set up wireless communication (MQTT, WebRTC, 5G).",
                "Connect drone telemetry with AWS IoT Core."
              ]}
              techStack={["DJI SDK", "PX4", "MQTT", "WebRTC", "AWS IoT Core"]}
            />
            <RoleCard
              title="Cloud & Backend Engineer"
              responsibilities={[
                "Set up AWS services (S3, Lambda, Kinesis).",
                "Develop RESTful APIs for alerts and data.",
                "Implement real-time streaming with WebSockets.",
                "Secure data with DynamoDB/PostgreSQL."
              ]}
              techStack={["AWS Lambda", "S3", "Node.js", "FastAPI", "WebSockets"]}
            />
            <RoleCard
              title="Frontend & UI/UX Developer"
              responsibilities={[
                "Build interactive dashboards for security teams.",
                "Integrate real-time drone feeds and alerts.",
                "Implement WebSockets for live updates.",
                "Ensure responsive UI/UX design."
              ]}
              techStack={["React.js", "Next.js", "WebSockets", "Tailwind CSS"]}
            />
            <RoleCard
              title="Cybersecurity & DevOps Engineer"
              responsibilities={[
                "Secure data with TLS, VPN, AES encryption.",
                "Implement OAuth/JWT authentication.",
                "Monitor performance and security threats.",
                "Automate AWS deployment with CI/CD."
              ]}
              techStack={["AWS IAM", "JWT", "Docker", "Kubernetes", "Terraform"]}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-600">What Our Clients Say</h2>
          <p className="text-gray-400 mt-3">Trusted by innovators worldwide.</p>
          <div className="grid md:grid-cols-3 gap-12 mt-12">
            <TestimonialCard name="Caleb Samidoh" role="Security Analyst" text="SkyViu redefined our security strategy with futuristic insights!" />
            <TestimonialCard name="Yvonne Mwendwa" role="Operations Manager" text="A game-changer for modern surveillance systems." />
            <TestimonialCard name="Samson Wamunyoro" role="Tech Lead" text="The AI precision is unmatched—truly next-level." />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Frequently Asked Questions</h2>
          <p className="text-gray-400 mt-3">Got questions? We’ve got answers.</p>
          <div className="mt-12 space-y-6 max-w-3xl mx-auto text-left">
            <FAQItem question="What makes SkyViu unique?" answer="Our integration of AI, drones, and cloud tech delivers unmatched security solutions." />
            <FAQItem question="How secure is the data?" answer="We use TLS encryption, AWS security, and OAuth for top-tier protection." />
            <FAQItem question="Can I customize the system?" answer="Yes, our engineers tailor AI and drone settings to your needs." />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-center">
        <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Secure the Future Today</h2>
        <p className="mt-4 text-xl text-gray-200">Join the SkyViu revolution in AI-driven surveillance.</p>
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
    </main>
  );
}

// Reusable Components
const FeatureCard = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.1, rotate: 2 }}
    className="p-6 bg-gray-900 shadow-lg rounded-xl text-center border border-gray-700 hover:shadow-blue-500/20 transition-all"
  >
    <div className="mb-4">{icon}</div>
    <h3 className="text-2xl font-semibold text-white">{title}</h3>
    <p className="text-gray-400 mt-2">{description}</p>
  </motion.div>
);

const StepCard = ({ step, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    className="p-6 bg-gray-800 shadow-lg rounded-xl text-center border border-gray-700 hover:shadow-purple-500/20 transition-all"
  >
    <span className="text-4xl font-bold text-blue-500">{step}</span>
    <h3 className="text-2xl font-semibold text-white mt-2">{title}</h3>
    <p className="text-gray-400 mt-2">{description}</p>
  </motion.div>
);

const TechCard = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="p-6 bg-gray-900 shadow-lg rounded-xl text-center border border-gray-700 hover:shadow-blue-500/20 transition-all"
  >
    <div className="mb-4">{icon}</div>
    <h3 className="text-2xl font-semibold text-white">{title}</h3>
    <p className="text-gray-400 mt-2">{description}</p>
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

const RoleCard = ({ title, responsibilities, techStack }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="p-6 bg-gray-800 shadow-lg rounded-xl border border-gray-700 hover:shadow-blue-500/20 transition-all"
  >
    <h3 className="text-xl font-semibold text-white">{title}</h3>
    <ul className="mt-4 text-gray-400 list-disc list-inside">
      {responsibilities.map((resp, index) => (
        <li key={index}>{resp}</li>
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

const TestimonialCard = ({ name, role, text }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="p-6 bg-gray-800 shadow-lg rounded-xl text-center border border-gray-700 hover:shadow-purple-500/20 transition-all"
  >
    <p className="text-gray-300 italic">"{text}"</p>
    <h3 className="mt-4 text-lg font-semibold text-white">{name}</h3>
    <p className="text-gray-400">{role}</p>
  </motion.div>
);

const FAQItem = ({ question, answer }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="p-4 bg-gray-800 rounded-xl border border-gray-700 hover:shadow-blue-500/20 transition-all"
  >
    <h3 className="text-xl font-semibold text-white">{question}</h3>
    <p className="text-gray-400 mt-2">{answer}</p>
  </motion.div>
);