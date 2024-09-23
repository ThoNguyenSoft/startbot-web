// ** React Imports
import { Fragment } from 'react'

// ** Icons Imports
import { DeleteSearchIcon, SearchIcon } from 'public/icons'

// ** Hooks Party Imports
import OutsideAlerter from '@/hooks/utils/useOutsideAlerter'

// ** Component Imports
import { Input } from '@/core/components/atom/input'
import { InputIcon } from '@/core/components/molecules/input'
import useSearchWl from '@/hooks/utils/useSearch'
import ListItemSearchWL from '../../stocks-wrap/ListItemSearchWL'

const SuggestStockBase = () => {
  const {
    clickItemWL,
    onClearText,
    handleKeyDown,
    handleChange,
    handleToogle,
    symbolOri,
    searchWL,
    searchText,
    settoogle,
    toogle
  } = useSearchWl()

  return (
    <div className='relative p-2 pb-3'>
      {toogle && (
        <OutsideAlerter callBack={() => settoogle(false)}>
          <div
            className='absolute left-0 top-[-290px] h-[290px] w-[280px] overflow-auto rounded-2xl border border-[#737373] bg-bgElevated'
            onClick={handleToogle}
          >
            {searchWL?.length > 0 ? (
              <ListItemSearchWL data={searchWL} clickItemWL={clickItemWL} />
            ) : (
              <ListItemSearchWL data={symbolOri.slice(0, 5) || []} clickItemWL={clickItemWL} />
            )}
          </div>
        </OutsideAlerter>
      )}
      <InputIcon
        isRequired
        icon={
          <Fragment>
            {searchText?.length === 0 ? (
              <button type='button' className='mt-1'>
                <SearchIcon size={20} />
              </button>
            ) : (
              <button type='button' onClick={onClearText} className='mt-1'>
                <DeleteSearchIcon size={12} />
              </button>
            )}
          </Fragment>
        }
      >
        <Input
          className='w-full pr-4 text-[14px] text-[#ffffff]'
          placeholder={'Find crypto code'}
          value={searchText}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          error={''}
          onClick={handleToogle}
        />
      </InputIcon>
    </div>
  )
}

export default SuggestStockBase
