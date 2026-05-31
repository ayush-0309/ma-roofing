"use client";
import Link from "next/link";
import Image from "next/image";

const galleryItems = [
  {
    label: "Flat Roof",
    location: "Carlow Town",
    src: "https://images.unsplash.com/photo-1599619585752-c3edb42a414c?w=600&h=400&fit=crop&q=80",
  },
  {
    label: "Pitched Roof",
    location: "Kilkenny",
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&q=80",
  },
  {
    label: "Guttering",
    location: "Bagenalstown",
    src: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=600&h=400&fit=crop&q=80",
  },
  {
    label: "Chimney Repair",
    location: "Rathvilly",
    src: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=600&h=400&fit=crop&q=80",
  },
  {
    label: "Fascia & Soffit",
    location: "Wicklow",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop&q=80",
  },
  {
    label: "Full Re-Roof",
    location: "Borris",
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&q=80",
  },
];

export default function GalleryStrip() {
  const doubled = [...galleryItems, ...galleryItems];

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-8">
        <div className="text-center">
          <span className="inline-block bg-irishred/10 text-irishred font-poppins font-600 text-sm px-4 py-1 rounded-full mb-4">
            Gallery
          </span>
          <h2 className="font-montserrat font-800 text-3xl md:text-4xl text-darknavy">
            Our Recent Projects
          </h2>
          <p className="font-poppins text-muted mt-3 text-base max-w-xl mx-auto">
            Quality workmanship across Carlow, Kilkenny and Wicklow.
          </p>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="flex animate-marquee gap-4" style={{ width: "max-content" }}>
          {doubled.map((item, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 w-72 h-64 rounded-xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={item.src}
                alt={`${item.label} in ${item.location}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-4">
                <div>
                  <p className="font-montserrat font-700 text-white text-lg">{item.label}</p>
                  <p className="font-poppins text-white/70 text-sm">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-8">
        <Link
          href="/gallery"
          className="inline-flex items-center gap-2 text-irishred font-poppins font-600 text-base hover:gap-3 transition-all duration-200"
        >
          View Full Gallery →
        </Link>
      </div>
    </section>
  );
}
