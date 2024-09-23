import React from 'react'

export type PrimaryProps = {
  dataPro?: {
    first_name?: string
  }
  showName?: boolean
}

const ProAvatar: React.FC<PrimaryProps> = ({ dataPro, showName }) => {
  return (
    <button className='flex items-center justify-center gap-2'>
      <div className='flex size-8 items-center justify-center rounded-full bg-[#1C2C43] text-xl font-bold text-white outline-none'>
        {dataPro?.first_name?.charAt(0)}
      </div>
      {showName && <span className='text-sm font-normal text-white'>{dataPro?.first_name}</span>}
    </button>
  )
}

export default ProAvatar
