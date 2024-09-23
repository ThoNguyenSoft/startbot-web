import { Label as LabelRoot } from '@/core/components/atom/label'

const Label = ({
  name,
  isRequired,
  label,
  className
}: {
  name: string
  label: string
  isRequired?: boolean
  className?: string
}) => {
  return (
    <LabelRoot htmlFor={name} className={className}>
      {label}
      {isRequired && <span className='text-red-500'> *</span>}
    </LabelRoot>
  )
}

export default Label
