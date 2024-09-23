import { useWls } from '@/hooks/context/useWls'
import { TSymb } from '@/types/apps/business-profile'
import { SearchIcon, StartGoldIcon, StartIcon } from 'public/icons'
import React from 'react'

type ItemSearchWLProps = {
  data: TSymb[]
  clickItemWL: (symbol: string) => void
}

const ListItemSearchWLV2: React.FC<ItemSearchWLProps> = ({ data, clickItemWL }) => {
  const { myWls, handleAddWatchlist, handleRemoveWatchlist, stock_code } = useWls()

  return (
    <div className={`mt-3 flex h-[300px] w-full flex-col overflow-auto pl-2 font-semibold text-textDefault`}>
      {data?.length ? (
        data?.map(item => (
          <>
            <div
              key={item?.id}
              className={
                stock_code === item?.id
                  ? 'relative my-1 box-border flex w-full cursor-pointer items-center justify-between rounded-md bg-[#1C2C43] px-[10px] py-0'
                  : 'relative my-1 box-border flex w-full cursor-pointer items-center justify-between rounded-md px-[10px] py-0 hover:bg-[#1C2C43]'
              }
            >
              <button
                type='button'
                // onClick={clickItemWL.bind(null, item?.id)}
                className={
                  stock_code === item?.id
                    ? 'relative my-1 box-border flex w-full cursor-pointer flex-col items-start justify-center rounded-md bg-[#1C2C43] px-[10px] py-0'
                    : 'relative my-1 box-border flex w-full cursor-pointer flex-col items-start justify-center rounded-md px-[10px] py-0 hover:bg-[#1C2C43]'
                }
              >
                <div className='flex min-w-10 text-[14px] leading-[24px] text-textDefault-third'>
                  {item?.name?.toUpperCase()}
                </div>
                <div className='flex w-full max-w-[300px] gap-1 text-start text-[14px] text-textDefault-fourth'>
                  {item.symbol}
                </div>
              </button>
              {myWls.includes(item?.id) ? (
                <button className='' onClick={() => handleRemoveWatchlist(item?.id)}>
                  <StartGoldIcon />
                </button>
              ) : (
                <button className='' onClick={() => handleAddWatchlist(item?.id)}>
                  <StartIcon />
                </button>
              )}
            </div>
          </>
        ))
      ) : (
        <div className='mt-3 flex size-full max-w-[260px] flex-col items-center gap-1 text-center text-[14px] text-textDefault-fourth'>
          <span className='flex gap-1'>
            <SearchIcon size={20} />
            No data available
          </span>
          <div className=''>Please enter another keyword</div>
        </div>
      )}
    </div>
  )
}

export default ListItemSearchWLV2
