import Link from 'next/link'
import { LinkNextIcon } from 'public/icons'
// ** Third Party Imports
import { getNameSoChart } from '@/core/configs/app-config'
import { cn } from '@/lib/utils/utils'
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
    title?: string
    url: string
    likes: number
    interactions: number
    stockSymbols: string[]
  }
  text: string
  id: string
}
type Props = {
  data: PostItem[]
  fetchNextPage: () => void
  hasNextPage?: boolean
  isLoading: boolean
  className?: string
  cnContent?: string
}
const ListCommentNewsLargeWl = ({
  fetchNextPage,
  data,
  hasNextPage,
  cnContent,
  isLoading = false,
  className
}: Props) => {
  return (
    <div className={className}>
      <div className='mb-4 text-2xl font-semibold text-white'>🗣️ What is the community saying?</div>

      {data?.length > 0 && (
        <div className={cn('flex w-full flex-wrap gap-x-3 gap-y-4 overflow-auto', cnContent)}>
          {data.map(item => (
            <div
              key={item.id}
              className='flex h-fit max-h-[310px] w-full max-w-[360px] flex-col justify-between overflow-hidden rounded-[8px] bg-[#1E1E1E] p-4 xl:min-w-[48%] xl:max-w-[48%] xl:flex-1 2xl:min-w-[30%] 2xl:max-w-[30%]'
            >
              <div className=''>
                <div className='mb-[6px] text-base font-semibold text-white'>
                  {/* {item.metadata.title ? item.metadata.title : item.text.split('.')[0]?.toString()?.trim()} */}
                  {item?.metadata?.title}
                </div>
              </div>
              <div className='h-full max-h-full overflow-auto break-words text-sm leading-[28px] text-[#E1E7EF]'>
                <div className='h-full max-h-full overflow-auto text-sm leading-[28px] text-[#E1E7EF]'>{item.text}</div>
              </div>
              <div className='mt-[10px] flex items-center justify-between'>
                <span className='text-[13px] text-[#D7F77D]'>
                  {/* <StockIcon3 />  */}
                  {getNameSoChart(item.metadata.type)}
                </span>
                <Link className='dark' target='_blank' href={item?.metadata?.url} passHref>
                  <LinkNextIcon isHovered size={13} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
      <LoadingBase isLoading={isLoading} />
      {data.length > 0 && hasNextPage && (
        <ButtonSecOne className='w-full max-w-full' disabled={isLoading} onClick={fetchNextPage} title='See more' />
      )}
    </div>
  )
}
export default ListCommentNewsLargeWl
