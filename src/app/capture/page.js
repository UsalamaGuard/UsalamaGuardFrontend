"use client";

import { motion } from "framer-motion";
import { Camera } from "lucide-react";

export default function CapturePage() {
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
            Image Capture
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            SmartEye harnesses the power of a Raspberry Pi camera module to snap high-quality images of intruders, delivering critical visual evidence for swift security responses.
          </p>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-12 grid md:grid-cols-2 gap-12"
        >
          <div className="bg-midnight-blue p-6 rounded-2xl shadow-glow-md">
            <Camera size={48} className="text-glow-cyan mb-4" />
            <h2 className="text-2xl font-display font-semibold">How It Works</h2>
            <p className="text-gray-400 mt-4">
              When the Passive Infrared (PIR) sensor detects motion, it sends a signal to the Raspberry Pi microcontroller. Instantly, the system activates the attached IP spy camera—specifically the Camera Module Rev 1.3—connected through the Camera Serial Interface (CSI). This camera captures a detailed image of the intruder in real-time. The Raspberry Pi then processes the image using embedded Python scripts, saving it locally for immediate use in notifications or further analysis.
            </p>
          </div>
          <div className="bg-midnight-blue p-6 rounded-2xl shadow-glow-md">
            <h2 className="text-2xl font-display font-semibold">Key Benefits</h2>
            <ul className="text-gray-400 mt-4 list-disc list-inside">
              <li>
                <strong>Crystal-Clear Evidence:</strong> High-resolution images ensure intruders are identifiable.
              </li>
              <li>
                <strong>Cost-Effective Solution:</strong> A budget-friendly alternative to pricey commercial cameras.
              </li>
              <li>
                <strong>Rapid Response:</strong> Instant capture triggered by motion for timely action.
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
            <div className="absolute inset-0 bg-gradient-to-tr from-glow-cyan to-transparent opacity-50 rounded-full blur-3xl animate-pulse"></div>
            <motion.img
              src="/capture.jpeg" 
              alt="SmartEye Camera Capturing Intruder"
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
              The camera module operates at a resolution sufficient to capture detailed images even in low-light conditions, thanks to its sensitive sensor. It’s powered directly by the Raspberry Pi, requiring no external power source, which keeps the system compact and efficient. The Python script controlling the capture process is lightweight, ensuring minimal latency between detection and image storage.
            </p>
            <p>
              SmartEye’s design prioritizes simplicity: the camera connects via a ribbon cable to the CSI port, enabling high-speed data transfer. Once captured, the image is timestamped and stored on the Raspberry Pi’s SD card, ready for attachment in an email alert or manual review.
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
            The image capture feature empowers users with tangible proof of intrusions, making it easier to identify threats and coordinate with authorities if needed. By integrating this capability into an affordable IoT framework, SmartEye ensures that advanced security isn’t just for the elite—it’s accessible to homes, small businesses, and tech enthusiasts alike, transforming how we protect our spaces.
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