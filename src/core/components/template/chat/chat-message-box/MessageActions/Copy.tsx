import { Message } from '@/types/apps/chatTypes'
import { Check } from 'lucide-react'
import removeMarkdown from 'markdown-to-text'
import { CopyIcon2 } from 'public/icons'
import { useState } from 'react'

const Copy = ({ initialMessage }: { message: Message; initialMessage: string }) => {
  const [copied, setCopied] = useState(false)
  const copyToClipboard = () => {
    // const cleanedContent = initialMessage.replace(/[*_~`]/g, '')
    // const cleanedContent = cleanText(initialMessage)?.toString()

    const cleanedContent = removeMarkdown(initialMessage)

    navigator?.clipboard
      ?.writeText(cleanedContent)
      .then(() => {
        console.log('Text copied to clipboard')
      })
      .catch(err => {
        console.error('Failed to copy text: ', err)
      })
    setCopied(true)
    setTimeout(() => setCopied(false), 1000)
  }

  return (
    <button
      onClick={copyToClipboard}
      // className='rounded-xl p-2 text-white/70 transition duration-200 hover:bg-[#1c1c1c] hover:text-white'
      className='rounded-xl p-2 text-white/70 transition duration-200 hover:text-white'
    >
      {/* {copied ? <Check size={18} /> : <ClipboardList size={18} />} */}
      {copied ? <Check size={18} /> : <CopyIcon2 size={18} />}
    </button>
  )
}

export default Copy
