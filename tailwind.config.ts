import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    screens: { sm: "700px", lg: "1000px" },
    extend: {
      colors: {
        ink: "#181818",
        brand: "#f5b718",
        paper: "#eeeeeb",
        muted: "#6c6c67",
        line: "rgba(24,24,24,.16)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      keyframes: {
        orbit: {
          "0%, 100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(18px,-15px)" },
        },
        scrollMove: {
          "0%": { transform: "translateX(-35px)" },
          "100%": { transform: "translateX(80px)" },
        },
      },
      animation: {
        orbit: "orbit 7s ease-in-out infinite",
        scrollMove: "scrollMove 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
