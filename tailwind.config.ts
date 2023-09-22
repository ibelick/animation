import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "fade-in": "fade-in 1.5s ease-out infinite",
        "fade-out": "fade-out 1.5s ease-out infinite",
        "slide-in-top": "slide-in-top 1.5s ease-out infinite",
        "slide-in-bottom": "slide-in-bottom 1.5s ease-out infinite",
        "slide-out-top": "slide-out-top 1.5s ease-out infinite",
        "slide-out-bottom": "slide-out-bottom 1.5s ease-out infinite",
        "zoom-in": "zoom-in 1.5s ease-out infinite",
        "zoom-out": "zoom-out 1.5s ease-out infinite",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "slide-in-top": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-in-bottom": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-out-top": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
        "slide-out-bottom": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(100%)" },
        },
        "zoom-in": {
          "0%": { opacity: "0", transform: "scale(.5)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "zoom-out": {
          "0%": { opacity: "1", transform: "scale(1)" },
          "100%": { opacity: "0", transform: "scale(.5)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
