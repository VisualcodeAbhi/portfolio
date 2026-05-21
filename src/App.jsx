import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-obsidian text-slate-100 font-sans selection:bg-neonViolet/30 selection:text-white overflow-hidden">
      {/* Decorative ambient neon background mesh glow blobs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-neonViolet/5 glow-blob" />
        <div className="absolute top-[30%] right-20 w-[600px] h-[600px] bg-neonBlue/5 glow-blob" style={{ animationDelay: "-5s" }} />
        <div className="absolute bottom-[20%] left-10 w-[550px] h-[550px] bg-neonCyan/5 glow-blob" style={{ animationDelay: "-10s" }} />
        <div className="absolute bottom-10 right-20 w-[500px] h-[500px] bg-neonViolet/5 glow-blob" style={{ animationDelay: "-15s" }} />
      </div>

      {/* Floating Header Navbar */}
      <Navbar />

      {/* Structured Showcase Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
      </main>

      {/* Sleek Footer Brand */}
      <Footer />
    </div>
  );
}
