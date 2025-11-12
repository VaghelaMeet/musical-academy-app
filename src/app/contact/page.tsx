"use client";

import React, { FormEvent, useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { motion } from "motion/react";

function MusicSchoolContactUs() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitted:", { email, message });
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-950 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Animated background beams */}
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0 opacity-70" />

      <div className="max-w-2xl mx-auto px-6 pt-40 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-5xl md:text-6xl font-extrabold tracking-tight bg-linear-to-r from-teal-400 to-violet-500 bg-clip-text text-transparent mb-6"
        >
          Contact Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-gray-400 max-w-lg mx-auto mb-10"
        >
          Have questions about our music programs or classes? Fill out the form
          below and we’ll get back to you soon!
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="backdrop-blur-xl bg-white/10 p-8 rounded-2xl border border-white/10 shadow-xl space-y-6"
        >
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">
              Email Address :
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@gmail.com"
              className="w-full p-4 rounded-xl bg-black/40 border border-gray-700 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/50 transition-all duration-300 placeholder:text-gray-500"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">
              Message :
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              rows={5}
              className="w-full p-4 rounded-xl bg-black/40 border border-gray-700 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/50 transition-all duration-300 placeholder:text-gray-500 resize-none"
              required
            ></textarea>
          </div>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(20, 184, 166, 0.6)",
            }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-3 rounded-xl bg-linear-to-r from-teal-500 to-violet-500 font-semibold tracking-wide text-white hover:from-violet-500 hover:to-teal-500 transition-all duration-250"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
}

export default MusicSchoolContactUs;
