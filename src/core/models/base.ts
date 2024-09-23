import authConfig from '../configs/auth/authConfig'

// import { ADMIN_PAGE } from '@/configs/configuration'
import axios, { AxiosRequestConfig } from 'axios'

import cookies from 'js-cookie'
import { ADMIN_PAGE } from '../configs/app-config'

export class BaseModel {
  public request(params: AxiosRequestConfig & { endpoint?: string }) {
    try {
      const { method, url, data, headers, endpoint } = params
      const accessToken = cookies.get(authConfig.storageTokenKeyName)

      const configuration: AxiosRequestConfig = {
        headers: {
          ...headers,
          Authorization: `Bearer ${accessToken}`
        },
        url: url ? url : `${ADMIN_PAGE.BASE_URL}/${endpoint}`,
        method: method ? method : 'GET',
        data: method?.toUpperCase() !== 'GET' ? data : null,
        params: method?.toUpperCase() === 'GET' ? data : null
      }

      return axios(configuration)
    } catch (error) {
      console.error(error)

      throw error
    }
  }
}
