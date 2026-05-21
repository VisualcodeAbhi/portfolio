import React from "react";
import { motion } from "framer-motion";
import { Terminal, Laptop, ShieldCheck, Heart, Sparkles, ShoppingBag, Eye } from "lucide-react";

const services = [
  {
    title: "Premium Frontend Engineering",
    desc: "Developing beautiful, fast, and interactive single-page React apps with custom design systems, smooth layout mechanics, and structural pixel-precision.",
    icon: Laptop,
    glowColor: "hover:border-neonViolet/30 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]",
    iconColor: "text-neonViolet",
  },
  {
    title: "React.js State Architectures",
    desc: "Engineering structured React component designs leveraging efficient hooks, scalable patterns, and modular routing to maximize render speeds and fluid state transitions.",
    icon: Terminal,
    glowColor: "hover:border-neonBlue/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]",
    iconColor: "text-neonBlue",
  },
  {
    title: "Elite eCommerce Showrooms",
    desc: "Designing responsive, gold-standard e-commerce layouts featuring premium detail overlays, fast product discovery, and fluid shopping checkout workflows.",
    icon: ShoppingBag,
    glowColor: "hover:border-amber-500/30 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]",
    iconColor: "text-amber-500",
  },
  {
    title: "Dynamic Responsive Adaptation",
    desc: "Coding tailored stylesheet systems that automatically adapt to mobile, tablet, and ultra-wide desktop monitors, supporting rich, organic touch reactions.",
    icon: ShieldCheck,
    glowColor: "hover:border-neonCyan/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]",
    iconColor: "text-neonCyan",
  },
  {
    title: "Interactive UI/UX & Micro-Animations",
    desc: "Applying premium Framer Motion animations, mouse-tracking hover overlays, glassmorphic styles, and tactile feedback to engage and delight users.",
    icon: Sparkles,
    glowColor: "hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
    iconColor: "text-emerald-500",
  },
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 90, damping: 18 },
    },
  };

  return (
    <section id="services" className="relative py-24 px-6 md:px-12 bg-transparent overflow-hidden">
      {/* Decorative neon ambient gradient blob */}
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-neonBlue/5 glow-blob" style={{ animationDelay: "-6s" }} />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neonBlue/10 border border-neonBlue/20 text-neonBlue text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>My Services</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-display font-extrabold tracking-tight mb-4"
          >
            What I <span className="gradient-text font-black">Specialize In</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-neonBlue to-neonViolet mx-auto rounded-full"
          />
        </div>

        {/* Services Grid layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            // 5th item spans 2 columns in large screens to form a beautiful balanced layout grid
            const isLast = idx === services.length - 1;

            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`glow-card p-8 flex flex-col justify-between items-start gap-6 shadow-premium transition-all duration-300 ${service.glowColor} ${
                  isLast ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="space-y-4">
                  {/* Icon badge */}
                  <div className={`p-4 bg-white/[0.02] border border-white/5 rounded-2xl inline-flex items-center justify-center ${service.iconColor} shadow-inner`}>
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold font-display text-white group-hover:text-neonBlue transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm font-light leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                {/* Subtle visual link tag */}
                <div className="flex items-center gap-1 text-xs font-semibold text-slate-500 uppercase tracking-widest pt-4 border-t border-white/5 w-full">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Enterprise Grade</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
