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
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-4xl md:text-6xl font-bold text-white mb-12 tracking-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          MY TOP SKILLS 💪
        </motion.h2>

        {categories.map((category, catIndex) => (
          <div key={category} className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-[#00FF80] mb-6">
              {category.toUpperCase()}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill, index) => (
                  <motion.div
                    key={skill._id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: catIndex * 0.1 + index * 0.1 }}
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    className="bg-[#0080FF] border-4 border-black p-6 shadow-[6px_6px_0px_#000000] hover:shadow-[10px_10px_0px_#000000] transition-all"
                  >
                    <div className="text-5xl mb-4">{skill.icon}</div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      {skill.name.toUpperCase()}
                    </h4>
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span
                          key={i}
                          className={`text-2xl ${
                            i < skill.rating ? "text-[#FFD700]" : "text-gray-600"
                          }`}
                        >
                          ★
                        </span>
                      ))}
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
