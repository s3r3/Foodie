"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { blogPosts, tastyRecipes } from "../data/blogData";
import Newsletter from "../components/Newsletter";
import Footer from "../components/footer";
import Link from "next/link";

const BlogPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animasi masuk untuk judul dan artikel
      gsap.from(".animate-fade", {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="bg-white min-h-screen pt-28 pb-20">
      {/* SECTION: HEADER & SEARCH (Sesuai gambar image_2b93a1.png) */}
      <section className="px-6 max-w-4xl mx-auto text-center mb-20">
        <h1 className="animate-fade text-5xl md:text-6xl font-bold mb-6 text-black">
          Blog & Article
        </h1>
        <p className="animate-fade text-gray-500 text-lg mb-10 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="animate-fade relative max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search article, news or recipe..."
            className="w-full py-5 px-8 rounded-3xl border border-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-black/5 text-sm"
          />
          <button className="absolute right-2 top-2 bottom-2 bg-black text-white px-10 rounded-[18px] font-bold text-sm hover:bg-gray-800 transition-all">
            Search
          </button>
        </div>
      </section>

      {/* SECTION: MAIN CONTENT (Sesuai gambar image_2bf4bf.jpg) */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* KOLOM KIRI: DAFTAR ARTIKEL */}
        <div className="lg:col-span-2 space-y-10">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <div className="animate-fade flex flex-col md:flex-row gap-8 items-start group cursor-pointer">
                {/* Gambar Artikel */}
                <div className="relative w-full md:w-72 aspect-16/10 rounded-3xl overflow-hidden shrink-0 shadow-sm">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Info Artikel */}
                <div className="flex flex-col h-full justify-center py-2">
                  <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-orange-500 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full overflow-hidden relative">
                        <Image
                          src="https://i.pravatar.cc/100"
                          alt="author"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="text-xs font-bold text-black">
                        {post.author}
                      </span>
                    </div>
                    <div className="w-px h-4 bg-gray-200" />
                    <span className="text-xs text-gray-400 font-medium">
                      {post.date}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}

          {/* PAGINATION (Sesuai gambar image_2bf4bf.jpg) */}
          <div className="pt-12 flex gap-2 justify-center  ">
            {[1, 2, 3, 4, 5, "...", 10].map((page, i) => (
              <button
                key={i}
                className={`w-12 h-12 flex items-center justify-center rounded-xl font-bold border transition-all ${
                  page === 1
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-gray-100 hover:bg-gray-50"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>

        {/* KOLOM KANAN: SIDEBAR */}
        <aside className="space-y-12">
          {/* TASTY RECIPES */}
          <div>
            <h2 className="text-2xl font-bold mb-8 text-black tracking-tight">
              Tasty Recipes
            </h2>
            <div className="space-y-6">
              {tastyRecipes.map((recipe) => (
                <div
                  key={recipe.id}
                  className="flex gap-4 items-center group cursor-pointer"
                >
                  <div className="relative w-28 h-20 rounded-2xl overflow-hidden shrink-0">
                    <Image
                      src={recipe.image}
                      alt={recipe.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-black line-clamp-2 leading-snug group-hover:text-orange-500 transition-colors">
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

          {/* AD BANNER (Sesuai gambar image_6890d9.png) */}
          <div className="relative rounded-4xl overflow-hidden bg-[#05422C] p-8 text-center aspect-4/5 flex flex-col items-center justify-between">
            {/* Texture overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-size-[24px_24px]" />

            <p className="relative z-10 text-white italic font-serif text-xl leading-snug mt-4">
              Don&apos;t forget to eat <br /> healthy food
            </p>

            <div className="relative z-10 w-full aspect-square max-w-50">
              <Image
                src="/photo/healthy-plate.png"
                alt="Healthy"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>

            <p className="relative z-10 text-white/40 text-[10px] tracking-[0.3em] font-bold uppercase">
              www.foodieland.com
            </p>
          </div>
        </aside>
      </section>
      <Newsletter />
      <section className="w-full flex  justify-center">
        <Footer />
      </section>
    </main>
  );
};

export default BlogPage;
