import { views } from '@/core/configs/app-config'
import React, { Dispatch, SetStateAction } from 'react'

type Props = {
  view: string
  setView: Dispatch<SetStateAction<string>>
}

const HeaderTabsNews: React.FC<Props> = ({ view, setView }) => {
  return (
    <div className='flex gap-[34px] font-semibold text-[#737373]'>
      <button className={view === views.news ? 'text-[#FFFFFF]' : ''} onClick={() => setView(views.news)}>
        News
      </button>
      <button className={view === views.social ? 'text-[#FFFFFF]' : ''} onClick={() => setView(views.social)}>
        Social
      </button>
    </div>
  )
}

export default HeaderTabsNews
