import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // PRIMARY: Microsoft Clarity Blue
        cert: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
        },
        // LUXURY ACCENTS
        gold: "#F59E0B",
        emerald: {
          DEFAULT: "#10B981",
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
        },
        // NEUTRAL: Clarity-style slate (override default)
        slate: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
        // Legacy aliases for vault/dashboard
        "cert-blue": {
          50: "#EFF6FF",
          100: "#DBEAFE",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          900: "#1E3A8A",
        },
        "cert-slate": {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
        sovereign: {
          900: "#0F172A",
          800: "#1E40AF",
          700: "#3B82F6",
          100: "#DBEAFE",
        },
        vault: {
          ink: "#020617",
          slate: "#1E293B",
          stone: "#475569",
          cloud: "#94A3B8",
          mist: "#E2E8F0",
          snow: "#F8FAFC",
        },
        // Trust Mark Spec: hardware/precision cues
        titanium: "#94A3B8",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "monospace"],
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        card: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        "card-hover":
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        elevated:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        glow: "var(--shadow-glow)",
        "glow-emerald": "var(--shadow-glow-emerald)",
        "glow-gold": "var(--shadow-glow-gold)",
      },
      animation: {
        shimmer: "shimmer 3s linear infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "success-bloom": "bloom 0.6s ease-out forwards",
        "spin-slow": "spin 20s linear infinite",
        "spin-slow-reverse": "spin 15s linear infinite reverse",
        "spin-30s": "spin 30s linear infinite",
        "spin-25s-reverse": "spin 25s linear infinite reverse",
        "spin-60s": "spin 60s linear infinite",
        "spin-66s": "spin 66s linear infinite",
        "spin-45s-reverse": "spin 45s linear infinite reverse",
        "spin-50s-reverse": "spin 50s linear infinite reverse",
        "glow-breathe": "glow-breathe 4s ease-in-out infinite",
        "checkmark-pulse": "checkmark-pulse 3s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        bloom: {
          "0%": { transform: "scale(0)", opacity: "0" },
          "50%": { transform: "scale(1.2)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "pulse-ring": {
          "0%, 100%": { transform: "scale(1)", opacity: "0.8" },
          "50%": { transform: "scale(1.05)", opacity: "1" },
        },
        "glow-breathe": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "0.8" },
        },
        "checkmark-pulse": {
          "0%, 100%": { opacity: "0.9" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      transitionDuration: {
        fast: "150ms",
        base: "250ms",
        slow: "350ms",
      },
    },
  },
  plugins: [],
};
export default config;
