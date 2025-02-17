'use client'

import { useRouter } from 'next/navigation'

import { Button, Header, Input } from '@/components'

export const NameStep = () => {
  const title = `가입을 환영합니다:)\n불러드릴 이름을 알려주세요!`

  const router = useRouter()
  const handleNext = () => {
    router.push('/sign-up/hedge-type')
  }

  return (
    <>
      <div className="h-[65px] w-full pb-[8px] pt-[9px]">
        <Header.Title />
      </div>
      <div className="flex-center w-full gap-[4px] px-[8px]">
        <hr className="h-[4px] w-full rounded-sm border-none bg-piechart-1" />
        <hr className="h-[4px] w-full rounded-sm border-none bg-gray-1" />
      </div>
      <div className="flex-column-align h-[calc(100dvh-69px)] w-full px-[16px]">
        <div className="relative size-full">
          <h1 className="h1_bold mb-[48px] mt-[80px] whitespace-pre text-black">{title}</h1>
          <Input.Text name="name" placeholder="선택" maxLength={5} />
          <div className="absolute bottom-[16px] w-full">
            <Button text="다음" type="button" onClick={handleNext} />
          </div>
        </div>
      </div>
    </>
  )
}
