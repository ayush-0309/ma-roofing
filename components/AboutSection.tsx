"use client";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const bullets = [
  "Roof & Guttering Repairs",
  "Guttering, Fascias & Soffits",
  "Insurance-Backed Guarantees",
  "Free No-Obligation Quotations",
  "Slates & Tiling",
  "Re-pointing & Chimney Work",
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function AboutSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&q=80"
                alt="Roofers working on a roof in Carlow"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-irishred text-white rounded-2xl px-6 py-4 shadow-xl">
              <p className="font-montserrat font-800 text-3xl">20+</p>
              <p className="font-poppins text-xs font-400">Years in Business</p>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <span className="inline-block bg-irishred/10 text-irishred font-poppins font-600 text-sm px-4 py-1 rounded-full mb-4">
              About Us
            </span>
            <h2 className="font-montserrat font-800 text-3xl md:text-4xl text-darknavy mb-5 leading-tight">
              Carlow&apos;s Most Dependable Roofers
            </h2>
            <p className="font-poppins text-muted text-base leading-relaxed mb-6">
              With over 20 years in the business, M&amp;A Roofing and Guttering has
              built a reputation as one of the most trusted roofing contractors in
              the south-east of Ireland. Based in Carlow, we serve homeowners and
              businesses across Carlow, Kilkenny, Wicklow and all surrounding counties.
            </p>
            <p className="font-poppins text-muted text-base leading-relaxed mb-8">
              We pride ourselves on quality workmanship, fair pricing, and treating
              every customer with honesty and respect. Every job — big or small —
              gets the same dedicated attention to detail.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {bullets.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-irishred/10 flex items-center justify-center">
                    <Check size={13} className="text-irishred" />
                  </span>
                  <span className="font-poppins text-sm text-gray-700 font-500">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-irishred font-poppins font-600 text-sm hover:gap-3 transition-all duration-200"
            >
              Read More About Us
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
