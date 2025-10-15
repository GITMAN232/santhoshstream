import { motion } from "framer-motion";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Loader2 } from "lucide-react";

export default function DesignsSection() {
  const designs = useQuery(api.portfolio.getDesigns);

  if (!designs) {
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
          {designs.map((design, index) => (
            <motion.div
              key={design._id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.08,
                transition: { duration: 0.3 }
              }}
              className="netflix-card flex-shrink-0 relative group"
            >
              <div className="w-64 rounded-lg overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(229,9,20,0.7)] transition-all duration-300">
                <div className="aspect-[3/4] overflow-hidden bg-[#2a2a2a] relative">
                  <img
                    src={design.image}
                    alt={design.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-end p-4"
                  >
                    <p className="text-white text-sm font-semibold mb-1">
                      {design.title}
                    </p>
                    <p className="text-[#E50914] text-xs font-bold">
                      Designed by Santhosh
                    </p>
                  </motion.div>

                  {/* Category Badge */}
                  <div className="absolute top-2 right-2 px-2 py-1 bg-[#E50914] text-white font-bold text-xs rounded">
                    {design.category.toUpperCase()}
                  </div>
                </div>
                
                <div className="bg-[#141414] p-3">
                  <h3 className="text-sm font-bold text-white truncate">
                    {design.title}
                  </h3>
                  <p className="text-xs text-[#B3B3B3] truncate">
                    {design.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
