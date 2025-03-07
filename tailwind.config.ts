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
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out forwards',
        'slide-up': 'slideUp 0.8s ease-in-out forwards',
        'slide-down': 'slideDown 0.8s ease-in-out forwards',
        'slide-left': 'slideLeft 0.8s ease-in-out forwards',
        'slide-right': 'slideRight 0.8s ease-in-out forwards',
        'zoom-in': 'zoomIn 0.8s ease-in-out forwards',
        'zoom-out': 'zoomOut 0.8s ease-in-out forwards',
        'rotate': 'rotate 0.8s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(40px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-40px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        zoomOut: {
          '0%': { transform: 'scale(1.05)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        rotate: {
          '0%': { transform: 'rotate(10deg)', opacity: '0' },
          '100%': { transform: 'rotate(0)', opacity: '1' },
        },
      },
    },
    fontFamily: {
      serif: ['"Karla", sans-serif'],
    },
  },
  plugins: [],
};
export default config;
