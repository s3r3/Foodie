"use client";

import React, { useLayoutEffect, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";

import Navbar from "../components/nav";
import Newsletter from "../components/Newsletter";
import Footer from "../components/footer";

/* ========================= */
/* Reusable Inputs */
/* ========================= */

const Label = ({ children }: { children: React.ReactNode }) => (
  <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400">
    {children}
  </label>
);

const baseInput =
  "w-full px-6 py-4 rounded-2xl border border-gray-200 bg-white text-sm placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all";

const TextInput = ({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) => (
  <div className="flex flex-col gap-3">
    <Label>{label}</Label>
    <input type={type} placeholder={placeholder} className={baseInput} />
  </div>
);

const SelectInput = ({ label }: { label: string }) => (
  <div className="flex flex-col gap-3">
    <Label>{label}</Label>

    <div className="relative">
      <select
        className={`${baseInput} appearance-none cursor-pointer text-gray-600`}
      >
        <option>Advertising</option>
        <option>Partnership</option>
        <option>Cooking Class</option>
      </select>

      <svg
        className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"
        width="12"
        height="8"
        viewBox="0 0 12 8"
      >
        <path
          d="M1 1.5L6 6.5L11 1.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </div>
);

const TextAreaInput = ({ label }: { label: string }) => (
  <div className="flex flex-col gap-3 md:col-span-2">
    <Label>{label}</Label>
    <textarea
      rows={6}
      placeholder="Enter your message..."
      className={`${baseInput} rounded-3xl resize-none py-5`}
    />
  </div>
);

/* ========================= */
/* Page */
/* ========================= */

export default function ContactPage() {
  const pageRef = useRef(null);

  /* ===== Lenis ===== */

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08 });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  /* ===== GSAP ===== */

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-anim", {
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 0.9,
        ease: "power3.out",
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={pageRef}
      className="min-h-screen bg-gradient-to-b from-white to-gray-50"
    >
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        {/* Title */}
        <div className="text-center mb-20 contact-anim">
          <h1 className="text-5xl md:text-6xl font-extrabold">Contact Us</h1>
          <p className="mt-4 text-gray-500 text-sm">
            Send us a message and we’ll reply soon.
          </p>
        </div>

        {/* ===== GRID: FORM LEFT, IMAGE RIGHT ===== */}

        <div className="grid grid-cols-2 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT — FORM */}

          {/* RIGHT — IMAGE */}
          <div className="lg:col-span-5 contact-anim flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-4xl overflow-hidden shadow-xl bg-sky-50">
              <Image
                src="/photo/about.png"
                alt="Chef"
                fill
                priority
                className="object-cover object-bottom"
              />
            </div>
          </div>
          <div className="lg:col-span-7 contact-anim">
            <div className="bg-white rounded-[36px] p-8 md:p-12 shadow-2xl border border-gray-100">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <TextInput label="Name" placeholder="Enter your name..." />
                <TextInput
                  label="Email"
                  placeholder="Email address..."
                  type="email"
                />
                <TextInput label="Subject" placeholder="Subject..." />
                <SelectInput label="Enquiry Type" />
                <TextAreaInput label="Message" />

                <div className="md:col-span-2 pt-4">
                  <button
                    type="submit"
                    className="bg-black text-white px-16 py-5 rounded-2xl font-bold hover:bg-orange-600 transition-all active:scale-95 text-sm"
                  >
                    Submit Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
}
