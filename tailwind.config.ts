import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      colors: {
        deep: "#060a08",
        canvas: "#0a0f0d",
        surface: "#0f1613",
        elevated: "#111916",
        line: "#1f2e28",
        teal: {
          DEFAULT: "#2dd4bf",
          dim: "#0f766e",
        },
        emerald: { DEFAULT: "#34d399" },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(45, 212, 191, 0.2), 0 24px 80px rgba(0, 0, 0, 0.45)",
        cta: "0 4px 24px rgba(45, 212, 191, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
