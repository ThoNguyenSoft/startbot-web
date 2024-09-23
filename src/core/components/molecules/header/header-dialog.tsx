'use client'
import { DeleteIcon } from 'public/icons'
import { ReactNode } from 'react'
import { DividerFull } from '../../atom'

type Props = {
  title?: string
  titleHeader?: string
  PrefixTitle?: ReactNode
  children?: ReactNode
  className?: string
  onClick?: () => void
}

const HeaderDialog = ({
  titleHeader = 'STARTBOT•AI help you understand every problem',
  PrefixTitle,
  onClick
}: Props) => {
  return (
    <div className=''>
      <div className='mb-3 flex w-full items-center justify-between text-xs text-dividerTitle'>
        {/* {titleHeader}{' '} */}
        <div></div>{' '}
        {onClick && (
          <div onClick={onClick} className='flex h-full cursor-pointer items-start justify-center p-2 pt-1'>
            <DeleteIcon size={15} />
          </div>
        )}
      </div>
      <DividerFull className='mb-2 pt-0' />
      {PrefixTitle && PrefixTitle}
    </div>
  )
}

export default HeaderDialog
