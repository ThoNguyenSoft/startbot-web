import Link from 'next/link'
import { LinkNextIcon, StockIcon3 } from 'public/icons'
// ** Third Party Imports
import { cn } from '@/lib/utils/utils'
import { TDiscussItem } from '@/types/forms/discuss'
import { ButtonSecOne } from '../button/secondary'
import { LoadingBase } from '../loading'

type PostItem = {
  metadata: {
    shares: number
    comments: number
    siteId: string
    siteName: string
    publishedDate: string
    type: string
    title: string
    url: string
    likes: number
    interactions: number
    stockSymbols: string[]
  }
  text: string
  id: string
}
type Props = {
  data: TDiscussItem[]
  fetchNextPage: () => void
  hasNextPage?: boolean
  isLoading: boolean
  className?: string
  cnContent?: string
}
const ListCommentNewsLarge = ({ fetchNextPage, data, cnContent, isLoading = false, className }: Props) => {
  return (
    <div className={className}>
      <div className='mb-4 text-2xl font-semibold text-white'>🗣️ What is the community saying?</div>
      <div className={cn('flex w-full flex-wrap gap-3 overflow-auto', cnContent)}>
        {data.map((item, index) => (
          <div
            key={index}
            className='flex h-fit max-h-[310px] w-full max-w-[360px] flex-col justify-between overflow-hidden rounded-[8px] bg-[#1E1E1E] p-4 xl:min-w-[48%] xl:max-w-[48%] xl:flex-1 2xl:min-w-[30%] 2xl:max-w-[30%]'
          >
            <div className=''>
              <div className='mb-[6px] text-base font-semibold text-white'>{item.metadata.title}</div>
            </div>
            <div className='h-full max-h-full overflow-auto break-words text-sm leading-[28px] text-[#E1E7EF]'>
              <div className='h-full max-h-full overflow-auto text-sm leading-[28px] text-[#E1E7EF]'>{item.text}</div>
            </div>
            <div className='mt-[10px] flex items-center justify-between'>
              <span>
                <StockIcon3 />
              </span>
              <Link className='dark' target='_blank' href={item.metadata.url} passHref>
                <LinkNextIcon isHovered size={13} />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <LoadingBase isLoading={isLoading} />

      <ButtonSecOne className='w-full max-w-full' disabled={isLoading} onClick={fetchNextPage} title='See more' />
    </div>
  )
}
export default ListCommentNewsLarge
