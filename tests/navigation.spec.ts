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
