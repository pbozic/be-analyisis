/**
 * Unified Jest configuration supporting both JS and TS tests.
 * - Uses ts-jest preset so TypeScript tests run
 * - Keeps setupFiles from previous config
 * - Matches both .test.js and .test.ts files
 */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['<rootDir>/tests/setupEnv.js'],
  testMatch: ['**/tests/**/*.test.js', '**/tests/**/*.test.ts', '**/?(*.)+(spec|test).ts?(x)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
