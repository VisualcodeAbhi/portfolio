import React from "react";
import { motion } from "framer-motion";
import { Code2, Server, Wrench, Shield } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Engineering",
    icon: Code2,
    color: "text-neonViolet",
    bgClass: "bg-neonViolet/10",
    skills: [
      { name: "React.js", percentage: 95 },
      { name: "Tailwind CSS", percentage: 98 },
      { name: "JavaScript (ES6+)", percentage: 92 },
      { name: "HTML5 & CSS3", percentage: 98 },
      { name: "Framer Motion", percentage: 88 },
    ],
  },
  {
    title: "Backend & Database",
    icon: Server,
    color: "text-neonBlue",
    bgClass: "bg-neonBlue/10",
    skills: [
      { name: "Flask (Python)", percentage: 85 },
      { name: "MySQL Database", percentage: 80 },
      { name: "RESTful API Integration", percentage: 90 },
      { name: "Node.js (Basic)", percentage: 70 },
    ],
  },
  {
    title: "Tools & Workflows",
    icon: Wrench,
    color: "text-neonCyan",
    bgClass: "bg-neonCyan/10",
    skills: [
      { name: "Git & GitHub", percentage: 92 },
      { name: "Vite / Build Tools", percentage: 88 },
      { name: "Figma (UI/UX Design)", percentage: 80 },
      { name: "SEO & Performance Optimization", percentage: 85 },
    ],
  },
];

const featuredSkills = [
  { name: "React.js", value: "95%", desc: "Component architecture & Hooks", color: "from-neonViolet to-neonBlue" },
  { name: "Tailwind CSS", value: "98%", desc: "Fluid layouts & custom systems", color: "from-neonBlue to-neonCyan" },
  { name: "Flask & APIs", value: "88%", desc: "Data processing & pipelines", color: "from-neonViolet to-emerald-500" },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6 md:px-12 bg-[#050507]/40 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-neonViolet/5 glow-blob" style={{ animationDelay: "-3s" }} />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-neonBlue/5 glow-blob" style={{ animationDelay: "-9s" }} />

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
            <Shield className="w-3.5 h-3.5" />
            <span>Core Capabilities</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-display font-extrabold tracking-tight mb-4"
          >
            My Technical <span className="gradient-text font-black">Expertise</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-neonViolet to-neonBlue mx-auto rounded-full"
          />
        </div>

        {/* Circular Progress / Featured Skills cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {featuredSkills.map((fSkill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glow-card p-8 flex flex-col justify-between items-center text-center aspect-[4/3] shadow-premium"
            >
              <div className="space-y-2">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                  {fSkill.name}
                </h4>
                <p className="text-xs font-light text-slate-500">
                  {fSkill.desc}
                </p>
              </div>

              {/* Glowing value counter */}
              <div className={`text-5xl font-black font-display bg-gradient-to-tr ${fSkill.color} bg-clip-text text-transparent`}>
                {fSkill.value}
              </div>

              <div className="w-full bg-white/[0.03] border border-white/5 h-2 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: fSkill.value }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className={`h-full rounded-full bg-gradient-to-r ${fSkill.color}`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Categorized Skills panels */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => {
            const IconComponent = cat.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="glow-card p-8 shadow-premium"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/5">
                  <div className={`p-2.5 rounded-xl ${cat.bgClass} ${cat.color}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold font-display text-white">
                    {cat.title}
                  </h3>
                </div>

                {/* Progress bars list */}
                <div className="space-y-6">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="font-semibold text-slate-300">{skill.name}</span>
                        <span className={`font-bold font-mono ${cat.color}`}>{skill.percentage}%</span>
                      </div>
                      <div className="w-full h-2 bg-white/[0.03] border border-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: sIdx * 0.05 }}
                          className={`h-full rounded-full bg-gradient-to-r from-neonViolet to-neonBlue shadow-glowBlue`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
