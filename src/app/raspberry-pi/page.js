"use client";

import { motion } from "framer-motion";
import { Camera } from "lucide-react";

export default function RaspberryPiPage() {
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
            Raspberry Pi
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            The Raspberry Pi acts as the brilliant core of UsalamaAiGuard, seamlessly orchestrating motion detection, image capture, and email notifications in a compact, affordable package.
          </p>
        </motion.div>

   
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-12 grid md:grid-cols-2 gap-12"
        >
          <div className="bg-midnight-blue p-6 rounded-2xl shadow-glow-md">
            <Camera size={48} className="text-nebula-blue mb-4" />
            <h2 className="text-2xl font-display font-semibold">How It Works</h2>
            <p className="text-gray-400 mt-4">
              The Raspberry Pi 3 Model B, a credit-card-sized single-board computer, powers UsalamaAiGuard by integrating key components: the PIR sensor, camera module, and SMTP server. When the PIR sensor detects motion, the Pi’s embedded Python scripts spring into action, triggering the camera to snap an image. It then processes the image and sends an email alert via the SMTP server, all in a matter of seconds. This tiny powerhouse coordinates every step of the surveillance process with precision.
            </p>
          </div>
          <div className="bg-midnight-blue p-6 rounded-2xl shadow-glow-md">
            <h2 className="text-2xl font-display font-semibold">Key Benefits</h2>
            <ul className="text-gray-400 mt-4 list-disc list-inside">
              <li>
                <strong>Cost-Effective Core:</strong> Affordable hardware accessible to all.
              </li>
              <li>
                <strong>Versatile Connectivity:</strong> GPIO pins support multiple components.
              </li>
              <li>
                <strong>Flexible Control:</strong> Customizable with Python for tailored functionality.
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
              src="/rasp.jpeg" 
              alt="SmartEye Raspberry Pi in Action"
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
              The Raspberry Pi 3 Model B boasts a 1.2 GHz quad-core processor and 1 GB of RAM, providing ample power for SmartEye’s tasks. Its General Purpose Input/Output (GPIO) pins connect directly to the PIR sensor and camera module, enabling real-time data processing. The camera interfaces via the Camera Serial Interface (CSI) port, while the Pi’s built-in Wi-Fi handles SMTP communication, requiring only a stable internet connection.
            </p>
            <p>
              To keep it running smoothly, a small DC fan cools the Pi, preventing overheating during continuous operation. Python scripts, stored on a microSD card, manage the system’s logic—monitoring sensor inputs, controlling the camera, and sending emails. This open-source flexibility allows users to tweak settings or add features, making the Pi a scalable foundation for SmartEye.
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
            The Raspberry Pi transforms UsalamaAiGuard into a cost-effective, scalable security solution, bringing advanced surveillance to homes and businesses without breaking the bank. As the central hub, it ties together detection, capture, and notifications, offering a DIY-friendly platform that’s powerful yet approachable. It’s the key to making smart security a reality for everyone.
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