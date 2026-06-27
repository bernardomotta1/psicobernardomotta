import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsConfigPaths(), react()],
  publicDir: false,
  server: {
    host: "::",
    port: 8080,
  },
});
