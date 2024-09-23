// ** Component Imports
import News from './News'

const NewsWrap = () => {
  return (
    <div className='m-0 box-border block h-full max-h-[calc((100vh-70px))] min-h-full w-[calc((100%-298px)*.55)] gap-1 overflow-auto rounded-[8px] py-1'>
      <div className='mb-3 px-3 text-sm text-[#FFFFFF]'>
        <div className='text-2xl font-semibold leading-[32px] text-[#ffffff]'>Watchlist</div>
      </div>
      <News />
    </div>
  )
}

export default NewsWrap
