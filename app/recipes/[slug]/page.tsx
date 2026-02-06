"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Printer,
  Share2,
  Timer,
  Utensils,
  Clock,
  CheckCircle2,
  Circle,
} from "lucide-react";
import { useStore } from "@/app/store/useStore";
import Image from "next/image";
import ShareModal from "@/app/components/ShareModal";
import Newsletter from "@/app/components/Newsletter";
import Footer from "@/app/components/footer";

const RecipeDetailPage = ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { checkedIngredients, toggleIngredient } = useStore();
  const { checkedSteps, toggleStep } = useStore();
  const { setShareModalOpen } = useStore();
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const isStepDone = (id: number) =>
    checkedSteps.includes(`${slug}-step-${id}`);
  // Di dalam komponen RecipeDetailPage
  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    setShareModalOpen(true);
  };
  const steps = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
      image: "/images/cooking-step.jpg", // Gambar di bawah langkah 1
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    },
  ];
  const otherRecipes = [
    {
      title: "Chicken Meatball with Creamy Chees...",
      author: "Andreas Paula",
      image: "/r5.jpg",
    },
    {
      title: "The Creamiest Creamy Chicken and...",
      author: "Andreas Paula",
      image: "/r9.jpg",
    },
    {
      title: "The Best Easy One Pot Chicken and Rice",
      author: "Andreas Paula",
      image: "/r8.jpg",
    },
  ];
  // `params` is a Promise in client components — unwrap with React.use()
  const { slug } = React.use(params) as { slug: string };
  const ingredients = {
    main: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
    ],
    sauce: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"],
  };
  const isChecked = (key: string) =>
    checkedIngredients.includes(`${slug}-${key}`);
  // Animasi Varians
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <main className="pt-28 pb-20 px-6 md:px-16 max-w-7xl mx-auto">
      {/* Header Section */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <motion.div {...fadeIn}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Health Japanese Fried Rice
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-gray-500">
            <div className="flex items-center gap-2 border-r pr-6 border-gray-200">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src="https://i.pravatar.cc/150?u=john"
                  alt="Author"
                  width={150}
                  height={150}
                />{" "}
              </div>
              <div>
                <p className="text-black font-bold text-sm">John Smith</p>
                <p className="text-xs">15 March 2022</p>
              </div>
            </div>
            <div className="flex items-center gap-2 border-r pr-6 border-gray-200">
              <Timer size={20} className="text-black" />
              <div>
                <p className="text-xs font-bold uppercase text-black">
                  Prep Time
                </p>
                <p className="text-xs">15 Minutes</p>
              </div>
            </div>
            <div className="flex items-center gap-2 border-r pr-6 border-gray-200">
              <Clock size={20} className="text-black" />
              <div>
                <p className="text-xs font-bold uppercase text-black">
                  Cook Time
                </p>
                <p className="text-xs">15 Minutes</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Utensils size={20} className="text-black" />
              <p className="text-sm font-medium text-black">Chicken</p>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <div className="flex gap-4 print:hidden">
          {" "}
          {/* print:hidden agar tombol tidak ikut tercetak saat diprint */}
          <motion.button
            onClick={handlePrint}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center gap-2 group"
          >
            <div className="w-12 h-12 rounded-full bg-[#E7FAFE] flex items-center justify-center group-hover:bg-sky-100 transition-colors">
              <Printer size={20} />
            </div>
            <span className="text-[10px] font-bold uppercase">Print</span>
          </motion.button>
          <motion.button
            onClick={handleShare}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center gap-2 group"
          >
            <div className="w-12 h-12 rounded-full bg-[#E7FAFE] flex items-center justify-center group-hover:bg-sky-100 transition-colors">
              <Share2 size={20} />
            </div>
            <span className="text-[10px] font-bold uppercase">Share</span>
          </motion.button>
        </div>
      </section>

      {/* Hero Content Section (Image & Nutrition) */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
        {/* Main Image with Play Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="lg:col-span-2 relative aspect-video rounded-[40px] overflow-hidden group cursor-pointer"
        >
          <Image
            src="/images/fried-rice-detail.jpg"
            alt="Recipe Video"
            className="w-full h-full object-cover"
            width={500}
            height={500}
          />
          <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
            <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
              <div className="w-0 h-0 border-t-10 border-t-transparent border-l-18 border-l-black border-b-10 border-b-transparent ml-1" />
            </div>
          </div>
        </motion.div>

        {/* Nutrition Card */}
        <motion.div
          {...fadeIn}
          transition={{ delay: 0.3 }}
          className="bg-[#E7FAFE] rounded-[40px] p-8 flex flex-col justify-between"
        >
          <h3 className="text-2xl font-bold mb-6">Nutrition Information</h3>
          <div className="space-y-4">
            {[
              { label: "Calories", value: "219.9 kcal" },
              { label: "Total Fat", value: "10.7 g" },
              { label: "Protein", value: "7.9 g" },
              { label: "Carbohydrate", value: "22.3 g" },
              { label: "Cholesterol", value: "37.4 mg" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex justify-between border-b border-black/5 pb-3"
              >
                <span className="text-gray-500 font-medium">{item.label}</span>
                <span className="font-bold text-black">{item.value}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-8 text-center">
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </motion.div>
      </section>

      {/* Description Text */}
      <motion.section
        {...fadeIn}
        transition={{ delay: 0.5 }}
        className="max-w-5xl"
      >
        <p className="text-gray-500 leading-relaxed text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </motion.section>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-16 mt-16">
        {/* Kolon Kiri: Ingredients & Directions */}
        <div className="lg:col-span-2 space-y-12">
          {/* Section: Ingredients */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Ingredients</h2>

            <div className="space-y-10">
              {/* For Main Dish */}
              <div>
                <h3 className="text-xl font-bold mb-6">For main dish</h3>
                <div className="space-y-6">
                  {ingredients.main.map((item, idx) => {
                    const key = `main-${idx}`;
                    return (
                      <div
                        key={key}
                        className="flex items-center gap-4 pb-6 border-b border-gray-100 cursor-pointer group"
                        onClick={() => toggleIngredient(slug, key)}
                      >
                        {isChecked(key) ? (
                          <CheckCircle2
                            className="text-black fill-black/10"
                            size={24}
                          />
                        ) : (
                          <Circle
                            className="text-gray-300 group-hover:text-gray-400"
                            size={24}
                          />
                        )}
                        <span
                          className={`text-lg transition-all ${isChecked(key) ? "line-through text-gray-300" : "text-black"}`}
                        >
                          {item}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* For Sauce */}
              <div>
                <h3 className="text-xl font-bold mb-6">For the sauce</h3>
                <div className="space-y-6">
                  {ingredients.sauce.map((item, idx) => {
                    const key = `sauce-${idx}`;
                    return (
                      <div
                        key={key}
                        className="flex items-center gap-4 pb-6 border-b border-gray-100 cursor-pointer group"
                        onClick={() => toggleIngredient(slug, key)}
                      >
                        {isChecked(key) ? (
                          <CheckCircle2
                            className="text-black fill-black/10"
                            size={24}
                          />
                        ) : (
                          <Circle
                            className="text-gray-300 group-hover:text-gray-400"
                            size={24}
                          />
                        )}
                        <span
                          className={`text-lg transition-all ${isChecked(key) ? "line-through text-gray-300" : "text-black"}`}
                        >
                          {item}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Section: Directions (Opsional tapi sering ada) */}
          <div className="space-y-10 mt-16">
            <h2 className="text-3xl font-bold mb-8">Directions</h2>

            {steps.map((step) => (
              <div
                key={step.id}
                className="flex gap-6 border-b border-gray-100 pb-10 last:border-0"
              >
                {/* Radio/Check Indicator */}
                <div
                  className="pt-1 cursor-pointer"
                  onClick={() => toggleStep(slug, step.id)}
                >
                  {isStepDone(step.id) ? (
                    <CheckCircle2
                      className="text-black fill-black/10"
                      size={26}
                    />
                  ) : (
                    <Circle className="text-gray-300" size={26} />
                  )}
                </div>

                <div className="flex-1 space-y-6">
                  {/* Step Title */}
                  <h3
                    className={`text-xl font-bold ${isStepDone(step.id) ? "line-through text-gray-300" : "text-black"}`}
                  >
                    {step.id}. {step.title}
                  </h3>

                  {/* Step Description */}
                  <p
                    className={`leading-relaxed text-gray-500 ${isStepDone(step.id) ? "opacity-50" : ""}`}
                  >
                    {step.description}
                  </p>

                  {/* Optional Image (Hanya muncul jika ada di data step) */}
                  {step.image && (
                    <div className="rounded-[30px] overflow-hidden my-8">
                      <Image
                        src={step.image}
                        alt={`Step ${step.id}`}
                        className="w-full h-auto object-cover max-h-100"
                        width={500}
                        height={500}
                      />
                    </div>
                  )}

                  {/* Additional Text after Image (Sesuai mockup) */}
                  {step.image && (
                    <p className="leading-relaxed text-gray-500">
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt.
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Kolom Kanan: Sidebar (Other Recipes & Ad) */}
        <aside className="space-y-12">
          {/* Other Recipes */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Other Recipe</h2>
            <div className="space-y-6">
              {otherRecipes.map((recipe, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-32 h-24 rounded-2xl overflow-hidden shrink-0">
                    <Image
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                      width={500}
                      height={500}
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm leading-tight mb-2 line-clamp-2 group-hover:text-orange-500 transition-colors">
                      {recipe.title}
                    </h4>
                    <p className="text-xs text-gray-400 italic">
                      By {recipe.author}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ad Section Sidebar */}
          <div className="relative rounded-[30px] overflow-hidden aspect-4/5 flex flex-col justify-end p-8 text-center text-white">
            <Image
              src="/images/ad-sidebar.jpg"
              className="absolute inset-0 w-full h-full object-cover"
              alt="Ad"
              width={500}
              height={500}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />

            <div className="relative z-10 space-y-4">
              <p className="italic text-lg font-serif">
                Don&apos;t forget to eat healthy food
              </p>
              <div className="w-24 h-24 mx-auto bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                <Image
                  src="/images/healthy-plate.png"
                  className="w-16 h-16 object-contain"
                  alt="plate"
                  width={64}
                  height={64}
                />
              </div>
              <p className="text-xs tracking-widest opacity-60">
                WWW.FOODIELAND.COM
              </p>
            </div>
          </div>
        </aside>
      </section>
      <Newsletter />
      <section className="mt-32 mb-20">
        <h2 className="text-4xl font-bold text-center mb-16">
          You may like these recipe too
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Kamu bisa menggunakan array .map dari data resep yang sudah ada */}
          {otherRecipes.concat(otherRecipes[0]).map((recipe, idx) => (
            <div key={idx} className="space-y-4 group cursor-pointer">
              <div className="relative aspect-4/3 rounded-[30px] overflow-hidden">
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h4 className="font-bold text-lg leading-tight line-clamp-2 h-14">
                {recipe.title}
              </h4>
              <div className="flex gap-4">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                  <Timer size={16} /> 30 Minutes
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                  <Utensils size={16} /> Healthy
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer/>
      <ShareModal url={currentUrl} title="Health Japanese Fried Rice" />
    </main>
  );
};

export default RecipeDetailPage;
