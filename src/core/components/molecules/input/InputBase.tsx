import { Input } from '@/core/components/atom/input'
import { SearchIcon } from 'public/icons'
import { ChangeEvent, FC, KeyboardEvent } from 'react'

interface Props {
  onSearch?: (e: ChangeEvent<HTMLInputElement>) => void
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void
}
const InputBase: FC<Props> = ({ onSearch, onKeyDown }) => {
  return (
    <div className='relative'>
      <div className='absolute left-3 top-2/4 -translate-y-1/2'>
        <SearchIcon />
      </div>
      <Input type='input' onChange={onSearch} onKeyDown={onKeyDown} className='w-full pl-8' placeholder='Search...' />
    </div>
  )
}

export default InputBase
