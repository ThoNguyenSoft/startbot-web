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
      name: 'uat-stock-ai-web',
      script: 'npm',
      args: 'run start:deploy',
      watch: true,
      env: {
        APP_ENV: 'uat',
        NEXT_PUBLIC_SUPABASE_URL: 'https://supabase.stockai.vn',
        NEXT_PUBLIC_API_URL: 'https://uat-api.stockai.vn',
        NEXT_PUBLIC_SOCKET_URL: 'wss://uat-ws.stockai.vn',
        PORT: 9101
      }
    }
  ]
}
