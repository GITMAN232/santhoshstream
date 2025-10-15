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
                scale: 1.08,
                rotate: [0, -2, 2, -2, 0],
                transition: { duration: 0.6 }
              }}
              className="w-48 h-48 rounded-full bg-gradient-to-br from-[#E50914] via-[#ff1744] to-[#B20710] flex items-center justify-center overflow-hidden shadow-[0_0_50px_rgba(229,9,20,0.5),0_0_100px_rgba(0,255,255,0.3)] transition-all duration-300 border-4 border-[#00ffff]/30 hover:border-[#00ffff] relative"
              style={{
                filter: "drop-shadow(0 0 15px rgba(0, 255, 255, 0.4))"
              }}
            >
              <img 
                src="https://harmless-tapir-303.convex.cloud/api/storage/f2395d5d-c930-4510-a25e-eb50ed7336ca" 
                alt="Santhosh Avatar"
                className="w-full h-full object-cover"
                style={{
                  filter: "contrast(1.1) saturate(1.2)"
                }}
              />
              {/* Anime-style glow overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#00ffff]/10 to-transparent"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
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
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-6 bg-[#2a2a2a] rounded-lg hover:bg-[#E50914] transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(229,9,20,0.5)]"
            >
              <social.icon className="w-12 h-12 mx-auto mb-3 text-white" />
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