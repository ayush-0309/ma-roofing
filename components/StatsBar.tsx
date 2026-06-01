"use client";
import { useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";

const stats = [
  { value: 20,  suffix: "+", label: "Years in Business"  },
  { value: 400, suffix: "+", label: "Clients Per Year"    },
  { value: 5,   suffix: "",  label: "Star Google Rating"  },
  { value: 100, suffix: "%", label: "Fully Insured"       },
];

export default function StatsBar() {
  const ref     = useRef(null);
  const inView  = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-offwhite border-y border-stone">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`py-12 px-6 text-center ${
              i < stats.length - 1 ? "border-r border-stone" : ""
            }`}
          >
            <div className="font-montserrat font-900 text-4xl md:text-5xl text-ink mb-1 tracking-tight">
              {inView ? (
                <><CountUp end={stat.value} duration={2.2} />{stat.suffix}</>
              ) : (
                <span>0{stat.suffix}</span>
              )}
            </div>
            <p className="font-poppins text-xs tracking-widest uppercase text-muted font-500 mt-1">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
