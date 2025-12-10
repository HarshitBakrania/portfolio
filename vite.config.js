import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve, dirName } from 'path';
import { fileURLToPath } from 'url';


export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@components" : resolve(dirName(fileURLToPath(import.meta.url)), 'components'),
      "@constants" : resolve(dirName(fileURLToPath(import.meta.url)), 'constants'),
      "@store" : resolve(dirName(fileURLToPath(import.meta.url)), 'store'),
      "@hoc" : resolve(dirName(fileURLToPath(import.meta.url)), 'hoc'),
      "@windows" : resolve(dirName(fileURLToPath(import.meta.url)), 'windows'),
    }
  }
})
