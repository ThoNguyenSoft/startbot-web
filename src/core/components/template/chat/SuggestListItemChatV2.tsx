import { useWls } from '@/hooks/context/useWls'
import { ArrowRight } from 'public/icons'
import React, { ReactNode } from 'react'

type SuggestListItemChatProps = {
  title: string
  handleClickItemSuggest: (item: string) => void
  Icon?: ReactNode
}

const SuggestListItemChatV2: React.FC<SuggestListItemChatProps> = ({ title, handleClickItemSuggest }) => {
  const { keyNews } = useWls()

  return (
    <>
      <div className='w-full text-[16px] text-[#FFFFFF]'>
        <span className='flex items-center gap-1 font-semibold'>{title}</span>
      </div>
      <div className='flex flex-wrap justify-between gap-2 pl-1 pt-1'>
        {keyNews?.slice(0, 4)?.map(item => (
          <button
            key={item.value}
            className='flex w-full cursor-pointer items-center justify-between gap-1 rounded-[5px] border border-border-third bg-[#1E1E1E] p-3 text-start text-sm text-[#EBEBEB] hover:text-primary-yellow'
            onClick={() => handleClickItemSuggest(item.value)}
          >
            {item.value}{' '}
            <div className='w-6'>
              <ArrowRight fill='#EBEBEB' />
            </div>
          </button>
        ))}
      </div>
    </>
  )
}

export default SuggestListItemChatV2
