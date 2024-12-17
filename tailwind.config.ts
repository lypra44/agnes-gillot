import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryblue: "var(--blue-primary)",
        primarygreen: "var(--green-primary)",
        darkgreen: "var(--dark-green)",
        lightgreen: "var(--light-green)",
        darkblue: "var(--dark-blue)",
      },
    },
    fontFamily: {
      serif: ['"Karla", sans-serif'],
    },
  },
  plugins: [],
};
export default config;
