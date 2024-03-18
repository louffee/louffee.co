/// <reference types="vitest" />
/// <reference types="vitest/globals" />
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    include: ['**/*.{test,spec}.?(c|m)ts?(x)'],
    environment: 'jsdom',
    setupFiles: ['./_/env/vitest-setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['lcov'],
    },
  },
  plugins: [react(), tsconfigPaths()],
  ssr: {
    target: 'node',
  },
  define: {
    'import.meta.vitest': undefined,
  },
  css: {
    postcss: require('./postcss.config.cjs'),
  },
})
