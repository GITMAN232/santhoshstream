import { motion } from "framer-motion";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Loader2 } from "lucide-react";

export default function HobbiesSection() {
  const hobbies = useQuery(api.portfolio.getHobbies);

  if (!hobbies) {
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
          Continue Watching
        </motion.h2>

        <div className="netflix-carousel px-4">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby._id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.08 }}
              className="netflix-card w-64 bg-[#2a2a2a] rounded-lg overflow-hidden shadow-lg hover:shadow-[0_0_25px_rgba(229,9,20,0.6)] transition-all duration-300"
            >
              <div className="p-8">
                <div className="text-7xl mb-4 text-center">{hobby.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">
                  {hobby.name.toUpperCase()}
                </h3>
                <p className="text-[#B3B3B3] text-sm leading-relaxed text-center mb-4">
                  {hobby.description}
                </p>
                <div className="inline-block px-3 py-1 bg-[#E50914] text-white font-semibold text-xs rounded">
                  {hobby.category.toUpperCase()}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}