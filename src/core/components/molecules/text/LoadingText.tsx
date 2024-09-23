import { APP_CONFIG } from '@/core/configs/app-config'

const LoadingText = ({ text = 'Loading...' }) => {
  return <div className={`pl-${APP_CONFIG.Featured.Size.LOADING.PADDING_LEFT}`}>{text}</div>
}

export default LoadingText
