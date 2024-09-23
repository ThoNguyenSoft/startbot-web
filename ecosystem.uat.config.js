const dotenv = require('dotenv')

// Function to load environment variables from a file
const loadEnv = path => {
  const result = dotenv.config({ path })
  if (result.error) {
    throw result.error
  }
  return result.parsed
}

module.exports = {
  apps: [
    {
      name: 'uat-crypto-ai-web',
      script: 'npm',
      args: 'run start:deploy',
      watch: true,
      env: {
        ...loadEnv('.env'),
        APP_ENV: 'uat',
        PORT: 9103
      }
    }
  ]
}
