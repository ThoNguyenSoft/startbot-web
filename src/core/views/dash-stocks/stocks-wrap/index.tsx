import SuggestStockBase from '../mobile/news-wrap/SuggestStockBase'
import ContentStockWrap from './ContentStockWrap'

const StockWrap = () => {
  return (
    <div
      data-tut='reactour__iso'
      className='m-0 box-border h-[calc(100%-8px)] min-w-[298px] overflow-hidden rounded-[5px] border border-border-third bg-background-third'
    >
      <div className='flex h-full flex-col'>
        <ContentStockWrap />
        <SuggestStockBase />
      </div>
    </div>
  )
}

export default StockWrap
