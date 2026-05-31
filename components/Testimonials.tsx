"use client";
import { motion } from "framer-motion";
import { testimonials } from "@/lib/testimonials";
import { ExternalLink } from "lucide-react";

const Stars = () => (
  <div className="flex gap-1 mb-3">
    {[...Array(5)].map((_, i) => (
      <span key={i} className="text-gold text-lg">★</span>
    ))}
  </div>
);

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-offwhite">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-block bg-irishred/10 text-irishred font-poppins font-600 text-sm px-4 py-1 rounded-full mb-4">
            Reviews
          </span>
          <h2 className="font-montserrat font-800 text-3xl md:text-4xl text-darknavy">
            What Our Clients Are Saying
          </h2>
          <p className="font-poppins text-muted mt-3 text-base max-w-xl mx-auto">
            Don&apos;t take our word for it — here&apos;s what our customers across Carlow say.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={card}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col"
            >
              <Stars />
              <p className="font-poppins text-gray-600 text-sm leading-relaxed flex-1 mb-4 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-irishred/10 flex items-center justify-center font-montserrat font-700 text-irishred text-base">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-poppins font-600 text-darknavy text-sm">{t.name}</p>
                  <p className="font-poppins text-muted text-xs">{t.town}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex flex-col items-center gap-4">
          {/* Google badge */}
          <div className="flex items-center gap-2 font-poppins text-muted text-sm">
            <span className="text-2xl">G</span>
            <span>Rated 5.0 on Google Reviews</span>
          </div>
          <a
            href="https://g.page/r/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-irishred text-irishred font-montserrat font-700 text-sm px-6 py-3 rounded-full hover:scale-105 hover:bg-irishred hover:text-white transition-all duration-200"
          >
            Write a Review on Google
            <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
