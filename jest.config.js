export default {
  // isolatedModules: true,
  bail: true,
  verbose: true,
  preset: 'ts-jest',
  moduleFileExtensions: ['ts', 'js', 'jsx', 'tsx'],
  extensionsToTreatAsEsm: ['.ts'], // from ts-jest@27.0.0-next ?
  transformIgnorePatterns: ['node_modules/(?!lodash-es|lodash)'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1'
  },
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { useESM: true }]
    // '^.+\\.svg$': 'jest-svg-transformer'
  },
  testMatch: ['**/tests/**/*.test.ts', '<rootDir>/src/**/*.test.ts'],
  moduleDirectories: [
    'node_modules' //これは必須です
  ],
  // testEnvironment: 'jest-environment-node',
  testEnvironment: 'node'
}
