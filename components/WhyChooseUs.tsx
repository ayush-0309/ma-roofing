"use client";
import { motion, type Variants } from "framer-motion";
import Image from "next/image";

const features = [
  {
    num: "01",
    title: "Trusted for 20+ Years",
    desc: "A reputation built through honest work and satisfied customers across Carlow, Kilkenny and Wicklow — not advertising.",
  },
  {
    num: "02",
    title: "Competitive, Transparent Pricing",
    desc: "Detailed quotes with no hidden costs. What we quote is exactly what you pay — guaranteed.",
  },
  {
    num: "03",
    title: "Insurance-Backed Guarantees",
    desc: "Every job comes with full workmanship guarantees backed by insurance, so you&apos;re protected long after we leave.",
  },
  {
    num: "04",
    title: "Friendly & Reliable",
    desc: "We show up when we say we will. We clean up when we leave. We treat your home like our own.",
  },
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function WhyChooseUs() {
  return (
    <section className="bg-ink py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
            className="relative aspect-[3/4] overflow-hidden hidden lg:block"
          >
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&h=1200&fit=crop&q=85"
              alt="Beautiful roof by M&A Roofing"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-irishred/10" />
          </motion.div>

          {/* Right — content */}
          <div>
            <p className="font-poppins text-xs tracking-widest uppercase text-irishred mb-5">
              Why Choose Us
            </p>
            <h2 className="font-montserrat font-800 text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-5">
              Why M&amp;A
              <br />Roofing?
            </h2>
            <span className="divider mb-12 block" />

            <motion.div
              variants={container} initial="hidden"
              whileInView="visible" viewport={{ once: true, margin: "-60px" }}
              className="space-y-0 divide-y divide-white/10"
            >
              {features.map((f) => (
                <motion.div
                  key={f.num}
                  variants={item}
                  className="flex gap-8 py-8 group"
                >
                  <span className="font-montserrat font-700 text-xs text-white/20 mt-1 flex-shrink-0 w-6">
                    {f.num}
                  </span>
                  <div>
                    <h3 className="font-montserrat font-700 text-white text-lg mb-2">
                      {f.title}
                    </h3>
                    <p
                      className="font-poppins text-[14px] text-white/45 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: f.desc }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
