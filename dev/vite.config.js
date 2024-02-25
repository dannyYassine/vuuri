import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
import istanbul from 'vite-plugin-istanbul';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), istanbul({
    include: '@vuuri/**/*',
    exclude: ['node_modules', 'tests/'],
    extension: [ '.js', '.ts', '.vue' ],
    requireEnv: false,
    checkProd: false,
  }),],
  build: {
    sourcemap: 'inline'
  },
  server: {
    host: true,
    port: 3000
  },
  resolve: {
    alias: {
      '@vuuri': path.resolve(__dirname, '../src/index.js')
    }
  },
})
