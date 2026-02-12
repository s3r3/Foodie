"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { InstagramPost } from "@/app/components/instagramPost";
import { Instagram } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const posts = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800",
    caption:
      "The vegetable dishes need to have certain vitamin for those people",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800",
    caption:
      "Sweet food can bring someone into happiness as long as they don't eat too much",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1523986371872-9d3ba2e2f0b2?q=80&w=800",
    caption:
      "What are you doing before start cooking? prepare the tools or ingredients?",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800",
    caption:
      "Steak never be wrong, it's suitable for you who want romantic dinner",
  },
];

const InstagramSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.from(".ig-title", {
      opacity: 0,
      y: 30,
      duration: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
      },
    });

    gsap.from(".ig-post", {
      opacity: 0,
      scale: 0.9,
      stagger: 0.2,
      duration: 0.8,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 60%",
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 px-6 md:px-16 bg-linear-to-b from-white to-[#E7FAFE]"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <div className="ig-title space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Check out @foodieland on Instagram
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim.
          </p>
        </div>

        {/* Grid Postingan */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {posts.map((post) => (
            <div key={post.id} className="ig-post">
              <InstagramPost {...post} />
            </div>
          ))}
        </div>

        {/* Tombol Visit */}
        <button className="bg-black text-white px-8 py-4 rounded-2xl flex items-center gap-3 font-bold mx-auto hover:bg-gray-800 transition-colors">
          Visit Our Instagram <Instagram size={20} />
        </button>
      </div>
    </section>
  );
};

export default InstagramSection;
