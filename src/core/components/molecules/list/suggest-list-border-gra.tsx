type Props = {
  data: { title: string; content: string }[]
  className?: string
}
const SuggestListBorderGra = ({ data, className }: Props) => {
  return (
    <div className={className}>
      <div className='mb-4 text-base font-semibold text-white'>Event Analysis</div>
      <div className='overflow-auto'>
        <ul className='flex w-[660px] gap-2 sm:w-full'>
          {data.map((item, index) => (
            <li
              key={index}
              className='w-fit max-w-[234px] cursor-pointer rounded-[8px] border bg-gradient-to-b from-[#FFFA7A] to-[#5DB9DD] p-px'
            >
              <div className='size-full rounded-[8px] bg-background-third p-4'>
                <div className='mb-[6px] text-base font-semibold text-white'>{item.title}</div>
                <div className='text-xs leading-[18px] text-[#8C8C8C]'>{item.content}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default SuggestListBorderGra
