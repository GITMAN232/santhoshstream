"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { devApproaches } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section relative overflow-hidden">
      {/* Background */}
      <div className="orb" style={{ width: 600, height: 600, left: "-10%", top: "20%", background: "#3b82f6", opacity: 0.04 }} />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="How I Work"
          title="My Development"
          highlight="Approach"
          subtitle="The principles and practices that guide how I build, ship, and iterate on software."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {devApproaches.map((approach, i) => (
            <motion.div
              key={approach.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{
                y: -6,
                borderColor: `${approach.color}40`,
                boxShadow: `0 10px 40px ${approach.color}15`,
              }}
              className="p-6 rounded-2xl transition-all duration-300 cursor-default"
              style={{
                background: "rgba(15,23,42,0.7)",
                border: "1px solid rgba(255,255,255,0.07)",
                backdropFilter: "blur(20px)",
              }}
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5"
                style={{
                  background: `${approach.color}12`,
                  border: `1px solid ${approach.color}25`,
                }}
              >
                {approach.icon}
              </motion.div>

              <h3 className="font-display text-base font-semibold text-white mb-3">
                {approach.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
                {approach.description}
              </p>

              {/* Bottom accent */}
              <div
                className="mt-5 h-0.5 w-10 rounded-full"
                style={{ background: `linear-gradient(90deg, ${approach.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Divider with CTA hint */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div
            className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl"
            style={{
              background: "rgba(15,23,42,0.8)",
              border: "1px solid rgba(255,255,255,0.07)",
              backdropFilter: "blur(20px)",
            }}
          >
            <span className="text-2xl">⚡</span>
            <p className="text-sm font-medium" style={{ color: "#94a3b8" }}>
              Always learning, always shipping.{" "}
              <span
                className="font-semibold"
                style={{
                  background: "linear-gradient(135deg, #06b6d4, #8b5cf6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Currently open to exciting opportunities.
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
