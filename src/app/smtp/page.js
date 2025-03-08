"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function SmtpPage() {
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
            SMTP Server
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            The SMTP server drives SmartEye’s notification system, delivering intruder images to your inbox with blazing speed and rock-solid reliability.
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
              The Simple Mail Transfer Protocol (SMTP) server is the final link in SmartEye’s security chain. After the Raspberry Pi captures an intruder’s image, it taps into the SMTP server using Python scripts. The system quickly composes an email—complete with the image as an attachment—and sends it to your registered email address. This process happens in a flash, ensuring you’re alerted almost instantly after detection, all powered by the Pi’s internet connection.
            </p>
          </div>
          <div className="bg-midnight-blue p-6 rounded-2xl shadow-glow-md">
            <h2 className="text-2xl font-display font-semibold">Key Benefits</h2>
            <ul className="text-gray-400 mt-4 list-disc list-inside">
              <li>
                <strong>Swift Delivery:</strong> Fast, reliable emails reach you in seconds.
              </li>
              <li>
                <strong>No Extra Gear:</strong> Runs entirely on the Raspberry Pi.
              </li>
              <li>
                <strong>Global Reach:</strong> Monitor remotely from anywhere in the world.
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
              src="/smtp.png" 
              alt="SmartEye SMTP Email Delivery"
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
              The SMTP server leverages Python’s `smtplib` library, integrated into the Raspberry Pi, to handle email transmission. It connects to a standard SMTP service—like Gmail’s server at `smtp.gmail.com`—using secure credentials (username and app-specific password). The email includes a clear subject line (e.g., "SmartEye: Intruder Alert"), the captured image as an attachment, and a timestamped message, ensuring you have all the details at a glance.
            </p>
            <p>
              Optimized for speed, the process takes less than five seconds from detection to delivery, thanks to the Pi’s efficient scripting and Wi-Fi capabilities. No additional hardware is needed—just an internet connection—making this a lean, powerful solution for real-time notifications.
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
            The SMTP server is the lifeline that keeps you connected to your SmartEye system, delivering critical alerts wherever you are. By providing fast, reliable notifications without extra costs or complexity, it makes advanced security accessible to everyone. This feature ensures you’re always in control, turning detection into action and enhancing safety with every email sent.
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