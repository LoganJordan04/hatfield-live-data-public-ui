import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
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
