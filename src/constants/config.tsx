// src/constants/config.tsx
import { Languages, Heart, Zap, Trophy, Palette, Leaf } from "lucide-react";

export const CLIENT_CONFIG = {
  name: "Colégio João Pedro",
  shortName: "CJP",

  colors: {
    // Cor de fundo geral (o bege mais amarelado que você escolheu)
    background: "#fff4d7",

    // Escala tonal da cor principal (Azul)
    primary: {
      DEFAULT: "#004aad",
      light: "#187ad3",
      lighter: "#2091e5",
    },

    // Escala tonal do destaque (Vermelho)
    accent: {
      DEFAULT: "#ff3b30",
      light: "#ff4848",
    },

    // Cores da Marca (Brand Assets)
    brand: {
      bege: "#FEF5E1",
      azul: "#004aad",
      vermelho: "#ff3b30",
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
    about:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop",
    logo: "/logo.png",
  },

  content: {
    diferenciais: [
      {
        title: "Programa Bilíngue",
        subtitle: "Inglês além da sala de aula",
        description:
          "Mais do que aprender um novo idioma, nossos alunos vivenciam o inglês de forma natural e imersiva. Através de projetos interdisciplinares, desenvolvemos a confiança necessária para que eles se comuniquem e interajam em um cenário global, transformando o idioma em uma ferramenta de descoberta.",
        iconName: "Languages",
        img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop",
        reverse: false,
      },
      {
        title: "Educação Socioemocional",
        subtitle: "Formando cidadãos resilientes",
        description:
          "Acreditamos que o sucesso acadêmico caminha junto com o equilíbrio emocional. Nosso programa foca no desenvolvimento de competências como resiliência, empatia e colaboração. Preparamos o aluno para entender suas emoções e agir com protagonismo, ética e autoconfiança em todas as fases da vida.",
        iconName: "Heart",
        img: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2070&auto=format&fit=crop",
        reverse: true,
      },
      {
        title: "Tecnologia & Robótica",
        subtitle: "O futuro construído hoje",
        description:
          "Aqui, a tecnologia não é apenas uma ferramenta, é uma linguagem de criação. Através da robótica e do raciocínio lógico, nossos alunos deixam de ser apenas consumidores e passam a ser desenvolvedores de soluções. Estimulamos a curiosidade e o 'mão na massa' para resolver problemas reais com inovação.",
        iconName: "Zap",
        img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
        reverse: false,
      },
      {
        title: "Esportes e Vida Saudável",
        subtitle: "Disciplina e superação além do pódio",
        description:
          "O esporte no CJP é um pilar fundamental para a formação do caráter. Através das nossas escolinhas e atividades esportivas, incentivamos o trabalho em equipe, o respeito às regras e a importância de manter corpo e mente em equilíbrio. Aqui, cada movimento é uma lição de persistência.",
        iconName: "Trophy",
        img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop",
        reverse: true,
      },
      {
        title: "Arte e Cultura",
        subtitle: "Criatividade para expressar o mundo",
        description:
          "Acreditamos que a arte é a linguagem da sensibilidade. Nossos projetos culturais estimulam a expressão artística, o teatro e a música, permitindo que os alunos desenvolvam sua criatividade e confiança. Estimulamos a percepção estética e a valorização das diversas manifestações culturais.",
        iconName: "Palette",
        img: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2070&auto=format&fit=crop",
        reverse: false,
      },
      {
        title: "Consciência Ambiental",
        subtitle: "Atitudes que transformam o futuro",
        description:
          "Preparamos nossos alunos para serem cidadãos conscientes do seu impacto no planeta. Através de projetos de sustentabilidade e educação ambiental, promovemos o consumo consciente e o respeito à biodiversidade, transformando o conhecimento em ações práticas para um mundo mais equilibrado.",
        iconName: "Leaf",
        img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2070&auto=format&fit=crop",
        reverse: true,
      },
    ],
  },
};
