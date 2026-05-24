import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const repoBase = process.env.VITE_BASE || '/'

export default defineConfig({
  base: repoBase,
  plugins: [react(), tailwindcss()],
})
