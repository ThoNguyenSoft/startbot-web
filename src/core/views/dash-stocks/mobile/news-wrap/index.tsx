// ** Hooks Party Imports
import useUrl from '@/hooks/utils/useUrl'

// ** Component Imports
import News from '../../news-wrap/News'
import NewsWrapHeader from './NewsWrapHeader'

const NewsWrapMB = () => {
  //state
  const { searchParams } = useUrl()
  const stock_code = searchParams.get('stock_code')

  return (
    <div className='fixed top-[60px] h-[calc(100vh-130px)] max-h-[calc(100vh-130px)] w-full overflow-auto md:border'>
      <div className='' data-tut='reactour__iso'>
        <NewsWrapHeader />
      </div>
      <News />
    </div>
  )
}

export default NewsWrapMB
