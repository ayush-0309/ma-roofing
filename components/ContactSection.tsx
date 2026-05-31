"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="py-20 md:py-28 bg-darknavy">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-white/10 text-white font-poppins font-600 text-sm px-4 py-1 rounded-full mb-4">
              Contact Us
            </span>
            <h2 className="font-montserrat font-800 text-3xl md:text-4xl text-white mb-4 leading-tight">
              Get a Solution for All Your Roofing Needs
            </h2>
            <p className="font-poppins text-white/60 text-base mb-8">
              Get in touch today for a free, no-obligation quote. We cover all of Carlow and the surrounding counties.
            </p>

            <div className="space-y-5 mb-8">
              <a href="tel:0852173108" className="flex items-center gap-4 group">
                <div className="w-11 h-11 bg-irishred rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-poppins text-white/50 text-xs">Phone</p>
                  <p className="font-poppins text-white font-500 group-hover:text-irishred transition-colors">085 217 3108</p>
                </div>
              </a>
              <a href="mailto:info@maroofing.ie" className="flex items-center gap-4 group">
                <div className="w-11 h-11 bg-irishred rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-poppins text-white/50 text-xs">Email</p>
                  <p className="font-poppins text-white font-500 group-hover:text-irishred transition-colors">info@maroofing.ie</p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-irishred rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-poppins text-white/50 text-xs">Address</p>
                  <p className="font-poppins text-white font-500">Carlow, Co. Carlow, Ireland</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              {[
                { label: "Facebook", svg: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
                { label: "Twitter", svg: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
                { label: "Instagram", svg: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> },
                { label: "LinkedIn", svg: <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
              ].map(({ svg, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 bg-white/10 hover:bg-irishred rounded-xl flex items-center justify-center text-white transition-colors duration-200"
                >
                  {svg}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {sent ? (
              <div className="bg-green-500/10 border border-green-400/30 rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-montserrat font-700 text-white text-2xl mb-2">Message Sent!</h3>
                <p className="font-poppins text-white/60">We&apos;ll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {(["name", "phone", "email"] as const).map((field) => (
                  <input
                    key={field}
                    type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    value={form[field]}
                    onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                    required
                    className="w-full rounded-xl bg-white/10 text-white placeholder-white/50 border border-white/20 px-4 py-3 font-poppins text-sm focus:outline-none focus:border-irishred transition-colors"
                  />
                ))}
                <textarea
                  placeholder="Message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full rounded-xl bg-white/10 text-white placeholder-white/50 border border-white/20 px-4 py-3 font-poppins text-sm focus:outline-none focus:border-irishred transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-irishred text-white font-montserrat font-700 text-base py-4 rounded-full hover:scale-105 hover:bg-red-700 transition-all duration-200"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
