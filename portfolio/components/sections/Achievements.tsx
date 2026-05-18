"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { achievements } from "@/lib/data";

const typeColors: Record<string, string> = {
  award: "#f59e0b",
  certification: "#06b6d4",
  event: "#8b5cf6",
};

const typeLabels: Record<string, string> = {
  award: "Award",
  certification: "Certification",
  event: "Event",
};

export default function Achievements() {
  return (
    <section id="achievements" className="section relative overflow-hidden">
      {/* Background */}
      <div className="orb" style={{ width: 500, height: 500, left: "50%", top: "20%", background: "#f59e0b", opacity: 0.04 }} />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Achievements"
          title="Recognition &"
          highlight="Certifications"
          subtitle="Milestones earned through competitive hackathons, industry certifications, and academic excellence."
        />

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div
            className="absolute left-8 top-0 bottom-0 w-px hidden sm:block"
            style={{
              background: "linear-gradient(180deg, #06b6d4, #8b5cf6 50%, transparent)",
              opacity: 0.3,
            }}
          />

          <div className="space-y-6">
            {achievements.map((achievement, i) => {
              const color = achievement.color;
              return (
                <motion.div
                  key={achievement.id}
                  id={`achievement-${achievement.id}`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="flex gap-6 sm:pl-20 relative"
                >
                  {/* Timeline Node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.12 + 0.2 }}
                    className="absolute left-0 top-6 hidden sm:flex items-center justify-center w-16 h-16 rounded-2xl text-2xl flex-shrink-0 z-10"
                    style={{
                      background: `${color}15`,
                      border: `1px solid ${color}30`,
                      boxShadow: `0 0 20px ${color}15`,
                    }}
                  >
                    {achievement.icon}
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    whileHover={{
                      y: -3,
                      boxShadow: `0 10px 40px ${color}15`,
                      borderColor: `${color}30`,
                    }}
                    className="flex-1 p-6 rounded-2xl transition-all duration-300"
                    style={{
                      background: "rgba(15,23,42,0.7)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      backdropFilter: "blur(20px)",
                    }}
                  >
                    <div className="flex items-start justify-between flex-wrap gap-3 mb-3">
                      <div>
                        <h3 className="font-display text-lg font-semibold text-white">
                          {achievement.title}
                        </h3>
                        <p className="text-sm mt-0.5" style={{ color: "#94a3b8" }}>
                          {achievement.issuer}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        {/* Type Badge */}
                        <span
                          className="px-2.5 py-1 rounded-full text-xs font-semibold"
                          style={{
                            background: `${typeColors[achievement.type]}15`,
                            border: `1px solid ${typeColors[achievement.type]}30`,
                            color: typeColors[achievement.type],
                          }}
                        >
                          {typeLabels[achievement.type]}
                        </span>

                        {/* Year */}
                        <span
                          className="px-2.5 py-1 rounded-full text-xs font-mono-custom font-medium"
                          style={{
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            color: "#64748b",
                          }}
                        >
                          {achievement.date}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
                      {achievement.description}
                    </p>

                    {/* Accent bar */}
                    <div className="mt-4 h-0.5 w-16 rounded-full" style={{ background: `linear-gradient(90deg, ${color}, transparent)` }} />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
