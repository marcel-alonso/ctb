import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './public/assets'),
    }
  },
  base: '/lp/forros-bambu/',
  build: {
    outDir: '../_site/lp/forros-bambu',
    emptyOutDir: true,
  }
})

