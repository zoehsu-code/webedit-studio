import AboutRay from "@/components/AboutRay";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MichiganSection from "@/components/MichiganSection";
import Projects from "@/components/Projects";
import QuoteForm from "@/components/QuoteForm";
import Reviews from "@/components/Reviews";
import ServiceArea from "@/components/ServiceArea";
import Services from "@/components/Services";
import WhyRay from "@/components/WhyRay";
import { siteConfig } from "@/data/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.businessName,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  url: siteConfig.url,
  areaServed: siteConfig.serviceArea,
  address: {
    "@type": "PostalAddress",
    addressRegion: siteConfig.location,
    addressCountry: "US",
  },
  description:
    "Residential tree removal, tree trimming, storm cleanup, and arborist services in Southeast Michigan.",
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <MichiganSection />
        <WhyRay />
        <Projects />
        <AboutRay />
        <Reviews />
        <ServiceArea />
        <QuoteForm />
        <FinalCTA />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
