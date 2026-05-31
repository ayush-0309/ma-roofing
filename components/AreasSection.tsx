"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { towns } from "@/lib/areas";

export default function AreasSection() {
  return (
    <section id="areas" className="py-20 md:py-28 bg-darknavy">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-white/10 text-white font-poppins font-600 text-sm px-4 py-1 rounded-full mb-4">
            Coverage
          </span>
          <h2 className="font-montserrat font-800 text-3xl md:text-4xl text-white mb-5">
            Areas We Cover
          </h2>
          <p className="font-poppins text-white/60 text-base max-w-xl mx-auto mb-10">
            We cover all areas of County Carlow and beyond — including Kilkenny and Wicklow.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {towns.map((town) => (
              <Link
                key={town.slug}
                href={`/areas/${town.slug}`}
                className="bg-irishred text-white font-poppins font-500 text-sm px-5 py-2 rounded-full hover:scale-105 hover:bg-red-700 transition-all duration-200"
              >
                {town.name}
              </Link>
            ))}
          </div>

          <p className="font-poppins text-white/50 text-sm">
            Not sure if we cover your area?{" "}
            <a href="tel:0852173108" className="text-irishred hover:text-red-400 transition-colors">
              Give us a call
            </a>{" "}
            — we&apos;re happy to help.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
