"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home",     href: "/" },
  { label: "Services", href: "/#services" },
  { label: "About",    href: "/about" },
  { label: "Gallery",  href: "/gallery" },
  { label: "Areas",    href: "/#areas" },
  { label: "Contact",  href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-white/95 backdrop-blur-md border-b border-stone shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 md:h-20">

        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span className={`font-montserrat font-800 text-base md:text-lg tracking-widest uppercase transition-colors duration-500 ${solid ? "text-ink" : "text-white"}`}>
            M&amp;A Roofing
          </span>
          <span className="font-poppins text-irishred text-[10px] tracking-widest uppercase font-500">
            &amp; Guttering · Carlow
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`font-poppins text-xs tracking-widest uppercase font-500 transition-colors duration-300 hover:text-irishred ${
                solid ? "text-ink/70" : "text-white/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop right */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href="tel:0852173108"
            className={`flex items-center gap-2 font-poppins text-xs tracking-wider font-500 transition-colors duration-300 hover:text-irishred ${
              solid ? "text-ink" : "text-white"
            }`}
          >
            <Phone size={13} className="text-irishred" />
            085 217 3108
          </a>
          <Link
            href="/contact"
            className="border border-irishred text-irishred font-poppins font-600 text-xs tracking-widest uppercase px-5 py-2.5 hover:bg-irishred hover:text-white transition-all duration-300"
          >
            Free Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-2 transition-colors ${solid ? "text-ink" : "text-white"}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-white border-t border-stone transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-screen py-8" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-6 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-poppins text-xs tracking-widest uppercase font-500 text-ink/70 hover:text-irishred transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:0852173108"
            className="flex items-center gap-2 font-poppins text-sm text-ink mt-2"
          >
            <Phone size={14} className="text-irishred" />
            085 217 3108
          </a>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="border border-irishred text-irishred font-poppins font-600 text-xs tracking-widest uppercase px-8 py-3 hover:bg-irishred hover:text-white transition-all duration-300 mt-1"
          >
            Free Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
