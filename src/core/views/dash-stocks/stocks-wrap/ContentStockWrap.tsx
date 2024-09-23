// ** React

// ** Components

// ** Functions

// ** Hooks

// ** Icons

// ** Types
import companies from '@/core/configs/companies.json'
import { useWls } from '@/hooks/context/useWls'
import useControllerFilterWl from '@/hooks/controller/useControllerFilterWl'
import { Fragment } from 'react'
import ContentStockItem from './ContentStockItem'
import HeaderStockWrap from './header-stock-wrap'

const ContentStockWrap = () => {
  const { clickResetQuery } = useControllerFilterWl()
  const { myWls } = useWls()

  return (
    <Fragment>
      <HeaderStockWrap clickResetQuery={clickResetQuery} />
      {/* <div className='flex h-[calc(100vh-120px)] flex-col justify-between overflow-auto pb-[120px]'> */}
      <div className='flex h-[calc(100vh-120px)] flex-col justify-between overflow-auto'>
        <div className='flex w-full flex-1 flex-col overflow-auto'>
          <ul className='w-full flex-1 select-none overflow-y-auto overflow-x-hidden'>
            {myWls?.map(item => <ContentStockItem id={companies.filter(k => item === k.id)[0]?.id} key={item} />)}
          </ul>
        </div>
      </div>
    </Fragment>
  )
}

export default ContentStockWrap
