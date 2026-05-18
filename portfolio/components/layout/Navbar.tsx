"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks, socialLinks } from "@/lib/data";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section tracking
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(3, 7, 18, 0.85)"
            : "rgba(3, 7, 18, 0.2)",
          backdropFilter: scrolled ? "blur(24px)" : "blur(8px)",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.08)"
            : "1px solid transparent",
          boxShadow: scrolled
            ? "0 4px 32px rgba(0,0,0,0.4)"
            : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span
              className="font-display text-xl font-bold"
              style={{
                background: "linear-gradient(135deg, #06b6d4, #8b5cf6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              P. Santhosh
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="relative text-sm font-medium transition-colors duration-200 cursor-pointer"
                  style={{ color: isActive ? "#06b6d4" : "#94a3b8" }}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                      style={{
                        background: "linear-gradient(90deg, #06b6d4, #8b5cf6)",
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Desktop Socials + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`https://github.com/santhosh`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-white"
              style={{ color: "#94a3b8" }}
            >
              <FiGithub size={18} />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-white"
              style={{ color: "#94a3b8" }}
            >
              <FiLinkedin size={18} />
            </a>
            <a
              href={`mailto:${socialLinks.email}`}
              className="transition-colors duration-200 hover:text-white"
              style={{ color: "#94a3b8" }}
            >
              <FiMail size={18} />
            </a>

            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-2 px-4 py-2 rounded-full text-sm font-semibold text-white cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #06b6d4, #3b82f6)",
                boxShadow: "0 0 20px rgba(6,182,212,0.3)",
              }}
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 md:hidden"
            style={{
              background: "rgba(3, 7, 18, 0.97)",
              backdropFilter: "blur(24px)",
            }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => handleNavClick(link.href)}
                  className="font-display text-2xl font-semibold text-white hover:text-cyan-400 transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="flex gap-6 mt-4">
                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" style={{ color: "#94a3b8" }}>
                  <FiGithub size={22} />
                </a>
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: "#94a3b8" }}>
                  <FiLinkedin size={22} />
                </a>
                <a href={`mailto:${socialLinks.email}`} style={{ color: "#94a3b8" }}>
                  <FiMail size={22} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
