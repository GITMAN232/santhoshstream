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
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#141414] flex flex-col items-center justify-center p-4"
    >
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-4xl md:text-6xl font-bold text-white mb-16 tracking-tight"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        Who's Watching?
      </motion.h1>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4 }}
        whileHover={{ scale: 1.1 }}
        className="relative cursor-pointer group"
        onClick={onEnter}
      >
        <div className="w-40 h-40 md:w-52 md:h-52 bg-gradient-to-br from-[#E50914] to-[#B20710] rounded-lg overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(229,9,20,0.6)]">
          <div className="w-full h-full flex items-center justify-center text-8xl">
            🎬
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-lg"
        >
          <Play className="w-16 h-16 text-white fill-white" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-6 text-2xl font-bold text-[#E50914] tracking-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          SANTHOSH
        </motion.p>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-12 text-[#B3B3B3] text-sm"
      >
        Click to enter SanthoshFlix
      </motion.p>
    </motion.div>
  );
}