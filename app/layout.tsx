import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import WhatsAppButton from "@/components/WhatsAppButton";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "M&A Roofing Carlow | #1 Roofers in Carlow",
  description:
    "M&A Roofing and Guttering — Carlow's most trusted roofing company with 20+ years experience. Covering Carlow, Kilkenny, Wicklow and surrounding counties. Fully insured, insurance-backed guarantees. Call 085 217 3108 for a free quote.",
  keywords:
    "roofers Carlow, roofing Carlow, guttering Carlow, roof repairs Carlow, flat roof Carlow, chimney repair Carlow",
  openGraph: {
    title: "M&A Roofing Carlow | #1 Roofers in Carlow",
    description:
      "Carlow's most trusted roofing company. 20+ years experience, fully insured, free quotes.",
    type: "website",
    locale: "en_IE",
    siteName: "M&A Roofing and Guttering",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable}`}>
      <body className="font-poppins bg-white text-gray-900 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileStickyBar />
        <WhatsAppButton />
      </body>
    </html>
  );
}
