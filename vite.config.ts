import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vitest/config";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
      environment: "jsdom",
      globals: true,
      setupFiles: './src/test/setup.ts',
  },
  server: {
    proxy: {
      '/api/weather': {
        target: 'https://ahi.ceoas.oregonstate.edu',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/weather/, '/archive/current/HMSC_current.dat'),
      }
    }
  }
});
