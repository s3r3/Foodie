"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const ChefSection = () => {
  const containerRef = useRef(null);
  const chefRef = useRef(null);
  // Refs untuk elemen melayang
  const meatRef = useRef(null);
  const onionRef = useRef(null);
  const tomatoRef = useRef(null);
  const vegRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect saat scroll
      const items = [
        meatRef.current,
        onionRef.current,
        tomatoRef.current,
        vegRef.current,
      ];

      items.forEach((item, index) => {
        gsap.to(item, {
          y: -100 * (index + 1) * 0.2, // Kecepatan berbeda tiap item
          rotation: index % 2 === 0 ? 20 : -20,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      });

      // Animasi floating halus (Auto-animation tanpa scroll)
      items.forEach((item) => {
        gsap.to(item, {
          y: "+=15",
          x: "+=10",
          duration: 2 + Math.random(),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="px-6 md:px-16 py-24 max-w-7xl mx-auto overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Konten Teks */}
        <div className="space-y-8 order-2 lg:order-1">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold leading-tight"
          >
            Everyone can be a <br /> chef in their own kitchen
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-500 text-lg max-w-lg leading-relaxed"
          >
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-xl hover:shadow-black/20"
          >
            Learn More
          </motion.button>
        </div>

        {/* Konten Visual (Chef & Floating Items) */}
        <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end h-125 md:h-150">
          {/* Background Shape */}
          <div className="absolute bottom-0 right-0 w-[90%] h-[80%] bg-[#E7FAFE] rounded-[40px] -z-10" />

          {/* Main Chef Image */}
          <div ref={chefRef} className="relative z-10 h-full">
            <Image
              src="/photo/ha1.png"
              alt="Chef"
              width={500} // Specify the width of the image
              height={500} // Specify the height of the image
              className="h-full w-auto object-contain scale-110 origin-bottom"
            />
          </div>

          {/* Floating Ingredients */}
          <Image
            ref={meatRef}
            src="/photo/ha2.png"
            width={80} // Specify the width of the image
            height={80} // Specify the height of the image
            className="absolute top-20 left-10 w-20 z-20"
            alt="meat"
          />
          <Image
            ref={onionRef}
            src="/photo/ha3.png"
            width={64} // Specify the width of the image
            height={64} // Specify the height of the image
            className="absolute top-24 right-20 w-16 z-20"
            alt="onion"
          />
          <Image
            ref={tomatoRef}
            src="/photo/ha4.png"
            width={64} // Specify the width of the image
            height={64} // Specify the height of the image
            className="absolute bottom-32 left-0 w-16 z-20"
            alt="tomato"
          />
          <Image
            ref={vegRef}
            src="/photo/ha5.png"
            width={80} // Specify the width of the image
            height={80} // Specify the height of the image
            className="absolute top-40 right-0 w-20 z-20"
            alt="leaf"
          />
        </div>
      </div>
    </section>
  );
};

export default ChefSection;
