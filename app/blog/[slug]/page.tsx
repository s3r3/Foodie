"use client";

import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Facebook, Twitter, Instagram, Timer, Utensils } from "lucide-react";
import Navbar from "@/app/components/nav";
import Lenis from "@studio-freight/lenis";
import { recipes } from "@/app/data/recipes";
import Link from "next/link";
import Newsletter from "@/app/components/Newsletter";
import { useParams } from "next/navigation";
import { blogPosts } from "@/app/data/blogData";
import Footer from "@/app/components/footer";

// Register GSAP Plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// --- Component: Navbar ---

// --- Main Page Component ---
export default function BlogPost() {
  const params = useParams();
  const slug = params?.slug as string | undefined;
  const post = blogPosts.find((p) => p.slug === slug) ?? blogPosts[0];
  const containerRef = useRef(null);
  const heroImageRef = useRef(null);
  const recommendedRecipes = recipes.slice(0, 4);
  useLayoutEffect(() => {
    // 1. Initialize Smooth Scroll (Lenis)
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // 2. Entrance Animation (Hero)
      tl.from(".nav-anim", { y: -30, opacity: 0, duration: 1 })
        .from(".title-anim", { y: 60, opacity: 0, duration: 1.2 }, "-=0.6")
        .from(
          ".meta-anim",
          { y: 20, opacity: 0, stagger: 0.1, duration: 0.8 },
          "-=0.8",
        )
        .from(
          heroImageRef.current,
          {
            scale: 1.2,
            clipPath: "inset(20% 20% 20% 20% round 60px)",
            duration: 2,
          },
          "-=1",
        );

      // 3. ScrollTrigger: Reveal Content
      gsap.from(".reveal-text", {
        scrollTrigger: {
          trigger: ".reveal-text",
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // 4. ScrollTrigger: Sidebar Icons Stagger
      gsap.from(".sidebar-icon", {
        scrollTrigger: {
          trigger: ".sidebar-icon",
          start: "top 90%",
        },
        x: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "back.out(1.7)",
      });
    }, containerRef);

    return () => {
      ctx.revert();
      lenis.destroy();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-white selection:bg-orange-100 selection:text-orange-600"
    >
      <Navbar />
      <article className="max-w-7xl mx-auto px-6 py-16 md:py-24 ">
        {/* Header */}
        <header className="text-center mb-16 pt-10">
          <h1 className="title-anim text-5xl md:text-7xl font-extrabold mb-10 tracking-tight leading-[1.1]">
            {post.title}
          </h1>

          <div className="meta-anim flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-lg border-2 border-white">
                <Image
                  src="https://i.pravatar.cc/150?u=john"
                  alt="Author"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-bold text-lg">{post.author}</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-gray-200"></div>
            <time className="text-gray-400 font-medium">{post.date}</time>
          </div>

          <p className="meta-anim mt-12 max-w-2xl mx-auto text-gray-500 text-lg leading-relaxed italic">
            {post.excerpt}
          </p>
        </header>

        {/* Hero Image Container */}
        <div
          ref={heroImageRef}
          className="relative w-full aspect-video md:h-162.5 rounded-[40px] md:rounded-[60px] overflow-hidden mb-20 shadow-2xl shadow-orange-100"
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content & Sidebar Grid */}
        <div className="flex md:grid-cols-12 gap-16">
          <section className="md:col-span-8 reveal-text flex flex-col gap-5">
            <section className=" flex flex-col">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                How did you start out in the food industry?
              </h2>
              <div className="prose prose-orange prose-lg text-gray-600 space-y-8 leading-loose">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur ac ultrices odio. Nulla at congue diam, at dignissim
                  turpis. Ut vehicula sed velit a faucibus. In feugiat
                  vestibulum velit vel pulvinar. Fusce id mollis ex.
                </p>
                <p className="border-l-4 border-orange-500 pl-6 py-2 font-medium text-gray-900 bg-gray-50 rounded-r-xl">
                  &quot;The secret to being a great chef isn&apos;t just the
                  recipe, it&apos;s the passion you pour into the pan while the
                  fire is high.&quot;
                </p>
                <p>
                  Praesent feugiat elementum ex ut suscipit. Integer efficitur,
                  sem ut convallis matti, libero diam sodales matti, velit nisl
                  porta augue, non hendrerit lorem nisi vel diam.
                </p>
              </div>
            </section>

            <section className="md:col-span-8 space-y-16  flex flex-col gap-10">
              {/* Q2 Section */}
              <div className="reveal-text">
                <h2 className="text-3xl font-bold mb-6">
                  What do you like most about your job?
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur ac ultrices odio. Nulla at congue diam, at dignissim
                  turpis. Ut vehicula sed velit a faucibus. In feugiat
                  vestibulum velit vel pulvinar. Fusce id mollis ex.
                </p>
              </div>

              {/* Q3 Section with Image */}
              <div className="reveal-text">
                <h2 className="text-3xl font-bold mb-6">
                  Do you cook at home on your days off?
                </h2>
                <div className="relative w-full h-100 rounded-4xl overflow-hidden mb-8 group">
                  <Image
                    src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1000"
                    alt="Cooking at home"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur ac ultrices odio. Nulla at congue diam, at dignissim
                  turpis. Ut vehicula sed velit a faucibus. In feugiat
                  vestibulum velit vel pulvinar.
                </p>
              </div>

              {/* Q4 Section */}
              <div className="reveal-text">
                <h2 className="text-3xl font-bold mb-6">
                  What would your advice be to young people looking to get their
                  foot in the door?
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur ac ultrices odio. Nulla at congue diam, at dignissim
                  turpis. Ut vehicula sed velit a faucibus. In feugiat
                  vestibulum velit vel pulvinar.
                </p>
              </div>

              {/* Big Quote Block */}
              <div className="reveal-text py-12 px-8 md:px-16 bg-linear-to-br from-gray-50 to-orange-50/30 rounded-[40px] border border-orange-100/50 my-12">
                <blockquote className="text-2xl md:text-4xl font-extrabold italic leading-tight text-gray-900">
                  &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur ac ultrices odio.&quot;
                </blockquote>
              </div>

              {/* Q5 Section */}
              <div className="reveal-text">
                <h2 className="text-3xl font-bold mb-6">
                  What is the biggest misconception that people have about being
                  a professional chef?
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur ac ultrices odio. Nulla at congue diam, at dignissim
                  turpis. Ut vehicula sed velit a faucibus. In feugiat
                  vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent
                  feugiat elementum ex ut suscipit.
                </p>
              </div>
            </section>
          </section>

          <aside className="md:col-span-4 flex flex-col items-center md:items-end gap-10">
            <div className="text-center md:text-right">
              <h4 className="sidebar-icon font-black text-xs uppercase tracking-[0.3em] text-gray-400 mb-8">
                Share this story
              </h4>
              <div className="flex flex-col gap-10 items-center">
                <button className="sidebar-icon group p-4 bg-gray-50 rounded-full hover:bg-black hover:text-white transition-all duration-300">
                  <Facebook size={22} />
                </button>
                <button className="sidebar-icon group p-4 bg-gray-50 rounded-full hover:bg-black hover:text-white transition-all duration-300">
                  <Twitter size={22} />
                </button>
                <button className="sidebar-icon group p-4 bg-gray-50 rounded-full hover:bg-black hover:text-white transition-all duration-300">
                  <Instagram size={22} />
                </button>
              </div>
            </div>
          </aside>
        </div>
        <Newsletter />
        <section className="mt-32 mb-20">
          <h2 className="text-4xl font-bold text-center mb-16">
            You may like these recipe too
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Kamu bisa menggunakan array .map dari data resep yang sudah ada */}
            {recommendedRecipes.map((r) => (
              <Link
                key={r.slug}
                href={`/recipes/${r.slug}`}
                className="space-y-4 group cursor-pointer"
              >
                <div className="relative aspect-4/3 rounded-[30px] overflow-hidden">
                  <Image
                    src={r.image}
                    alt={r.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h4 className="font-bold text-lg leading-tight line-clamp-2 h-14">
                  {r.title}
                </h4>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                    <Timer size={16} /> {r.time}
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                    <Utensils size={16} /> {r.category}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </article>

      {/* Footer Spacer */}
      <Footer/>
    </div>
  );
}
