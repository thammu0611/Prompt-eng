import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// SINGLE=1 npm run build  ->  builds one self-contained index.html (used for the preview link)
const single = process.env.SINGLE === '1'

export default defineConfig({
  base: './',
  plugins: single ? [react(), viteSingleFile()] : [react()],
  build: {
    outDir: single ? 'dist-single' : 'dist',
  },
})
