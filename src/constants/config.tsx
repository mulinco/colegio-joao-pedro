// src/constants/config.tsx
import { Languages, Heart, Zap } from "lucide-react";

export const CLIENT_CONFIG = {
  name: "Colégio João Pedro",
  shortName: "CJP",
  
  colors: {
    background: "#fff4d7", 
    primary: {
      DEFAULT: "#004aad", 
      light: "#187ad3",
      lighter: "#2091e5",
    },
    accent: {
      DEFAULT: "#ff201e", 
      light: "#ff4848",
    },
  },
  
  fonts: {
    display: "var(--font-karantina)",
    body: "var(--font-jakarta)",
  },

  contact: {
    whatsapp: "5521999999999",
    email: "contato@colegiojoaopedro.com.br",
    address: "Rua das Laranjeiras, Rio de Janeiro - RJ",
  },

  assets: {
    hero: "https://images.unsplash.com/photo-1674049406486-4b1f6e1845fd?q=80&w=2070&auto=format&fit=crop",
    about: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop",
    logo: "/logo.png",
  },

  content: {
    diferenciais: [
      {
        title: "Programa Bilíngue",
        subtitle: "Inglês além da sala de aula",
        description: "Nossa metodologia de imersão prepara os alunos...",
        iconName: "Languages", // Apenas o texto agora!
        img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop",
        reverse: false,
      },
      {
        title: "Educação Socioemocional",
        subtitle: "Formando cidadãos resilientes",
        description: "Trabalhamos competências como empatia...",
        iconName: "Heart", // Apenas o texto!
        img: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2070&auto=format&fit=crop",
        reverse: true,
      },
      {
        title: "Tecnologia & Robótica",
        subtitle: "O futuro construído hoje",
        description: "Através do pensamento computacional...",
        iconName: "Zap", // Apenas o texto!
        img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
        reverse: false,
      },
    ],
  },
};