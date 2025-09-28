/// <reference types="vitest/config" />
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTests.ts",
    coverage: {
      provider: "v8",
      include: ["src/features/**", "src/components/ui/*.{ts,tsx}", "src/pages/**"],
      exclude: ["src/**/*.stories.{ts,tsx}"],
      reporter: ["text"],
    },
  },
})
