# 🏫 Colégio João Pedro - Ecossistema Digital (Institucional + LP)

![Vercel Status](https://img.shields.io/badge/Vercel-Deployed-success?style=for-the-badge&logo=vercel)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)

Este projeto evoluiu de uma simples Landing Page para uma solução digital completa para o Colégio João Pedro. Ele combina um site institucional focado em branding com uma Landing Page (`/lp`) de alta conversão, otimizada para capturar leads de novos alunos.

---

# 🚀 O Desafio: De Design Estático a Produto Funcional

O maior diferencial deste projeto foi a tradução da identidade visual solar desenvolvida pela Carol no Behance para uma interface web viva. Como desenvolvedora com noções de design, foquei em manter a hierarquia visual, tipografia e o conceito de "caderno" em cada pixel.

---

## 📸 Visualização do Ecossistema

![Preview Institucional](public\images\preview-cjp.png)

> **Status do Projeto:** Concluído e Otimizado para Performance 🚀

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router).
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/) (Strict Mode).
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/).
- **Animações:** [GSAP](https://greensock.com/gsap/) (ScrollTrigger & useGSAP).
- **Ícones:** [Lucide React](https://lucide.dev/).
- **Validação de Formulários:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/).

---

## ✨ Funcionalidades e Diferenciais Técnicos

- **Sticky Header Minimalista:** Navegação inteligente que se transforma em um menu compacto e transparente ao scrollar, utilizando efeito de vidro (_glassmorphism_).
- **Hero Section Coreografada:** Animação de entrada orquestrada com GSAP, incluindo revelação de texto e composição dinâmica de imagens.
- **Galeria Bento Grid (3x2):** Layout simétrico e responsivo com efeitos de zoom e overlays que reforçam a identidade visual.
- **Captura de Leads:** Formulário com validação rigorosa, estados de carregamento (loading) e feedback visual de sucesso.
- **Design System Consistente:** Implementação rigorosa das cores da marca e tipografia estratégica para legibilidade e impacto.

---

## 🎨 Design System & Identidade Visual

O projeto foi desenvolvido com base no estudo de branding e identidade visual disponível no **Behance**:
👉 [**Confira o projeto completo de Design aqui**](<https://www.behance.net/gallery/220066835/Colgio-Joao-Pedro-(Identidade-Visual)>)

- **Cores Oficiais:**
  - Azul Real: `#004aad` (Confiança e Tradição).
  - Vermelho Vibrante: `#ff3b30` (Energia e Ação).
- **Tipografia:**
  - Principal: **Plus Jakarta Sans** (Leiturabilidade).
  - Destaques: **Karantina** (Impacto Visual).

---

## 🏁 Como rodar o projeto

1.  Clone o repositório:
    ```bash
    git clone https://github.com/mulinco/colegio-joao-pedro.git
    ```
2.  Instale as dependências:
    ```bash
    pnpm install
    ```
3.  Inicie o servidor de desenvolvimento:
    ```bash
    pnpm run dev
    ```

---

## 👥 Créditos

- **Desenvolvimento:** [Maria](https://github.com/mulinco) - Desenvolvedora Full Stack em formação.
- **Design & Identidade Visual:** [Carol](<https://www.behance.net/gallery/220066835/Colgio-Joao-Pedro-(Identidade-Visual)>) - Designer Responsável pela concepção estética.

---

## 🗺️ Roadmap de Melhorias

- [x] Implementação de contadores animados para estatísticas do colégio.
- [ ] Integração do formulário com serviço de e-mail ou banco de dados.
- [x] Botão flutuante de WhatsApp com animação de pulsação.
- [x] Página de "Obrigado" personalizada após o envio do lead.
