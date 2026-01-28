This file is a merged representation of a subset of the codebase, containing files not matching ignore patterns, combined into a single document by Repomix.

# File Summary

## Purpose

This file contains a packed representation of a subset of the repository's contents that is considered the most important context.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format

The content is organized as follows:

1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
   a. A header with the file path (## File: path/to/file)
   b. The full contents of the file in a code block

## Usage Guidelines

- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes

- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching these patterns are excluded: node_modules, dist, .git, .env, out, next, .next, package-lock.json
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure

```
.commitlintrc.json
.gitignore
.husky/commit-msg
.husky/pre-commit
.prettierrc
.storybook/main.ts
.storybook/preview.ts
.storybook/vitest.setup.ts
eslint.config.mjs
next.config.ts
package.json
playwright.config.ts
pnpm-workspace.yaml
postcss.config.mjs
public/images/hero-student-v2.png
public/images/logo.png
public/images/preview-cjp.png
README.md
src/app/diferenciais/DiferenciaisContent.tsx
src/app/diferenciais/page.tsx
src/app/estrutura/EstruturaContent.tsx
src/app/estrutura/page.tsx
src/app/faq/FAQContent.tsx
src/app/faq/page.tsx
src/app/globals.css
src/app/icon.png
src/app/layout.tsx
src/app/not-found.tsx
src/app/page.tsx
src/app/proposta/page.tsx
src/app/proposta/PropostaContent.tsx
src/app/thanks/page.tsx
src/app/thanks/ThanksContent.tsx
src/components/layout/footer.tsx
src/components/layout/header.tsx
src/components/sections/about.tsx
src/components/sections/DirecaoQuote.tsx
src/components/sections/features.tsx
src/components/sections/FinalCTA.tsx
src/components/sections/gallery.tsx
src/components/sections/hero.tsx
src/components/shared/enrollment/index.ts
src/components/shared/enrollment/lead-form.tsx
src/components/shared/enrollment/schema.ts
src/components/shared/enrollment/use-lead-form.ts
src/components/ui/BackToTop.tsx
src/components/ui/CounterItem.tsx
src/components/ui/FadeIn.tsx
src/components/ui/FlowingMenu.tsx
src/components/ui/PaperSection.tsx
src/components/ui/ScrollProgress.tsx
src/components/ui/SplitText.tsx
src/components/ui/WhatsAppButton.tsx
src/constants/config.tsx
src/lib/utils.ts
stories/assets/accessibility.png
stories/assets/accessibility.svg
stories/assets/addon-library.png
stories/assets/assets.png
stories/assets/avif-test-image.avif
stories/assets/context.png
stories/assets/discord.svg
stories/assets/docs.png
stories/assets/figma-plugin.png
stories/assets/github.svg
stories/assets/share.png
stories/assets/styling.png
stories/assets/testing.png
stories/assets/theming.png
stories/assets/tutorials.svg
stories/assets/youtube.svg
stories/button.css
stories/Button.stories.ts
stories/Button.tsx
stories/Configure.mdx
stories/header.css
stories/Header.stories.ts
stories/Header.tsx
stories/page.css
stories/Page.stories.ts
stories/Page.tsx
tailwind.config.ts
tests/example.spec.ts
tests/navigation.spec.ts
tsconfig.json
vitest.config.ts
vitest.shims.d.ts
```

# Files

## File: .commitlintrc.json

```json
{
  "extends": ["@commitlint/config-conventional"]
}
```

## File: .husky/commit-msg

```
npx --no -- commitlint --edit $1
```

## File: .prettierrc

```
{
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "es5",
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

## File: .storybook/main.ts

```typescript
import type { StorybookConfig } from "@storybook/nextjs-vite";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
  ],
  framework: "@storybook/nextjs-vite",
  staticDirs: ["..\\public"],
};
export default config;
```

## File: .storybook/preview.ts

```typescript
import type { Preview } from "@storybook/nextjs-vite";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
};

export default preview;
```

## File: .storybook/vitest.setup.ts

```typescript
import * as a11yAddonAnnotations from "@storybook/addon-a11y/preview";
import { setProjectAnnotations } from "@storybook/nextjs-vite";
import * as projectAnnotations from "./preview";

// This is an important step to apply the right configuration when testing your stories.
// More info at: https://storybook.js.org/docs/api/portable-stories/portable-stories-vitest#setprojectannotations
setProjectAnnotations([a11yAddonAnnotations, projectAnnotations]);
```

## File: playwright.config.ts

```typescript
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  reporter: "html",
  use: {
    baseURL: "http://localhost:3000",
    trace: "on-first-retry",
    // ISSO AQUI RESOLVE O PROBLEMA DAS ANIMAÇÕES LENTAS:
    contextOptions: {
      reducedMotion: "reduce",
    },
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  // Tenta ligar o servidor sozinho se ele estiver desligado
  webServer: {
    command: "pnpm dev",
    url: "http://localhost:3000",
    reuseExistingServer: true,
  },
});
```

## File: pnpm-workspace.yaml

```yaml
packages:
  - .
ignoredBuiltDependencies:
  - sharp
  - unrs-resolver
```

## File: src/app/diferenciais/DiferenciaisContent.tsx

```typescript
"use client";

import FadeIn from "@/components/ui/FadeIn";
import SplitText from "@/components/ui/SplitText";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { CLIENT_CONFIG } from "@/constants/config";
import { Languages, Heart, Zap, Trophy, Palette, Leaf } from "lucide-react";
import FinalCTA from "@/components/sections/FinalCTA";
import DirecaoQuote from "@/components/sections/DirecaoQuote";

const iconMap = {
  Languages: <Languages size={32} className="text-accent" />,
  Heart: <Heart size={32} className="text-accent" />,
  Zap: <Zap size={32} className="text-accent" />,
  Trophy: <Trophy size={32} className="text-accent" />,
  Palette: <Palette size={32} className="text-accent" />,
  Leaf: <Leaf size={32} className="text-accent" />,
};

export function DiferenciaisContent() {
  return (
    <main className="min-h-screen bg-transparent pb-20 pt-32">
      {/* PRIMEIRO CONTAINER: Apenas para Cabeçalho e Lista */}
      <div className="container mx-auto px-4">
        {/* CABEÇALHO */}
        <section className="mb-24 text-center">
          <FadeIn direction="up">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-bold uppercase tracking-widest text-primary">
              Por que escolher o {CLIENT_CONFIG.shortName}?
            </span>
          </FadeIn>
          <h1 className="mb-6 font-display text-5xl font-black text-primary md:text-7xl">
            <SplitText text="DIFERENCIAIS" />
          </h1>
          <FadeIn delay={0.5}>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Muito além do conteúdo acadêmico, oferecemos para os alunos do{" "}
              {CLIENT_CONFIG.name} uma formação completa.
            </p>
          </FadeIn>
        </section>

        {/* LISTA DE DIFERENCIAIS */}
        <div className="mb-32 space-y-32">
          {CLIENT_CONFIG.content.diferenciais.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center gap-12 md:flex-row ${item.reverse ? "md:flex-row-reverse" : ""}`}
            >
              <div className="flex-1">
                <FadeIn direction={item.reverse ? "left" : "right"}>
                  <div className="space-y-6 rounded-[3rem] border border-gray-50 bg-white p-10 shadow-xl md:p-14">
                    <div className="flex items-center gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-gray-100 bg-background shadow-sm">
                        {iconMap[item.iconName as keyof typeof iconMap]}
                      </div>
                      <div>
                        <h3 className="text-sm font-black uppercase tracking-widest text-accent">
                          {item.subtitle}
                        </h3>
                        <h2 className="font-display text-3xl font-black text-primary md:text-4xl">
                          {item.title}
                        </h2>
                      </div>
                    </div>
                    <p className="text-lg leading-relaxed text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </FadeIn>
              </div>

              <div className="flex-1">
                <FadeIn direction={item.reverse ? "right" : "left"} delay={0.3}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[3rem] border-4 border-white shadow-2xl">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </FadeIn>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* FECHOU O CONTAINER AQUI */}

      {/* COMPONENTES FORA DO CONTAINER PARA OCUPAREM 100% DA LARGURA */}
      <DirecaoQuote />
      <FinalCTA />

      {/* SEGUNDO CONTAINER: Apenas para o link de Voltar */}
      <div className="container mx-auto mt-32 px-4 text-center">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 font-bold text-primary transition-colors hover:text-accent"
        >
          <ArrowLeft
            size={20}
            className="transition-transform group-hover:-translate-x-2"
          />
          Voltar para a Home
        </Link>
      </div>
    </main>
  );
}
```

## File: src/app/estrutura/EstruturaContent.tsx

```typescript
"use client";

import { useState } from "react";
import FadeIn from "@/components/ui/FadeIn";
import SplitText from "@/components/ui/SplitText";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Microscope, Trophy, BookOpen, Coffee } from "lucide-react";
import { CLIENT_CONFIG } from "@/constants/config";
import FinalCTA from "@/components/sections/FinalCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Infraestrutura",
};

// Definição das categorias e fotos
const CATEGORIES = [
  "Todos",
  "Laboratórios",
  "Esportes",
  "Salas",
  "Convivência",
];

const GALLERY_ITEMS = [
  {
    id: 1,
    category: "Laboratórios",
    title: "Laboratório de Ciências",
    img: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1986&auto=format&fit=crop",
    icon: <Microscope size={20} />,
  },
  {
    id: 2,
    category: "Esportes",
    title: "Quadra Poliesportiva",
    img: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop",
    icon: <Trophy size={20} />,
  },
  {
    id: 3,
    category: "Salas",
    title: "Sala de Aula Interativa",
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop",
    icon: <BookOpen size={20} />,
  },
  {
    id: 4,
    category: "Convivência",
    title: "Pátio Central",
    img: "https://images.unsplash.com/photo-1706323625335-dad461b68fe5?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: <Coffee size={20} />,
  },
  {
    id: 5,
    category: "Laboratórios",
    title: "Espaço Maker",
    img: "https://images.unsplash.com/photo-1633828763399-e29f1cd3f4c1?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: <Microscope size={20} />,
  },
];

export function EstruturaContent() {
  const [filter, setFilter] = useState("Todos");

  const filteredItems =
    filter === "Todos"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === filter);

  return (
    <main className="min-h-screen bg-transparent pb-20 pt-32">
      <div className="container mx-auto px-4">
        {/* HERO */}
        <header className="mb-16 text-center">
          <FadeIn direction="up">
            <span className="mb-4 inline-block rounded-full bg-[#ff3b30]/10 px-4 py-1 text-sm font-bold uppercase tracking-widest text-[#ff3b30]">
              Ambientes de Aprendizado
            </span>
          </FadeIn>
          <h1 className="mb-6 font-display text-[clamp(2.5rem,8vw,4.5rem)] font-black text-[#004aad]">
            <SplitText text="INFRAESTRUTURA" />
          </h1>

          <FadeIn delay={0.5}>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Espaços modernos planejados para estimular a criatividade, a
              investigação científica e o bem-estar dos nossos alunos.
            </p>
          </FadeIn>
        </header>

        {/* FILTROS */}
        <FadeIn direction="up" delay={0.7}>
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-6 py-2 text-sm font-bold transition-all ${
                  filter === cat
                    ? "bg-[#004aad] text-white shadow-lg"
                    : "border border-gray-100 bg-white text-[#004aad] hover:bg-[#004aad]/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* CONTAINER: Trocamos 'grid' por 'flex flex-wrap justify-center' */}
        <div className="flex flex-wrap justify-center gap-8">
          {filteredItems.map((item) => (
            <FadeIn
              key={item.id}
              direction="up"
              distance={20}
              /* DEFINIÇÃO DE LARGURA:
         - w-full: 100% no mobile
         - md:w-[calc(50%-1rem)]: 2 colunas no tablet (descontando o gap)
         - lg:w-[calc(33.333%-1.5rem)]: 3 colunas no desktop
      */
              className="w-full flex-shrink-0 flex-grow-0 md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
            >
              <div className="group relative overflow-hidden rounded-[2.5rem] bg-white shadow-sm transition-all hover:shadow-xl">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#004aad]/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="mb-2 flex items-center gap-2 text-[#ff3b30]">
                    {item.icon}
                    <span className="text-xs font-bold uppercase tracking-widest text-white/90">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* CTA FINAL */}
      <FadeIn direction="up" delay={0.7} className="mt-20">
        <FinalCTA />
      </FadeIn>
      {/* BOTÃO DE VOLTA */}
      <div className="mt-20 text-center">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 font-bold text-[#004aad] transition-colors hover:text-[#ff3b30]"
        >
          <ArrowLeft
            size={20}
            className="transition-transform group-hover:-translate-x-2"
          />
          Voltar para a Home
        </Link>
      </div>
    </main>
  );
}
```

## File: src/app/faq/FAQContent.tsx

```typescript
"use client";

import { useState } from "react";
import FadeIn from "@/components/ui/FadeIn";
import SplitText from "@/components/ui/SplitText";
import { Plus, Minus, ArrowLeft, MessageCircle } from "lucide-react";
import Link from "next/link";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const faqs = [
  {
    question: "Qual é a linha pedagógica do colégio?",
    answer:
      "Seguimos a linha Sociointeracionista, onde o aluno é o protagonista do seu aprendizado e o professor atua como mediador, estimulando a troca de conhecimentos e a interação social.",
  },
  {
    question: "Como posso agendar uma visita guiada?",
    answer:
      "As visitas podem ser agendadas diretamente pelo nosso formulário na Home ou através do botão flutuante de WhatsApp. Nossa equipe pedagógica terá prazer em apresentar nossa estrutura.",
  },
  {
    question: "O colégio oferece atividades extracurriculares?",
    answer:
      "Sim! Oferecemos Robótica, Judô, Ballet, Iniciação Científica e Programa Bilíngue, integrando tecnologia e cultura ao dia a dia escolar.",
  },
  {
    question: "Como funciona o sistema de avaliação?",
    answer:
      "Nossa avaliação é contínua e processual. Além das provas bimestrais, consideramos projetos, participação em laboratórios e o desenvolvimento de competências socioemocionais.",
  },
  {
    question: "Existe suporte para alunos com dificuldades?",
    answer:
      "Sim, contamos com um núcleo de apoio pedagógico especializado para acompanhamento individualizado, garantindo que nenhum aluno fique para trás em sua jornada.",
  },
];

export function FAQContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-transparent pb-20 pt-32">
      <div className="container mx-auto max-w-3xl px-4">
        {/* CABEÇALHO */}
        <section className="mb-16 text-center">
          <FadeIn direction="up">
            <span className="mb-4 inline-block rounded-full bg-[#004aad]/10 px-4 py-1 text-sm font-bold uppercase tracking-widest text-[#004aad]">
              Dúvidas Comuns
            </span>
          </FadeIn>
          <h1 className="mb-6 font-display text-5xl font-black text-[#004aad] md:text-6xl">
            <SplitText text="FAQ" />
          </h1>
          <FadeIn delay={0.5}>
            <p className="text-lg text-gray-600">
              Encontre aqui as respostas para as principais perguntas sobre o
              dia a dia no Colégio João Pedro.
            </p>
          </FadeIn>
        </section>

        {/* ACORDEÃO */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={0.1 * index} direction="up">
              <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all hover:shadow-md">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between p-6 text-left transition-colors"
                >
                  <span
                    className={`text-lg font-bold ${openIndex === index ? "text-[#ff3b30]" : "text-[#004aad]"}`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-300 ${openIndex === index ? "rotate-180 bg-[#ff3b30] text-white" : "bg-[#004aad]/5 text-[#004aad]"}`}
                  >
                    {openIndex === index ? (
                      <Minus size={18} />
                    ) : (
                      <Plus size={18} />
                    )}
                  </div>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="mt-2 border-t border-gray-50 p-6 pt-0 leading-relaxed text-gray-600">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA FINAL */}
        <FadeIn delay={0.8} direction="up">
          <div className="mt-20 rounded-[2.5rem] bg-[#004aad] p-10 text-center text-white shadow-2xl">
            <h2 className="mb-4 text-2xl font-bold">Ainda tem dúvidas?</h2>
            <p className="mb-8 text-blue-100">
              Nossa equipe de atendimento está pronta para conversar com você.
            </p>
            <WhatsAppButton variant="inline" label="Falar no WhatsApp" />
          </div>
        </FadeIn>

        {/* VOLTAR */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 font-bold text-[#004aad] transition-colors hover:text-[#ff3b30]"
          >
            <ArrowLeft
              size={20}
              className="transition-transform group-hover:-translate-x-2"
            />
            Voltar para a Home
          </Link>
        </div>
      </div>
    </main>
  );
}
```

## File: src/app/not-found.tsx

```typescript
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import { Home, ArrowLeft, Search } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página não encontrada | Colégio João Pedro",
  description: "Desculpe, a página que você está procurando não existe.",
};

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center px-4 py-20">
      <div className="container max-w-2xl text-center">
        <FadeIn direction="up" distance={20}>
          {/* O "404" com a cor principal do colégio */}
          <h1 className="font-display text-9xl font-black text-[#004aad]/10 md:text-[12rem]">
            404
          </h1>

          <div className="-mt-12 space-y-6 md:-mt-20">
            <h2 className="font-display text-3xl font-black text-[#004aad] md:text-5xl">
              Ops! Esse caminho não <br />
              <span className="text-[#ff3b30]">está no mapa.</span>
            </h2>

            <p className="mx-auto max-w-md text-lg text-gray-600">
              Parece que a página que você procura não existe ou foi movida. Não
              se preocupe, o aprendizado continua por outros caminhos!
            </p>

            <div className="flex flex-col items-center justify-center gap-4 pt-6 sm:flex-row">
              {/* Botão Principal - Voltando para Home */}
              <Link
                href="/"
                className="flex items-center gap-2 rounded-full bg-[#ff3b30] px-8 py-4 text-lg font-bold text-white transition-all hover:bg-[#e0352b] hover:shadow-lg active:scale-95"
              >
                <Home size={20} />
                Voltar ao Início
              </Link>

              {/* Botão Secundário - Página de Proposta */}
              <Link
                href="/proposta"
                className="flex items-center gap-2 rounded-full border-2 border-[#004aad] px-8 py-4 text-lg font-bold text-[#004aad] transition-all hover:bg-[#004aad] hover:text-white active:scale-95"
              >
                Conhecer a Escola
              </Link>
            </div>
            <div className="mt-12 border-t border-gray-100 pt-8">
              <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#004aad]">
                Talvez você estivesse procurando:
              </p>
              <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2 font-medium text-gray-500">
                <li>
                  <Link
                    href="/proposta"
                    className="transition-colors hover:text-[#ff3b30]"
                  >
                    Proposta Pedagógica
                  </Link>
                </li>
                <li>
                  <Link
                    href="/estrutura"
                    className="transition-colors hover:text-[#ff3b30]"
                  >
                    Nossa Infraestrutura
                  </Link>
                </li>
                <li>
                  <Link
                    href="/diferenciais"
                    className="transition-colors hover:text-[#ff3b30]"
                  >
                    Diferenciais
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="transition-colors hover:text-[#ff3b30]"
                  >
                    Dúvidas Frequentes
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </FadeIn>

        {/* Detalhe visual lúdico (opcional) */}
        <FadeIn delay={0.4} direction="up">
          <div className="mt-16 flex justify-center gap-8 opacity-20">
            <Search size={40} className="text-[#004aad]" />
            <div className="h-10 w-px bg-gray-300" />
            <div className="flex items-center gap-2 font-display font-bold text-[#004aad]">
              COLÉGIO JOÃO PEDRO
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
```

## File: src/app/proposta/PropostaContent.tsx

```typescript
// app/proposta/page.tsx
"use client";

import { Footer } from "@/components/layout/footer";
import FadeIn from "@/components/ui/FadeIn";
import SplitText from "@/components/ui/SplitText";
import { BookOpen, Users, Lightbulb, Target, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { CounterItem } from "@/components/ui/CounterItem";
import { FlaskConical, Cpu, Globe, Sprout } from "lucide-react";
import { CLIENT_CONFIG } from "@/constants/config";
import FinalCTA from "@/components/sections/FinalCTA";

export default function PropostaPage() {
  const pilares = [
    {
      icon: <Users className="text-[#ff3b30]" size={32} />,
      title: "Sociointeracionismo",
      desc: "Acreditamos que o conhecimento é construído através da interação social e da troca de experiências entre alunos e educadores.",
    },
    {
      icon: <Lightbulb className="text-[#ff3b30]" size={32} />,
      title: "Pensamento Crítico",
      desc: "Incentivamos o questionamento e a análise profunda, preparando cidadãos conscientes e capazes de transformar a realidade.",
    },
    {
      icon: <Target className="text-[#ff3b30]" size={32} />,
      title: "Autonomia",
      desc: "Desenvolvemos a capacidade do aluno de gerir seu próprio aprendizado, promovendo a responsabilidade e o protagonismo.",
    },
    {
      icon: <BookOpen className="text-[#ff3b30]" size={32} />,
      title: "Excelência Acadêmica",
      desc: "Base sólida de conhecimentos aliados às competências do século XXI, garantindo o sucesso em exames e na vida profissional.",
    },
  ];

  return (
    <main className="min-h-screen bg-transparent pb-20 pt-32">
      <div className="container mx-auto px-4">
        {/* HERO DA PÁGINA */}
        <section className="mb-20 text-center">
          <FadeIn direction="up">
            <span className="mb-4 inline-block rounded-full bg-[#004aad]/10 px-4 py-1 text-sm font-bold uppercase tracking-widest text-[#004aad]">
              Nossa Essência
            </span>
          </FadeIn>
          <h1 className="mb-6 font-display text-5xl font-black text-[#004aad] md:text-7xl">
            <SplitText text="PROPOSTA" />{" "}
            <span className="whitespace-nowrap">
              <SplitText text="PEDAGÓGICA" />
            </span>
          </h1>
          <FadeIn delay={0.5}>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600">
              No Colégio João Pedro, o ensino vai além da sala de aula.
              Construímos pontes entre o saber teórico e a prática social,
              focando no desenvolvimento integral do ser humano.
            </p>
          </FadeIn>
        </section>

        {/* OS PILARES */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {pilares.map((pilar, index) => (
            <FadeIn key={index} delay={0.2 * index} direction="up">
              <div className="h-full rounded-[2rem] border border-gray-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#ff3b30]/5">
                  {pilar.icon}
                </div>
                <h3 className="mb-4 font-display text-xl font-bold text-[#004aad]">
                  {pilar.title}
                </h3>
                <p className="leading-relaxed text-gray-600">{pilar.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* SEÇÃO DE CITAÇÃO */}
        <FadeIn direction="up" delay={0.8}>
          <div className="mt-20 rounded-[3rem] bg-[#004aad] p-12 text-center text-white shadow-2xl">
            <blockquote className="mx-auto max-w-3xl text-2xl font-medium italic md:text-3xl">
              &ldquo;A educação não transforma o mundo. A educação muda as
              pessoas. As pessoas transformam o mundo.&rdquo;
            </blockquote>
            <cite className="mt-6 block font-bold uppercase not-italic tracking-widest text-[#ff3b30]">
              — Paulo Freire
            </cite>
          </div>
        </FadeIn>

        <section className="mt-20 border-t border-gray-100 pt-20">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <FadeIn direction="right">
              <h2 className="mb-6 text-4xl font-black text-[#004aad]">
                Parceria que <br />{" "}
                <span className="text-[#ff3b30]">Gera Resultados</span>
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-gray-600">
                Acreditamos que a educação de excelência só acontece quando
                escola e família caminham juntas. Por isso, mantemos canais de
                comunicação transparentes e uma gestão acolhedora.
              </p>
              <ul className="space-y-4">
                {[
                  "Atendimento personalizado",
                  "App exclusivo para pais",
                  "Reuniões trimestrais",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 font-bold text-[#004aad]"
                  >
                    <div className="h-2 w-2 rounded-full bg-[#ff3b30]" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn direction="left" delay={0.3}>
              <div className="relative aspect-video overflow-hidden rounded-[3rem] border-2 border-[#004aad]/20 shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1655337690446-e10ecbe6541c?q=80&w=1165&auto=format&fit=crop"
                  alt="Reunião de Pais e Professores no Colégio João Pedro"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* SEÇÃO DE NÚMEROS (CONTADORES) */}
        <section className="mb-20 rounded-[2.5rem] border-y border-gray-100 bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <CounterItem value={25} suffix="+" label="Anos de História" />
              <CounterItem value={100} suffix="%" label="Aprovação" />
              <CounterItem value={500} suffix="+" label="Alunos Formados" />
              <CounterItem value={40} suffix="+" label="Educadores" />
            </div>
          </div>
        </section>

        {/* SEÇÃO: METODOLOGIA POR SEGMENTO */}
        <section className="mb-20">
          <FadeIn direction="up">
            <h2 className="mb-12 text-center text-4xl font-black text-[#004aad]">
              Excelência em cada <span className="text-[#ff3b30]">Etapa</span>
            </h2>
          </FadeIn>

          <div className="grid gap-8 md:grid-cols-3">
            {/* EDUCAÇÃO INFANTIL */}
            <FadeIn delay={0.2}>
              <div className="group rounded-[2.5rem] border border-gray-50 bg-white p-10 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl">
                <h3 className="mb-4 font-display text-2xl font-black text-[#ff3b30]">
                  Educação Infantil
                </h3>
                <p className="mb-6 text-gray-600">
                  Foco no lúdico, na socialização e no desenvolvimento motor
                  através da descoberta guiada.
                </p>
                <ul className="space-y-3 text-sm font-bold text-[#004aad]">
                  <li>• Horta Pedagógica</li>
                  <li>• Atividades Sensoriais</li>
                  <li>• Inglês Inicial</li>
                </ul>
              </div>
            </FadeIn>

            {/* ENSINO FUNDAMENTAL */}
            <FadeIn delay={0.4}>
              <div className="group rounded-[2.5rem] bg-[#004aad] p-10 text-white shadow-xl">
                <h3 className="mb-4 font-display text-2xl font-black text-[#ff3b30]">
                  Ensino Fundamental
                </h3>
                <p className="mb-6 text-blue-100">
                  Consolidação da alfabetização, raciocínio lógico e construção
                  da autonomia acadêmica.
                </p>
                <ul className="space-y-3 text-sm font-bold text-white">
                  <li>• Iniciação Científica</li>
                  <li>• Robótica e Maker</li>
                  <li>• Programa Socioemocional</li>
                </ul>
              </div>
            </FadeIn>

            {/* ENSINO MÉDIO */}
            <FadeIn delay={0.6}>
              <div className="group rounded-[2.5rem] border border-gray-50 bg-white p-10 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl">
                <h3 className="mb-4 font-display text-2xl font-black text-[#ff3b30]">
                  Ensino Médio
                </h3>
                <p className="mb-6 text-gray-600">
                  Excelência acadêmica com foco em resultados, projeto de vida e
                  escolha profissional.
                </p>
                <ul className="space-y-3 text-sm font-bold text-[#004aad]">
                  <li>• Simulados Semanais</li>
                  <li>• Orientação Vocacional</li>
                  <li>• Aprofundamento ENEM</li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* SEÇÃO: DIFERENCIAIS TÉCNICOS */}
        <section className="bg-transparent py-20">
          <div className="container mx-auto px-4">
            <FadeIn direction="up">
              <div className="mb-16 text-center">
                <h2 className="text-4xl font-black text-[#004aad] md:text-5xl">
                  Tecnologia a Serviço do{" "}
                  <span className="text-[#ff3b30]">Saber</span>
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                  Nossa infraestrutura foi planejada para que o aluno não apenas
                  receba o conhecimento, mas o construa através da
                  experimentação técnica.
                </p>
              </div>
            </FadeIn>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* Laboratório de Ciências */}
              <FadeIn delay={0.1}>
                <div className="flex flex-col items-center rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md">
                  <div className="mb-6 rounded-2xl bg-[#ff3b30]/10 p-4 text-[#ff3b30]">
                    <FlaskConical size={40} />
                  </div>
                  <h3 className="mb-3 font-display text-xl font-bold text-[#004aad]">
                    Investigação Científica
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    Laboratórios modernos onde a biologia e a química saem dos
                    livros para a prática experimental guiada.
                  </p>
                </div>
              </FadeIn>

              {/* Espaço Maker */}
              <FadeIn delay={0.2}>
                <div className="flex flex-col items-center rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md">
                  <div className="mb-6 rounded-2xl bg-[#ff3b30]/10 p-4 text-[#ff3b30]">
                    <Cpu size={40} />
                  </div>
                  <h3 className="mb-3 font-display text-xl font-bold text-[#004aad]">
                    Espaço Maker & Robótica
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    Ambiente dedicado à prototipagem e ao raciocínio lógico,
                    integrando tecnologia e criatividade.
                  </p>
                </div>
              </FadeIn>

              {/* Programa Bilíngue */}
              <FadeIn delay={0.3}>
                <div className="flex flex-col items-center rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md">
                  <div className="mb-6 rounded-2xl bg-[#ff3b30]/10 p-4 text-[#ff3b30]">
                    <Globe size={40} />
                  </div>
                  <h3 className="mb-3 font-display text-xl font-bold text-[#004aad]">
                    Imersão Bilíngue
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    Ensino de língua inglesa integrado ao currículo, preparando
                    o aluno para um contexto globalizado.
                  </p>
                </div>
              </FadeIn>

              {/* Horta Pedagógica */}
              <FadeIn delay={0.4}>
                <div className="flex flex-col items-center rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md">
                  <div className="mb-6 rounded-2xl bg-[#ff3b30]/10 p-4 text-[#ff3b30]">
                    <Sprout size={40} />
                  </div>
                  <h3 className="mb-3 font-display text-xl font-bold text-[#004aad]">
                    Educação Ambiental
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    Horta pedagógica que estimula o contato com a natureza e o
                    aprendizado sobre sustentabilidade.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </div>

      <FinalCTA />

      {/* VOLTAR */}
      <div className="mt-16 text-center">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 font-bold text-[#004aad] transition-colors hover:text-[#ff3b30]"
        >
          <ArrowLeft
            size={20}
            className="transition-transform group-hover:-translate-x-2"
          />
          Voltar para a página inicial
        </Link>
      </div>
    </main>
  );
}
```

## File: src/app/thanks/ThanksContent.tsx

```typescript
// app/thanks/page.tsx
"use client";

import Link from "next/link";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import SplitText from "@/components/ui/SplitText";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Obrigado!",
};

export function ThanksContent() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-transparent px-4 text-center">
      {/* Ícone de Sucesso Animado */}
      <FadeIn direction="up" distance={30}>
        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-100 text-[#25d366] shadow-inner">
          <CheckCircle2 size={56} />
        </div>
      </FadeIn>

      <h1 className="mb-4 text-4xl font-black text-[#004aad] md:text-6xl">
        <SplitText text="MUITO OBRIGADO!" />
      </h1>

      <FadeIn delay={0.6}>
        <p className="mx-auto mb-10 max-w-md text-lg text-gray-600">
          A mensagem foi enviada com sucesso. Em breve, nossa equipe pedagógica
          entrará em contato para agendar sua visita ao{" "}
          <strong>Colégio João Pedro</strong>.
        </p>
      </FadeIn>

      <FadeIn delay={1.0}>
        <Link
          href="/"
          className="group flex items-center gap-2 rounded-full bg-[#ff3b30] px-8 py-4 font-bold text-white transition-all hover:bg-[#d92b22] hover:shadow-xl active:scale-95"
        >
          <ArrowLeft
            size={20}
            className="transition-transform group-hover:-translate-x-1"
          />
          Voltar para o Início
        </Link>
      </FadeIn>

      {/* Detalhe decorativo sutil no fundo */}
      <div className="absolute -z-10 h-[400px] w-[400px] rounded-full bg-[#004aad]/5 blur-3xl"></div>
    </main>
  );
}
```

## File: src/components/layout/footer.tsx

```typescript
"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export function Footer() {
  const currentYear = new Date().getFullYear();

  // Mapeamento dos links institucionais para as rotas reais
  const institucionais = [
    { name: "Sobre Nós", href: "/#sobre" },
    { name: "Proposta Pedagógica", href: "/proposta" },
    { name: "Estrutura", href: "/estrutura" },
    { name: "Diferenciais", href: "/diferenciais" },
    { name: "Perguntas Frequentes (FAQ)", href: "/faq" },
  ];

  return (
    <footer className="overflow-hidden bg-[#004aad] pt-16 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Coluna 1: Logo e Social */}
          <FadeIn direction="up" delay={0.1} distance={30}>
            <div className="space-y-4">
              <h3 className="font-display text-3xl font-bold uppercase tracking-wide">
                Colégio <br /> João Pedro
              </h3>
              <p className="text-blue-100/80">
                Criando um mundo de possibilidades através de um ensino
                humanizado e sociointeracionista.
              </p>
              <div className="flex gap-4 pt-2">
                {[
                  { Icon: Instagram, href: "#" },
                  { Icon: Facebook, href: "#" },
                  { Icon: Linkedin, href: "#" },
                ].map((social, i) => (
                  <Link
                    key={i}
                    href={social.href}
                    className="rounded-full bg-white/10 p-2 transition-colors hover:bg-[#ff3b30] hover:text-white"
                  >
                    <social.Icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Coluna 2: Institucional - Links Atualizados */}
          <FadeIn direction="up" delay={0.2} distance={30}>
            <div>
              <h4 className="mb-6 text-lg font-bold text-[#ff3b30]">
                Institucional
              </h4>
              <ul className="space-y-3 text-sm text-blue-100/80">
                {institucionais.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="transition-colors hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Coluna 3: Segmentos */}
          <FadeIn direction="up" delay={0.3} distance={30}>
            <div>
              <h4 className="mb-6 text-lg font-bold text-[#ff3b30]">
                Segmentos
              </h4>
              <ul className="space-y-3 text-sm text-blue-100/80">
                {[
                  "Educação Infantil",
                  "Fundamental I",
                  "Fundamental II",
                  "Ensino Médio",
                  "Período Integral",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="/proposta"
                      className="transition-colors hover:text-white"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Coluna 4: Contato */}
          <FadeIn direction="up" delay={0.4} distance={30}>
            <div>
              <h4 className="mb-6 text-lg font-bold text-[#ff3b30]">Contato</h4>
              <ul className="space-y-4 text-sm text-blue-100/80">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#ff3b30]" />
                  <span>
                    Rua das Laranjeiras, 123
                    <br />
                    Rio de Janeiro - RJ
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-[#ff3b30]" />
                  <span>(21) 2222-3333</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-[#ff3b30]" />
                  <span>contato@colegiojoaopedro.com.br</span>
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* Barra de Direitos Autorais */}
        <FadeIn direction="up" delay={0.6} distance={20}>
          <div className="mt-16 border-t border-white/10 py-8 text-center text-sm text-blue-100/60">
            <p>
              © {currentYear} Colégio João Pedro. Todos os direitos reservados.
            </p>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
```

## File: src/components/shared/enrollment/index.ts

```typescript
export * from "./lead-form";
export * from "./schema";
export * from "./use-lead-form";
```

## File: src/components/shared/enrollment/schema.ts

```typescript
import * as z from "zod";

export const contactFormSchema = z.object({
  parentName: z.string().min(2, "O nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().min(10, "Telefone inválido"),
  studentName: z.string().min(2, "O nome do aluno é obrigatório"),
  grade: z.string().min(1, "Selecione uma série"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
```

## File: src/components/shared/enrollment/use-lead-form.ts

```typescript
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "./schema";

export function useLeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Aqui você vai trocar pelo seu fetch para /api/enroll amanhã!
      console.log("Dados enviados para o n8n:", data);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      router.push("/thanks");
    } catch (error) {
      console.error("Erro no envio:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    register: form.register,
    handleSubmit: form.handleSubmit(onSubmit),
    errors: form.formState.errors,
    isSubmitting,
  };
}
```

## File: src/components/ui/BackToTop.tsx

```typescript
"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOverFooter, setIsOverFooter] = useState(false);

  useEffect(() => {
    // 1. Controle de Visibilidade por Scroll
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // 2. Observer para detectar o Footer (Troca de cor)
    const footer = document.querySelector("footer");
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOverFooter(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (footer) observer.observe(footer);
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      if (footer) observer.unobserve(footer);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className={`fixed bottom-[112px] right-6 z-[100] flex h-16 w-16 items-center justify-center rounded-full border border-white/20 shadow-xl backdrop-blur-md transition-all hover:scale-110 active:scale-95 ${
            isOverFooter
              ? "bg-[#004aad]/40 text-white"
              : "bg-[#004aad]/20 text-[#004aad]"
          }`}
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={32} strokeWidth={3} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
```

## File: src/components/ui/CounterItem.tsx

```typescript
"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface CounterProps {
  value: number;
  suffix?: string;
  label: string;
}

export function CounterItem({ value, suffix = "", label }: CounterProps) {
  const numberRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = numberRef.current;
    if (!node) return;

    gsap.fromTo(
      node,
      { innerText: 0 },
      {
        innerText: value,
        duration: 2,
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: node,
          start: "top 90%", // Inicia quando o número entra na visão
        },
      }
    );
  }, [value]);

  return (
    <div className="text-center">
      <div className="text-4xl font-black text-[#ff3b30] md:text-6xl">
        <span ref={numberRef}>0</span>
        {suffix}
      </div>
      <p className="mt-2 text-sm font-bold uppercase tracking-wider text-[#004aad] md:text-base">
        {label}
      </p>
    </div>
  );
}
```

## File: src/components/ui/FadeIn.tsx

```typescript
"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface FadeInProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string; // ADICIONAMOS ISSO AQUI
}

export default function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 1,
  distance = 50,
  className = "", // E ISSO AQUI
}: FadeInProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const offsets = {
        up: { y: distance, x: 0 },
        down: { y: -distance, x: 0 },
        left: { x: distance, y: 0 },
        right: { x: -distance, y: 0 },
      };

      gsap.fromTo(
        elementRef.current,
        { opacity: 0, ...offsets[direction] },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: duration,
          delay: delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: elementRef }
  );

  return (
    /* AGORA O CLASSNAME É APLICADO À DIV */
    <div ref={elementRef} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}
```

## File: src/components/ui/FlowingMenu.tsx

```typescript
"use client";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

interface MenuItemData {
  link: string;
  text: string;
  image: string;
}

interface FlowingMenuProps {
  items?: MenuItemData[];
  onItemClick?: () => void; // Adicionado para fechar o menu no clique
  speed?: number;
  textColor?: string;
  bgColor?: string;
  marqueeBgColor?: string;
  marqueeTextColor?: string;
  borderColor?: string;
}

interface MenuItemProps extends MenuItemData {
  speed: number;
  textColor: string;
  marqueeBgColor: string;
  marqueeTextColor: string;
  borderColor: string;
  isFirst: boolean;
  onItemClick?: () => void; // Repassado para o item individual
}

const FlowingMenu: React.FC<FlowingMenuProps> = ({
  items = [],
  onItemClick,
  speed = 15,
  textColor = "#fff",
  bgColor = "#060010",
  marqueeBgColor = "#fff",
  marqueeTextColor = "#060010",
  borderColor = "#fff",
}) => {
  return (
    <div
      className="h-full w-full overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      <nav className="m-0 flex h-full flex-col p-0">
        {items.map((item, idx) => (
          <MenuItem
            key={idx}
            {...item}
            onItemClick={onItemClick} // Passando a função para cada item
            speed={speed}
            textColor={textColor}
            marqueeBgColor={marqueeBgColor}
            marqueeTextColor={marqueeTextColor}
            borderColor={borderColor}
            isFirst={idx === 0}
          />
        ))}
      </nav>
    </div>
  );
};

const MenuItem: React.FC<MenuItemProps> = ({
  link,
  text,
  image,
  speed,
  textColor,
  marqueeBgColor,
  marqueeTextColor,
  borderColor,
  isFirst,
  onItemClick,
}) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeInnerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);
  const [repetitions, setRepetitions] = useState(4);

  const animationDefaults = { duration: 0.6, ease: "expo" };

  const findClosestEdge = (
    mouseX: number,
    mouseY: number,
    width: number,
    height: number
  ): "top" | "bottom" => {
    const topEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY, 2);
    const bottomEdgeDist =
      Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY - height, 2);
    return topEdgeDist < bottomEdgeDist ? "top" : "bottom";
  };

  useEffect(() => {
    const calculateRepetitions = () => {
      if (!marqueeInnerRef.current) return;
      const marqueeContent = marqueeInnerRef.current.querySelector(
        ".marquee-part"
      ) as HTMLElement;
      if (!marqueeContent) return;
      const contentWidth = marqueeContent.offsetWidth;
      const viewportWidth = window.innerWidth;
      const needed = Math.ceil(viewportWidth / contentWidth) + 2;
      setRepetitions(Math.max(4, needed));
    };

    calculateRepetitions();
    window.addEventListener("resize", calculateRepetitions);
    return () => window.removeEventListener("resize", calculateRepetitions);
  }, [text, image]);

  useEffect(() => {
    const setupMarquee = () => {
      if (!marqueeInnerRef.current) return;
      const marqueeContent = marqueeInnerRef.current.querySelector(
        ".marquee-part"
      ) as HTMLElement;
      if (!marqueeContent) return;
      const contentWidth = marqueeContent.offsetWidth;
      if (contentWidth === 0) return;

      if (animationRef.current) {
        animationRef.current.kill();
      }

      animationRef.current = gsap.to(marqueeInnerRef.current, {
        x: -contentWidth,
        duration: speed,
        ease: "none",
        repeat: -1,
      });
    };

    const timer = setTimeout(setupMarquee, 50);
    return () => {
      clearTimeout(timer);
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [text, image, repetitions, speed]);

  const handleMouseEnter = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
      return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );

    gsap
      .timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" }, 0)
      .set(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" }, 0)
      .to([marqueeRef.current, marqueeInnerRef.current], { y: "0%" }, 0);
  };

  const handleMouseLeave = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current)
      return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(
      ev.clientX - rect.left,
      ev.clientY - rect.top,
      rect.width,
      rect.height
    );

    gsap
      .timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" }, 0)
      .to(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" }, 0);
  };

  return (
    <div
      className="relative flex-1 overflow-hidden text-center"
      ref={itemRef}
      style={{ borderTop: isFirst ? "none" : `1px solid ${borderColor}` }}
    >
      <a
        className="relative flex h-full cursor-pointer items-center justify-center text-[4vh] font-semibold uppercase no-underline"
        href={link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onItemClick} // Dispara o fechamento do menu ao clicar
        style={{ color: textColor }}
      >
        {text}
      </a>
      <div
        className="pointer-events-none absolute left-0 top-0 h-full w-full translate-y-[101%] overflow-hidden"
        ref={marqueeRef}
        style={{ backgroundColor: marqueeBgColor }}
      >
        <div className="flex h-full w-fit" ref={marqueeInnerRef}>
          {[...Array(repetitions)].map((_, idx) => (
            <div
              className="marquee-part flex flex-shrink-0 items-center"
              key={idx}
              style={{ color: marqueeTextColor }}
            >
              <span className="whitespace-nowrap px-[1vw] text-[4vh] font-normal uppercase leading-[1]">
                {text}
              </span>
              <div
                className="mx-[2vw] my-[2em] h-[7vh] w-[200px] rounded-[50px] bg-cover bg-center py-[1em]"
                style={{ backgroundImage: `url(${image})` }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlowingMenu;
```

## File: src/components/ui/PaperSection.tsx

```typescript
import { ReactNode } from "react";

export function PaperSection({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`relative overflow-hidden bg-white py-24 clip-paper paper-shadow ${className}`}
    >
      {/* Camada das Linhas */}
      <div
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          backgroundImage: `linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #ff3b30 1.5px, transparent 1.5px)`,
          backgroundSize: "100% 2.8rem, 100% 100%",
          backgroundPosition: "0 3.5rem, 5rem 0",
          opacity: 0.12,
        }}
      />
      <div className="container relative z-10 mx-auto px-4">{children}</div>
    </section>
  );
}
```

## File: src/components/ui/ScrollProgress.tsx

```typescript
"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ScrollProgress() {
  const progressBarRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(progressBarRef.current, {
        scaleX: 1, // Começa em 0 e vai até 1 (100%)
        ease: "none",
        scrollTrigger: {
          trigger: "body", // Monitora o corpo da página
          start: "top top", // Começa no topo
          end: "bottom bottom", // Termina no final da página
          scrub: 0.3, // Acompanha o movimento do mouse com um leve suavizado
        },
      });
    },
    { scope: progressBarRef }
  );

  return (
    <div className="pointer-events-none fixed left-0 right-0 top-0 z-[60] h-1 origin-left">
      <div
        ref={progressBarRef}
        className="h-full w-full scale-x-0 bg-gradient-to-r from-[#ff3b30] via-[#004aad] to-[#004aad] shadow-[0_0_8px_rgba(0,74,173,0.4)]"
      />
    </div>
  );
}
```

## File: src/components/ui/SplitText.tsx

```typescript
"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function SplitText({
  text,
  className = "",
  delay = 0,
}: SplitTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const words = text.split(" ");

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const wordSpans = containerRef.current.querySelectorAll(".word");

      gsap.fromTo(
        wordSpans,
        {
          opacity: 0,
          y: 24,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.08,
          delay: delay / 1000,
          ease: "power3.out",
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={`inline-block ${className}`}>
      {words.map((word, index) => (
        <span
          key={index}
          className="word mr-2 inline-block whitespace-nowrap"
          style={{ opacity: 0 }}
        >
          {word}
        </span>
      ))}
    </div>
  );
}
```

## File: src/lib/utils.ts

```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

## File: stories/assets/accessibility.svg

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48"><title>Accessibility</title><circle cx="24.334" cy="24" r="24" fill="#A849FF" fill-opacity=".3"/><path fill="#A470D5" fill-rule="evenodd" d="M27.8609 11.585C27.8609 9.59506 26.2497 7.99023 24.2519 7.99023C22.254 7.99023 20.6429 9.65925 20.6429 11.585C20.6429 13.575 22.254 15.1799 24.2519 15.1799C26.2497 15.1799 27.8609 13.575 27.8609 11.585ZM21.8922 22.6473C21.8467 23.9096 21.7901 25.4788 21.5897 26.2771C20.9853 29.0462 17.7348 36.3314 17.3325 37.2275C17.1891 37.4923 17.1077 37.7955 17.1077 38.1178C17.1077 39.1519 17.946 39.9902 18.9802 39.9902C19.6587 39.9902 20.253 39.6293 20.5814 39.0889L20.6429 38.9874L24.2841 31.22C24.2841 31.22 27.5529 37.9214 27.9238 38.6591C28.2948 39.3967 28.8709 39.9902 29.7168 39.9902C30.751 39.9902 31.5893 39.1519 31.5893 38.1178C31.5893 37.7951 31.3639 37.2265 31.3639 37.2265C30.9581 36.3258 27.698 29.0452 27.0938 26.2771C26.8975 25.4948 26.847 23.9722 26.8056 22.7236C26.7927 22.333 26.7806 21.9693 26.7653 21.6634C26.7008 21.214 27.0231 20.8289 27.4097 20.7005L35.3366 18.3253C36.3033 18.0685 36.8834 16.9773 36.6256 16.0144C36.3678 15.0515 35.2722 14.4737 34.3055 14.7305C34.3055 14.7305 26.8619 17.1057 24.2841 17.1057C21.7062 17.1057 14.456 14.7947 14.456 14.7947C13.4893 14.5379 12.3937 14.9873 12.0715 15.9502C11.7493 16.9131 12.3293 18.0044 13.3604 18.3253L21.2873 20.7005C21.674 20.8289 21.9318 21.214 21.9318 21.6634C21.9174 21.9493 21.9053 22.2857 21.8922 22.6473Z" clip-rule="evenodd"/></svg>
```

## File: stories/assets/discord.svg

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" fill="none" viewBox="0 0 33 32"><g clip-path="url(#clip0_10031_177575)"><mask id="mask0_10031_177575" style="mask-type:luminance" width="33" height="25" x="0" y="4" maskUnits="userSpaceOnUse"><path fill="#fff" d="M32.5034 4.00195H0.503906V28.7758H32.5034V4.00195Z"/></mask><g mask="url(#mask0_10031_177575)"><path fill="#5865F2" d="M27.5928 6.20817C25.5533 5.27289 23.3662 4.58382 21.0794 4.18916C21.0378 4.18154 20.9962 4.20057 20.9747 4.23864C20.6935 4.73863 20.3819 5.3909 20.1637 5.90358C17.7042 5.53558 15.2573 5.53558 12.8481 5.90358C12.6299 5.37951 12.307 4.73863 12.0245 4.23864C12.003 4.20184 11.9614 4.18281 11.9198 4.18916C9.63431 4.58255 7.44721 5.27163 5.40641 6.20817C5.38874 6.21578 5.3736 6.22848 5.36355 6.24497C1.21508 12.439 0.078646 18.4809 0.636144 24.4478C0.638667 24.477 0.655064 24.5049 0.677768 24.5227C3.41481 26.5315 6.06609 27.7511 8.66815 28.5594C8.70979 28.5721 8.75392 28.5569 8.78042 28.5226C9.39594 27.6826 9.94461 26.7968 10.4151 25.8653C10.4428 25.8107 10.4163 25.746 10.3596 25.7244C9.48927 25.3945 8.66058 24.9922 7.86343 24.5354C7.80038 24.4986 7.79533 24.4084 7.85333 24.3653C8.02108 24.2397 8.18888 24.109 8.34906 23.977C8.37804 23.9529 8.41842 23.9478 8.45249 23.963C13.6894 26.3526 19.359 26.3526 24.5341 23.963C24.5682 23.9465 24.6086 23.9516 24.6388 23.9757C24.799 24.1077 24.9668 24.2397 25.1358 24.3653C25.1938 24.4084 25.19 24.4986 25.127 24.5354C24.3298 25.0011 23.5011 25.3945 22.6296 25.7232C22.5728 25.7447 22.5476 25.8107 22.5754 25.8653C23.0559 26.7955 23.6046 27.6812 24.2087 28.5213C24.234 28.5569 24.2794 28.5721 24.321 28.5594C26.9357 27.7511 29.5869 26.5315 32.324 24.5227C32.348 24.5049 32.3631 24.4783 32.3656 24.4491C33.0328 17.5506 31.2481 11.5584 27.6344 6.24623C27.6256 6.22848 27.6105 6.21578 27.5928 6.20817ZM11.1971 20.8146C9.62043 20.8146 8.32129 19.3679 8.32129 17.5913C8.32129 15.8146 9.59523 14.368 11.1971 14.368C12.8115 14.368 14.0981 15.8273 14.0729 17.5913C14.0729 19.3679 12.7989 20.8146 11.1971 20.8146ZM21.8299 20.8146C20.2533 20.8146 18.9541 19.3679 18.9541 17.5913C18.9541 15.8146 20.228 14.368 21.8299 14.368C23.4444 14.368 24.7309 15.8273 24.7057 17.5913C24.7057 19.3679 23.4444 20.8146 21.8299 20.8146Z"/></g></g><defs><clipPath id="clip0_10031_177575"><rect width="32" height="32" fill="#fff" transform="translate(0.5)"/></clipPath></defs></svg>
```

## File: stories/assets/github.svg

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32"><path fill="#161614" d="M16.0001 0C7.16466 0 0 7.17472 0 16.0256C0 23.1061 4.58452 29.1131 10.9419 31.2322C11.7415 31.3805 12.0351 30.8845 12.0351 30.4613C12.0351 30.0791 12.0202 28.8167 12.0133 27.4776C7.56209 28.447 6.62283 25.5868 6.62283 25.5868C5.89499 23.7345 4.8463 23.2419 4.8463 23.2419C3.39461 22.2473 4.95573 22.2678 4.95573 22.2678C6.56242 22.3808 7.40842 23.9192 7.40842 23.9192C8.83547 26.3691 11.1514 25.6609 12.0645 25.2514C12.2081 24.2156 12.6227 23.5087 13.0803 23.1085C9.52648 22.7032 5.7906 21.3291 5.7906 15.1886C5.7906 13.4389 6.41563 12.0094 7.43916 10.8871C7.27303 10.4834 6.72537 8.85349 7.59415 6.64609C7.59415 6.64609 8.93774 6.21539 11.9953 8.28877C13.2716 7.9337 14.6404 7.75563 16.0001 7.74953C17.3599 7.75563 18.7297 7.9337 20.0084 8.28877C23.0623 6.21539 24.404 6.64609 24.404 6.64609C25.2749 8.85349 24.727 10.4834 24.5608 10.8871C25.5868 12.0094 26.2075 13.4389 26.2075 15.1886C26.2075 21.3437 22.4645 22.699 18.9017 23.0957C19.4756 23.593 19.9869 24.5683 19.9869 26.0634C19.9869 28.2077 19.9684 29.9334 19.9684 30.4613C19.9684 30.8877 20.2564 31.3874 21.0674 31.2301C27.4213 29.1086 32 23.1037 32 16.0256C32 7.17472 24.8364 0 16.0001 0ZM5.99257 22.8288C5.95733 22.9084 5.83227 22.9322 5.71834 22.8776C5.60229 22.8253 5.53711 22.7168 5.57474 22.6369C5.60918 22.5549 5.7345 22.5321 5.85029 22.587C5.9666 22.6393 6.03284 22.7489 5.99257 22.8288ZM6.7796 23.5321C6.70329 23.603 6.55412 23.5701 6.45291 23.4581C6.34825 23.3464 6.32864 23.197 6.40601 23.125C6.4847 23.0542 6.62937 23.0874 6.73429 23.1991C6.83895 23.3121 6.85935 23.4605 6.7796 23.5321ZM7.31953 24.4321C7.2215 24.5003 7.0612 24.4363 6.96211 24.2938C6.86407 24.1513 6.86407 23.9804 6.96422 23.9119C7.06358 23.8435 7.2215 23.905 7.32191 24.0465C7.41968 24.1914 7.41968 24.3623 7.31953 24.4321ZM8.23267 25.4743C8.14497 25.5712 7.95818 25.5452 7.82146 25.413C7.68156 25.2838 7.64261 25.1004 7.73058 25.0035C7.81934 24.9064 8.00719 24.9337 8.14497 25.0648C8.28381 25.1938 8.3262 25.3785 8.23267 25.4743ZM9.41281 25.8262C9.37413 25.9517 9.19423 26.0088 9.013 25.9554C8.83203 25.9005 8.7136 25.7535 8.75016 25.6266C8.78778 25.5003 8.96848 25.4408 9.15104 25.4979C9.33174 25.5526 9.45044 25.6985 9.41281 25.8262ZM10.7559 25.9754C10.7604 26.1076 10.6067 26.2172 10.4165 26.2196C10.2252 26.2238 10.0704 26.1169 10.0683 25.9868C10.0683 25.8534 10.2185 25.7448 10.4098 25.7416C10.6001 25.7379 10.7559 25.8441 10.7559 25.9754ZM12.0753 25.9248C12.0981 26.0537 11.9658 26.1862 11.7769 26.2215C11.5912 26.2554 11.4192 26.1758 11.3957 26.0479C11.3726 25.9157 11.5072 25.7833 11.6927 25.7491C11.8819 25.7162 12.0512 25.7937 12.0753 25.9248Z"/></svg>
```

## File: stories/assets/tutorials.svg

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" fill="none" viewBox="0 0 33 32"><g clip-path="url(#clip0_10031_177597)"><path fill="#B7F0EF" fill-rule="evenodd" d="M17 7.87059C17 6.48214 17.9812 5.28722 19.3431 5.01709L29.5249 2.99755C31.3238 2.64076 33 4.01717 33 5.85105V22.1344C33 23.5229 32.0188 24.7178 30.6569 24.9879L20.4751 27.0074C18.6762 27.3642 17 25.9878 17 24.1539L17 7.87059Z" clip-rule="evenodd" opacity=".7"/><path fill="#87E6E5" fill-rule="evenodd" d="M1 5.85245C1 4.01857 2.67623 2.64215 4.47507 2.99895L14.6569 5.01848C16.0188 5.28861 17 6.48354 17 7.87198V24.1553C17 25.9892 15.3238 27.3656 13.5249 27.0088L3.34311 24.9893C1.98119 24.7192 1 23.5242 1 22.1358V5.85245Z" clip-rule="evenodd"/><path fill="#61C1FD" fill-rule="evenodd" d="M15.543 5.71289C15.543 5.71289 16.8157 5.96289 17.4002 6.57653C17.9847 7.19016 18.4521 9.03107 18.4521 9.03107C18.4521 9.03107 18.4521 25.1106 18.4521 26.9629C18.4521 28.8152 19.3775 31.4174 19.3775 31.4174L17.4002 28.8947L16.2575 31.4174C16.2575 31.4174 15.543 29.0765 15.543 27.122C15.543 25.1674 15.543 5.71289 15.543 5.71289Z" clip-rule="evenodd"/></g><defs><clipPath id="clip0_10031_177597"><rect width="32" height="32" fill="#fff" transform="translate(0.5)"/></clipPath></defs></svg>
```

## File: stories/assets/youtube.svg

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32"><path fill="#ED1D24" d="M31.3313 8.44657C30.9633 7.08998 29.8791 6.02172 28.5022 5.65916C26.0067 5.00026 16 5.00026 16 5.00026C16 5.00026 5.99333 5.00026 3.4978 5.65916C2.12102 6.02172 1.03665 7.08998 0.668678 8.44657C0 10.9053 0 16.0353 0 16.0353C0 16.0353 0 21.1652 0.668678 23.6242C1.03665 24.9806 2.12102 26.0489 3.4978 26.4116C5.99333 27.0703 16 27.0703 16 27.0703C16 27.0703 26.0067 27.0703 28.5022 26.4116C29.8791 26.0489 30.9633 24.9806 31.3313 23.6242C32 21.1652 32 16.0353 32 16.0353C32 16.0353 32 10.9053 31.3313 8.44657Z"/><path fill="#fff" d="M12.7266 20.6934L21.0902 16.036L12.7266 11.3781V20.6934Z"/></svg>
```

## File: stories/button.css

```css
.storybook-button {
  display: inline-block;
  cursor: pointer;
  border: 0;
  border-radius: 3em;
  font-weight: 700;
  line-height: 1;
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.storybook-button--primary {
  background-color: #555ab9;
  color: white;
}
.storybook-button--secondary {
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  background-color: transparent;
  color: #333;
}
.storybook-button--small {
  padding: 10px 16px;
  font-size: 12px;
}
.storybook-button--medium {
  padding: 11px 20px;
  font-size: 14px;
}
.storybook-button--large {
  padding: 12px 24px;
  font-size: 16px;
}
```

## File: stories/Button.stories.ts

```typescript
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { fn } from "storybook/test";

import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
  },
};
```

## File: stories/Button.tsx

```typescript
import './button.css';

export interface ButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      {...props}
    >
      {label}
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
    </button>
  );
};
```

## File: stories/Configure.mdx

```markdown
import { Meta } from "@storybook/addon-docs/blocks";
import Image from "next/image";

import Github from "./assets/github.svg";
import Discord from "./assets/discord.svg";
import Youtube from "./assets/youtube.svg";
import Tutorials from "./assets/tutorials.svg";
import Styling from "./assets/styling.png";
import Context from "./assets/context.png";
import Assets from "./assets/assets.png";
import Docs from "./assets/docs.png";
import Share from "./assets/share.png";
import FigmaPlugin from "./assets/figma-plugin.png";
import Testing from "./assets/testing.png";
import Accessibility from "./assets/accessibility.png";
import Theming from "./assets/theming.png";
import AddonLibrary from "./assets/addon-library.png";

export const RightArrow = () => <svg
viewBox="0 0 14 14"
width="8px"
height="14px"
style={{
      marginLeft: '4px',
      display: 'inline-block',
      shapeRendering: 'inherit',
      verticalAlign: 'middle',
      fill: 'currentColor',
      'path fill': 'currentColor'
    }}

>   <path d="m11.1 7.35-5.5 5.5a.5.5 0 0 1-.7-.7L10.04 7 4.9 1.85a.5.5 0 1 1 .7-.7l5.5 5.5c.2.2.2.5 0 .7Z" />
> </svg>

<Meta title="Configure your project" />

<div className="sb-container">
  <div className='sb-section-title'>
    # Configure your project

    Because Storybook works separately from your app, you'll need to configure it for your specific stack and setup. Below, explore guides for configuring Storybook with popular frameworks and tools. If you get stuck, learn how you can ask for help from our community.

  </div>
  <div className="sb-section">
    <div className="sb-section-item">
      <Image
        src={Styling}
        alt="A wall of logos representing different styling technologies"
        width={0}
        height={0}
        style={{ width: '100%', height: 'auto' }}
      />
      <h4 className="sb-section-item-heading">Add styling and CSS</h4>
      <p className="sb-section-item-paragraph">Like with web applications, there are many ways to include CSS within Storybook. Learn more about setting up styling within Storybook.</p>
      <a
        href="https://storybook.js.org/docs/configure/styling-and-css/?renderer=react&ref=configure"
        target="_blank"
      >Learn more<RightArrow /></a>
    </div>
    <div className="sb-section-item">
      <Image 
        width={0}
        height={0}
        style={{ width: '100%', height: 'auto' }}
        src={Context}
        alt="An abstraction representing the composition of data for a component"
      />
      <h4 className="sb-section-item-heading">Provide context and mocking</h4>
      <p className="sb-section-item-paragraph">Often when a story doesn't render, it's because your component is expecting a specific environment or context (like a theme provider) to be available.</p>
      <a
        href="https://storybook.js.org/docs/writing-stories/decorators/?renderer=react&ref=configure#context-for-mocking"
        target="_blank"
      >Learn more<RightArrow /></a>
    </div>
    <div className="sb-section-item">
      <Image 
        width={0}
        height={0}
        style={{ width: '100%', height: 'auto' }} 
        src={Assets} 
        alt="A representation of typography and image assets" 
      />
      <div>
        <h4 className="sb-section-item-heading">Load assets and resources</h4>
        <p className="sb-section-item-paragraph">To link static files (like fonts) to your projects and stories, use the
        `staticDirs` configuration option to specify folders to load when
        starting Storybook.</p>
        <a
          href="https://storybook.js.org/docs/configure/images-and-assets/?renderer=react&ref=configure"
          target="_blank"
        >Learn more<RightArrow /></a>
      </div>
    </div>
  </div>
</div>
<div className="sb-container">
  <div className='sb-section-title'>
    # Do more with Storybook

    Now that you know the basics, let's explore other parts of Storybook that will improve your experience. This list is just to get you started. You can customise Storybook in many ways to fit your needs.

  </div>

  <div className="sb-section">
    <div className="sb-features-grid">
      <div className="sb-grid-item">
        <Image 
          width={0}
          height={0}
          style={{ width: '100%', height: 'auto' }} 
          src={Docs} 
          alt="A screenshot showing the autodocs tag being set, pointing a docs page being generated" 
        />
        <h4 className="sb-section-item-heading">Autodocs</h4>
        <p className="sb-section-item-paragraph">Auto-generate living,
          interactive reference documentation from your components and stories.</p>
        <a
          href="https://storybook.js.org/docs/writing-docs/autodocs/?renderer=react&ref=configure"
          target="_blank"
        >Learn more<RightArrow /></a>
      </div>
      <div className="sb-grid-item">
        <Image 
          width={0}
          height={0}
          style={{ width: '100%', height: 'auto' }} 
          src={Share} 
          alt="A browser window showing a Storybook being published to a chromatic.com URL" 
        />
        <h4 className="sb-section-item-heading">Publish to Chromatic</h4>
        <p className="sb-section-item-paragraph">Publish your Storybook to review and collaborate with your entire team.</p>
        <a
          href="https://storybook.js.org/docs/sharing/publish-storybook/?renderer=react&ref=configure#publish-storybook-with-chromatic"
          target="_blank"
        >Learn more<RightArrow /></a>
      </div>
      <div className="sb-grid-item">
        <Image 
          width={0}
          height={0}
          style={{ width: '100%', height: 'auto' }} 
          src={FigmaPlugin} 
          alt="Windows showing the Storybook plugin in Figma" 
        />
        <h4 className="sb-section-item-heading">Figma Plugin</h4>
        <p className="sb-section-item-paragraph">Embed your stories into Figma to cross-reference the design and live
          implementation in one place.</p>
        <a
          href="https://storybook.js.org/docs/sharing/design-integrations/?renderer=react&ref=configure#embed-storybook-in-figma-with-the-plugin"
          target="_blank"
        >Learn more<RightArrow /></a>
      </div>
      <div className="sb-grid-item">
        <Image 
          width={0}
          height={0}
          style={{ width: '100%', height: 'auto' }} 
          src={Testing} 
          alt="Screenshot of tests passing and failing" 
        />
        <h4 className="sb-section-item-heading">Testing</h4>
        <p className="sb-section-item-paragraph">Use stories to test a component in all its variations, no matter how
          complex.</p>
        <a
          href="https://storybook.js.org/docs/writing-tests/?renderer=react&ref=configure"
          target="_blank"
        >Learn more<RightArrow /></a>
      </div>
      <div className="sb-grid-item">
        <Image 
          width={0}
          height={0}
          style={{ width: '100%', height: 'auto' }} 
          src={Accessibility} 
          alt="Screenshot of accessibility tests passing and failing" 
        />
        <h4 className="sb-section-item-heading">Accessibility</h4>
        <p className="sb-section-item-paragraph">Automatically test your components for a11y issues as you develop.</p>
        <a
          href="https://storybook.js.org/docs/writing-tests/accessibility-testing/?renderer=react&ref=configure"
          target="_blank"
        >Learn more<RightArrow /></a>
      </div>
      <div className="sb-grid-item">
        <Image 
          width={0}
          height={0}
          style={{ width: '100%', height: 'auto' }} 
          src={Theming} 
          alt="Screenshot of Storybook in light and dark mode" 
        />
        <h4 className="sb-section-item-heading">Theming</h4>
        <p className="sb-section-item-paragraph">Theme Storybook's UI to personalize it to your project.</p>
        <a
          href="https://storybook.js.org/docs/configure/theming/?renderer=react&ref=configure"
          target="_blank"
        >Learn more<RightArrow /></a>
      </div>
    </div>
  </div>
</div>
<div className='sb-addon'>
  <div className='sb-addon-text'>
    <h4>Addons</h4>
    <p className="sb-section-item-paragraph">Integrate your tools with Storybook to connect workflows.</p>
    <a
        href="https://storybook.js.org/addons/?ref=configure"
        target="_blank"
      >Discover all addons<RightArrow /></a>
  </div>
  <div className='sb-addon-img'>
    <Image 
      width={650}
      height={347}
      src={AddonLibrary} 
      alt="Integrate your tools with Storybook to connect workflows." 
    />
  </div>
</div>

<div className="sb-section sb-socials">
    <div className="sb-section-item">
      <Image 
        width={32}
        height={32}
        layout="fixed"
        src={Github} 
        alt="Github logo" 
        className="sb-explore-image"
      />
      Join our contributors building the future of UI development.

      <a
        href="https://github.com/storybookjs/storybook"
        target="_blank"
      >Star on GitHub<RightArrow /></a>
    </div>
    <div className="sb-section-item">
      <Image
        width={33}
        height={32}
        layout="fixed"
        src={Discord}
        alt="Discord logo"
        className="sb-explore-image"
      />
      <div>
        Get support and chat with frontend developers.

        <a
          href="https://discord.gg/storybook"
          target="_blank"
        >Join Discord server<RightArrow /></a>
      </div>
    </div>
    <div className="sb-section-item">
      <Image
        width={32}
        height={32}
        layout="fixed"
        src={Youtube}
        alt="Youtube logo"
        className="sb-explore-image"
      />
      <div>
        Watch tutorials, feature previews and interviews.

        <a
          href="https://www.youtube.com/@chromaticui"
          target="_blank"
        >Watch on YouTube<RightArrow /></a>
      </div>
    </div>
    <div className="sb-section-item">
      <Image
        width={33}
        height={32}
        layout="fixed"
        src={Tutorials}
        alt="A book"
        className="sb-explore-image"
      />
      <p>Follow guided walkthroughs on for key workflows.</p>

      <a
          href="https://storybook.js.org/tutorials/?ref=configure"
          target="_blank"
        >Discover tutorials<RightArrow /></a>
    </div>

</div>

<style>
  {`
  .sb-container {
    margin-bottom: 48px;
  }

  .sb-section {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  img {
    object-fit: cover;
  }

  .sb-section-title {
    margin-bottom: 32px;
  }

  .sb-section a:not(h1 a, h2 a, h3 a) {
    font-size: 14px;
  }

  .sb-section-item, .sb-grid-item {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .sb-section-item-heading {
    padding-top: 20px !important;
    padding-bottom: 5px !important;
    margin: 0 !important;
  }
  .sb-section-item-paragraph {
    margin: 0;
    padding-bottom: 10px;
  }

  .sb-chevron {
    margin-left: 5px;
  }

  .sb-features-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 32px 20px;
  }

  .sb-socials {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  .sb-socials p {
    margin-bottom: 10px;
  }

  .sb-explore-image {
    max-height: 32px;
    align-self: flex-start;
  }

  .sb-addon {
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    background-color: #EEF3F8;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    background: #EEF3F8;
    height: 180px;
    margin-bottom: 48px;
    overflow: hidden;
  }

  .sb-addon-text {
    padding-left: 48px;
    max-width: 240px;
  }

  .sb-addon-text h4 {
    padding-top: 0px;
  }

  .sb-addon-img {
    position: absolute;
    left: 345px;
    top: 0;
    height: 100%;
    width: 200%;
    overflow: hidden;
  }

  .sb-addon-img img {
    width: 650px;
    transform: rotate(-15deg);
    margin-left: 40px;
    margin-top: -72px;
    box-shadow: 0 0 1px rgba(255, 255, 255, 0);
    backface-visibility: hidden;
  }

  @media screen and (max-width: 800px) {
    .sb-addon-img {
      left: 300px;
    }
  }

  @media screen and (max-width: 600px) {
    .sb-section {
      flex-direction: column;
    }

    .sb-features-grid {
      grid-template-columns: repeat(1, 1fr);
    }

    .sb-socials {
      grid-template-columns: repeat(2, 1fr);
    }

    .sb-addon {
      height: 280px;
      align-items: flex-start;
      padding-top: 32px;
      overflow: hidden;
    }

    .sb-addon-text {
      padding-left: 24px;
    }

    .sb-addon-img {
      right: 0;
      left: 0;
      top: 130px;
      bottom: 0;
      overflow: hidden;
      height: auto;
      width: 124%;
    }

    .sb-addon-img img {
      width: 1200px;
      transform: rotate(-12deg);
      margin-left: 0;
      margin-top: 48px;
      margin-bottom: -40px;
      margin-left: -24px;
    }
  }
  `}
</style>
```

## File: stories/header.css

```css
.storybook-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 15px 20px;
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.storybook-header svg {
  display: inline-block;
  vertical-align: top;
}

.storybook-header h1 {
  display: inline-block;
  vertical-align: top;
  margin: 6px 0 6px 10px;
  font-weight: 700;
  font-size: 20px;
  line-height: 1;
}

.storybook-header button + button {
  margin-left: 10px;
}

.storybook-header .welcome {
  margin-right: 10px;
  color: #333;
  font-size: 14px;
}
```

## File: stories/Header.stories.ts

```typescript
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { fn } from "storybook/test";

import { Header } from "./Header";

const meta = {
  title: "Example/Header",
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    user: {
      name: "Jane Doe",
    },
  },
};

export const LoggedOut: Story = {};
```

## File: stories/Header.tsx

```typescript
import { Button } from './Button';
import './header.css';

type User = {
  name: string;
};

export interface HeaderProps {
  user?: User;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}

export const Header = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => (
  <header>
    <div className="storybook-header">
      <div>
        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path
              d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
              fill="#FFF"
            />
            <path
              d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
              fill="#555AB9"
            />
            <path
              d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
              fill="#91BAF8"
            />
          </g>
        </svg>
        <h1>Acme</h1>
      </div>
      <div>
        {user ? (
          <>
            <span className="welcome">
              Welcome, <b>{user.name}</b>!
            </span>
            <Button size="small" onClick={onLogout} label="Log out" />
          </>
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in" />
            <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
          </>
        )}
      </div>
    </div>
  </header>
);
```

## File: stories/page.css

```css
.storybook-page {
  margin: 0 auto;
  padding: 48px 20px;
  max-width: 600px;
  color: #333;
  font-size: 14px;
  line-height: 24px;
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.storybook-page h2 {
  display: inline-block;
  vertical-align: top;
  margin: 0 0 4px;
  font-weight: 700;
  font-size: 32px;
  line-height: 1;
}

.storybook-page p {
  margin: 1em 0;
}

.storybook-page a {
  color: inherit;
}

.storybook-page ul {
  margin: 1em 0;
  padding-left: 30px;
}

.storybook-page li {
  margin-bottom: 8px;
}

.storybook-page .tip {
  display: inline-block;
  vertical-align: top;
  margin-right: 10px;
  border-radius: 1em;
  background: #e7fdd8;
  padding: 4px 12px;
  color: #357a14;
  font-weight: 700;
  font-size: 11px;
  line-height: 12px;
}

.storybook-page .tip-wrapper {
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 13px;
  line-height: 20px;
}

.storybook-page .tip-wrapper svg {
  display: inline-block;
  vertical-align: top;
  margin-top: 3px;
  margin-right: 4px;
  width: 12px;
  height: 12px;
}

.storybook-page .tip-wrapper svg path {
  fill: #1ea7fd;
}
```

## File: stories/Page.stories.ts

```typescript
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { expect, userEvent, within } from "storybook/test";

import { Page } from "./Page";

const meta = {
  title: "Example/Page",
  component: Page,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {};

// More on component testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const LoggedIn: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole("button", { name: /Log in/i });
    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
    await expect(loginButton).not.toBeInTheDocument();

    const logoutButton = canvas.getByRole("button", { name: /Log out/i });
    await expect(logoutButton).toBeInTheDocument();
  },
};
```

## File: stories/Page.tsx

```typescript
import React from 'react';

import { Header } from './Header';
import './page.css';

type User = {
  name: string;
};

export const Page: React.FC = () => {
  const [user, setUser] = React.useState<User>();

  return (
    <article>
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      />

      <section className="storybook-page">
        <h2>Pages in Storybook</h2>
        <p>
          We recommend building UIs with a{' '}
          <a href="https://componentdriven.org" target="_blank" rel="noopener noreferrer">
            <strong>component-driven</strong>
          </a>{' '}
          process starting with atomic components and ending with pages.
        </p>
        <p>
          Render pages with mock data. This makes it easy to build and review page states without
          needing to navigate to them in your app. Here are some handy patterns for managing page
          data in Storybook:
        </p>
        <ul>
          <li>
            Use a higher-level connected component. Storybook helps you compose such data from the
            &quot;args&quot; of child component stories
          </li>
          <li>
            Assemble data in the page component from your services. You can mock these services out
            using Storybook.
          </li>
        </ul>
        <p>
          Get a guided tutorial on component-driven development at{' '}
          <a href="https://storybook.js.org/tutorials/" target="_blank" rel="noopener noreferrer">
            Storybook tutorials
          </a>
          . Read more in the{' '}
          <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer">
            docs
          </a>
          .
        </p>
        <div className="tip-wrapper">
          <span className="tip">Tip</span> Adjust the width of the canvas with the{' '}
          <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <path
                d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
                id="a"
                fill="#999"
              />
            </g>
          </svg>
          Viewports addon in the toolbar
        </div>
      </section>
    </article>
  );
};
```

## File: tests/example.spec.ts

```typescript
import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" })
  ).toBeVisible();
});
```

## File: tests/navigation.spec.ts

```typescript
import { test, expect } from "@playwright/test";

test.describe("Navegação Principal - Colégio João Pedro", () => {
  // Forçamos o Playwright a abrir o site do zero em cada teste
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000");
    // Espera o site carregar completamente e as animações iniciais pararem
    await page.waitForLoadState("networkidle");
  });

  test("1. deve levar para a seção de contato ao clicar em Agendar Visita", async ({
    page,
  }) => {
    const contatoSection = page.locator("#contato");

    // Usamos um seletor mais específico para não confundir botões do header com o do hero
    const btnAgendar = page
      .getByRole("link", { name: /agendar visita/i })
      .first();

    await btnAgendar.click({ force: true });

    // Esperamos o scroll suave acontecer com um tempo de segurança
    await page.waitForTimeout(1500);

    // Verificamos a visibilidade com uma margem de erro menor
    await expect(contatoSection).toBeInViewport({ ratio: 0.1 });
  });

  test("2. deve abrir a página de proposta pedagógica", async ({ page }) => {
    // Garantimos que o navegador resetou o scroll para o topo antes de começar
    await page.evaluate(() => window.scrollTo(0, 0));

    const btnProposta = page
      .getByRole("link", { name: /conhecer a escola/i })
      .first();

    // scrollIntoView garante que o robô não tente clicar em algo que está fora da tela
    await btnProposta.scrollIntoViewIfNeeded();
    await btnProposta.click({ force: true });

    // Esperamos a URL mudar e a rede ficar ociosa (página nova carregada)
    await page.waitForURL(/\/proposta/);
    await page.waitForLoadState("networkidle");

    await expect(page).toHaveURL(/\/proposta/);

    const heading = page.getByRole("heading", { level: 1 });
    await expect(heading).toBeVisible();
  });
  test("3. deve abrir o modal de confirmação do WhatsApp", async ({ page }) => {
    const floatingBtn = page.locator("button.fixed.bottom-6.right-6");
    await floatingBtn.click();

    // 1. Primeiro, localizamos o container do modal (a div com z-10 que você criou)
    const modalContainer = page.locator("div.relative.z-10");

    // 2. Agora, buscamos o título do modal para garantir que ele abriu
    await expect(modalContainer.getByText(/Iniciar Conversa\?/i)).toBeVisible();

    // 3. AGORA SIM: buscamos o nome do colégio APENAS dentro desse container
    // Isso evita o erro de "6 elementos encontrados"
    await expect(modalContainer.getByText("Colégio João Pedro")).toBeVisible();

    // 4. Verifica o botão de confirmação dentro do modal
    const confirmBtn = modalContainer.getByRole("button", {
      name: /Sim, iniciar agora/i,
    });
    await expect(confirmBtn).toBeVisible();
  });
});
```

## File: vitest.config.ts

```typescript
import path from "node:path";
import { fileURLToPath } from "node:url";

import { defineConfig } from "vitest/config";

import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";

import { playwright } from "@vitest/browser-playwright";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({ configDir: path.join(dirname, ".storybook") }),
        ],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [{ browser: "chromium" }],
          },
          setupFiles: [".storybook/vitest.setup.ts"],
        },
      },
    ],
  },
});
```

## File: vitest.shims.d.ts

```typescript
/// <reference types="@vitest/browser-playwright" />
```

## File: .gitignore

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files (can opt-in for committing if needed)
.env*

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts

*storybook.log
storybook-static

# Playwright
node_modules/
/test-results/
/playwright-report/
/blob-report/
/playwright/.cache/
/playwright/.auth/
```

## File: .husky/pre-commit

```
pnpm exec lint-staged
```

## File: eslint.config.mjs

```javascript
// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
```

## File: next.config.ts

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com", // Permite imagens do Unsplash
      },
    ],
  },
};

export default nextConfig;
```

## File: postcss.config.mjs

```javascript
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
```

## File: src/app/layout.tsx

```typescript
import type { Metadata } from "next";
import { Karantina, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import BackToTop from "@/components/ui/BackToTop";

const karantina = Karantina({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-karantina",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Colégio João Pedro",
    default: "Colégio João Pedro | Ensino de Excelência",
  },
  description: "Ambiente de acolhimento e aprendizado.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body
        className={`${karantina.variable} ${jakarta.variable} overflow-x-hidden font-body text-primary antialiased md:overflow-x-visible`}
      >
        <main className="relative z-10">
          {children}
          <ScrollProgress />
          <Header />
          <WhatsAppButton />
          <Footer />
          <BackToTop />
        </main>
      </body>
    </html>
  );
}
```

## File: src/components/layout/header.tsx

```typescript
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FlowingMenu from "@/components/ui/FlowingMenu";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const pathname = usePathname();

  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { text: "A Escola", link: isHome ? "#sobre" : "/#sobre" },
    { text: "Proposta", link: "/proposta" },
    { text: "Diferenciais", link: "/diferenciais" },
    { text: "Infraestrutura", link: "/estrutura" },
    { text: "Dúvidas", link: "/faq" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-[100] flex justify-center p-6 transition-all duration-500">
      {/* Container Flutuante estilo 'Pill' */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`relative flex items-center gap-2 rounded-full border px-3 py-2 transition-all duration-500 ${
          isScrolled
            ? "border-gray-200 bg-white/70 shadow-2xl backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        {/* LOGO COMPACTA */}
        <Link href="/" className="flex items-center gap-2 px-3 py-1">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#004aad] text-[10px] font-black text-white shadow-lg">
            CJP
          </span>
          {!isScrolled && (
            <span className="hidden text-sm font-black tracking-tighter text-[#004aad] md:block">
              João Pedro
            </span>
          )}
        </Link>

        {/* NAVEGAÇÃO DESKTOP COM INDICADOR DESLIZANTE */}
        <div className="hidden items-center gap-1 md:flex">
          {menuItems.map((item) => (
            <Link
              key={item.text}
              href={item.link}
              onMouseEnter={() => setHoveredLink(item.text)}
              onMouseLeave={() => setHoveredLink(null)}
              className="relative px-4 py-2 text-xs font-bold uppercase tracking-widest text-gray-600 transition-colors hover:text-[#004aad]"
            >
              {item.text}
              {/* Indicador Animado (Background Pill) */}
              {hoveredLink === item.text && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 z-[-1] rounded-full bg-[#004aad]/5"
                  transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                />
              )}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 pl-2">
          <Link
            href="/#contato"
            className="rounded-full bg-[#ff3b30] px-5 py-2 text-[10px] font-black uppercase tracking-widest text-white shadow-lg transition-all hover:scale-105 active:scale-95"
          >
            Matrículas
          </Link>

          {/* BOTÃO MENU MOBILE */}
          <button
            className="rounded-full p-2 text-[#004aad] hover:bg-gray-100 md:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={20} />
          </button>
        </div>
      </motion.nav>

      {/* MENU MOBILE (FlowingMenu) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[110]"
          >
            <FlowingMenu
              items={menuItems.map((i) => ({
                ...i,
                image:
                  "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2071&auto=format&fit=crop",
              }))}
              onItemClick={() => setIsMobileMenuOpen(false)}
              speed={20}
              textColor="#004aad"
              marqueeTextColor="#fff"
              marqueeBgColor="#ff3b30"
              bgColor="#fff"
              borderColor="#eee"
            />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute right-8 top-8 z-[120] rounded-full bg-[#ff3b30] p-4 text-white shadow-2xl"
            >
              <X size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
```

## File: src/components/sections/features.tsx

```typescript
import { BookOpen, Heart, ShieldCheck, Users } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";

const features = [
  {
    icon: Heart,
    title: "Acolhimento",
    description:
      "Um olhar atento para cada aluno, respeitando seu tempo e individualidade.",
    color: "bg-[#ff3b30]", // Ajustado para usar o vermelho da sua paleta
  },
  {
    icon: BookOpen,
    title: "Ensino Forte",
    description:
      "Metodologia sociointeracionista que prepara para os desafios reais.",
    color: "bg-[#004aad]", // Ajustado para o azul principal
  },
  {
    icon: Users,
    title: "Comunidade",
    description:
      "Família e escola caminhando juntas no desenvolvimento da criança.",
    color: "bg-[#004aad]/80",
  },
  {
    icon: ShieldCheck,
    title: "Segurança",
    description:
      "Monitoramento e controle de acesso para sua total tranquilidade.",
    color: "bg-[#004aad]/60",
  },
];

export function Features() {
  return (
    /* 1. Aplicamos as classes utilitárias que configuramos: clip-paper e paper-shadow */
    <section className="relative w-full overflow-hidden bg-white py-24 clip-paper paper-shadow">
      {/* Camada: Linhas do Caderno */}
      <div
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          backgroundImage: `
            linear-gradient(#94a3b8 1px, transparent 1px),
            linear-gradient(90deg, #ff3b30 1.5px, transparent 1.5px)
          `,
          backgroundSize: "100% 2.8rem, 100% 100%",
          backgroundPosition: "0 3.5rem, 5rem 0",
          opacity: 0.12,
        }}
      />

      {/* Camada: Textura de Papel Amassado */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-20 mix-blend-multiply"
        style={{
          backgroundImage:
            'url("https://www.transparenttextures.com/patterns/crinkled-paper-pinking.png")',
          backgroundSize: "750px",
        }}
      />

      {/* 2. Respiro extra no container (px-8 md:px-16) para não cortar os cards nas bordas */}
      <div className="container relative z-10 mx-auto px-8 md:px-16">
        <FadeIn direction="up" distance={30}>
          <div className="mb-16 text-center">
            <h2 className="font-display text-4xl font-black uppercase text-[#004aad] md:text-5xl">
              Por que escolher o <br />
              <span className="text-[#ff3b30]">João Pedro?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-[600px] text-lg text-slate-600">
              Mais do que ensino, oferecemos um ambiente onde seu filho se sente
              parte de algo maior.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FadeIn
              key={index}
              direction="up"
              delay={index * 0.15}
              distance={40}
            >
              {/* Ajustamos o bg para white/40 e backdrop-blur para as linhas do caderno aparecerem sutilmente atrás do card */}
              <div className="group relative h-full overflow-hidden rounded-3xl border border-slate-100 bg-white/40 p-8 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-2 hover:shadow-xl">
                <div
                  className={`absolute -right-6 -top-6 h-24 w-24 rounded-full ${feature.color} opacity-10 transition-transform group-hover:scale-150`}
                />
                <div
                  className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${feature.color} text-white shadow-lg`}
                >
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 font-display text-2xl font-black text-[#004aad]">
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn direction="up" delay={0.6}>
          <div className="mt-16 text-center">
            <Link
              href="/diferenciais"
              className="inline-block rounded-full bg-[#ff3b30] px-10 py-4 font-bold text-white shadow-lg transition-all hover:bg-[#e0352b] hover:shadow-red-200 active:scale-95"
            >
              Veja nossos Diferenciais
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
```

## File: src/components/sections/hero.tsx

```typescript
"use client";

import Image from "next/image";
import Link from "next/link";
import SplitText from "@/components/ui/SplitText";
import FadeIn from "@/components/ui/FadeIn";
import { CLIENT_CONFIG } from "@/constants/config";

export function Hero() {
  const today = new Date();
  const nextYear = today.getFullYear() + 1;

  return (
    <section className="container mx-auto grid grid-cols-1 items-center gap-12 overflow-hidden px-4 py-12 pt-32 md:grid-cols-2 md:py-20">
      {/* --- COLUNA DA ESQUERDA --- */}
      <div className="space-y-6 text-center md:text-left">
        <FadeIn direction="down" distance={20}>
          <div className="inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-[#ff3b30]">
            Matrículas Abertas {nextYear}
          </div>
        </FadeIn>

        <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
          <SplitText
            text="CRIANDO UM MUNDO"
            className="block font-display text-[#004aad]"
          />
          <SplitText
            text="DE POSSIBILIDADES"
            className="block font-body text-[#ff3b30]"
            delay={500}
          />
        </h1>

        <FadeIn direction="up" delay={0.8}>
          <p className="mx-auto max-w-[500px] text-lg text-gray-600 md:mx-0">
            No Colégio João Pedro, o aprendizado acontece no encontro. Um espaço
            de crescimento, diálogo e autonomia para o seu filho.
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={1.0}>
          <div className="flex w-full flex-col gap-4 md:w-auto md:flex-row">
            {/* Botão de Agendamento: Link para âncora de contato na Home */}
            <Link
              href="/#contato"
              className="flex h-12 w-full items-center justify-center rounded-full bg-[#ff3b30] px-8 text-lg font-bold text-white transition-all hover:bg-[#d92b22] hover:shadow-lg active:scale-95 md:w-auto"
            >
              Agendar Visita
            </Link>

            {/* Botão de Conhecer: Link para a página de Proposta Pedagógica */}
            <Link
              href="/proposta"
              className="flex h-12 w-full items-center justify-center rounded-full border border-[#004aad] px-8 font-bold text-[#004aad] transition-all hover:bg-blue-50 active:scale-95 md:w-auto"
            >
              Conhecer a Escola
            </Link>
          </div>
        </FadeIn>
      </div>

      {/* --- COLUNA DA DIREITA (IMPACTO RETANGULAR) --- */}
      {/* Aumentamos o max-w para 600px para ela esticar mais para os lados */}
      <div className="relative mx-auto mt-4 flex h-[450px] w-full max-w-[1000px] items-center justify-center md:mt-0 md:h-[550px]">
        {/* Fundo Azul: Ajustado para ser mais largo (w-[95%]) */}
        <FadeIn
          direction="left"
          delay={0.4}
          className="absolute z-0 h-[85%] w-[95%]"
        >
          <div className="h-full w-full rotate-2 transform rounded-[2.5rem] bg-gradient-to-tr from-[#004aad] to-[#003a8c] shadow-2xl md:translate-x-4 md:translate-y-2"></div>
        </FadeIn>

        {/* Moldura da Imagem: Agora ocupa 100% da largura do container para o aspecto retangular */}
        <FadeIn
          direction="up"
          delay={0.6}
          className="relative z-10 h-[85%] w-full overflow-hidden rounded-[2.5rem] border-[6px] border-white bg-white shadow-xl"
        >
          <Image
            src={CLIENT_CONFIG.assets.hero}
            alt={`Destaque do ${CLIENT_CONFIG.name}`}
            fill
            className="object-cover"
            priority
          />
        </FadeIn>

        {/* Balão de Frase */}
        <FadeIn
          direction="up"
          delay={1.5}
          className="absolute bottom-4 left-0 z-20 md:-left-4 md:bottom-8"
        >
          <div className="max-w-[180px] rounded-xl border-l-[6px] border-[#ff3b30] bg-white/95 p-4 shadow-lg backdrop-blur md:max-w-[220px]">
            <p className="text-xs font-bold text-[#004aad] md:text-base">
              &quot;Aprender é uma experiência.&quot;
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
```

## File: src/components/shared/enrollment/lead-form.tsx

```typescript
"use client";

import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";
import { HelpCircle } from "lucide-react";
import { useLeadForm } from "./use-lead-form";

export function LeadForm() {
  const { register, handleSubmit, errors, isSubmitting } = useLeadForm();

  return (
    /* 1. Removido o <section> com clip-paper e backgrounds.
      Agora usamos uma div simples, pois o FinalCTA já é o "papel".
    */
    <div className="relative py-12">
      {/* Aumentamos o padding horizontal (px-6 md:px-12) para o conteúdo
        ficar longe das bordas irregulares do papel.
      */}
      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Coluna da Esquerda: Textos */}
          <FadeIn direction="right" distance={40}>
            <div className="space-y-6">
              <h2 className="font-display text-4xl font-black leading-tight text-[#004aad] md:text-5xl">
                O futuro do seu filho <br />
                <span className="font-display text-[#ff3b30]">
                  começa aqui.
                </span>
              </h2>
              <p className="max-w-md text-lg leading-relaxed text-gray-700">
                No Colégio João Pedro, acreditamos que cada aluno é único. Nossa
                metodologia foca na autonomia, no pensamento crítico e no
                acolhimento necessário para transformar potencial em realidade.
              </p>

              {/* Box de Dúvidas: Mantido com fundo leve para destaque */}
              <FadeIn delay={0.4} direction="up">
                <div className="mt-8 rounded-2xl border border-[#004aad]/10 bg-white/40 p-6 shadow-sm backdrop-blur-sm">
                  <div className="mb-2 flex items-center gap-3">
                    <HelpCircle className="text-[#ff3b30]" size={20} />
                    <h4 className="font-bold text-[#004aad]">
                      Ainda com dúvidas?
                    </h4>
                  </div>
                  <p className="text-sm text-gray-700">
                    Confira nossa central de perguntas frequentes sobre
                    matrículas, horários e metodologia.
                  </p>
                  <Link
                    href="/faq"
                    className="mt-2 inline-block text-sm font-black text-[#ff3b30] hover:underline"
                  >
                    Ver todas as dúvidas frequentes →
                  </Link>
                </div>
              </FadeIn>
            </div>
          </FadeIn>

          {/* Coluna da Direita: Formulário */}
          <FadeIn direction="left" distance={40} delay={0.2}>
            {/* 2. CARD LIMPO: Removido bg-white/80 e sombras pesadas.
              Agora as linhas do caderno do FinalCTA vão aparecer aqui!
            */}
            <div className="rounded-[2.5rem] p-4 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <label className="ml-1 text-xs font-bold uppercase tracking-wider text-[#004aad]">
                    Nome do Responsável
                  </label>
                  <input
                    {...register("parentName")}
                    className={`w-full rounded-2xl border bg-white/90 px-5 py-3.5 outline-none transition-all focus:ring-2 focus:ring-[#004aad]/10 ${errors.parentName ? "border-red-500" : "border-gray-100"}`}
                    placeholder="Nome completo"
                  />
                  {errors.parentName && (
                    <p className="ml-1 text-xs text-red-500">
                      {errors.parentName.message}
                    </p>
                  )}
                </div>

                <div className="space-y-1">
                  <label className="ml-1 text-xs font-bold uppercase tracking-wider text-[#004aad]">
                    E-mail do Responsável
                  </label>
                  <input
                    {...register("email")}
                    className="w-full rounded-2xl border border-gray-100 bg-white/90 px-5 py-3.5 outline-none focus:ring-2 focus:ring-[#004aad]/10"
                    placeholder="exemplo@email.com"
                  />
                  {errors.email && (
                    <p className="ml-1 text-xs text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-1">
                    <label className="ml-1 text-xs font-bold uppercase tracking-wider text-[#004aad]">
                      WhatsApp
                    </label>
                    <input
                      {...register("phone")}
                      className="w-full rounded-2xl border border-gray-100 bg-white/90 px-5 py-3.5 outline-none focus:ring-2 focus:ring-[#004aad]/10"
                      placeholder="(21) 99999-9999"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="ml-1 text-xs font-bold uppercase tracking-wider text-[#004aad]">
                      Nome do Aluno
                    </label>
                    <input
                      {...register("studentName")}
                      className="w-full rounded-2xl border border-gray-100 bg-white/90 px-5 py-3.5 outline-none focus:ring-2 focus:ring-[#004aad]/10"
                      placeholder="Nome do aluno"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="ml-1 text-xs font-bold uppercase tracking-wider text-[#004aad]">
                    Série de interesse
                  </label>
                  <select
                    {...register("grade")}
                    className="w-full rounded-2xl border border-gray-100 bg-white/90 px-5 py-3.5 outline-none focus:ring-2 focus:ring-[#004aad]/10"
                  >
                    <option value="">Selecione...</option>
                    <option value="infantil">Ed. Infantil</option>
                    <option value="fundamental1">Fund. I</option>
                    <option value="fundamental2">Fund. II</option>
                    <option value="medio">Ensino Médio</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-4 w-full rounded-full bg-[#ff3b30] py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-[#e0352b] hover:shadow-xl active:scale-95 disabled:bg-gray-400"
                >
                  {isSubmitting ? "Enviando..." : "Agendar Minha Visita"}
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
```

## File: tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}
```

## File: README.md

````markdown
# 🏫 Colégio João Pedro - Landing Page Profissional

![Vercel Status](https://img.shields.io/badge/Vercel-Deployed-success?style=for-the-badge&logo=vercel)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)

Esta é uma Landing Page institucional de alto nível desenvolvida para o **Colégio João Pedro**, focada em converter visitantes em leads através de uma experiência visual impactante e performance otimizada.

---

## 📸 Preview do Projeto

![Preview da Landing Page](public\images\preview-cjp.png)

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
    git clone [https://github.com/seu-usuario/colegio-joao-pedro.git](https://github.com/seu-usuario/colegio-joao-pedro.git)
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

- [ ] Implementação de contadores animados para estatísticas do colégio.
- [ ] Integração do formulário com serviço de e-mail ou banco de dados.
- [ ] Botão flutuante de WhatsApp com animação de pulsação.
- [ ] Página de "Obrigado" personalizada após o envio do lead.
````

## File: src/app/globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Regra para rolagem suave em todo o site */
html {
  scroll-behavior: smooth;
  overflow-x: hidden;
}

body {
  /* O @apply usa a cor que você definiu no tailwind.config.ts */
  @apply bg-background text-gray-900 antialiased;
  /* 1. Definimos a cor base */
  background-color: #fff4d7;

  /* 2. Usamos uma imagem de papel amassado real. 
     Essa URL abaixo é uma textura de papel amassado de alta qualidade. */
  background-image: url("https://www.transparenttextures.com/patterns/gray-paper.png");

  /* 3. A mágica para o papel "pegar" a cor bege */
  background-blend-mode: multiply;

  /* 4. Ajustes de exibição */
  background-repeat: repeat;
  background-size: 600px; /* Se quiser vincos maiores, aumente esse valor */
  background-attachment: fixed;

  min-height: 100vh;
}

/* Estilização da Scrollbar para Chrome, Safari e Edge */
::-webkit-scrollbar {
  width: 12px;
}

/* Fundo da barra (Track) - usamos o tom creme suave do site */
::-webkit-scrollbar-track {
  background: #fffcf5;
}

/* A barrinha que desliza (Thumb) - Azul do Colégio */
::-webkit-scrollbar-thumb {
  background-color: #004aad;
  border-radius: 20px;
  /* Cria uma borda ao redor da thumb para parecer mais fina e elegante */
  border: 3px solid #fffcf5;
}

/* Cor ao passar o mouse - Vermelho do Colégio */
::-webkit-scrollbar-thumb:hover {
  background-color: #ff3b30;
}

/* Suporte para Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: #004aad #fffcf5;
}

::selection {
  background-color: #004aad; /* Seu Azul Primary */
  color: #fff4d7; /* Seu Bege Background */
}

body::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1; /* Garante que está atrás de tudo */

  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");

  /* Aumente para 0.1 só para testar se aparece */
  opacity: 0.1;
  filter: contrast(150%) brightness(100%);
}

body::after {
  content: "";
  position: fixed;
  inset: 0;
  box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.05);
  pointer-events: none;
  z-index: 50;
}
```

## File: src/app/thanks/page.tsx

```typescript
import type { Metadata } from "next";
import { ThanksContent } from "./ThanksContent";

export const metadata: Metadata = {
  title: "Obrigado | Colégio João Pedro",
  description:
    "Agradecemos o seu interesse! Entraremos em contato com você em breve.",
};

export default function Page() {
  return <ThanksContent />;
}
```

## File: src/components/sections/DirecaoQuote.tsx

```typescript
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import FadeIn from "@/components/ui/FadeIn";

gsap.registerPlugin(ScrollTrigger);

export default function DirecaoQuote() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 95%",
        },
      }
    );
  }, []);

  return (
    <section className="relative z-10 my-16 px-6">
      <FadeIn>
        {/* Reduzi o max-width para 3xl e o padding drasticamente */}
        <div
          ref={sectionRef}
          className="relative mx-auto max-w-3xl overflow-hidden rounded-[2rem] bg-[#004aad] p-8 text-center shadow-xl md:p-12"
        >
          {/* Círculo de fundo ainda mais discreto */}
          <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-white/5 blur-2xl" />

          {/* Citação menor e com menos margem */}
          <blockquote className="relative z-10 mb-8 text-lg font-medium italic leading-relaxed tracking-tight text-white md:text-xl">
            “Nossa missão não é apenas ensinar conteúdos, mas formar seres
            humanos capazes de transformar o mundo ao seu redor com ética,
            inteligência e empatia.”
          </blockquote>

          {/* Assinatura compacta */}
          <div className="relative z-10 flex flex-col items-center justify-center gap-3">
            {/* Foto menor (h-12 w-12) */}
            <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/20 shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1887&auto=format&fit=crop"
                alt="Foto da Diretora Pedagógica"
                fill
                className="object-cover"
              />
            </div>

            <div className="text-center">
              {/* Texto da assinatura muito mais sutil */}
              <h4 className="font-display text-sm font-bold uppercase tracking-widest text-[#ff3b30]">
                — Ana Paula Souza
              </h4>
              <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-white/50">
                Diretora Pedagógica
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
```

## File: src/components/sections/gallery.tsx

```typescript
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

const galleryItems = [
  {
    title: "Biblioteca Interativa",
    category: "Conhecimento",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1600&auto=format&fit=crop",
    color: "bg-[#004aad]",
  },
  {
    title: "Quadra Poliesportiva",
    category: "Esportes",
    image:
      "https://images.unsplash.com/photo-1544999214-cb3cb61e8499?q=80&w=1170&auto=format&fit=crop",
    color: "bg-[#ff3b30]",
  },
  {
    title: "Laboratório Maker",
    category: "Inovação",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop",
    color: "bg-[#004aad]",
  },
  {
    title: "Ateliê de Artes",
    category: "Criatividade",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1171&auto=format&fit=crop",
    color: "bg-[#ff3b30]",
  },
  {
    title: "Espaço Nutrição",
    category: "Saúde",
    image:
      "https://images.unsplash.com/photo-1588075592765-2feb7de1f86d?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "bg-[#004aad]",
  },
  {
    title: "Área de Convivência",
    category: "Social",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2000&auto=format&fit=crop",
    color: "bg-[#ff3b30]",
  },
];

export function Gallery() {
  return (
    <section
      id="galeria"
      className="relative w-full overflow-hidden bg-transparent py-24 md:py-32"
    >
      {/* Pattern de fundo suave */}
      <div
        className="absolute top-0 h-full w-full opacity-5"
        style={{
          backgroundImage: "radial-gradient(#005eb3 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Título com Animação */}
        <FadeIn direction="up" distance={40}>
          <div className="mb-16 flex flex-col items-center text-center">
            <span className="mb-3 text-sm font-bold uppercase tracking-widest text-[#ff3b30]">
              Nosso Espaço
            </span>
            <h2 className="font-display text-5xl font-black uppercase leading-none text-[#004aad] md:text-6xl lg:text-7xl">
              Um ambiente para <br />
              <span className="text-[#ff3b30]">criar memórias</span>
            </h2>
          </div>
        </FadeIn>

        {/* Grid 3x2 Harmonizado */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {galleryItems.map((item, index) => (
            <FadeIn
              key={index}
              direction="up"
              delay={0.1 * index}
              distance={50}
            >
              <div className="group relative h-[400px] w-full overflow-hidden rounded-[2.5rem] bg-slate-100 shadow-xl transition-all duration-500 hover:shadow-2xl">
                {/* Imagem com efeito de zoom no hover */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Overlay de gradiente que muda de cor no hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90`}
                />

                {/* Conteúdo do Card */}
                <div className="absolute bottom-8 left-8">
                  <span className="mb-2 block translate-y-4 transform text-xs font-bold uppercase tracking-widest text-[#ff3b30] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {item.category}
                  </span>
                  <h3 className="text-2xl font-black text-white md:text-3xl">
                    {item.title}
                  </h3>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <div className="mt-10 text-center"></div>
        <div className="mt-12 text-center">
          <Link
            href="/estrutura"
            className="rounded-full border-2 border-[#004aad] px-8 py-4 font-bold text-[#004aad] transition-all hover:bg-[#004aad] hover:text-white active:scale-95"
          >
            Ver Galeria Completa
          </Link>
        </div>
      </div>
    </section>
  );
}
```

## File: src/constants/config.tsx

```typescript
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
```

## File: tailwind.config.ts

```typescript
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
```

## File: src/app/faq/page.tsx

```typescript
import type { Metadata } from "next";
import { FAQContent } from "./FAQContent";

export const metadata: Metadata = {
  title: "Dúvidas Frequentes | Colégio João Pedro",
  description:
    "Tire suas dúvidas sobre matrículas, metodologia e horários do Colégio João Pedro.",
};

export default function Page() {
  return <FAQContent />;
}
```

## File: src/app/page.tsx

```typescript
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Features } from "@/components/sections/features";
import { Gallery } from "@/components/sections/gallery";
import FInalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#fffcf5] bg-transparent">
      <Hero />
      <section className="relative overflow-hidden bg-white py-24 clip-paper paper-shadow">
        {/* Camada: Linhas do Caderno (Contínuas para as duas seções) */}
        <div
          className="pointer-events-none absolute inset-0 -z-20"
          style={{
            backgroundImage: `
              linear-gradient(#94a3b8 1px, transparent 1px),
              linear-gradient(90deg, #ff3b30 1.5px, transparent 1.5px)
            `,
            backgroundSize: "100% 2.8rem, 100% 100%",
            backgroundPosition: "0 3.5rem, 5rem 0",
            opacity: 0.12,
          }}
        />

        {/* Camada: Textura de Papel */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-20 mix-blend-multiply"
          style={{
            backgroundImage:
              'url("https://www.transparenttextures.com/patterns/crinkled-paper-pinking.png")',
            backgroundSize: "750px",
          }}
        />
        <div className="space-y-0">
          <About />
          <Features />
        </div>
      </section>
      <Gallery />
      <FInalCTA />
    </div>
  );
}
```

## File: src/components/sections/about.tsx

```typescript
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

export function About() {
  return (
    /* 1. Aplicamos o clip-path e a sombra na section principal */
    <section
      id="sobre"
      className="relative overflow-hidden bg-white py-24 clip-paper paper-shadow"
    >
      {/* Camada: Linhas do Caderno */}
      <div
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          backgroundImage: `
            linear-gradient(#94a3b8 1px, transparent 1px),
            linear-gradient(90deg, #ff3b30 1.5px, transparent 1.5px)
          `,
          backgroundSize: "100% 2.8rem, 100% 100%",
          backgroundPosition: "0 3.5rem, 5rem 0",
          opacity: 0.12,
        }}
      />

      {/* Camada: Textura de Papel Amassado */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-20 mix-blend-multiply"
        style={{
          backgroundImage:
            'url("https://www.transparenttextures.com/patterns/crinkled-paper-pinking.png")',
          backgroundSize: "750px",
        }}
      />

      {/* 2. Ajustamos o container para ter mais padding horizontal (px-8 md:px-16)
          isso evita que o conteúdo chegue perto do corte irregular do papel.
      */}
      <div className="container relative z-10 mx-auto grid grid-cols-1 items-center gap-12 px-8 md:grid-cols-2 md:px-16">
        {/* Lado Esquerdo: Imagem */}
        <FadeIn direction="right" distance={100} duration={1.2}>
          <div className="relative h-[400px] w-full overflow-hidden rounded-[2.5rem] border-[6px] border-[#004aad] shadow-xl md:h-[500px]">
            <Image
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop"
              alt="Crianças aprendendo juntas em grupo"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            {/* Overlay sutil para integrar a imagem ao papel */}
            <div className="absolute inset-0 bg-[#004aad]/5 mix-blend-multiply"></div>
          </div>
        </FadeIn>

        {/* Lado Direito: Texto */}
        <div className="space-y-8">
          <FadeIn direction="left" delay={0.2}>
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-[#ff3b30]">
                Nossa Essência
              </span>
              <h2 className="mt-2 font-display text-5xl font-black tracking-tight text-[#004aad] md:text-6xl">
                SOBRE NÓS
              </h2>
            </div>
          </FadeIn>

          <div className="space-y-6 text-lg leading-relaxed text-gray-600 md:text-xl">
            <FadeIn direction="up" delay={0.4}>
              <p>
                No Colégio João Pedro, acreditamos que{" "}
                <strong className="text-[#004aad]">
                  aprender é uma experiência
                </strong>{" "}
                que acontece no encontro com o outro.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.5}>
              <p>
                Nosso ensino é baseado no{" "}
                <strong className="text-[#004aad]">sociointeracionismo</strong>,
                onde cada descoberta ganha significado na troca de ideias, na
                curiosidade e na vivência do dia a dia.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.6}>
              <p className="border-l-4 border-[#ff3b30] pl-4 font-medium italic text-gray-800">
                &quot;Mais do que uma escola, somos um espaço de crescimento,
                diálogo e aprendizado.&quot;
              </p>
            </FadeIn>
          </div>

          <FadeIn direction="up" delay={0.8}>
            <div className="pt-4">
              <Link
                href="/proposta"
                className="group inline-flex items-center gap-2 text-lg font-bold text-[#004aad] transition-colors hover:text-[#ff3b30]"
              >
                Conheça nossa proposta pedagógica
                <span className="transform transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
```

## File: src/components/sections/FinalCTA.tsx

```typescript
"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { LeadForm } from "../shared/enrollment/lead-form";

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTA() {
  const wrapperRef = useRef(null);

  useEffect(() => {
    // Mantendo sua animação de entrada
    gsap.fromTo(
      wrapperRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={wrapperRef}
      className="w-full bg-transparent px-4 py-20 md:px-10"
    >
      {/* 2. A FOLHA DE PAPEL */}
      <div className="relative mx-auto max-w-7xl overflow-hidden bg-white py-24 clip-paper paper-shadow">
        {/* Camada: Linhas do Caderno */}
        <div
          className="pointer-events-none absolute inset-0 -z-20"
          style={{
            backgroundImage: `
              linear-gradient(#94a3b8 1px, transparent 1px),
              linear-gradient(90deg, #ff3b30 1.5px, transparent 1.5px)
            `,
            backgroundSize: "100% 2.8rem, 100% 100%",
            backgroundPosition: "0 3.5rem, 5rem 0",
            opacity: 0.12,
          }}
        />

        {/* Camada: Textura Amassada */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-20 mix-blend-multiply"
          style={{
            backgroundImage:
              'url("https://www.transparenttextures.com/patterns/crinkled-paper-pinking.png")',
            backgroundSize: "750px",
          }}
        />
        <LeadForm />
      </div>
    </section>
  );
}
```

## File: src/components/ui/WhatsAppButton.tsx

```typescript
"use client";

import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { X, ExternalLink } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// Componente do Ícone Oficial do WhatsApp
const WhatsAppIcon = ({
  size = 24,
  className = "",
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.393 0 12.03c0 2.122.554 4.197 1.604 6.04L0 24l6.117-1.605a11.782 11.782 0 005.925 1.599h.005c6.635 0 12.03-5.394 12.033-12.034a11.812 11.812 0 00-3.568-8.508z" />
  </svg>
);

interface WhatsAppButtonProps {
  variant?: "fixed" | "inline";
  label?: string;
}

export function WhatsAppButton({
  variant = "fixed",
  label,
}: WhatsAppButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);

    const bubbleTimer = setTimeout(() => {
      setShowBubble(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(bubbleTimer);
    };
  }, []);

  const whatsappUrl = `https://wa.me/5521998382038?text=Olá! Gostaria de mais informações sobre o Colégio João Pedro.`;

  const handleConfirm = () => {
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  const modalVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 20,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  const bubbleVariants: Variants = {
    hidden: { opacity: 0, x: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  };

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#004aad]/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative z-10 w-full max-w-sm rounded-[2.5rem] border border-white bg-[#fffcf5] p-8 text-center shadow-2xl"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-6 top-6 text-gray-400 transition-colors hover:text-[#ff3b30]"
            >
              <X size={24} />
            </button>

            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#25d366]/10 text-[#25d366]">
              {/* Ícone no Modal */}
              <WhatsAppIcon size={40} />
            </div>

            <h3 className="mb-2 text-2xl font-black text-[#004aad]">
              Iniciar Conversa?
            </h3>
            <p className="mb-8 leading-relaxed text-gray-600">
              Olá! 👋 Como podemos ajudar na educação do seu filho hoje? <br />
              <span className="font-bold text-[#004aad]">
                Colégio João Pedro
              </span>
            </p>

            <div className="flex flex-col gap-3">
              <button
                onClick={handleConfirm}
                className="flex items-center justify-center gap-2 rounded-full bg-[#25d366] py-4 font-bold text-white transition-all hover:bg-[#1eb954] hover:shadow-lg hover:shadow-green-200 active:scale-95"
              >
                Sim, falar agora <ExternalLink size={18} />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      {variant === "fixed" ? (
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4">
          <AnimatePresence>
            {showBubble && !isOpen && (
              <motion.div
                variants={bubbleVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="relative mr-2 max-w-[240px] rounded-2xl rounded-br-none border border-gray-100 bg-white p-4 shadow-xl"
              >
                <button
                  onClick={() => setShowBubble(false)}
                  className="absolute -left-2 -top-2 rounded-full bg-white p-1 text-gray-400 shadow-md hover:text-[#ff3b30]"
                >
                  <X size={12} />
                </button>
                <p className="text-sm font-medium text-gray-700">
                  Olá! 👋 Precisando de ajuda com a matrícula ou dúvidas?
                </p>
                <div className="absolute -bottom-2 right-0 h-4 w-4 bg-white [clip-path:polygon(100%_0,0_0,100%_100%)]"></div>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={() => setIsOpen(true)}
            className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25d366] text-white shadow-2xl transition-all hover:scale-110 active:scale-95"
          >
            {/* Ícone no Botão Fixo */}
            <WhatsAppIcon size={32} />
            <span className="absolute right-0 top-0 flex h-4 w-4">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex h-4 w-4 rounded-full bg-[#ff3b30]"></span>
            </span>
          </button>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center gap-2 rounded-full bg-[#25d366] px-8 py-4 font-bold text-white shadow-lg shadow-green-900/20 transition-all hover:scale-105 active:scale-95"
        >
          {/* Ícone no Botão Inline */}
          <WhatsAppIcon size={20} />
          {label || "Falar no WhatsApp"}
        </button>
      )}

      {mounted && ReactDOM.createPortal(modalContent, document.body)}
    </>
  );
}
```

## File: src/app/estrutura/page.tsx

```typescript
import type { Metadata } from "next";
import { EstruturaContent } from "./EstruturaContent";

export const metadata: Metadata = {
  title: "Estrutura | Colégio João Pedro",
  description:
    "Explore nosso ambiente planejado para o desenvolvimento e segurança dos nossos alunos.",
};

export default function Page() {
  return <EstruturaContent />;
}
```

## File: src/app/proposta/page.tsx

```typescript
// src/app/proposta/page.tsx
import type { Metadata } from "next";
import PropostaContent from "./PropostaContent";

// Aqui o Next.js consegue ler os metadados perfeitamente
export const metadata: Metadata = {
  title: "Proposta Pedagógica | Colégio João Pedro",
  description: "Conheça nossa metodologia sociointeracionista.",
};

export default function Page() {
  return <PropostaContent />;
}
```

## File: package.json

```json
{
  "name": "colegio-joao-pedro",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint",
    "prepare": "husky",
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build"
  },
  "dependencies": {
    "@gsap/react": "^2.1.2",
    "@hookform/resolvers": "^5.2.2",
    "clsx": "^2.1.1",
    "framer-motion": "^12.26.2",
    "gsap": "^3.14.2",
    "lucide-react": "^0.562.0",
    "next": "16.1.1",
    "react": "19.2.3",
    "react-dom": "19.2.3",
    "react-hook-form": "^7.71.0",
    "tailwind-merge": "^3.4.0",
    "zod": "^4.3.5"
  },
  "devDependencies": {
    "@chromatic-com/storybook": "^5.0.0",
    "@playwright/test": "^1.57.0",
    "@storybook/addon-a11y": "^10.1.11",
    "@storybook/addon-docs": "^10.1.11",
    "@storybook/addon-vitest": "^10.1.11",
    "@storybook/nextjs-vite": "^10.1.11",
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "@vitest/browser-playwright": "^4.0.17",
    "@vitest/coverage-v8": "^4.0.17",
    "autoprefixer": "10.4.17",
    "eslint": "^9",
    "eslint-config-next": "16.1.1",
    "eslint-plugin-storybook": "^10.1.11",
    "husky": "^9.1.7",
    "lint-staged": "^16.2.7",
    "playwright": "^1.57.0",
    "postcss": "8.4.35",
    "storybook": "^10.1.11",
    "tailwindcss": "^3.4.17",
    "typescript": "^5",
    "vite": "^7.3.1",
    "vitest": "^4.0.17"
  },
  "lint-staged": {
    "*.{ts,tsx,js,jsx}": ["pnpm eslint --fix", "pnpm prettier --write"],
    "*.{json,css,md}": ["pnpm prettier --write"]
  }
}
```

## File: src/app/diferenciais/page.tsx

```typescript
import type { Metadata } from "next";
import { DiferenciaisContent } from "./DiferenciaisContent";

export const metadata: Metadata = {
  title: "Diferenciais | Colégio João Pedro",
  description:
    "Conheça o que nos torna únicos: acolhimento, ensino forte e nossa comunidade.",
};

export default function Page() {
  return <DiferenciaisContent />;
}
```
