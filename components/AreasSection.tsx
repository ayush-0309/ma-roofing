"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { towns } from "@/lib/areas";

export default function AreasSection() {
  return (
    <section id="areas" className="py-24 md:py-32 bg-ink">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-poppins text-xs tracking-widest uppercase text-irishred mb-5">
              Coverage
            </p>
            <h2 className="font-montserrat font-800 text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-5">
              Areas We
              <br />Cover
            </h2>
            <span className="divider mb-8 block" />
            <p className="font-poppins text-[15px] text-white/45 leading-relaxed max-w-sm mb-8">
              Based in Carlow, we serve all of Co. Carlow and extend into Kilkenny, Wicklow and
              surrounding areas.
            </p>
            <p className="font-poppins text-sm text-white/30">
              Not sure if we cover your area?{" "}
              <a href="tel:0852173108" className="text-irishred hover:underline">
                Give us a call.
              </a>
            </p>
          </motion.div>

          {/* Right — town grid */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grid grid-cols-2 gap-px bg-white/10"
          >
            {towns.map((town) => (
              <Link
                key={town.slug}
                href={`/areas/${town.slug}`}
                className="group bg-ink px-6 py-5 flex items-center justify-between hover:bg-irishred transition-colors duration-300"
              >
                <span className="font-poppins text-sm text-white/60 group-hover:text-white transition-colors duration-300">
                  {town.name}
                </span>
                <span className="text-white/20 group-hover:text-white/60 text-xs transition-colors duration-300">
                  →
                </span>
              </Link>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
