import useUrl from '@/hooks/utils/useUrl'
import MarkDown from '../../mdx/MarkDown'

// ** Types Imports

type Props = { isSender: boolean; content: string }

const TextChat = ({ isSender, content }: Props) => {
  const { searchParams } = useUrl()
  const isMarkdown = searchParams.get('md')
  const widthItemChat = isMarkdown === 'false' ? 'w-100%' : 'w-fit'
  const isSenderChat = isSender ? 'ml-auto' : ''
  const bgChat = isSender ? 'bg-primary' : 'bg-background'
  const colorChat = isSender ? 'text-white' : 'text-black-500'
  return (
    <div className='mb-3 w-full'>
      <div
        className={`max-w-full rounded border border-divider shadow ${widthItemChat} word-wrap break-word p-3 md:p-4 ${isSenderChat} ${bgChat} ${colorChat}`}
      >
        {isMarkdown === 'false' ? (
          <p className=''>{content}</p>
        ) : (
          <>
            <MarkDown content={content} />
          </>
        )}
      </div>
    </div>
  )
}

export default TextChat
