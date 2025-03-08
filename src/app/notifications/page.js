"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function NotificationsPage() {
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
            Email Notifications
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            SmartEye sends instant email alerts with intruder images, empowering users to respond quickly and effectively from anywhere in the world.
          </p>
        </motion.div>


        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-12 grid md:grid-cols-2 gap-12"
        >
          <div className="bg-midnight-blue p-6 rounded-2xl shadow-glow-md">
            <Mail size={48} className="text-galactic-purple mb-4" />
            <h2 className="text-2xl font-display font-semibold">How It Works</h2>
            <p className="text-gray-400 mt-4">
              Once an intruder’s image is captured by the Raspberry Pi camera, the system springs into action. The Raspberry Pi, running lightweight Python scripts, connects to a Simple Mail Transfer Protocol (SMTP) server. Within seconds, it composes an email, attaches the freshly captured image, and sends it to the user’s registered email address. This seamless process ensures that notifications reach you almost instantly after detection, keeping you in the loop no matter where you are.
            </p>
          </div>
          <div className="bg-midnight-blue p-6 rounded-2xl shadow-glow-md">
            <h2 className="text-2xl font-display font-semibold">Key Benefits</h2>
            <ul className="text-gray-400 mt-4 list-disc list-inside">
              <li>
                <strong>Lightning-Fast Alerts:</strong> Delivered in under five seconds for immediate action.
              </li>
              <li>
                <strong>Remote Access:</strong> Monitor your space via email, no app needed.
              </li>
              <li>
                <strong>Secure Delivery:</strong> Visual evidence transmitted reliably to your inbox.
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
            <div className="absolute inset-0 bg-gradient-to-tr from-galactic-purple to-transparent opacity-50 rounded-full blur-3xl animate-pulse"></div>
            <motion.img
              src="/email.jpeg"
              alt="SmartEye Email Notification"
              className="relative z-10 w-full rounded-lg shadow-glow-md border-4 border-galactic-purple"
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
              The SMTP server integration is powered by Python’s `smtplib` library, which handles email composition and transmission. The Raspberry Pi connects to a preconfigured SMTP server—such as Gmail’s—using secure credentials stored locally. The email includes a subject line (e.g., "SmartEye Alert: Intruder Detected"), the captured image as an attachment, and a brief message with a timestamp, ensuring clarity and context.
            </p>
            <p>
              This process is optimized for speed, completing in under five seconds from detection to delivery, thanks to the Raspberry Pi’s efficient processing and a stable internet connection. The system requires no additional hardware beyond the Pi, making it a lean, effective solution for real-time alerts.
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
            Email notifications bridge the gap between detection and action, giving users the power to monitor their premises remotely. Whether you’re at work, on vacation, or across the globe, SmartEye keeps you informed with timely, actionable alerts. This feature reduces crime by enabling quick responses and makes advanced surveillance accessible without the need for expensive apps or subscriptions.
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