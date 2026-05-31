"use client";
import Link from "next/link";
import { Phone } from "lucide-react";

export default function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden flex shadow-2xl">
      <a
        href="tel:0852173108"
        className="flex-1 bg-irishred text-white flex items-center justify-center gap-2 py-4 font-montserrat font-700 text-sm"
      >
        <Phone size={16} />
        Call Now
      </a>
      <Link
        href="/contact"
        className="flex-1 bg-darknavy text-white flex items-center justify-center gap-2 py-4 font-montserrat font-700 text-sm border-l border-white/10"
      >
        Get Quote
      </Link>
    </div>
  );
}
