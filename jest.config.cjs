/**
 * Jest configuration for integration tests
 * Tests: DAO → Mapper → Zod validation
 */
module.exports = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  roots: ['<rootDir>/tests/integration', '<rootDir>/schemas'],
  setupFiles: ['<rootDir>/tests/setupEnv.js'],
  globalSetup: '<rootDir>/tests/integration/setup.ts',
  testMatch: ['**/tests/integration/**/*.test.ts', '**/schemas/dto/**/*.test.ts'],
  extensionsToTreatAsEsm: ['.ts'],
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        useESM: true,
        isolatedModules: true,
        diagnostics: false, // Disable all TypeScript diagnostics for runtime testing
        tsconfig: {
          module: 'ESNext',
          moduleResolution: 'node',
          allowImportingTsExtensions: true,
          noEmit: true,
        },
      },
    ],
    '^.+\\.m?js$': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(@prisma)/)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testTimeout: 30000, // 30s for DB operations
  collectCoverageFrom: [
    'dao/**/*.ts',
    'schemas/dto/**/*.mappers.ts',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
};
