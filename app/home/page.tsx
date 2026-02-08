"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PlayCircle, Timer, Utensils, Heart } from "lucide-react";
import Navbar from "../components/nav";
import { useStore } from "../store/useStore";
import ChefSection from "./chefSection";
import InstagramSection from "./instagramSection";
import RecipeGridTwo from "./RecipeGridTwo";
import Newsletter from "../components/Newsletter";
import Footer from "../components/footer";
import Link from "next/link";
import { recipes } from "../data/recipes";

gsap.registerPlugin(ScrollTrigger);

const catagories = [
  {
    id: 1,
    name: "Breakfast",
    image: "/photo/h2.png",
    bgColor: "bg-gradient-to-b from-gray-50 to-gray-100",
  },
  {
    id: 2,
    name: "Vegan",
    image: "/photo/h3.png",
    bgColor: "bg-gradient-to-b from-green-50 to-green-100",
  },
  {
    id: 3,
    name: "Meat",
    image: "/photo/h4.png",
    bgColor: "bg-gradient-to-b from-red-50 to-red-100",
  },
  {
    id: 4,
    name: "Dessert",
    image: "/photo/h5.png",
    bgColor: "bg-gradient-to-b from-orange-50 to-orange-100",
  },
  {
    id: 5,
    name: "Lunch",
    image: "/photo/h6.png",
    bgColor: "bg-gradient-to-b from-blue-50 to-blue-100",
  },
  {
    id: 6,
    name: "Chocolate",
    image: "/photo/h7.png",
    bgColor: "bg-gradient-to-b from-gray-50 to-gray-100",
  },
];

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const heroRef = useRef<HTMLElement | null>(null);
  const badgeRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef(null);
  const featuredRecipe = recipes[0]; // Refs untuk elemen melayang
  const meatRef = useRef(null);
  const onionRef = useRef(null);
  const tomatoRef = useRef(null);
  const vegRef = useRef(null);
  const { activeCategory, setActiveCategory, favorites, toggleFavorite } =
    useStore();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // =========================
      // Badge parallax + rotate
      // =========================
      gsap.to(badgeRef.current, {
        y: -100,
        rotation: 360,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // =========================
      // Parallax image utama
      // =========================
      gsap.to(imageRef.current, {
        y: 50,
        scrollTrigger: {
          trigger: heroRef.current,
          scrub: true,
        },
      });

      // =========================
      // Title & paragraph fade in
      // =========================
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      );

      gsap.fromTo(
        paragraphRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power3.out" },
      );

      // =========================
      // Item makanan
      // =========================
      const items = [
        meatRef.current,
        onionRef.current,
        tomatoRef.current,
        vegRef.current,
      ];

      // Parallax saat scroll
      items.forEach((item, index) => {
        gsap.to(item, {
          y: -100 * (index + 1) * 0.2,
          rotation: index % 2 === 0 ? 20 : -20,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      });

      // Floating animation (tanpa scroll)
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
      ref={heroRef}
      className="relative min-h-[90vh] flex items-center px-6 md:px-16 pt-20 overflow-hidden flex-col"
    >
      <Navbar />
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 bg-[#E7FAFE] rounded-[40px] overflow-hidden relative">
        {/* Konten Kiri */}
        <div className="p-8 md:p-16 flex flex-col justify-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 bg-white w-fit px-4 py-2 rounded-full shadow-sm"
          >
            <span className="text-lg">📜</span>
            <span className="font-bold text-sm">Hot Recipes</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold leading-tight text-black"
          >
            {featuredRecipe?.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-500 max-w-md leading-relaxed"
          >
            {featuredRecipe?.description}
          </motion.p>

          <div className="flex gap-4">
            <div className="flex items-center gap-2 bg-black/5 px-4 py-2 rounded-full text-sm font-medium">
              <Timer size={18} /> {featuredRecipe?.time}
            </div>
            <div className="flex items-center gap-2 bg-black/5 px-4 py-2 rounded-full text-sm font-medium">
              <Utensils size={18} /> {featuredRecipe?.category}
            </div>
          </div>

          {/* Ingredients preview */}
          <div className="mt-6 flex flex-wrap gap-2">
            {featuredRecipe?.ingredients?.main?.slice(0, 4).map((ing, i) => (
              <span
                key={i}
                className="bg-white/80 text-sm px-3 py-1 rounded-full shadow-sm text-gray-700"
              >
                {ing}
              </span>
            ))}
          </div>

          <div className="pt-10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src="https://i.pravatar.cc/150?u=john"
                  alt="Author"
                  width={50}
                  height={50}
                />
              </div>
              <div>
                <p className="font-bold text-sm">{featuredRecipe?.author}</p>
                <p className="text-xs text-gray-400">{featuredRecipe?.date}</p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-8 py-4 rounded-2xl flex items-center gap-3 font-bold"
            >
              View Recipes <PlayCircle size={20} />
            </motion.button>
          </div>
        </div>

        {/* Konten Kanan (Visual) */}
        <div className="relative flex items-center justify-center p-8 bg-white lg:bg-transparent">
          {/* Badge Bulat (Handpicked) */}
          <div
            ref={badgeRef}
            className="absolute top-10 left-10 z-10 w-32 h-32 hidden md:block"
          >
            <Image
              src="/thumb.svg"
              alt="Handpicked"
              className="w-full h-full object-contain"
              width={50}
              height={50}
            />
          </div>

          <div ref={imageRef} className="relative z-0">
            <Image
              src="/photo/h1.jpg" // Pastikan gambar piring tanpa background/transparan
              alt="Chicken Wings"
              width={600}
              height={600}
              className="object-contain drop-shadow-2xl "
            />
          </div>
        </div>
      </div>
      {/* Bagian Categories */}
      <section className="px-6 md:px-16 py-20 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl font-bold text-black tracking-tight">
            Categories
          </h2>
          <button className="bg-[#E7FAFE] text-black font-bold py-4 px-7 rounded-2xl hover:bg-sky-100 transition-colors">
            View All Categories
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {catagories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setActiveCategory(cat.name)}
              className={`cursor-pointer rounded-[30px] p-8 flex flex-col items-center justify-center gap-4 transition-all duration-300 ${cat.bgColor} ${
                activeCategory === cat.name
                  ? "ring-2 ring-black shadow-lg"
                  : "shadow-sm"
              }`}
            >
              <div className="relative w-20 h-20 flex items-center justify-center">
                {/* Efek bayangan lembut di bawah icon makanan */}
                <div className="absolute inset-0 bg-black/5 blur-xl rounded-full translate-y-4" />
                <Image
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-contain relative z-10"
                  width={50}
                  height={50}
                />
              </div>
              <span className="font-bold text-black">{cat.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex flex-col items-center justify-center py-10 bg-white p-4">
          <h1
            ref={titleRef}
            className="text-5xl font-extrabold text-gray-900 mb-4 text-center leading-tight opacity-0" // `opacity-0` agar GSAP bisa mengontrol visibilitas awal
          >
            Simple and tasty recipes
          </h1>
          <p
            ref={paragraphRef}
            className="text-lg text-gray-600 max-w-2xl text-center leading-relaxed opacity-0" // `opacity-0` agar GSAP bisa mengontrol visibilitas awal
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad
            minim
          </p>
        </div>
      </section>

      {/* Bagian Popular Recipes - Tambahan Baru */}
      <section className="px-6 md:px-16 py-20 max-w-7xl mx-auto"></section>
      <section className="px-6 md:px-16 py-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe, index) => {
            if (recipe.isAd) {
              return (
                <div
                  key={`ad-${index}`}
                  className="rounded-[20px] overflow-hidden shadow-md"
                >
                  <div className="relative w-full h-64">
                    <Image
                      src="/images/ad-bg.jpg"
                      alt="Ad background"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 bg-green-900/40 text-white text-center">
                    <p className="italic mb-2">
                      Don&apos;t forget to eat healthy food
                    </p>
                    <div className="w-40 h-40 mx-auto mb-2">
                      <Image
                        src="/images/healthy-plate.png"
                        alt="Healthy"
                        width={160}
                        height={160}
                        className="object-contain"
                      />
                    </div>
                    <p className="text-sm opacity-80">www.foodieland.com</p>
                  </div>
                </div>
              );
            }

            const isFavorite = favorites.includes(recipe.id);

            return (
              <Link
                key={recipe.id}
                href={`/recipes/${recipe.slug || recipe.id}`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-linear-to-b from-white to-[#E7FAFE]/30 rounded-[30px] p-4 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow group cursor-pointer h-full"
                >
                  <div className="relative w-full h-56 rounded-[20px] overflow-hidden">
                    <Image
                      src={recipe.image ?? "/r1.jpg"}
                      alt={recipe.title ?? "Recipe"}
                      width={800}
                      height={560}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    <button
                      onClick={(e) => {
                        e.preventDefault(); // Mencegah navigasi Link saat klik heart
                        e.stopPropagation(); // Mencegah event bubbling
                        toggleFavorite(recipe.id);
                      }}
                      className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md z-10"
                    >
                      <Heart
                        size={20}
                        className={
                          isFavorite
                            ? "fill-red-500 text-red-500"
                            : "text-gray-300"
                        }
                      />
                    </button>
                  </div>

                  <div className="px-2 space-y-3">
                    <h3 className="font-bold text-xl leading-tight line-clamp-2 h-14 group-hover:text-orange-500 transition-colors">
                      {recipe.title}
                    </h3>
                    <div className="flex gap-4 pb-2">
                      <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                        <Timer size={16} /> {recipe.time}
                      </div>
                      <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                        <Utensils size={16} /> {recipe.category}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </section>
      <ChefSection />
      <InstagramSection />
      <RecipeGridTwo />
      <Newsletter />
      <Footer />
    </section>
  );
};

export default Hero;
