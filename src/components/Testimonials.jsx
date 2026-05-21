import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, MessageSquare, Star } from "lucide-react";

const reviews = [
  {
    name: "Aravind Sharma",
    role: "Product Lead",
    company: "Luxe Jewelers e-Commerce",
    comment: "Abhi delivered our luxury jewelry showroom ahead of schedule. The dark gold styling is stunning, and the page loads instantly. His eye for high-end micro-animations is exceptional!",
    rating: 5,
  },
  {
    name: "Rajesh K.",
    role: "Co-Founder",
    company: "Buyroute Marketplace",
    comment: "Our Flask-MySQL catalog got completely overhauled into a beautiful modern React app. Page load speeds increased by 40% and user retention has improved dramatically.",
    rating: 5,
  },
  {
    name: "Pastor Samuel J.",
    role: "Community Director",
    company: "Telugu Bible Quiz App",
    comment: "The Bible Quiz application Abhi designed was a huge hit in our community. Dynamic Telugu scripts render flawlessly on mobile devices, and progress flows perfectly.",
    rating: 5,
  },
  {
    name: "Sarah Jenkins",
    role: "CTO & Founder",
    company: "SaaS Tech Startup",
    comment: "Working with Abhi was a game changer. His mastery of Tailwind and Framer Motion gave our SaaS landing page an ultra-premium feel. Highly recommended developer!",
    rating: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, type: "spring", stiffness: 120, damping: 20 },
    },
    exit: (dir) => ({
      x: dir < 0 ? 120 : -120,
      opacity: 0,
      transition: { duration: 0.4 },
    }),
  };

  return (
    <section id="testimonials" className="relative py-24 px-6 md:px-12 bg-[#050507]/40 overflow-hidden">
      {/* Decorative neon ambient gradient blob */}
      <div className="absolute top-1/2 left-10 w-[300px] h-[300px] bg-neonBlue/5 glow-blob" style={{ animationDelay: "-7s" }} />

      <div className="max-w-4xl mx-auto z-10 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neonBlue/10 border border-neonBlue/20 text-neonBlue text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Testimonials</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-display font-extrabold tracking-tight mb-4"
          >
            What Clients <span className="gradient-text font-black">Say About Me</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-neonBlue to-neonViolet mx-auto rounded-full"
          />
        </div>

        {/* Carousel Container */}
        <div className="relative glow-card p-8 md:p-12 shadow-premium min-h-[340px] flex flex-col justify-between items-center text-center overflow-hidden">
          {/* Quote mark decoration */}
          <div className="absolute top-6 left-6 text-white/[0.02] pointer-events-none">
            <Quote className="w-32 h-32 transform -scale-x-100" />
          </div>

          {/* Testimonial Active Slide */}
          <div className="flex-1 flex flex-col justify-center items-center relative w-full overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="space-y-6 w-full"
              >
                {/* Five Stars Rating */}
                <div className="flex justify-center gap-1">
                  {[...Array(reviews[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                {/* Comment Text */}
                <blockquote className="text-slate-200 text-lg md:text-xl font-light italic leading-relaxed max-w-2xl">
                  "{reviews[activeIndex].comment}"
                </blockquote>

                {/* Author Credentials */}
                <div>
                  <h4 className="text-base font-bold font-display text-white">
                    {reviews[activeIndex].name}
                  </h4>
                  <p className="text-xs font-semibold uppercase tracking-wider text-neonBlue">
                    {reviews[activeIndex].role} <span className="text-slate-600 font-normal">|</span> <span className="text-slate-400">{reviews[activeIndex].company}</span>
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls & Indicators */}
          <div className="flex items-center gap-6 mt-8 z-10 w-full justify-between">
            {/* Left Button */}
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white/[0.02] border border-white/5 text-slate-400 hover:text-white hover:bg-white/[0.06] hover:shadow-glowBlue transition-all duration-300"
              aria-label="Previous Review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Slide Indicators */}
            <div className="flex gap-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > activeIndex ? 1 : -1);
                    setActiveIndex(idx);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === activeIndex ? "w-8 bg-neonBlue shadow-glowBlue" : "w-2 bg-white/10"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Right Button */}
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white/[0.02] border border-white/5 text-slate-400 hover:text-white hover:bg-white/[0.06] hover:shadow-glowBlue transition-all duration-300"
              aria-label="Next Review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
