import { motion } from "framer-motion";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { ExternalLink, Github, Loader2 } from "lucide-react";
import { useState } from "react";

export default function ProjectsSection() {
  const projects = useQuery(api.portfolio.getProjects);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  if (!projects) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-12 h-12 animate-spin text-[#E50914]" />
      </div>
    );
  }

  return (
    <section className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-3xl md:text-5xl font-bold text-white mb-8 px-4"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Featured Projects
        </motion.h2>

        <div className="netflix-carousel px-4">
          {projects.map((project, index) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredProject(project._id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="netflix-card relative w-80 rounded-lg overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(229,9,20,0.6)] transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden bg-[#2a2a2a]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredProject === project._id ? 1 : 0 }}
                className="absolute inset-0 bg-black/95 flex flex-col justify-center p-6"
              >
                <h3 className="text-2xl font-bold text-[#E50914] mb-3">
                  {project.title.toUpperCase()}
                </h3>
                <p className="text-white text-sm mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-1 bg-[#2a2a2a] text-[#B3B3B3] font-semibold text-xs rounded"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-[#E50914] text-white font-semibold text-sm rounded hover:bg-[#ff0a16] transition-colors"
                    >
                      <ExternalLink size={16} />
                      LIVE
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white text-black font-semibold text-sm rounded hover:bg-gray-200 transition-colors"
                    >
                      <Github size={16} />
                      CODE
                    </a>
                  )}
                </div>
              </motion.div>

              <div className="p-4 bg-[#2a2a2a]">
                <h3 className="text-lg font-bold text-white">
                  {project.title.toUpperCase()}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}