import { isMobileOrTablet } from '@/lib/utils/utils'
import { useEffect, useState } from 'react'

const useDevice = () => {
  const [flag, setFlag] = useState(false)
  const [device, setDevice] = useState<boolean>(false)

  useEffect(() => {
    setFlag(true)
    if (isMobileOrTablet()) {
      return setDevice(isMobileOrTablet())
    }
  }, [isMobileOrTablet()])

  return { device, flag }
}

export default useDevice
