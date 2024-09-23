import { TWatchlistItem } from '@/types/forms/news'
import { get } from 'lodash'
import { FC } from 'react'

type Props = {
  title: string
  price: string
  opt: TWatchlistItem
  isBg?: boolean
}

const ChipTextCrypto: FC<Props> = ({ opt, isBg }) => {
  // const priceCur = new Intl.NumberFormat('en-US', {
  //   style: 'currency',
  //   currency: 'USD'
  // }).format(get(opt, 'market_data.current_price.usd', 0))
  const formatCurrency = (value: number): string => {
    if (value >= 1) {
      return `$${value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
    } else {
      return `$${value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 8 })}`
    }
  }

  // const priceCur = get(opt, 'market_data.current_price.usd', 0)
  const priceCur = formatCurrency(get(opt, 'market_data.current_price.usd', 0))

  const pricePerChange = get(opt, 'market_data.market_cap_change_percentage_24h_in_currency.usd', 0)
  return (
    <>
      {/* </div>'#F23AFF'
<div>'#00C9FF'
<div>'#0BDF39'
<div>'#F23645'
<div>'#FDFF12' */}

      {!isBg ? (
        <span
          className='mr-[4px] truncate leading-[24px]'
          style={{
            color: pricePerChange === 0 ? '#FDFF12' : pricePerChange > 0 ? '#0BDF39' : '#F23645'
          }}
        >
          {priceCur}
        </span>
      ) : (
        <span
          className={`inline-block h-5 w-fit min-w-[45px] rounded-[4px] px-1 text-center font-semibold leading-[20px] text-stock`}
          style={{
            backgroundColor: pricePerChange === 0 ? '#FDFF12' : pricePerChange > 0 ? '#0BDF39' : '#F23645',
            color: Number(opt?.price_change_percent) !== 0 ? undefined : '#000000'
          }}
        >
          {pricePerChange.toFixed(2)}%
        </span>
      )}
    </>
  )
}

export default ChipTextCrypto
