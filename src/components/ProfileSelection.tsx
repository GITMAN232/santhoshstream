import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface ProfileSelectionProps {
  onEnter: () => void;
}

export default function ProfileSelection({ onEnter }: ProfileSelectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-[#141414] flex flex-col items-center justify-center p-4 relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <motion.div
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-gradient-radial from-[#E50914]/20 via-transparent to-transparent"
      />

      <motion.h1
        initial={{ y: -80, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ 
          delay: 0.4,
          duration: 0.7,
          ease: [0.43, 0.13, 0.23, 0.96]
        }}
        className="text-4xl md:text-6xl font-normal text-white mb-16 relative z-10"
        style={{ fontFamily: "'Netflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif" }}
      >
        Who's watching?
      </motion.h1>

      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mb-12 relative z-10">
        <motion.div
          initial={{ scale: 0.3, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ 
            delay: 0.7,
            duration: 0.6,
            ease: [0.34, 1.56, 0.64, 1],
            type: "spring",
            stiffness: 120,
            damping: 12
          }}
          whileHover={{ 
            scale: 1.15,
            transition: { duration: 0.3, ease: "easeOut" }
          }}
          whileTap={{ scale: 0.9 }}
          className="relative cursor-pointer group"
          onClick={onEnter}
        >
          <motion.div 
            className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-[#E50914] to-[#B20710] rounded-md overflow-hidden border-4 border-transparent group-hover:border-white transition-all duration-300"
            whileHover={{ 
              boxShadow: "0 0 40px rgba(229, 9, 20, 0.8), 0 0 80px rgba(229, 9, 20, 0.4)",
              rotate: [0, -2, 2, 0],
              transition: { duration: 0.5 }
            }}
          >
            <motion.div 
              className="w-full h-full flex items-center justify-center text-7xl md:text-8xl"
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.3 }
              }}
            >
              🎬
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ 
              opacity: 1, 
              scale: 1,
              transition: { duration: 0.2 }
            }}
            className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-md backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              whileHover={{ 
                scale: [1, 1.2, 1],
                transition: { 
                  duration: 0.6,
                  repeat: Infinity,
                  repeatDelay: 0.5
                }
              }}
            >
              <Play className="w-12 h-12 text-white fill-white drop-shadow-lg" />
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.4 }}
            className="text-center mt-4 text-lg md:text-xl text-[#808080] group-hover:text-white transition-colors duration-300"
            style={{ fontFamily: "'Netflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif" }}
          >
            Santhosh
          </motion.p>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 1.2,
          duration: 0.5,
          ease: "easeOut"
        }}
        whileHover={{ 
          scale: 1.08,
          borderColor: "#ffffff",
          color: "#ffffff",
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-2 text-[#808080] hover:text-white border border-[#808080] hover:border-white text-lg tracking-wider transition-all duration-300 relative z-10"
        style={{ fontFamily: "'Netflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif" }}
      >
        MANAGE PROFILES
      </motion.button>
    </motion.div>
  );
}