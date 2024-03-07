import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { configDefaults } from 'vitest/config';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts()],
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['html', 'json'],
      reportsDirectory: './unit-coverage'
    },
    globals: true,
    environment: 'happy-dom',
    include: ['tests/unit/**/*.spec.*'],
    exclude: [...configDefaults.exclude, '**/playwright/**', '**/dev/**', '**/docs/**'],
    mockReset: true,
    restoreMocks: true,
    testTimeout: false ? 30000 : 10000,
    hookTimeout: false ? 30000 : 10000,
    teardownTimeout: false ? 30000 : 10000,
    reporters: ['verbose'],
    setupFiles: ['./tests/bootstrap.js']
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'Vuuri',
      fileName: 'vuuri'
    },
    outDir: path.resolve(__dirname, 'dist')
  },
  rollupOptions: {
    external: ["vue"],
    output: {
      globals: {
        vue: "Vue",
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@test': path.resolve(__dirname, 'tests')
    }
  }
});
