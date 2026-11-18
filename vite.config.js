import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/-md-fahim-01.github.motionwell-clinic/",
  plugins: [react()],
  build: {
    outDir: "dist",
    assetsInlineLimit: 4096,
  },
});