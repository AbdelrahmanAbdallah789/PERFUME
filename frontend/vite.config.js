import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": VITE_API_URL,
      "/uploads/": VITE_API_URL,
    },
  },
});