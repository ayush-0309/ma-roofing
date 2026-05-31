"use client";
import { useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";

const stats = [
  { value: 20, suffix: "+", label: "Years Experience" },
  { value: 400, suffix: "+", label: "Clients Yearly" },
  { value: 5, suffix: " Star", label: "Google Rated" },
  { value: 100, suffix: "%", label: "Fully Insured" },
];

export default function StatsBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="bg-darknavy border-t-4 border-irishred py-12 md:py-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="font-montserrat font-900 text-4xl md:text-5xl text-white mb-1">
              {isInView ? (
                <>
                  <CountUp end={stat.value} duration={2.5} />
                  {stat.suffix}
                </>
              ) : (
                <span>0{stat.suffix}</span>
              )}
            </div>
            <p className="font-poppins text-white/60 text-sm md:text-base font-400">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
