import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  clearMocks: true,
  coverageProvider: 'babel',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/jest/jest-setup.ts'],
  testEnvironment: 'jsdom',
  testMatch: ['**/?(*.)+(spec).[tj]s?(x)'],
};

const jestConfig = async () => {
  const nextJestConfig = await createJestConfig(customJestConfig)();
  return {
    ...nextJestConfig,
    moduleNameMapper: {
      '\\.svg$': '<rootDir>/__mocks__/svg.ts',
      ...nextJestConfig.moduleNameMapper,
    },
  };
};

export default jestConfig;
