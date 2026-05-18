"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlowCard from "@/components/ui/GlowCard";
import { FiCode, FiCpu, FiLayers, FiZap } from "react-icons/fi";

const highlights = [
  { icon: FiCode, label: "Clean Code", color: "#06b6d4" },
  { icon: FiLayers, label: "Scalable Arch", color: "#3b82f6" },
  { icon: FiCpu, label: "Full Stack", color: "#8b5cf6" },
  { icon: FiZap, label: "Fast Delivery", color: "#f59e0b" },
];

const stats = [
  { value: "4+", label: "Projects Built" },
  { value: "2x", label: "Hackathon Prizes" },
  { value: "10+", label: "Technologies" },
  { value: "∞", label: "Passion" },
];

export default function About() {
  return (
    <section id="about" className="section relative overflow-hidden">
      {/* Background orb */}
      <div
        className="orb"
        style={{
          width: 500,
          height: 500,
          left: "60%",
          top: "20%",
          background: "#8b5cf6",
          opacity: 0.05,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          eyebrow="About Me"
          title="Turning ideas into"
          highlight="digital reality"
          subtitle="B.Tech CSE student at GITAM University, obsessed with building things that actually matter."
        />

        {/* Responsive Grid System: 1 col on mobile, 2 cols on tablet/desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left Side — Text & Feature Highlights */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col gap-5"
            >
              {[
                "I'm a Full Stack Developer and B.Tech CSE student at GITAM University, deeply passionate about building scalable applications, SaaS platforms, and modern frontend systems that make a real impact.",
                "My work sits at the intersection of engineering and design — I care about writing clean, maintainable code while crafting experiences that feel premium and intuitive to users.",
                "Beyond coding, I'm drawn to the startup ecosystem, cybersecurity, and the future of developer tooling. I love shipping fast, learning from real-world products, and contributing to meaningful projects.",
              ].map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="text-base sm:text-lg leading-relaxed text-slate-400"
                >
                  {text}
                </motion.p>
              ))}
            </motion.div>

            {/* Feature Highlights - Moved here for symmetry and balance */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              {highlights.map(({ icon: Icon, label, color }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.08)" }}
                  className="flex items-center gap-4 p-4 rounded-xl glass transition-colors duration-300"
                  style={{ border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <div
                    className="p-2.5 rounded-lg shrink-0"
                    style={{ background: `${color}18` }}
                  >
                    <Icon size={20} style={{ color }} />
                  </div>
                  <span className="text-sm font-semibold text-white whitespace-nowrap">{label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side — Stats, Skill Badges, Education */}
          <div className="flex flex-col gap-8 lg:gap-10">
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, i) => (
                <GlowCard 
                  key={stat.label} 
                  delay={i * 0.1} 
                  className="flex flex-col items-center justify-center p-6 sm:p-8 min-h-[140px] text-center overflow-hidden"
                >
                  <div
                    className="font-display text-4xl sm:text-5xl font-bold mb-3"
                    style={{
                      background: "linear-gradient(135deg, #06b6d4, #8b5cf6)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-slate-400 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </GlowCard>
              ))}
            </div>

            {/* Skill Badges Container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              {[
                "React.js", "Next.js", "TypeScript", "Node.js",
                "SaaS Products", "Cybersecurity", "Startup Ecosystem",
              ].map((tag) => (
                <motion.span
                  key={tag}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 0 20px rgba(6,182,212,0.3)",
                    backgroundColor: "rgba(6,182,212,0.12)"
                  }}
                  className="px-4 py-2 rounded-full text-sm font-medium font-mono-custom cursor-default transition-colors duration-300"
                  style={{
                    background: "rgba(6,182,212,0.06)",
                    border: "1px solid rgba(6,182,212,0.2)",
                    color: "#06b6d4",
                  }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="w-full p-6 sm:p-8 rounded-2xl glass-dark mt-2 group overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div className="flex flex-row items-center gap-5">
                <div
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center text-3xl sm:text-4xl shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                  style={{ background: "rgba(6,182,212,0.1)", border: "1px solid rgba(6,182,212,0.2)" }}
                >
                  🎓
                </div>
                <div className="flex flex-col justify-center">
                  <p className="font-display font-semibold text-white text-base sm:text-xl tracking-wide">B.Tech Computer Science</p>
                  <p className="text-sm sm:text-base mt-1 text-slate-400">
                    GITAM University <span className="hidden sm:inline">·</span><span className="sm:hidden"><br/></span> Class of 2026
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
