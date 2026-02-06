"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-6 md:px-16 py-12 max-w-7xl mx-16 mt-20">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 pb-12 px-50">
        <div className="max-w-xs">
          <h2 className="text-2xl font-bold italic mb-4">Foodieland<span className="text-orange-500">.</span></h2>
          <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor.</p>
        </div>

        <div className="flex flex-wrap gap-x-10 gap-y-4 font-semibold text-gray-800">
          <Link href="/recipes" className="hover:text-orange-500 transition-colors">Recipes</Link>
          <Link href="/blog" className="hover:text-orange-500 transition-colors">Blog</Link>
          <Link href="/contact" className="hover:text-orange-500 transition-colors">Contact</Link>
          <Link href="/about" className="hover:text-orange-500 transition-colors">About us</Link>
        </div>
      </div>

      <div className="w-full h-px bg-gray-100" />

      <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="hidden md:block w-32" /> 

        <p className="text-gray-400 text-sm">
          © {currentYear} Flowbase. Powered by <span className="text-orange-500 font-bold">Webflow</span>
        </p>

        <div className="flex items-center space-x-6">
          {/* Ikon Sosial Menggunakan Lucide */}
          <motion.a whileHover={{ scale: 1.1 }} href="#" className="text-black hover:text-orange-500 transition-colors">
            <Facebook size={20} />
          </motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href="#" className="text-black hover:text-orange-500 transition-colors">
            <Twitter size={20} />
          </motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href="#" className="text-black hover:text-orange-500 transition-colors">
            <Instagram size={20} />
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;