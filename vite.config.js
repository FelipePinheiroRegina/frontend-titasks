import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Esta linha permite acesso externo
    port: 5173, // Porta que você deseja usar
  }
})
