import { motion } from "framer-motion";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { ExternalLink, Github, Loader2, X } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export default function ProjectsSection() {
  const projects = useQuery(api.portfolio.getProjects);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  if (!projects) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-12 h-12 animate-spin text-[#E50914]" />
      </div>
    );
  }

  const currentProject = projects.find((p) => p._id === selectedProject);

  return (
    <section className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 md:mb-8 px-4"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Featured Projects
        </motion.h2>

        <div className="netflix-carousel px-4 pb-4">
          {projects.map((project, index) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedProject(project._id)}
              className="netflix-card flex-shrink-0 cursor-pointer"
            >
              <div className="w-64 sm:w-72 md:w-80 rounded-lg overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(229,9,20,0.6)] transition-all duration-300">
                <div className="aspect-video overflow-hidden bg-[#2a2a2a] relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-[#141414] p-3 sm:p-4">
                  <h3 className="text-xs sm:text-sm md:text-base font-bold text-white truncate">
                    {project.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-[95vw] sm:max-w-[90vw] md:max-w-3xl lg:max-w-4xl bg-[#141414] border-[#2a2a2a] text-white p-0 overflow-hidden max-h-[90vh] overflow-y-auto">
          {currentProject && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden bg-[#2a2a2a]">
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#141414]/90 hover:bg-[#2a2a2a] flex items-center justify-center transition-colors z-10"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </button>
              </div>

              {/* Project Details */}
              <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-b from-[#141414] to-[#0a0a0a]">
                <DialogHeader className="mb-4 sm:mb-6">
                  <DialogTitle className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#E50914] mb-2 sm:mb-3 tracking-tight leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {currentProject.title.toUpperCase()}
                  </DialogTitle>
                  <DialogDescription className="text-[#B3B3B3] text-sm sm:text-base md:text-lg leading-relaxed">
                    {currentProject.description}
                  </DialogDescription>
                </DialogHeader>

                {/* Tools Used */}
                <div className="mb-6 sm:mb-8">
                  <h4 className="text-white font-bold mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-widest opacity-70">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.tools.map((tool) => (
                      <motion.span
                        key={tool}
                        whileHover={{ scale: 1.05, backgroundColor: "#E50914" }}
                        className="px-3 py-1.5 sm:px-4 sm:py-2 bg-[#2a2a2a] text-[#B3B3B3] hover:text-white font-semibold text-xs sm:text-sm rounded-full transition-colors duration-300 cursor-default"
                      >
                        {tool}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  {currentProject.link && (
                    <a
                      href={currentProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 bg-[#E50914] text-white font-semibold text-sm sm:text-base rounded hover:bg-[#ff0a16] transition-colors"
                    >
                      <ExternalLink size={16} className="sm:w-[18px] sm:h-[18px]" />
                      <span className="whitespace-nowrap">VIEW LIVE DEMO</span>
                    </a>
                  )}
                  {currentProject.github && (
                    <a
                      href={currentProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 bg-white text-black font-semibold text-sm sm:text-base rounded hover:bg-gray-200 transition-colors"
                    >
                      <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
                      <span className="whitespace-nowrap">VIEW CODE</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}