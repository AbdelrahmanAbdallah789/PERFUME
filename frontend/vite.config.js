import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": "https://perfume-h8om.vercel.app",
      "/uploads/": "https://perfume-h8om.vercel.app",
    },
  },
});