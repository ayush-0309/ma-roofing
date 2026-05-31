import Link from "next/link";
import { services } from "@/lib/services";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
  { label: "Areas We Cover", href: "/#areas" },
];

export default function Footer() {
  return (
    <footer className="bg-darknavy border-t-4 border-irishred pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Column 1 */}
          <div>
            <div className="mb-4">
              <p className="font-montserrat font-900 text-white text-xl">M&amp;A Roofing</p>
              <p className="font-poppins text-irishred text-sm">&amp; Guttering Carlow</p>
            </div>
            <p className="font-poppins text-white/50 text-sm leading-relaxed mb-5">
              Carlow&apos;s most trusted roofing company. Serving Carlow, Kilkenny, Wicklow and surrounding counties for over 20 years.
            </p>
            <span className="inline-block bg-irishred/20 border border-irishred/30 text-irishred font-poppins font-600 text-xs px-3 py-1 rounded-full">
              🇮🇪 100% Irish Business
            </span>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-montserrat font-700 text-white text-base mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-poppins text-white/50 text-sm hover:text-irishred transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-montserrat font-700 text-white text-base mb-5">Our Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="font-poppins text-white/50 text-sm hover:text-irishred transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-poppins text-white/30 text-xs">
            &copy; {new Date().getFullYear()} M&amp;A Roofing and Guttering Carlow. All rights reserved.
          </p>
          <p className="font-poppins text-white/30 text-xs">
            Fully Insured · Insurance-Backed Guarantees · Free Quotes
          </p>
        </div>
      </div>
    </footer>
  );
}
