"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`mb-16 ${centered ? "text-center" : ""}`}
    >
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-mono-custom text-sm font-medium tracking-widest uppercase mb-4"
          style={{ color: "#06b6d4" }}
        >
          {eyebrow}
        </motion.p>
      )}

      <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
        {title}{" "}
        {highlight && (
          <span className="gradient-text">{highlight}</span>
        )}
      </h2>

      {/* Accent line */}
      <div className={`flex ${centered ? "justify-center" : ""} mt-4 mb-6`}>
        <div className="h-0.5 w-16 rounded-full" style={{
          background: "linear-gradient(90deg, #06b6d4, #8b5cf6)"
        }} />
      </div>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg max-w-2xl mx-auto leading-relaxed"
          style={{ color: "#94a3b8" }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
