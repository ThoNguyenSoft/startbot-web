/* eslint-disable @typescript-eslint/no-explicit-any */
import { TNewsItemV2 } from '@/types/forms/news'
import { FC } from 'react'
// ** Func Imports
import { FullContentNews } from '@/core/components/molecules/text'
import { displayFriendlyTime } from '@/lib/utils/date'
import TagsItemNews from './TagsItemNews'

type Props = {
  item: TNewsItemV2
  symbols?: string[] | undefined
}

const NewsContentItemV2: FC<Props> = ({ item, symbols }) => {
  return (
    <div key={item.id} className='block w-full overflow-hidden border-b border-[#2C2C2C] p-4'>
      <div className='mb-4 flex justify-between gap-2'>
        <span className='flex min-w-8 flex-wrap items-start justify-start gap-1.5'>
          {item?.metadata?.stockSymbols?.map(tag => <TagsItemNews tag={tag} key={tag} symbols={symbols} />)}
        </span>
        <div className='flex flex-col items-end gap-[30px]'>
          <span className='ml-1.5 min-w-[60px] whitespace-nowrap text-xs text-[#737373]'>
            {displayFriendlyTime(item?.metadata?.publishedDate as unknown as any)}
          </span>
        </div>
      </div>
      <FullContentNews shortcuts={item?.shortcuts} text={item?.text} url={item?.metadata?.url} />
    </div>
  )
}

export default NewsContentItemV2
