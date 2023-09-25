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
        "slide-in-left": "slide-in-left 1.5s ease-out infinite",
        "slide-in-right": "slide-in-right 1.5s ease-out infinite",
        "slide-out-left": "slide-out-left 1.5s ease-out infinite",
        "slide-out-right": "slide-out-right 1.5s ease-out infinite",
        "spin-clockwise": "spin-clockwise 1.5s linear infinite",
        "spin-anti-clockwise": "spin-anti-clockwise 1.5s linear infinite",
        "flip-x": "flip-x 1.5s ease-out infinite",
        "flip-y": "flip-y 1.5s ease-out infinite",
        blink: "blink 0.5s infinite",
        pop: "pop 1.5s ease-out infinite",
        "expand-horizontally": "expand-horizontally 1.5s ease-out infinite",
        "contract-horizontally": "contract-horizontally 1.5s ease-out infinite",
        "expand-vertically": "expand-vertically 1.5s ease-out infinite",
        "contract-vertically": "contract-vertically 1.5s ease-out infinite",
        "fade-in-up": "fade-in-up 1.5s ease-out infinite",
        "fade-in-down": "fade-in-down 1.5s ease-out infinite",
        "fade-in-left": "fade-in-left 1.5s ease-out infinite",
        "fade-in-right": "fade-in-right 1.5s ease-out infinite",
        "fade-out-up": "fade-out-up 1.5s ease-out infinite",
        "fade-out-down": "fade-out-down 1.5s ease-out infinite",
        "fade-out-left": "fade-out-left 1.5s ease-out infinite",
        "fade-out-right": "fade-out-right 1.5s ease-out infinite",
        sway: "sway 1.5s ease-out infinite",
        "flip-in-x": "flip-in-x 1.5s ease-out infinite",
        "flip-in-y": "flip-in-y 1.5s ease-out infinite",
        "flip-out-x": "flip-out-x 1.5s ease-out infinite",
        "flip-out-y": "flip-out-y 1.5s ease-out infinite",
        "rotate-in": "rotate-in 1.5s ease-out infinite",
        "rotate-out": "rotate-out 1.5s ease-out infinite",
        "slide-rotate-in": "slide-rotate-in 1.5s ease-out infinite",
        "slide-rotate-out": "slide-rotate-out 1.5s ease-out infinite",
        heartbeat: "heartbeat 1.5s ease-out infinite",
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
          "0%": { transform: "translateY(-25%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-in-bottom": {
          "0%": { transform: "translateY(25%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-out-top": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-25%)" },
        },
        "slide-out-bottom": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(25%)" },
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
          "25%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0)" },
        },
        swing: {
          "0%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(15deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        wobble: {
          "0%": { transform: "translateX(0)" },
          "15%": { transform: "translateX(-25%)" },
          "30%": { transform: "translateX(20%)" },
          "45%": { transform: "translateX(-15%)" },
          "60%": { transform: "translateX(25%)" },
          "75%": { transform: "translateX(-5%)" },
          "100%": { transform: "translateX(0)" },
        },
        pulse: {
          "0%": { transform: "scale(1)" },
          "25%": { transform: "scale(1.1)" },
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
          "25%": { transform: "scale(1.1) rotate(3deg)" },
          "60%": { transform: "scale(1.1) rotate(-3deg)" },
          "70%": { transform: "scale(1.1) rotate(3deg)" },
          "80%": { transform: "scale(1.1) rotate(-3deg)" },
          "90%": { transform: "scale(1.1) rotate(3deg)" },
          "100%": { transform: "scale(1) rotate(0)" },
        },
        jump: {
          "0%": { transform: "translateY(0)" },
          "25%": { transform: "translateY(-25%)" },
          "100%": { transform: "translateY(0)" },
        },
        hang: {
          "0%": { transform: "translateY(-25%)" },
          "25%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-25%)" },
        },
        "roll-in": {
          "0%": { transform: "translateX(-25%) rotate(-120deg)" },
          "100%": { transform: "translateX(0) rotate(0)" },
        },
        "roll-out": {
          "0%": { transform: "translateX(0) rotate(0)" },
          "100%": { transform: "translateX(25%) rotate(120deg)" },
        },
        float: {
          "0%": { transform: "translateY(0)" },
          "25%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0)" },
        },
        sink: {
          "0%": { transform: "translateY(-10px)" },
          "25%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-10px)" },
        },
        flash: {
          "0%": { opacity: "1" },
          "25%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        jiggle: {
          "0%": { transform: "rotate(-3deg)" },
          "25%": { transform: "rotate(3deg)" },
          "100%": { transform: "rotate(-3deg)" },
        },
        "rubber-band": {
          "0%": { transform: "scale(1)" },
          "30%": { transform: "scale(1.25)" },
          "40%": { transform: "scale(0.75)" },
          "25%": { transform: "scale(1.15)" },
          "65%": { transform: "scale(0.95)" },
          "75%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)" },
        },
        "slide-in-left": {
          "0%": { transform: "translateX(-25%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(25%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-out-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-25%)" },
        },
        "slide-out-right": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(25%)" },
        },
        "spin-clockwise": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "spin-anti-clockwise": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
        "flip-x": {
          "0%": { transform: "scaleX(1)" },
          "25%": { transform: "scaleX(-1)" },
          "100%": { transform: "scaleX(1)" },
        },
        "flip-y": {
          "0%": { transform: "scaleY(1)" },
          "25%": { transform: "scaleY(-1)" },
          "100%": { transform: "scaleY(1)" },
        },
        blink: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        pop: {
          "0%": { transform: "scale(1)" },
          "25%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
        "expand-horizontally": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
        "contract-horizontally": {
          "0%": { transform: "scaleX(1)" },
          "100%": { transform: "scaleX(0)" },
        },
        "expand-vertically": {
          "0%": { transform: "scaleY(0)" },
          "100%": { transform: "scaleY(1)" },
        },
        "contract-vertically": {
          "0%": { transform: "scaleY(1)" },
          "100%": { transform: "scaleY(0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(25%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-down": {
          "0%": { opacity: "0", transform: "translateY(-25%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-left": {
          "0%": { opacity: "0", transform: "translateX(25%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-in-right": {
          "0%": { opacity: "0", transform: "translateX(-25%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-out-up": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(25%)" },
        },
        "fade-out-down": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-25%)" },
        },
        "fade-out-left": {
          "0%": { opacity: "1", transform: "translateX(0)" },
          "100%": { opacity: "0", transform: "translateX(25%)" },
        },
        "fade-out-right": {
          "0%": { opacity: "1", transform: "translateX(0)" },
          "100%": { opacity: "0", transform: "translateX(-25%)" },
        },
        sway: {
          "0%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(15deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        "flip-in-x": {
          "0%": { opacity: "0", transform: "rotateX(90deg)" },
          "100%": { opacity: "1", transform: "rotateX(0deg)" },
        },
        "flip-in-y": {
          "0%": { opacity: "0", transform: "rotateY(90deg)" },
          "100%": { opacity: "1", transform: "rotateY(0deg)" },
        },
        "flip-out-x": {
          "0%": { opacity: "1", transform: "rotateX(0deg)" },
          "100%": { opacity: "0", transform: "rotateX(90deg)" },
        },
        "flip-out-y": {
          "0%": { opacity: "1", transform: "rotateY(0deg)" },
          "100%": { opacity: "0", transform: "rotateY(90deg)" },
        },
        "rotate-in": {
          "0%": { opacity: "0", transform: "rotate(-90deg)" },
          "100%": { opacity: "1", transform: "rotate(0deg)" },
        },
        "rotate-out": {
          "0%": { opacity: "1", transform: "rotate(0deg)" },
          "100%": { opacity: "0", transform: "rotate(90deg)" },
        },
        "slide-rotate-in": {
          "0%": { opacity: "0", transform: "translateX(-25%) rotate(-90deg)" },
          "100%": { opacity: "1", transform: "translateX(0) rotate(0deg)" },
        },
        "slide-rotate-out": {
          "0%": { opacity: "1", transform: "translateX(0) rotate(0deg)" },
          "100%": { opacity: "0", transform: "translateX(25%) rotate(90deg)" },
        },
        heartbeat: {
          "0%": { transform: "scale(1)" },
          "25%": { transform: "scale(1.1)" },
          "50%": { transform: "scale(1)" },
          "75%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
