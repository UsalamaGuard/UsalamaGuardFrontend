"use client";

import { motion } from "framer-motion";
import { Eye } from "lucide-react";

export default function DetectionPage() {
  return (
    <main className="bg-space-black text-stellar-white min-h-screen py-20">
      <section className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold bg-clip-text text-transparent bg-cosmic-gradient mb-6">
            Intruder Detection
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
          UsalamaAiGuard’s intruder detection system uses advanced Passive Infrared (PIR) sensors to spot unauthorized movement in real-time, setting the stage for a rapid and effective security response.
          </p>
        </motion.div>


        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-12 grid md:grid-cols-2 gap-12"
        >
          <div className="bg-midnight-blue p-6 rounded-2xl shadow-glow-md">
            <Eye size={48} className="text-nebula-blue mb-4" />
            <h2 className="text-2xl font-display font-semibold">How It Works</h2>
            <p className="text-gray-400 mt-4">
              The PIR sensor operates by detecting infrared radiation emitted by moving objects, such as a person entering a monitored area. It continuously measures the intensity of IR radiation and identifies significant changes—indicating motion. When triggered, the sensor sends an immediate signal to the Raspberry Pi, initiating the next steps in UsalamaAiGuard’s security process, like image capture and notifications. This technology ensures reliable detection without constant power drain.
            </p>
          </div>
          <div className="bg-midnight-blue p-6 rounded-2xl shadow-glow-md">
            <h2 className="text-2xl font-display font-semibold">Key Benefits</h2>
            <ul className="text-gray-400 mt-4 list-disc list-inside">
              <li>
                <strong>Instant Detection:</strong> Real-time motion sensing for quick alerts.
              </li>
              <li>
                <strong>Affordable Design:</strong> Compact and cost-effective for any setting.
              </li>
              <li>
                <strong>Smart Integration:</strong> Works seamlessly with Raspberry Pi automation.
              </li>
            </ul>
          </div>
        </motion.div>

   
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 1.2 }}
          className="mt-16 flex justify-center"
        >
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 bg-gradient-to-tr from-nebula-blue to-transparent opacity-50 rounded-full blur-3xl animate-pulse"></div>
            <motion.img
              src="/detection.png" 
              alt="SmartEye PIR Sensor Detecting Motion"
              className="relative z-10 w-full rounded-lg shadow-glow-md border-4 border-nebula-blue"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>

     
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 bg-midnight-blue p-8 rounded-2xl shadow-glow-md"
        >
          <h2 className="text-3xl font-display font-semibold text-center mb-6">
            Technical Breakdown
          </h2>
          <div className="space-y-6 text-gray-300">
            <p>
              The PIR sensor is a small, low-power device that excels at detecting human presence through infrared signatures. It uses a pair of pyroelectric sensors to compare IR levels, generating a signal when motion disrupts the balance. Operating within a range of up to 7 meters, it’s sensitive enough to catch subtle movements while filtering out noise from environmental changes like temperature shifts.
            </p>
            <p>
              Connected to the Raspberry Pi via General Purpose Input/Output (GPIO) pins, the sensor requires minimal setup—just a few lines of Python code to monitor its output. Its low energy consumption makes it ideal for continuous operation, ensuring SmartEye remains vigilant 24/7 without driving up costs.
            </p>
          </div>
        </motion.div>

 
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-display font-semibold bg-clip-text text-transparent bg-cosmic-gradient mb-4">
            Why It Matters
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto">
            Intruder detection is the backbone of UsalamaAiGuard’s mission to secure homes, shops, and offices. By catching unauthorized movement instantly, it protects against burglars and unknown individuals, offering peace of mind at a fraction of the cost of traditional systems. This feature makes advanced surveillance accessible, empowering users to safeguard their spaces with confidence.
          </p>
        </motion.div>

 
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="mt-16 text-center"
        >
          <a
            href="/demo"
            className="bg-gradient-to-r from-nebula-blue to-galactic-purple text-stellar-white px-8 py-4 rounded-full font-semibold hover:from-nebula-blue/80 hover:to-galactic-purple/80 transition-all shadow-glow-sm hover:shadow-glow-md"
          >
            See It in Action
          </a>
        </motion.div>
      </section>
    </main>
  );
}