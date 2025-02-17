'use client'
import { useFormContext } from 'react-hook-form'

import { BottomSheet, Button, Header, Input } from '@/components'
import { hedgeTypeKeys } from '@/constants'
import { useBoolean } from '@/hooks'

export const HedgeTypeStep = () => {
  const {
    formState: { errors },
    watch,
    setValue,
  } = useFormContext()

  const [isShowing, toggleShowing] = useBoolean(false)

  const title = `선호하는 리스크 관리 수준을\n선택해주세요!`

  const handleClick = (hedgeType: string) => {
    setValue('hedgeType', hedgeType)
    toggleShowing()
  }

  return (
    <>
      <div className="w-full pb-[8px] pt-[9px]">
        <Header.Sub />
      </div>
      <div className="flex-center w-full gap-[4px] px-[8px]">
        <hr className="h-[4px] w-full rounded-sm border-none bg-gray-1" />
        <hr className="h-[4px] w-full rounded-sm border-none bg-piechart-1" />
      </div>
      <div className="flex-column-align h-[calc(100dvh-69px)] w-full px-[16px]">
        <div className="relative size-full">
          <h1 className="h1_bold mb-[48px] mt-[80px] whitespace-pre text-black">{title}</h1>
          <Input.Select name="hedgeType" placeholder="선택" onClick={toggleShowing} />
          <div className="absolute bottom-[16px] w-full">
            <Button text="완료" type="submit" isDisable={!watch('hedgeType')} />
          </div>
        </div>
      </div>
      <BottomSheet onClickScrim={toggleShowing} isShowing={isShowing} variant="short">
        <Header.Title title="리스크 관리 수준" canClose onClose={toggleShowing} />
        <ul className="flex-column-align mt-[4px] w-full">
          {hedgeTypeKeys.map((hedgeType) => (
            <li
              key={hedgeType}
              className="flex-align body2_reg w-full px-[16px] py-[19px] text-black"
              onClick={() => handleClick(hedgeType)}
              onKeyDown={() => handleClick(hedgeType)}
              role="presentation"
            >
              {hedgeType}
            </li>
          ))}
        </ul>
      </BottomSheet>
    </>
  )
}
