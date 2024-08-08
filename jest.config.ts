module.exports = {
  roots: [
    '<rootDir>/src',
    '<rootDir>/spec'
  ],
  transform: {
    '^.+\\.ts$': '@swc/jest',
  },
  collectCoverageFrom: [
    '**/*.{js,ts,jsx,tsx}',
    '!**/node_modules/**'
  ],
  coverageReporters: [
    'text'
  ],
  reporters: [
    ['summary', { summaryThreshold: 0 }],
    ['github-actions', { silent: false }]
  ],
  extensionsToTreatAsEsm: ['.jsx', '.ts', '.tsx'],
  verbose: true
};
