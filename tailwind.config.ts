import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#2C3531",
          teal: "#116466",
          sand: "#D9B08C",
          peach: "#FFCB9A",
          ice: "#D1E8E2",
        },
      },
    },
  },
  plugins: [],
};

export default config;
