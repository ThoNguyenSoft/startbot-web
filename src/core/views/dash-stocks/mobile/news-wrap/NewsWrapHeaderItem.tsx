// ** React Party Imports
import { Fragment } from 'react'

// ** Hooks Party Imports

// ** Icons Imports

// ** Component Imports
import ChipTextCrypto from '@/core/components/molecules/chip/chip-text-crypto'
import useGetRealtimeCryptPrice from '@/hooks/watchlists/useGetRealtimeCryptPrice'

const NewsWrapHeaderItem = ({ id }: { id: string }) => {
  const { data: item } = useGetRealtimeCryptPrice(id)

  return (
    <li
      className={
        // !filterMode
        // ? `${stock_code === item || screener_code?.includes(item) ? 'relative my-1 box-border flex h-[60px] w-fit cursor-pointer flex-col items-center justify-center rounded-[4px] border border-[#737373] bg-[#1C2C43] px-[10px] py-0' : 'relative my-1 box-border flex h-[60px] w-fit cursor-pointer flex-col items-center justify-center rounded-[4px] border border-[#737373] bg-[#141414] px-[10px] py-0'}`
        // : `${stock_code === item || screener_code?.includes(item) ? 'relative my-1 box-border flex h-[60px] w-full min-w-[100px] max-w-[100px] cursor-pointer items-center justify-center gap-3 bg-[#141414] px-[10px] py-0' : 'relative my-1 box-border flex h-[60px] w-fit cursor-pointer flex-row items-center justify-center rounded-[4px] border border-[#737373] bg-[#141414] px-[10px] py-0'}`
        'relative my-1 box-border flex h-[60px] w-fit cursor-pointer flex-col items-center justify-center rounded-[4px] border border-[#737373] bg-[#141414] px-[10px] py-0'
      }
    >
      <Fragment>
        <div
          className='block w-full font-semibold leading-[24px] text-textDefault-third'
          // onClick={clickItemWatchlist.bind(null, item)}
        >
          {item?.symbol?.toUpperCase()}
        </div>
        <span className='flex flex-1 flex-col pt-1 text-right text-sm'>
          <span className='mb-[6px] box-border whitespace-nowrap'>
            <ChipTextCrypto opt={item} price={item?.close} title={item?.close} />
            <ChipTextCrypto opt={item} price={item?.close} title={item?.price_change_percent} isBg />
          </span>
        </span>
      </Fragment>
    </li>
  )
}

export default NewsWrapHeaderItem
