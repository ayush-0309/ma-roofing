"use client";
import { motion } from "framer-motion";
import { Trophy, Tag, ShieldCheck, Heart } from "lucide-react";

const features = [
  {
    icon: <Trophy size={36} className="text-gold" />,
    title: "Our Great Reputation",
    desc: "Trusted for 20+ years across Carlow and surrounding counties. Our work speaks for itself — hundreds of satisfied customers.",
  },
  {
    icon: <Tag size={36} className="text-gold" />,
    title: "Highly Competitive Prices",
    desc: "Affordable rates with no hidden costs. We give honest, detailed quotes upfront — what we quote is what you pay.",
  },
  {
    icon: <ShieldCheck size={36} className="text-gold" />,
    title: "Insurance-Backed Guarantees",
    desc: "Full peace of mind on all works. Our guarantees are backed by insurance so you&apos;re protected long after we leave.",
  },
  {
    icon: <Heart size={36} className="text-gold" />,
    title: "Friendly &amp; Reliable",
    desc: "For both domestic and commercial customers. We show up when we say we will and treat your property with care.",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-slate">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-block bg-white/10 text-white font-poppins font-600 text-sm px-4 py-1 rounded-full mb-4">
            Why Us
          </span>
          <h2 className="font-montserrat font-800 text-3xl md:text-4xl text-white">
            Why Choose M&amp;A Roofing?
          </h2>
          <p className="font-poppins text-white/60 mt-3 text-base max-w-xl mx-auto">
            We&apos;re not just roofers — we&apos;re your neighbours. Here&apos;s what sets us apart.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
        >
          {features.map((feat) => (
            <motion.div
              key={feat.title}
              variants={item}
              className="flex gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-200"
            >
              <div className="flex-shrink-0 mt-1">{feat.icon}</div>
              <div>
                <h3 className="font-montserrat font-700 text-white text-xl mb-2">
                  {feat.title}
                </h3>
                <p
                  className="font-poppins text-white/60 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: feat.desc }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
