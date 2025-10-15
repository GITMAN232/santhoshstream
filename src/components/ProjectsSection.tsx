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
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-4xl md:text-6xl font-bold text-white mb-12 tracking-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          CONTINUE WATCHING 🚀
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.02 }}
              onHoverStart={() => setHoveredProject(project._id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="relative border-4 border-black shadow-[8px_8px_0px_#000000] hover:shadow-[12px_12px_0px_#000000] transition-all overflow-hidden bg-[#00FF80]"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredProject === project._id ? 1 : 0 }}
                className="absolute inset-0 bg-black/90 flex flex-col justify-center p-6"
              >
                <h3 className="text-3xl font-bold text-[#00FF80] mb-3">
                  {project.title.toUpperCase()}
                </h3>
                <p className="text-white text-lg mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 bg-[#E50914] text-white font-bold text-sm border-2 border-white"
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
                      className="flex items-center gap-2 px-4 py-2 bg-[#0080FF] text-white font-bold border-3 border-white hover:scale-105 transition-transform"
                    >
                      <ExternalLink size={18} />
                      LIVE
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white text-black font-bold border-3 border-white hover:scale-105 transition-transform"
                    >
                      <Github size={18} />
                      CODE
                    </a>
                  )}
                </div>
              </motion.div>

              <div className="p-4 bg-[#00FF80]">
                <h3 className="text-xl font-bold text-black">
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
