import { APP_CONFIG } from '@/core/configs/app-config'

const Empty = () => {
  return <div className={`pl-${APP_CONFIG.Featured.Size.LOADING.PADDING_LEFT}`}>No Content Found...</div>
}

export default Empty
