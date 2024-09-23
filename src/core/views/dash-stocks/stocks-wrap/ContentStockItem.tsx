// ** React

// ** Components

// ** Functions

// ** Hooks

// ** Icons

// ** Types
import ChipTextCrypto from '@/core/components/molecules/chip/chip-text-crypto'
import useGetRealtimeCryptPrice from '@/hooks/watchlists/useGetRealtimeCryptPrice'
import { get } from 'lodash'

const ContentStockItem = ({ id }: { id: string }) => {
  const { data: item } = useGetRealtimeCryptPrice(id)
  const pricePerChange = get(item, 'market_data.market_cap_change_percentage_24h_in_currency.usd', 0)

  return (
    <li
      className={
        // stock_code === item?.symbol || screener_code?.includes(item?.symbol)
        // ? 'relative my-1 box-border flex h-[60px] w-full items-center justify-center bg-[#1C2C43] px-[10px] py-0 font-semibold' :
        'relative my-1 box-border flex h-[60px] w-full items-center justify-center px-[10px] py-0 font-semibold'
      }
    >
      <div className='min-w-0 flex-[1_1_128px] overflow-hidden'>
        <span className='block w-full truncate leading-[24px] text-textDefault-third'>{item?.name?.toUpperCase()}</span>
        <span className='block w-full max-w-[100px] gap-1 truncate text-[13px] text-textDefault-fourth'>
          {item?.symbol}
        </span>
      </div>
      <span className='ml-2 flex flex-1 flex-col pt-1 text-right text-sm transition delay-500 ease-in-out'>
        <ChipTextCrypto opt={item} price={item?.close} title={item?.close} />
        <span
          className='mb-[6px] box-border whitespace-nowrap text-xs'
          style={{
            color: pricePerChange === 0 ? '#FDFF12' : pricePerChange > 0 ? '#0BDF39' : '#F23645'
          }}
        >
          <span className='mr-[4px] truncate leading-[24px]'>
            {+pricePerChange >= 0 ? '+' : ''}
            {pricePerChange.toFixed(2) + '%'}
          </span>
          {/* <ChipTextStock opt={item} price={item?.close} title={item?.price_change_percent} isBg /> */}
          {/* <ChipTextCrypto opt={item} price={item?.close} title={item?.close} /> */}
        </span>
      </span>
    </li>
  )
}

export default ContentStockItem
