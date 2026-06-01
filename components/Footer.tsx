import Link from "next/link";
import { services } from "@/lib/services";

const quickLinks = [
  { label: "Home",          href: "/" },
  { label: "About Us",      href: "/about" },
  { label: "Gallery",       href: "/gallery" },
  { label: "Contact",       href: "/contact" },
  { label: "Areas Covered", href: "/#areas" },
];

export default function Footer() {
  return (
    <footer className="bg-ink">
      {/* Main */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-12 grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10">

        {/* Col 1 */}
        <div>
          <p className="font-montserrat font-800 text-white text-base tracking-widest uppercase mb-1">
            M&amp;A Roofing
          </p>
          <p className="font-poppins text-irishred text-xs tracking-widest uppercase mb-5">
            &amp; Guttering · Carlow
          </p>
          <p className="font-poppins text-white/35 text-sm leading-relaxed max-w-xs">
            Carlow&apos;s most trusted roofing company. Serving the south-east of Ireland for over
            20 years.
          </p>
          <span className="inline-block mt-6 border border-white/10 text-white/30 font-poppins text-xs tracking-widest uppercase px-3 py-1.5">
            🇮🇪 &nbsp;100% Irish
          </span>
        </div>

        {/* Col 2 */}
        <div>
          <p className="font-poppins text-xs tracking-widest uppercase text-white/30 mb-6">
            Quick Links
          </p>
          <ul className="space-y-3">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="font-poppins text-sm text-white/40 hover:text-white transition-colors duration-200"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 */}
        <div>
          <p className="font-poppins text-xs tracking-widest uppercase text-white/30 mb-6">
            Services
          </p>
          <ul className="space-y-3">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="font-poppins text-sm text-white/40 hover:text-white transition-colors duration-200"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="font-poppins text-white/20 text-xs">
          &copy; {new Date().getFullYear()} M&amp;A Roofing and Guttering Carlow. All rights reserved.
        </p>
        <p className="font-poppins text-white/20 text-xs">
          Fully Insured · Insurance-Backed Guarantees
        </p>
      </div>
    </footer>
  );
}
