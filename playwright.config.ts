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
