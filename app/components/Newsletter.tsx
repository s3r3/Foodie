"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useStore } from "../store/useStore";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { isSubscribed, subscribeEmail } = useStore();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) subscribeEmail(email);
  };

  return (
    <section className="px-6 md:px-16 py-20 max-w-7xl mx-auto">
      <div className="relative bg-[#E7FAFE] rounded-[60px] overflow-hidden py-20 px-76 text-center">
        {/* Dekorasi Sayuran Melayang (Kiri) */}
        <motion.img
          initial={{ y: 20 }}
          animate={{ y: -20 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          src="/photo/hn1.png"
          className="absolute left-0 bottom-0 w-40 md:w-64 hidden lg:block"
          alt="decoration"
        />

        {/* Dekorasi Salad (Kanan) */}
        <motion.img
          initial={{ rotate: 0 }}
          animate={{ rotate: 10 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          src="/photo/hn2.png"
          className="absolute right-0 bottom-0 w-48 md:w-80 hidden lg:block"
          alt="salad"
        />

        {/* Konten Utama */}
        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-black"
          >
            Deliciousness to your inbox
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg leading-relaxed"
          >
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim.
          </motion.p>

          {/* Form Input */}
          <motion.form
            onSubmit={handleSubscribe}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center bg-white p-2 rounded-3xl shadow-sm max-w-lg mx-auto mt-10 gap-2"
          >
            <input
              type="email"
              placeholder="Your email address..."
              className="flex-1 px-6 py-4 outline-none bg-transparent text-black w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-black text-white px-10 py-4 rounded-2xl font-bold hover:bg-gray-800 transition-all w-full sm:w-auto"
            >
              {isSubscribed ? "Subscribed!" : "Subscribe"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
