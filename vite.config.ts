import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  build: {
    outDir: "build",
    sourcemap: true,
  },
  base:'/harry_poter_react/',
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setupTests",
    mockReset: true,
  },
  resolve: {
    alias: {
      src: '/src',
    }
  },
})
