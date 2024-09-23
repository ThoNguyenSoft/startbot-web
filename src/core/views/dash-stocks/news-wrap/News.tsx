// ** React Imports
import { Fragment, useEffect, useState } from 'react'

// ** Third Party Imports
import InfiniteScroll from 'react-infinite-scroll-component'

// ** Value Imports
import { views } from '@/core/configs/app-config'

// ** Component Imports
import { Wrapper } from '@/core/components/molecules/Wrapper'
import { NewsContentItemV2 } from '@/core/components/molecules/news'
import { SelectCus } from '@/core/components/molecules/option'
import { SocialNewsWrap } from '../social-news-wrap'

// ** Hooks Imports
import { HeaderTabsNews } from '@/core/components/molecules/header'
import { LoadingBase } from '@/core/components/molecules/loading'
import RealtimeText from '@/core/components/molecules/text/realtime-text'
import { useWls } from '@/hooks/context/useWls'
import useTiming from '@/hooks/utils/useTiming'
import useNewsInfi from '@/hooks/watchlists/news/useNewsInfi'

const News = () => {
  const [view, setView] = useState<string>(views.news)
  const { timing, timeFromToOpt, onSubmit, control, handleSubmit, errors, watch, setWeekDay } = useTiming()
  const { myWls, stock_code } = useWls()

  // controller
  const {
    data: dataNews,
    page,
    fetchNextPage,
    isLoading,
    hasNextPage
  } = useNewsInfi({ id: stock_code, from: timing?.from, to: timing?.to, callBack: setWeekDay, timing: watch('timing') })

  useEffect(() => {
    if (page < 1) {
      console.log('change to w')
    }
  }, [page])

  return (
    <Fragment>
      <Wrapper className='mt-2 block overflow-auto'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='z-[1000]flex sticky top-0 w-full flex-col gap-2 bg-[#141414] text-white'
        >
          <HeaderTabsNews setView={setView} view={view} />

          {view === views.news && (
            <div className='flex justify-between'>
              <RealtimeText />
              <SelectCus
                control={control}
                optValue={timeFromToOpt}
                placeHolder='Select Date'
                required={true}
                name='timing'
                className='w-fit text-nowrap'
                errors={(errors as Record<string, string>)['timing']}
              />
            </div>
          )}
        </form>
        <div
          id='news-frame'
          className={
            view === views.news
              ? 'mt-4 h-[calc(100vh-160px)] overflow-auto'
              : 'mt-4 h-[calc(100vh-160px)] overflow-auto'
          }
        >
          {view === views.news ? (
            <Fragment>
              {!dataNews?.length ? 'No news yet' : ''}

              {dataNews?.length ? (
                <InfiniteScroll
                  className='flex w-full flex-1 flex-col rounded-[4px] border border-[#2C2C2C]'
                  dataLength={dataNews?.length}
                  next={fetchNextPage}
                  hasMore={!!hasNextPage}
                  scrollableTarget='news-frame'
                  loader={<LoadingBase isLoading={isLoading} />}
                >
                  {dataNews.map(item => (
                    <NewsContentItemV2 key={item.id} item={item} symbols={myWls} />
                  ))}
                </InfiniteScroll>
              ) : null}
            </Fragment>
          ) : (
            <SocialNewsWrap watch={watch} control={control} errors={errors} timing={timing} />
          )}
        </div>
      </Wrapper>
    </Fragment>
  )
}

export default News
