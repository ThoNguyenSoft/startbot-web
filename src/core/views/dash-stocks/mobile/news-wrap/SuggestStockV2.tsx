// ** React Imports
import { Fragment } from 'react'

// ** Hooks Party Imports

// ** Component Imports
import { Input } from '@/core/components/atom/input'
import { InputIcon } from '@/core/components/molecules/input'
import { DialogBase } from '@/core/components/organisms/modal'
import useModal from '@/hooks/utils/useModal'
import useSearchWl from '@/hooks/utils/useSearch'
import { DeleteIcon, DeleteSearchIcon, SearchIcon } from 'public/icons'
import ListItemSearchWLV2 from '../../stocks-wrap/ListItemSearchWLV2'

const SuggestStockV2 = () => {
  const modal = useModal()
  const { clickItemWL, onClearText, handleKeyDown, handleChange, symbolOri, searchWL, searchText } = useSearchWl()

  return (
    <>
      <button onClick={modal.show}>
        <SearchIcon size={16} fill='#f2f2f2' />
      </button>
      {modal.visible && (
        <DialogBase modal={modal} className='h-[90%] rounded-xl bg-background-third'>
          <div className='size-full rounded-2xl'>
            <InputIcon
              isRequired
              classNameChild='top-[46px]'
              icon={
                <Fragment>
                  {searchText?.length === 0 ? (
                    <button type='button' className=''>
                      <SearchIcon size={20} />
                    </button>
                  ) : (
                    <button type='button' onClick={onClearText} className=''>
                      <DeleteSearchIcon size={12} />
                    </button>
                  )}
                </Fragment>
              }
            >
              <div className='mb-3 flex w-full items-center justify-between text-base font-bold text-white'>
                Watchlist{' '}
                <div onClick={modal.hide} className='flex h-full cursor-pointer items-start justify-center p-2 pt-1'>
                  <DeleteIcon size={15} />
                </div>
              </div>
              <Input
                className='w-full pr-4'
                placeholder={'Find crypto code'}
                value={searchText}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                error={''}
              />
            </InputIcon>
            <div className='mt-6 h-[280px] overflow-auto rounded-[5px] bg-[#1E1E1E]'>
              {searchText?.length > 0 ? (
                <ListItemSearchWLV2 data={searchWL} clickItemWL={clickItemWL} />
              ) : (
                <ListItemSearchWLV2 data={symbolOri.slice(0, 10) || []} clickItemWL={clickItemWL} />
              )}
            </div>
          </div>
        </DialogBase>
      )}
    </>
  )
}

export default SuggestStockV2
