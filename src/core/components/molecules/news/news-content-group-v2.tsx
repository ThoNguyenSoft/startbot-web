/* eslint-disable @typescript-eslint/no-explicit-any */
import { TNewsItemV2 } from '@/types/forms/news'
import { FC } from 'react'
// ** Func Imports
import { displayFriendlyTime } from '@/lib/utils/date'
import { FullContentNews } from '../text'

type Props = {
  item: TNewsItemV2
}

const NewsContentItemGroupV2: FC<Props> = ({ item }) => {
  return (
    <div key={item.id} className='block w-full overflow-hidden border-b border-[#2C2C2C] p-4'>
      <div className='mb-4 flex justify-between gap-2'>
        {/* maybe use in the future */}
        {/* <span className='min-w-8 flex-wrap items-start justify-start gap-1.5 sm:block'>
          <Copy size={16} fill='#EBEBEB' />
        </span> */}
        <div className='hidden w-full sm:block'>
          <FullContentNews shortcuts={item.shortcuts} text={item.text} url={item.metadata.url} />
        </div>

        <div className='flex-col items-end gap-[30px]'>
          <span className='ml-1.5 whitespace-nowrap text-xs text-[#737373]'>
            {displayFriendlyTime(item?.metadata.publishedDate as unknown as any)}
          </span>
        </div>
      </div>
      <div className='w-full sm:hidden'>
        <FullContentNews shortcuts={item.shortcuts} text={item.text} url={item.metadata.url} />
      </div>
    </div>
  )
}

export default NewsContentItemGroupV2
