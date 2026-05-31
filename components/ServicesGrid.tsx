"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "@/lib/services";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ServicesGrid() {
  return (
    <section id="services" className="py-20 md:py-28 bg-offwhite">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-block bg-irishred/10 text-irishred font-poppins font-600 text-sm px-4 py-1 rounded-full mb-4">
            Our Services
          </span>
          <h2 className="font-montserrat font-800 text-3xl md:text-4xl text-darknavy">
            High Quality Roofing Services in Carlow
          </h2>
          <p className="font-poppins text-muted mt-3 text-base max-w-xl mx-auto">
            From full roof replacements to guttering repairs — we cover it all across Carlow and surrounding counties.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.slug}
              variants={card}
              className="rounded-2xl bg-white shadow-md hover:-translate-y-1 transition-all duration-200 p-6 group"
            >
              <div className="w-12 h-12 bg-irishred rounded-xl flex items-center justify-center text-2xl mb-4">
                {service.icon}
              </div>
              <h3 className="font-montserrat font-700 text-darknavy text-xl mb-2">
                {service.title}
              </h3>
              <p className="font-poppins text-muted text-sm leading-relaxed mb-4">
                {service.shortDesc}
              </p>
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-1 text-irishred font-poppins font-600 text-sm group-hover:gap-2 transition-all duration-200"
              >
                Read More →
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
