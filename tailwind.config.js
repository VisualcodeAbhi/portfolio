/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#030303",
        darker: "#09090b",
        neonViolet: "#8b5cf6",
        neonIndigo: "#6366f1",
        neonBlue: "#06b6d4",
        neonCyan: "#00f5ff",
        cardBg: "rgba(10, 10, 12, 0.7)",
        cardBorder: "rgba(255, 255, 255, 0.08)",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
      },
      boxShadow: {
        glowViolet: "0 0 30px -5px rgba(139, 92, 246, 0.4)",
        glowBlue: "0 0 30px -5px rgba(6, 182, 212, 0.4)",
        glowIndigo: "0 0 35px -5px rgba(99, 102, 241, 0.45)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "blob-drift": "blobDrift 20s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        blobDrift: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-40px, 20px) scale(0.95)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
    },
  },
  plugins: [],
}
