"use client";

import { motion } from "framer-motion";
import { Heart, MessageCircle, Send, Bookmark } from "lucide-react";
import Image from "next/image";

interface PostProps {
  image: string;
  caption: string;
}

export const InstagramPost = ({ image, caption }: PostProps) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white shadow-sm overflow-hidden"
    >
      {/* Header Post */}
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
            <Image
              src="/photo/ava1.png"
              alt="Foodieland"
              width={50} // Specify the width of the image
              height={50} // Specify the height of the image
            />{" "}
          </div>
          <div>
            <p className="text-xs font-bold leading-none">Foodieland.</p>
            <p className="text-[10px] text-gray-500">Tokyo, Japan</p>
          </div>
        </div>
        <span className="text-gray-400">...</span>
      </div>

      {/* Main Image */}
      <div className="aspect-square overflow-hidden">
        <Image
          src={image}
          className="w-full h-full object-cover"
          alt="Instagram content"
          width={500} // Specify the width of the image
          height={500} // Specify the height of the image
        />
      </div>

      {/* Interactions */}
      <div className="p-3 space-y-2">
        <div className="flex justify-between">
          <div className="flex gap-3">
            <Heart size={20} />
            <MessageCircle size={20} />
            <Send size={20} />
          </div>
          <Bookmark size={20} />
        </div>

        {/* Liked by */}
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 rounded-full bg-blue-500 border border-white" />
          <p className="text-[10px] font-medium">
            Liked by <span className="font-bold">craig_love</span> and{" "}
            <span className="font-bold">44,686 others</span>
          </p>
        </div>

        {/* Caption */}
        <p className="text-[10px] leading-relaxed">
          <span className="font-bold">Foodieland.</span> {caption}
        </p>

        <p className="text-[10px] text-gray-400 uppercase">September 19</p>
      </div>
    </motion.div>
  );
};
