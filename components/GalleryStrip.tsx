"use client";
import Link from "next/link";
import Image from "next/image";

const galleryItems = [
  { label: "Flat Roof",     location: "Carlow Town",  src: "https://images.unsplash.com/photo-1599619585752-c3edb42a414c?w=600&h=450&fit=crop&q=80" },
  { label: "Pitched Roof",  location: "Kilkenny",     src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=450&fit=crop&q=80" },
  { label: "Guttering",     location: "Bagenalstown", src: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=600&h=450&fit=crop&q=80" },
  { label: "Chimney Repair",location: "Rathvilly",    src: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=600&h=450&fit=crop&q=80" },
  { label: "Fascia & Soffit",location:"Wicklow",      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=450&fit=crop&q=80" },
  { label: "Full Re-Roof",  location: "Borris",       src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=450&fit=crop&q=80" },
];

export default function GalleryStrip() {
  const doubled = [...galleryItems, ...galleryItems];

  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className="font-poppins text-xs tracking-widest uppercase text-irishred mb-4">
              Our Work
            </p>
            <h2 className="font-montserrat font-800 text-3xl md:text-4xl lg:text-5xl text-ink leading-tight">
              Recent Projects
            </h2>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 font-poppins text-sm text-ink border-b border-ink/20 pb-0.5 hover:border-irishred hover:text-irishred transition-colors duration-300 self-start md:self-end"
          >
            View all projects →
          </Link>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="flex animate-marquee gap-3" style={{ width: "max-content" }}>
        {doubled.map((item, i) => (
          <div
            key={i}
            className="relative flex-shrink-0 w-80 h-56 overflow-hidden group"
          >
            <Image
              src={item.src}
              alt={`${item.label} — ${item.location}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/50 transition-colors duration-400 flex items-end p-5 opacity-0 group-hover:opacity-100">
              <div>
                <p className="font-montserrat font-700 text-white text-base">{item.label}</p>
                <p className="font-poppins text-white/60 text-xs tracking-wider uppercase">{item.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
