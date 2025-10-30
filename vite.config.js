import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/MJ/", // ?? must exactly match your repo name (case-sensitive!)
  build: {
    outDir: "dist",
  },
});

