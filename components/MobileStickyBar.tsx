"use client";
import Link from "next/link";
import { Phone } from "lucide-react";

export default function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden flex">
      <a
        href="tel:0852173108"
        className="flex-1 bg-irishred text-white flex items-center justify-center gap-2 py-4 font-poppins font-600 text-xs tracking-widest uppercase"
      >
        <Phone size={14} /> Call Now
      </a>
      <Link
        href="/contact"
        className="flex-1 bg-ink text-white flex items-center justify-center gap-2 py-4 font-poppins font-600 text-xs tracking-widest uppercase border-l border-white/10"
      >
        Free Quote
      </Link>
    </div>
  );
}
