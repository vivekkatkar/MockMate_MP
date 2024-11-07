// frontend/vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'public'  // Matches Vercel's expected output directory
  }
})
