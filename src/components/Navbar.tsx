import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections = ["About", "Skills", "Hobbies", "Projects", "Contact"];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#141414]/95 backdrop-blur-sm border-b-4 border-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center cursor-pointer"
            onClick={() => onNavigate("About")}
          >
            <span
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#E50914] to-[#FF0080] bg-clip-text text-transparent tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              SANTHOSHFLIX
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {sections.map((section) => (
              <motion.button
                key={section}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onNavigate(section)}
                className={`px-4 py-2 font-bold border-3 border-black transition-all ${
                  activeSection === section
                    ? "bg-[#E50914] text-white shadow-[4px_4px_0px_#000000]"
                    : "bg-[#00FF80] text-black hover:shadow-[4px_4px_0px_#000000]"
                }`}
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {section.toUpperCase()}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 bg-[#E50914] border-3 border-black text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#141414] border-t-4 border-black"
        >
          <div className="px-4 py-4 space-y-2">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => {
                  onNavigate(section);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 font-bold border-3 border-black ${
                  activeSection === section
                    ? "bg-[#E50914] text-white"
                    : "bg-[#00FF80] text-black"
                }`}
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {section.toUpperCase()}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
