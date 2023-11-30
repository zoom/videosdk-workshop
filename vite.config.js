import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import express from "./express-plugin";
import crossOriginIsolation from "vite-plugin-cross-origin-isolation";
import dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  plugins: [react(), express("src/server"), crossOriginIsolation()],
  build: {
    outDir: "dist",
  },
});
