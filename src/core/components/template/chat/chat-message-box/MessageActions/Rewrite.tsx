import { ArrowLeftRight } from 'lucide-react'

const Rewrite = ({ rewrite, messageId }: { rewrite: (messageId: string) => void; messageId: string }) => {
  return (
    <button
      onClick={() => rewrite(messageId)}
      className='flex flex-row items-center space-x-1 rounded-xl px-3 py-2 text-white/70 transition duration-200 hover:bg-[#1c1c1c] hover:text-white'
    >
      <ArrowLeftRight size={18} />
      <p className='text-xs font-medium'>Rewrite</p>
    </button>
  )
}

export default Rewrite
