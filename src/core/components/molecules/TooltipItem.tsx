import InfoIcon from 'public/icons/InfoIcon'

const TooltipItem = ({ label }: { label: string }) => {
  return (
    <p className='flex w-fit max-w-[300px] items-center gap-2'>
      <span>
        <InfoIcon />
      </span>
      {label}
    </p>
  )
}

export default TooltipItem
