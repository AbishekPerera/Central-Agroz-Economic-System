module.exports = {
  moduleNameMapper: {
    '\\.css$': '<rootDir>/src/__mocks__/styleMock.js',
    '\\.(png|jpg|jpeg|gif|svg)$': '<rootDir>/src/img/img-mock.js',
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  testEnvironment: 'jsdom',
  transformIgnorePatterns: [
    '/node_modules/(?!axios)/' // Ignore transformation for axios module
  ]
};
