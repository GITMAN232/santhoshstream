import { motion } from "framer-motion";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Loader2 } from "lucide-react";

export default function SkillsSection() {
  const skills = useQuery(api.portfolio.getSkills);

  if (!skills) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-12 h-12 animate-spin text-[#E50914]" />
      </div>
    );
  }

  const categories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <section className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-3xl md:text-5xl font-bold text-white mb-8 px-4"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Top Picks For You
        </motion.h2>

        {categories.map((category, catIndex) => (
          <div key={category} className="mb-12">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 px-4">
              {category.toUpperCase()}
            </h3>

            <div className="netflix-carousel px-4">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill, index) => (
                  <motion.div
                    key={skill._id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: catIndex * 0.1 + index * 0.05 }}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }}
                    className="netflix-card flex-shrink-0"
                  >
                    <div className="w-48 rounded-lg overflow-hidden shadow-lg hover:shadow-[0_0_20px_rgba(229,9,20,0.5)] transition-all duration-300">
                      <motion.div 
                        className="aspect-square bg-gradient-to-br from-[#E50914] to-[#B20710] flex items-center justify-center relative overflow-hidden"
                        whileHover={{
                          background: "linear-gradient(to bottom right, #ff0a16, #E50914)",
                        }}
                      >
                        <motion.div 
                          className="text-7xl flex items-center justify-center w-full h-full p-4"
                          whileHover={{ 
                            scale: 1.2,
                            rotate: [0, -5, 5, 0],
                            transition: { duration: 0.5 }
                          }}
                        >
                          {skill.icon.startsWith('http') ? (
                            <img 
                              src={skill.icon} 
                              alt={skill.name}
                              className="w-full h-full object-contain rounded-full"
                            />
                          ) : (
                            skill.icon
                          )}
                        </motion.div>
                        
                        {/* Shine effect on hover */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          initial={{ x: "-100%" }}
                          whileHover={{ 
                            x: "100%",
                            transition: { duration: 0.6, ease: "easeInOut" }
                          }}
                        />
                      </motion.div>
                      <div className="bg-[#141414] p-3">
                        <h4 className="text-sm font-semibold text-white text-center truncate">
                          {skill.name}
                        </h4>
                        <div className="flex justify-center gap-0.5 mt-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <span
                              key={i}
                              className={`text-xs ${
                                i < skill.rating ? "text-[#E50914]" : "text-gray-600"
                              }`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}