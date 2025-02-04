import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    setupFiles: ["./src/setupTests.ts"], // Убедитесь, что путь правильный
    environment: "jsdom", // Для тестов с React
  },
});
