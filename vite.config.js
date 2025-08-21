import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],
  base: mode === 'production' ? '/seamTrack/' : '/',
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    hmr: {
      host: 'localhost',
      port: 3000
    },
    allowedHosts: ['seamtrack.loca.lt', 'localhost'],
  },
}))
