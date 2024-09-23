import { StartGoldIcon } from 'public/icons'
import React, { ReactNode } from 'react'

type SuggestListItemChatProps = {
  suggestData: string[]
  title: string
  handleClickItemSuggest: (item: string) => void
  Icon?: ReactNode
}

const SuggestListItemChat: React.FC<SuggestListItemChatProps> = ({
  title,
  suggestData,
  handleClickItemSuggest,
  Icon = <StartGoldIcon />
}) => {
  return (
    <div className='w-full rounded-[5px] border border-border-third bg-[#1E1E1E] p-3 text-sm'>
      <span className='flex items-center gap-1 font-semibold'>
        {/* <StartGoldIcon /> {title} */}
        {Icon && Icon} {title}
      </span>
      <div className='flex flex-wrap justify-between pl-1 pt-1'>
        {suggestData?.map((item: string) => (
          <li
            key={item}
            className='cursor-pointer marker:text-primary-yellow hover:text-primary-yellow'
            onClick={() => handleClickItemSuggest(item)}
          >
            {item}
          </li>
        ))}
      </div>
    </div>
  )
}

export default SuggestListItemChat
