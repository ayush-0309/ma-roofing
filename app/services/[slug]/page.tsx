import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "@/lib/services";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Check, ChevronRight, Phone } from "lucide-react";

interface Props {
  params: { slug: string };
}

/* Per-service stock image sets */
const serviceImages: Record<string, string[]> = {
  roofing: [
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&q=80",
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&q=80",
    "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&h=600&fit=crop&q=80",
  ],
  "roof-repair": [
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&q=80",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=80",
  ],
  guttering: [
    "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800&h=600&fit=crop&q=80",
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=600&fit=crop&q=80",
    "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&h=600&fit=crop&q=80",
  ],
  "flat-roofs": [
    "https://images.unsplash.com/photo-1599619585752-c3edb42a414c?w=800&h=600&fit=crop&q=80",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop&q=80",
    "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop&q=80",
  ],
  "chimney-repair": [
    "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800&h=600&fit=crop&q=80",
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop&q=80",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&q=80",
  ],
  "fascia-soffits": [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=80",
    "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&h=600&fit=crop&q=80",
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=600&fit=crop&q=80",
  ],
};

const fallbackImages = [
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&q=80",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=80",
];

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  return {
    title: `${service.title} in Carlow | M&A Roofing`,
    description: service.shortDesc,
  };
}

export default function ServicePage({ params }: Props) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const images = serviceImages[params.slug] ?? fallbackImages;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <Image
          src={images[0]}
          alt={`${service.title} in Carlow`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-darknavy/75" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-5xl mb-4">{service.icon}</div>
          <h1 className="font-montserrat font-900 text-4xl md:text-5xl text-white mb-4">
            {service.title} in Carlow
          </h1>
          <p className="font-poppins text-white/70 text-lg max-w-xl mx-auto">
            {service.shortDesc}
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-montserrat font-800 text-3xl text-darknavy mb-5">
              Professional {service.title}
            </h2>
            <p className="font-poppins text-muted text-base leading-relaxed mb-6">
              {service.description}
            </p>
            <p className="font-poppins text-muted text-base leading-relaxed">
              Our team is fully insured, experienced, and committed to delivering quality work across
              Carlow, Kilkenny, Wicklow and surrounding areas. All work comes with our
              insurance-backed guarantee.
            </p>
          </div>
          <div>
            <h3 className="font-montserrat font-700 text-xl text-darknavy mb-4">
              What&apos;s Included
            </h3>
            <ul className="space-y-3">
              {service.includes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-irishred/10 flex items-center justify-center">
                    <Check size={13} className="text-irishred" />
                  </span>
                  <span className="font-poppins text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Image grid */}
      <section className="py-12 bg-offwhite">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {images.map((src, i) => (
              <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                <Image
                  src={src}
                  alt={`${service.title} project ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg, #1A1A2E 0%, #C0392B 100%)" }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-montserrat font-800 text-3xl md:text-4xl text-white mb-4">
            Need {service.title}? Get a Free Quote
          </h2>
          <p className="font-poppins text-white/70 text-base mb-8">
            Contact M&amp;A Roofing today for a no-obligation quote on{" "}
            {service.title.toLowerCase()} in Carlow and surrounding areas.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-irishred font-montserrat font-700 text-base px-8 py-4 rounded-full hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
            >
              Get a Free Quote <ChevronRight size={18} />
            </Link>
            <a
              href="tel:0852173108"
              className="border-2 border-white text-white font-montserrat font-700 text-base px-8 py-4 rounded-full hover:scale-105 hover:bg-white hover:text-darknavy transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Phone size={18} /> 085 217 3108
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
