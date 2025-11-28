import { defineConfig } from 'vitest/config'; // Correct import path for defineConfig
import path from 'path';

export default defineConfig({
  test: {
    include: ['test/integration/**/*.test.ts'], // Define the directory for integration tests
    globals: true, // Enable global variables like `describe`, `it`, etc.
    environment: 'node', // Use Node.js environment for integration tests
    setupFiles: path.resolve(__dirname, 'test/integration/setup.ts'), // Optional setup file for integration tests
    reporters: 'verbose', // Use a verbose reporter for detailed test output
    coverage: {
      reporter: ['text', 'json', 'html'], // Generate coverage reports in multiple formats
      include: ['app/**/*.ts', 'app/**/*.tsx'], // Include app files for coverage
      exclude: ['test/**'], // Exclude test files from coverage
    },
  },
});