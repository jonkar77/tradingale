import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        slideIn: "slideIn 0.5s cubic-bezier(0.175, 0.885, 0.12, 1.275) forwards",
        slideOut: "slideOut 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards",
      },
      keyframes: {
        slideIn: {
          "0%": { width: "0", marginLeft: "0" },
          "100%": { width: "130px", marginLeft: "1rem" },
        },
        slideOut: {
          "0%": { width: "130px", marginLeft: "1rem" },
          "100%": { width: "0", marginLeft: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
