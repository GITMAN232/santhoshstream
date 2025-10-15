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
      className="min-h-screen bg-[#141414] flex flex-col items-center justify-center p-4"
    >
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-4xl md:text-6xl font-normal text-white mb-16"
        style={{ fontFamily: "'Netflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif" }}
      >
        Who's watching?
      </motion.h1>

      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mb-12">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative cursor-pointer group"
          onClick={onEnter}
        >
          <motion.div 
            className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-[#E50914] to-[#B20710] rounded-md overflow-hidden border-4 border-transparent group-hover:border-white transition-all duration-200"
            whileHover={{ 
              boxShadow: "0 0 30px rgba(229, 9, 20, 0.6)"
            }}
          >
            <div className="w-full h-full flex items-center justify-center text-7xl md:text-8xl">
              🎬
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-md"
          >
            <Play className="w-12 h-12 text-white fill-white" />
          </motion.div>

          <p
            className="text-center mt-4 text-lg md:text-xl text-[#808080] group-hover:text-white transition-colors"
            style={{ fontFamily: "'Netflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif" }}
          >
            Santhosh
          </p>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-2 text-[#808080] hover:text-white border border-[#808080] hover:border-white text-lg tracking-wider transition-all duration-200"
        style={{ fontFamily: "'Netflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif" }}
      >
        MANAGE PROFILES
      </motion.button>
    </motion.div>
  );
}