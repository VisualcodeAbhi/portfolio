import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Twitter } from "lucide-react";

const typewriterWords = [
  "Premium Web Developer",
  "React.js Engineer",
  "UI/UX Design Enthusiast",
  "Creative Solutions Builder",
];

export default function Hero() {
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const word = typewriterWords[currentWordIdx];
    const typingSpeed = isDeleting ? 30 : 65;

    if (!isDeleting && currentText === word) {
      // Pause at full word before deleting
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentWordIdx((prev) => (prev + 1) % typewriterWords.length);
    } else {
      timer = setTimeout(() => {
        setCurrentText(
          isDeleting
            ? word.substring(0, currentText.length - 1)
            : word.substring(0, currentText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIdx]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center py-20 px-6 md:px-12 overflow-hidden grid-bg"
    >
      {/* Decorative Neon Mesh Ambient Glow Blobs */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-neonViolet/10 glow-blob" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-neonBlue/15 glow-blob" style={{ animationDelay: "-8s" }} />

      {/* Hero Content Container */}
      <div className="max-w-5xl mx-auto text-center z-10 flex flex-col items-center mt-12">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/5 backdrop-blur-md mb-6 shadow-premium"
        >
          <span className="w-2 h-2 rounded-full bg-neonCyan animate-ping" />
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
            Available for Freelance & Contract Projects
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight leading-[1.1] mb-6"
        >
          Crafting <span className="gradient-text font-black">Premium</span> <br />
          <span className="gradient-text-blue font-black">Digital Experiences</span>
        </motion.h1>

        {/* Dynamic Typing Title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-10 sm:h-12 flex items-center justify-center mb-8"
        >
          <span className="text-lg sm:text-2xl font-mono text-slate-300 tracking-wide">
            I am a <span className="text-neonViolet font-bold border-r-2 border-neonViolet/80 pr-1 animate-pulse">{currentText}</span>
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl text-slate-400 text-sm sm:text-base md:text-lg mb-10 leading-relaxed font-light"
        >
          I build custom, lightning-fast, and stunningly interactive websites designed to captivate your audience, elevate your brand credibility, and convert visits into transactions.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 mb-14"
        >
          <a
            href="#projects"
            className="px-8 py-3.5 bg-gradient-to-r from-neonViolet to-neonBlue text-white font-bold tracking-wide rounded-xl shadow-glowIndigo hover:brightness-110 hover:-translate-y-0.5 transition-all duration-300"
          >
            Explore My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 bg-white/[0.03] border border-white/5 text-white font-bold tracking-wide rounded-xl backdrop-blur-md hover:bg-white/[0.08] hover:-translate-y-0.5 transition-all duration-300"
          >
            Let's Discuss
          </a>
        </motion.div>

        {/* Social Icons panel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex gap-6 text-slate-400"
        >
          <a
            href="https://github.com/VisualcodeAbhi"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/[0.02] border border-white/5 rounded-full hover:text-white hover:bg-white/[0.08] hover:shadow-glowBlue transition-all duration-300"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/[0.02] border border-white/5 rounded-full hover:text-white hover:bg-white/[0.08] hover:shadow-glowBlue transition-all duration-300"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:hello@abhiwebdeveloper.com"
            className="p-3 bg-white/[0.02] border border-white/5 rounded-full hover:text-white hover:bg-white/[0.08] hover:shadow-glowBlue transition-all duration-300"
            aria-label="Send Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* Floating Particle Nodes (CSS-Framer Motion Driven for Performance) */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-neonCyan/40 hidden md:block"
          style={{
            top: `${15 + i * 15}%`,
            left: `${10 + (i % 2 === 0 ? 5 : 80)}%`,
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 flex flex-col items-center gap-1 text-slate-500 cursor-pointer hover:text-slate-300 transition-colors"
        onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span className="text-[10px] uppercase font-bold tracking-widest">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
