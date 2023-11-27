/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    collectCoverageFrom: [
      '<rootDir>/src/**/*.ts',
    ],
    coveragePathIgnorePatterns: ['/node_modules/', '//*.html', '/src/index.ts'],
    coverageReporters: ['cobertura', 'lcov'],
    preset: "ts-jest",
    testEnvironment: "node",
    randomize: true,
    transform: {
      "^.+\\.ts?$": ["ts-jest", { isolatedModules: true }],
    },
    modulePathIgnorePatterns: ["<rootDir>/build/*"],
    moduleDirectories: ['node_modules'],
    testPathIgnorePatterns: ['/node_modules/'],
    reporters: ['default']
  };
  