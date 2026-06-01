"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const [name,  setName]  = useState("");
  const [phone, setPhone] = useState("");
  const [sent,  setSent]  = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && phone) setSent(true);
  };

  return (
    <section className="relative min-h-screen flex items-end pb-24 md:pb-32 text-white overflow-hidden">
      {/* Full-bleed photography */}
      <Image
        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop&q=85"
        alt="Premium roofing in Carlow"
        fill
        priority
        className="object-cover object-center scale-[1.02]"
      />
      {/* Gradient — darker at bottom for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />

      {/* Content — pinned to bottom with top clearance for navbar */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pt-20 md:pt-24">
        <div className="max-w-3xl">

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-montserrat font-900 text-5xl sm:text-6xl md:text-7xl lg:text-[80px] leading-[0.95] tracking-tight mb-5"
          >
            Carlow&apos;s
            <br />
            <span className="text-white/90">Most Trusted</span>
            <br />
            <em className="not-italic text-irishred">Roofers.</em>
          </motion.h1>

          {/* Eyebrow — sits below headline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-poppins text-xs tracking-widest uppercase text-white/50 mb-6"
          >
            Established 2004 · Carlow, Ireland
          </motion.p>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-poppins font-300 text-white/65 text-base md:text-lg max-w-xl leading-relaxed mb-10"
          >
            Flat &amp; pitched roofs, guttering, chimneys, fascia &amp; soffits.
            Fully insured. Insurance-backed guarantees. Free quotes.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-irishred text-white font-poppins font-600 text-sm tracking-wider px-8 py-4 hover:bg-red-700 transition-colors duration-300"
            >
              Get a Free Quote <ArrowRight size={16} />
            </Link>
            <a
              href="tel:0852173108"
              className="inline-flex items-center justify-center gap-2 border border-white/40 text-white font-poppins font-500 text-sm tracking-wider px-8 py-4 hover:border-white hover:bg-white/10 transition-all duration-300"
            >
              <Phone size={15} />
              085 217 3108
            </a>
          </motion.div>

          {/* Quick-quote form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="max-w-lg"
          >
            {sent ? (
              <p className="font-poppins text-sm text-white/70 border border-white/20 px-5 py-4">
                ✓ &nbsp;Thanks — we&apos;ll call you back shortly.
              </p>
            ) : (
              <div>
                <p className="font-poppins text-xs tracking-widest uppercase text-white/40 mb-3">
                  Quick call-back
                </p>
                <form onSubmit={handleSend} className="flex gap-0">
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="flex-1 bg-white/10 border border-white/20 border-r-0 px-4 py-3 text-white placeholder-white/35 font-poppins text-sm focus:outline-none focus:border-white/50 transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="flex-1 bg-white/10 border border-white/20 border-r-0 px-4 py-3 text-white placeholder-white/35 font-poppins text-sm focus:outline-none focus:border-white/50 transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-irishred text-white font-poppins font-600 text-xs tracking-widest uppercase px-6 py-3 hover:bg-red-700 transition-colors duration-300 whitespace-nowrap"
                  >
                    Send
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>

        {/* Trust badges — bottom right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute bottom-0 right-6 lg:right-10 hidden lg:flex flex-col items-end gap-2 pb-8"
        >
          {["20+ Years Experience", "Fully Insured", "Free Quotes"].map((b) => (
            <span key={b} className="font-poppins text-xs text-white/40 tracking-widest uppercase">
              {b}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
