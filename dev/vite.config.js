import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: true,
    port: 3000
  },
  resolve: {
    alias: {
      '@vuuri': path.resolve(__dirname, '../src/index.js')
    }
  }
})
