import { useForm } from 'react-hook-form'

import { type SignUpForm } from '@/types'

// validation 추가

export const useSignupForm = () => {
  const formMethod = useForm<SignUpForm>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    // resolver: zodResolver(schema),
  })
  return formMethod
}
