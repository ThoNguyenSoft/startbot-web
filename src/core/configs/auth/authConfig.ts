const authConfig = {
  is_uat: 'is_uat',
  meEndpoint: '/auth/me',
  loginEndpoint: '/jwt/sign-in',
  registerEndpoint: '/jwt/register',
  storageTokenKeyName: 'access_token',
  onTokenExpiration: 'refreshToken' // logout | refreshToken
}

export default authConfig
