import type { UseMutationOptions } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'
import type { AxiosError } from 'axios'

import { checkExistUser, signUp } from '@/apis'
import type {
  CheckExistUserRequest,
  CheckExistUserResponse,
  SignUpRequest,
  SignUpResponse,
} from '@/types'

const ACCESS_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN as string

export const authKeys = {
  all: ['auth'] as const,
}

export const useSignUp = (
  options?: UseMutationOptions<SignUpResponse, AxiosError, SignUpRequest>,
) =>
  useMutation({
    mutationFn: signUp,
    ...options,
    onSuccess: async (data, ...rest) => {
      localStorage.setItem(ACCESS_TOKEN, data.accessToken)
      options?.onSuccess?.({ ...data }, ...rest)
    },
  })

export const useCheckExistUser = (
  options?: UseMutationOptions<CheckExistUserResponse, AxiosError, CheckExistUserRequest>,
) =>
  useMutation({
    mutationFn: checkExistUser,
    ...options,
  })
