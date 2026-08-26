import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#00274C",
        maize: "#FFCB05",
        warm: "#FAF8F4",
        cream: "#F4F1EA",
        ink: "#1E293B",
        slate: "#475569",
        muted: "#64748B",
        line: "#E2E8F0",
      },
      fontFamily: {
        sans: ["Manrope", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 45px rgba(0, 39, 76, 0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
