import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'spa-github-pages-fallback',
      closeBundle() {
        const index = resolve('dist/index.html')
        copyFileSync(index, resolve('dist/404.html'))
      },
    },
  ],
  base: '/NewPortfolioSite/',
})
