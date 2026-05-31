import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Check, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | M&A Roofing Carlow",
  description:
    "Learn about M&A Roofing and Guttering — Carlow's most trusted roofing company with 20+ years experience.",
};

const milestones = [
  { year: "2004", text: "M&A Roofing established in Carlow, serving local homeowners." },
  { year: "2008", text: "Expanded to cover Kilkenny and Wicklow counties." },
  { year: "2012", text: "Achieved 5-star status on Google Reviews." },
  { year: "2016", text: "Launched insurance-backed guarantee on all roofing works." },
  { year: "2020", text: "Celebrated 400+ clients served annually across the south-east." },
  { year: "2024", text: "20+ years strong — still family-run, still putting customers first." },
];

const accreditations = [
  "Registered with Revenue Commissioners",
  "Fully Insured — Public Liability",
  "Insurance-Backed Guarantees",
  "Irish Business Owners Association",
];

const teamImages = [
  {
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&q=80",
    name: "Michael",
    role: "Lead Roofer",
  },
  {
    src: "https://images.unsplash.com/photo-1582015752624-e8b1e4c77a1f?w=400&h=400&fit=crop&q=80",
    name: "Andy",
    role: "Guttering Specialist",
  },
  {
    src: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=400&h=400&fit=crop&q=80",
    name: "Seán",
    role: "Project Manager",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=600&fit=crop&q=80"
          alt="Roofing team at work"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-darknavy/80" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block bg-white/10 text-white font-poppins font-600 text-sm px-4 py-1 rounded-full mb-4">
            About M&amp;A Roofing
          </span>
          <h1 className="font-montserrat font-900 text-4xl md:text-5xl text-white mb-4">
            Carlow&apos;s Trusted Roofers Since 2004
          </h1>
          <p className="font-poppins text-white/70 text-lg">
            Over 20 years of quality roofing and guttering work across Carlow, Kilkenny and Wicklow.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-montserrat font-800 text-3xl text-darknavy mb-5">Our Story</h2>
            <p className="font-poppins text-muted text-base leading-relaxed mb-4">
              M&amp;A Roofing and Guttering was founded in Carlow over two decades ago with a simple
              goal: to provide honest, quality roofing work at a fair price to the people of Carlow
              and the surrounding counties.
            </p>
            <p className="font-poppins text-muted text-base leading-relaxed mb-4">
              What started as a small family operation has grown into one of the most respected
              roofing contractors in the south-east of Ireland. We&apos;ve built our reputation the
              old-fashioned way — by doing great work and treating every customer with respect.
            </p>
            <p className="font-poppins text-muted text-base leading-relaxed mb-8">
              Today we serve hundreds of clients every year across Carlow, Kilkenny, Wicklow and
              beyond — from individual homeowners to commercial property managers.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "100% Irish — locally owned and operated",
                "Fully insured with public liability cover",
                "Insurance-backed guarantees on all work",
                "Free, no-obligation quotations",
                "400+ clients served per year",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-irishred/10 flex items-center justify-center">
                    <Check size={13} className="text-irishred" />
                  </span>
                  <span className="font-poppins text-sm text-gray-700 font-500">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-irishred text-white font-montserrat font-700 text-sm px-6 py-3 rounded-full hover:scale-105 transition-all duration-200"
            >
              Get a Free Quote <ChevronRight size={16} />
            </Link>
          </div>
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&h=600&fit=crop&q=80"
              alt="Beautiful Irish home with new roof"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-offwhite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-montserrat font-800 text-3xl text-darknavy text-center mb-12">
            Our Journey
          </h2>
          <div className="space-y-6">
            {milestones.map((m) => (
              <div key={m.year} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-16 text-right">
                  <span className="font-montserrat font-700 text-irishred text-base">{m.year}</span>
                </div>
                <div className="flex-shrink-0 w-px bg-irishred/20 self-stretch relative">
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-irishred" />
                </div>
                <div className="flex-1 pb-6">
                  <p className="font-poppins text-gray-700 text-sm leading-relaxed">{m.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-montserrat font-800 text-3xl text-darknavy mb-4">
            Memberships &amp; Accreditations
          </h2>
          <p className="font-poppins text-muted text-base mb-10 max-w-xl mx-auto">
            We maintain all necessary registrations and accreditations to ensure the highest
            standards of work and compliance.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {accreditations.map((a) => (
              <div
                key={a}
                className="bg-offwhite rounded-2xl p-6 flex flex-col items-center gap-3"
              >
                <div className="w-12 h-12 bg-irishred/10 rounded-xl flex items-center justify-center text-2xl">
                  🏆
                </div>
                <p className="font-poppins text-gray-700 text-xs text-center font-500">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-darknavy">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-montserrat font-800 text-3xl text-white mb-4">Our Team</h2>
          <p className="font-poppins text-white/60 text-base mb-10 max-w-xl mx-auto">
            A dedicated team of experienced roofing professionals based right here in Carlow.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {teamImages.map((member) => (
              <div key={member.role} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="relative w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden">
                  <Image
                    src={member.src}
                    alt={member.role}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="font-montserrat font-700 text-white text-base mb-1">{member.name}</p>
                <p className="font-poppins text-white/50 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
