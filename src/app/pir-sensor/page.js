"use client";

import { motion } from "framer-motion";
import { Eye } from "lucide-react";

export default function PirSensorPage() {
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
            PIR Sensor
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            The Passive Infrared (PIR) sensor forms the backbone of SmartEye’s motion detection, delivering precise and reliable intruder identification with minimal effort.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-12 grid md:grid-cols-2 gap-12"
        >
          <div className="bg-midnight-blue p-6 rounded-2xl shadow-glow-md">
            <Eye size={48} className="text-glow-cyan mb-4" />
            <h2 className="text-2xl font-display font-semibold">How It Works</h2>
            <p className="text-gray-400 mt-4">
              The PIR sensor excels at detecting infrared radiation emitted by moving objects, such as a person crossing its field of view. This compact, low-power device uses dual pyroelectric elements to measure changes in IR intensity. When motion disrupts the balance—say, an intruder steps into the monitored area—it generates a signal that’s sent to the Raspberry Pi. This triggers the next steps in SmartEye’s security sequence, like capturing an image and sending an alert, all in real-time.
            </p>
          </div>
          <div className="bg-midnight-blue p-6 rounded-2xl shadow-glow-md">
            <h2 className="text-2xl font-display font-semibold">Key Benefits</h2>
            <ul className="text-gray-400 mt-4 list-disc list-inside">
              <li>
                <strong>Precision Sensing:</strong> High sensitivity to human movement for accurate detection.
              </li>
              <li>
                <strong>Energy Efficient:</strong> Low power use ensures round-the-clock operation.
              </li>
              <li>
                <strong>Simple Integration:</strong> Easily connects to Raspberry Pi for seamless automation.
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
              src="/pir.jpeg" 
              alt="SmartEye PIR Sensor in Action"
              className="relative z-10 w-full rounded-lg shadow-glow-md border-4 border-glow-cyan"
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
              The PIR sensor is a marvel of simplicity and efficiency. It features two pyroelectric sensors that detect infrared radiation within a range of up to 7 meters and a 120-degree field of view. When an object moves, the differential change in IR levels between the sensors produces a detectable voltage shift. This signal, typically a digital high/low output, is fed into the Raspberry Pi’s GPIO pins, where Python scripts monitor it continuously.
            </p>
            <p>
              Its low power consumption—often less than 50 microamps—makes it perfect for long-term use without draining resources. The sensor’s small size and adjustable sensitivity allow it to be fine-tuned for specific environments, filtering out false triggers from pets or minor temperature changes, ensuring SmartEye focuses on real threats.
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
            The PIR sensor is the first line of defense in SmartEye’s security system, enabling proactive detection of intrusions with unmatched efficiency. Its affordability and precision make it an ideal choice for protecting homes, businesses, and offices, ensuring that advanced motion sensing isn’t just a luxury—it’s a practical reality for everyone. By catching threats early, it sets the stage for a safer, smarter world.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="mt-16 text-center"
        >
          
        </motion.div>
      </section>
    </main>
  );
}