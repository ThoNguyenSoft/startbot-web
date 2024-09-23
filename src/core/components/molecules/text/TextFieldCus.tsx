/* eslint-disable @typescript-eslint/no-unused-vars */

import { FormField } from '@/core/components/atom/form'
import { Input } from '@/core/components/atom/input'
import { cn } from '@/lib/utils/utils'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TODO = any

const TextFieldCus = ({
  control,
  name,
  label,
  classNameBox,
  type = 'text',
  placeholder,
  errors,
  required,
  fieldProps,
  className
}: TODO) => {
  return (
    <FormField
      control={control}
      name={name}
      rules={{ required: required }}
      render={({ field: { value, onChange } }) => (
        <div className={cn('', classNameBox)}>
          <Input
            placeholder={placeholder}
            value={value}
            label={label}
            type={type}
            isRequired={required}
            onChange={onChange}
            error={errors ? errors?.message : null}
            className={className}
            {...fieldProps}
            // size={size}
          />
        </div>
      )}
    />
  )
}

export default TextFieldCus
