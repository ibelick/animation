// complete list of animations
export const TWCONF = {
  ["fade-in"]: {
    animation: {
      "fade-in": "fade-in 1.5s linear infinite",
    },
    keyframes: {
      "fade-in": {
        "0%": { opacity: "0" },
        "100%": { opacity: "1" },
      },
    },
    className: "animate-fade-in",
  },
  ["fade-out"]: {
    animation: {
      "fade-out": "fade-out 1.5s linear infinite",
    },
    keyframes: {
      "fade-out": {
        "0%": { opacity: "1" },
        "100%": { opacity: "0" },
      },
    },
    className: "animate-fade-out",
  },
} as const;

export const TWCONF_KEYS = Object.keys(TWCONF) as (keyof typeof TWCONF)[];

export const animations = [
  {
    name: "Fade In",
    class: "animate-fade-in",
    description: "Elements fade in from full transparency.",
  },
  {
    name: "Fade Out",
    class: "animate-fade-out",
    description: "Elements fade out to full transparency.",
  },
  {
    name: "Slide In (Top)",
    class: "animate-slide-in-top",
    description: "Elements slide in from the top.",
  },
  {
    name: "Slide In (Bottom)",
    class: "animate-slide-in-bottom",
    description: "Elements slide in from the bottom.",
  },
  {
    name: "Slide Out (Top)",
    class: "animate-slide-out-top",
    description: "Elements slide out towards the top.",
  },
  {
    name: "Slide Out (Bottom)",
    class: "animate-slide-out-bottom",
    description: "Elements slide out towards the bottom.",
  },
  {
    name: "Zoom In",
    class: "animate-zoom-in",
    description: "Elements scale from smaller to natural size while fading in.",
  },
  {
    name: "Zoom Out",
    class: "animate-zoom-out",
    description:
      "Elements scale from natural size to smaller while fading out.",
  },
] as const;
