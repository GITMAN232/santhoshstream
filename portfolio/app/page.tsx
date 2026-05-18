import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen" style={{ background: "#030712" }}>
      <Navbar />

      <Hero />

      {/* Divider */}
      <div className="h-px max-w-7xl mx-auto" style={{ background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.3), transparent)" }} />

      <About />

      <div className="h-px max-w-7xl mx-auto" style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.2), transparent)" }} />

      <Skills />

      <div className="h-px max-w-7xl mx-auto" style={{ background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.2), transparent)" }} />

      <Projects />

      <div className="h-px max-w-7xl mx-auto" style={{ background: "linear-gradient(90deg, transparent, rgba(245,158,11,0.2), transparent)" }} />

      <Achievements />

      <div className="h-px max-w-7xl mx-auto" style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.2), transparent)" }} />

      <Experience />

      <div className="h-px max-w-7xl mx-auto" style={{ background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.3), transparent)" }} />

      <Contact />

      <Footer />
    </main>
  );
}
