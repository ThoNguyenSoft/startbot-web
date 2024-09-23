import { useState } from 'react'

const useHostName = (param: string) => {
  const [hostName] = useState<string | undefined>(() => {
    if (typeof window !== 'undefined') {
      const hostname = window.localStorage.getItem('hostname')
      return hostname || undefined
    }
  })

  return {
    // redirect_url: `https://${hostName === 'uat.stockai.vn' ? 'uat.stockai.vn' : 'stockai.vn'}${param}`,
    redirect_url: `http://${hostName === 'uat.stockai.vn' ? 'uat.stockai.vn' : 'localhost:3000'}${param}`,
    hostName
  }
}

export default useHostName
