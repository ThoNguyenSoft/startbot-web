// ** React Party Imports
import { Fragment } from 'react'

import companies from '@/core/configs/companies.json'
// ** Hooks Party Imports

// ** Icons Imports

// ** Component Imports
import { useWls } from '@/hooks/context/useWls'
import useControllerFilterWl from '@/hooks/controller/useControllerFilterWl'
import HeaderStockWrap from '../../stocks-wrap/header-stock-wrap'
import NewsWrapHeaderItem from './NewsWrapHeaderItem'

const NewsWrapHeader = () => {
  const { clickResetQuery } = useControllerFilterWl()
  const { myWls } = useWls()

  return (
    <Fragment>
      <HeaderStockWrap clickResetQuery={clickResetQuery} />
      <div className='flex w-full gap-3 overflow-auto pb-[30px] pl-3 pr-2'>
        {myWls?.map(item => <NewsWrapHeaderItem key={item} id={companies.filter(k => item === k.id)[0]?.id} />)}
      </div>
      {/* <SuggestInsight /> */}
    </Fragment>
  )
}

export default NewsWrapHeader
