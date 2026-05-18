"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/lib/data";
import { FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";

const projectGradients: Record<string, string> = {
  "phishing-detection": "linear-gradient(135deg, #ef4444 0%, #dc2626 50%, #991b1b 100%)",
  "g-lost-found": "linear-gradient(135deg, #06b6d4 0%, #0891b2 50%, #0e7490 100%)",
  "inneryouth": "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 50%, #6d28d9 100%)",
  "stem-platform": "linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #b45309 100%)",
};

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="projects" className="section relative overflow-hidden">
      {/* Background orbs */}
      <div className="orb" style={{ width: 500, height: 500, right: "-5%", top: "10%", background: "#06b6d4", opacity: 0.05 }} />
      <div className="orb" style={{ width: 400, height: 400, left: "-8%", bottom: "10%", background: "#f59e0b", opacity: 0.04 }} />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Featured Work"
          title="Projects That"
          highlight="Shipped"
          subtitle="Real-world applications built with modern tech stacks, from hackathon winners to production platforms."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              id={`project-${project.id}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl overflow-hidden cursor-default transition-all duration-300"
              style={{
                background: "rgba(15,23,42,0.7)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(24px)",
                boxShadow: hoveredId === project.id
                  ? `0 20px 60px ${project.color}20`
                  : "0 4px 20px rgba(0,0,0,0.3)",
                transition: "box-shadow 0.3s ease, transform 0.3s ease",
              }}
            >
              {/* Project Banner */}
              <div
                className="relative h-44 overflow-hidden"
                style={{ background: projectGradients[project.id] }}
              >
                {/* Pattern overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.08) 1px, transparent 1px), radial-gradient(circle at 70% 20%, rgba(255,255,255,0.05) 1px, transparent 1px)",
                    backgroundSize: "40px 40px, 60px 60px",
                  }}
                />
                {/* Grid overlay */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                  }}
                />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className="px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm"
                    style={{
                      background: "rgba(0,0,0,0.4)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      color: "#fff",
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Title in banner */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-display text-xl font-bold text-white leading-tight drop-shadow-lg">
                    {project.title}
                  </h3>
                </div>

                {/* Hover overlay with links */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="absolute inset-0 flex items-center justify-center gap-4"
                  style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
                >
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white"
                    style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)" }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiGithub size={16} />
                    GitHub
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white"
                    style={{ background: `${project.color}cc`, border: `1px solid ${project.color}` }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiExternalLink size={16} />
                    Live Demo
                  </motion.a>
                </motion.div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4">
                {/* Hackathon Badge */}
                {project.badge && (
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium"
                    style={{
                      background: "rgba(245,158,11,0.1)",
                      border: "1px solid rgba(245,158,11,0.25)",
                      color: "#f59e0b",
                    }}
                  >
                    {project.badge}
                  </div>
                )}

                {/* Description */}
                <p className="text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-medium font-mono-custom"
                      style={{
                        background: `${project.color}12`,
                        border: `1px solid ${project.color}25`,
                        color: project.color,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer Links */}
                <div className="flex items-center justify-between pt-2 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium transition-colors duration-200 hover:text-white"
                    style={{ color: "#64748b" }}
                  >
                    <FiGithub size={14} />
                    View Source
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold transition-colors duration-200"
                    style={{ color: project.color }}
                  >
                    Live Demo
                    <FiArrowRight size={13} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
