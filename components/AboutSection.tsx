"use client";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const bullets = [
  "Roof & Guttering Repairs",
  "Guttering, Fascias & Soffits",
  "Insurance-Backed Guarantees",
  "Free No-Obligation Quotations",
  "Slates & Tiling",
  "Re-pointing & Chimney Work",
];

const fade: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function AboutSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Image */}
          <motion.div
            variants={fade} initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&h=1100&fit=crop&q=85"
                alt="M&A Roofing team at work"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating accent box */}
            <div className="absolute -bottom-6 -right-6 bg-irishred text-white p-6 hidden md:block">
              <p className="font-montserrat font-900 text-4xl leading-none">20+</p>
              <p className="font-poppins text-xs tracking-widest uppercase mt-1 text-white/70">Years</p>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            variants={fade} initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <p className="font-poppins text-xs tracking-widest uppercase text-irishred mb-5">
              About Us
            </p>
            <h2 className="font-montserrat font-800 text-3xl md:text-4xl lg:text-5xl text-ink leading-tight mb-6">
              Carlow&apos;s Most
              <br />Dependable Roofers
            </h2>
            <span className="divider mb-8 block" />

            <p className="font-poppins text-muted text-[15px] leading-relaxed mb-5">
              With over 20 years serving homeowners and businesses across Carlow, Kilkenny and
              Wicklow, M&amp;A Roofing has become the go-to name for quality roofing work in
              the south-east of Ireland.
            </p>
            <p className="font-poppins text-muted text-[15px] leading-relaxed mb-10">
              We&apos;re a family-run business built on honest work, fair prices and genuine care for
              every customer. No upselling. No hidden costs. Just excellent craftsmanship.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mb-10">
              {bullets.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full bg-irishred flex-shrink-0 mt-0.5" />
                  <span className="font-poppins text-sm text-ink/70">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-poppins text-sm text-ink border-b border-ink/20 pb-0.5 hover:border-irishred hover:text-irishred transition-colors duration-300"
            >
              Read our story <ArrowRight size={14} />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
