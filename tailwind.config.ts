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
        "rotate-90": "rotate-90 1s ease-in-out infinite",
        "rotate-180": "rotate-180 1s ease-in-out infinite",
        "rotate-360": "rotate-360 1s linear infinite",
        "flip-horizontal": "flip-horizontal 1s ease-in-out infinite",
        "flip-vertical": "flip-vertical 1s ease-in-out infinite",
        bounce: "bounce 1s ease-in-out infinite",
        swing: "swing 1s ease-in-out infinite",
        wobble: "wobble 1s ease-in-out infinite",
        pulse: "pulse 1s ease-in-out infinite",
        shake: "shake 0.5s ease-in-out infinite",
        tada: "tada 1s ease-in-out infinite",
        jump: "jump 1s ease-in-out infinite",
        hang: "hang 1s ease-in-out infinite",
        "roll-in": "roll-in 1s ease-in-out infinite",
        "roll-out": "roll-out 1s ease-in-out infinite",
        float: "float 1s ease-in-out infinite",
        sink: "sink 1s ease-in-out infinite",
        flash: "flash 1s ease-in-out infinite",
        jiggle: "jiggle 0.5s ease-in-out infinite",
        "rubber-band": "rubber-band 1s ease-in-out infinite",
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
        "rotate-90": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(90deg)" },
        },
        "rotate-180": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(180deg)" },
        },
        "rotate-360": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "flip-horizontal": {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(180deg)" },
        },
        "flip-vertical": {
          "0%": { transform: "rotateX(0deg)" },
          "100%": { transform: "rotateX(180deg)" },
        },
        bounce: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0)" },
        },
        swing: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(15deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        wobble: {
          "0%": { transform: "translateX(0)" },
          "15%": { transform: "translateX(-25%)" },
          "30%": { transform: "translateX(20%)" },
          "45%": { transform: "translateX(-15%)" },
          "60%": { transform: "translateX(10%)" },
          "75%": { transform: "translateX(-5%)" },
          "100%": { transform: "translateX(0)" },
        },
        pulse: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
        shake: {
          "0%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-10px)" },
          "50%": { transform: "translateX(10px)" },
          "75%": { transform: "translateX(-10px)" },
          "100%": { transform: "translateX(0)" },
        },
        tada: {
          "0%": { transform: "scale(1)" },
          "10%": { transform: "scale(0.9) rotate(-3deg)" },
          "20%": { transform: "scale(0.9) rotate(-3deg)" },
          "30%": { transform: "scale(1.1) rotate(3deg)" },
          "40%": { transform: "scale(1.1) rotate(-3deg)" },
          "50%": { transform: "scale(1.1) rotate(3deg)" },
          "60%": { transform: "scale(1.1) rotate(-3deg)" },
          "70%": { transform: "scale(1.1) rotate(3deg)" },
          "80%": { transform: "scale(1.1) rotate(-3deg)" },
          "90%": { transform: "scale(1.1) rotate(3deg)" },
          "100%": { transform: "scale(1) rotate(0)" },
        },
        jump: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-25%)" },
          "100%": { transform: "translateY(0)" },
        },
        hang: {
          "0%": { transform: "translateY(-25%)" },
          "50%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-25%)" },
        },
        "roll-in": {
          "0%": { transform: "translateX(-100%) rotate(-120deg)" },
          "100%": { transform: "translateX(0) rotate(0)" },
        },
        "roll-out": {
          "0%": { transform: "translateX(0) rotate(0)" },
          "100%": { transform: "translateX(100%) rotate(120deg)" },
        },
        float: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0)" },
        },
        sink: {
          "0%": { transform: "translateY(-10px)" },
          "50%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-10px)" },
        },
        flash: {
          "0%": { opacity: "1" },
          "50%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        jiggle: {
          "0%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
          "100%": { transform: "rotate(-3deg)" },
        },
        "rubber-band": {
          "0%": { transform: "scale(1)" },
          "30%": { transform: "scale(1.25)" },
          "40%": { transform: "scale(0.75)" },
          "50%": { transform: "scale(1.15)" },
          "65%": { transform: "scale(0.95)" },
          "75%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
