"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { socialLinks } from "@/lib/data";
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight } from "react-icons/fi";

const contactLinks = [
  {
    id: "contact-email",
    icon: FiMail,
    label: "Email Me",
    value: socialLinks.email,
    href: `mailto:${socialLinks.email}`,
    color: "#06b6d4",
    description: "Best for detailed inquiries",
  },
  {
    id: "contact-linkedin",
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "P Santhosh",
    href: socialLinks.linkedin,
    color: "#3b82f6",
    description: "Professional networking",
  },
  {
    id: "contact-github",
    icon: FiGithub,
    label: "GitHub",
    value: "@santhosh",
    href: socialLinks.github,
    color: "#8b5cf6",
    description: "Check out my code",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section relative overflow-hidden">
      {/* Background orbs */}
      <div className="orb" style={{ width: 600, height: 600, left: "20%", top: "10%", background: "#06b6d4", opacity: 0.06 }} />
      <div className="orb" style={{ width: 400, height: 400, right: "10%", bottom: "10%", background: "#8b5cf6", opacity: 0.06 }} />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Build Something"
          highlight="Together"
          subtitle="Open to full-time roles, internships, freelance projects, and collaborations. Don't hesitate to reach out."
        />

        <div className="max-w-4xl mx-auto">
          {/* Main Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden mb-8"
            style={{
              background: "rgba(15,23,42,0.8)",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(30px)",
            }}
          >
            {/* Top gradient bar */}
            <div
              className="h-1 w-full"
              style={{ background: "linear-gradient(90deg, #06b6d4, #3b82f6, #8b5cf6)" }}
            />

            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* Left — Text */}
                <div>
                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl mb-2"
                  >
                    👋
                  </motion.p>
                  <motion.h3
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="font-display text-2xl font-bold text-white mb-4"
                  >
                    Ready to collaborate?
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35 }}
                    className="text-sm leading-relaxed mb-6"
                    style={{ color: "#94a3b8" }}
                  >
                    Whether you have a role, a project idea, or just want to talk tech — I'm
                    always happy to connect. I typically respond within 24 hours.
                  </motion.p>

                  {/* Availability status */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl"
                    style={{
                      background: "rgba(16,185,129,0.08)",
                      border: "1px solid rgba(16,185,129,0.2)",
                    }}
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-sm font-medium" style={{ color: "#10b981" }}>
                      Available for opportunities
                    </span>
                  </motion.div>
                </div>

                {/* Right — CTA */}
                <div className="space-y-4">
                  {/* Primary Email CTA */}
                  <motion.a
                    href={`mailto:${socialLinks.email}`}
                    id="contact-email-cta"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(6,182,212,0.35)" }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-between w-full px-6 py-4 rounded-xl text-white font-semibold cursor-pointer"
                    style={{
                      background: "linear-gradient(135deg, #06b6d4, #3b82f6)",
                      boxShadow: "0 0 20px rgba(6,182,212,0.2)",
                    }}
                  >
                    <span className="flex items-center gap-3">
                      <FiMail size={18} />
                      Say Hello 👋
                    </span>
                    <FiArrowRight size={18} />
                  </motion.a>

                  {/* Resume Download */}
                  <motion.a
                    href="/resume.pdf"
                    download="P_Santhosh_Resume.pdf"
                    id="contact-resume-download"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    whileHover={{
                      scale: 1.02,
                      borderColor: "rgba(139,92,246,0.5)",
                      color: "#fff",
                      boxShadow: "0 0 30px rgba(139,92,246,0.2)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-between w-full px-6 py-4 rounded-xl font-semibold transition-all duration-200 cursor-pointer"
                    style={{
                      background: "rgba(139,92,246,0.08)",
                      border: "1px solid rgba(139,92,246,0.25)",
                      color: "#a78bfa",
                    }}
                  >
                    <span className="flex items-center gap-3">
                      <FiDownload size={18} />
                      Download Resume
                    </span>
                    <FiArrowRight size={18} />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Links Grid */}
          <div className="grid sm:grid-cols-3 gap-4">
            {contactLinks.map(({ id, icon: Icon, label, value, href, color, description }, i) => (
              <motion.a
                key={id}
                id={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                whileHover={{
                  y: -5,
                  borderColor: `${color}40`,
                  boxShadow: `0 10px 30px ${color}18`,
                }}
                className="group flex flex-col gap-3 p-5 rounded-2xl transition-all duration-300 cursor-pointer"
                style={{
                  background: "rgba(15,23,42,0.7)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  backdropFilter: "blur(20px)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: `${color}15`,
                    border: `1px solid ${color}30`,
                  }}
                >
                  <Icon size={18} style={{ color }} />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{label}</p>
                  <p className="text-xs mt-0.5 font-mono-custom" style={{ color: "#475569" }}>
                    {value}
                  </p>
                </div>
                <p className="text-xs" style={{ color: "#475569" }}>
                  {description}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
