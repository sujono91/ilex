module.exports = {
    preset: 'ts-jest',
    globals: {
      'ts-jest': {
        tsConfig: '<rootDir>/tsconfig.test.json'
      }
    },
    roots: ['<rootDir>/src/'],
    moduleNameMapper: {
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|md)$':
        '<rootDir>/src/__mocks__/fileMock.ts',
      '\\.(css|less|scss)$': '<rootDir>/src/__mocks__/styleMock.ts'
    },
    collectCoverage: false,
    collectCoverageFrom: [
      'src/**/*.{js,ts,tsx}',
      '!src/IconLibrary.ts',
      '!src/index.tsx',
      '!src/typings.d.ts'
    ],
    transform: {
      '^.+\\.tsx?$': 'ts-jest'
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    testPathIgnorePatterns: ['/__tests__/.*\\.common\\.'],
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    modulePaths: ["<rootDir>/src/"]
  };
  