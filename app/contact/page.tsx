"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-16 text-center"
        style={{ background: "linear-gradient(135deg, #1A1A2E 0%, #2C3E50 100%)" }}
      >
        <h1 className="font-montserrat font-900 text-4xl md:text-5xl text-white mb-3">
          Contact Us
        </h1>
        <p className="font-poppins text-white/60 text-base max-w-xl mx-auto">
          Get in touch for a free, no-obligation quote. We&apos;ll get back to you fast.
        </p>
      </section>

      <section className="py-20 bg-offwhite">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12">
          {/* Info card */}
          <div>
            <h2 className="font-montserrat font-800 text-2xl text-darknavy mb-6">
              Get in Touch
            </h2>
            <div className="space-y-5 mb-8">
              <div className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm">
                <div className="w-11 h-11 bg-irishred rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-poppins text-muted text-xs mb-1">Phone</p>
                  <a href="tel:0852173108" className="font-poppins font-600 text-darknavy hover:text-irishred transition-colors">
                    085 217 3108
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm">
                <div className="w-11 h-11 bg-irishred rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-poppins text-muted text-xs mb-1">Email</p>
                  <a href="mailto:info@maroofing.ie" className="font-poppins font-600 text-darknavy hover:text-irishred transition-colors">
                    info@maroofing.ie
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm">
                <div className="w-11 h-11 bg-irishred rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-poppins text-muted text-xs mb-1">Address</p>
                  <p className="font-poppins font-600 text-darknavy">Carlow, Co. Carlow, Ireland</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm">
                <div className="w-11 h-11 bg-irishred rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-white" />
                </div>
                <div>
                  <p className="font-poppins text-muted text-xs mb-1">Hours</p>
                  <p className="font-poppins font-600 text-darknavy">Mon–Sat: 8am – 6pm</p>
                  <p className="font-poppins text-muted text-sm">Emergency call-outs available</p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="w-full h-56 rounded-2xl bg-gradient-to-br from-darknavy to-slate flex items-center justify-center shadow-sm">
              <div className="text-center text-white/30">
                <div className="text-4xl mb-2">📍</div>
                <p className="font-poppins text-sm">Google Maps</p>
                <p className="font-poppins text-xs mt-1">Embed your Google Maps iframe here</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="font-montserrat font-800 text-2xl text-darknavy mb-2">Send a Message</h2>
            <p className="font-poppins text-muted text-sm mb-6">
              Fill in the form below and we&apos;ll get back to you as soon as possible.
            </p>
            {sent ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-montserrat font-700 text-darknavy text-xl mb-2">Message Sent!</h3>
                <p className="font-poppins text-muted">We&apos;ll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 font-poppins text-sm focus:outline-none focus:border-irishred transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 font-poppins text-sm focus:outline-none focus:border-irishred transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 font-poppins text-sm focus:outline-none focus:border-irishred transition-colors"
                />
                <textarea
                  placeholder="Your Message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 font-poppins text-sm focus:outline-none focus:border-irishred transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-irishred text-white font-montserrat font-700 text-base py-4 rounded-full hover:scale-105 hover:bg-red-700 transition-all duration-200"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
