import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import istanbul from 'vite-plugin-istanbul';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    istanbul({
      cwd: path.resolve(__dirname, '..'),
      include: `src/**/*`,
      exclude: ['node_modules', 'e2e', 'playwright.config.ts'],
      requireEnv: false
    })
  ],
  build: {
    sourcemap: true
  },
  server: {
    host: true,
    port: 3000
  }
});
