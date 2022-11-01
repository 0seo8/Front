import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import svgr from 'vite-plugin-svgr'
import dns from 'dns'

dns.setDefaultResultOrder('verbatim')

// https://vitejs.dev/config/
const __dirname = 'src'
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: [{ find: '~', replacement: resolve(__dirname) }],
  },
  server: {
    port: 3000,
    // proxy: {
    //   '/api': {
    //     target: 'http://43.200.38.47:9090',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, ''),
    //     secure: false,
    //     ws: true,
    //   },
    // },
  },
})
