"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
  delay?: number;
  hover?: boolean;
}

export default function GlowCard({
  children,
  className = "",
  glowColor = "#06b6d4",
  delay = 0,
  hover = true,
}: GlowCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={
        hover
          ? {
              y: -6,
              boxShadow: `0 0 30px ${glowColor}25, 0 0 60px ${glowColor}10`,
              borderColor: `${glowColor}50`,
            }
          : {}
      }
      className={`glass-dark rounded-2xl transition-all duration-300 ${className}`}
      style={{
        border: "1px solid rgba(255,255,255,0.08)",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      {children}
    </motion.div>
  );
}
