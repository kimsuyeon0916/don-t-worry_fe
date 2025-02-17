'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useSetAtom } from 'jotai'

import KaKaoLogin from '@/assets/kakao_login.png'
import Logo from '@/assets/logo.png'
import { useCheckExistUser } from '@/hooks'
import { nameAtom, usernameAtom } from '@/store'
import { readDeviceId } from '@/utils'

const ACCESS_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN as string

export const SignInStep = () => {
  const getUsername = () => {
    const urlParams = new URLSearchParams(window.location.search)
    return urlParams.get('username')
  }

  const setUsername = useSetAtom(usernameAtom)
  const setName = useSetAtom(nameAtom)

  const router = useRouter()
  const { mutate: checkExistUser } = useCheckExistUser({
    onSuccess: (res) => {
      if (res.username) {
        setUsername(res.username)
        return router.replace(`/sign-up/name`)
      }
      if (res.name) {
        setName(res.name)
        localStorage.setItem(ACCESS_TOKEN, res.accessToken)
      }
      router.replace(`/`)
    },
    onError: (error) => {
      console.log(error.message)
    },
  })

  useEffect(() => {
    const username = getUsername()
    const deviceId = readDeviceId()

    // 알림 기능과 연동 후 checkExistUser 호출
  }, [checkExistUser, readDeviceId])

  return (
    <>
      <div>
        <Image
          src={Logo}
          alt="logo"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <Link href="https://api.don-t-worry.com/oauth2/authorization/kakao">
        <Image src={KaKaoLogin} alt="kakao login" />
      </Link>
    </>
  )
}
