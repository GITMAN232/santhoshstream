import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProfileSelection from "@/components/ProfileSelection";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import HobbiesSection from "@/components/HobbiesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import DesignsSection from "@/components/DesignsSection";

export default function Landing() {
  const [hasEntered, setHasEntered] = useState(false);
  const [activeSection, setActiveSection] = useState("About");
  const mainRef = useRef<HTMLDivElement>(null);

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    // Smooth scroll to top of main content area
    if (mainRef.current) {
      mainRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const renderSection = () => {
    switch (activeSection) {
      case "About":
        return <AboutSection />;
      case "Skills":
        return <SkillsSection />;
      case "Hobbies":
        return <HobbiesSection />;
      case "Projects":
        return <ProjectsSection />;
      case "Contact":
        return <ContactSection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className="min-h-screen bg-[#141414]">
      <AnimatePresence mode="wait">
        {!hasEntered ? (
          <motion.div
            key="profile-selection"
            initial={{ opacity: 1, scale: 1 }}
            exit={{ 
              opacity: 0, 
              scale: 1.5,
              transition: { 
                duration: 0.8,
                ease: [0.43, 0.13, 0.23, 0.96]
              }
            }}
          >
            <ProfileSelection onEnter={() => setHasEntered(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="main-dashboard"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              transition: { 
                duration: 0.8,
                ease: [0.43, 0.13, 0.23, 0.96],
                delay: 0.2
              }
            }}
            exit={{ opacity: 0 }}
          >
            <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
            
            <motion.main
              ref={mainRef}
              key={activeSection}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {renderSection()}
            </motion.main>

            {/* Footer */}
            <footer className="bg-[#141414] border-t border-[#2a2a2a] py-8 px-4">
              <div className="max-w-6xl mx-auto text-center">
                <p className="text-white text-sm">
                  © 2025 SanthoshFlix | Stream Your Creativity
                </p>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}