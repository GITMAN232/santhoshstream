import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProfileSelection from "@/components/ProfileSelection";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import HobbiesSection from "@/components/HobbiesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

export default function Landing() {
  const [hasEntered, setHasEntered] = useState(false);
  const [activeSection, setActiveSection] = useState("About");

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
          <ProfileSelection onEnter={() => setHasEntered(true)} />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Navbar activeSection={activeSection} onNavigate={setActiveSection} />
            
            <motion.main
              key={activeSection}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            >
              {renderSection()}
            </motion.main>

            {/* Footer */}
            <footer className="bg-[#141414] border-t-4 border-black py-8 px-4">
              <div className="max-w-6xl mx-auto text-center">
                <p className="text-[#B3B3B3] text-lg mb-2">
                  © 2025 SanthoshFlix. All Rights Reserved.
                </p>
                <p className="text-[#00FF80] font-bold text-xl">
                  Where Creativity Streams Nonstop. Press Play ▶️
                </p>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
