"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Category = "All" | "Flat Roofs" | "Pitched Roofs" | "Guttering" | "Chimneys";

const galleryItems = [
  {
    id: 1,
    category: "Flat Roofs" as Category,
    label: "EPDM Flat Roof",
    location: "Carlow Town",
    src: "https://images.unsplash.com/photo-1599619585752-c3edb42a414c?w=800&h=600&fit=crop&q=80",
    aspect: "aspect-[4/3]",
  },
  {
    id: 2,
    category: "Pitched Roofs" as Category,
    label: "Full Re-Roof",
    location: "Kilkenny",
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=800&fit=crop&q=80",
    aspect: "aspect-square",
  },
  {
    id: 3,
    category: "Guttering" as Category,
    label: "uPVC Guttering",
    location: "Bagenalstown",
    src: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800&h=1000&fit=crop&q=80",
    aspect: "aspect-[4/5]",
  },
  {
    id: 4,
    category: "Chimneys" as Category,
    label: "Chimney Repoint",
    location: "Rathvilly",
    src: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800&h=600&fit=crop&q=80",
    aspect: "aspect-[4/3]",
  },
  {
    id: 5,
    category: "Flat Roofs" as Category,
    label: "GRP Fibreglass Roof",
    location: "Wicklow",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=800&fit=crop&q=80",
    aspect: "aspect-square",
  },
  {
    id: 6,
    category: "Pitched Roofs" as Category,
    label: "Slate Replacement",
    location: "Borris",
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&q=80",
    aspect: "aspect-[4/3]",
  },
  {
    id: 7,
    category: "Guttering" as Category,
    label: "Cast Iron Guttering",
    location: "Clonegal",
    src: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=1000&fit=crop&q=80",
    aspect: "aspect-[4/5]",
  },
  {
    id: 8,
    category: "Chimneys" as Category,
    label: "Chimney Rebuild",
    location: "Hacketstown",
    src: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop&q=80",
    aspect: "aspect-[4/3]",
  },
  {
    id: 9,
    category: "Flat Roofs" as Category,
    label: "Flat Roof Extension",
    location: "Myshall",
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=800&fit=crop&q=80",
    aspect: "aspect-square",
  },
  {
    id: 10,
    category: "Pitched Roofs" as Category,
    label: "Ridge Tile Repair",
    location: "Ballon",
    src: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&h=600&fit=crop&q=80",
    aspect: "aspect-[4/3]",
  },
  {
    id: 11,
    category: "Guttering" as Category,
    label: "Fascia & Soffit",
    location: "Leighlinbridge",
    src: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&h=1000&fit=crop&q=80",
    aspect: "aspect-[4/5]",
  },
  {
    id: 12,
    category: "Chimneys" as Category,
    label: "Lead Flashing",
    location: "Clonmore",
    src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop&q=80",
    aspect: "aspect-[4/3]",
  },
];

const categories: Category[] = ["All", "Flat Roofs", "Pitched Roofs", "Guttering", "Chimneys"];

export default function GalleryPage() {
  const [active, setActive] = useState<Category>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    active === "All" ? galleryItems : galleryItems.filter((i) => i.category === active);

  return (
    <>
      {/* Hero */}
      <section
        className="pt-32 pb-16 text-center"
        style={{ background: "linear-gradient(135deg, #1A1A2E 0%, #2C3E50 100%)" }}
      >
        <h1 className="font-montserrat font-900 text-4xl md:text-5xl text-white mb-3">
          Our Project Gallery
        </h1>
        <p className="font-poppins text-white/60 text-base max-w-xl mx-auto">
          Real work. Real results. Quality roofing and guttering across Carlow and the south-east.
        </p>
      </section>

      {/* Filter tabs */}
      <section className="py-8 bg-offwhite sticky top-20 z-30 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-poppins font-500 text-sm px-5 py-2 rounded-full transition-all duration-200 ${
                active === cat
                  ? "bg-irishred text-white shadow"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry grid */}
      <section className="py-12 bg-offwhite">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            <AnimatePresence>
              {filtered.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className={`break-inside-avoid rounded-xl overflow-hidden cursor-pointer group relative ${item.aspect}`}
                  onClick={() => setLightbox(item.id)}
                >
                  <Image
                    src={item.src}
                    alt={`${item.label} in ${item.location}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-4">
                    <div>
                      <p className="font-montserrat font-700 text-white">{item.label}</p>
                      <p className="font-poppins text-white/70 text-sm">{item.location}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-3xl w-full aspect-[4/3] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const item = galleryItems.find((i) => i.id === lightbox);
                if (!item) return null;
                return (
                  <>
                    <Image
                      src={item.src.replace(/w=\d+&h=\d+/, "w=1200&h=900")}
                      alt={item.label}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 p-6">
                      <p className="font-montserrat font-700 text-white text-xl">{item.label}</p>
                      <p className="font-poppins text-white/70 text-sm">{item.location}</p>
                    </div>
                  </>
                );
              })()}
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-darknavy font-bold text-xl hover:bg-white transition-colors z-10"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
