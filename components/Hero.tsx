"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, ChevronRight, Shield, Star, FileCheck, MessageSquare } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const trustBadges = [
  { icon: <Star size={16} className="text-gold" />, label: "20+ Years Experience" },
  { icon: <Shield size={16} className="text-gold" />, label: "Fully Insured" },
  { icon: <FileCheck size={16} className="text-gold" />, label: "Insurance-Backed Guarantees" },
  { icon: <MessageSquare size={16} className="text-gold" />, label: "Free No-Obligation Quotes" },
];

export default function Hero() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && phone) setSent(true);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop&q=80"
        alt="Roofing background"
        fill
        priority
        className="object-cover object-center"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-darknavy/75" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24 pb-16 md:pt-32 md:pb-20">
        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-irishred/20 border border-irishred/40 text-white text-sm font-poppins font-medium px-4 py-2 rounded-full mb-6"
        >
          <span className="text-gold">⭐</span>
          #1 Roofing Company in Carlow
        </motion.div>

        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-montserrat font-900 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-4"
        >
          Carlow&apos;s Most Trusted
          <br />
          <span className="text-irishred">Roofers</span> — 24/7
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-poppins font-300 text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-8"
        >
          Flat Roofs, Pitched Roofs, Chimney Repairs, Soffits &amp; Guttering.
          <br className="hidden sm:block" />
          <span className="text-gold font-medium">100% Irish. Fully Insured.</span>
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <Link
            href="/contact"
            className="bg-irishred text-white font-montserrat font-700 text-base px-8 py-4 rounded-full hover:scale-105 hover:bg-red-700 transition-all duration-200 flex items-center gap-2 shadow-lg"
          >
            Get a Free Quote
            <ChevronRight size={18} />
          </Link>
          <a
            href="tel:0852173108"
            className="border-2 border-white text-white font-montserrat font-700 text-base px-8 py-4 rounded-full hover:scale-105 hover:bg-white hover:text-darknavy transition-all duration-200 flex items-center gap-2"
          >
            <Phone size={18} />
            Call 085 217 3108
          </a>
        </motion.div>

        {/* Quick quote mini-form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-xl mx-auto mb-10"
        >
          {sent ? (
            <p className="text-green-400 font-poppins font-medium text-base bg-green-400/10 border border-green-400/30 rounded-2xl py-4 px-6">
              ✅ Thanks! We&apos;ll call you back shortly.
            </p>
          ) : (
            <form
              onSubmit={handleSend}
              className="flex flex-col sm:flex-row gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-3"
            >
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="flex-1 bg-transparent border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/50 font-poppins text-sm focus:outline-none focus:border-irishred transition-colors"
              />
              <input
                type="tel"
                placeholder="Your Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="flex-1 bg-transparent border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/50 font-poppins text-sm focus:outline-none focus:border-irishred transition-colors"
              />
              <button
                type="submit"
                className="bg-irishred text-white font-montserrat font-700 text-sm px-6 py-3 rounded-xl hover:scale-105 hover:bg-red-700 transition-all duration-200 whitespace-nowrap"
              >
                Send →
              </button>
            </form>
          )}
          <p className="text-white/50 text-xs font-poppins mt-2">
            Quick call-back request — no spam, no obligation.
          </p>
        </motion.div>

        {/* Trust microbadges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white/90 font-poppins text-xs sm:text-sm font-medium"
            >
              {badge.icon}
              {badge.label}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
