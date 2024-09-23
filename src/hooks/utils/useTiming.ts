// ** React Imports
import { useEffect, useState } from 'react'

// ** Third Party Imports
import { yupResolver } from '@hookform/resolvers/yup'
import { FieldValues, useForm } from 'react-hook-form'
import * as yup from 'yup'

// ** Values Imports
import { timeFromToOpt } from '@/core/configs/localStore'

// ** Func Imports
import { getEncodedTimeFromNow } from '@/lib/utils/format'

const schema = yup.object().shape({
  timing: yup.string()
})

const useTiming = (isWeek?: boolean) => {
  const defaultColumn = {
    // timing: undefined
    // timing: 'last 7d'
    timing: !isWeek ? 'last 24h' : 'last 7d'
  }
  const [flag, setFlag] = useState(false)
  const [timing, setTiming] = useState({ from: '', to: '' })
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }
  } = useForm({ defaultValues: defaultColumn, mode: 'onChange', resolver: yupResolver(schema) })
  const onSubmit = (value: FieldValues) => {
    // console.log('value', value)
  }

  // func
  const setWeekDay = () => {
    if (!flag) {
      setValue('timing', 'last 7d')
      setFlag(true)
    }
  }

  const resetDay = () => {
    setFlag(false)
    setValue('timing', 'last 24h')
  }

  const getLabelTime = () => {
    const timeRef = timeFromToOpt.filter(item => item.value === watch('timing'))[0].label
    return timeRef
  }

  useEffect(() => {
    const timeVal = watch('timing')
    if (!timeVal) return
    setTiming({
      from: getEncodedTimeFromNow(timeVal),
      to: getEncodedTimeFromNow('now')
    })
    if (timeVal === 'default')
      setTiming({
        from: '',
        to: ''
      })
  }, [watch('timing')])

  return {
    timing,
    getLabelTime,
    onSubmit,
    watch,
    setWeekDay,
    setValue,
    resetDay,
    control,
    handleSubmit,
    errors,
    timeFromToOpt
  }
}

export default useTiming
