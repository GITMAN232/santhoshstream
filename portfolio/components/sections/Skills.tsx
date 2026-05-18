"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillCategories } from "@/lib/data";

// Skill icons mapping using react-icons
import {
  SiReact, SiNextdotjs, SiJavascript, SiTypescript, SiHtml5,
  SiCss, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb,
  SiMysql, SiFirebase, SiSupabase, SiGit, SiDocker, SiPostman,
  SiVercel, SiNetlify, SiFigma,
} from "react-icons/si";
import { FiCode, FiMonitor, FiLayout, FiGlobe, FiLayers, FiTool } from "react-icons/fi";

const skillIcons: Record<string, React.ElementType> = {
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  "JavaScript": SiJavascript,
  "TypeScript": SiTypescript,
  "HTML5": SiHtml5,
  "CSS3": SiCss,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "REST APIs": FiGlobe,
  "MongoDB": SiMongodb,
  "MySQL": SiMysql,
  "Firebase": SiFirebase,
  "Supabase": SiSupabase,
  "Git & GitHub": SiGit,
  "Docker": SiDocker,
  "Postman": SiPostman,
  "Vercel": SiVercel,
  "Netlify": SiNetlify,
  "Figma": SiFigma,
  "API Integration": FiCode,
  "Responsive Design": FiMonitor,
  "Cross-Browser Compatibility": FiGlobe,
  "Agile Development": FiLayers,
  "Reusable Components": FiLayout,
  "Debugging & Testing": FiTool,
};

const iconColors: Record<string, string> = {
  "React.js": "#61dafb",
  "Next.js": "#ffffff",
  "JavaScript": "#f7df1e",
  "TypeScript": "#3178c6",
  "HTML5": "#e34f26",
  "CSS3": "#1572b6",
  "Tailwind CSS": "#06b6d4",
  "Node.js": "#339933",
  "Express.js": "#ffffff",
  "MongoDB": "#47a248",
  "MySQL": "#4479a1",
  "Firebase": "#ffca28",
  "Supabase": "#3ecf8e",
  "Git & GitHub": "#f05032",
  "Docker": "#2496ed",
  "Postman": "#ff6c37",
  "Vercel": "#ffffff",
  "Netlify": "#00c7b7",
  "Figma": "#f24e1e",
};

export default function Skills() {
  return (
    <section id="skills" className="section relative overflow-hidden">
      {/* Background orbs */}
      <div className="orb" style={{ width: 600, height: 600, left: "-10%", top: "30%", background: "#06b6d4", opacity: 0.04 }} />
      <div className="orb" style={{ width: 400, height: 400, right: "-5%", top: "60%", background: "#8b5cf6", opacity: 0.05 }} />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Technical Skills"
          title="My"
          highlight="Tech Arsenal"
          subtitle="A curated stack of technologies I use to build fast, scalable, and beautiful applications."
        />

        <div className="space-y-10">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-base"
                  style={{ background: `${category.color}18`, border: `1px solid ${category.color}30` }}
                >
                  {category.icon}
                </div>
                <h3 className="font-display text-lg font-semibold text-white">
                  {category.name}
                </h3>
                <div
                  className="flex-1 h-px rounded-full"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                />
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skillIcons[skill];
                  const iconColor = iconColors[skill] || category.color;

                  return (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: catIndex * 0.05 + skillIndex * 0.05,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      whileHover={{
                        y: -5,
                        borderColor: `${iconColor}50`,
                        boxShadow: `0 8px 24px ${iconColor}20`,
                      }}
                      className="group flex flex-col items-center gap-2.5 p-4 rounded-xl cursor-default transition-all duration-300"
                      style={{
                        background: "rgba(15,23,42,0.6)",
                        border: "1px solid rgba(255,255,255,0.07)",
                        backdropFilter: "blur(20px)",
                      }}
                    >
                      {Icon ? (
                        <Icon
                          size={26}
                          style={{ color: iconColor }}
                          className="transition-transform duration-300 group-hover:scale-110"
                        />
                      ) : (
                        <span className="text-xl">{category.icon}</span>
                      )}
                      <span
                        className="text-xs font-medium text-center leading-tight"
                        style={{ color: "#94a3b8" }}
                      >
                        {skill}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
