export default {
  // isolatedModules: true,
  bail: true,
  verbose: true,
  preset: 'ts-jest',
  moduleFileExtensions: ["ts", "js", "jsx", "tsx"],
  extensionsToTreatAsEsm: [".ts"], // from ts-jest@27.0.0-next ?
  transformIgnorePatterns: ["node_modules/(?!lodash-es|lodash)"],
  moduleNameMapper: {
    "^~/(.+)": "<rootDir>/src/$1",
    "^~lib/(.+)": "<rootDir>/src/lib/$1"
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    "^.+\\.svg$": "jest-svg-transformer"
  },
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json",
      useESM: true
    },
    "window": {}
  },
  testMatch: [
    "**/tests/**/*.test.ts",
    "<rootDir>/src/**/*.test.ts"
  ],
  moduleDirectories: [
    'node_modules', //これは必須です
  ],
  // testEnvironment: 'jest-environment-node',
  testEnvironment: 'node',
}