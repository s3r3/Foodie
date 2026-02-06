"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Copy,
  Check,
  Facebook,
  Twitter,
  MessageCircle,
  Mail,
} from "lucide-react";
import { useStore } from "@/app/store/useStore";

const ShareModal = ({ url, title }: { url: string; title: string }) => {
  const { isShareModalOpen, setShareModalOpen } = useStore();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialMedia: {
    name: string;
    icon: React.ComponentType<
      React.SVGProps<SVGSVGElement> & { size?: number }
    >;
    color: string;
    link: string;
  }[] = [
    {
      name: "Facebook",
      icon: Facebook,
      color: "bg-[#1877F2]",
      link: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    },
    {
      name: "Twitter",
      icon: Twitter,
      color: "bg-[#1DA1F2]",
      link: `https://twitter.com/intent/tweet?text=${title}&url=${url}`,
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      color: "bg-[#25D366]",
      link: `https://api.whatsapp.com/send?text=${title} ${url}`,
    },
    {
      name: "Email",
      icon: Mail,
      color: "bg-gray-600",
      link: `mailto:?subject=${title}&body=${url}`,
    },
  ];

  return (
    <AnimatePresence>
      {isShareModalOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShareModalOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative bg-white rounded-[40px] p-8 w-full max-w-md shadow-2xl"
          >
            <button
              onClick={() => setShareModalOpen(false)}
              className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={20} />
            </button>

            <h3 className="text-2xl font-bold mb-6">Share this recipe</h3>

            {/* Social Icons Grid */}
            <div className="grid grid-cols-4 gap-4 mb-8">
              {socialMedia.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 group"
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-white transition-transform group-hover:scale-110 ${social.color}`}
                  >
                    {(() => {
                      const Icon = social.icon;
                      return <Icon size={20} />;
                    })()}
                  </div>
                  <span className="text-[10px] font-bold text-gray-500">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>

            {/* Copy Link Input */}
            <div className="relative">
              <p className="text-sm font-bold mb-3 text-gray-400 uppercase tracking-widest">
                Page Link
              </p>
              <div className="flex items-center bg-gray-50 rounded-2xl p-2 border border-gray-100">
                <input
                  type="text"
                  readOnly
                  value={url}
                  className="bg-transparent flex-1 px-3 text-sm text-gray-500 outline-none overflow-hidden text-ellipsis"
                />
                <button
                  onClick={handleCopy}
                  className="bg-black text-white p-3 rounded-xl hover:bg-gray-800 transition-all flex items-center gap-2"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  <span className="text-xs font-bold">
                    {copied ? "Copied" : "Copy"}
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ShareModal;
