"use client";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import {
  Home,
  Wrench,
  Droplets,
  Square,
  Flame,
  PanelTop,
  ArrowUpRight,
} from "lucide-react";

const serviceIcons: Record<string, React.ReactNode> = {
  roofing:         <Home       size={22} strokeWidth={1.5} />,
  "roof-repair":   <Wrench     size={22} strokeWidth={1.5} />,
  guttering:       <Droplets   size={22} strokeWidth={1.5} />,
  "flat-roofs":    <Square     size={22} strokeWidth={1.5} />,
  "chimney-repair":<Flame      size={22} strokeWidth={1.5} />,
  "fascia-soffits":<PanelTop   size={22} strokeWidth={1.5} />,
};

import { services } from "@/lib/services";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 md:py-32 bg-offwhite">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="font-poppins text-xs tracking-widest uppercase text-irishred mb-4">
              What We Do
            </p>
            <h2 className="font-montserrat font-800 text-3xl md:text-4xl lg:text-5xl text-ink leading-tight">
              Roofing Services
              <br />in Carlow
            </h2>
          </div>
          <p className="font-poppins text-[15px] text-muted max-w-sm leading-relaxed">
            From emergency repairs to full re-roofs — every job is handled with the same
            precision and care.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-stone"
        >
          {services.map((service, idx) => (
            <motion.div
              key={service.slug}
              variants={item}
              className={`border-stone ${
                // right border on all except last in each row
                idx % 3 !== 2 ? "lg:border-r" : ""
              } ${
                idx % 2 !== 1 ? "sm:border-r lg:border-r-0" : "sm:border-r-0"
              } ${
                // bottom border on all except last row
                idx < 3 ? "lg:border-b" : ""
              } ${
                idx < 4 ? "sm:border-b" : ""
              } ${
                idx < 5 ? "border-b" : ""
              } border`}
            >
              <Link
                href={`/services/${service.slug}`}
                className="group flex flex-col h-full bg-white hover:bg-ink transition-colors duration-500 p-8 lg:p-10"
              >
                {/* Icon */}
                <div className="w-11 h-11 border border-stone group-hover:border-white/20 flex items-center justify-center text-irishred group-hover:text-white/50 mb-8 transition-colors duration-500">
                  {serviceIcons[service.slug]}
                </div>

                <h3 className="font-montserrat font-700 text-[18px] text-ink group-hover:text-white mb-3 transition-colors duration-500">
                  {service.title}
                </h3>

                <p className="font-poppins text-[14px] text-muted group-hover:text-white/45 leading-relaxed flex-1 mb-8 transition-colors duration-500">
                  {service.shortDesc}
                </p>

                <div className="flex items-center gap-2 font-poppins text-[11px] tracking-widest uppercase text-irishred group-hover:text-white/50 transition-colors duration-500">
                  Learn More <ArrowUpRight size={12} />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
