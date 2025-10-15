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
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-4xl md:text-6xl font-bold text-white mb-12 tracking-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          THINGS I LOVE DOING 🎯
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby._id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="bg-[#FF0080] border-4 border-black p-8 shadow-[8px_8px_0px_#000000] hover:shadow-[12px_12px_0px_#000000] transition-all"
            >
              <div className="text-6xl mb-4">{hobby.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {hobby.name.toUpperCase()}
              </h3>
              <p className="text-white text-lg leading-relaxed">
                {hobby.description}
              </p>
              <div className="mt-4 inline-block px-3 py-1 bg-black text-[#00FF80] font-bold text-sm border-2 border-[#00FF80]">
                {hobby.category.toUpperCase()}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
