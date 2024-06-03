import Image from "next/image";
import HeroSection from "@/components/HeroSection";

import About from "@/components/About";
import Navbarr from "@/components/MobailNav/Navbar";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <Services/>
      <About />
      <Projects/>
      <Contact/>
      
      
    </main>
  );
}
