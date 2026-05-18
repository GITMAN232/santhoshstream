"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { socialLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer
      className="relative border-t py-12"
      style={{
        borderColor: "rgba(255,255,255,0.06)",
        background: "rgba(3,7,18,0.95)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span
            className="font-display text-lg font-bold"
            style={{
              background: "linear-gradient(135deg, #06b6d4, #8b5cf6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            P. Santhosh
          </span>
          <p className="text-sm mt-1" style={{ color: "#475569" }}>
            Full Stack Developer · B.Tech CSE · GITAM University
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm"
          style={{ color: "#475569" }}
        >
          © {new Date().getFullYear()} P Santhosh. Built with Next.js & ♥
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4"
        >
          {[
            { icon: FiGithub, href: socialLinks.github, label: "GitHub" },
            { icon: FiLinkedin, href: socialLinks.linkedin, label: "LinkedIn" },
            { icon: FiMail, href: `mailto:${socialLinks.email}`, label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.2, color: "#06b6d4" }}
              className="transition-colors duration-200"
              style={{ color: "#475569" }}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}
