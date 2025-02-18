'use client'
import { type PropsWithChildren } from 'react'
import { type SubmitHandler } from 'react-hook-form'
import { FormProvider } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useAtomValue } from 'jotai'

import { handleAllowNotification } from '@/apis'
import { hedgeTypeMap } from '@/constants'
import { HookformDevTools } from '@/HookformDevtools'
import { useSignUp, useSignupForm } from '@/hooks'
import { usernameAtom } from '@/store'
import { type SignUpForm } from '@/types'
import { readDeviceId } from '@/utils'

export const SignUpFormProvider = ({ children }: PropsWithChildren) => {
  const formMethod = useSignupForm()
  const { handleSubmit, control } = formMethod

  const username = useAtomValue(usernameAtom)

  const router = useRouter()

  const { mutate: signUp } = useSignUp({
    onSuccess: (userInfo) => {
      // 유저 정보 전역 관리하도록 코드 추가
      router.replace('/on-boarding')
    },
    onError: (error) => {
      console.log(error.message)
    },
  })

  const signUpHandler: SubmitHandler<SignUpForm> = async (formData) => {
    const token = (await handleAllowNotification()) as string // FCM 토큰 받아오기

    const signUpData = {
      ...formData,
      hedgeType: hedgeTypeMap[formData.hedgeType],
      username: username,
      token: token,
      deviceId: readDeviceId(),
    }
    signUp({ ...signUpData })
  }

  return (
    <FormProvider {...formMethod}>
      <form onSubmit={handleSubmit(signUpHandler)} className="flex-column size-full">
        {children}
      </form>
      <HookformDevTools control={control} />
    </FormProvider>
  )
}
