"use client";
import { motion } from "framer-motion";
import { testimonials } from "@/lib/testimonials";
import { ExternalLink } from "lucide-react";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const card = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-offwhite">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="max-w-xl mb-16">
          <p className="font-poppins text-xs tracking-widest uppercase text-irishred mb-4">
            Reviews
          </p>
          <h2 className="font-montserrat font-800 text-3xl md:text-4xl lg:text-5xl text-ink leading-tight">
            What Our
            <br />Clients Say
          </h2>
          <span className="divider mt-6 block" />
        </div>

        {/* Cards */}
        <motion.div
          variants={container} initial="hidden"
          whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={card}
              className="bg-white p-8 lg:p-10 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-gold text-sm">★</span>
                ))}
              </div>

              <p className="font-poppins text-[15px] text-ink/70 leading-relaxed flex-1 mb-8">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-6 border-t border-stone">
                <div className="w-9 h-9 rounded-full bg-irishred/10 flex items-center justify-center font-montserrat font-700 text-irishred text-sm flex-shrink-0">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-poppins font-600 text-ink text-sm">{t.name}</p>
                  <p className="font-poppins text-muted text-xs">{t.town}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Google link */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-10">
          <p className="font-poppins text-sm text-muted">
            Rated <span className="text-ink font-600">5.0</span> on Google Reviews
          </p>
          <a
            href="https://g.page/r/review"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-poppins text-xs tracking-widest uppercase border border-ink/20 text-ink px-5 py-3 hover:border-irishred hover:text-irishred transition-colors duration-300"
          >
            Write a Review <ExternalLink size={12} />
          </a>
        </div>

      </div>
    </section>
  );
}
