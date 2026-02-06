"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Timer, Utensils } from "lucide-react";
import { useStore } from "../store/useStore";
import Image from "next/image";

const moreRecipes = [
  {
    id: 10,
    title: "Mixed Tropical Fruit Salad with Superfood Boosts",
    image: "/photo/hf1.png",
    time: "30 Minutes",
    category: "Healthy",
  },
  {
    id: 11,
    title: "Big and Juicy Wagyu Beef Cheeseburger",
    image: "/photo/hf2.png",
    time: "30 Minutes",
    category: "Western",
  },
  {
    id: 12,
    title: "Healthy Japanese Fried Rice with Asparagus",
    image: "/photo/hf3.png",
    time: "30 Minutes",
    category: "Healthy",
  },
  {
    id: 13,
    title: "Cauliflower Walnut Vegetarian Taco Meat",
    image: "/photo/hf4.png",
    time: "30 Minutes",
    category: "Eastern",
  },
  {
    id: 14,
    title: "Rainbow Chicken Salad with Almond Honey Mustard Dressing",
    image: "/photo/hf5.png",
    time: "30 Minutes",
    category: "Healthy",
  },
  {
    id: 15,
    title: "Barbeque Spicy Sandwiches with Chips",
    image: "/photo/hf6.png",
    time: "30 Minutes",
    category: "Snack",
  },
  {
    id: 16,
    title: "Firecracker Vegan Lettuce Wraps - Spicy!",
    image: "/photo/hf7.png",
    time: "30 Minutes",
    category: "Seafood",
  },
  {
    id: 17,
    title: "Chicken Ramen Soup with Mushroom",
    image: "/photo/hf8.png",
    time: "30 Minutes",
    category: "Japanese",
  },
];

const RecipeGridTwo = () => {
  const { favorites, toggleFavorite } = useStore();

  return (
    <section className="px-6 md:px-16 py-24 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold max-w-md leading-tight">
          Try this delicious recipe to make your day
        </h2>
        <p className="text-gray-500 max-w-xl text-lg">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim.
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        {moreRecipes.map((recipe, index) => (
          <motion.div
            key={recipe.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
          >
            {/* Image Wrapper */}
            <div className="relative aspect-4/3 rounded-[30px] overflow-hidden mb-5">
              <Image
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                width={500} // Specify the width of the image
                height={500} // Specify the height of the image
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  toggleFavorite(recipe.id);
                }}
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg z-10"
              >
                <Heart
                  size={20}
                  className={
                    favorites.includes(recipe.id)
                      ? "fill-red-500 text-red-500"
                      : "text-gray-300"
                  }
                />
              </button>
            </div>

            {/* Content */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold leading-snug line-clamp-2 h-14 group-hover:text-orange-500 transition-colors">
                {recipe.title}
              </h3>
              <div className="flex gap-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-gray-500">
                  <Timer size={18} className="text-black" /> {recipe.time}
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-gray-500">
                  <Utensils size={18} className="text-black" />{" "}
                  {recipe.category}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RecipeGridTwo;
