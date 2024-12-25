import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/profile/',
  build: {
    rollupOptions: {
      // https://rollupjs.org/configuration-options/
    },
  },
})
