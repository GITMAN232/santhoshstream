import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-[#FF0080] to-[#E50914] border-4 border-black p-8 md:p-12 shadow-[12px_12px_0px_#000000] mb-12"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div
              whileHover={{ rotate: 5, scale: 1.05 }}
              className="w-48 h-48 bg-[#00FF80] border-4 border-black shadow-[8px_8px_0px_#000000] flex items-center justify-center text-8xl"
            >
              👨‍💻
            </motion.div>

            <div className="flex-1 text-white">
              <h1
                className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                SANTHOSH
              </h1>
              <p className="text-2xl md:text-3xl font-bold mb-6 text-[#00FF80]">
                Engineer. Designer. Dreamer.
              </p>
              <p className="text-lg md:text-xl leading-relaxed">
                Welcome to my universe! I'm a passionate developer who loves building
                amazing digital experiences. When I'm not coding, you'll find me
                watching anime, biking through trails, or designing unforgettable events.
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
            { icon: Github, label: "GitHub", color: "#0080FF", link: "https://github.com" },
            { icon: Linkedin, label: "LinkedIn", color: "#FF0080", link: "https://linkedin.com" },
            { icon: Mail, label: "Email", color: "#00FF80", link: "mailto:santhosh@example.com" },
            { icon: Instagram, label: "Instagram", color: "#E50914", link: "https://instagram.com" },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-6 border-4 border-black shadow-[6px_6px_0px_#000000] hover:shadow-[8px_8px_0px_#000000] transition-all"
              style={{ backgroundColor: social.color }}
            >
              <social.icon className="w-12 h-12 mx-auto mb-3 text-white" />
              <p className="text-center font-bold text-white text-lg">
                {social.label.toUpperCase()}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
