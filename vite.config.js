import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/motionwell-clinic/",
  plugins: [react()],
  build: {
    outDir: "dist",
    assetsInlineLimit: 4096,
  },
});