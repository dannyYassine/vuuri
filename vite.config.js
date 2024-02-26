import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { configDefaults } from 'vitest/config';
import istanbul from 'vite-plugin-istanbul';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['html', 'lcov'],
      reportsDirectory: './tests/unit/coverage'
    },
    globals: true,
    environment: 'happy-dom',
    include: ['tests/unit/**/*.spec.*'],
    exclude: [...configDefaults.exclude, '**/playwright/**', '**/cypress/**', '**/dev/**', '**/docs/**'],
    mockReset: true,
    restoreMocks: true,
    testTimeout: false ? 30000 : 10000,
    hookTimeout: false ? 30000 : 10000,
    teardownTimeout: false ? 30000 : 10000,
    reporters: ['verbose'],
    setupFiles: ['./tests/bootstrap.js']
  },
  plugins: [
    istanbul({
      include: 'src/**/*',
      exclude: ['node_modules', 'tests/'],
      extension: [ '.js', '.ts', '.vue' ],
      requireEnv: false,
      checkProd: false,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@test': path.resolve(__dirname, 'tests')
    }
  }
});
