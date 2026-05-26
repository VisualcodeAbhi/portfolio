import React from "react";
import { motion } from "framer-motion";
import { User, Calendar, Briefcase, Award, Zap, Code, ShieldCheck } from "lucide-react";

const stats = [
  { label: "Real Projects Done", value: "15+", icon: Award, color: "text-neonBlue" },
  { label: "Years Experience", value: "2+", icon: Calendar, color: "text-neonViolet" },
  { label: "Client Satisfaction", value: "100%", icon: ShieldCheck, color: "text-neonCyan" },
  { label: "Project Success", value: "99%", icon: Zap, color: "text-amber-400" },
];

const timeline = [
  {
    year: "2024 - Present",
    title: "Founder & Lead Engineer",
    company: "Abhi Web Developer Agency",
    desc: "Established a professional freelance venture. Designing premium responsive web applications, luxury e-commerce platforms, and sleek SaaS landing pages for global startups.",
    icon: Briefcase,
  },
  {
    year: "2023",
    title: "Advanced React & Fullstack Master",
    company: "Self-driven Spec & Bootcamps",
    desc: "Deepened expertise in React.js, Next.js, Tailwind CSS, Framer Motion, and Flask. Built production-ready backends with MySQL and REST API endpoints.",
    icon: Code,
  },
  {
    year: "2022",
    title: "Genesis of Web Engineering",
    company: "Core Academic Foundations",
    desc: "Began journey by mastering HTML5, CSS3, ES6 JavaScript, and structural responsive designs. Built and shipped multiple client projects and web apps.",
    icon: User,
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 md:px-12 bg-[#050507]/40 overflow-hidden">
      {/* Decorative neon ambient gradient blob */}
      <div className="absolute top-1/2 left-10 w-[300px] h-[300px] bg-neonViolet/5 glow-blob" style={{ animationDelay: "-4s" }} />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neonViolet/10 border border-neonViolet/20 text-neonViolet text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <User className="w-3.5 h-3.5" />
            <span>Biography</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-display font-extrabold tracking-tight mb-4"
          >
            About <span className="gradient-text font-black">My Journey</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-neonViolet to-neonBlue mx-auto rounded-full"
          />
        </div>

        {/* Narrative, Avatar Card & Metrics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column: Stunning, Ultra-Responsive Avatar Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[360px] aspect-square mx-auto flex flex-col justify-center items-center p-8 rounded-3xl border border-white/5 bg-[#09090c]/90 shadow-premium group">
              {/* Premium Backside Floating Glow Blobs */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-neonViolet to-neonBlue rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 -z-10" />
              
              {/* Central Glowing Avatar Circle with Custom Logo */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-white/10 bg-transparent shadow-glowIndigo mb-6 group-hover:scale-105 transition-transform duration-500 relative flex items-center justify-center">
                <img src="/logo.jpg" alt="Abhi Developer Logo" className="w-full h-full object-cover scale-115" />
                {/* Floating ambient aura inside circle */}
                <span className="absolute inset-0 rounded-full bg-white/10 animate-ping opacity-25 pointer-events-none" />
              </div>

              {/* Three Pill Badges below Avatar (Fully Wrap-Safe and Responsive) */}
              <div className="flex flex-wrap gap-2 justify-center w-full">
                <span className="px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/5 text-[10px] sm:text-xs text-slate-300 font-semibold tracking-wide hover:border-neonViolet/30 hover:bg-neonViolet/5 transition-all">
                  Creative
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/5 text-[10px] sm:text-xs text-slate-300 font-semibold tracking-wide hover:border-neonBlue/30 hover:bg-neonBlue/5 transition-all">
                  Analytical
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/5 text-[10px] sm:text-xs text-slate-300 font-semibold tracking-wide hover:border-neonCyan/30 hover:bg-neonCyan/5 transition-all">
                  Reliable
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative & Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="text-xl sm:text-2xl font-semibold font-display text-white">
              Hi, I am <span className="text-neonBlue">Abhi</span>, an elite digital craftsman turning complex technical demands into fluid visual web products.
            </h3>
            <p className="text-slate-400 leading-relaxed font-light text-sm sm:text-base">
              As a dedicated frontend engineer, I specialize in building custom visual interfaces that prioritize performance, user experience, and brand aesthetics. From gold-standard luxury platforms like Luxe Jewelers to responsive interactive apps, I create engaging web systems with highly reusable React layouts.
            </p>
            <p className="text-slate-400 leading-relaxed font-light text-sm">
              My engineering philosophy revolves around pixel-perfect precision, fast render speeds, and seamless interactions. I collaborate directly with startups and businesses to design custom-branded digital representations that thrive in modern web environments.
            </p>

            {/* Embedded Stats Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              {stats.map((stat, idx) => {
                const IconComp = stat.icon;
                return (
                  <div
                    key={idx}
                    className="glow-card p-4 flex flex-col justify-between items-start gap-2 shadow-premium hover:border-neonViolet/20"
                  >
                    <div className={`p-2 bg-white/[0.02] border border-white/5 rounded-xl ${stat.color}`}>
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-extrabold tracking-tight font-display text-white leading-none mb-1">
                        {stat.value}
                      </h4>
                      <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Chronological Timeline */}
        <div className="mt-24">
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
              Career Timeline
            </h3>
            <p className="text-slate-400 text-sm font-light">
              Milestones defining my evolution in frontend engineering.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Center line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neonViolet via-neonBlue to-transparent opacity-30 transform -translate-x-1/2" />

            <div className="space-y-12">
              {timeline.map((item, idx) => {
                const IconComp = item.icon;
                const isEven = idx % 2 === 0;

                return (
                  <div key={idx} className="relative flex flex-col md:flex-row items-start md:items-center">
                    {/* Bullet marker */}
                    <div className="absolute left-6 md:left-1/2 w-8 h-8 rounded-full bg-obsidian border-2 border-neonViolet/60 flex items-center justify-center transform -translate-x-1/2 z-10 shadow-glowViolet">
                      <IconComp className="w-3.5 h-3.5 text-neonViolet" />
                    </div>

                    {/* Timeline card */}
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
                      className={`w-full md:w-[45%] pl-16 md:pl-0 ${
                        isEven ? "md:ml-auto md:pl-10" : "md:mr-auto md:pr-10 text-left md:text-right"
                      }`}
                    >
                      <div className="glow-card p-6 shadow-premium relative text-left">
                        {/* Year pill */}
                        <div className={`inline-block px-3 py-1 rounded-full bg-white/[0.03] border border-white/5 text-neonCyan text-xs font-semibold tracking-wider mb-3`}>
                          {item.year}
                        </div>
                        <h4 className="text-lg font-bold font-display text-white mb-1">
                          {item.title}
                        </h4>
                        <h5 className="text-sm font-medium text-neonViolet mb-3">
                          {item.company}
                        </h5>
                        <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
