import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { WebinarSection } from "@/components/sections/WebinarSection";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <Features />
        <WebinarSection />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
