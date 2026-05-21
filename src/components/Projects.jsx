import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Sparkles, FolderGit2, Star } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Luxe Jewelers",
    tagline: "Flagship Luxury Showcase",
    desc: "A gold-standard luxury jewelry eCommerce experience boasting a premium obsidian-gold UI, fluid product details, responsive sliders, and elegant modern branding that feels extremely premium.",
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "Lucide React", "Vite"],
    liveUrl: "https://luxe-jewelers-five.vercel.app/",
    githubUrl: "https://github.com/VisualcodeAbhi/Portfolio",
    theme: "gold",
    featured: true,
    mockupType: "luxury-frame",
  },
  {
    id: 2,
    title: "Buyroute Marketplace",
    tagline: "Robust Flask + MySQL Engine",
    desc: "A modern ecommerce platform featuring full database integration, responsive catalog listings, robust shopping cart workflows, dynamic user authentication, and transaction workflows.",
    tech: ["Flask", "Python", "MySQL", "Tailwind CSS", "REST APIs"],
    liveUrl: "#contact",
    githubUrl: "https://github.com/VisualcodeAbhi/Portfolio",
    theme: "blue",
    featured: false,
    mockupType: "code-preview",
  },
  {
    id: 3,
    title: "ShopWay Hub",
    tagline: "Fast React Shopping Platform",
    desc: "A high-speed consumer shopping platform prioritizing instant page responsiveness, advanced categorization search filters, clean product galleries, and optimized layout routing.",
    tech: ["React.js", "Tailwind CSS", "Context API", "Responsive CSS"],
    liveUrl: "#contact",
    githubUrl: "https://github.com/VisualcodeAbhi/Portfolio",
    theme: "purple",
    featured: false,
    mockupType: "gallery-preview",
  },
  {
    id: 4,
    title: "Bible Quiz App (Telugu)",
    tagline: "Interactive Localized Quiz App",
    desc: "A specialized, mobile-friendly interactive quiz web application customized for the Telugu-speaking community. Features gamified progress tracking, sound triggers, and high-fidelity scoring panels.",
    tech: ["React.js", "Tailwind CSS", "Local Storage", "Audio API"],
    liveUrl: "#contact",
    githubUrl: "https://github.com/VisualcodeAbhi/Portfolio",
    theme: "cyan",
    featured: false,
    mockupType: "quiz-preview",
  },
];

export default function Projects() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="projects" className="relative py-24 px-6 md:px-12 bg-transparent overflow-hidden">
      {/* Decorative neon ambient gradient blob */}
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-neonViolet/5 glow-blob" style={{ animationDelay: "-5s" }} />
      <div className="absolute bottom-1/3 left-10 w-[350px] h-[350px] bg-neonBlue/5 glow-blob" style={{ animationDelay: "-10s" }} />

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
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>My Works</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-display font-extrabold tracking-tight mb-4"
          >
            Recent Featured <span className="gradient-text font-black">Projects</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-neonViolet to-neonBlue mx-auto rounded-full"
          />
        </div>

        {/* Project Layout - Flagship Special Display first, then grid */}
        <div className="space-y-12">
          {/* Flagship Product Showcase (Luxe Jewelers) */}
          {projects.filter(p => p.featured).map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden rounded-3xl border border-white/5 bg-[#09090c]/80 p-8 md:p-12 shadow-premium grid grid-cols-1 lg:grid-cols-12 gap-12 items-center hover:border-amber-500/30 transition-colors duration-500"
            >
              {/* Gold Ambient Flare */}
              <div className="absolute -top-12 -left-12 w-[250px] h-[250px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

              {/* Text Information Column */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                    {project.tagline}
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-light">
                  {project.desc}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium rounded-lg bg-amber-950/20 border border-amber-500/20 text-[#ebd07f]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action CTA Buttons */}
                <div className="flex items-center gap-4 pt-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#ebd07f] to-[#c29d3c] text-neutral-950 font-bold tracking-wide shadow-[0_0_20px_rgba(235,208,127,0.2)] hover:shadow-[0_0_30px_rgba(235,208,127,0.4)] hover:brightness-110 transition-all duration-300"
                  >
                    <span>Launch Showroom</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.06] text-white font-bold transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                </div>
              </div>

              {/* Gold Mockup Visual Column */}
              <div className="lg:col-span-6 flex justify-center items-center">
                <div className="relative w-full max-w-[460px] aspect-[16/10] rounded-2xl border-4 border-[#ebd07f]/40 bg-[#060608] shadow-[0_0_50px_rgba(235,208,127,0.15)] overflow-hidden flex flex-col group justify-between">
                  {/* Mockup Top Header bar */}
                  <div className="h-6 bg-neutral-950/90 border-b border-white/5 flex items-center px-4 justify-between">
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-500/50" />
                      <span className="w-2 h-2 rounded-full bg-yellow-500/50" />
                      <span className="w-2 h-2 rounded-full bg-green-500/50" />
                    </div>
                    <span className="text-[9px] font-mono text-slate-500 tracking-wider">luxe-jewelers.vercel.app</span>
                    <span className="w-4" />
                  </div>

                  {/* Mockup Interior Luxury View */}
                  <div className="flex-1 flex flex-col justify-center items-center text-center p-6 bg-gradient-to-b from-neutral-950 to-[#0e0e12] relative overflow-hidden">
                    {/* Simulated elegant design */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(235,208,127,0.08)_0%,transparent_70%)] pointer-events-none" />

                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#ebd07f] mb-2 font-mono">Luxe Collection</span>
                    <h4 className="text-xl font-display font-bold gradient-text-gold tracking-tight mb-4">
                      ELEGANCE & TIMELACE CO.
                    </h4>

                    {/* Simulating products grid */}
                    <div className="grid grid-cols-3 gap-2 w-full max-w-[280px] mt-2">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="aspect-[3/4] border border-white/5 bg-white/[0.01] p-1.5 rounded-lg flex flex-col justify-between items-center relative overflow-hidden group-hover:border-amber-500/30 transition-colors">
                          <div className="w-full aspect-square bg-[#ebd07f]/5 rounded flex items-center justify-center">
                            <span className="text-[8px] font-serif text-[#ebd07f]">💍</span>
                          </div>
                          <span className="text-[6px] tracking-wider text-slate-400 font-semibold font-mono">ITEM-0{i+1}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mockup bottom footer bar */}
                  <div className="h-6 bg-neutral-950/80 border-t border-white/5 flex items-center justify-between px-3 text-[8px] text-slate-600 font-light font-mono">
                    <span>© 2026 Luxe Jewelers Ltd.</span>
                    <span>100% SECURE CHECKOUT</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Grid Layout for Remaining 3 Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => !p.featured).map((project, idx) => {
              const borderHoverColor = 
                project.theme === "blue" ? "hover:border-neonBlue/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]" :
                project.theme === "purple" ? "hover:border-neonViolet/30 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]" :
                "hover:border-neonCyan/30 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]";

              const textThemeColor = 
                project.theme === "blue" ? "text-neonBlue" :
                project.theme === "purple" ? "text-neonViolet" :
                "text-neonCyan";

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`glow-card p-6 flex flex-col justify-between items-start gap-6 shadow-premium transition-all duration-300 ${borderHoverColor}`}
                >
                  <div className="space-y-4 w-full">
                    {/* Header: Project Icon & tag */}
                    <div className="flex justify-between items-center">
                      <span className={`text-[10px] font-bold uppercase tracking-wider ${textThemeColor}`}>
                        {project.tagline}
                      </span>
                      <FolderGit2 className="w-4 h-4 text-slate-500" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold font-display text-white group-hover:text-neonBlue transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed min-h-[70px]">
                      {project.desc}
                    </p>

                    {/* Custom CSS Simulated Previews based on type */}
                    <div className="relative w-full aspect-[16/10] rounded-xl border border-white/5 bg-[#050507] overflow-hidden flex flex-col justify-between pt-1">
                      {/* Top browser bar */}
                      <div className="h-3.5 bg-neutral-950/80 px-2 flex items-center gap-1 border-b border-white/5">
                        <span className="w-1 h-1 rounded-full bg-red-500/30" />
                        <span className="w-1 h-1 rounded-full bg-yellow-500/30" />
                        <span className="w-1 h-1 rounded-full bg-green-500/30" />
                      </div>

                      {/* Preview center screen */}
                      <div className="flex-1 flex flex-col justify-center items-center p-3 relative overflow-hidden bg-neutral-950">
                        {project.mockupType === "code-preview" && (
                          <div className="w-full text-[8px] font-mono text-neonBlue/80 space-y-1 text-left leading-normal">
                            <div><span className="text-neonViolet">@app.route</span>(<span className="text-emerald-500">"/products"</span>)</div>
                            <div><span className="text-neonViolet">def</span> <span className="text-neonBlue">get_catalog</span>():</div>
                            <div className="pl-4 text-slate-500">db = mysql.connect()</div>
                            <div className="pl-4 text-slate-500">items = db.query(<span className="text-emerald-500">"SELECT * FROM items"</span>)</div>
                            <div className="pl-4"><span className="text-neonViolet">return</span> render_template(<span className="text-emerald-500">"shop.html"</span>, items)</div>
                          </div>
                        )}

                        {project.mockupType === "gallery-preview" && (
                          <div className="w-full space-y-1.5">
                            <div className="flex justify-between items-center text-[7px] text-slate-500 border-b border-white/5 pb-1">
                              <span>ShopWay</span>
                              <span>Cart (0)</span>
                            </div>
                            <div className="grid grid-cols-2 gap-1.5">
                              {[...Array(2)].map((_, i) => (
                                <div key={i} className="bg-white/[0.01] border border-white/5 p-1 rounded">
                                  <div className="w-full aspect-[4/3] bg-neonViolet/5 rounded" />
                                  <div className="w-full h-1 bg-white/5 rounded mt-1" />
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {project.mockupType === "quiz-preview" && (
                          <div className="w-full max-w-[140px] border border-neonCyan/20 bg-neonCyan/5 p-2 rounded text-center space-y-1">
                            <div className="text-[6px] uppercase tracking-widest text-neonCyan font-bold">Bible Quiz Telugu</div>
                            <div className="text-[8px] font-semibold text-white">ప్రశ్న 1: ...</div>
                            <div className="grid grid-cols-2 gap-1 mt-1">
                              {[...Array(4)].map((_, i) => (
                                <div key={i} className="text-[5px] bg-white/[0.02] border border-white/5 py-0.5 rounded text-slate-400">
                                  Option {i+1}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 text-[10px] font-medium rounded bg-white/[0.02] border border-white/5 text-slate-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer Actions */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/5 w-full justify-between">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/[0.02] border border-white/5 rounded-lg hover:text-white hover:bg-white/[0.06] transition-all"
                      title="View Source Code"
                    >
                      <Github className="w-4 h-4" />
                    </a>

                    <a
                      href={project.liveUrl}
                      className={`flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/[0.02] border border-white/5 text-xs font-semibold ${textThemeColor} hover:bg-white/[0.06] transition-all`}
                    >
                      <span>Launch App</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
