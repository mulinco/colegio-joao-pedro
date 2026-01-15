import type { Config } from "tailwindcss";
// @ts-expect-error - Necessário para importar .tsx no tailwind.config
import { CLIENT_CONFIG } from "./src/constants/config.tsx";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: CLIENT_CONFIG.colors.background,
        primary: CLIENT_CONFIG.colors.primary,
        accent: CLIENT_CONFIG.colors.accent,
      },
      fontFamily: {
        display: [CLIENT_CONFIG.fonts.display, "sans-serif"],
        body: [CLIENT_CONFIG.fonts.body, "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;