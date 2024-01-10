module.exports={
preset: 'jest-preset-angular',
roots:['src'],
testMatch:['**/*.spec.ts'],
setupFilesAfterEnv:['<rootDir>/src/test.ts'],
modulePaths:['<rootDir>'],
testEnvironments:'jsdom',
coveragePathlgnorePatterns:[
    '/node_modules/',
    'src/ui-tests/',
    'src/assets',
    'src/environments/'
]
}
