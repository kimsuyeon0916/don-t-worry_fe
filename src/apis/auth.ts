import axios from 'axios'

import type {
  CheckExistUserRequest,
  CheckExistUserResponse,
  SignUpRequest,
  SignUpResponse,
} from '@/types'

import { api } from '.'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
const authConfig = {
  baseURL: BASE_URL,
}

export const signUp = async (request: SignUpRequest) => {
  const res = await axios.post<SignUpResponse>(`/signup`, request, authConfig)

  const accessToken: string = res.headers['authorization']

  return { ...res.data, accessToken }
}

export const checkExistUser = async (request: CheckExistUserRequest) => {
  const res = await axios.post<CheckExistUserResponse>(`/auth/user/exists`, request, authConfig)

  const accessToken: string = res.headers['authorization']

  return { ...res.data, accessToken }
}

export const issueToken = async () => {
  return await api.get('/refresh')
}
