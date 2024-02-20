import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { configDefaults } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    coverage: {
      provider: 'istanbul', // or 'v8',
      reporter: ['html', 'lcov']
    },
    globals: true,
    environment: 'happy-dom',
    include: ['tests/unit/**/*.spec.*'],
    exclude: [...configDefaults.exclude, '**/playwright/**', '**/cypress/**', '**/dev/**'],
    mockReset: true,
    restoreMocks: true,
    testTimeout: false ? 30000 : 10000,
    hookTimeout: false ? 30000 : 10000,
    teardownTimeout: false ? 30000 : 10000,
    reporters: ['verbose'],
    setupFiles: ['./tests/bootstrap.js']
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '/@/vuuri': path.resolve(__dirname, 'src'),
      '@vuuri': path.resolve(__dirname, 'src'),
      '@test': path.resolve(__dirname, 'tests')
    }
  }
});
