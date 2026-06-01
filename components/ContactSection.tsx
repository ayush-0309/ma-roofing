"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, AlertCircle } from "lucide-react";
import { services } from "@/lib/services";

interface FormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  service: string;
  emergency: string;
  description: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  address?: string;
  service?: string;
  emergency?: string;
}

const initial: FormData = { name: "", phone: "", email: "", address: "", service: "", emergency: "", description: "" };

function validate(f: FormData): FormErrors {
  const e: FormErrors = {};
  if (!f.name.trim())   e.name = "Required";
  if (!f.phone.trim())  e.phone = "Required";
  else if (!/^[\d\s\+\-\(\)]{7,15}$/.test(f.phone.trim())) e.phone = "Invalid number";
  if (!f.email.trim())  e.email = "Required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) e.email = "Invalid email";
  if (!f.address.trim()) e.address = "Required";
  if (!f.service)       e.service = "Required";
  if (!f.emergency)     e.emergency = "Required";
  return e;
}

const inputCls = (err?: string) =>
  `w-full border ${err ? "border-irishred/70 bg-red-50/20" : "border-white/20"} bg-white/10 px-4 py-3 text-white placeholder-white/35 font-poppins text-sm focus:outline-none focus:border-white/50 transition-colors`;

function ErrMsg({ msg }: { msg?: string }) {
  if (!msg) return null;
  return (
    <p className="flex items-center gap-1 font-poppins text-[11px] text-red-300 mt-1">
      <AlertCircle size={10} /> {msg}
    </p>
  );
}

export default function ContactSection() {
  const [form, setForm]     = useState<FormData>(initial);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [sent, setSent]     = useState(false);

  const set = (k: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const val = e.target.value;
    const updated = { ...form, [k]: val };
    setForm(updated);
    if (touched[k as keyof FormErrors]) {
      const allErrs = validate(updated);
      setErrors((prev) => {
        const next = { ...prev };
        if (allErrs[k as keyof FormErrors]) { next[k as keyof FormErrors] = allErrs[k as keyof FormErrors]; }
        else { delete next[k as keyof FormErrors]; }
        return next;
      });
    }
  };

  const blur = (k: keyof FormErrors) => () => {
    setTouched((t) => ({ ...t, [k]: true }));
    const allErrs = validate(form);
    setErrors((prev) => {
      const next = { ...prev };
      if (allErrs[k]) { next[k] = allErrs[k]; }
      else { delete next[k]; }
      return next;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    setTouched({ name: true, phone: true, email: true, address: true, service: true, emergency: true });
    if (!Object.keys(errs).length) setSent(true);
  };

  return (
    <section className="py-24 md:py-32 bg-white border-t border-stone">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
          >
            <p className="font-poppins text-xs tracking-widest uppercase text-irishred mb-5">Get In Touch</p>
            <h2 className="font-montserrat font-800 text-3xl md:text-4xl lg:text-5xl text-ink leading-tight mb-5">
              Let&apos;s Talk<br />About Your Roof
            </h2>
            <span className="divider mb-10 block" />
            <p className="font-poppins text-[15px] text-muted leading-relaxed mb-12 max-w-sm">
              Get in touch for a free, no-obligation quote. We typically respond within a few hours.
            </p>
            <div className="space-y-7">
              {[
                { icon: <Phone size={16} />, label: "Phone",   value: "085 217 3108",       href: "tel:0852173108" },
                { icon: <Mail  size={16} />, label: "Email",   value: "info@maroofing.ie",  href: "mailto:info@maroofing.ie" },
                { icon: <MapPin size={16}/>, label: "Address", value: "Carlow, Co. Carlow", href: undefined },
              ].map(({ icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-5">
                  <div className="w-10 h-10 border border-stone flex items-center justify-center text-muted flex-shrink-0">{icon}</div>
                  <div>
                    <p className="font-poppins text-xs tracking-widest uppercase text-muted mb-0.5">{label}</p>
                    {href
                      ? <a href={href} className="font-poppins text-sm text-ink hover:text-irishred transition-colors">{value}</a>
                      : <p className="font-poppins text-sm text-ink">{value}</p>}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-10">
              {[
                { label: "Fb", svg: <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
                { label: "Ig", svg: <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> },
                { label: "Li", svg: <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
              ].map(({ svg, label }) => (
                <a key={label} href="#" aria-label={label}
                  className="w-9 h-9 border border-stone flex items-center justify-center text-muted hover:border-irishred hover:text-irishred transition-colors duration-300">
                  {svg}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}
            className="bg-ink p-8 lg:p-10"
          >
            {sent ? (
              <div className="flex flex-col items-start justify-center py-12">
                <p className="font-poppins text-[10px] tracking-widest uppercase text-irishred mb-3">Sent</p>
                <h3 className="font-montserrat font-800 text-3xl text-white mb-2">Thank you.</h3>
                <p className="font-poppins text-white/50 text-sm">We&apos;ll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">

                {/* Name + Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-poppins text-[10px] tracking-widest uppercase text-white/40 mb-1.5 block">Name *</label>
                    <input type="text" placeholder="John Murphy" value={form.name}
                      onChange={set("name")} onBlur={blur("name")}
                      className={inputCls(touched.name ? errors.name : undefined)} />
                    <ErrMsg msg={touched.name ? errors.name : undefined} />
                  </div>
                  <div>
                    <label className="font-poppins text-[10px] tracking-widest uppercase text-white/40 mb-1.5 block">Phone *</label>
                    <input type="tel" placeholder="085 123 4567" value={form.phone}
                      onChange={set("phone")} onBlur={blur("phone")}
                      className={inputCls(touched.phone ? errors.phone : undefined)} />
                    <ErrMsg msg={touched.phone ? errors.phone : undefined} />
                  </div>
                </div>

                {/* Email + Address */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-poppins text-[10px] tracking-widest uppercase text-white/40 mb-1.5 block">Email *</label>
                    <input type="email" placeholder="john@email.com" value={form.email}
                      onChange={set("email")} onBlur={blur("email")}
                      className={inputCls(touched.email ? errors.email : undefined)} />
                    <ErrMsg msg={touched.email ? errors.email : undefined} />
                  </div>
                  <div>
                    <label className="font-poppins text-[10px] tracking-widest uppercase text-white/40 mb-1.5 block">Town / Area *</label>
                    <input type="text" placeholder="e.g. Bagenalstown" value={form.address}
                      onChange={set("address")} onBlur={blur("address")}
                      className={inputCls(touched.address ? errors.address : undefined)} />
                    <ErrMsg msg={touched.address ? errors.address : undefined} />
                  </div>
                </div>

                {/* Service + Emergency */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-poppins text-[10px] tracking-widest uppercase text-white/40 mb-1.5 block">Service *</label>
                    <select value={form.service} onChange={set("service")} onBlur={blur("service")}
                      className={`${inputCls(touched.service ? errors.service : undefined)} appearance-none cursor-pointer`}>
                      <option value="">Select…</option>
                      {services.map((s) => <option key={s.slug} value={s.slug}>{s.title}</option>)}
                      <option value="other">Other / Not Sure</option>
                    </select>
                    <ErrMsg msg={touched.service ? errors.service : undefined} />
                  </div>
                  <div>
                    <label className="font-poppins text-[10px] tracking-widest uppercase text-white/40 mb-1.5 block">Emergency? *</label>
                    <div className="flex h-[46px]">
                      {["Yes", "No"].map((opt) => (
                        <button key={opt} type="button"
                          onClick={() => { setForm((f) => ({ ...f, emergency: opt })); setTouched((t) => ({ ...t, emergency: true })); setErrors((prev) => { const n = { ...prev }; delete n.emergency; return n; }); }}
                          className={`flex-1 border font-poppins text-sm font-500 transition-colors duration-200 ${
                            form.emergency === opt
                              ? opt === "Yes" ? "bg-irishred text-white border-irishred" : "bg-white text-ink border-white"
                              : "bg-transparent text-white/50 border-white/20 hover:border-white/40"
                          } ${opt === "Yes" ? "border-r-0" : ""}`}>
                          {opt}
                        </button>
                      ))}
                    </div>
                    <ErrMsg msg={touched.emergency ? errors.emergency : undefined} />
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="font-poppins text-[10px] tracking-widest uppercase text-white/40 mb-1.5 block">Describe Issue <span className="normal-case text-white/25">(optional)</span></label>
                  <textarea placeholder="Briefly describe the problem…" value={form.description}
                    onChange={set("description")} rows={3}
                    className={`${inputCls()} resize-none`} />
                </div>

                <button type="submit"
                  className="w-full bg-irishred text-white font-poppins font-600 text-xs tracking-widest uppercase py-4 hover:bg-red-700 transition-colors duration-300">
                  Send Message
                </button>

                <p className="font-poppins text-[11px] text-white/25 text-center">* Required · Your details stay private</p>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
