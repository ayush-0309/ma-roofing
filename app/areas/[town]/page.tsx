import { notFound } from "next/navigation";
import { towns, getTownBySlug } from "@/lib/areas";
import { services } from "@/lib/services";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Check, Phone, ChevronRight } from "lucide-react";

interface Props {
  params: { town: string };
}

export async function generateStaticParams() {
  return towns.map((t) => ({ town: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const town = getTownBySlug(params.town);
  if (!town) return {};
  return {
    title: `Roof Repairs in ${town.name} | M&A Roofing Carlow`,
    description: `Professional roofing and guttering services in ${town.name}, Co. ${town.county}. Call M&A Roofing for a free quote — 085 217 3108.`,
  };
}

export default function AreaPage({ params }: Props) {
  const town = getTownBySlug(params.town);
  if (!town) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=600&fit=crop&q=80"
          alt={`Roofing services in ${town.name}`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-darknavy/80" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block bg-irishred/20 border border-irishred/40 text-white font-poppins font-medium text-sm px-4 py-1 rounded-full mb-4">
            Serving {town.name}
          </span>
          <h1 className="font-montserrat font-900 text-4xl md:text-5xl text-white mb-4">
            Roof Repairs in {town.name}
          </h1>
          <p className="font-poppins text-white/70 text-lg mb-8">
            Professional roofing and guttering services in {town.name}, Co. {town.county}.
            Fully insured. Free quotes. 20+ years experience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-irishred text-white font-montserrat font-700 text-base px-8 py-4 rounded-full hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
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

      {/* Local content */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-montserrat font-800 text-3xl text-darknavy mb-5">
              Roofing Services in {town.name}
            </h2>
            <p className="font-poppins text-muted text-base leading-relaxed mb-4">
              M&amp;A Roofing has been serving homeowners and businesses in {town.name} and across
              Co. {town.county} for over 20 years. Whether you need a full roof replacement, a quick
              repair, or guttering and fascia work, we have the experience and equipment to get the
              job done properly.
            </p>
            <p className="font-poppins text-muted text-base leading-relaxed mb-6">
              We offer free, no-obligation quotations to all customers in {town.name}. Our team will
              assess the work, explain what needs to be done, and give you a clear, honest price.
              No hidden costs, no surprises.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                `Fast response times across ${town.county}`,
                "Fully insured — public liability cover",
                "Insurance-backed guarantees",
                "20+ years experience",
                "Free no-obligation quotations",
                "Domestic and commercial work",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-irishred/10 flex items-center justify-center">
                    <Check size={13} className="text-irishred" />
                  </span>
                  <span className="font-poppins text-sm text-gray-700 font-500">{item}</span>
                </li>
              ))}
            </ul>

            {/* Local area image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&q=80"
                alt={`Roofing work in ${town.name}`}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Services list */}
          <div>
            <h3 className="font-montserrat font-700 text-xl text-darknavy mb-5">
              Services We Offer in {town.name}
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-offwhite hover:bg-irishred/5 border border-transparent hover:border-irishred/20 transition-all duration-200 group"
                >
                  <span className="text-2xl">{s.icon}</span>
                  <div className="flex-1">
                    <p className="font-montserrat font-700 text-darknavy text-base">{s.title}</p>
                    <p className="font-poppins text-muted text-xs">
                      {s.shortDesc.slice(0, 60)}…
                    </p>
                  </div>
                  <ChevronRight
                    size={16}
                    className="text-irishred opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-irishred">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-montserrat font-800 text-3xl text-white mb-4">
            Ready to Get Started in {town.name}?
          </h2>
          <p className="font-poppins text-white/80 text-base mb-6">
            Call us today for a free quote. We cover all of {town.name} and surrounding areas.
          </p>
          <a
            href="tel:0852173108"
            className="inline-flex items-center gap-2 bg-white text-irishred font-montserrat font-700 text-base px-8 py-4 rounded-full hover:scale-105 transition-all duration-200"
          >
            <Phone size={18} /> Call 085 217 3108
          </a>
        </div>
      </section>
    </>
  );
}
