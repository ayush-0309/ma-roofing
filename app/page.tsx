import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import AboutSection from "@/components/AboutSection";
import ServicesGrid from "@/components/ServicesGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import GalleryStrip from "@/components/GalleryStrip";
import Testimonials from "@/components/Testimonials";
import AreasSection from "@/components/AreasSection";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <AboutSection />
      <ServicesGrid />
      <WhyChooseUs />
      <GalleryStrip />
      <Testimonials />
      <AreasSection />
      <ContactSection />
    </>
  );
}
