import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port: 1131,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:1130"
      }
    }
  }
})
