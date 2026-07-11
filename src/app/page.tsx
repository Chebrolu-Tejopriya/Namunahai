import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import Industries from "@/components/Industries";
import Process from "@/components/Process";
import Features from "@/components/Features";
import Integrations from "@/components/Integrations";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoStrip />
        <Industries />
        <Process />
        <Features />
        <Integrations />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
