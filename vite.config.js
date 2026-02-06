import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  screens: {
    theme: {
    screens: {
      esm:'320px',
      sm: '480px',   
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
  },},
  plugins: [react(), tailwindcss(),],
  server: {
    port: 5173,      
    strictPort: true
  }
  
})
