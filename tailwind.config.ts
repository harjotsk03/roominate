import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        vilane: ["var(--font-vilane)", "sans-serif"],
        biennale: ["var(--font-biennale)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
