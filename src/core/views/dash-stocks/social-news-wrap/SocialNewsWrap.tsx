/* eslint-disable @typescript-eslint/no-explicit-any */
// ** React Imports
import { Fragment } from 'react'

// ** Third Party Imports

// ** Value Imports

// ** Component Imports
import { ListCommentNewsLargeWl } from '@/core/components/molecules/list'

// ** Hooks Imports
import { useWls } from '@/hooks/context/useWls'
import useSoDiscusInfiWl from '@/hooks/social-network/useSoDiscusInfiWl'

type Props = {
  className?: string
  control: any
  watch: any
  timing: any
  errors: any
}

const SocialNewsWrap = ({ control, errors, timing, watch }: Props) => {
  const { myWls } = useWls()

  // controller
  const {
    data: dataDiscus,
    fetchNextPage: fetchNextSoPage,
    hasNextPage: hasNextSoPage,
    isLoading: isLoadingSo
  } = useSoDiscusInfiWl({ id: myWls, from: timing?.from, to: timing?.to })

  return (
    <Fragment>
      <Fragment>
        <div className='mb-4 flex gap-3 text-2xl font-semibold text-white'></div>
      </Fragment>
      <div className='mt-4 rounded-[8px] pb-6'>
        <ListCommentNewsLargeWl
          cnContent={dataDiscus?.length > 2 ? 'flex justify-center' : ''}
          isLoading={isLoadingSo}
          data={dataDiscus}
          fetchNextPage={fetchNextSoPage}
          hasNextPage={hasNextSoPage}
        />
      </div>
    </Fragment>
  )
}

export default SocialNewsWrap
