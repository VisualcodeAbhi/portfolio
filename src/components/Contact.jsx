import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Calendar, Send, CheckCircle, AlertCircle, Sparkles, MessageCircle } from "lucide-react";

const budgetTiers = [
  { label: "Starter (< $1k)", value: "starter" },
  { label: "Standard ($1k - $3k)", value: "standard" },
  { label: "Enterprise ($3k+)", value: "enterprise" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "standard",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Enter a valid email address";
    }
    if (!formData.subject.trim()) tempErrors.subject = "Subject is required";
    if (!formData.message.trim()) tempErrors.message = "Message cannot be empty";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on input change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleBudgetSelect = (val) => {
    setFormData((prev) => ({ ...prev, budget: val }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        budget: "standard",
        subject: "",
        message: "",
      });

      // Clear success state after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 px-6 md:px-12 bg-transparent overflow-hidden">
      {/* Ambient glowing blobs */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-neonViolet/5 glow-blob" style={{ animationDelay: "-2s" }} />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-neonBlue/5 glow-blob" style={{ animationDelay: "-8s" }} />

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
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Connect</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-display font-extrabold tracking-tight mb-4"
          >
            Let's Make <span className="gradient-text font-black">Something Elite</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-neonViolet to-neonBlue mx-auto rounded-full"
          />
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Info Details Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-display text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-neonBlue animate-pulse" />
                Start a Conversation
              </h3>
              <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed">
                Have a project concept, custom SaaS plan, or e-commerce storefront inquiry? Submit your details and I will review and get back to you within 24 hours.
              </p>
            </div>

            {/* Direct Connect Elements */}
            <div className="space-y-4">
              {/* Mail Detail */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.01] border border-white/5 shadow-inner">
                <div className="p-3 bg-neonViolet/10 text-neonViolet rounded-xl">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Email Address</span>
                  <a href="mailto:hello@abhiwebdeveloper.com" className="block text-slate-200 text-sm font-semibold hover:text-neonViolet transition-colors">
                    hello@abhiwebdeveloper.com
                  </a>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.01] border border-white/5 shadow-inner">
                <div className="p-3 bg-neonBlue/10 text-neonBlue rounded-xl">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Working Hours & Availability</span>
                  <span className="block text-slate-200 text-sm font-semibold">
                    Mon - Sat (09:00 AM - 07:00 PM)
                  </span>
                </div>
              </div>
            </div>

            {/* Quote Badge */}
            <div className="glow-card p-6 border-l-4 border-l-neonViolet bg-[#09090c]/50">
              <p className="text-xs text-slate-400 font-light italic leading-relaxed">
                "Quality is never an accident; it is always the result of intelligent effort. I strive to design beautiful solutions for every single partner I team up with."
              </p>
            </div>
          </motion.div>

          {/* Form Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden">
              <AnimatePresence mode="wait">
                {!submitSuccess ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full bg-[#050507]/60 border px-4 py-3 rounded-xl text-slate-200 text-sm outline-none transition-all ${
                            errors.name ? "border-red-500/40 focus:border-red-500" : "border-white/5 focus:border-neonViolet focus:bg-[#07070a]"
                          }`}
                          placeholder="John Doe"
                        />
                        {errors.name && (
                          <span className="text-[10px] text-red-500 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.name}
                          </span>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          Your Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full bg-[#050507]/60 border px-4 py-3 rounded-xl text-slate-200 text-sm outline-none transition-all ${
                            errors.email ? "border-red-500/40 focus:border-red-500" : "border-white/5 focus:border-neonViolet focus:bg-[#07070a]"
                          }`}
                          placeholder="johndoe@email.com"
                        />
                        {errors.email && (
                          <span className="text-[10px] text-red-500 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.email}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Project Budget Selection */}
                    <div className="space-y-3">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Project Budget Tier
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {budgetTiers.map((tier) => (
                          <button
                            key={tier.value}
                            type="button"
                            onClick={() => handleBudgetSelect(tier.value)}
                            className={`py-3 px-4 rounded-xl border text-xs font-semibold uppercase tracking-wider transition-all text-center ${
                              formData.budget === tier.value
                                ? "bg-gradient-to-r from-neonViolet/20 to-neonBlue/20 border-neonViolet text-white shadow-glowBlue"
                                : "bg-white/[0.01] border-white/5 text-slate-400 hover:border-white/10 hover:text-slate-200"
                            }`}
                          >
                            {tier.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className={`w-full bg-[#050507]/60 border px-4 py-3 rounded-xl text-slate-200 text-sm outline-none transition-all ${
                          errors.subject ? "border-red-500/40 focus:border-red-500" : "border-white/5 focus:border-neonViolet focus:bg-[#07070a]"
                        }`}
                        placeholder="eCommerce storefront build, React consulting..."
                      />
                      {errors.subject && (
                        <span className="text-[10px] text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.subject}
                        </span>
                      )}
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Message Content
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className={`w-full bg-[#050507]/60 border px-4 py-3 rounded-xl text-slate-200 text-sm outline-none transition-all resize-none ${
                          errors.message ? "border-red-500/40 focus:border-red-500" : "border-white/5 focus:border-neonViolet focus:bg-[#07070a]"
                        }`}
                        placeholder="Tell me about your product requirements..."
                      />
                      {errors.message && (
                        <span className="text-[10px] text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.message}
                        </span>
                      )}
                    </div>

                    {/* Submit CTA button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-gradient-to-r from-neonViolet to-neonBlue disabled:opacity-50 text-white font-bold tracking-wide rounded-xl shadow-glowIndigo hover:brightness-110 hover:-translate-y-0.5 transition-all duration-300 flex justify-center items-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Dispatching Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Dispatch Message</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center py-12 space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.15)] text-emerald-500">
                      <CheckCircle className="w-8 h-8" />
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-xl font-bold font-display text-white">Inquiry Dispatched Successfully!</h4>
                      <p className="text-sm text-slate-400 font-light max-w-sm">
                        Thank you for your message! Your details have been received securely, and I will review and reply within 24 hours.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSubmitSuccess(false)}
                      className="px-6 py-2.5 rounded-xl border border-white/5 bg-white/[0.02] text-slate-300 text-xs font-semibold uppercase hover:bg-white/[0.06] transition-all"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
