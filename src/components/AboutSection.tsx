import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-gradient-to-r from-[#141414] via-[#1a0a0a] to-[#141414] rounded-lg overflow-hidden shadow-2xl mb-12"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          
          <div className="relative flex flex-col md:flex-row items-center gap-8 p-8 md:p-16">
            <motion.div
              whileHover={{ 
                scale: 1.12,
                rotate: [0, -3, 3, -3, 0],
                transition: { duration: 0.6, ease: "easeInOut" }
              }}
              className="w-56 h-56 rounded-full bg-gradient-to-br from-[#E50914] via-[#ff1744] to-[#B20710] flex items-center justify-center overflow-hidden shadow-[0_0_60px_rgba(229,9,20,0.6),0_0_120px_rgba(0,255,255,0.4),inset_0_0_40px_rgba(255,255,255,0.1)] transition-all duration-500 border-4 border-[#00ffff]/40 hover:border-[#00ffff] relative"
              style={{
                filter: "drop-shadow(0 0 20px rgba(0, 255, 255, 0.5))"
              }}
            >
              <img 
                src="https://harmless-tapir-303.convex.cloud/api/storage/f2395d5d-c930-4510-a25e-eb50ed7336ca" 
                alt="Santhosh Avatar"
                className="w-full h-full object-cover"
                style={{
                  filter: "contrast(1.15) saturate(1.3) brightness(1.05)"
                }}
              />
              {/* Anime-style glow overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#00ffff]/15 to-transparent"
                animate={{
                  opacity: [0.4, 0.7, 0.4],
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              {/* Additional inner glow */}
              <motion.div
                className="absolute inset-4 rounded-full bg-gradient-to-br from-[#E50914]/20 to-transparent"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            <div className="flex-1 text-white text-center md:text-left">
              <h1
                className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                SANTHOSH
              </h1>
              <p className="text-2xl md:text-3xl font-semibold mb-6 text-[#E50914]">
                Engineer. Designer. Dreamer.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-[#B3B3B3]">
                Welcome to my universe! I'm a passionate front-end developer and graphic designer who loves crafting stunning visuals and digital experiences. When I'm not coding, I'm designing posters, logos, and event visuals that tell a story.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { icon: Github, label: "GitHub", link: "https://github.com" },
            { icon: Linkedin, label: "LinkedIn", link: "https://linkedin.com" },
            { icon: Mail, label: "Email", link: "mailto:santhosh@example.com" },
            { icon: Instagram, label: "Instagram", link: "https://instagram.com" },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ 
                scale: 1.08,
                rotate: [0, -3, 3, 0],
                transition: { duration: 0.4 }
              }}
              whileTap={{ scale: 0.95 }}
              className="p-6 bg-[#2a2a2a] rounded-lg hover:bg-[#E50914] transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(229,9,20,0.7)] relative overflow-hidden group"
            >
              <motion.div
                whileHover={{
                  scale: 1.2,
                  rotate: [0, 10, -10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                <social.icon className="w-12 h-12 mx-auto mb-3 text-white" />
              </motion.div>
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ 
                  x: "100%",
                  transition: { duration: 0.6, ease: "easeInOut" }
                }}
              />
              <p className="text-center font-semibold text-white text-lg">
                {social.label.toUpperCase()}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}