import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import express from './express-plugin'
import dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  plugins: [react(), express('src/server')],
  build: {
    outDir: "dist",
  },
});
