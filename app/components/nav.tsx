"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useNavStore } from '../store/useStore';

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Navbar = () => {
  const { isOpen, toggleMenu } = useNavStore();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Recipes', href: '/recipes' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'About us', href: '/about' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white border-b border-gray-100 z-50 px-6 py-4 md:px-16">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-tight italic"
        >
          Foodieland<span className="text-orange-500">.</span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="relative group">
              <span className="text-gray-800 font-medium hover:text-black transition-colors">
                {link.name}
              </span>
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"
              />
            </Link>
          ))}
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex items-center space-x-5">
          <motion.div whileHover={{ scale: 1.2 }} className="cursor-pointer"><FacebookIcon /></motion.div>
          <motion.div whileHover={{ scale: 1.2 }} className="cursor-pointer"><TwitterIcon /></motion.div>
          <motion.div whileHover={{ scale: 1.2 }} className="cursor-pointer"><InstagramIcon /></motion.div>
        </div>

        {/* Mobile Toggle */}
        <button onClick={toggleMenu} className="md:hidden text-2xl">
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu (Optional with Zustand) */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-white p-6 shadow-lg flex flex-col space-y-4"
        >
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} onClick={toggleMenu}>{link.name}</Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;