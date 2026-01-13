import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#fff4d7", // Creme
        primary: {
          DEFAULT: "#005eb3", // Azul
          light: "#187ad3",
          lighter: "#2091e5",
        },
        accent: {
          DEFAULT: "#ff201e", // Vermelho
          light: "#ff4848",
        },
      },
      fontFamily: {
        // Simplificado: usa a fonte do Google ou a padrão do sistema
        display: ["var(--font-karantina)", "sans-serif"],
        body: ["var(--font-jakarta)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
