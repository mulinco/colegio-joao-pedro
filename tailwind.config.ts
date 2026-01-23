import type { Config } from "tailwindcss";
// @ts-expect-error - Necessário para importar .tsx no tailwind.config
import { CLIENT_CONFIG } from "./src/constants/config.tsx";
import type { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Verifica todas as rotas do App Router
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // Verifica todos os seus componentes
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", // Caso ainda use a pasta pages antiga
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
  plugins: [
    ({ addUtilities }: PluginAPI) => {
      addUtilities({
        ".clip-paper": {
          "clip-path":
            "polygon(0% 0%, 16% 2%, 39% 0%, 83% 4%, 100% 0%, 100% 24%, 98% 48%, 100% 75%, 100% 100%, 75% 97%, 45% 100%, 0% 100%, 2% 80%, 0% 50%)",
        },
        ".paper-shadow": {
          filter:
            "drop-shadow(1px 2px 0px rgba(0,0,0,0.08)) drop-shadow(0px 6px 12px rgba(0,0,0,0.05))",
        },
      });
    },
  ],
};

export default config;
