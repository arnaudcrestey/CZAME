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
        canvas: "#EDF4F6",
        "canvas-soft": "#E2ECEF",
        ink: "#071114",
        muted: "#62757C",
        line: "rgba(255,255,255,0.46)",

        primary: "#21464D",
        "primary-dark": "#2A565E",

        accent: "#80AAB5",
        success: "#416F6B",
        warning: "#846346",
        danger: "#8F3131",
        "danger-soft": "#F3E9E8",
        focus: "#5D8D96",
      },
      boxShadow: {
        ambient: "0 34px 120px rgba(5, 24, 30, 0.14)",
        quiet: "0 22px 70px rgba(5, 24, 30, 0.10)",
        hairline: "inset 0 1px 0 rgba(255,255,255,0.68)",
      },
      borderRadius: {
        c: "18px",
        xl2: "28px",
      },
      fontFamily: {
        sans: [
          "Inter",
          "IBM Plex Sans",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;