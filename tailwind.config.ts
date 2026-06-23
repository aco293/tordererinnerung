import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#070B16",
        "dark-blue": "#0B1020",
        violet: "#2B214A",
        gold: "#D6B76A",
        "soft-white": "#F5F0E8",
        muted: "#B8B3C7",
      },
      fontFamily: {
        heading: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
      boxShadow: {
        glow: "0 0 60px -15px rgba(214, 183, 106, 0.35)",
        "glow-violet": "0 0 80px -20px rgba(43, 33, 74, 0.9)",
        card: "0 20px 60px -30px rgba(0, 0, 0, 0.8)",
      },
      backgroundImage: {
        "radial-glow":
          "radial-gradient(circle at 50% 0%, rgba(43,33,74,0.55), transparent 60%)",
        "gold-line":
          "linear-gradient(90deg, transparent, rgba(214,183,106,0.6), transparent)",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slow-pulse": {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.8" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.15", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.25)" },
        },
        drift: {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(-40px)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 1s ease-out forwards",
        "fade-in": "fade-in 1.4s ease-out forwards",
        "slow-pulse": "slow-pulse 6s ease-in-out infinite",
        twinkle: "twinkle 5s ease-in-out infinite",
        drift: "drift 18s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};

export default config;
