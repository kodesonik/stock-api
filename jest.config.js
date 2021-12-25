module.exports = {
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  collectCoverageFrom: ['**/src/**/*.ts', '!**/src/drivers/**'],
  testTimeout: 20000
}
