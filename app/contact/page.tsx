"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, AlertCircle } from "lucide-react";
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

const initialForm: FormData = {
  name: "", phone: "", email: "", address: "",
  service: "", emergency: "", description: "",
};

function validate(f: FormData): FormErrors {
  const e: FormErrors = {};
  if (!f.name.trim())    e.name     = "Name is required.";
  if (!f.phone.trim())   e.phone    = "Phone number is required.";
  else if (!/^[\d\s\+\-\(\)]{7,15}$/.test(f.phone.trim())) e.phone = "Enter a valid phone number.";
  if (!f.email.trim())   e.email    = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) e.email = "Enter a valid email address.";
  if (!f.address.trim()) e.address  = "Town or locality is required.";
  if (!f.service)        e.service  = "Please select a service.";
  if (!f.emergency)      e.emergency = "Please indicate if this is an emergency.";
  return e;
}

/* ── Field wrapper ────────────────────────────────────── */
function Field({ label, required, error, children }: {
  label: string; required?: boolean; error?: string; children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-poppins text-[11px] tracking-widest uppercase text-muted flex items-center gap-1">
        {label}{required && <span className="text-irishred">*</span>}
      </label>
      {children}
      {error && (
        <p className="flex items-center gap-1.5 font-poppins text-xs text-irishred mt-0.5">
          <AlertCircle size={11} /> {error}
        </p>
      )}
    </div>
  );
}

const inputCls = (error?: string) =>
  `border ${error ? "border-irishred bg-red-50/30" : "border-stone"} px-4 py-3 font-poppins text-sm text-ink placeholder-muted focus:outline-none focus:border-ink transition-colors bg-transparent`;

/* ── Page ─────────────────────────────────────────────── */
export default function ContactPage() {
  const [form, setForm]       = useState<FormData>(initialForm);
  const [errors, setErrors]   = useState<FormErrors>({});
  const [sent, setSent]       = useState(false);
  const [touched, setTouched] = useState<Partial<Record<keyof FormErrors, boolean>>>({});

  /* Update field + clear/set only that field's error */
  const set = (key: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const val = e.target.value;
    const updated = { ...form, [key]: val };
    setForm(updated);
    if (touched[key as keyof FormErrors]) {
      const allErrs = validate(updated);
      setErrors((prev) => {
        const next = { ...prev };
        if (allErrs[key as keyof FormErrors]) {
          next[key as keyof FormErrors] = allErrs[key as keyof FormErrors];
        } else {
          delete next[key as keyof FormErrors];
        }
        return next;
      });
    }
  };

  const blur = (key: keyof FormErrors) => () => {
    setTouched((t) => ({ ...t, [key]: true }));
    const allErrs = validate(form);
    setErrors((prev) => {
      const next = { ...prev };
      if (allErrs[key]) { next[key] = allErrs[key]; }
      else { delete next[key]; }
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
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-16 text-center"
        style={{ background: "linear-gradient(135deg, #0C0C0C 0%, #1C1C1C 100%)" }}
      >
        <h1 className="font-montserrat font-900 text-4xl md:text-5xl text-white mb-3">
          Contact Us
        </h1>
        <p className="font-poppins text-white/50 text-sm max-w-md mx-auto tracking-wide">
          Free, no-obligation quotes · Fast response · Fully insured
        </p>
      </section>

      <section className="py-20 bg-offwhite">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 grid md:grid-cols-5 gap-12 lg:gap-16">

          {/* Info column */}
          <div className="md:col-span-2 space-y-6">
            <h2 className="font-montserrat font-800 text-2xl text-ink">Get in Touch</h2>
            <span className="divider block" />
            {[
              { icon: <Phone size={16} />, label: "Phone",   value: "085 217 3108",        href: "tel:0852173108" },
              { icon: <Mail  size={16} />, label: "Email",   value: "info@maroofing.ie",   href: "mailto:info@maroofing.ie" },
              { icon: <MapPin size={16}/>, label: "Address", value: "Carlow, Co. Carlow",  href: undefined },
              { icon: <Clock size={16} />, label: "Hours",   value: "Mon–Sat · 8am–6pm",   href: undefined },
            ].map(({ icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-10 h-10 border border-stone bg-white flex items-center justify-center text-muted flex-shrink-0">{icon}</div>
                <div>
                  <p className="font-poppins text-[10px] tracking-widest uppercase text-muted mb-0.5">{label}</p>
                  {href
                    ? <a href={href} className="font-poppins text-sm text-ink hover:text-irishred transition-colors">{value}</a>
                    : <p className="font-poppins text-sm text-ink">{value}</p>}
                </div>
              </div>
            ))}
            <div className="w-full h-48 bg-stone border border-stone/60 flex items-center justify-center mt-4">
              <p className="font-poppins text-xs text-muted tracking-wider uppercase">Google Maps embed</p>
            </div>
          </div>

          {/* Form column */}
          <div className="md:col-span-3 bg-white border border-stone p-8 lg:p-10">
            {sent ? (
              <div className="h-full flex flex-col items-start justify-center py-16">
                <div className="w-12 h-12 bg-green-50 border border-green-200 flex items-center justify-center mb-6">
                  <span className="text-green-500 text-xl">✓</span>
                </div>
                <p className="font-poppins text-[10px] tracking-widest uppercase text-irishred mb-3">Message received</p>
                <h3 className="font-montserrat font-800 text-3xl text-ink mb-3">Thank you.</h3>
                <p className="font-poppins text-muted text-sm leading-relaxed max-w-sm">
                  We&apos;ll review your request and get back to you as soon as possible — usually within a few hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">

                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Full Name" required error={touched.name ? errors.name : undefined}>
                    <input type="text" placeholder="e.g. John Murphy"
                      value={form.name} onChange={set("name")} onBlur={blur("name")}
                      className={inputCls(touched.name ? errors.name : undefined)} />
                  </Field>
                  <Field label="Phone Number" required error={touched.phone ? errors.phone : undefined}>
                    <input type="tel" placeholder="e.g. 085 123 4567"
                      value={form.phone} onChange={set("phone")} onBlur={blur("phone")}
                      className={inputCls(touched.phone ? errors.phone : undefined)} />
                  </Field>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Email Address" required error={touched.email ? errors.email : undefined}>
                    <input type="email" placeholder="e.g. john@email.com"
                      value={form.email} onChange={set("email")} onBlur={blur("email")}
                      className={inputCls(touched.email ? errors.email : undefined)} />
                  </Field>
                  <Field label="Town / Locality" required error={touched.address ? errors.address : undefined}>
                    <input type="text" placeholder="e.g. Bagenalstown"
                      value={form.address} onChange={set("address")} onBlur={blur("address")}
                      className={inputCls(touched.address ? errors.address : undefined)} />
                  </Field>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Service Needed" required error={touched.service ? errors.service : undefined}>
                    <select value={form.service} onChange={set("service")} onBlur={blur("service")}
                      className={`${inputCls(touched.service ? errors.service : undefined)} appearance-none cursor-pointer`}>
                      <option value="">Select a service…</option>
                      {services.map((s) => <option key={s.slug} value={s.slug}>{s.title}</option>)}
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </Field>

                  <Field label="Is This an Emergency?" required error={touched.emergency ? errors.emergency : undefined}>
                    <div className="flex h-[46px]">
                      {["Yes", "No"].map((opt) => (
                        <button key={opt} type="button"
                          onClick={() => {
                            const updated = { ...form, emergency: opt };
                            setForm(updated);
                            setTouched((t) => ({ ...t, emergency: true }));
                            setErrors((prev) => { const n = { ...prev }; delete n.emergency; return n; });
                          }}
                          className={`flex-1 border font-poppins text-sm font-500 transition-colors duration-200 ${
                            form.emergency === opt
                              ? opt === "Yes" ? "bg-irishred text-white border-irishred" : "bg-ink text-white border-ink"
                              : "bg-white text-muted border-stone hover:border-ink/40"
                          } ${opt === "Yes" ? "border-r-0" : ""}`}>
                          {opt}
                        </button>
                      ))}
                    </div>
                  </Field>
                </div>

                <Field label="Describe the Issue">
                  <textarea
                    placeholder="Tell us about the problem — age of roof, visible damage, leaks, etc. (optional)"
                    value={form.description} onChange={set("description")} rows={4}
                    className={`${inputCls()} resize-none`} />
                </Field>

                <button type="submit"
                  className="w-full bg-irishred text-white font-poppins font-600 text-xs tracking-widest uppercase py-4 hover:bg-red-700 transition-colors duration-300 mt-2">
                  Send Message
                </button>
                <p className="font-poppins text-[11px] text-muted text-center">
                  * Required fields. We&apos;ll never share your details with third parties.
                </p>
              </form>
            )}
          </div>

        </div>
      </section>
    </>
  );
}
