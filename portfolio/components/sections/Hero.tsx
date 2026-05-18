"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from "react-icons/fi";
import { socialLinks } from "@/lib/data";

const TITLES = [
  "Full Stack Developer",
  "React & Next.js Engineer",
  "Frontend Architect",
  "UI/UX Enthusiast",
];

function TypingText() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = TITLES[titleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setTitleIndex((i) => (i + 1) % TITLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, titleIndex]);

  return (
    <span className="gradient-text">
      {displayed}
      <span className="animate-blink text-cyan-400">|</span>
    </span>
  );
}

const floatingOrbs = [
  { size: 400, x: "10%", y: "20%", color: "#06b6d4", delay: 0 },
  { size: 350, x: "70%", y: "60%", color: "#8b5cf6", delay: 2 },
  { size: 280, x: "85%", y: "10%", color: "#3b82f6", delay: 4 },
  { size: 250, x: "5%", y: "70%", color: "#f472b6", delay: 1 },
];

const stagger = {
  container: {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  },
  item: {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
  },
};

export default function Hero() {
  const handleScroll = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Floating Orbs */}
      {floatingOrbs.map((orb, i) => (
        <motion.div
          key={i}
          className="orb"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: orb.color,
            opacity: 0.12,
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.08, 0.14, 0.08],
          }}
          transition={{
            duration: 6 + orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}

      {/* Radial vignette at center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, rgba(3,7,18,0.8) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          variants={stagger.container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-6"
        >
          {/* Badge */}
          <motion.div variants={stagger.item}>
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium"
              style={{
                border: "1px solid rgba(6,182,212,0.3)",
                color: "#06b6d4",
              }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Available for opportunities
            </motion.div>
          </motion.div>

          {/* Name */}
          <motion.div variants={stagger.item}>
            <h1 className="font-display text-6xl md:text-8xl font-bold text-white leading-none tracking-tight">
              P{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #8b5cf6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Santhosh
              </span>
            </h1>
          </motion.div>

          {/* Typing Subtitle */}
          <motion.div variants={stagger.item} className="h-10">
            <h2 className="font-display text-xl md:text-2xl font-semibold">
              <TypingText />
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={stagger.item}
            className="text-base md:text-lg max-w-2xl leading-relaxed"
            style={{ color: "#94a3b8" }}
          >
            Passionate developer building{" "}
            <span className="text-white font-medium">scalable web platforms</span>,{" "}
            <span className="text-white font-medium">modern UI systems</span>, and{" "}
            <span className="text-white font-medium">impactful digital experiences</span> —
            one clean component at a time.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={stagger.item}
            className="flex flex-col sm:flex-row items-center gap-4 mt-2"
          >
            <motion.button
              onClick={() => handleScroll("#projects")}
              id="hero-view-projects"
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(6,182,212,0.4)" }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #06b6d4, #3b82f6)",
                boxShadow: "0 0 20px rgba(6,182,212,0.25)",
              }}
            >
              View Projects
              <FiArrowRight />
            </motion.button>

            <motion.button
              onClick={() => handleScroll("#contact")}
              id="hero-contact"
              whileHover={{
                scale: 1.05,
                borderColor: "rgba(6,182,212,0.6)",
                color: "#fff",
              }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold cursor-pointer transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "#94a3b8",
                backdropFilter: "blur(10px)",
              }}
            >
              Contact Me
            </motion.button>
          </motion.div>

          {/* Socials */}
          <motion.div
            variants={stagger.item}
            className="flex items-center gap-6 mt-2"
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
                whileHover={{ scale: 1.2, y: -3 }}
                className="group relative p-3 rounded-full transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#94a3b8",
                }}
              >
                <Icon size={20} className="group-hover:text-cyan-400 transition-colors" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            variants={stagger.item}
            className="flex flex-col items-center gap-2 mt-8"
          >
            <span className="text-xs font-mono-custom tracking-widest uppercase" style={{ color: "#475569" }}>
              Scroll to explore
            </span>
            <motion.div
              className="w-px h-12 rounded-full"
              style={{
                background: "linear-gradient(180deg, #06b6d4, transparent)",
              }}
              animate={{ scaleY: [0, 1], opacity: [0.5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeIn" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
