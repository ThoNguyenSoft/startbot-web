import { limitTextContent } from '@/lib/utils/format'
import { cn } from '@/lib/utils/utils'
import Link from 'next/link'
import { ArrowDownDoubleUp, LinkNextIcon } from 'public/icons'
import { useState } from 'react'

type TProps = {
  text?: string
  shortcuts?: string[]
  url?: string
  className?: string
}

const FullContentNews = ({ text, shortcuts, url, className }: TProps) => {
  const [showFullContent, setShowFullContent] = useState(false)
  const clickToggleContent = () => {
    setShowFullContent(prev => !prev)
  }
  return (
    <div className={cn('flex w-full flex-col', className)}>
      <div className='w-full'>
        {!showFullContent && shortcuts && shortcuts?.length > 0
          ? shortcuts?.map(shortcut => (
              <p
                key={shortcut}
                className='block w-full cursor-pointer hover:text-primary-yellow'
                onClick={clickToggleContent}
              >
                {/* {shortcuts?.length > 1 ? '•' : ''} {shortcut} */}
                {shortcuts?.length > 1 ? '•' : ''} {limitTextContent(shortcut)}
              </p>
            ))
          : null}
        {/* {!showFullContent && shortcuts?.length === 0 && ( */}
        {!showFullContent && !shortcuts?.length && (
          <p className='block w-full cursor-pointer hover:text-primary-yellow' onClick={clickToggleContent}>
            {/* {text} */}
            {limitTextContent(text)}
          </p>
        )}
        {showFullContent && (
          <p
            className={
              showFullContent
                ? 'block w-full cursor-pointer hover:text-primary-yellow'
                : 'relative line-clamp-1 w-full cursor-pointer pr-3 hover:text-primary-yellow'
            }
            onClick={clickToggleContent}
          >
            {text}
          </p>
        )}
      </div>
      {showFullContent ? (
        <div className='mt-3 flex w-full justify-end gap-3'>
          <button className='' onClick={clickToggleContent}>
            <ArrowDownDoubleUp />
          </button>
          {url && (
            <Link className='' target='_blank' href={url} passHref>
              <LinkNextIcon size={16} />
            </Link>
          )}
        </div>
      ) : null}
    </div>
  )
}

export default FullContentNews
