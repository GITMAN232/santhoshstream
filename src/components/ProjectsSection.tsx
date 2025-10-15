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
              onClick={() => setSelectedProject(project._id)}
              className="netflix-card relative w-80 rounded-lg overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(229,9,20,0.6)] transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-video overflow-hidden bg-[#2a2a2a]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4 bg-[#2a2a2a]">
                <h3 className="text-lg font-bold text-white">
                  {project.title.toUpperCase()}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl bg-[#141414] border-[#2a2a2a] text-white p-0 overflow-hidden">
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
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#141414] hover:bg-[#2a2a2a] flex items-center justify-center transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Project Details */}
              <div className="p-8">
                <DialogHeader className="mb-6">
                  <DialogTitle className="text-3xl font-bold text-[#E50914] mb-2">
                    {currentProject.title.toUpperCase()}
                  </DialogTitle>
                  <DialogDescription className="text-[#B3B3B3] text-lg leading-relaxed">
                    {currentProject.description}
                  </DialogDescription>
                </DialogHeader>

                {/* Tools Used */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 bg-[#2a2a2a] text-[#B3B3B3] font-semibold text-sm rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  {currentProject.link && (
                    <a
                      href={currentProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-[#E50914] text-white font-semibold rounded hover:bg-[#ff0a16] transition-colors"
                    >
                      <ExternalLink size={18} />
                      VIEW LIVE DEMO
                    </a>
                  )}
                  {currentProject.github && (
                    <a
                      href={currentProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition-colors"
                    >
                      <Github size={18} />
                      VIEW CODE
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