"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Areas", href: "/#areas" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen ? "bg-darknavy shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight">
          <span className="font-montserrat font-900 text-white text-lg md:text-xl tracking-tight">
            M&amp;A Roofing
          </span>
          <span className="font-poppins text-irishred text-xs font-medium tracking-wide">
            &amp; Guttering Carlow
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-white/80 hover:text-white font-poppins text-sm font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:0852173108"
            className="flex items-center gap-2 text-white font-poppins text-sm font-medium"
          >
            <Phone size={15} className="text-irishred" />
            085 217 3108
          </a>
          <Link
            href="/contact"
            className="bg-irishred text-white font-montserrat font-700 text-sm px-5 py-2 rounded-full hover:scale-105 transition-all duration-200"
          >
            Free Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile full-screen slide-in nav */}
      <div
        className={`md:hidden bg-darknavy transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-screen py-6" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-5 px-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white font-poppins text-lg font-medium border-b border-white/10 w-full text-center pb-4"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:0852173108"
            className="flex items-center gap-2 text-white font-poppins text-base font-medium mt-2"
          >
            <Phone size={16} className="text-irishred" />
            085 217 3108
          </a>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="bg-irishred text-white font-montserrat font-700 text-base px-8 py-3 rounded-full hover:scale-105 transition-all duration-200 mt-2"
          >
            Free Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
