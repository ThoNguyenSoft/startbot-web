import EyeIcon2 from 'public/icons/EyeIcon2'

type TProps = {
  onClick: () => void
}

const ButtonFilter = ({ onClick }: TProps) => {
  return (
    <button
      className='flex h-fit max-h-7 cursor-pointer items-center gap-2.5 rounded-[40px] border border-[#737373] px-4 py-2 text-sm leading-[19px] transition delay-500 ease-in-out'
      onClick={onClick}
    >
      <EyeIcon2 /> Lọc
    </button>
  )
}

export default ButtonFilter
