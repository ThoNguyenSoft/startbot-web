import useUrl from '@/hooks/utils/useUrl'
import { showErrors } from '@/lib/utils/utils'
import { yupResolver } from '@hookform/resolvers/yup'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useForm } from 'react-hook-form'

import * as yup from 'yup'

const schema = yup.object().shape({
  email: yup
    .string()
    .min(3, obj => showErrors('* Email', obj.value?.length, obj.min))
    .max(40, obj => showErrors('* Email', obj.value?.length, obj.max))
    .required(),
  password: yup.string().required(obj => showErrors('* Password', obj.value?.length, obj.min))
})
export type TSignUpSchema = yup.InferType<typeof schema>

const useController = () => {
  //hooks
  const { onCloseForm } = useUrl()
  const supabase = createClientComponentClient()

  const defaultValues = { email: '', password: '' }
  const {
    control,
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({ defaultValues, mode: 'onChange', resolver: yupResolver(schema) })
  const onSubmit = async (params: TSignUpSchema) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: params.email,
        password: params.password
      })
      console.log('data: ', data)
      if (error) {
        alert(error.message)
      } else {
        alert('Account has been registered successfully !')
        window.location.replace('/sign-in')
        // Redirect or perform any other action upon successful signup
      }
    } catch (error) {
      console.error('Error signing up:')
      alert('Registration Failed!')
    }
  }

  return { onCloseForm, onSubmit, control, register, errors, handleSubmit }
}
export default useController
