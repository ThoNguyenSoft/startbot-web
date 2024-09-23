/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react'
import SuggestStockV2 from '../mobile/news-wrap/SuggestStockV2'

type TProps = {
  clickResetQuery: () => void
}

const HeaderStockWrap: FC<TProps> = ({ clickResetQuery }) => {
  return (
    <div className='flex justify-between px-3 md:items-center md:p-3 md:pr-2.5'>
      <div className='mb-6 flex items-center gap-3 text-[20px] font-bold md:m-0 md:p-0'>
        <button className='p-0 text-start' onClick={clickResetQuery}>
          Watchlist{' '}
        </button>{' '}
        <div className='md:hidden'>
          <SuggestStockV2 />
        </div>
      </div>
    </div>
  )
}

export default HeaderStockWrap
