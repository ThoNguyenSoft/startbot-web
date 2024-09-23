import { ArChatActive, ArChatLowOpacity } from 'public/icons'

//type
type ButtonSubmitProps = {
  message: string
  loading: boolean
}

const ButtonSubmitArrowUp = ({ message, loading }: ButtonSubmitProps) => {
  return (
    <button
      type='submit'
      disabled={message.trim().length === 0 || loading}
      className='cursor-pointer rounded-full bg-primary-yellow text-[#212121] shadow-sm transition duration-100 hover:bg-opacity-[80] disabled:bg-[#e0e0e0]'
    >
      {message.trim().length === 0 || loading ? <ArChatLowOpacity /> : <ArChatActive />}
    </button>
  )
}

export default ButtonSubmitArrowUp
