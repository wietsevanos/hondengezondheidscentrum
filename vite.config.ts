import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// Pure static SPA build. `vite build` produces a `dist/` folder
// containing index.html, hashed JS/CSS, and copied public/ assets.
// Upload the contents of `dist/` to your hosting's public_html.
export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  base: "./",
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
