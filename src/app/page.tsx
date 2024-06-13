import Image from "next/image";
import HeroSection from "@/components/HeroSection";

import About from "@/components/About";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Footer from "@/components/ui/footer";
import ContactPhone from "@/components/ContactPhone";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <Services />
      <About />
      <Projects />
      <Contact />
      <ContactPhone />
      <Footer />
    </main>
  );
}
