"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { blogPosts, tastyRecipes } from "@/app/data/blogData";
import Navbar from "@/app/components/nav";
import Newsletter from "@/app/components/Newsletter";
import Footer from "@/app/components/footer";
import gsap from "gsap";

const BlogDetail = () => {
  const { slug } = useParams();

  // Cari data post berdasarkan slug
  const post = blogPosts.find((p) => p.slug === slug) || blogPosts[0];

  const mainRef = useRef(null);

  useEffect(() => {
    gsap.from(".animate-up", {
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.2,
      ease: "power4.out",
    });
  }, []);

  return (
    <main ref={mainRef} className="bg-white min-h-screen pt-32">
      <Navbar />

      {/* HEADER ARTIKEL (Sesuai image_7e3f7c.jpg) */}
      <section className="max-w-4xl mx-auto px-6 text-center mb-16">
        <h1 className="animate-up text-4xl md:text-6xl font-bold mb-8 leading-tight">
          {post.title}
        </h1>
        <div className="animate-up flex items-center justify-center gap-6 mb-12">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden relative">
              <Image
                src="https://i.pravatar.cc/100"
                alt="author"
                fill
                className="object-cover"
              />
            </div>
            <span className="font-bold text-sm">{post.author}</span>
          </div>
          <div className="w-px h-6 bg-gray-200" />
          <span className="text-gray-400 text-sm font-medium">{post.date}</span>
        </div>
        <p className="animate-up text-gray-500 text-lg leading-relaxed">
          {post.excerpt}
        </p>
      </section>

      {/* GAMBAR UTAMA (Sesuai image_7e3f7c.jpg) */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 mb-20 animate-up">
        <div className="relative w-full aspect-21/9 rounded-[40px] overflow-hidden shadow-xl">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* KONTEN UTAMA & SIDEBAR */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-3 gap-16 mb-32">
        {/* KOLOM KIRI: DIRECTIONS & INGREDIENTS (Sesuai image_6917b9.png & image_6890d9.png) */}
        <div className="lg:col-span-2 space-y-20">
          {/* Ingredients Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Ingredients</h2>
            <div className="space-y-6">
              <h3 className="text-xl font-bold">For main dish</h3>
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 py-4 border-b border-gray-100"
                >
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${i === 1 ? "bg-black border-black" : "border-gray-200"}`}
                  >
                    {i === 1 && (
                      <div className="w-2 h-2 bg-white rounded-full" />
                    )}
                  </div>
                  <span
                    className={`text-lg ${i === 1 ? "text-gray-300 line-through" : "text-black"}`}
                  >
                    Lorem ipsum dolor sit amet
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Directions Section */}
          <div className="space-y-12">
            <h2 className="text-3xl font-bold">Directions</h2>
            {[1, 2, 3].map((step) => (
              <div key={step} className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full border-2 border-gray-200 mt-1 shrink-0" />
                  <h3 className="text-xl font-bold">
                    {step}. Lorem ipsum dolor sit amet
                  </h3>
                </div>
                <p className="text-gray-500 leading-relaxed pl-10">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt.
                </p>
                {step === 1 && (
                  <div className="relative w-full aspect-video rounded-[30px] overflow-hidden ml-10">
                    <Image
                      src="/photo/cooking.jpg"
                      alt="cooking"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* SIDEBAR (Sesuai image_6890d9.png) */}
        <aside className="space-y-16">
          <div>
            <h2 className="text-2xl font-bold mb-8">Other Recipe</h2>
            <div className="space-y-8">
              {tastyRecipes.map((recipe) => (
                <div
                  key={recipe.id}
                  className="flex gap-4 group cursor-pointer"
                >
                  <div className="relative w-32 h-24 rounded-2xl overflow-hidden shrink-0">
                    <Image
                      src={recipe.image}
                      alt={recipe.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="font-bold text-sm leading-tight group-hover:text-orange-500 transition-colors">
                      {recipe.title}
                    </h4>
                    <p className="text-[11px] text-gray-400 mt-2 font-medium">
                      By {recipe.author}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ad Banner Hijau */}
          <div className="relative rounded-[40px] overflow-hidden bg-[#05422C] p-8 text-center aspect-4/5 flex flex-col items-center justify-between">
            <p className="text-white italic text-lg mt-4">
              Don&apos;t forget to eat healthy food
            </p>
            <div className="relative w-40 h-40">
              <Image
                src="/photo/healthy-plate.png"
                alt="Healthy"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-white/40 text-[10px] tracking-widest uppercase">
              www.foodieland.com
            </p>
          </div>
        </aside>
      </section>

      {/* RELATED RECIPES (Sesuai image_7317aa.png) */}
      <section className="bg-white py-20 border-t border-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-16 text-center">
          <h2 className="text-4xl font-bold mb-16">
            You may like these recipe too
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-left group cursor-pointer">
                <div className="relative aspect-square rounded-[30px] overflow-hidden mb-4">
                  <Image
                    src={`/photo/r${i}.jpg`}
                    alt="recipe"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                    <span className="text-red-500">❤️</span>
                  </div>
                </div>
                <h4 className="font-bold text-lg mb-4 line-clamp-2">
                  Mixed Tropical Fruit Salad
                </h4>
                <div className="flex gap-4 text-xs font-bold text-gray-400">
                  <span className="flex items-center gap-1">⏱️ 30 Min</span>
                  <span className="flex items-center gap-1">🍴 Healthy</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </main>
  );
};

export default BlogDetail;
