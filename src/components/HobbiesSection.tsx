import { motion } from "framer-motion";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Loader2, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

export default function HobbiesSection() {
  const hobbies = useQuery(api.portfolio.getHobbies);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (!hobbies) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-12 h-12 animate-spin text-[#E50914]" />
      </div>
    );
  }

  return (
    <section className="min-h-screen pt-24 pb-12 px-4 relative overflow-hidden">
      {/* Background spotlight gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E50914]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#E50914]/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title with Animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 px-4"
        >
          <h2
            className="text-3xl md:text-5xl font-bold text-white mb-2 relative inline-block"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            🎬 My Hobbies — The Stories I Live Off Screen
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-[#E50914]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              style={{
                boxShadow: "0 0 10px rgba(229, 9, 20, 0.8)",
              }}
            />
          </h2>
        </motion.div>

        {/* Carousel Container with Navigation */}
        <div className="relative group">
          {/* Left Arrow */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/80 hover:bg-[#E50914] text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          {/* Right Arrow */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/80 hover:bg-[#E50914] text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          {/* Scrollable Carousel */}
          <div
            ref={scrollContainerRef}
            className="netflix-carousel px-4 py-8"
          >
            {hobbies.map((hobby, index) => (
              <motion.div
                key={hobby._id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{
                  scale: 1.08,
                  transition: { duration: 0.3 },
                }}
                className="netflix-card flex-shrink-0 group/card"
              >
                <div className="w-72 rounded-xl overflow-hidden shadow-2xl hover:shadow-[0_0_40px_rgba(229,9,20,0.8)] transition-all duration-500 relative">
                  {/* Card Background with Gradient */}
                  <div className="aspect-video bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#141414] flex flex-col items-center justify-center relative overflow-hidden border-2 border-transparent group-hover/card:border-[#E50914] transition-all duration-500">
                    {/* Animated Background Glow */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-[#E50914]/20 via-transparent to-[#E50914]/10"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    />

                    {/* 3D Icon with Animation */}
                    <motion.div
                      className="text-9xl mb-4 relative z-10 filter drop-shadow-[0_0_20px_rgba(229,9,20,0.5)]"
                      whileHover={{
                        scale: 1.2,
                        rotate: [0, -5, 5, -5, 0],
                        transition: { duration: 0.6 },
                      }}
                    >
                      {hobby.icon}
                    </motion.div>

                    {/* Title Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">
                        {hobby.name}
                      </h3>
                      <motion.p
                        initial={{ y: 10, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-sm text-[#B3B3B3] italic"
                      >
                        {hobby.description}
                      </motion.p>
                    </motion.div>

                    {/* Category Badge */}
                    <div className="absolute top-3 right-3 px-3 py-1 bg-[#E50914] text-white font-bold text-xs rounded-full shadow-lg z-10">
                      {hobby.category.toUpperCase()}
                    </div>

                    {/* Glossy Shine Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{
                        x: "100%",
                        transition: { duration: 0.8, ease: "easeInOut" },
                      }}
                    />
                  </div>

                  {/* Bottom Info Bar */}
                  <div className="bg-[#141414] p-4 border-t-2 border-[#E50914]/30 group-hover/card:border-[#E50914] transition-all duration-500">
                    <h4 className="text-base font-bold text-white text-center tracking-wide">
                      {hobby.name.toUpperCase()}
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}