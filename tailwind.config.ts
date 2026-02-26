import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        "primary-light": "var(--color-primary-light)",
        accent: "var(--color-accent)",
        "accent-hover": "var(--color-accent-hover)",
        "accent-light": "var(--color-accent-light)",
        surface: "var(--color-surface)",
        "surface-hover": "var(--color-surface-hover)",
        border: "var(--color-border)",
        success: "var(--color-success)",
        "success-light": "var(--color-success-light)",
        error: "var(--color-error)",
        "error-light": "var(--color-error-light)",
        "module-1": "var(--color-module-1)",
        "module-2": "var(--color-module-2)",
        "module-3": "var(--color-module-3)",
        "module-4": "var(--color-module-4)",
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', "sans-serif"],
        body: ['"DM Sans"', "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 2px 8px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.2)",
        card: "0 4px 16px rgba(0,0,0,0.3), 0 1px 4px rgba(0,0,0,0.2)",
        "card-hover": "0 8px 32px rgba(0,0,0,0.4), 0 2px 8px rgba(0,0,0,0.2)",
        violet: "0 4px 14px rgba(124, 58, 237, 0.4)",
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.4s ease-out forwards",
        "slide-in-right": "slide-in-right 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
